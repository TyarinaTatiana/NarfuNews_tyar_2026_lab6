<template>
  <v-navigation-drawer
      v-model="drawerModel"
      temporary
  >
    <v-list :items="items">
      <v-list-item
          v-for="(item, index) in items"
          color="primary"
          :key="'menu-'+index"
          :href="item.href"
          link
          :active="item.isActive"
      >
        <template #prepend>
          <v-icon :icon="item.icon"/>
        </template>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import {computed} from 'vue'
import {useRoute} from "vue-router";
const route = useRoute();
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const drawerModel = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const items = computed(()=>[
  {
    title: 'Последние новости', 
    icon: '$bookMarkIcon', 
    href:'/#/',
    isActive: route.fullPath ==='/',
  },
  {
    title: 'Самые просматриваемые', 
    icon: '$fireIcon', 
    href:'/#/hot_news',
    isActive: route.fullPath ==='/hot_news',

  },
])
</script>