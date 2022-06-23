import * as React from 'react';
import './Spiner.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <div className='spiner'>
      <Box>
        <CircularProgress color="inherit"/>
      </Box>
    </div>

  );
}

export default Loading;