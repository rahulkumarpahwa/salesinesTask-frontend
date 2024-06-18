<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
// import { GiRapidshareArrow } from "react-icons/gi";
</script>

<template>
  <main>
    <div class="flex justify-center items-center h-[20rem] flex-col gap-2">
      <!-- <div class="my-3 text-[#41b883] text-2xl"><GiRapidshareArrow />↪ Hover Here </div> -->
      <img
        alt="Vue logo"
        class="w-[5rem] animate-spin hover:duration-300 hover:scale-150"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <h1 class="mt-10 text-3xl font-bold">Welcome to Our Task Manager App.</h1>
      <p class="">
        To start creating your Tasks, You can either
        <RouterLink to="/login" class="font-bold hover:underline">LogIn</RouterLink> or
        <RouterLink to="/signup" class="font-bold hover:underline">SignUp</RouterLink>.
      </p>
      <p class="">
        To Know more about App, go to
        <RouterLink to="/about" class="font-bold hover:underline">About</RouterLink>.
      </p>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>
