<script>
  import Icon from "fa-svelte";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
  export let icon = null;
  export let value;
  export let placeholder;
  const IconClass = icon ? 'awm-input-with-icon' :'';
</script>

<style>
  input {
    border: solid 1px var(--border-color);
    height: 34px;
    border-radius: 5px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
  }
  .awm-input-wrapper{
      position: relative;
  }
  .awm-input-icon {
    position: absolute;
    color: var(--border-color);
    height: calc(100% - 2px);
    top: 1px;
    padding: 7px;
    box-sizing: border-box;
  }

  .awm-input-with-icon{

      padding-left: 35px;
  }
</style>

<div class="awm-input-wrapper">
{#if icon}
  <span class="awm-input-icon">
    <Icon {icon} />
  </span>
  {/if}
  <input bind:value on:blur placeholder={placeholder} type="tex" class={IconClass} on:change />
</div>
