import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/store'
import { storeTutorInfo } from './actions/tutorActions'
import { storeStudentInfo } from './actions/studentActions'

const store = configureStore() 

if(localStorage.getItem("user")) {
  const user = JSON.parse(localStorage.getItem("user"))
  if(user.role === "admin") {
    store.dispatch(storeTutorInfo(user))
  } else if(user.role === "student") {
    store.dispatch(storeStudentInfo(user))
  }
} 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
