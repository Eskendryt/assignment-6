import React, {useState, useEffect} from "React";

 

function myComponent2(){
 const [count, setCount] = useState(0);
 const [color, setColor] = useState("green")

 useEffect(() => {
    document.title = `count: ${count} ${color}`;
 }, [count, color]);
   
    function addCount (){
        setCount (c => c + 1);
    }
    function subtractCount (){
        setCount (c => c - 1);
    }
    function changeColor(){
        setColor (c => c === "green" ? "red" : "green");
    }
    
    return(
        <>
        <p style={{color: color}}>count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>subtract</button>
        <br />
        <button onClick={changeColor}>change color</button>
        
        </>
    )
}

export default myComponent2;