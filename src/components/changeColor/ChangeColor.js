import React from "react";

class ChangeColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }

  changeColor = (event) => {
    const text = document.getElementById("text");

    event.preventDefault();
    this.setState({color: text.value});
    console.log("clicked");
  };
  
  render() {

    return (
      <>
        <h2>this color is : {this.state.color}</h2>
        <form id="color-form" onSubmit={this.changeColor}>
          <input id="text" type="text" placeholder="enter your color"/>
          <input type="submit" value="submit"/>
        </form>
      </>
    );
  }
}

export default ChangeColor;
