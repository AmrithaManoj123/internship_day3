import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    name: 'Drishyam',
    dr: 'Jeethu Joseph',
    cat: 'Thriller',
    yr: 2013,
    poster: 'https://upload.wikimedia.org/wikipedia/en/9/9e/DrishyamMovie.jpg', // replace with actual poster link
  },
  {
    name: 'Inception',
    dr: 'Christopher Nolan',
    cat: 'Sci-fi',
    yr: 2010,
    poster: 'https://m.media-amazon.com/images/I/71DwIcSgFcS.jpg', // replace with actual poster link
  },
  {
    name: 'Kalki',
    dr: 'Nag Ashwin',
    cat: 'Sci-fi',
    yr: 2024,
    poster: 'https://images.filmibeat.com/img/popcorn/movie_posters/kalki2898ad-20240427175414-9647.jpg', // replace with actual poster link
  },
];

const Movie = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Movie Name</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Release Year</TableCell>
            <TableCell align="right">Poster</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dr}</TableCell>
              <TableCell align="right">{row.cat}</TableCell>
              <TableCell align="right">{row.yr}</TableCell>
              <TableCell align="right">
                <img src={row.poster} alt={`${row.name} poster`} style={{ width: 100, height: 'auto' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Movie;
