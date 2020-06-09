<script>
  export let imageURL;
  export let title = "Title of Work";
</script>

<style>
  .awm-list-item {
    border-radius: 5px;
    background-size: cover;
    text-align: center;
  }

  .awm-list-item-image-wrapper {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    overflow: hidden;
    border: solid 1px var(--border-color);
  }
  .awm-list-item img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .awm-list-item img:hover {
    filter: grayscale(0.5);
  }

  @media only screen and (max-width: 1080px) {
    .awm-list-item-image-wrapper,
    .awm-list-item img {
      width: calc(24vw - 20px);
      height: calc(24vw - 20px);
    }
  }

    @media only screen and (max-width: 768px) {
    .awm-list-item-image-wrapper,
    .awm-list-item img {
      width: calc(33vw - 20px);
      height: calc(33vw - 20px);
    }
  }

   @media only screen and (max-width: 600px) {
  .awm-list-item-image-wrapper,
    .awm-list-item img {
      width: calc(33vw - 20px);
      height: calc(33vw - 30px);
    }
   }
</style>

<div class="awm-list-item">
  <div class="awm-list-item-image-wrapper">
    <img alt={title} src={imageURL} />
  </div>
  {title}
</div>
