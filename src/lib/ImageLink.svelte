<script lang="ts">
  export let link:string
</script>

<a href={link}>
  <slot name="image"/>
</a>