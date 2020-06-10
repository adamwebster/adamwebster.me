<script>
  import Header from "../components/Header/Header.svelte";
  import Footer from "../components/Footer/Footer.svelte";
</script>

<style>
  .awm-page-body {
    width: 1080px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1080px) {
  .awm-page-body {
	width: 100%;
	padding: 0 10px;
	box-sizing: border-box;
  }
}
</style>

<Header />
<div class="awm-page-body">
  <slot />
</div>
<Footer />
