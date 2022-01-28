import './App.css';
import axios from 'axios'
import Header from './components/Header';
import Reader2 from './components/Reader2';
import React from 'react';
import 'react-dropdown/style.css';


function App() {

  return (
    <div className="App"> 
      <Header />
      <div>
        <Reader2 />
      </div>
    </div>
  );
  
}

export default App;
