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
import SearchPage from './pages/searchPage';
import Mall from './pages/mall';
import Release from './pages/release';
import Purchase from './pages/purchase';
import People from './pages/people';
// 组件
import Footer from './components/footer';

function App() {
  return (
    <LocaleProvider locale={en_US}>
      <Provider store={store}>
        <div className="App">
          <React.Fragment>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/search" component={SearchPage} />
              <Route path="/mall" component={Mall} />
              <Route path="/release" component={Release} />
              <Route path="/purchase" component={Purchase} />
              <Route path="/People" component={People} />
              <Footer />
            </Router>
          </React.Fragment>
        </div>
      </Provider>
    </LocaleProvider>
  );
}

export default App;
