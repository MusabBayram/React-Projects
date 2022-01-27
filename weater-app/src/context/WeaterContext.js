import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
	const [selectCity, setSelectCity] = useState({ value: 'İstanbul', label: 'İstanbul' });

	const apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${selectCity.value}&appid=62b7753b0293df5ea88773e462225a41`;
	const [weatherData, setWeatherData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(apiUrl, {
				headers: {
					'content-type': 'application/json',
					authorization: 'apikey 41f2hzPkRV2pPXgrgmjcd7:01XD3I1yKHYgAS2DLPK1yB',
				},
			})
			.then((res) => {
				setWeatherData(res.data);
				setLoading(false);
			});
	}, [apiUrl]);

	const values = {
		weatherData,
		setWeatherData,
		loading,
		setSelectCity,
		selectCity,
	};

	return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;