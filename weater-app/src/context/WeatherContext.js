import { Children, createContext, useState } from "react";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [selected, setSelected] = useState("istanbul");

    return <WeatherContext.Provider value={selected}>{children}</WeatherContext.Provider>
}

export default WeatherContext;