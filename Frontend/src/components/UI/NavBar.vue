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
        Войти 
      </v-btn>
     <v-menu v-else>
       <template v-slot:activator="{ props }">
         <v-btn
             color="white"
             v-bind="props"
         >
           {{ currentUser }}
         </v-btn>
       </template>
       <v-list>
         <v-list-item
             @click="logout"
         >
           Выйти
         </v-list-item>
       </v-list>
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

import { useUserStore } from '@/src/store/UserStore'
const userStore = useUserStore();


const visibleLoginDialog = ref(false)

const emit = defineEmits(['toggle-drawer'])
const isAuth = computed(()=> {
  const getCurrentUserId = sessionStorage.getItem('currentUserId');
  return !!getCurrentUserId && getCurrentUserId?.length >= 0
})

const currentUser=computed(() => {
  if(!userStore.currentUser || !userStore.currentUser.UserId) return null;
  return userStore.currentUser.Surname + ' '+userStore.currentUser.Name[0]+'.'+ userStore.currentUser.Patronymic[0]+'.'
})

const logout=()=> {
  sessionStorage.clear()
  localStorage.clear()
}


</script>


<style >
.nav-bar__search-field{
  .v-field__overlay{
    background-color: rgba(256, 256, 256, 30%);
  }
}

</style>