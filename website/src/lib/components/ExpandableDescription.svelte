<style>
  button{
    background-color: transparent;
    border: none;
  }
</style>

<script lang="ts">
  import Collapse from "../../assets/Collapse.svg.svelte";

  export let description:string
  let expanded = false
  function onExpand() {
    expanded = !expanded
  }
</script>

<div>
  <p class="sub-text" style={`display:${expanded ? "inherit" : "none"};`}>{description}</p>
  <button on:click={onExpand} class=".sub-text"> <Collapse direction={expanded ? "up" : "down"}/> {`${expanded ? "hide" : "show"}`} description</button>
</div>