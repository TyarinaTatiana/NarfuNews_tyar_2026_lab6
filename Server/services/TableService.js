// Загружаем переменные из файла .env в process.env
require('dotenv').config();

//Подключаем библиотеку axios для HTTP-запросов
const axios = require('axios');

//Создаем класс
class TablesService {
    //
    constructor(tableId) {
        this.tableId=tableId; // ID таблицы, с которой работаем. Пердаем из контроллера
        this.apiKey = process.env.TOKEN; // Берём токен из переменных окружения
        this.baseURL = process.env.TABLES_API_URL; // Базовый URL API

        // Создаём настроенный экземпляр axios что бы не прописывать постоянно токен
        this.client = axios.create({
            baseURL: this.baseURL,  // Базовый URL для всех запросов КОНТРОЛЛЕРА
            headers: {
                'Authorization': `Bearer ${this.apiKey}`, // Токен авторизации
                'Content-Type': 'application/json' // Тип данных
            }
        });
    }

    // Получить все записи
    async _get(url) {
        try {
            // выполняем запрос
            const response = await this.client.get(`/${this.tableId}/records${url}`);
            // Возвращаем только данные
            return response.data;
        } catch (error) {
            //обработка ошибок
            console.error('Ошибка при получении записей:', error.response?.data || error.message);
            throw error;
        }
    }
    
    
    // Создать новую запись
    async _post(url, data) {
        try {
            // выполняем запрос
            const response = await this.client.post(`/${this.tableId}/records${url}`, data);
            // Возвращаем только данные
            return response.data;
        } catch (error) {
            //обработка ошибок
            console.error('Ошибка при создании записи:', error.response?.data || error.message);
            throw error;
        }
    }

    // Обновить запись
    async _put(url, data) {
        try {
            // выполняем запрос
            const response = await this.client.put(`/${this.tableId}/records/${url}`, data);
            // Возвращаем только данные
            return response.data;
        } catch (error) {
            //обработка ошибок
            console.error('Ошибка при обновлении записи:', error.response?.data || error.message);
            throw error;
        }
    }

    // Удалить запись
    async _delete(url) {
        try {
            // выполняем запрос
            const response = await this.client.delete(`/${this.tableId}/rows/${url}`);
            // Возвращаем только данные
            return response.data;
        } catch (error) {
            //обработка ошибок
            console.error('Ошибка при удалении записи:', error.response?.data || error.message);
            throw error;
        }
    }
}

module.exports = new TablesService();