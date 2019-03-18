const API_BASE_URL = '//localhost:5050/news';

const _fetchJson = (url, options) =>
    fetch(url, options).then(res => res.json()).catch(ex => console.error(ex));

export const addNews = news =>
    _fetchJson(API_BASE_URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(news)
    });

export const deleteNews = newsId =>
    _fetchJson(`${API_BASE_URL}/${newsId}`, {
        method: 'DELETE'
    });

export const getNews = () =>
    _fetchJson(API_BASE_URL);

export const setRead = (newsId, read = true) =>
    _fetchJson(`${API_BASE_URL}/${newsId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({read})
    });
