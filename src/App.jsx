import { useState } from "react";

const App = () => {

  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Eskndr",
      age: 10,
    },
    {
      id: 2,
      name: "Nebi",
      age: 15,
    },
    {
      id: 3,
      name: "Thomas",
      age: 20,
    },
  ]);


  const handleEdit = (id) => {
    const updateList = userList.map((item) => {
      if (id === item.id) {
        const editedName = prompt("EDit name", item.name);
        const editedAge = prompt("Edit Age", item.age);

        return {
          ...item, name: editedName !== null ? editedName : item.name,
          age: editedAge !== null ? editedAge : item.age,
        };
      }
      return item;
    });
    setUserList(updateList);
  };

  return (
    <div>
      {userList.map((item) => (
        <div>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <button onClick={() => handleEdit(item.id)}>Edit</button>
        </div>
      ))}
    </div>
  )

}

export default App;