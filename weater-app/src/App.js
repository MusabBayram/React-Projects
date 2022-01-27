//import './App.css';
import SelectBox from './components/SelectBox';
import { WeatherProvider } from './context/WeaterContext';
;

function App() {
  return (
    <WeatherProvider>
      <SelectBox />
      adsadas
    </WeatherProvider>
  );
}

export default App;
