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

  // move to stores
  let newDoggo = {
    name: "",
    info: {
      breed: "",
      gender: "",
      location: "",
    },
    description: "",
    contact: "",
    image: null,
    fostering: {
      status: false,
      duration: "",
    },
  };

  let fileinput;
  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      newDoggo.image = e.target.result;
    };
  };
</script>

<svelte:head>
  <title>Put a dog up for adoption · Dog Adoption and Care</title>
</svelte:head>

<form on:submit|preventDefault={addDog} class="column is-four-fifths">
  <h1 style="text-align: center;">Put a dog up for adoption / fostering</h1>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Name</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="The name of the dog"
            bind:value={newDoggo.name}
          />
        </div>
        <p class="help">Leave the field blank if undecided.</p>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Info</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded ">
          <input
            class="input"
            type="text"
            placeholder="Breed"
            bind:value={newDoggo.info.breed}
          />
        </p>
      </div>

      {#if !isAdmin}
        <div class="field">
          <p class="control is-expanded ">
            <input
              class="input"
              type="text"
              placeholder="Location"
              bind:value={newDoggo.info.location}
            />
          </p>
        </div>
      {/if}
      <div class="control field">
        <label for="" class="help">Gender</label>

        <label class="radio">
          <input
            type="radio"
            bind:group={newDoggo.info.gender}
            value="Female"
          />
          Female
        </label>
        <label class="radio">
          <input type="radio" bind:group={newDoggo.info.gender} value="Male" />
          Male
        </label>
        <label for="" class="help" />
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Description</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="General description with other information like vaccination history, scars, ..."
            bind:value={newDoggo.description}
          />
        </div>
      </div>
    </div>
  </div>
  {#if !isAdmin}
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Who to contact</label>
      </div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static"> +91 </a>
            </p>
            <p class="control is-expanded">
              <input
                class="input"
                type="tel"
                placeholder="Your phone number"
                bind:value={newDoggo.contact}
              />
            </p>
          </div>
          <p class="help">Who to contact in case of enquires</p>
        </div>
      </div>
    </div>
  {/if}

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Image</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              accept=".jpg, .jpeg, .png"
              on:change={(e) => onFileSelected(e)}
              bind:this={fileinput}
            />
            <span class="file-cta">
              <span class="file-label"> Choose an image </span>
              <ion-icon name="cloud-upload-outline" />
            </span>
          </label>
        </div>
      </div>
      <div class="field">
        <figure class="image is-96x96">
          {#if newDoggo.image}
            <img class="avatar" src={newDoggo.image} alt="placeholder" />
          {:else}
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="placeholder"
            />
          {/if}
        </figure>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label" />
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input
            class="checkbox"
            type="checkbox"
            bind:checked={newDoggo.fostering.status}
            placeholder="The name of the dog"
          /> Is this dog up for fostering?
        </div>
      </div>
    </div>
  </div>

  {#if newDoggo.fostering.status}
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Duration</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control has-icons-left">
            <div class="select is-small">
              <select bind:value={newDoggo.fostering.duration}>
                <option selected disabled>Pick a duration</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="More than 3 months">More than 3 months</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <div class="field is-horizontal">
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button is-link"> Proceed </button>
        </div>
      </div>
    </div>
  </div>
</form>

<style>
  .radio {
    margin-left: 4px !important;
  }
</style>
