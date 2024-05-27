import { Button, CircularProgress } from '@mui/material';

type Prop = {
  children: string;
  onClick?: () => void;
  loading?: boolean;
  type?: any;
  style?: any;
  className?: string;
  model?: 'send' | 'export';
};

const LoadingButton = ({
  loading,
  onClick,
  children,
  type,
  style,
  className,
  model,
}: Prop) => {
  return (
    <Button
      sx={{
        height: model === 'send' ? '40px' : '36px',
        background: model === 'send' ? '#005aa9' : '#FFFFFF',
        color: model === 'send' ? '#ffffff' : '#005aa9',
        cursor: loading ? 'not-allowed' : 'pointer',
        fontFamily: 'Inter',
        fontSize: '16px',
        lineHeight: '24px',
        boxShadow: ' 0px 6px 18px rgba(0, 0, 0, 0.06)',
        borderRadius: '4px',
        padding: '8px 16px',
        textTransform: 'none',

        '&:hover': {
          background: model === 'send' ? '#005aa9' : '#FFFFFF',
        },

        '&.Mui-disabled': {
          opacity: '1',
          color: '#C0C0C0',
          background: '#D9D9D9',
        },
        ...style,
      }}
      onClick={onClick}
      type={type}
      className={className}
      disabled={loading}
    >
      {children}
      {loading && <CircularProgress sx={{ ml: 1 }} size={20} color='inherit' />}
    </Button>
  );
};

export default LoadingButton;
