<script setup lang="ts">
const props = defineProps({
  title: String,
})
</script>

<template>
  <v-btn elevation="2">{{ props.title }}</v-btn>
</template>
