import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <>
      <Hello name={'John'} surname={'Fox'} />
      <Hello name={'Vasya'} surname={'Ivanov'} />
      <Hello name={'Maria'} surname={'Smith'} />
    </>
  );
}

export default App;
