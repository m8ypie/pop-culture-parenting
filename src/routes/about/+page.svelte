<script lang="ts">
  import Banner from "$lib/Banner.svelte"
  import Body from "$lib/Body.svelte"
  import Bois from "../../assets/Bois.svg.svelte"
</script>
<div class="main">
  <Banner/>
  <Body title={"about"}>
    <Bois slot="filler"/>
    <p slot="content">This podcast is about finding the sweetspot between the textbooks and real life when it comes to parenting. Dr Billy (a developmental pediatrician) and Nick (a developing parent) are a couple of dads having honest discussions about parenting day to day. We'll be using iconic TV and cinema scenes from the 80's & 90's to give context to Billy's parenting advice. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Ut lectus arcu bibendum at varius vel pharetra vel. Venenatis lectus magna fringilla urna porttitor.</p>
  </Body>
</div>
