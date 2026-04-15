require('dotenv').config();
const tableService = require('../services/TableService');
tableService.tableId = 'dst1PfZaEHjrvzFkn6'
const express = require('express');
const axios = require("axios");
/*
 * работа с роутом (уникальным путем коннтроллера)
 * UserController: получение информации о пользователях
 */
const router = express.Router();

/*
    description: Маршрут для получения списка всех пользователей
    router: http://localhost:3010/api/users/
    type: get
*/
router.get('/', (req, res) => {
    
    tableService.getAllRecords()
        .then(req=> req.data)
        .then(records=> res.json(records))
        
});

/*
    description: Маршрут для поиска пользователя по логину и паролю
    router: http://localhost:3010/api/users/login?login={login}&password={password}
    type: get
*/
router.get('/login', (req, res) => {
    const { login, password } = req.query;

    // Проверка наличия обязательных полей
    if (!login || !password) {
        //Возврат ошибки, если хотя бы одно из полей не заполнено
        return res.status(400).json({ message: 'Не заполнены обязательные поля' });
    }
});

/*
    description: Маршрут для получения информации о пользоыателе по его ID
    router: http://localhost:3010/api/users/{userId}
    type: get
*/
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
});

/*
    description: Маршрут для создания нового пользователя
    router: http://localhost:3010/api/users/
    type: post
    body: {
        Login: string (required),
        Password: string (required),
        Name: string,
        Email: string,
        ...otherFields
    }
*/

module.exports = router;
