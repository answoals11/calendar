import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  CalendarContainer
} from './containers';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={CalendarContainer}></Route>
    </BrowserRouter>
  )
}

export default App;