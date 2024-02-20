import React, { useState } from "react";
import Star from "./components/star";
import "./App.css";
import InputButton from "./components/input";

function App() {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = () => {
    console.log(inputValue);
    setCount(Number(inputValue));
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <InputButton
          onClick={handleClick}
          inputValue={inputValue}
          onChange={handleInputChange}
        />
        <ul className='card-body-stars u-clearfix'>
          <Star count={count} />
        </ul>
      </header>
    </div>
  );
}

export default App;
