<script lang="ts">
  import Burger from "../../assets/Burger.svg.svelte"

  export let onExpand:() => void
</script>

<style>
  .burger-button {
    background-color: transparent;
    border: none;
    align-items: center;
  }
  .burger-menu {
    margin-right: 20px;
    margin-top: 10px;
  }
</style>

<div class="burger-menu">
   <button class="burger-button" on:click={onExpand}><Burger/></button>
</div>