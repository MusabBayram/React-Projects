import React, { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import CityList from '../context/CityList';
import CityContext from '../context/CityContext';
import WeatherContext from '../context/WeaterContext';

function SelectBox() {
  //const { city } = useContext(CityContext);
	//const { selectCity, setSelectCity } = useContext(WeatherContext);
  const [city, setCity] = useState([]);

	let options = [];

  useEffect(() => {
		setCity(CityList.city);
	}, [city]);

	city.map((city) => options.push({ value: city.name, label: city.name }));

	// const getSelectCity = (e) => {
	// 	setSelectCity({ value: e.value, label: e.value });
	// };
	const CustomStyle = {
		option: (base, state) => ({
			...base,
			backgroundColor: 'grey',
			color: 'black',
		}),
	};
	return (
		<div>
			<Select
				options={options}
				//onChange={(e) => getSelectCity(e)}
				//styles={CustomStyle}
				//defaultValue={selectCity}
			/>
		</div>
	);
}

export default SelectBox;
