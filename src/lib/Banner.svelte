
<script>
  import Pages from "./Pages.svelte"
</script>
<style>
  header {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    height:120px;
    overflow: hidden;
    background: url("../assets/Grid.svg"),linear-gradient(180deg, #F8A533 0%, #ED7195 81%, #EC7097 82.5%, #EA65AC 100%);
    background-size: cover;
    padding-left: 72px;
    padding-right: 72px;
  }
  h1 {
    color: white;
    font-size: 40px;
    flex-grow: 1;
  }
</style>

<header>
  <h1>pop culture parenting</h1>
  <Pages/>
</header>