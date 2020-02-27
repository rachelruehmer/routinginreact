import React from "react";
import{ BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import People from './People';


class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Link to ="/">Go Home </Link>
          <Link to ="/films">View Films </Link>
          <Link to ="/people">View People</Link>
          <Switch>
            <Route exact path= "/" component= {Home}/>
            <Route exact path= "/films" component= {Films}/>
            <Route exact path= "/people" component= {People}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;