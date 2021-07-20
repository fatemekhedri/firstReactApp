import React from "react";

class Tree extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
export default Tree;
