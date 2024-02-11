<style>
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: Cairo;
  }
</style>

<script lang="ts">
  import Arrow from "../../assets/Arrow.svg.svelte";

  export let descending:boolean
</script>

<div>
  <button on:click class=".sub-text"> {`sort ${descending ? "newest": "oldest"}` } <Arrow direction="down"/></button>
</div>