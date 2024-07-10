import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Add = ({ addMovie }) => {
  const [name, setName] = useState('');
  const [director, setDirector] = useState('');
  const [category, setCategory] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [posterLink, setPosterLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      name: name,
      director: director,
      category: category,
      releaseYear: releaseYear,
      posterLink: posterLink,
    };
    addMovie(newMovie);
    setName('');
    setDirector('');
    setCategory('');
    setReleaseYear('');
    setPosterLink('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        '& .MuiInputBase-root': { color: 'white' },
        '& .MuiInputLabel-root': { color: 'white' },
        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'blue' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={3}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="director"
            label="Director"
            variant="standard"
            fullWidth
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="category"
            label="Category"
            variant="standard"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="releaseYear"
            label="Release Year"
            variant="standard"
            fullWidth
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="posterLink"
            label="Poster Link"
            variant="standard"
            fullWidth
            value={posterLink}
            onChange={(e) => setPosterLink(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3} container justifyContent="center" alignItems="center">
          <Button type="submit" variant="contained" sx={{ height: '100%' }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Add;
