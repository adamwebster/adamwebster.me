<script>
  import Button from "../Button/Button.svelte";
  import BlogPost from "./BlogPost.svelte";
  const HandleClick = () => {
    alert("click");
  };
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
  .awm-list-more {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 20px;
  }

  @media only screen and (max-width: 768px) {
    .awm-list-of-posts,
    .awm-section-wrapper {
      
     display: block;
    }
  }
  @media only screen and (max-width: 600px) {
    .awm-list-of-posts {
      margin-top: 20px;
      margin-left: 0;
      margin-right: 0;
    }
    .awm-section-inner {
      flex-flow: column-reverse;
    }
  }
</style>

<section class="awm-section-wrapper" id="LatestBlogPosts">
  <div class="awm-section-inner">
    <div class="awm-list-of-posts">
      <BlogPost />
      <BlogPost />
      <BlogPost />
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
    <Button primary on:click={HandleClick}>Read More</Button>
  </div>
</section>
