import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

// 리덕스 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// 스토어생성
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
