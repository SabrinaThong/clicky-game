import React from 'react';
import './App.css';
// import Navbar from "./Components/Navbar";
import Images from "./Components/Images";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
        <header>
          <p class="headContent">Clicky Game</p>
        </header>
        <div class="jumbotron"><h1>Clicky Game</h1>
          <p>Click on an image to earn points, but don't click on an image more than once!</p>
        </div>
      
      <Counter />

    </div>

  );
}


export default App;
