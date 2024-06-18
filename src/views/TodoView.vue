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
        // this.doneTasks = response.data.tasks.filter((value) => value.isDone === true)
        // console.log(response.data.tasks)
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
        const response = await axios.post('/api/todo/createtask', { task: this.taskInput })
        console.log(response.data)
        this.taskInput = ''
        new Toast('New task Created!', {
          position: 'top'
        })
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
          this.getTasks()
        }
      "
    >
      <i class="fa-solid fa-plus"></i> Create New Task
    </button>
    <hr class="h-px w-72" />
    <div>
      <ul>
        <li v-for="value in tasks" :key="value._id" class="bg-neutral-300 my-2 p-2 rounded-md">
          <span class="mr-3"><i class="fa-solid fa-arrow-right"></i></span>
          <input
            type="checkbox"
            id="checkbox"
            class="mr-2"
            v-on:click="
              () => {
                this.taskDone(value._id)
                this.doneTask()
                this.getTasks()
              }
            "
          />
          <label for="checkbox">{{ value.task }}</label>
        </li>
      </ul>

      <ul class="flex items-center justify-center flex-col">
        <hr class="h-px w-72" />
        <li v-for="value in doneTasks" :key="value.id" class="bg-neutral-300 my-2 p-2 rounded-md">
          <span class="mr-3"><i class="fa-solid fa-arrow-right"></i></span>
          <input type="checkbox" id="checkbox" checked class="mr-2" />
          <label for="checkbox" class="line-through">{{ value.task }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>
