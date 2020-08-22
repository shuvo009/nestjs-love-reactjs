import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import productStore from "../features/products/productStore"
export const history = createBrowserHistory()

const reducer = combineReducers({
    router: connectRouter(history),
    productStore
})

export const rootStore = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
})

export type IReducerState = ReturnType<typeof rootStore.getState>;