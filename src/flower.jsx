import React from "react";
import { PureComponent } from "react";
class Flower extends PureComponent {
  state = { flower: "banafshe" };
  render() {
    console.log("rneder flower pure component");
    // this.renderTest();
    return <h4>hii {this.props.flowerName}</h4>;
  }
  // renderTest = () => {
  //   console.log("call nashode flower");
  //   this.setState({ flower: "gloriya" });
  // };
}
export default Flower;
