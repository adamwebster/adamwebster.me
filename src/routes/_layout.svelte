<script>
  import Header from "../components/Header/Header.svelte";
  import Footer from "../components/Footer/Footer.svelte";
</script>

<style>
  .awm-page-body {
    width: 1080px;
    margin: 0 auto;
  }
</style>

<Header />
<div class="awm-page-body">
  <slot />
</div>
<Footer />
