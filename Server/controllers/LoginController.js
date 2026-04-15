require('dotenv').config();
const tableService = require('../services/TableService');
tableService.tableId = 'dstkHkqjbkjZ1Txfuc'
const express = require('express');
const axios = require("axios");
/*
 * работа с роутом (уникальным путем контроллера)
 * LoginController: Авторизация/регистрация
 */
const router = express.Router();


/*
    description: Маршрут для поиска пользователя по логину и паролю
    router: http://localhost:3010/api/login/auth?login={login}&password={password}
    type: get
*/
router.get('/auth', (req, res) => {
    const { login, password } = req.query;

    // Проверка наличия обязательных полей
    if (!login || !password) {
        //Возврат ошибки, если хотя бы одно из полей не заполнено
        return res.status(400).json({ message: 'Не заполнены обязательные поля' });
    }
    
    tableService.getRecordsWithQuery(`filterByFormula=AND({login}='${login}', {password}='${password}')`)
        .then(req=> req.data)
        .then(records=> {
            console.log(records);
            if(records.total == 0){
                res.status(400).json({ message: 'Пользователь не найден' });
            } else
                res.status(200).json({ message: 'Успешная авторизация'});
        })
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
