/* eslint-disable react/jsx-props-no-spreading */
import type { SelectChangeEvent } from '@mui/material';
import { Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { createNewReviewThunk } from '../../../redux/slices/reviews/reviewThunk';

type IFormInput = {
  id: number;
  text: string;
  topPreference: string;
};

export default function GirlCommentForm(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const preferences = useAppSelector((store) => store.preferences);
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: SelectChangeEvent): void => {
    setSelectedValue(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ mode: 'onChange' });

  const createNewReviewHandler: SubmitHandler<IFormInput> = (data) => {
    try {
      void dispatch(createNewReviewThunk({ id: Number(id), formData: data }));
      reset();
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      component="form"
      onSubmit={handleSubmit(createNewReviewHandler)}
    >
      <Grid item>
        <FormControl error={!!errors.topPreference}>
          <Select
            {...register('topPreference', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Что понравилось?</em>
            </MenuItem>
            {preferences.map((el) =>
              Object.entries(el).map(([key, value]) => {
                if (key === 'classicSex') {
                  key = 'Классический секс';
                } else if (key === 'analSex') {
                  key = 'Анальный секс';
                } else if (key === 'groupSex') {
                  key = 'Групповой секс';
                } else if (key === 'forMarried') {
                  key = 'Услуги семеной паре';
                } else if (key === 'blowjob') {
                  key = 'Минет с презервативом';
                } else if (key === 'blowjobNoCondom') {
                  key = 'Минет без презерватива';
                } else if (key === 'deepBlowjob') {
                  key = 'Глубокий минет';
                } else if (key === 'cuni') {
                  key = 'Куннилингус';
                } else if (key === 'faceSitting') {
                  key = 'Фейсситтинг';
                } else if (key === 'anilingusForMe') {
                  key = 'Анилингус мне';
                } else if (key === 'anilingusForYou') {
                  key = 'Анилингус тебе';
                } else if (key === 'pose69') {
                  key = 'Поза 69';
                } else if (key === 'kiss') {
                  key = 'Целуюсь';
                } else if (key === 'toys') {
                  key = 'Игрушки';
                } else if (key === 'cumOnBoobs') {
                  key = 'Окончание на грудь';
                } else if (key === 'cumOnFace') {
                  key = 'Окончание на лицо';
                } else if (key === 'cumToMouth') {
                  key = 'Окончание в рот';
                } else if (key === 'rolePlays') {
                  key = 'Ролевые игры';
                } else if (key === 'strip') {
                  key = 'Стриптиз';
                } else if (key === 'massage') {
                  key = 'Массаж';
                } else if (key === 'escort') {
                  key = 'Сопровождение';
                }
                return value === true ? (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                ) : null;
              }),
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <TextField
          {...register('text', {
            required: true,
            minLength: { value: 5, message: 'Минимальная длина отзыва 5 символов' },
            maxLength: { value: 500, message: 'Максимальная длина отзыва 500 символов' },
          })}
          multiline
          rows={9}
          label="Ваш отзыв"
          error={!!errors.text}
          helperText={errors.text && errors.text.message}
          FormHelperTextProps={{ sx: { position: 'absolute', marginTop: 7 } }}
          InputProps={{ sx: { borderRadius: 4, height: 230, width: 600 } }}
        />
      </Grid>
      <Grid item>
        <Button type="submit">Отправить</Button>
      </Grid>
    </Grid>
  );
}
