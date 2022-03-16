import './App.css';
import { Header } from './components/Header';
import {WeatherCard} from './components/WeatherCard';
import {Container} from 'react-bootstrap';

function App() {
  const now = new Date();
  console.log( now );
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <WeatherCard></WeatherCard>
      </Container>
      
    </div>
  );
}

export default App;
