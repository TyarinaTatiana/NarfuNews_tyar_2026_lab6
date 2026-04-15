import UsersService from "./services/UsersService.js";
import UserRolesService from "./services/LoginService.js";
import NewsService from "./services/NewsService.js";

export const registerServices = (app) => {
    // Предоставляем UserService через provide
    app.provide("usersService", UsersService);
    app.provide("loginService", UserRolesService);
    app.provide("newsService", NewsService);
}