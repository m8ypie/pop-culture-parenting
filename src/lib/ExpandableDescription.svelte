<style>
  button{
    background-color: transparent;
    border: none;
  }
</style>

<script lang="ts">
  import Arrow from "../assets/Arrow.svg.svelte";

  export let description:string
  let expanded = false
  function onExpand() {
    expanded = !expanded
  }
</script>

<div>
  <p class="sub-text" style={`display:${expanded ? "default" : "none"};`}>{description}</p>
  <button on:click={onExpand} class=".sub-text"> <Arrow direction={expanded ? "up" : "down"}/> {`${expanded ? "hide" : "show"}`} description</button>
</div>