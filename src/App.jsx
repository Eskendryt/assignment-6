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
      <span>Type something: </span>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text here"
      />
    </div>
  );
};

export default App;
