<script setup lang="ts">
import ArticleLink from "~/components/ArticleLink.vue";
import articles from "~/assets/data/articles";
const route = useRoute();
const id: string = route.params.id as string;
const { data: page } = await useAsyncData(id, () => {
  return queryCollection("content").path(`/${id}`).first()
})

</script>

<template>
    <div class="container">
      <aside class="sidebar">
        <div v-for="article in articles" class="sidebar-content">
          <ArticleLink :title="article.name" :link="article.link"/>
        </div>
      </aside>
      <main class="content">
        <ContentRenderer v-if="page" :value="page"></ContentRenderer>
        <h1 v-else>Страница не найдена</h1>
      </main>
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
  padding: 20px;
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
  font-size: 18px;
  padding: 30px 30px 30px 30px;
}

h1, h2 {
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}
</style>