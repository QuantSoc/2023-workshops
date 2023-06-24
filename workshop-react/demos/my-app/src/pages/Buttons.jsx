import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const Buttons = () => {
  const [count, setCount] = useState(0); // Rerenders whenever a state changes
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          setCount((foo) => foo - 1);
        }}
      >
        -
      </Button>
      <Typography variant="h4">{count}</Typography>
      {/* What if no ()=> is used? */}
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        +
      </Button>
    </Box>
  );
};
export default Buttons;
