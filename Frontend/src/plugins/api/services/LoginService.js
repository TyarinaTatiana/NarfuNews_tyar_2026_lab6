import {API_BASE_URL, fetchData} from "@/src/plugins/api/apiConfig.js";

class UserRolesService {
    constructor() {
    }

    // Получить всех ролей
    async getAllRoles() {
        return fetchData(`${API_BASE_URL}/login/auth`);
    }

    //Авторизация пользователя
    async authorizationUser(login, password) {
        return fetchData(`${API_BASE_URL}/login/login?login=${login}&password=${password}`);
    }

    // Получить роли пользователя по ID
    async getRolesByUserId(userId) {
        return fetchData(`${API_BASE_URL}/user-roles/by-user-id/${userId}`);
    }

    // Создать нового пользователя
    async createUser(userData) {
        return fetchData(`${API_BASE_URL}/users`, {
            method: "POST",
            body: JSON.stringify(userData),
        });
    }
}

// Класс для работы с API пользователей
const service = new UserRolesService(API_BASE_URL);

// Экспортируем экземпляр
export default service;