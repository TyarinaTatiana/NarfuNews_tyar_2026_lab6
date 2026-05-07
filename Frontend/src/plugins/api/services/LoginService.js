import {API_BASE_URL, fetchData} from "@/src/plugins/api/apiConfig.js";

class LoginService {
    constructor() {
    }
    
    //Авторизация пользователя
    async authorizationUser(email, password) {
        return fetchData(`${API_BASE_URL}/login/auth?email=${email}&password=${password}`);
    }
    
    async registerUser(user) {
        return  fetchData(`${API_BASE_URL}/login/register`, {
            method : "POST", 
            body: JSON.stringify({
                email:user.email, 
                password: user.password, 
                name: user.name, 
                surname: user.surname, 
                patronymic: user.patronymic,
            })
        }).then(res => res.recordId)
            
        
    }
    
}

// Класс для работы с API пользователей
const service = new LoginService(API_BASE_URL);

// Экспортируем экземпляр
export default service;


