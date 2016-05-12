import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'

import configureStore from '../redux/store'
import { Provider } from 'react-redux'

// configure and create our store
// createStore(reducres, initialState)
const initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            text: 'Initial todo for demo purposes'
        }
    ],
    user: {
        username: 'Ray Lin',
        memberId: '69'
    }
}

let store = configureStore(initialState)

// Provider 是使用在應用程式的根元件內，負責將唯一的 store 傳下去給其他子元件
const root = (
    <Provider store={store}>
        <App />
    </Provider>
)

// Render
render(
    root,
    document.getElementById('app')
)


