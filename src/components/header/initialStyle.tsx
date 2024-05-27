export const menu_style = {
  '& .MuiPaper-root': {
    borderRadius: 0,
    marginTop: '2px',
    minWidth: 'max-content',
    boxShadow: '0px 4px 10px rgba(117, 117, 117, 0.25)',
    '.menuItem': {
      color: '#4D4D4D',
      fontSize: '14px',
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      height: '32px',
      paddingLeft: '16px',
      wordWrap: 'break-word',
      paddingRight: '12px',
      minWidth: '147px',
      '&.active': {
        color: '#005AA9',
        background: '#F3F8FC',
      },
    },
    '& .MuiMenu-list': {
      padding: '0',
    },
    '& .MuiMenuItem-root': {
      paddingTop: '2px',
    },
  },
};
