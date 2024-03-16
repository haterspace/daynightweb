import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { userLoginThunk } from '../../../redux/slices/user/userThunk';

type IFormInput = {
  username: string;
  password: string;
};

export default function LoginPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const dispatch = useAppDispatch();

  const [loginErrorText, setLoginErrorText] = useState('');

  const userLoginHandler: SubmitHandler<IFormInput> = (data) => {
    dispatch(userLoginThunk(data))
      .unwrap()
      .catch(() => {
        setLoginErrorText('Неверный логин или пароль');
      });
  };

  return (
    <Grid container direction="column" spacing={6} alignItems="center" marginTop="70px">
      <Grid item>
        <Typography variant="h4">Вход</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          spacing={6}
          component="form"
          onSubmit={handleSubmit(userLoginHandler)}
        >
          <Grid item>
            <TextField
              {...register('username', {
                required: true,
                maxLength: { value: 30, message: 'Максимальная длина 30 символов' },
              })}
              label="Логин"
              error={!!errors.username || !!loginErrorText}
              helperText={(errors.username && errors.username.message) || loginErrorText}
              FormHelperTextProps={{ sx: { position: 'absolute', marginTop: 7 } }}
              InputProps={{
                sx: { width: 320, borderRadius: 4 },
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              {...register('password', { required: true })}
              label="Пароль"
              error={!!errors.password || !!loginErrorText}
              helperText={loginErrorText}
              FormHelperTextProps={{ sx: { position: 'absolute', marginTop: 7 } }}
              InputProps={{ sx: { width: 320, borderRadius: 4 } }}
            />
          </Grid>
          <Grid item textAlign="center">
            <Button
              sx={{
                height: '40px',
                borderRadius: '15px',
              }}
              variant="contained"
              type="submit"
            >
              Войти
            </Button>
          </Grid>
          <Grid item textAlign="center">
            <Typography>
              Нет аккаунта?{' '}
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                Регистрация
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
