import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resources from './ressursers/resources';
import ressourcesData from './ressursers/resources';

const App = () => {
  return (
    <Router>
      <switch>
      <Route path="/html">
          <Resources category="html" data={resources} />
        </Route>
        <Route path="/css">
          <Resources category="css" data={resources} />
        </Route>
        <Route path="/javascript">
          <Resources category="javascript" data={resources} />
        </Route>
        <Route path="/react">
          <Resources category="react" data={resources} />
        </Route>
        <Route path="/headless-cms">
          <Resources category="headless-cms" data={resources} />
          </Route>
      </switch>
    </Router>
  );
};

export default App;