import styles from './404.module.scss';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useNavigate();
  const goBackHome = () => history(-1);

  return (
    <Container className={styles.container}>
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant='h1' color='primary'>
          4<span className='rotate'>0</span>4
        </Typography>
        <Typography variant='h4' color='text.secondary'>
          Page not found
        </Typography>
        <Button
          onClick={goBackHome}
          variant='contained'
          color='primary'
          sx={{ marginTop: '20px' }}
        >
          Back
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
