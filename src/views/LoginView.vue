<script lang="ts">
import { RouterLink } from 'vue-router'
import axios from 'axios'
import Toast from 'awesome-toast-component'

export default {
  name: 'LoginView',
  methods: {
    async onLogin() {
      try {
        this.loading = true
        this.disabledButton = true
        const response = await axios.post(`/api/users/login`, {
          email: this.email,
          password: this.password
        })
        new Toast('User LoggedIn Successfully!!', {
          position: 'top'
        })
        if (response.data.message == 'User LoggedIn Successfully!') {
          this.$router.push('/task')
        }
        console.log('Login Success', response.data)
      } catch (error) {
        console.log(error.message)
        new Toast(error.message, {
          position: 'top'
        })
        ;(this.email = ''), (this.password = '')
        this.loading = false
        this.disabledButton = false
      }
    }
  },
  data() {
    // state variable
    return {
      email: '',
      password: '',
      loading: false,
      disabledButton: false
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-[20rem] py-2">
    <h1 class="text-2xl animate-bounce my-4">Task Manager Web App 📝</h1>
    <h1 class="my-1">{{ loading ? '🪐Processing' : '🔐 Login' }}</h1>
    <input
      class="focus:outline-none border border-gray-600 text-black rounded-xs my-2 px-2 py-1"
      placeholder="enter email"
      type="text"
      v-model="email"
    />
    <input
      class="focus:outline-none border border-gray-600 text-black rounded-xs my-2 px-2 py-1"
      placeholder="enter password"
      type="text"
      v-model="password"
    />
    <button
      class="border border-black rounded-xs px-12 py-1 my-2 hover:text-white hover:bg-black"
      v-on:click="onLogin()"
    >
      {{ disabledButton ? 'No Log In' : 'Log In' }}
    </button>
    <RouterLink
      to="/signup"
      class="hover:text-white hover:bg-black border border-black p-2 mt-1 rounded-xs"
      >Visit SignUp Page
    </RouterLink>
  </div>
</template>
