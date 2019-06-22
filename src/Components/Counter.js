import React from "react";
import "./Counter.css";
class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
  // var count = this.state.count
  //   if (count === 1) {
  //     this.setState({count: 0});
  //   }
  //   else {
  //     this.setState({ count: this.state.count + 1 })
     }
     render() {
       return (
         
         <container>
           <p className="card-text">Click Count: {this.state.count}</p>
             <button className="btn btn-light" onClick={this.handleIncrement}>
            <img src="https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png"></img>
          </button>
 
          <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/25-Pikachu.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/4-Charmander.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/10-Caterpie.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/149-Dragonite.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/133-Eevee.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/610-Axew.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/135-Jolteon.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/151-Mew.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/143-Snorlax.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/7-Squirtle.png"></img>
       </button>

       <button className="btn btn-light" onClick={this.handleIncrement}>
         <img src="https://static.pokemonpets.com/images/monsters-images-300-300/136-Flareon.png"></img>
       </button>
          </container>
      
       )
     }

    };

export default Counter;