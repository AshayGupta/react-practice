import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

export default function Autocomplete() {
  const [users, setUsers] = useState(initData);
  let newUser = null;

  useEffect(() => {
    newUser = null;
  }, [users]);

  const addClicked = (e) => {
    e.preventDefault();
    if (!newUser) return;

    console.log('add user', newUser);
    setUsers([newUser, ...users]);
  };

  const changeUserInput = (event, newInputValue, reason) => {
    const filterResult = users.filter((record) =>
      record.label
        .toLocaleLowerCase()
        .includes(newInputValue.toLocaleLowerCase())
    );

    if (!filterResult.length) {
      newUser = { label: newInputValue, id: users.length + 1 };
    }
  };

  return (
    <form className="autocomplete-form" style={formStyle}>
      <Autocomplete
        disablePortal
        id="autocomplete-users"
        options={users}
        freeSolo={true}
        sx={{ width: 300 }}
        onInputChange={(event, newInputValue, reason) => {
          changeUserInput(event, newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      <div className="button-container">
        <Button
          type="submit"
          value="ADD"
          onClick={(e) => {
            addClicked(e);
          }}
        >
          ADD
        </Button>
      </div>
    </form>
  );
}

const formStyle = {
  display: 'flex',
};

let initData = [
  { label: 'Ashay Gupta', id: 1 },
  { label: 'Sumit Patrikar', id: 2 },
  { label: 'Pankaj Sing', id: 3 },
  { label: 'Jiten Kumar', id: 4 },
  { label: 'Jalaj Kishor', id: 5 },
  { label: 'Yejijipurapu DurgaRao', id: 6 },
  { label: 'Deoskar K', id: 7 },
];
