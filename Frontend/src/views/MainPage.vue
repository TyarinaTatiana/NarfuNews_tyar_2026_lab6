<template>
  <div class="news-page">
    <page-header
        title="Последние новости"
    />
    {{newsListComputed}}
    <section class="news-content">
      <div
          v-for="(item, index) in newsListComputed"
          :key="`news-${index}`"
      >
        <first-news
            :news="item"
        />

      </div>
    </section>

  </div>
</template>

<script setup>  
import PageHeader from "@/src/components/UI/PageHeader.vue";
import {computed, inject, onMounted, ref} from "vue";
import FirstNews from "@/src/components/news/list/FirstNews.vue";
import NarfuNewsData from '@/../NarfuNewsData.json'


const newsList = ref([])


const newsListComputed = computed(()=>NarfuNewsData.NewsArray, ()=>{})
onMounted(() => {
  newsList.value = NarfuNewsData.NewsArray;
})


</script>

<style lang="scss" scoped>

</style>