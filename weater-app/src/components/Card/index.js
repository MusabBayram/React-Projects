import React from 'react';

import styles from './index.module.css';
import moment from 'moment';
import 'moment/locale/tr';

function Card({day}) {
 
  return (
  <div className={styles.container}>
    <div className={styles.dayName}>
      {moment(day.dt * 1000).format("dddd")}
    </div> 
    <div>
      <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
    </div>
    <div className={styles.temp}>
      <span>{Math.ceil(day.main.temp_max-272.15)}°</span>
      /
      <span>{Math.ceil(day.main.temp_min-272.15)}°</span>
    </div>
  </div>
  );
}

export default Card;
