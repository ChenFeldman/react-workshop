import {
    SET_NEWS_READ,
    DELETE_NEWS,
    ADD_NEWS,
    UPDATE_NEWS,
} from '../actions';

export const news = (state = [], action) => {
    let nextState = state;

    if (action.type === UPDATE_NEWS) {
        nextState = action.payload;
    }

    if (action.type === DELETE_NEWS) {
        nextState = nextState.filter(news => news.id !== action.payload);
    }

    if (action.type === SET_NEWS_READ) {
        nextState = nextState.map((news) => (
            news.id === action.payload.newsId ? {...news, read: action.payload.read} : news
        ))
    }

    if (action.type === ADD_NEWS) {
        nextState = [
            {
                ...action.payload,
                id: Date.now(),
                date: `${new Date()}`,
                read: false
            },
            ...nextState,
        ]
    }

    return nextState;
}
