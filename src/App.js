import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import dogs from './dogs';
import DogNav from './DogNav';
import DogList from './DogList';

// const dogs = [duke, perry, tubby, whiskey];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DogNav dogs={dogs} />
        <Switch>
          <Route exact path="/dogs"><DogList dogs={dogs} /></Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;
