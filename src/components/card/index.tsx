import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { BsShare } from 'react-icons/bs';
import { LuPencil } from 'react-icons/lu';
import BookImage from 'assets/image/1.jpg';
import { SlPencil } from 'react-icons/sl';
import { LuAlarmClock } from 'react-icons/lu';
import { MdDeleteOutline, MdMoreVert } from 'react-icons/md';
import {
  Menu,
  Box,
  Card,
  MenuItem,
  IconButton,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';

type DataProps = {
  title: string;
  author: string;
  cover: string;
  published: number;
};

type Props = {
  data: DataProps | any;
  setAdd: (e: boolean) => void;
  setDeleteModal: (e: boolean) => void;
};
const BookCard = ({ data, setDeleteModal, setAdd }: Props) => {
  const [like, setLike] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);

  const handleClose = () => setAnchorEl2(null);

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl2(event.currentTarget);

  return (
    <>
      <Card sx={{ width: '345px', maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton
              aria-haspopup='true'
              aria-label='settings'
              onClick={handleClick2}
              aria-expanded={open2 ? 'true' : undefined}
              aria-controls={open2 ? 'account-menu' : undefined}
            >
              <MdMoreVert />
            </IconButton>
          }
          title={data?.title || 'Darkula'}
          subheader={data?.author || 'Sadio Mane'}
          sx={{
            '.MuiCardHeader-content .MuiTypography-root': {
              width: '280px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
          titleTypographyProps={{ variant: 'h6' }}
        />
        <CardMedia
          height='194'
          component='img'
          image={data.cover || BookImage}
          alt='Bookmarks'
          sx={{ objectFit: 'contain' }}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box mt='10px' display='flex' alignItems='center' gap='8px'>
            <SlPencil /> {data.published}
          </Box>
          <Box mt='10px' display='flex' alignItems='center' gap='8px'>
            <LuAlarmClock /> 18 - minute read
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => setLike(!like)}
            aria-label='add to favorites'
          >
            {like ? <IoHeart color='red' /> : <CiHeart />}
          </IconButton>
          <IconButton aria-label='share'>
            <BsShare size='18px' />
          </IconButton>
        </CardActions>
      </Card>

      <Menu
        open={open2}
        id='account-menu'
        anchorEl={anchorEl2}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1,
            '& .MuiAvatar-root': {
              mr: 1,
              ml: -0.5,
              width: 25,
              height: 25,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          style={{
            color: '#4D4D4D',
            fontSize: '14px',
            fontFamily: 'Inter',
            lineHeight: '140%',
          }}
          onClick={() => setAdd(data)}
        >
          <LuPencil size='17px' style={{ marginRight: '8px' }} /> Edit
        </MenuItem>
        <MenuItem
          style={{
            color: '#4D4D4D',
            fontSize: '14px',
            fontFamily: 'Inter',
            lineHeight: '140%',
          }}
          onClick={() => setDeleteModal(data.id)}
        >
          <MdDeleteOutline size='20px' style={{ marginRight: '5px' }} /> Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default BookCard;
