//Получаем значение PORT из .env файла
const port = import.meta.env.PORT || 3010;
// Базовый URL вашего API
export const API_BASE_URL = `http://localhost:${port}/api`;


/* Общая функция для выполнения запросов
* Универсальная функция для выполнения HTTP запросов
* @param {string} url - относительный путь (например, '/users')
* @param {object} options - опции fetch (method, body, headers и т.д.)
* @returns {Promise<any>} - Promise с данными ответа
*/
export async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error({
                ...response,
                message: `Ошибка: ${response.status} ${response.statusText}`
            });
        }

        return await response.json();
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        throw error;
    }
}


