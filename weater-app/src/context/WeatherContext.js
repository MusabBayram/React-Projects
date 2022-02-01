import { createContext, useEffect, useState } from "react";

import { API_ENDPOINT } from "../constants";
import axios from "axios";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [selected, setSelected] = useState("İstanbul");
    const [weather, setWeather] = useState(null);
    const [currentLocationData, setCurrentLocationData] = useState(null);
    
    useEffect(() => {
        const url = `${API_ENDPOINT}${selected}&appid=${process.env.REACT_APP_API_KEY}`;

        axios(url).then((res) => setWeather(res.data));
    }, [selected])

    const values = {
        selected,
        setSelected,
        weather,
        currentLocationData,
        setCurrentLocationData
    }

    return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    );
};

export default WeatherContext;