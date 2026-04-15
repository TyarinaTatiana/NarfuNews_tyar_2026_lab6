require('dotenv').config();
const tableService = require('../services/TableService');
tableService.tableId = process.env.LOGIN_TABLE_ID;
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
    
    tableService._get(`?filterByFormula=AND({login}='${login}', {password}='${password}')`)
        .then(req=> req.data)
        .then(records=> {
            if(records.total == 0){
                res.status(400).json({ message: 'Пользователь не найден' });
            } else
                res.status(200).json({ message: 'Успешная авторизация'});
        })
});

module.exports = router;
