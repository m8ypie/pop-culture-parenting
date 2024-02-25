<script lang="ts">
  export let expanded:boolean
</script>
<style>
  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #EA65AC;
    margin: 0px;
    list-style-type: none;
    padding: 0px;
    width: 220px;
    z-index: 10;
  }
  li {
    border-top: 1px solid white;
    padding-left: 20px;
    height: 28px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  a {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    color: white;
    text-decoration: none;
    font-family: Audiowide;
    display: block
  }
</style>

<ul style={`display: ${expanded ? "inherit" : "none"};`}>
  <li><a href="/">home</a></li>
  <li><a href="/episodes">episodes</a></li>
  <!-- <a href="/topics">topics</a> -->
  <li><a href="/movies">movies</a></li>
  <li><a href="/contact"> contact us</a></li>
</ul>