import { defineStore } from 'pinia'
import usersService from '@/src/plugins/api/services/UsersService'
import loginService from '@/src/plugins/api/services/LoginService'

export const useUserStore = defineStore('userStore', {
    state: () => {
        return { 
            currentUser: {}
        }
    },
    actions: {
        async authorizeUser(user) {
            loginService.authorizationUser(user.email, user.password)
                .then((response) => {
                    this.getCurrentUser(response.userId)
                })
        },
        async getCurrentUser(userId) {
            console.log(usersService);
            await  usersService.getUserById(userId)
               .then(response => {
                   this.currentUser = response;
                   
               })
        }
    },
})