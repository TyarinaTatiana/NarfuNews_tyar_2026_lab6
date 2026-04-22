import UsersService from "./services/UsersService.js";
import LoginService from "./services/LoginService.js";
import NewsService from "./services/NewsService.js";


export const registerServices = (app) => {
    app.config.globalProperties.$usersService = UsersService

    // Предоставляем UserService через provide
    app.provide("usersService", UsersService);
    app.provide("loginService", LoginService);
    app.provide("newsService", NewsService);
}