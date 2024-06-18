<script>
// import EmptyTask from '@/src/components/EmptyTask.vue'
// import InputTask from '@/src/components/InputTask.vue'
import axios from 'axios'
// import { ref } from 'vue'
import Toast from 'awesome-toast-component'
// const checkedNames = ref([])

// v-model="checkedNames"
//refer to https://vuejs.org/guide/essentials/forms.html

export default {
  created() {
    this.getTasks()
    this.doneTask()
  },
  methods: {
    async onLogout() {
      try {
        const response = await axios.post('/api/users/logout')
        console.log('User Logout Successfully!!', response.data)
        new Toast('User LogOut Successfully!', {
          position: 'top'
        })
        if (response.data.message == 'User logout SuccessFully!') {
          this.$router.push('/login')
        }
      } catch (error) {
        console.log(error.message)
        new Toast(error.message, {
          position: 'top'
        })
      }
    },
    async getTasks() {
      try {
        const response = await axios.post('/api/todo/showtask')
        this.tasks = response.data.tasks.filter((value) => value.isDone === false)
      } catch (error) {
        console.log(error.message)
        new Toast(error.message, {
          position: 'top'
        })
      }
    },
    async taskDone(id) {
      try {
        const response = await axios.post('/api/todo/completetask', { taskId: id })
        console.log(response.data)

        if (response.data) {
          this.getTasks()
          this.doneTask()
          new Toast('Task Completed!', {
            position: 'top'
          })
        }
      } catch (error) {
        console.log(error.message)
        new Toast(error.message, {
          position: 'top'
        })
      }
    },
    async doneTask() {
      try {
        const response = await axios.post('/api/todo/donetask')
        // console.log(response.data)
        this.doneTasks = response.data.tasks
      } catch (error) {
        console.log(error.message)
        new Toast(error.message, {
          position: 'top'
        })
      }
    },
    async createTask() {
      try {
        if (this.taskInput != '') {
          const response = await axios.post('/api/todo/createtask', { task: this.taskInput })
          console.log(response.data)
          this.taskInput = ''
          new Toast('New task Created!', {
            position: 'top'
          })
          this.getTasks()
          this.doneTask()
        }
      } catch (error) {
        console.log(error.message)
        new Toast(error.message, {
          position: 'top'
        })
      }
    },
    async deleteTask(id) {
      try {
        const response = await axios.post('/api/todo/deletetask', { taskId: id })
        console.log(response.data)
        if (response.data) {
          this.getTasks()
          this.doneTask()
          new Toast('Task Deleted!', {
            position: 'top'
          })
        }
      } catch (error) {
        console.log(error.message)
        new Toast(error.message, {
          position: 'top'
        })
      }
    }
  },

  data() {
    return {
      tasks: [],
      doneTasks: [],
      taskInput: ''
    }
  }
}
</script>

<template>
  <button
    @click="onLogout()"
    class="border border-black rounded-xs px-12 py-1 my-2 hover:text-white hover:bg-black absolute top-30 right-10"
  >
    Logout
  </button>
  <div class="flex items-center justify-center flex-col gap-4">
    <h2 class="text-2xl font-bold">Create New Tasks</h2>

    <input
      type="text"
      v-model="taskInput"
      class="focus:outline-none border border-gray-600 text-black rounded-xs px-2 py-1 w-60"
      placeholder="Type Task Here!"
    />
    <button
      class="border border-black rounded-xs px-12 py-1 w-60 hover:text-white hover:bg-black"
      v-on:click="
        () => {
          this.createTask()
        }
      "
    >
      <i class="fa-solid fa-plus"></i> Create New Task
    </button>

    <div>
      <ul class="flex items-center justify-center flex-col">
        <hr class="h-px w-72" />
        <h2 class="text-2xl font-bold">Pending Tasks</h2>
        <li v-for="value in tasks" :key="value._id" class="bg-neutral-300 my-2 p-2 rounded-md">
          <span class="mr-3"><i class="fa-solid fa-arrow-right"></i></span>
          <input
            type="checkbox"
            id="checkbox"
            class="mr-2"
            v-on:click="
              () => {
                this.taskDone(value._id)
              }
            "
          />
          <label for="checkbox">{{ value.task }}</label>
          <button class="ml-2" v-on:click="()=>deleteTask(value._id)"><i class="fa-solid fa-xmark text-red-600 text-xs" ></i></button>
        </li>
      </ul>

      <ul class="flex items-center justify-center flex-col">
        <hr class="h-px w-72" />
        <h2 class="text-2xl font-bold">Completed Tasks</h2>

        <li v-for="value in doneTasks" :key="value.id" class="bg-neutral-300 my-2 p-2 rounded-md">
          <span class="mr-3"><i class="fa-solid fa-arrow-right"></i></span>
          <input type="checkbox" id="checkbox" checked class="mr-2" />
          <label for="checkbox" class="line-through">{{ value.task }}</label>
          <button class="ml-2" v-on:click="()=>deleteTask(value._id)"><i class="fa-solid fa-xmark text-red-600 text-xs"></i></button>
        </li>
      </ul>
    </div>
  </div>
</template>
