import React, { useContext } from 'react';
import { AppContext } from './App'; // Ensure AppContext is imported properly

function Child() {
    const value = useContext(AppContext);

    return (
        <div>
            <h1>Child</h1>
            <p>{value}</p>
        </div>
    );
}

export default Child;
