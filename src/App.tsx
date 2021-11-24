import React from 'react';
import './App.css';
import { Comp1 } from './components/comp1';

interface a1 {
  login: "yes" | "no"
}

function App() {
  const [val, chngval] = React.useState<a1>({ login: "yes" });
  return (
      <div className="App">
        {"yes" === val.login && <Comp1 name="ripper" num={54} tip={5} type="rich" />}
      </div>
  );
}

export default App;
