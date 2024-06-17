<script>
// import EmptyTask from '@/src/components/EmptyTask.vue'
// import InputTask from '@/src/components/InputTask.vue'
import axios from 'axios'
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";

export default {
  methods: {
    async onLogout() {
      try {
        const response = await axios.post('/api/users/logout')
        console.log('User Logout Successfully!!', response.message)
        toast.success('User LogOut Successfully!')
      } catch (error) {
        console.log(error.message)
        toast.error(error.message)
      }
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-4">
    <button @click="onLogout()"></button>
    <InputTask />
    <EmptyTask task="[1,2]" />
  </div>
  <Toaster/>
</template>
