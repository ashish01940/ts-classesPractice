import React, { Component } from 'react';

class mainMethod {
  protected confidentialInfo: string = " - I am jig saw, i wanna play a game";
  getInfo(name: string) {
    alert(name + this.confidentialInfo)
  }
}
class mainMethod2 extends mainMethod {
  getInfo(name: string) {
    (name == "ashish") ? super.getInfo(name) : alert("not allowed");
  }
}

interface polyPropsTypes {
  a: string
}
interface polyStateTypes {
  inputData: string,
}
export class polymorphism extends Component<polyPropsTypes, polyStateTypes> {
  constructor(props: any) {
    super(props)
    this.state = {
      inputData: "",
    }
  }
  objChild = new mainMethod2();
  render() {
    return <>
    <h3>NOTE:Enter key also works to submit</h3>
      <h1>only "ashish" can access using method overriding </h1>
      <input
        onKeyUp={(e: any) => { if (e.keyCode == 13) this.objChild.getInfo(this.state.inputData) }}
        onChange={(e) => this.setState({ "inputData": e.target.value })}
      ></input>
      <button onClick={() => this.objChild.getInfo(this.state.inputData)}>send</button>
    </>
  }
}

export default polymorphism;
