import React, { createContext } from 'react';
import Child from './Child';

export const AppContext = createContext();

function App() {
    const value = "Eskinder";

    return (
        <AppContext.Provider value={value}>
            <Child />
        </AppContext.Provider>
    );
}

export default App;
