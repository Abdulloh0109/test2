import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './login.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import { LoginCredentials } from 'interfaces';
import { BiUserCircle } from 'react-icons/bi';
import { IoKeyOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { setUserData } from 'redux/slices/auth';
import CustomInput from 'components/customInput';
import { generateSign, generateSignature } from 'hook/generateSignature';

const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginCredentials>({
    defaultValues: {
      name: 'Jackson',
      email: 'jackson@gmail.com',
      key: 'key',
      secret: 'MySecret',
    },
  });

  const formSubmit = (e: LoginCredentials) => {
    axios
      .post('https://no23.lavina.tech/signup', e)
      .then((res) => {
        if (res.data.message === 'ok') {
          toast.success("Muvaffaqiyatli ro'yxatdan o'tildi");
          const sign = generateSign('GET', '/books', res.data.data.secret);
          dispatch(setUserData({ ...res.data.data, getAllSign: sign }));
          history('/');
        }
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(formSubmit)} className={styles.wrapper}>
        <h1 className={styles.title}>{process.env.REACT_APP_PROJECT_NAME}</h1>
        <CustomInput
          error={errors}
          name='name'
          control={control}
          label='Name'
          type='text'
          icon={<BiUserCircle />}
        />

        <Box mt='8px'>
          <CustomInput
            error={errors}
            name='email'
            control={control}
            label='Email'
            type='email'
            icon={<MdOutlineEmail />}
          />
        </Box>
        <Box mt='8px'>
          <CustomInput
            error={errors}
            name='key'
            control={control}
            label='Key'
            type='text'
            icon={<IoKeyOutline />}
          />
        </Box>
        <Box mt='8px'>
          <CustomInput
            error={errors}
            name='secret'
            control={control}
            label='Secret'
            type='text'
            icon={<IoKeyOutline />}
          />
        </Box>

        <Button disableRipple className={styles.button} type='submit'>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
