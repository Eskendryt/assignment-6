import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log(value);
  };

  return (
    <div>
      <label htmlFor="inputField">Type something: </label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text here"
      />
    </div>
  );
};

export default App;
