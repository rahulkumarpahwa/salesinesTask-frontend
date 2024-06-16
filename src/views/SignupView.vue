<script>
import { RouterLink } from 'vue-router'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default {
  name: 'SignupView',
  methods: {
    async onSignup() {
      try {
        const response = await axios.post(`/api/users/signup`, {
          username: this.username,
          email: this.email,
          password: this.password
        })
        console.log('Login Success', response.data)
        toast.success('User SignUp Successfully!!')
      } catch (error) {
        console.log(error.message)
        toast.error(error.message)
      }
      // loading = true;
      // disabledButton = true;
    }
  }
}
</script>

<template>
  <div className="flex flex-col items-center justify-center h-[20rem] py-2">
    <h1 className="my-1">{{ loading ? '🪐Processing' : '🔑 Signup' }}</h1>
    <input
      className="focus:outline-none border border-gray-600 text-black rounded-xs my-2 px-2 py-1"
      placeholder="enter username"
      type="text"
      :value="username"
    />
    <input
      className="focus:outline-none border border-gray-600 text-black rounded-xs my-2 px-2 py-1"
      placeholder="enter email"
      type="text"
      :value="email"
    />
    <input
      className="focus:outline-none border border-gray-600 text-black rounded-xs my-2 px-2 py-1"
      placeholder="enter password"
      type="text"
      :value="password"
    />
    <button
      @Click="onSignup"
      className="border border-black rounded-xs px-9 py-1 my-2 hover:text-white hover:bg-black"
    >
      {{ disabledButton ? 'No Signup' : 'Sign Up' }}
    </button>
    <RouterLink to="/login" className="hover:text-white hover:bg-black border border-black p-2 mt-1 rounded-xs"> Visit Login Page </RouterLink>
    <Toaster />
  </div>
</template>
