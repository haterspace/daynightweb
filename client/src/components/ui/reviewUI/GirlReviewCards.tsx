import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getReviewsThunk } from '../../../redux/slices/reviews/reviewThunk';

export default function GirlReviewCards(): JSX.Element {
  const reviews = useAppSelector((store) => store.reviews);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      void dispatch(getReviewsThunk(Number(id)));
    }, 1000);
  }, []);

  return (
    <div>
      {reviews.length > 0 ? (
        <Grid container direction="column" spacing={4}>
          {reviews.map((review) => (
            <Grid item key={review.id}>
              <Card>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <Typography sx={{ color: 'blue' }}>{review.User?.username}</Typography>
                    <Typography sx={{ mt: 3 }}>{review.text}</Typography>
                  </div>
                  <Typography sx={{ color: 'gray' }}>
                    {new Date(review.createdAt).toLocaleTimeString([], {
                      day: 'numeric',
                      month: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ fontSize: 15 }}>Отзывов пока нет</Typography>
      )}
    </div>
  );
}
