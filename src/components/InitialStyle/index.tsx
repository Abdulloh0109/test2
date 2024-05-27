export const tableCellStyle = {
  color: '#D9D9D9',
  '&.Mui-checked': {
    color: '#005AA9',
  },
};
export const tableContainerStyle = {
  maxHeight: '100vh',
  background: '#f7f8fb',
};

export const TextAreaStyle = {
  marginTop: '4px',
  width: '100%',
  height: '100px',
  fontSize: '14px',
  color: '#4D4D4D',
  borderRadius: '5px',
  letterSpacing: '0.16px',
  background: 'transparent',
  borderColor: '#BEBFC0',
  boxSizing: 'border-box',
  padding: '10px 12px',
};

export const headerCellStyle = {
  fontWeight: '700',
  fontSize: '18px',
  border: 'none',
  paddingLeft: '10px !important',
};

export const headerCheckboxStyle = {
  color: '#979797',
  '&.Mui-checked': {
    color: '#005AA9',
  },
  '&.MuiCheckbox-indeterminate': {
    color: '#005AA9',
  },
};

export const tableCellBodyStyle = {
  '&.MuiTableCell-body': {
    color: '#4D4D4D',
  },
};
export const tableCellOptionsStyle = {
  position: 'sticky',
  right: '0',
  backgroundColor: 'white',
  padding: '5px 0 !important',
};

export const tableRowStyle = {
  '.MuiTableCell-body': {
    fontSize: '16px',
    padding: '0 18px ',
    border: 'none',
    marginBottom: '10px',
  },
};
export const headRowStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '5px !important',
  padding: '0',
  border: 'none',
};

export const checkboxStyle = {
  color: '#D9D9D9',
  '&.Mui-checked': {
    color: ' #005AA9',
  },
  '&.MuiCheckbox-indeterminate': {
    color: ' #005AA9',
  },
};

export const bodyCheckboxStyle = {
  color: '#979797',
  '&.Mui-checked': {
    color: '#005AA9',
  },
  '&.MuiCheckbox-indeterminate': {
    color: '#005AA9',
  },
};
export const InputStyle = {
  marginTop: '4px',
  width: '100%',
  height: '40px',
  fontSize: '14px',
  color: '#4D4D4D',
  letterSpacing: '0.16px',
  '.MuiFormHelperText-root': {
    padding: '0',
    margin: '0',
  },
};

export const showInputStyle = {
  marginTop: '5px',
  width: '100%',
  height: '40px',
  '.MuiInputBase-input': {
    padding: '10px 12px',
    fontFamily: 'Inter',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#4D4D4D',
  },
  '.MuiFormHelperText-root': {
    padding: '0',
    margin: '0',
  },
  '& fieldset': { border: 'none' },
  '.MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '0',
  },

  '.MuiInputBase-input ': {
    padding: '10px 0',
  },

  '.MuiInputBase-root .Mui-disabled': {
    opacity: '1',
    WebkitTextFillColor: '#4D4D4D',
  },
};

export const tableHeadSpanStyle: React.CSSProperties = {
  whiteSpace: 'nowrap',
  minWidth: '50px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const inputDataPicker = (error: any) => {
  return {
    width: '100%',
    border: error ? '1px solid red' : 'none',

    '.MuiInputBase-input': {
      padding: '0 0 0 12px',
      height: '40px',
    },
    '.MuiButtonBase-root': {
      color: '#C0C0C0',
      '& svg': {
        width: '20px',
        header: '20px',
      },
    },
  };
};

export const tableBodyStyle = () => {
  return {
    backgroundColor: '#ffffff',
    borderRadius: '5px !important',
    padding: '0',
    marginBottom: '10px',
    '.MuiTableCell-body': {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      fontFamily: 'Inter',
      border: 'none',
      backgroundColor: '#ffffff',
      padding: '3px 0 4px 10px',
      color: '#4D4D4D',
    },
  };
};

export const tableHeadStyle = (headCell: any) => {
  return {
    width: headCell.width,
    position: headCell.position,
    fontWeight: '700',
    fontFamily: 'Inter',
    paddingLeft: '10px',
    border: 'none',
    fontSize: '14px',
    color: '#000000',

    '&.MuiTableSortLabel-root svg': {
      display: headCell.sort ? 'inline-flex' : 'none',
      transform: 'rotate(0deg)',
    },
  };
};
export const addModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '5px',
  maxWidth: '600px',
  width: '100%',
  overflow: 'auto',
  height: 500,
  bgcolor: 'background.paper',
  border: 'transparent',
  boxShadow: 24,
  overflowX: 'hidden',
  // padding: '26px 30px 0 30px',
};

export const statusModal = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '5px',
  maxWidth: '600px',
  width: '100%',
  height: 200,
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: 'transparent',
  boxShadow: 24,
  padding: '30px',
  paddingBottom: '0',
  p: 4,
};

export const dataGridStyle = {
  '.MuiDataGrid-main': {
    height: '70vh !important',
  },
  '&.MuiDataGrid-root': {
    padding: '0 !important',
    border: 'none !important',
    background: '#fff !important',
  },
  '&.MuiDataGrid-root .MuiDataGrid-withBorderColor': {
    border: 'none !important',
  },
  '.MuiDataGrid-row': {
    marginTop: '10px !important',
    background: '#ffffff !important',
    height: '54px !important',
  },
  '&.MuiDataGrid-root .MuiDataGrid-columnHeaders': {
    background: '#ffffff !important',
  },
  '&.MuiDataGrid-cellCheckbox': {
    outline: 'none !important',
  },
  '&.MuiDataGrid-root .MuiDataGrid-iconSeparator': {
    display: 'none !important',
  },
  '.MuiDataGrid-columnHeaderTitle': {
    fontSize: '15px !important',
    fontFamily: 'Inter !important',
    fontWeight: '800 !important',
    color: '#4D4D4D',
  },
  ' &.MuiDataGrid-root .MuiDataGrid-withBorderColor': {
    fontSize: '14px !important',
    fontFamily: 'Inter !important',
    fontWeight: '700 !important',
    color: '#4D4D4D !important',
  },
  '.Mui-selected .MuiSvgIcon-root': {
    fill: '#005AA9 !important',
  },
  '.MuiSvgIcon-root': {
    fill: '#D9D9D9 !important',
  },

  '.MuiDataGrid-columnHeader': {
    fill: '#D9D9D9 !important',
  },

  '.MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitleContainerContent .Mui-checked .MuiSvgIcon-root':
    {
      fill: '#005AA9 !important',
    },

  '& .MuiDataGrid-row:hover': {
    borderRadius: '5px !important',
    background: '#FFF !important',
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.10) !important',
    cursor: 'pointer !important',
  },

  '.MuiButtonBase-root:hover': {
    background: 'transparent !important',
  },

  '.MuiDataGrid-footerContainer': {
    display: 'none',
  },
  '.Mui-disabled': {
    opacity: '0.5 !important',
  },
};
