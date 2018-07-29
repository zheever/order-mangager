import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './router/';
import registerServiceWorker from './registerServiceWorker';
//import './utils/setRem';
import { AppContainer } from 'react-hot-loader';
import './style/base.css';
import './utils/test'
import {Provider} from 'react-redux';
import store from './store/store';


//监听state变化
store.subscribe(() => {
  console.log(store.getState());
});

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component>
        </Component>
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}
  
render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}


registerServiceWorker();
