import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

const composeEnhancers = __DEBUG__ 
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
    : compose

const enhancers = []

export default createStore(reducer, composeEnhancers(...enhancers))