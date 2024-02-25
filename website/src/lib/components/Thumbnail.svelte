<style>
  img {
    min-width: 100px;
    min-height: 100px;
    width: 100px;
    height: 100px;
    border: 1px solid var(--white, #FFF);
    opacity: 0;
		transition: all 2s ease;
  }
</style>

<script lang="ts">
  import { lazyLoad } from './lazyLoad'
  export let imgHref:string
  export let alt:string
</script>

<img use:lazyLoad={imgHref} alt={alt}/>