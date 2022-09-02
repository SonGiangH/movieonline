import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { MoviesReducer } from './reducer/MoviesReducer'


const rootReducer = combineReducers({
    // Declare state here
    MoviesReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))