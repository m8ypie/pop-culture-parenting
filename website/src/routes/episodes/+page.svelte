<script lang="ts">
  import ContentPage from "$lib/components/ContentPage.svelte";
  import Episode from "$lib/components/Episode.svelte";
  import Sort from "$lib/components/Sort.svelte";
  import Logo from "../../assets/Logo.svg.svelte"
  import podcastList from "../../assets/podcasts.json"

  let descending = true
  let podcasts = podcastList.podcasts

  function changeOrder() {
    descending = !descending
    podcasts = podcasts.reverse()
  }

</script>


<ContentPage pageName="episodes">
  <Logo slot="filler"/>
  <div slot="content">
    <div style="width: 100%; display:flex; flex-direction:row-reverse">
      <Sort on:click={changeOrder} descending={descending}/>
    </div>
    <div style="gap:35px; display:flex; flex-direction:column">
      {#each podcasts as episode }
        <Episode episode={episode}/>
      {/each}
    </div>
  </div>
</ContentPage>

