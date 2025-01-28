// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {createStore} from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './redux/reducer';
import store from './redux/store';


// const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
