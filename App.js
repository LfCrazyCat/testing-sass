import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resources from './ressursers/resources';
import ressourcesData from './ressursers/resources';

const App = () => {
  return (
    <Router>
      <switch>
        <Route path="/html">
          <Resources category="html" data={ressourcesData.html} />
        </Route>
        <Route path="/css">
          <Resources category="css" data={ressourcesData.css} />
        </Route>
        <Route path="/javascript">
          <Resources category="javascript" data={ressourcesData.javascript} />
        </Route>
        <Route path="/react">
          <Resources category="react" data={ressourcesData.react} />
          </Route>        
          <Route path="/sanity">
            <Resources category="sanity" data={ressourcesData.sanity} />
          </Route>
      </switch>
    </Router>
  );
};

export default App;