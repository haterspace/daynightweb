import React, { useCallback, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getGirlsThunk } from '../../redux/slices/girl/girlThunk';
import GirlCard from '../ui/girlUI/GirlCard';

const MainPage = React.memo(() => {
  const dispatch = useAppDispatch();
  const girls = useAppSelector((store) => store.girls);

  const girlCards = useCallback(
    () =>
      girls.map((girl) => (
        <Grid item key={girl.id} xs="auto">
          <GirlCard girl={girl} />
        </Grid>
      )),
    [girls],
  );

  useEffect(() => {
    void dispatch(getGirlsThunk());
  }, []);

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justifyContent="center"
      style={{ marginTop: '10px' }}
    >
      {girlCards()}
    </Grid>
  );
});

export default MainPage;
