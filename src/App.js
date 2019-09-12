import React from 'react';
import './App.css';
// 本地化
import { LocaleProvider } from 'antd-mobile';
import en_US from 'antd-mobile/lib/locale-provider/en_US';
// 路由
import { BrowserRouter as Router, Route } from "react-router-dom";
// 状态管理
import { Provider } from 'react-redux';
import store from './store';
// 页面
import Home from './pages/home';
import Search from './pages/search';
import Mall from './pages/mall';
import Release from './pages/release';
import Purchase from './pages/purchase';
import People from './pages/people';
import ReleaseSuccess from './pages/releaseSuccess';
import ShoppingMall from './pages/shoppingMall';
import Buy from './pages/buy';

function App() {
  return (
    <LocaleProvider locale={en_US}>
      <Provider store={store}>
        <div className="App">
          <React.Fragment>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/mall" component={Mall} />
              <Route path="/release" component={Release} />
              <Route path="/purchase" component={Purchase} />
              <Route path="/people" component={People} />
              <Route path="/releaseSuccess" component={ReleaseSuccess} />
              <Route path="/shoppingMall" component={ShoppingMall} />
              <Route path="/buy" component={Buy} />
            </Router>
          </React.Fragment>
        </div>
      </Provider>
    </LocaleProvider>
  );
}

export default App;
