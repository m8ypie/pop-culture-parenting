<style>
  h3{
    font-family: Cairo;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    margin-right: 25px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .title{
    display: flex;
    flex-direction: row;
    text-align: start;
  }

  .separator{
    flex-grow:1;
    /* background-color: red; */
    border-bottom: 2px solid white;
  }
</style>

<script lang="ts">


  export let title:string
</script>

<div>
  <div class="title">
    <h3> {title}</h3>
    <div class="separator"/>
  </div>
  <div style={`margin-top:40px`}>
    <slot name="content"/>
  </div>
</div>