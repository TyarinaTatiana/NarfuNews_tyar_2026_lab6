<template>
  <v-app>
    <nav-bar @toggle-drawer="drawer = !drawer"/>
    <v-main>
      <main-side-bar
        :model-value="drawer"
        />
      <router-view class="px-0" style="width: 100%"/>

    </v-main>
  </v-app>
</template>
<script setup>
import NavBar from "@/src/components/UI/NavBar.vue";
import { ref, watch } from 'vue'
import MainSideBar from "@/src/components/UI/MainSideBar.vue";

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>


