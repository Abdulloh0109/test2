import styles from './header.module.scss';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { Box, IconButton, MenuItem, Typography } from '@mui/material';
import { MdOutlineLogout, MdOutlineMailOutline } from 'react-icons/md';
import Menu from '@mui/material/Menu';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearUser } from 'redux/slices/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth, shallowEqual);

  const handleClose = () => setAnchorEl2(null);

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl2(event.currentTarget);

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <Box className={styles.panels}>
        <Typography className={styles.logo}>Logo</Typography>
      </Box>

      <IconButton
        onClick={handleClick2}
        size='small'
        sx={{ ml: 2 }}
        aria-controls={open2 ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open2 ? 'true' : undefined}
        className={styles.avatar}
      >
        <Avatar
          sx={{ border: anchorEl2 ? '4px solid #B8DBFB' : '4px solid #ffffff' }}
          alt='User name'
        >
          {user.name.substring(0, 1)}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl2}
        id='account-menu'
        open={open2}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1,
            '& .MuiAvatar-root': {
              width: 25,
              height: 25,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          style={{
            color: '#005AA9',
            fontSize: '16px',
            fontFamily: 'Inter',
            fontWeight: '900',
            lineHeight: '128%',
          }}
          onClick={handleClose}
        >
          <MdOutlineMailOutline
            style={{
              marginRight: '10px',
              fontSize: '20px',
              color: '#005AA9',
            }}
          />
          {user.email}
        </MenuItem>
        <MenuItem
          style={{
            color: '#4D4D4D',
            fontSize: '14px',
            fontFamily: 'Inter',
            lineHeight: '140%',
          }}
          onClick={() => handleLogout()}
        >
          <MdOutlineLogout
            style={{
              marginRight: '10px',
              fontSize: '20px',
              color: '#C2CFE0',
            }}
          />
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
