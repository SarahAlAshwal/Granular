import { useEffect, useState } from 'react';

interface Props {
cities: string[]
temp: number []
}

function FavouritePage (props: Props) {


  const citiesRows = props.cities.map( (city, index) => {
    return(
      <div key={index}>
        <label>{city}</label>
        <label>{props.temp[index]}</label>
      </div>
    )
  });

  return (
  <>
    {citiesRows}
  </>
  );
};

export default FavouritePage;