<script>
  import Button from "../Button/Button.svelte";
  import LatestWorkItem from "./LatestWorkItem.svelte";
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
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  .awm-list-more {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 20px;
  }

   @media only screen and (max-width: 1080px) {
   .awm-list-of-portfolio-items { 
    grid-template-rows:repeat(2, calc(25vw - 20px));
    grid-template-columns: repeat(3, calc(25vw - 20px));
  }
  
}
  @media only screen and (max-width: 768px) {
   .awm-list-of-portfolio-items { 
    grid-template-rows: 33vw 33vw;
    grid-template-columns: 33vw 33vw;
  }
  }
 @media only screen and (max-width: 600px) {
   .awm-section-inner { 
    flex-flow: column;
  }
     .awm-list-of-portfolio-items { 
       margin-top: 20px;
       margin-left: 0;
       width: 100%;
    grid-template-rows:repeat(2, calc(33vw - 20px));
    grid-template-columns: repeat(3, calc(33vw - 20px));
  }
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
      <LatestWorkItem
        title="Testing Title Property"
        imageURL="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
      <LatestWorkItem
        imageURL="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />
      <LatestWorkItem
        imageURL="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
      <LatestWorkItem
        imageURL="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />
      <LatestWorkItem
        imageURL="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
      <LatestWorkItem
        imageURL="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />

    </div>
  </div>
  <div class="awm-list-more">
    <Button primary>Read More</Button>
  </div>
</section>
