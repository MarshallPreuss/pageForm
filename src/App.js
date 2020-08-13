import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Display from './Components/Fetching';

function App() {
  return (
<Router>
    <div className="App">
      <nav>
        <ul className="Bar">
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to="/display">Input</Link>
          </li>
        </ul>
      </nav>
    </div>

    <Switch>
      <Route path='/display' component={Display} />
    </Switch>
</Router>
  );
}

export default App;
