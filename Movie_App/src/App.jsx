import React from 'react';
import './App.css';
import Movie from './components/Movie';
import Add from './components/Add';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function App(){
  return (
    <>
      <h1>Welcome to React session</h1>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MOVIE
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Movie />
      <Add />
    </>
  );
}

export default App;
