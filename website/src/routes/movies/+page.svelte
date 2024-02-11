<script lang="ts">
  import ContentPage from "$lib/components/ContentPage.svelte";
  import AlphabetSelector from "$lib/components/AlphabetSelector.svelte";
  import Episode from "$lib/components/Episode.svelte";
  import ExpandableElement from "$lib/components/TitleSeparator.svelte"
  import Logo from "../../assets/Logo.svg.svelte"
  import podcastByMovies from "../../assets/podcastByMovies.json"
  const {populatedCharacters, podcastsByMovies} = podcastByMovies
  const movieLists = Object.entries(podcastsByMovies)
</script>


<ContentPage pageName="movies">
  <Logo slot="filler"/>
  <AlphabetSelector slot="content-header" selectableCharacters={populatedCharacters}/>
    <div slot="content">
      <div style="display: flex; flex-direction:column; padding-top:30px">
        <div style="gap:35px; display:flex; flex-direction:column;">
          {#each movieLists as movieList}
            <!-- svelte-ignore a11y-missing-content -->
            <a name={movieList[0]}></a> 
            {#each movieList[1] as movie}
              <ExpandableElement title={movie.movieTitle}>
                <div slot="content">
                  {#each movie.podcasts as podcast}
                  <div style="margin-bottom: 12px;">
                    <Episode episode={podcast}/>
                  </div>
                  {/each}
                </div>
              </ExpandableElement>
            {/each}
          {/each}
        </div>
      </div>
    </div>
</ContentPage>

