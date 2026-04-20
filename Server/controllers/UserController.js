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
    
    tableService._get(process.env.USER_TABLE_ID)
        .then(req=> req.data)
        .then(records=> res.json(records))
        
});

router.get('/:id', (req, res) => {
    tableService._get(process.env.USER_TABLE_ID,`?recordIds[0]=${req.params.id}`)
        .then(req=>req.data)
        .then(records=> {
            if(records.total <=0)
                res.status(400).json({ message: 'Пользователь не найден',userId:0 });
            else res.json(records.records[0].fields);
        })
});


module.exports = router;

