import {API_BASE_URL, fetchData} from "@/src/plugins/api/apiConfig.js";

class LoginService {
    constructor() {
    }
    
    //Авторизация пользователя
    async authorizationUser(email, password) {
        return fetchData(`${API_BASE_URL}/login/auth?email=${email}&password=${password}`);
    }
    
}

// Класс для работы с API пользователей
const service = new UserRolesService(API_BASE_URL);

// Экспортируем экземпляр
export default service;


