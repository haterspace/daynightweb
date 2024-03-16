import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';

const GirlInfoTable = React.memo(() => {
  const girls = useAppSelector((store) => store.girls);
  const { id } = useParams();
  const pickedGirl = girls.find((girl) => girl.id === Number(id));

  const rows = [
    { name: 'Город', value: pickedGirl?.city },
    { name: 'Район', value: pickedGirl?.cityArea },
    { name: 'Метро', value: pickedGirl?.underground },
    { name: 'Цвет волос', value: pickedGirl?.hairColor },
    { name: 'Телосложение', value: pickedGirl?.bodyComposition },
    { name: 'Интимная стрижка', value: pickedGirl?.privateHaircut },
    { name: 'Национальность', value: pickedGirl?.nationality },
    { name: 'Внешность', value: pickedGirl?.looks },
    { name: 'Грудь', value: pickedGirl?.bustSize },
    { name: 'Рост', value: pickedGirl?.height },
    { name: 'Вес', value: pickedGirl?.weight },
    { name: 'Цена за 1 час', value: pickedGirl?.price },
  ];

  return (
    <table style={{ fontSize: 18 }}>
      <tbody>
        {rows.map((el) => (
          <tr key={el.name} style={{ lineHeight: '2' }}>
            <td style={{ textAlign: 'right' }}>{el.name}:</td>
            <td style={{ paddingLeft: 40, textAlign: 'left' }}>{el.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default GirlInfoTable;
