import './App.css';
import Botton from './components/botton.jsx';
import logotipo from './images/img-matamune.png';
import Counter from './components/counter.jsx';
import { useState } from 'react';

function App() {

  const [clicNum, setNumClics] = useState(0);

  const manejarClic =() =>{
    setNumClics(clicNum + 1 );
  }

  const reloadCount = () =>{
    setNumClics(0);
  }
  
  return (
    <div className="App">
      <div className='logo'>
        <img 
          className='logo-counter'
          src={logotipo}  
          alt='logo de '  />
      </div>
      <div className='principal-counter'>
        <Counter clicNum={clicNum} />
        <Botton 
          text='Clic'
          isBottonClic={true}
          manejarClic={manejarClic} />
        <Botton
          text='Reload'
          isBottonClic={false}
          manejarClic={reloadCount} />
      </div>
    </div>
  );
}

export default App;