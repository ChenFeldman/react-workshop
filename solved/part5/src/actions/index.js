import {
    addNews as addNewsApi ,
    getNews as getNewsApi,
    deleteNews as deleteNewsApi,
    setRead as setReadApi
} from '../api/apiService'

export const UPDATE_NEWS = 'updateNews';
export const updateNews = (news) => ({
    type: UPDATE_NEWS,
    payload: news,
})

export const getNews = () => {
    console.log('get news');
    return (
    (dispatch) => (
        getNewsApi()
            .then((response) => (dispatch(updateNews(response))))
    )
)}

export const SET_NEWS_READ = 'setNewsRead';
const setNewsRead = (newsId, read) => ({
    type: SET_NEWS_READ,
    payload: {
        newsId,
        read,
    },
})

const _setRead = (dispatch, newsId, read) => (
    setReadApi(newsId, read).then(({success}) => {
            if (success) {
                return dispatch(setNewsRead(newsId, read))
            }

            throw new Error(
                `Unable to set news ID# ${newsId} read state to ${read}.`
            )
        }
    ))

export const markUnread = (newsId) => (
    (dispatch) => _setRead(dispatch, newsId, false)
)

export const markRead = (newsId) => (
    (dispatch) => _setRead(dispatch, newsId, true)
)


export const DELETE_NEWS = 'deleteNews'
const deleteNewsAction = (newsId) => ({
    type: DELETE_NEWS,
    payload: newsId,
})

export const deleteNews = (newsId) => (
    (dispatch) => (
        deleteNewsApi(newsId).then(({success}) => {
            if (success) {
                return dispatch(deleteNewsAction(newsId))
            }

            throw new Error(`Unable to delete news ID# ${newsId}.`);
        })
    )
)


export const ADD_NEWS = 'addNews'
const addNewsAction = (newNews) => ({
    type: ADD_NEWS,
    payload: newNews,
})

export const addNews = (newNews) => (
    (dispatch) => (
        addNewsApi(newNews).then(({success}) => {
                if (success) {
                    return dispatch(addNewsAction(newNews))
                }
                throw new Error('Unable to send news!')
            }
        )
    ))
