import { Controller } from 'react-hook-form';
import { Autocomplete, TextField, Box } from '@mui/material';
import CustomLabel from 'components/customLabel';
import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type SelectProps = {
  data?: any;
  control: any;
  name: string;
  error?: any;
  label?: string | null;
  style?: any;
};

export default function FormSelect({
  control,
  data,
  name,
  label,
  error,
  style,
}: SelectProps) {
  const { t } = useTranslation();

  const theme = createTheme({
    typography: {
      body1: {
        // fontSize: 22,
      },
    },
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            '& label': {
              fontSize: 12,
            },
          },
          input: {
            fontSize: 12,
          },
          listbox: {
            fontSize: 12,
          },
        },
      },
    },
  });

  return (
    <Box sx={{ marginTop: '15px' }}>
      <CustomLabel>{label}</CustomLabel>

      <Controller
        name={name}
        control={control}
        rules={{
          required: 'field.is.required',
        }}
        render={({ field: { onChange, value } }) => (
          <ThemeProvider theme={theme}>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={data}
              sx={{
                width: '100%',
                marginTop: '4px',
                '.MuiInputBase-root ': { padding: '0 0 0 4px', height: '40px' },
                '.MuiFormHelperText-root': {
                  margin: '0',
                },
                '& .MuiAutocomplete-input, & .MuiInputLabel-root': {
                  fontSize: '14px',
                },
                ...style,
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={onChange}
                  error={Boolean(error?.[name])}
                  sx={{
                    '.MuiInputBase-root .MuiInputBase-input': {
                      padding: '10px 10px',
                      fontSize: '14px',
                      color: '#4D4D4D',
                      lineHeight: '20px',
                    },
                  }}
                />
              )}
              onChange={(event, values) => {
                onChange(values || null);
              }}
              value={value || null}
            />
          </ThemeProvider>
        )}
      />
      {error?.[name]?.type === 'required' && (
        <small style={{ color: 'red', fontSize: '11px' }}>
          {t(error[name].message)}
        </small>
      )}
    </Box>
  );
}
