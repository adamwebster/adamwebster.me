<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        const filteredPostByCategory = posts.filter(
          post => post.category === params.category
        );
        return {categoryName: params.category, posts: filteredPostByCategory };
      });
  }
</script>

<script>
  export let posts;
  export let categoryName;
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

<h1>{categoryName} posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

    <li>
      <a rel="prefetch" href="blog/{post.category}/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
