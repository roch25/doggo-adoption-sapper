<script context="module">
  async () => {
    // get status from db
    let isAdmin = false;
    return { isAdmin };
  };
</script>

<script>
  import AutoComplete from "simple-svelte-autocomplete";
  import { doggo } from "../../stores/doggo";
  import { breeds } from "./_breeds";
  import { locations } from "./_locations";

  const addDog = function () {};
  export let isAdmin;

  const breedNames = breeds.map(breed => breed.name)
  console.log(breedNames)

  let fileinput;
  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      $doggo.image = e.target.result;
    };
  };
</script>

<svelte:head>
  <title>Put a dog up for adoption · Dog Adoption and Care</title>
</svelte:head>

<form on:submit|preventDefault={addDog} class="column is-four-fifths is-full-mobile">
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
            placeholder="The name of the dog. E.g. Timmy"
            bind:value={$doggo.name}
          />
        </div>
        <p class="help tag">Leave the field blank if undecided.</p>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">

    <div class="field-label is-normal">
      <label class="label">Info</label>
    </div>
    <div class="field-body">
    
      <div class="field">
        <div class="control is-expanded ">
          <label for="" class="help">Breed</label>
          <AutoComplete items={breedNames.sort()} bind:selectedItem={$doggo.info.breed} />
        </div>
        <p class="help tag is-info is-light pointer">
          <a href="/help/dog-breeds">
            ⓘ Learn more about dog breeds
          </a>
        </p>
      </div>

      {#if !isAdmin}
        <div class="field">
          <div class="control is-expanded ">
            <label for="" class="help">Location</label>
            <AutoComplete
              items={locations.sort()}
              bind:selectedItem={$doggo.info.location}
            />
          </div>
        </div>
      {/if}

      <div class="control field">
        <label class="help">Gender</label>
        <label class="radio">
          <input type="radio" bind:group={$doggo.info.gender} value="Female"/>
          Female
        </label>
        <label class="radio">
          <input type="radio" bind:group={$doggo.info.gender} value="Male" />
          Male
        </label>
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
            placeholder="General description with other information like vaccination history, scars, age, ..."
            bind:value={$doggo.description}
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
                bind:value={$doggo.contact}
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
      <div class="field" style="display:none">
        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              accept=".jpg, .jpeg, .png"
              on:change={(e) => onFileSelected(e)}
              bind:this={fileinput}
            />
            <span class="file-cta" />
          </label>
        </div>
      </div>
      <div class="field">
        <figure
          class="image is-96x96"
          on:click={() => fileinput.click()}
          style="background-color: silver; cursor: pointer;"
        >
          {#if $doggo.image}
            <img class="avatar" src={$doggo.image} alt="placeholder" />
          {:else}
            <ion-icon
              name="cloud-upload-outline"
              class="upload"
              title="Image upload"
            />
            <img src="" alt="" />
          {/if}
        </figure>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label"> Is this dog up for fostering?</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <label class="radio">
            <input
              type="radio"
              bind:group={$doggo.fostering.status}
              value={true}
            />
            Yes
          </label>
          <label class="radio">
            <input
              type="radio"
              bind:group={$doggo.fostering.status}
              value={false}
            />
            No
          </label>
        </div>
      </div>
    </div>
  </div>

  {#if $doggo.fostering.status}
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Duration</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control has-icons-left">
            <div class="select is-small">
              <select bind:value={$doggo.fostering.duration}>
                <option selected disabled>Pick a duration for fostering</option>
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

  .upload {
    transform: translate(50%, 50%);
    font-size: 3em;
    color: gray;
  }
</style>
