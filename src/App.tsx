import React from 'react';
import './App.css';
import { Comp1 } from './components/comp1';
import RefComp1 from './components/forwarding Ref/refComp1';
import RefComp2 from './components/forwarding Ref/refComp2';
import Encapsulation from "./components/classesConcepts/encapsulation";
import Polymorphism from './components/classesConcepts/polymorphism';

interface a1 {
  login: "yes" | "no"
}

function App() {
  const [val, chngval] = React.useState<a1>({ login: "yes" });
  return (
    <div className="App">
      {/* {"yes" === val.login && <Comp1 name="ripper" num={54} tip={5} type="rich" />} */}
      {/* <RefComp1 /> */}
      {/* <Encapsulation /> */}
      <Polymorphism a="d"/>
    </div>
  );
}

export default App;
