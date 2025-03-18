import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Dark Knight', year: 2008 },
    { label: 'Pulp Fiction', year: 1994 },
    { label: 'Schindler\'s List', year: 1993 },
    { label: 'Forrest Gump', year: 1994 },
  ];
  
 
  
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300,  color:"white", backgroundColor:"white", borderRadius:"5px" }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
