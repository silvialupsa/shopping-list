import './App.css';
import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Quantity from './components/Quantity';

function App() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);


  const handleProductTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
    console.log(title)
  }

  const handleDecrement = (event) => {
    event.preventDefault();
    if(quantity === 1) return;
    setQuantity(quantity - 1);
    console.log(quantity)
  }

  const handleIncrement = (event) => {
    event.preventDefault();
    setQuantity(quantity + 1);
    console.log(quantity)
  }

  return (
    <div className="App">
      <form id="form">
        <Input
          maxLength={45}
          value={title}
          type="text"
          id="addProductTitle"
          placeholder="Add product title"
          onChangeCallback={handleProductTitle}
        />
        <Quantity decrement={handleDecrement}
          value={quantity}
          increment={handleIncrement}
        />
        <button id="addButton" type="submit">Add</button>
        </form>
    </div>
  );
}

export default App;
