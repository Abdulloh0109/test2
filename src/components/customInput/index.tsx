import { InputAdornment, TextField, Box } from '@mui/material';
import { InputStyle } from 'components/InitialStyle';
import CustomLabel from 'components/customLabel';
import React from 'react';
import { Controller } from 'react-hook-form';

type ComponentTypes = {
  label?: string | null;
  icon?: React.ReactElement;
  name?: any;
  control?: any;
  error?: any;
  type?: 'email' | 'password' | 'text' | 'number';
  placeholder?: string;
  required?: any;
  disabled?: boolean;
};

const CustomInput = ({
  label = '',
  icon,
  name,
  control,
  error,
  type = 'text',
  placeholder,
  required = true,
  disabled,
}: ComponentTypes) => {
  return (
    <Box style={{ width: '100%' }}>
      <CustomLabel>{label}</CustomLabel>

      <Controller
        name={name}
        control={control}
        rules={{
          required: required === true && 'field.is.required',
        }}
        render={({ field }) => (
          <TextField
            autoComplete='off'
            disabled={disabled}
            {...field}
            type={type}
            placeholder={placeholder}
            value={field.value || ''}
            fullWidth={true}
            sx={{
              ...InputStyle,
              '.Mui-disabled': {
                overflow: 'hidden',
                borderColor: '#BDBDBD',
              },
              '.MuiInputBase-input': {
                padding: '10px 12px',
                fontFamily: 'Inter',
                fontSize: '14px',
                lineHeight: '20px',
              },
              '.MuiInputAdornment-root ': { marginRight: '0' },
            }}
            error={Boolean(error?.[name])}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>{icon}</InputAdornment>
              ),
            }}
          />
        )}
      />

      {error?.[name]?.type === 'required' && (
        <small style={{ color: 'red', fontSize: '11px' }}>
          {error[name].message}
        </small>
      )}
    </Box>
  );
};

export default CustomInput;
