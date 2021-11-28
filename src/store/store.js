import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import studentReducer from '../reducers/studentReducer'
import tutorReducer from '../reducers/tutorReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        tutor: tutorReducer,
        student: studentReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore