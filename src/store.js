import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import article from './reducers/article';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';
import articleList from './reducers/articleList'
import profile from './reducers/profile';
import editor from './reducers/editor';


const reducer = combineReducers({
    article,
    auth,
    common,
    home,
    settings,
    articleList,
    profile,
    editor,
});

const store = createStore(reducer, applyMiddleware(promiseMiddleware, localStorageMiddleware));

export default store;