import React from "react";
import Tree from "./tree";

class Domain extends React.Component {
  state = { flower: "" };
  componentDidMount() {
    this.renderTest();
  }
  render() {
    console.log("oomade component mamooli");
    return (
      <div>
        <h1 className="d-flex">hello {this.props.name}</h1>;<Tree></Tree>
      </div>
    );
  }
  renderTest = () => {
    console.log("mikhad setstate she too domain");
    this.setState({ flower: "gloriya" });
  };
}
export default Domain;
