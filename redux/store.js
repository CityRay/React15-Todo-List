import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

// TODO: add middleware

let finalCreateStore = compose(
        applyMiddleware(logger())
    )(createStore)

// Redux 內只能有一個 store，這個 store 是基於我們所建立的許多 reducers 上
export default function configureStore(initialState = { todos: [] }) {
    return finalCreateStore(reducer, initialState)
}
