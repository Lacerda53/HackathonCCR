import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Main from './modules/Main';

function App() {  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/quiz"]} component={Main} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;