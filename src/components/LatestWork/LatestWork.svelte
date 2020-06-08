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
    box-sizing: border-box;
    flex-flow: column;
    border-bottom: solid 1px var(--border-color);
    padding-bottom: 30px;
  }

  .awm-section-inner {
    flex-flow: row;
    display: flex;
  }

  .awm-list-of-portfolio-items {
    margin-left: 30px;
    flex: 1 1;
    display: grid;
    grid-template-rows: 270px 270px;
    grid-template-columns: 250px 250px 250px;
    grid-gap: 20px;
  }

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
  width:250px;
  height:250px;
  }

    .awm-list-more {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 20px;
  }
</style>

<section class="awm-section-wrapper" id="LatestWork">
  <div class="awm-section-inner">

  <div>
    <h1>
      My Latest
      <br />
      Work
    </h1>
  </div>
  <div class="awm-list-of-portfolio-items">
    <div class="awm-list-item">
      <div class="awm-list-item-image-wrapper">
        <img
          alt="img1"
          src="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
      </div>
      Title of Work
    </div>
    <div class="awm-list-item">
      <div class="awm-list-item-image-wrapper">
        <img
          alt="img2"
          src="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />
      </div>
      Title of Work
    </div>
    <div class="awm-list-item">
      <div class="awm-list-item-image-wrapper">
        <img
          alt="img1"
          src="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
      </div>
      Title of Work
    </div>
    <div class="awm-list-item">
      <div class="awm-list-item-image-wrapper">
        <img
          alt="img1"
          src="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />
      </div>
      Title of Work
    </div>
    <div class="awm-list-item">
      <div class="awm-list-item-image-wrapper">
        <img
          alt="img1"
          src="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
      </div>
      Title of Work
    </div>
    <div class="awm-list-item">
      <div class="awm-list-item-image-wrapper">
        <img
          alt="img1"
          src="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />
      </div>
      Title of Work
    </div>
  </div>
  </div>
  <div class="awm-list-more">
    <Button>Read More</Button>
  </div>
</section>
