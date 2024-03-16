import React, { useCallback } from 'react';
import { Typography } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';

const GetGirlTopPreference = React.memo(() => {
  const reviews = useAppSelector((store) => store.reviews);

  const getTopPreference = useCallback(() => {
    const arrayOfPreferences = reviews.flat().map((obj) => obj.topPreference);
    const countMap = new Map();

    arrayOfPreferences.forEach((preference) => {
      countMap.set(preference, (countMap.get(preference) || 0) + 1);
    });

    let maxElement;
    let maxCount = -1;

    countMap.forEach((count: number, preference: string) => {
      if (count > maxCount) {
        maxCount = count;
        maxElement = preference;
      }
    });

    return maxElement;
  }, [reviews]);

  return (
    <div>
      {reviews.length > 0 && (
        <Typography sx={{ fontSize: 25 }}>Топ услуга: {getTopPreference()}</Typography>
      )}
    </div>
  );
});

export default GetGirlTopPreference;
