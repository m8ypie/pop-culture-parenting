<script lang="ts">
  import ContentPage from "$lib/ContentPage.svelte";
  import Logo from "../../assets/Logo.svg.svelte"
</script>


<ContentPage pageName="movies">
  <Logo slot="filler"/>
  <p slot="content">Movies</p>
</ContentPage>

