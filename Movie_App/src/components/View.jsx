import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

const View = () => {
  return (
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
            {/* Add your menu icon here */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {/* Add your View and Read buttons here if needed */}
          <Button color="inherit">View</Button>
          <Button color="inherit">Read</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default View;
