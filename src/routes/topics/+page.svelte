<script lang="ts">
  import Banner from "$lib/Banner.svelte"
  import Body from "$lib/Body.svelte"
  import Logo from "../../assets/Logo.svg.svelte"
</script>
<style>
  .main {
    display: flex;
    flex-direction: column;
  }

</style>

<div class="main">
  <Banner/>
  <Body title={"topics"}>
    <Logo slot="filler"/>
    <p slot="content">topics</p>
  </Body>
</div>
