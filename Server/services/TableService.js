require('dotenv').config();

const axios = require('axios');

class TablesService {
    constructor(tableId) {
        this.tableId=tableId;
        this.apiKey = process.env.TOKEN;
        this.baseURL = process.env.TABLES_API_URL;

        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            }
        });
    }

    // Получить все записи
    async getAllRecords() {
        try {
            const response = await this.client.get(`/${this.tableId}/records`);
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении записей:', error.response?.data || error.message);
            throw error;
        }
    }
    
    async getRecordsWithQuery(query) {
        try {
            const response = await this.client.get(`/${this.tableId}/records?${query}`);
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении записей:', error.response?.data || error.message);
            throw error;
        }
    }

    // Получить запись по ID
    async getRecordById(recordId) {
        try {
            const response = await this.client.get(`/tables/${this.tableId}/rows/${recordId}`);
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении записи:', error.response?.data || error.message);
            throw error;
        }
    }

    // Создать новую запись
    async createRecord(data) {
        try {
            const response = await this.client.post(`/tables/${this.tableId}/rows`, data);
            return response.data;
        } catch (error) {
            console.error('Ошибка при создании записи:', error.response?.data || error.message);
            throw error;
        }
    }

    // Обновить запись
    async updateRecord(recordId, data) {
        try {
            const response = await this.client.put(`/tables/${this.tableId}/rows/${recordId}`, data);
            return response.data;
        } catch (error) {
            console.error('Ошибка при обновлении записи:', error.response?.data || error.message);
            throw error;
        }
    }

    // Удалить запись
    async deleteRecord(recordId) {
        try {
            const response = await this.client.delete(`/tables/${this.tableId}/rows/${recordId}`);
            return response.data;
        } catch (error) {
            console.error('Ошибка при удалении записи:', error.response?.data || error.message);
            throw error;
        }
    }

    // Поиск с фильтрацией
    async searchRecords(filters) {
        try {
            const response = await this.client.get(`/tables/${this.tableId}/rows`, {
                params: filters
            });
            return response.data;
        } catch (error) {
            console.error('Ошибка при поиске:', error.response?.data || error.message);
            throw error;
        }
    }
}

module.exports = new TablesService();