<script>
  import Logo from "../Logo/Logo.svelte";
  import MainNav from "../MainNav/MainNav.svelte";
</script>

<style>
  .awm-header {
    border-bottom: solid 1px var(--border-color);
    height: 50px;
    box-sizing: border-box;
  }
  .awm-header-inner {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex: 1 1;
    height: 50px;
  }

  @media only screen and (max-width: 1080px) {
    .awm-header-inner {
      width: 100%;
    }
  }
</style>

<header class="awm-header">
  <div class="awm-header-inner">
    <Logo classNames="awm-header-logo" width="30px" />
    <MainNav />
  </div>
</header>
