<script>
  import Logo from "../Logo/Logo.svelte";
  import MainNav from "../MainNav/MainNav.svelte";
  import TextInput from "../TextInput/TextInput.svelte";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";

  let SearchValue = "";
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

  .SearchBox {
    flex: 1 1;
    padding: 0 10px;
  }

  .awm-search-input-wrapper {
    max-width: 300px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1080px) {
    .awm-header-inner {
      width: 100%;
    }
  }
</style>

<header class="awm-header">
  <div class="awm-header-inner">
    <a href="/">
      <Logo classNames="awm-header-logo" width="30px" />
    </a>
    <div class="SearchBox">
      <div class="awm-search-input-wrapper">
        <TextInput icon={faSearch} bind:value={SearchValue} />
      </div>
    </div>
    <MainNav />
  </div>
</header>
