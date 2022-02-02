import { useContext } from 'react';

import Card from '../Card';
import styles from './index.module.css';
import WeatherContext from '../../context/WeatherContext';

function List() {
  const { weather } = useContext(WeatherContext);
  console.log(weather);
  return (
  <div>
    <pre>{JSON.stringify(weather?.city, null, 2)}</pre>
    
    <div className={styles.ListContainer}>
      {weather?.list.map((day, index) => (
        <Card key={index}/>
      ))}
    </div>
    

  </div>);
}

export default List;
