<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 4em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
