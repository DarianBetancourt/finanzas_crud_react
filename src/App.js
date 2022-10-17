import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Header title="Control Financiero"/>
      <Resume/>
    </div>
  );
}

export default App;
