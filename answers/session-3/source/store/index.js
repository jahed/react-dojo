import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

export default createStore(reducer)