import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CallIcon from '@mui/icons-material/Call';
import { getPickedGirlThunk } from '../../../redux/slices/girl/girlThunk';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getGirlPreferencesThunk } from '../../../redux/slices/preferences/preferenceThunk';
import GetGirlPreferences from '../../hocs/getGirlPreferenceFunctions/GetGirlPreferences';
import GirlCommentForm from '../../ui/girlUI/GirlCommentForm';
import GirlReviewCards from '../../ui/reviewUI/GirlReviewCards';
import GetGirlTopPreference from '../../hocs/getGirlPreferenceFunctions/GetGirlTopPreference';
import GirlInfoTable from '../../ui/girlUI/GirlInfoTable';

const girlPhotos = [
  {
    src: 'https://yt3.ggpht.com/Z8bEWPCo-fIFa9lvcqy0EWhIo7uNKkHrpdpar2vUUujRxS6ead8T_T5MMx8R6Yo7yVwoRr8hfdU=s400-c-k-c0x00ffffff-no-rj',
    alt: '1',
  },
  {
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/9729319/pub_6446d77f05680c15fbb61220_6446d79f05680c15fbb6176f/scale_1200',
    alt: '2',
  },
  {
    src: 'https://thefappening.pro/wp-content/uploads/2020/12/Kristina-Sweet-Nude-Luxury-Girl-TheFappening.Pro-5-1091x1536.jpg',
    alt: '3',
  },
  { src: 'https://dimonvideo.ru/files/newsimg/usernews/212414/img_392_le48bwv.jpg', alt: '4' },
  { src: 'https://rt.eropho.org/uploads/posts/2023-09/1695220612_01.webp', alt: '5' },
  { src: 'https://img.topfapgirls.com/1/1/783/luxurygirl/luxurygirl-221-1080px.jpg', alt: '6' },
];

export default function GirlPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.user);

  // Достаем конкретную девушку
  const girls = useAppSelector((store) => store.girls);
  const pickedGirl = girls.find((girl) => girl.id === Number(id));

  // Действия с кнопкой по отображению номера телефона
  const [showPhoneNumber, setShowPhoneNumber] = useState('Показать телефон');
  const showPhoneNumberHandler = (): void => {
    if (!pickedGirl) return;
    setShowPhoneNumber(pickedGirl.phoneNumber);
  };

  useEffect(() => {
    void dispatch(getPickedGirlThunk(Number(id)));
    setTimeout(() => {
      void dispatch(getGirlPreferencesThunk(Number(id)));
    }, 500);
  }, []);

  return (
    <Container>
      <Grid container display="flex" direction="column" spacing={1}>
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Typography sx={{ fontSize: 25, mt: 5, ml: -10 }}>
                {pickedGirl?.name}, {pickedGirl?.age} лет.
              </Typography>
            </Grid>
            <Grid item sx={{ mt: 5, ml: 2 }}>
              <GetGirlTopPreference />
            </Grid>
          </Grid>
          <Splide
            options={{
              type: 'fade',
              rewind: true,
              height: 500,
              width: 800,
            }}
            style={{ marginTop: 20, marginLeft: -100 }}
          >
            {girlPhotos.map((el) => (
              <SplideSlide key={el.src}>
                <img
                  src={el.src}
                  alt={el.alt}
                  style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                />
              </SplideSlide>
            ))}
          </Splide>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<CallIcon />}
            sx={{
              mt: -137,
              ml: 115,
              minWidth: 230,
              fontSize: 15,
              borderRadius: 15,
            }}
            onClick={showPhoneNumberHandler}
          >
            {showPhoneNumber}
          </Button>
          <Box sx={{ mt: -63, ml: 107, width: 400 }}>
            <GirlInfoTable />
          </Box>
        </Grid>
        <Typography sx={{ mt: 10, fontSize: 30, fontWeight: 'bold' }}>Предпочтения</Typography>
        <Grid item>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography sx={{ fontSize: 20 }}>Секс</Typography>
              <GetGirlPreferences type="sex" />
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 20 }}>Экстрим</Typography>
              <GetGirlPreferences type="extreme" />
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 20 }}>Доп</Typography>
              <GetGirlPreferences type="various" />
            </Grid>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 10, fontSize: 30, fontWeight: 'bold' }}>Отзывы</Typography>
        <Grid item mt={5}>
          <GirlReviewCards />
        </Grid>
        <Typography sx={{ mt: 10, fontSize: 30, fontWeight: 'bold' }}>Оставь отзыв</Typography>
        <Grid item>
          {user.status === 'logged' ? (
            <Grid item>
              <GirlCommentForm />
            </Grid>
          ) : (
            <Button onClick={() => navigate('/login')}>Войти и оставить отзыв</Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
