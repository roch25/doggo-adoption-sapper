<script context="module">
  async () => {
    // get status from db
    let isAdmin = false;
    return { isAdmin };
  };
</script>

<script>
  const addDog = function () {};
  export let isAdmin;
</script>

<svelte:head>
  <title>Put a dog up for adoption · Dog Adoption and Care</title>
</svelte:head>

<form on:submit|preventDefault={addDog} class="column is-four-fifths">
  <h1 style="text-align: center;">Put a dog up for adoption</h1>
  <p>--- form fiels ---</p>
</form>
