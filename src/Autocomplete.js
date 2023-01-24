import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Autocomplete() {
  const addClicked = (e) => {};
  let addVal = {};

  function changeinput(event, newInputValue, reason) {
    console.log(newInputValue);
    console.log(users);

    const filVal = users.filter((record) =>
      record.label.toLocaleLowerCase().includes(newInputValue)
    );

    console.log(filVal);

    if (!filVal) {
      addVal = { label: newInputValue, id: users.length + 1 };
    }
  }

  return (
    <form className="autocomplete-form" style={formStyle}>
      <Autocomplete
        disablePortal
        id="autocomplete-users"
        options={users}
        freeSolo={true}
        sx={{ width: 300 }}
        onInputChange={(event, newInputValue, reason) => {
          changeinput(event, newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      <div className="button-container">
        <Button type="submit" value="ADD" onClick>
          ADD
        </Button>
      </div>
    </form>
  );
}

const formStyle = {
  display: 'flex',
};

let users = [
  { label: 'Ashay Gupta', id: 1 },
  { label: 'Sumit Patrikar', id: 2 },
  { label: 'Pankaj Sing', id: 3 },
  { label: 'Jiten Kumar', id: 4 },
  { label: 'Jalaj Kishor', id: 5 },
  { label: 'Yejijipurapu DurgaRao', id: 6 },
  { label: 'Deoskar K', id: 7 },
];
