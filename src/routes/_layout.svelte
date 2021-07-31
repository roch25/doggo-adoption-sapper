<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    position: relative;
    background-color: white;
    padding: 4em 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
