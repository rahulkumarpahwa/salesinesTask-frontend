<script>
import { RouterLink } from 'vue-router'
import axios from 'axios'
import toast from 'react-hot-toast'
try {
  const onLogin = async () => {
    const response = await axios.post(`${import.meta.env.URI}/api/users/login`, {
      email,
      password
    })
    console.log('Login Success', response.data)
    toast.success('User LoggedIn Successfully!!')
  }
} catch (error) {
  console.log('Login Failed')
  toast.error(error.message)
}
</script>

<template>
  <div className="flex flex-col items-center justify-center h-[25rem] py-2">
    <h1 className="my-1">{{ loading ? '🪐Processing' : '🔐 Login' }}</h1>
    <input
      className="focus:outline-none border border-gray-600 text-black rounded-md my-2 px-2 py-1"
      placeholder="email"
      type="text"
      value="{{email}}"
    />
    <input
      className="focus:outline-none border border-gray-600 text-black rounded-md my-2 px-2 py-1"
      placeholder="password"
      type="text"
      value="{{password}}"
    />
    <button
      className="border-2 rounded-lg p-1 my-2 hover:text-black hover:bg-white"
      @click="onLogin"
    >
      {{ disabledButton ? 'No Login' : 'Login' }}
    </button>
    <RouterLink to="/signup" className="hover:underline">Visit SignUp Page </RouterLink>
  </div>
</template>
