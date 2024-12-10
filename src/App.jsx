import { useState } from "react";
import "./App.css"; // Import the CSS file

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
        const editedName = prompt("Edit name", item.name);
        const editedAge = prompt("Edit age", item.age);

        return {
          ...item,
          name: editedName !== null ? editedName : item.name,
          age: editedAge !== null ? parseInt(editedAge) : item.age,
        };
      }
      return item;
    });
    setUserList(updateList);
  };

  return (
    <div className="container">
      <h1 className="title">User List</h1>
      <div className="user-list">
        {userList.map((item) => (
          <div className="user-card" key={item.id}>
            <p className="user-name">Name: {item.name}</p>
            <p className="user-age">Age: {item.age}</p>
            <button className="edit-button" onClick={() => handleEdit(item.id)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
