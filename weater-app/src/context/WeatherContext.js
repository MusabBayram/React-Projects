import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [selected, setSelected] = useState("istanbul");

    useEffect(() => {
        console.log(selected);
    }, [selected])
    const values = {
        selected,
        setSelected
    }
    return (
    <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>
    );
};

export default WeatherContext;