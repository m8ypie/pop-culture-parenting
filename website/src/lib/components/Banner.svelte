
<script>
  import Pages from "./Pages.svelte"
</script>
<style>
  h1 {
    color: white;
    font-size: 40px;
    flex-grow: 1;
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 24px;
    }

    .horizontal {
      display: none;
    }
  }
</style>

<header>
  <h1>pop culture parenting</h1>
  <div class="horizontal">
    <Pages/>
  </div>
</header>