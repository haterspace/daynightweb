import React, { useCallback } from 'react';
import image from '../../../icons/prefIcon.png';
import { useAppSelector } from '../../../redux/hooks';

type PreferenceType = {
  type: string;
};

const GetGirlPreferences = React.memo(({ type }: PreferenceType) => {
  const preferences = useAppSelector((store) => store.preferences);

  const truePreferences = useCallback(
    () =>
      preferences.flat().map((obj) =>
        Object.entries(obj).map(([key, value]) => {
          let displayName;
          if (value === true) {
            if (key === 'classicSex') {
              displayName = 'Классический секс';
            } else if (key === 'analSex') {
              displayName = 'Анальный секс';
            } else if (key === 'groupSex') {
              displayName = 'Групповой секс';
            } else if (key === 'forMarried') {
              displayName = 'Услуги семеной паре';
            } else if (key === 'blowjob') {
              displayName = 'Минет с презервативом';
            } else if (key === 'blowjobNoCondom') {
              displayName = 'Минет без презерватива';
            } else if (key === 'deepBlowjob') {
              displayName = 'Глубокий минет';
            } else if (key === 'cuni') {
              displayName = 'Куннилингус';
            } else if (key === 'faceSitting') {
              displayName = 'Фейсситтинг';
            } else if (key === 'anilingusForMe') {
              displayName = 'Анилингус мне';
            } else if (key === 'anilingusForYou') {
              displayName = 'Анилингус тебе';
            } else if (key === 'pose69') {
              displayName = 'Поза 69';
            } else if (key === 'kiss') {
              displayName = 'Целуюсь';
            } else if (key === 'toys') {
              displayName = 'Игрушки';
            } else if (key === 'cumOnBoobs') {
              displayName = 'Окончание на грудь';
            } else if (key === 'cumOnFace') {
              displayName = 'Окончание на лицо';
            } else if (key === 'cumToMouth') {
              displayName = 'Окончание в рот';
            } else if (key === 'rolePlays') {
              displayName = 'Ролевые игры';
            } else if (key === 'strip') {
              displayName = 'Стриптиз';
            } else if (key === 'massage') {
              displayName = 'Массаж';
            } else if (key === 'escort') {
              displayName = 'Сопровождение';
            } else {
              displayName = key;
            }
          } else {
            displayName = key;
          }

          let shouldDisplay = false;
          if (type === 'sex') {
            shouldDisplay = [
              'Классический секс',
              'Анальный секс',
              'Групповой секс',
              'Услуги семеной паре',
              'Минет с презервативом',
              'Минет без презерватива',
              'Глубокий минет',
              'Целуюсь',
              'Окончание на грудь',
              'Окончание на лицо',
              'Окончание в рот',
              'Поза 69',
            ].includes(displayName);
          } else if (type === 'extreme') {
            shouldDisplay = ['Анилингус мне', 'Анилингус тебе', 'Фейсситтинг', 'Игрушки'].includes(
              displayName,
            );
          } else if (type === 'various') {
            shouldDisplay = ['Массаж', 'Стриптиз', 'Ролевые игры', 'Сопровождение'].includes(
              displayName,
            );
          }

          return (
            <div
              key={key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 15,
              }}
            >
              {shouldDisplay ? (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={image} alt="" style={{ width: 70, marginRight: 5 }} />
                  {displayName}
                </span>
              ) : null}
            </div>
          );
        }),
      ),
    [preferences, type],
  );

  return <div style={{ marginTop: 30 }}>{truePreferences()}</div>;
});

export default GetGirlPreferences;
