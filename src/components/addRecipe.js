import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function AddRecipe() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },display: 'inline-grid'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Recipe Name" variant="standard" />
      <TextField id="standard-basic" label="Ingredents" variant="standard" />
      <TextField id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="standard" />
          <Button variant="contained" disableElevation>
  submit
</Button>
    </Box>
  );
}