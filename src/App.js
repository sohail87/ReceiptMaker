import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';


import ReceiptsIndex from './components/receipts_index';
import ReceiptsNew from './components/receipts_new';
import ReceiptsViewSingle from './components/receipts_view_single';


class App extends Component {
  render() {   
    const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/receipts/new" component={ReceiptsNew} />
              <Route path="/receipts/:id" component={ReceiptsViewSingle} />
              <Route path="/" component={ReceiptsIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
