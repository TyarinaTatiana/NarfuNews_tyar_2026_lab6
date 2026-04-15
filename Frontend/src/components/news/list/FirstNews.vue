<template>
  <div class="first-news">
    <div class="first-news__image">
      <img
          width="100%"
          v-if="props.news.image?.length"
          :src="props.news.image[0]?.url"
          alt="props.news.topic">
    </div>
    <div class="first-news__content">
      <div class="first-news__date">
        {{ moment(props.news.newsDate).local('ru').format('DD MMM YYYY HH:mm ') }}
      </div>
      
      <div class="text-left">

        <div class="first-news__topic">
          {{ props.news.title }}
        </div>

        <div class="first-news__description">
          {{ props.news.newsDescription }}
        </div>
      </div>
      
      <v-btn
          color="primary"
          text="Читать далее"
          @click="goToNews"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>


import {defineProps, inject} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();

const moment = inject("moment");


const props = defineProps({
  news: Object,
})

const goToNews = ()=> {
  router.push({
    name: "news",
    params: {
      newsId: props.news.id,
    }
  })
}

</script>


<style lang="scss" scoped>
.first-news {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;

  .first-news__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .first-news__date {
    color: rgba(0, 0, 0, 0.50);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
  }

  .first-news__topic {
    display: flex;
    align-items: center;
    align-self: stretch;
    text-align: left;
    margin-bottom: 16px;
  }

  .first-news__description {
    display: flex;
    align-items: center;
    align-self: stretch;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
}

</style>