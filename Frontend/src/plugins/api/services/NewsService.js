import {API_BASE_URL, fetchData} from "@/src/plugins/api/apiConfig.js";

class NewsService {
    constructor() {
    }

    // Получить всех новостей
    async getAllNews() {
        return fetchData(`${API_BASE_URL}/news`);
    }

    // Получить новости по ID
    async getNewsById(newsId) {
        return fetchData(`${API_BASE_URL}/news/${newsId}`);
    }
}

const service = new NewsService(API_BASE_URL);

// Экспортируем экземпляр
export default service;