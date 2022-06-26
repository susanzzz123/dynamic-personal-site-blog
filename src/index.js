import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
)
