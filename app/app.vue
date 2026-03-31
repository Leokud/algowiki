<script setup lang="ts">
import ArticleLink from "~/components/ArticleLink.vue";
</script>

<template>
  <div class="layout">
    <header>
      <NuxtLink to="/">
        <h3>wiki</h3>
      </NuxtLink>
      <NuxtLink to="/sourcecode">
        <h3>исходный код</h3>
      </NuxtLink>
    </header>
    <NuxtPage/>
  </div>

</template>

<style scoped>
.layout {
  min-height: 100vh;
}

header {
  display: grid;
  grid-template-columns: 150px auto 40%;
  background-color: #2b2b2b;
  border-radius: 10px;
  padding: 0 0 0 30px;
  margin: 20px;
}

.container {
  display: flex;
  gap: 20px;
  margin: 20px;
}

.sidebar {
  width: 280px;
  background-color: #2b2b2b;
  border-radius: 10px;
  padding: 10px;
  flex-shrink: 0;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.content {
  flex: 1;
  background-color: #2b2b2b;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}

h1, h2 {
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}
</style>