<script>
  import '@fontsource/audiowide';
  import '../fonts.css'
  import '../styles.css'

  import { onNavigate } from '$app/navigation';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
});
</script>

<slot />