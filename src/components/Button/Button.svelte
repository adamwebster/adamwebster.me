<script>
  export let primary = false;
  const primaryClass = primary ? "primary" : "";
</script>

<style>
  button {
    width: auto;
    display: inline-block;
    border: solid 1px var(--primary-color);
    color: var(--primary-color);
    border-radius: 5px;
    padding: 10px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: transparent;
  }
  button:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
  }
  button.primary {
    background-color: var(--primary-color);
    color: var(--background-color);
  }
  button.primary:hover {
    filter: brightness(85%);
  }
</style>

<button on:click class={primaryClass}>
  <slot />
</button>
