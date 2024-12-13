import React, {useState, useEffect} from "React";

const [count, setCount] = useState(0);

function addCount (){
    setCount (c => c + 1);
}

return(
    <>
    <p>count: {count}</p>
    <button onClick={addCount}>Add</button>
    </>
)