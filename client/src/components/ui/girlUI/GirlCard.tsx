import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { GirlType } from '../../../types/girlType';
import { useAppSelector } from '../../../redux/hooks';

type GirlCardPropType = {
  girl: GirlType;
};

export default function GirlCard({ girl }: GirlCardPropType): JSX.Element {
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.user);
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <CardMedia
            sx={{
              height: '250px',
              width: '150px',
              margin: '15px 0 0 15px',
              borderRadius: '15px',
            }}
            image={girl?.mainPhoto}
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography>Город: {girl?.city}</Typography>
            <Typography>Район: {girl?.cityArea}</Typography>
            <Typography>Размер груди: {girl?.bustSize}</Typography>
            <Typography>Рост: {girl?.height}</Typography>
            <Typography>Вес: {girl?.weight}</Typography>
            <Typography>1 час: {girl?.price}</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CardContent>
        <Typography>{girl?.name}</Typography>
        <Typography>{girl?.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/girls/${girl?.id}`)}>
          Подробнее
        </Button>
        {user.status === 'logged' && (
        <>
        <Button size="small">Избранное</Button>
        <Button size="small">Скрыть</Button>
        </>
        )}
      </CardActions>
    </Card>
  );
}
