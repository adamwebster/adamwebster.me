<script>
  import Button from "../Button/Button.svelte";
</script>

<style>
  h1 {
    font-size: 40px;
    line-height: 1;
    margin: 0;
    font-weight: 300;
    text-transform: uppercase;
  }

  .awm-section-wrapper {
    display: flex;
    width: 100%;
    margin-bottom: 60px;
    height: 400px;
    box-sizing: border-box;
    flex-flow: column;
  }

  .awm-section-inner {
    flex-flow: row;
    display: flex;
  }
  .awm-list-of-posts {
    margin-right: 30px;
    flex: 1 1;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .awm-list-item {
    background-color: #fff;
    border: solid 1px var(--border-color);
    border-radius: 5px;
  }

  .awm-list-item img {
    object-fit: cover;
    width: 100%;
    height: 150px;
  }

  .awm-list-item-post-content {
    padding: 10px;
  }
  .awm-list-more {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 20px;
  }

  h2 {
    margin: 0;
  }
</style>

<section class="awm-section-wrapper" id="LatestBlogPosts">
  <div class="awm-section-inner">
    <div class="awm-list-of-posts">
      <div class="awm-list-item">
        <img
          alt="img1"
          src="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
        <article class="awm-list-item-post-content">
          <h2>Title of the Post</h2>
          <div>02/02/2020</div>
          <p>
            This is some text of a blog post and would either be longer or
            shorter then this...
          </p>
        </article>
      </div>
      <div class="awm-list-item">
        <img
          alt="img1"
          src="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
        <article class="awm-list-item-post-content">
          <h2>Title of the Post</h2>
          <div>02/02/2020</div>
          <p>
            This is some text of a blog post and would either be longer or
            shorter then this...
          </p>
        </article>
      </div>
      <div class="awm-list-item">
        <img
          alt="img1"
          src="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
        <article class="awm-list-item-post-content">
          <h2>Title of the Post</h2>
          <div>02/02/2020</div>
          <p>
            This is some text of a blog post and would either be longer or
            shorter then this...
          </p>
        </article>
      </div>
    </div>
    <div>
      <h1>
        Latest Blog
        <br />
        Posts
      </h1>
    </div>
  </div>
  <div class="awm-list-more">
    <Button>Read More</Button>
  </div>
</section>
