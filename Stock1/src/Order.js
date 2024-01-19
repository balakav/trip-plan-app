import React, { useState, Fragment } from 'react';
import './App.css';

const App = () => {
  const [inventoryItems, setInventoryItems] = useState([
    {
      name: 'Item 1',
      description: 'Description 1',
      quantity: 10,
      price: 10.99,
    },
    {
      name: 'Item 2',
      description: 'Description 2',
      quantity: 20,
      price: 19.99,
    },
    {
      name: 'Item 3',
      description: 'Description 3',
      quantity: 15,
      price: 14.99,
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
    price: '',
  });

  const [editItemIndex, setEditItemIndex] = useState(null);

  const handleFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newInventoryItem = {
      name: formData.name,
      description: formData.description,
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price),
    };

    setInventoryItems([...inventoryItems, newInventoryItem]);
    setFormData({
      name: '',
      description: '',
      quantity: '',
      price: '',
    });
  };

  const handleEditFormSubmit = (event, index) => {
    event.preventDefault();

    const editedItem = {
      name: formData.name,
      description: formData.description,
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price),
    };

    const updatedInventoryItems = [...inventoryItems];
    updatedInventoryItems[index] = editedItem;

    setInventoryItems(updatedInventoryItems);
    setEditItemIndex(null);
  };

  const handleEditClick = (index) => {
    setEditItemIndex(index);

    const selectedItem = inventoryItems[index];
    setFormData({
      name: selectedItem.name,
      description: selectedItem.description,
      quantity: selectedItem.quantity,
      price: selectedItem.price,
    });
  };

  const handleCancelClick = () => {
    setEditItemIndex(null);
    setFormData({
      name: '',
      description: '',
      quantity: '',
      price: '',
    });
  };

  const handleDeleteClick = (index) => {
    const updatedItems = inventoryItems.filter((item, i) => i !== index);
    setInventoryItems(updatedItems);
  };

  return (
    <div className="app-container">
      <h2>Add/Edit an Item</h2>
      <form
        onSubmit={editItemIndex !== null ? (e) => handleEditFormSubmit(e, editItemIndex) : handleAddFormSubmit}
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Enter item name..."
          value={formData.name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="description"
          required
          placeholder="Enter item description..."
          value={formData.description}
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="quantity"
          required
          placeholder="Enter quantity..."
          value={formData.quantity}
          onChange={handleFormChange}
        />
        <input
          type="number"
          step="0.01"
          name="price"
          required
          placeholder="Enter price..."
          value={formData.price}
          onChange={handleFormChange}
        />
        <button type="submit">{editItemIndex !== null ? 'Save' : 'Add'}</button>
        {editItemIndex !== null && <button onClick={handleCancelClick}>Cancel</button>}
      </form>

      <h2>Inventory List</h2>
      <ul>
        {inventoryItems.map((item, index) => (
          <li key={index}>
            <div>
              <strong>{item.name}</strong>
            </div>
            <div>Description: {item.description}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: ${item.price.toFixed(2)}</div>
            <div>
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => handleDeleteClick(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
