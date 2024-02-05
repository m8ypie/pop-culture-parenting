<style>
  button{
    background-color: transparent;
    border: none;
    font-family: Cairo;
  }
</style>

<script lang="ts">
  import Collapse from "../../assets/Collapse.svg.svelte";

  export let title:string
  let expanded = false
  function onExpand() {
    expanded = !expanded
  }
</script>

<div>
  <button on:click={onExpand} class=".sub-text"> <Collapse direction={expanded ? "up" : "down"}/> {title}</button>
  <div style={`display:${expanded ? "inherit" : "none"}; margin-top:40px`}>
    <slot name="content"/>
  </div>
</div>