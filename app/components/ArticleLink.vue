<script setup lang="ts">
const props = defineProps<{title: string, link: string}>()
</script>

<template>
  <NuxtLink :to="'/articles/' + props.link">
    <h3>{{title}}</h3>
  </NuxtLink>
</template>

<style scoped>
h3{
  margin: 1px;
}
</style>