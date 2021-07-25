<script>
  export let src;
  export let info;
</script>

<article class="columns box">
  <figure class="column is-3by2">
    <img {src} alt="dog with human" />
  </figure>

  <div class="column">
    <div class="content">
      <section class="hero is-medium ">
        <div class="hero-body">
          <p class="title">{info?.title}</p>
          <p class="subtitle">
            {info?.subtitle}
          </p>
          <button class="button is-medium is-info">
            <a href="adopt"> {info.button}</a>
          </button>
        </div>
      </section>
    </div>
  </div>
</article>
