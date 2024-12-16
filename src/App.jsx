import React, { createContext, useContext } from 'react';
import Child from './Child';

// Create a context
const AppContext = createContext();

function App() {
    const value = "Hello from App!";

    return (
        <AppContext.Provider value={value}>
            <Child />
        </AppContext.Provider>
    );
}