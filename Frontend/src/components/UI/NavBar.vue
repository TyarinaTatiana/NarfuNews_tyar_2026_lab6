<template>
  <v-app-bar color="#01579B" app>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="emit('toggle-drawer')"/>
    </template>

    <v-app-bar-title><v-icon icon="$logoIcon"/>Новости</v-app-bar-title>
    <div style="width:35%;">
      <v-text-field variant="outlined" hide-details density="compact"/>
    </div>
    <template #append>
      <v-btn v-if="!isAuth">
        Войти
      </v-btn>
     <v-menu v-else>
       <template v-slot:activator="{ on, attrs }">
         <v-btn
             color="primary"
             v-bind="props"
         >
           ФИО
         </v-btn>
       </template>
     </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['toggle-drawer'])
const isAuth = ref(false)



</script>


<style scoped>

</style>