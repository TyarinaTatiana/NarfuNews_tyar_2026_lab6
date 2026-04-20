<template>
  <v-app>
    <nav-bar @toggle-drawer="changeDrawer"/>
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
import {onBeforeMount, ref, watch} from 'vue'
import MainSideBar from "@/src/components/UI/MainSideBar.vue";

const drawer = ref(false)
const group = ref(null)
onBeforeMount(()=> {
  drawer.value = !!localStorage.getItem("side-bar-is-open") ? localStorage.getItem("side-bar-is-open") === 'true' : false;
})

const changeDrawer = () => {
  drawer.value = !drawer.value
  localStorage.setItem("side-bar-is-open", drawer.value ? "true" : "false")
}
watch(group, () => {
  drawer.value = false
})
</script>


