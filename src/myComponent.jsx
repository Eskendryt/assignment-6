import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);


const addName = () => {
    setNames([...names, name]);
    setName("");
};

const deleteName = () => {
    setNames(names.slice(0, -1));
};

return (
<div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />


<button onClick={addName}>Add Name</button>
<button onClick={deleteName}>delete Name</button>

<ul>
    {names.map((item, index) => (<li key = {index}>{item}</li>))}
</ul>
</div>
);
}

export default MyComponent