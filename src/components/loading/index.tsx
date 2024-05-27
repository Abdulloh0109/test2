import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ({ style }: { style?: any }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
        ...style,
      }}
    >
      <CircularProgress color={'primary'} />
    </Box>
  );
};

export default Loading;
