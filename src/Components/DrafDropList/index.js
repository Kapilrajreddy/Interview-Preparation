import React, { useState } from "react";

function DragDropList() {
  const [items, setItems] = useState(["Kapil", "Ram", "Shyam", "Venu"]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (event, index) => {
    setDraggedItem(index);
    event.dataTransfer.effectAllowed = "move";
    // Set data as text and store the index
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    if (index !== draggedItem) {
      // Swap items
      const updatedItems = [...items];
      const draggedItemContent = updatedItems[draggedItem];
      updatedItems[draggedItem] = updatedItems[index];
      updatedItems[index] = draggedItemContent;
      setItems(updatedItems);
      setDraggedItem(index); // Update draggedItem to current index
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={(event) => handleDragOver(event, index)}
          onDragEnd={handleDragEnd}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragDropList;
