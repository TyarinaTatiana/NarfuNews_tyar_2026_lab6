import { defineStore } from 'pinia'
import usersService from '@/src/plugins/api/services/UsersService'
import loginService from '@/src/plugins/api/services/LoginService'

export const useUserStore = defineStore('userStore', {
    state: () => ({
            currentUser: {}
    }),
    actions: {
        async authorizeUser(user) {
            loginService.authorizationUser(user.email, user.password)
                .then((response) => {
                    this.getCurrentUser(response.userId)
                })
        },
        async getCurrentUser(userId) {
            await  usersService.getUserById(userId)
               .then(response => {
                   sessionStorage.setItem('currentUserId', userId)
                   this.currentUser = response;
                   return response;
               })
        },
        async logoutUser(userId) {
            
        },
        async registerUser(user) {
            await loginService.registerUser(user)
            .then(response => {
                this.getCurrentUser(response)
                    .finally(()=> {return})
            })
        }
    },
})