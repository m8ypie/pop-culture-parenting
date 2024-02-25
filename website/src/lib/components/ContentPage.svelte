<script lang="ts">
  import Banner from "$lib/components/Banner.svelte"
  import Body from "$lib/components/Body.svelte"
  import Footer from "$lib/components/Footer.svelte";
  import BurgerMenu from "$lib/components/BurgerMenu.svelte";
  export let pageName:string
  let expanded = false
  function onExpand() {
    expanded = !expanded
  }
</script>

<div class="main">
  <Banner onExpand={onExpand}/>
  <BurgerMenu expanded={expanded}/>
  <Body title={pageName}>
    <slot slot="filler" name="filler"/>
    <slot class="content-header" slot="content-header" name="content-header"/>
    <slot slot="content" name="content"/>
  </Body>
  <Footer/>
</div>

