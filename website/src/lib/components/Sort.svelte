<style>
  button{
    background-color: transparent;
    border: none;
  }
</style>

<script lang="ts">
  import Arrow from "../../assets/Arrow.svg.svelte";

  export let descending:boolean
</script>

<div>
  <button on:click class=".sub-text"> sort <Arrow direction={descending ? "up" : "down"}/></button>
</div>