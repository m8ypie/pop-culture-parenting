<script>
  import Socials from "./Socials.svelte"
</script>

<style>
  footer {
    display: flex;
    background: #EA65AC;
    justify-content: flex-end;
    align-items: center;
    min-height: 50px;
    padding-right: 24px;
  }

  @media only screen and (max-width: 600px) {

    footer {
      padding-right: 0px;
      justify-content: center;
    }

  }
</style>

<footer>
  <Socials/>
</footer>