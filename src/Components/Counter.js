import React from "react";
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

    };

export default Counter;