import {WeatherProvide} from "./Context/WeatherContext";
import Container from "./Components/Container";
import "./App.css"

function App() {
  return (
    <WeatherProvide>
      <Container/>
    </WeatherProvide>
  );
}

export default App;
