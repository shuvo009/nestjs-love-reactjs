import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import { ConnectedRouter } from 'connected-react-router'
import { history } from "./helpers/rootStore"
import { ProductList } from "./features/products/productList"
import axios from "axios"

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE;
  
  return (
    <div className="App">
      <ConnectedRouter history={history} >
        <Switch>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
