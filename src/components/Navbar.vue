<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="./index.html">netflicz</a> -->
      <router-link to="/" class="btn btn-primary">netflicz</router-link>


      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            
            >
          <router-link to="/" class="btn btn-primary">Home</router-link>

          </li>
        </ul>
        <form class="d-flex">
          <router-link to="/search" class="btn btn-primary">Search</router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>