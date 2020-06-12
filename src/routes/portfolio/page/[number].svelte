<script context="module">
import {PortfolioSettings} from '../../../SiteSettings.js';
  export function preload({ params, query }) {
    return this.fetch(`../portfolio.json`)
      .then(r => r.json())
      .then(posts => {
        const isLastPage = posts.length <= PortfolioSettings.postsPerPage * params.number;
        const pagedPosts  = posts.slice(PortfolioSettings.postsPerPage * (params.number - 1), PortfolioSettings.postsPerPage * (params.number - 1) + PortfolioSettings.postsPerPage);
        return { isLastPage, posts: pagedPosts, pageNumber: parseInt(params.number) };
      });
  }
</script>

<script>
  export let posts;
  export let pageNumber;
  export let isLastPage;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Page {pageNumber}</h1>
<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

    <li>
      <a rel="prefetch" href="portfolio/{post.category}/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
{#if pageNumber > 1}
<a href="/portfolio/page/{pageNumber - 1}">Previous Page</a>
{/if}
{#if !isLastPage}
<a href="/portfolio/page/{pageNumber + 1}">Next Page</a>
{/if}
