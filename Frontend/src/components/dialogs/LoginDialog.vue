<template>
  <v-dialog
      v-model="localVisible"
      max-width="50%"
      persistent
  >
    <v-card>
      <v-card-title>
        <v-tabs color="primary" v-model="selectedTab">
          <v-tab>
            Войти
          </v-tab>
          <v-tab>
            Зарегистрироваться
          </v-tab>
        </v-tabs>
      </v-card-title>
      <v-card-text>
        <div v-if="selectedTab===tabsEnums.signIn">
          <v-text-field
              v-model="email"
              placeholder="Email"
              variant="outlined"
              density="compact"
              :rules="[v=> !!v || 'Обязательное поле']"
          />
          <v-text-field
              v-model="password"
              type="password"
              placeholder="Пароль"
              variant="outlined"
              density="compact"
              :rules="[v=> !!v || 'Обязательное поле']"
          />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" color="primary" text @click="localVisible = false">
          Отмена
        </v-btn>
        <v-btn variant="flat" color="primary" text @click="submitClick">
          {{ selectedTab === tabsEnums.signIn ? 'Войти' : 'Зарегистрироваться' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {computed, inject, ref} from "vue";

const emit = defineEmits(['update:visible']);
const loginService = inject("loginService"); // Внедряем UserService

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})


const selectedTab = ref(0)
const email = ref('')
const password = ref('')

const tabsEnums = {
  signIn: 0,
  registration: 1,
}
const localVisible = computed({
      get: () => {
        return props.visible
      },      // Получаем значение из props
      set: (value) => {
        emit('update:visible', value);
      }
    }
);

const submitClick = () => {
  if (selectedTab.value === tabsEnums.signIn) return signIn();

}


const signIn = () => {
  if (email.value === '' || password.value === '' || !email.value || !password.value) {
    return alert('Не заполнены обязательные поля!')
  }

  loginService.authorizationUser(email.value, password.value)
      .then((response) => {
        console.log('Авторизация')
      })

}

</script>


<style scoped>

</style>