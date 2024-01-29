<script lang="ts">
  import Banner from "$lib/Banner.svelte"
  import Body from "$lib/Body.svelte"
  import Episode from "$lib/Episode.svelte";
  import Footer from "$lib/Footer.svelte";
  import Sort from "$lib/Sort.svelte";
  import Logo from "../../assets/Logo.svg.svelte"
  import type { PodcastList } from "./types";

  export let data:PodcastList
  console.log(data)

  let descending = false

  function changeOrder() {
    descending = !descending
  }

</script>



<div>
  <Banner/>
  <div class="main">
    <Body title={"episodes"}>
      <Logo slot="filler"/>
      <div slot="content">
        <div style="width: 100%; display:flex; flex-direction:row-reverse"><Sort on:changeOrder descending={descending}/></div>
        <div style="gap:35px; display:flex; flex-direction:column">
          {#each data.podcasts as episode }
            <Episode episode={episode}/>
          {/each}
        </div>
      </div>
    </Body>
  </div>
  <Footer/>
</div>
