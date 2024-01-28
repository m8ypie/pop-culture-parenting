<script lang="ts">
  import Banner from "$lib/Banner.svelte"
  import Body from "$lib/Body.svelte"
  import Episode from "$lib/Episode.svelte";
  import Logo from "../../assets/Logo.svg.svelte"
  import type { PodcastList } from "./types";

  export let data:PodcastList
  console.log(data)
</script>




<div class="main">
  <Banner/>
  <Body title={"episodes"}>
    <Logo slot="filler"/>
    <div style="gap:35px; display:flex; flex-direction:column" slot="content">
      {#each data.podcasts as episode }
        <Episode episode={episode}/>
      {/each}
      <!-- TDOD fix this overflow issue -->
      <div style="min-height:82px; display: flex;"/>
    </div>
  </Body>
</div>
