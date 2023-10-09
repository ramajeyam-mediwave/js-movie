
import React, { useState } from "react";

const Card = ({ values, deleteCard, UpdateCard }) => {
  const [isEdit, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(values.title);

  const handleUpdateClick = () => {
    setIsEditing(true); 
  };

  const handleSaveClick = () => {
    UpdateCard(updatedTitle);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEdit ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h2 id={values.id}> {values.title}</h2>
          <button onClick={deleteCard}>Delete</button>
          <button onClick={handleUpdateClick}>Update</button>
        </>
      )}
    </div>
  );
};

export default Card;