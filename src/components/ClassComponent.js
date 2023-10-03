import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    console.log("inside constructor...");
    super(props);
    this.state = {
      fname: "Vishal",
      products: []
      //  fname:this.props.name
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("inside getDerivedStatefromprops");
    console.log("State is: ", state);
    console.log("Props is: ", props);
    return {
      fname: props.name
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount...");
    //  fetch("https://fakestoreapi.com/products")
    //  .then((res)=>res.json())
    //  .then((json)=> this.setState({
    //    products:json
    //  }));
    this.setState({
      fname: "Ritu"
    });
  }

  render() {
    return (
      <div>
        <p>My name is {this.state.fname}</p>
      </div>
    );
  }
}

export default ClassComponent;
