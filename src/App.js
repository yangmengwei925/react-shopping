import React, { Component } from 'react';
import RootRouters from './router/index'
import {Provider} from 'react-redux'
import store from './store'
import '../src/App.css'
// import Home from './view/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
            <Provider store={store}>
            <RootRouters />
          </Provider>
      </div> 
    );
}
}

export default App;