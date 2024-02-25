
<script lang="ts">
  import Pages from "./Pages.svelte"
  import BurgerButton from "./BurgerButton.svelte"
  export let onExpand:() => void
</script>
<style>
  h1 {
    color: white;
    font-size: 40px;
    flex-grow: 1;
  }

  .burger-menu {
    display: none
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 24px;
    }

    .horizontal {
      display: none;
    }

    .burger-menu {
      display: inherit
    }
  }
</style>

<header>
  <div class="burger-menu">
    <BurgerButton onExpand={onExpand}/>
  </div>
  <h1>pop culture parenting</h1>
  <div class="horizontal">
    <Pages/>
  </div>
</header>