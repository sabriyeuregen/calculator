import './App.css';
import { useState } from 'react';
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";

import * as math from 'mathjs'
const App=()=> {

  const [input,setInput] =useState("");
  const [result,setResult] =useState("");
 

  const addToInput = (val)=>{
    setInput((input) => [...input, val + " "])
    
  }

  const calculateResult= ()=>{
    const text = input.join("") //remove commas
    setResult(math.evaluate(text))//string valueları matematiksel ifadeye dönüştürür

  }
  const resetInput = ()=>{
    setInput("");
    setResult("");
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <Screen input={input} result={result}></Screen>
        <div className='buttons__wrapper'>
        <div className="topbuttons">
       <Buttons className="topbuttons__ac"  handleClick={resetInput} symbol="AC">AC</Buttons>
       <Buttons className="topbuttons__sign"  handleClick={addToInput} symbol="+">+/-</Buttons>
       <Buttons className="topbuttons__mod"  handleClick={addToInput} symbol="%">%</Buttons>
       </div>
        <div className='buttonbox'>
        <div className='buttonbox__list'>
        <Buttons  handleClick={addToInput} symbol="1" >1</Buttons>
        <Buttons  handleClick={addToInput} symbol="2">2</Buttons>
        <Buttons   handleClick={addToInput} symbol="3">3</Buttons>
        <Buttons  handleClick={addToInput} symbol="4">4</Buttons>
        <Buttons   handleClick={addToInput} symbol="5">5</Buttons>
        <Buttons  handleClick={addToInput} symbol="6" >6</Buttons>
        <Buttons  handleClick={addToInput} symbol="7">7</Buttons>
        <Buttons   handleClick={addToInput} symbol="8">8</Buttons>
        <Buttons  handleClick={addToInput} symbol="9">9</Buttons>
        <Buttons   handleClick={addToInput} symbol=".">.</Buttons>
        <Buttons   handleClick={addToInput} symbol="0">0</Buttons>
        <Buttons   handleClick={addToInput} symbol="00">00</Buttons>
        </div>
      </div>
      <div className="logicbuttons">
        <Buttons className="logicbuttons__divide" handleClick={addToInput} symbol="/" ></Buttons>
        <Buttons className="logicbuttons__impact"  handleClick={addToInput} symbol="*"></Buttons>
        <Buttons className="logicbuttons__removal"  handleClick={addToInput} symbol="-"></Buttons>
        <Buttons className="logicbuttons__addition"  handleClick={addToInput} symbol="+"></Buttons>
        <Buttons className="logicbuttons__equal"  handleClick={calculateResult} symbol="="></Buttons>
        </div>
        </div>
        </div>
      </div>
    
  );
}

export default App;
