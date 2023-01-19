import React from 'react';
import './style.css';

export default function ComponentB({ tableData, onDeleteBtnClicked }) {
  let tblRows = tableData.map((row, i) => (
    <tr key={row.id}>
      <td>{i + 1}</td>
      <td>{row.name}</td>
      <td>{row.age}</td>
      <td>{row.education}</td>
      <td>
        <button
          className="delete-btn"
          onClick={() => onDeleteBtnClicked(row.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Education</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tblRows}</tbody>
      </table>
    </div>
  );
}
