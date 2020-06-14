<script context="module">
  import { PortfolioSettings } from "../../SiteSettings.js";
  import Button from "../../components/Button/Button.svelte";
  import CategoryList from "../../components/CategoryList/CategoryList.svelte";

  export function preload({ params, query }) {
    return this.fetch(`portfolio.json`)
      .then(r => r.json())
      .then(posts => {
        const isLastPage = posts.length <= PortfolioSettings.postsPerPage * 1;
        const pagedPosts = posts.slice(0, PortfolioSettings.postsPerPage);
        return { isLastPage, posts: pagedPosts };
      });
  }
</script>

<script>
  export let posts;
  export let isLastPage;
</script>

<style>
  #awm-portfolio {
    margin-top: 30px;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 40px;
  }

  .awm-portfolio-wrapper {
    display: flex;
    margin-top: 50px;
  }

  .awm-portfolio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .awm-portfolio-featured-image-wrappper {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    overflow: hidden;
    border: solid 1px var(--border-color);
  }

  .awm-portfolio-featured-image-wrappper img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .awm-portfolio-item-title {
    width: 100%;
    text-align: center;
    display: inline-block;
  }

  .awm-portfolio-paging {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
</style>

,
<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<section id="awm-portfolio">
  <h1>Portfolio</h1>
  <div class="awm-portfolio-wrapper">
    <CategoryList categories={PortfolioSettings.categories} />
    <div class="awm-portfolio-grid">
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
        <div>
          {#if post.featuredImage}
            <div class="awm-portfolio-featured-image-wrappper">
              <a rel="prefetch" href="portfolio/{post.category}/{post.slug}">

                <img
                  alt="{post.title} featured image"
                  src={post.featuredImage} />
              </a>

            </div>
          {/if}
          <span class="awm-portfolio-item-title">{post.title}</span>

        </div>
      {/each}
    </div>
  </div>
</section>
<div class="awm-portfolio-paging">
  {#if !isLastPage}
    <Button on:click={() => (window.location.href = '/portfolio/page/2')}>
      Next Page
    </Button>
  {/if}
</div>
