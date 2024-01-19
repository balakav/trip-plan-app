import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [inventoryItems, setInventoryItems] = useState([
    {
      name: "Item 1",
      description: "Description 1",
      quantity: 10,
      price: 10.99,
    },
    {
      name: "Item 2",
      description: "Description 2",
      quantity: 20,
      price: 19.99,
    },
    {
      name: "Item 3",
      description: "Description 3",
      quantity: 15,
      price: 14.99,
    },
  ]);

  const [addFormData, setAddFormData] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

  const [editItemIndex, setEditItemIndex] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newInventoryItem = {
      name: addFormData.name,
      description: addFormData.description,
      quantity: parseInt(addFormData.quantity),
      price: parseFloat(addFormData.price),
    };

    setInventoryItems([...inventoryItems, newInventoryItem]);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      name: editFormData.name,
      description: editFormData.description,
      quantity: parseInt(editFormData.quantity),
      price: parseFloat(editFormData.price),
    };

    const updatedInventoryItems = [...inventoryItems];
    updatedInventoryItems[editItemIndex] = editedItem;

    setInventoryItems(updatedInventoryItems);
    setEditItemIndex(null);
  };

  const handleEditClick = (event, index) => {
    event.preventDefault();
    setEditItemIndex(index);

    const formValues = {
      name: inventoryItems[index].name,
      description: inventoryItems[index].description,
      quantity: inventoryItems[index].quantity,
      price: inventoryItems[index].price,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditItemIndex(null);
  };

  const handleDeleteClick = (index) => {
    const updatedItems = inventoryItems.filter((item, i) => i !== index);
    setInventoryItems(updatedItems);
  };

  return (
    <div className="app-container">
         <h2>Add an Item</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter item name..."
          value={addFormData.name}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="description"
          required
          placeholder="Enter item description..."
          value={addFormData.description}
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="quantity"
          required
          placeholder="Enter quantity..."
          value={addFormData.quantity}
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          step="0.01"
          name="price"
          required
          placeholder="Enter price..."
          value={addFormData.price}
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item, index) => (
              <Fragment key={index}>
                {editItemIndex === index ? (
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditFormChange}
                      />
                    </td>
                    
                    <td>
                      <input
                        type="text"
                        name="description"
                        value={editFormData.description}
                        onChange={handleEditFormChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="quantity"
                        value={editFormData.quantity}
                        onChange={handleEditFormChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="0.01"
                        name="price"
                        value={editFormData.price}
                        onChange={handleEditFormChange}
                      />
                    </td>
                    <td>
                      <button type="submit">Save</button>
                      <button onClick={handleCancelClick}>Cancel</button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <button onClick={(e) => handleEditClick(e, index)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteClick(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

     
    </div>
  );
};

export default App;
