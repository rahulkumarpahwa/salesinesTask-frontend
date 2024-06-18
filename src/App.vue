<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="flex justify-center items-center flex-col gap-10 ">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <div class="mx-8 my-4">
    <nav class="flex justify-between items-center">
      <RouterLink to="/" >
      <img
        alt="Vue logo"
        class="w-[5rem] rotate-180"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      /></RouterLink>
      <div>
        <ul class="flex gap-10 items-center justify-center">
          <li class="bg-[#41b883] px-2 py-1 rounded-lg text-white hover:bg-[#34495e]">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="bg-[#41b883] px-2 py-1 rounded-lg text-white hover:bg-[#34495e]">
            <RouterLink to="/login">LogIn</RouterLink>
          </li>
          <li class="bg-[#41b883] px-2 py-1 rounded-lg text-white hover:bg-[#34495e]">
            <RouterLink to="/signup">SignUp</RouterLink>
          </li>
          <li class="bg-[#41b883] px-2 py-1 rounded-lg text-white hover:bg-[#34495e]">
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <RouterView />
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
