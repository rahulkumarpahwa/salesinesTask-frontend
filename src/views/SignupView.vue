<script>
import { RouterLink } from 'vue-router'
import axios from 'axios'
import Toast from 'awesome-toast-component'

export default {
  name: 'SignupView',
  methods: {
    async onSignup() {
      try {
        this.loading = true
        this.disabledButton = true
        const response = await axios.post(`/api/users/signup`, {
          username: this.username,
          email: this.email,
          password: this.password
        })
        console.log('User SignUp Successfully!', response.data)
        new Toast("User SignUp Successfully!", {
          position: 'top'
        })
        if (response.data.message == 'User SignUp SuccessFully!!') {
          this.$router.push('/login')
        }
      } catch (error) {
        console.log(error.message)
        new Toast(error.message, {
          position: 'top'
        })
        this.loading = false
        this.disabledButton = false
        this.email = ''
        this.password = ''
        this.username = ''
      }
    }
  },
  data() {
    // state variable
    return {
      username: '',
      email: '',
      password: '',
      loading: false,
      disabledButton: false
    }
  }
}
</script>

<template>
  <div className="flex flex-col items-center justify-center h-[20rem] py-2">
    <h1 class="text-2xl animate-bounce my-4">Task Manager Web App 📝</h1>

    <h1 className="my-1">{{ loading ? '🪐Processing' : '🔑 Signup' }}</h1>
    <input
      className="focus:outline-none border border-gray-600 text-black rounded-xs my-2 px-2 py-1"
      placeholder="enter username"
      type="text"
      v-model="username"
    />
    <input
      className="focus:outline-none border border-gray-600 text-black rounded-xs my-2 px-2 py-1"
      placeholder="enter email"
      type="text"
      v-model="email"
    />
    <input
      className="focus:outline-none border border-gray-600 text-black rounded-xs my-2 px-2 py-1"
      placeholder="enter password"
      type="text"
      v-model="password"
    />
    <button
      v-on:click="onSignup()"
      className="border border-black rounded-xs px-9 py-1 my-2 hover:text-white hover:bg-black"
    >
      {{ disabledButton ? 'No Signup' : 'Sign Up' }}
    </button>
    <RouterLink
      to="/login"
      className="hover:text-white hover:bg-black border border-black p-2 mt-1 rounded-xs"
    >
      Visit Login Page
    </RouterLink>
  </div>
</template>
