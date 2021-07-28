<script>
  export let segment;

  let navClass = true;
  let navToggleClass = false;

  const toggle = () => {
    navClass = !navClass;
    navToggleClass = !navToggleClass;
  };
</script>

<nav class="navbar is-transparent is-fixed-top">
  <div class="navbar-brand">
    <a class="navbar-item is-3" href="/">
      <img src="icon.png" alt="icon" width="30" height="30" />
    </a>
    <div
      class:is-active={navToggleClass}
      class="navbar-burger"
      data-target="navbar"
      on:click={toggle}
    >
      <span />
      <span />
      <span />
    </div>
  </div>

  <div id="navbar" class:navbar-menu={navClass} class:block={!navClass}>
    <div class="navbar-end">
      <a
        class="navbar-item"
        class:current={segment === undefined}
        aria-current={segment === undefined ? "page" : undefined}
        href="."
      >
        Home</a
      >

      <a
        class="navbar-item"
        rel="prefetch"
        class:current={segment === "adopt"}
        aria-current={segment === "adopt" ? "page" : undefined}
        href="adopt">Adopt</a
      >

      <a
        class="navbar-item"
        class:current={segment === "donate"}
        aria-current={segment === "donate" ? "page" : undefined}
        href="donate">Donate</a
      >

      <a
        class="navbar-item"
        class:current={segment === "events"}
        aria-current={segment === "events" ? "page" : undefined}
        href="events">Events</a
      >

      <a
        class="navbar-item"
        class:current={segment === "help"}
        aria-current={segment === "help" ? "page" : undefined}
        href="help">Help</a
      >
    </div>
  </div>
</nav>

<style>
  .navbar-end {
    padding: 0 30px;
  }
  a.current {
    border-bottom: 2px solid #3498db;
  }
</style>
