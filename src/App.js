import React, { Component } from 'react';
import Counter from './views/counter';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Reducers } from './redux/reducers'

const Store = createStore(Reducers)

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
          <Counter></Counter>
      </Provider>
    );
  }
}

export default App;
