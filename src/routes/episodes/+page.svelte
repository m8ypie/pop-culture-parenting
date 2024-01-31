<script lang="ts">
  import ContentPage from "$lib/ContentPage.svelte";
  import Episode from "$lib/Episode.svelte";
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


<ContentPage pageName="episodes">
  <Logo slot="filler"/>
  <div slot="content">
  <div style="width: 100%; display:flex; flex-direction:row-reverse">
    <Sort on:changeOrder descending={descending}/>
  </div>
    <div style="gap:35px; display:flex; flex-direction:column">
      {#each data.podcasts as episode }
        <Episode episode={episode}/>
      {/each}
    </div>
  </div>
</ContentPage>

