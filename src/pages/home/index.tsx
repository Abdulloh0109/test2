import Books from './books';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { MdClear } from 'react-icons/md';
import useDebounce from 'hook/useDebounce';
import CustomButton from 'components/button';
import { InputStyle } from 'components/InitialStyle';
import { TabPanel, a11yProps } from 'components/tabPanel';
import { InputAdornment, TextField } from '@mui/material';

export default function HomePage() {
  const [value, setValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState<string>('');
  const debouncedValue = useDebounce(search, 400);
  const [refetch, setRefetch] = useState<boolean>(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  const handleClear = () => {
    setRefetch(true);
    setSearch('');
  };

  const goToAdd = () => setOpenModal(true);

  return (
    <Box mt='25px'>
      <Box
        sx={{
          borderBottom: 0,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '15px',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Tab label='New' {...a11yProps(0)} />
          <Tab label='Reading' {...a11yProps(1)} />
          <Tab label='To Read' {...a11yProps(2)} />
          <Tab label='Finished' {...a11yProps(3)} />
        </Tabs>
        <Box gap='15px' display={'flex'}>
          {value === 0 && (
            <CustomButton onClick={goToAdd}>Add book</CustomButton>
          )}

          <TextField
            id='search'
            placeholder='Search for books'
            variant='outlined'
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={handleClear}
                  sx={{ cursor: 'pointer' }}
                  position='end'
                >
                  {search === '' ? '' : <MdClear />}
                </InputAdornment>
              ),
            }}
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
          />
        </Box>
      </Box>
      <TabPanel value={value} index={0}>
        <Books
          value={0}
          open={openModal}
          refetch={refetch}
          setOpen={setOpenModal}
          setRefetch={setRefetch}
          search={debouncedValue}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Books
          value={1}
          open={openModal}
          refetch={refetch}
          setOpen={setOpenModal}
          setRefetch={setRefetch}
          search={debouncedValue}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Books
          value={2}
          refetch={refetch}
          open={openModal}
          setOpen={setOpenModal}
          setRefetch={setRefetch}
          search={debouncedValue}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Books
          value={3}
          open={openModal}
          refetch={refetch}
          setOpen={setOpenModal}
          setRefetch={setRefetch}
          search={debouncedValue}
        />
      </TabPanel>
    </Box>
  );
}
