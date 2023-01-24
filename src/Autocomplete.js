import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Autocomplete() {
  const addClicked = (e) => {
    alert(JSON.parse(e));
  };
  const chnageinput = (params) => {
console.log(params);
  }

  return (
    <form className="autocomplete-form" style={formStyle} onSubmit={addClicked}>
      <Autocomplete
        disablePortal
        id="autocomplete-users"
        options={users}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Users" onChange={chnageinput}/>}
      />
      <div className="button-container">
        <input type="submit" value="ADD" />
      </div>
    </form>
  );
}

const formStyle = {
  display: "flex",
};

let users = [
  { label: 'Ashay Gupta', id: 1 },
  { label: 'Sumit Patrikar', id: 2 },
  { label: 'Pankaj Sing', id: 3 },
  { label: 'Jiten Kumar', id: 4 },
  { label: 'Jalaj Kishor', id: 5 },
  { label: "Yejijipurapu DurgaRao", id: 6 },
  { label: 'Deoskar K', id: 7 }
];