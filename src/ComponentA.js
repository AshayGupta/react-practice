import React from 'react';
import './style.css';

export default function ComponentA({onAddClicked}) {
  return (
    <div>
      <form className="compA-form" onSubmit={onAddClicked}>
        <div className="input-container">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="input-container">
          <label>Age</label>
          <input type="number" name="age" required />
        </div>
        <div className="input-container">
          <label>Education</label>
          <input type="text" name="education" required />
        </div>
        <div className="button-container">
          <input type="submit" value="ADD" />
        </div>
      </form>
    </div>
  );
}