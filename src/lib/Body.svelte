

<script lang="ts">
  export let title:string
</script>

<style>
  .body{
    background: #373744;
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    height: 100%;
  }
  h1{
    font-size: 90px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 90px */
    color: white;
    margin-left: 71px;
  }
  .content {
    padding: 16px 40px;
    border-radius: 21px;
    border: 3px solid var(--white, #FFF);
    flex-grow: 1;
    width: 62%;
    /* height: 100%; */
    overflow-y: scroll;
  }
  .filler {
    width:38%;
    overflow: hidden;
  }
</style>


<div class="body">
  <div class="filler">
    <h1 >{title}</h1>
    <slot name="filler"/>
  </div>
  <div class="content">
    <slot name="content"/>
  </div>
</div>