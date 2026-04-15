//Загружает переменные из .env
require('dotenv').config();
//Подключаем сервис для работы с таблицами
const tableService = require('../services/TableService');
//Подключаем express
const express = require('express');
//присваиваем tableId ДЛЯ ЭТОГО контроллера
tableService.tableId = process.env.USER_TABLE_ID;

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
    
    tableService.client._get()
        .then(req=> req.data)
        .then(records=> res.json(records))
        
});


module.exports = router;

