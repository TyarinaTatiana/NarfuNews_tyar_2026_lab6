<template>
  <v-navigation-drawer
      v-model="drawerModel"
      temporary
  >
    <v-list :items="items">
      <v-list-item v-for="(item, index) in items"        color="primary"

                   :key="'menu-'+index">
        <template #prepend>
          <v-icon  :icon="item.icon" />
        </template>
        <v-list-item-title>
          {{item.title}}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
const display = useDisplay()

const drawerModel = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const items = [
  { title: 'Последние новости', icon: '$bookMarkIcon' },
  { title: 'Самые просматриваемые', icon: '$fireIcon' },
]
</script>