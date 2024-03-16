import React, { useState } from 'react';
import type { SelectChangeEvent } from '@mui/material';
import { Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { userSignUpThunk } from '../../../redux/slices/user/userThunk';

type IFormInput = {
  username: string;
  password: string;
  userType: string;
};

export default function SignUpPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const dispatch = useAppDispatch();

  const [selectedType, setSelectedType] = useState('');

  const userSignUpHandler: SubmitHandler<IFormInput> = async (data) => {
    await dispatch(userSignUpThunk({ ...data }));
  };

  const handleChange = (e: SelectChangeEvent): void => {
    setSelectedType(e.target.value);
  };

  return (
    <Grid container direction="column" spacing={6} alignItems="center" marginTop="70px">
      <Grid item>
        <Typography variant="h4">Регистрация</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          spacing={6}
          component="form"
          onSubmit={handleSubmit(userSignUpHandler)}
        >
          <Grid item>
            <TextField
              {...register('username', {
                required: true,
                maxLength: { value: 5, message: 'Максимальная длина 30 символов' },
              })}
              label="Логин"
              error={!!errors.username}
              helperText={errors.username && errors.username.message}
              FormHelperTextProps={{ sx: { position: 'absolute', marginTop: 7 } }}
              InputProps={{
                sx: { width: 320, borderRadius: 4 },
              }}
            />
          </Grid>
          <Grid item>
            <FormControl error={!!errors.userType}>
              <Select
                {...register('userType', { required: true })}
                value={selectedType}
                onChange={handleChange}
                displayEmpty
                sx={{ height: '30px', width: '320px', borderRadius: 4 }}
              >
                <MenuItem value="" disabled>
                  <em>Ваш гендер</em>
                </MenuItem>
                <MenuItem value="girl">Девушка</MenuItem>
                <MenuItem value="man">Мужчина</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              {...register('password', { required: true })}
              label="Пароль"
              error={!!errors.password}
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
              Зарегистрироваться
            </Button>
          </Grid>
          <Grid item textAlign="center">
            <Typography>
              Уже есть аккаунт?{' '}
              <Link to="/login" style={{ textDecoration: 'none' }}>
                Войти
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
