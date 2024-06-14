<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <div class="flex justify-center items-center h-[20rem] flex-col gap-2">
      <img
        alt="Vue logo"
        class="w-[5rem] animate-spin"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <h1 class="mt-10 text-3xl font-bold">Welcome to Our Task Manager App.</h1>
      <p class="">To start creating your Tasks, You can either <RouterLink to="/login" class="font-bold hover:underline">LogIn</RouterLink> or <RouterLink to="/signup" class="font-bold hover:underline">SignUp</RouterLink>.</p>
      <p class="">To Know more about App, go to <RouterLink to="/about" class="font-bold hover:underline">About</RouterLink>.</p>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>
