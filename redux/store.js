import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// TODO: add middleware
// If DEV Level Can ADD redux-logger
const finalCreateStore = compose(
        applyMiddleware(thunk, logger())
    )(createStore)

// Producation Mode
// const finalCreateStore = compose(
//         applyMiddleware(thunk)
//     )(createStore)

// Redux 內只能有一個 store，這個 store 是基於我們所建立的許多 reducers 上
// Dev Mode
export default function configureStore(initialState = { todos: [], user: {} }) {
    return finalCreateStore(rootReducer, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined // Redux DevTool
        )
}

// Dev Prod
// export default function configureStore(initialState = { todos: [], user: {} }) {
//     return finalCreateStore(rootReducer, initialState)
// }
