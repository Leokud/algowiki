<script setup lang="ts">
import articles from "~/assets/data/articles";
import ArticleLink from "~/components/ArticleLink.vue";
</script>

<template>
  <main class="content">
    <div v-for="article in articles" class="sidebar-content">
      <ArticleLink :title="article.name" :link="article.link"/>
    </div>
  </main>

</template>

<style scoped>

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