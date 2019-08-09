import React from 'react';
import Header from "./common/header";
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";
import {GlobalStyle} from "./style";
import {GlobalStyleIcon} from './statics/iconfont/iconfont'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <GlobalStyleIcon/>
      <div>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/detail' exact component={Detail}/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
