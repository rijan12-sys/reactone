import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Create from './Create';
import Event from './Event';


import "bootstrap/dist/css/bootstrap.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/Create" element = {<Create/>}></Route>
          <Route path = "/Event" element = {<Event/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
