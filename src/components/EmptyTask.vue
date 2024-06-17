<script lang="ts">
export default {
  props: {
    tasks: Array
  }
}
</script>

<template>
  <div class="flex items-center justify-center">
    <h1>{{ tasks?.length === 0 ? 'No Tasks. Click to Create One.' : '' }}</h1>
  </div>
</template>
