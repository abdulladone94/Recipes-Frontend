import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
        <Stack direction="row" spacing={2}>
          <Button color="inherit" variant="outlined">Add a Recipe</Button>
          <Button color="inherit" variant="outlined">Refresh</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
