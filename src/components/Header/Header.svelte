<script>
  import Logo from "../Logo/Logo.svelte";
</script>

<style>
  .awm-header {
    border-bottom: solid 1px var(--border-color);
  }
  .awm-header-inner {
    width: 1080px;
    margin: 0 auto;
  }
</style>

<header class="awm-header">
  <div class="awm-header-inner">
    <Logo classNames="awm-header-logo" width="30px" />
  </div>
</header>
