<svelte:head>
  <title>Adopt · Dog Adoption and Care</title>
</svelte:head>

<h1>Adopt</h1>

<div
  class="columns  is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
>
  <div class="column is-one-quarter">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by4">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  </div>

  <div class="column" />
  <div class="column" />
  <div class="column" />
</div>

<a class="fab-container" href="adopt/add" title="Put a dog up for adoption">
  <button class="button is-link is-rounded">
    <ion-icon name="add-outline" />
    <ion-icon name="paw-outline" />
  </button>
</a>

<style>
  .fab-container {
    cursor: pointer;
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
</style>
