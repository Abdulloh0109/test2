import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './globaContainer.module.scss';

type Props = {
  icon?: React.ReactElement;
  children?: any;
  title: string;
};

const GlobalContainer = ({ icon, title, children }: Props) => {
  return (
    <Box className={styles.container}>
      <Box component='div' className={styles.box}>
        {icon}
        <Typography variant='h1'>{title}</Typography>
      </Box>
      <Box component='div' className={styles.main}>
        {children}
      </Box>
    </Box>
  );
};

export default GlobalContainer;
