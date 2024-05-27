import React from 'react';
import { Button } from '@mui/material';
import { AiOutlinePlusCircle } from 'react-icons/ai';

type Prop = {
  onClick?: () => void;
  children: string;
  style?: any;
  type?: 'submit' | 'button' | 'reset';
  className?: string;
};
const CustomButton = ({ onClick, children, style, type, className }: Prop) => {
  return (
    <Button
      disableRipple
      sx={{
        fontFamily: 'Inter',
        fontWeight: 700,
        height: '40px',
        fontSize: '16px',
        letterSpacing: '0.16px',
        background: '#005AA9',
        borderRadius: '4px',
        color: '#ffffff',
        border: 'none',
        textTransform: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '8px 20px',
        mt: '4px',
        width: '300px',
        ':hover': {
          background: '#005AA9',
          border: 'none',
        },
        ...style,
      }}
      variant='outlined'
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
      {<AiOutlinePlusCircle size={20} color='#ffffff' />}
    </Button>
  );
};

export default CustomButton;
