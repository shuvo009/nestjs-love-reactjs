import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import { ConnectedRouter } from 'connected-react-router'
import { history } from "./helpers/rootStore"
import { ProfileSkillEdit } from "./features/products/productList"

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history} >
        <Switch>
          <Route path="/">
            <ProfileSkillEdit />
          </Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
