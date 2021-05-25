import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import dogs from './dogs';
import DogNav from './DogNav';

// const dogs = [duke, perry, tubby, whiskey];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DogNav dogs={dogs} />
        <Switch>
          <Route path="/dude"><p>dude</p></Route>
          <Route><p>Home</p></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;
