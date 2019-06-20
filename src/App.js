import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
        <header>
          <Navbar />
        </header>
        <div class="jumbotron"><h1>Clicky Game</h1>
          <p>Click on an image to earn points, but don't click on an image more than once!</p>
        </div>

    </div>

  );
}

export default App;
