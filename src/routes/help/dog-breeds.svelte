<script>
  import { breeds } from "../adopt/_breeds";
</script>

<svelte:head>
  <title>Dog breeds - Help · Dog Adoption and Care</title>
</svelte:head>

<h1>Dog Breeds</h1>

<div class="container column is-three-fifths is-narrow-mobile">
  {#each breeds.slice(0, -1) as breed}
    <article class="media">
      <figure class="media-left card-image">
        <p class="image">
          <img
            srcset="https://bulma.io/images/placeholders/64x64.png 480w,
          https://bulma.io/images/placeholders/128x128.png 800w"
            src="https://bulma.io/images/placeholders/28x28.png"
            alt="breed"
          />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <span class="title is-4 is-mobile-is-2"> {breed.name} </span>
            <br />
            <br />
            {breed.description}
          </p>
        </div>
      </div>
    </article>
  {/each}
</div>
