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
    height: 250px;
  }

  .awm-list-item img:hover {
    filter: grayscale(0.5);
  }
</style>

<div class="awm-list-item">
  <div class="awm-list-item-image-wrapper">
    <img alt={title} src={imageURL} />
  </div>
  {title}
</div>
