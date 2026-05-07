require('dotenv').config();
const tableService = require('../services/TableService');
tableService.tableId = process.env.LOGIN_TABLE_ID;
const express = require('express');
const {ref} = require("vue");
const {get, post} = require("axios");
const enums = require("../enums");
const {response} = require("express"); 
/*
 * работа с роутом (уникальным путем контроллера)
 * LoginController: Авторизация/регистрация
 */
const router = express.Router();


/*
    description: Маршрут для поиска пользователя по логину и паролю
    router: http://localhost:3010/api/login/auth?email={email}&password={password}
    type: get
*/
router.get('/auth', (req, res) => {
    const { email, password } = req.query;

    // Проверка наличия обязательных полей
    if (!email || !password) {
        //Возврат ошибки, если хотя бы одно из полей не заполнено
        return res.status(400).json({ message: 'Не заполнены обязательные поля' });
    }

    tableService._get(process.env.LOGIN_TABLE_ID, `?filterByFormula=AND({Email}='${email}', {Password}='${password}')`)
        .then(req=> req.data)
        .then(records=> {
            if(records.total == 0){
                res.status(400).json({ message: 'Пользователь не найден',userId:0 });
            } else 
                res.status(200).json({ message: 'Успешная авторизация', userId: records.records[0].fields.UserId[0]});
        })
});
router.get('/get_user_by_email/:email', (req, res) => {
    const { email } = req.params;
    tableService._get(process.env.LOGIN_TABLE_ID,`?filterByFormula=({Email}='${email}')`)
        .then(req=> req.data)
        .then(records=>  res.json({emailIsRegister:records.total})
        )
})


router.post('/register', async (req, res) => {

        if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Body is empty' });
    }
    const { email, password, name, surname, patronymic } = req.body;
    if(!email?.length||!password?.length||!name?.length||!surname?.length){
        return res.status(400).json({ message: 'Не заполнены обязательные поля' });

    }

    const emailIsRegister = await get(`http://localhost:${process.env.PORT}/api/login/get_user_by_email/${email}`)
        .then(response=>  response.data.emailIsRegister === enums.hasEmailStatus.hasEmail ? true : false)
    if(emailIsRegister)
        return res.status(400).json({ error: 'Email уже зарегистрирован' });
    
    
     await post(`http://localhost:${process.env.PORT}/api/users/create_user`, req.body).then(response=> {
         console.log(response);
         const userId = response.data.recordId;
         if(!userId) return res.status(400).json({ error: 'Ошибка регистрации' });
         tableService._post(process.env.LOGIN_TABLE_ID,'', {
             records: [{
                 fields: {
                     "UserId": [
                         userId
                     ],
                     "Password": password,
                     "Email": email
                 }
             }
             ]
         })
             .then(req=> req.data)
             .then(records=> res.json({recordId: records.records[0].recordId,}))
     })
    


})



module.exports = router;

