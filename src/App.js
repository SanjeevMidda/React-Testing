import "./styles.css";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import { useState } from "react";

function App() {

  let variableToUpdate = 0;

  function updateVariable(){
    variableToUpdate = variableToUpdate + 1;
    console.log(variableToUpdate);
  }

  let status = "This has been passed down!";

  let [toPass, setToPass] = useState(0);

  function toChange(e){
    setToPass(Number(e.target.value))
  }

  let toShow = true;
  return (
    <div className="layout">
      <A status = {status}/>
      <B status = {status} show = {toShow}/>
      <C status = {status} passed = {toPass}/>

      <input onChange={toChange}></input>
      <button onClick={updateVariable}>Click Me!</button>
    </div>
  );
}

export default App;
