<script lang="ts">
  import Banner from "$lib/Banner.svelte"
  import Body from "$lib/Body.svelte"
  import Logo from "../../assets/Logo.svg.svelte"
</script>

<div class="main">
  <Banner/>
  <Body title={"movies"}>
    <Logo slot="filler"/>
    <p slot="content">Movies</p>
  </Body>
</div>
