import type { SelectChangeEvent } from '@mui/material';
import { FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const cities = [];
const hairColors = ['Блондинка', 'Брюнетка', 'Шатенка', 'Рыжий', 'Каштановый'];
const bodyCompositions = ['Худая', 'Стройная', 'Спортивная', 'Полная'];
const privateHaircuts = ['Полная депиляция', 'Бикини линия', 'Треугольник', 'Натуральная'];
const nationalities = [
  'Русская',
  'Белоруска',
  'Казашка',
  'Китаянка',
  'Кореянка',
  'Татарка',
  'Украинка',
  'Кабардинка',
  'Узбечка',
  'Армянка',
  'Негритянка',
];
const looks = [
  'Азиатская',
  'Африканская',
  'Кавказская',
  'Латино',
  'Мулатка',
  'Славянская',
  'Татарка',
  'Метиска',
];

export default function CreateGirlCard(): JSX.Element {
  type IFormInput = {};
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ mode: 'onChange' });

  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (e: SelectChangeEvent): void => {
    setSelectedValue(e.target.value);
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <TextField
          {...register('name', {
            required: true,
            minLength: { value: 5, message: 'Минимальная длина отзыва 5 символов' },
            maxLength: { value: 50, message: 'Максимальная длина отзыва 500 символов' },
          })}
        />
      </Grid>
      <Grid item>
        <FormControl error={!!errors.age}>
          <Select
            {...register('age', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Ваш возраст</em>
            </MenuItem>
            {Array.from({ length: 50 - 18 + 1 }, (_, index) => (
              <MenuItem key={18 + index} value={18 + index}>
                {18 + index}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl error={!!errors.bustSize}>
          <Select
            {...register('bustSize', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Размер груди</em>
            </MenuItem>
            {Array.from({ length: 6 - 1 + 1 }, (_, index) => (
              <MenuItem key={1 + index} value={1 + index}>
                {1 + index}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl error={!!errors.height}>
          <Select
            {...register('height', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Рост</em>
            </MenuItem>
            {Array.from({ length: 200 - 140 + 1 }, (_, index) => (
              <MenuItem key={140 + index} value={140 + index}>
                {140 + index}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl error={!!errors.weight}>
          <Select
            {...register('weight', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Вес</em>
            </MenuItem>
            {Array.from({ length: 100 - 40 + 1 }, (_, index) => (
              <MenuItem key={40 + index} value={40 + index}>
                {40 + index}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl error={!!errors.hairColor}>
          <Select
            {...register('hairColor', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Цвет волос</em>
            </MenuItem>
            {hairColors.map((color) => (
              <MenuItem key={color.id}>{color}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl error={!!errors.bodyComposition}>
          <Select
            {...register('bodyComposition', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Телосложение</em>
            </MenuItem>
            {bodyCompositions.map((body) => (
              <MenuItem key={body.id}>{body}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl error={!!errors.privateHaircut}>
          <Select
            {...register('privateHaircut', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Интимная стрижка</em>
            </MenuItem>
            {privateHaircuts.map((cut) => (
              <MenuItem key={cut.id}>{cut}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl error={!!errors.nationality}>
          <Select
            {...register('nationality', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Национальность</em>
            </MenuItem>
            {nationalities.map((nation) => (
              <MenuItem key={nation.id}>{nation}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl error={!!errors.looks}>
          <Select
            {...register('looks', { required: true })}
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            sx={{ height: '30px', width: '320px', borderRadius: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Внешность</em>
            </MenuItem>
            {looks.map((look) => (
              <MenuItem key={look.id}>{look}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
