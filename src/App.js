import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Images from "./Components/Images";
import Counter from "./Components/Counter";
import images from "./images.json";
import Wrapper from "./Components/Wrapper";
import Jumbotron from "./Components/Jumbotron";


class App extends React.Component {
  state = {
    Images: images,
    clickedImage: [],
    count:0
  }

  image = event => {
    const currentImage = event.target.alt;
    const imageClicked = this.state.clickedImage.indexOf(currentImage) > -1;

    if (imageClicked) {
      this.setState({
        Images: this.state.Images.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
      
    }
    else {
      this.setState({
        Images: this.state.Images.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: this.state.count + 1
      }); 
    }
  };
  render() {

    return (
   
  <div> 
      <Navbar 
        score={this.props.count}   
      />
      <Jumbotron />
  
      <Counter />
      {/* <div className="wrapper">
          {this.state.Images.map(image => (
      <Images 
          imageClicked={this.imageClicked}
          key={image.id}
          id={image.id}
          image={image.image}
      />
      ))} */}
      </div>
       // </div>
       
      );
    }
  }


export default App;
