import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { MoviesReducer } from './reducer/MoviesReducer'
import { TVReducer } from './reducer/TVReducer'


const rootReducer = combineReducers({
    // Declare state here
    MoviesReducer,
    TVReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))