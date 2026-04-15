<template>
  <v-app-bar color="#01579B" app>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="emit('toggle-drawer')"/>
    </template>

    <v-app-bar-title style="margin-left: 4px"><v-icon style="margin-right: 12px" icon="$logoIcon"/>Новости</v-app-bar-title>
    <div style="width:35%;">
      <v-text-field 
          class="nav-bar__search-field"
          variant="outlined" 
          hide-details density="compact"
          placeholder="Поиск документа"
          prepend-inner-icon="mdi-magnify"
          
      />
    </div>
    <template #append>
      <v-btn v-if="!isAuth && !currentUser" @click="()=>visibleLoginDialog =true">
        Войти  {{visibleLoginDialog}}
      </v-btn>
     <v-menu v-else>
       <template v-slot:activator="{ on, attrs }">
         <v-btn
             color="white"
             v-bind="attrs"
         >
           {{ currentUser }}
         </v-btn>
       </template>
     </v-menu>
    </template>
  </v-app-bar>
  <login-dialog
      v-model:visible="visibleLoginDialog"
  />
</template>

<script setup>
import {computed, ref} from "vue";
import LoginDialog from "@/src/components/dialogs/LoginDialog.vue";

import NarfuNewsData from '@/../NarfuNewsData.json'
const visibleLoginDialog = ref(false)

const emit = defineEmits(['toggle-drawer'])
const isAuth = ref(false)

const currentUser=ref(null)



</script>


<style >
.nav-bar__search-field{
  .v-field__overlay{
    background-color: rgba(256, 256, 256, 30%);
  }
}

</style>