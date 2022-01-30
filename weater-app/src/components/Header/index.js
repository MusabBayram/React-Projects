import React from 'react';
import { cities } from '../../constants';

function Header() {
  return <div>
      <select style={{padding: 10, marginTop: 100, flex: 1}}>
          {cities.map((city) => <option key = {city.id}>{city.name}</option>)}
      </select>
  </div>;
}

export default Header;
