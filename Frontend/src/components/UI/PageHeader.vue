<template>
  <div class="page-header">
    {{ props.title }}
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  title: String
})

</script>

<style lang="scss" scoped>
.page-header {
  background: #F6F6F6;
  padding: 16px 24px;
  align-items: center;
  align-self: stretch;
  color: #000;

  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  text-align: justify;
}

</style>