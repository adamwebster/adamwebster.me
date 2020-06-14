<script>
  export let categories = [];
</script>

<style>
  h2 {
    text-transform: uppercase;
    font-weight: 200;
  }

  .awm-category-list {
    min-width: 200px;
    margin-right: 30px;
  }

  .awm-category-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .awm-category-list ul li {
    background-color: #ccc;
    border: solid 1px #666;
    color: #666;
    margin: 10px 10px 10px 0px;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
  }
</style>

<div class="awm-category-list">
  <h2>Portfolio Categories</h2>
  <ul>
    {#each categories as category}
      <li
        style="background-color: {category.bgColor}; color: {category.borderColor};
        border:solid 1px ${category.borderColor}">
        {category.name}
      </li>
    {/each}
  </ul>

</div>
