import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const history = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
        <Stack direction="row" spacing={2}>
          <Button color="inherit" variant="outlined" onClick={()=>{history("/add")}}>Add a Recipe</Button>
          <Button color="inherit" variant="outlined" onClick={()=>{window.location.reload();}}>Refresh</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
