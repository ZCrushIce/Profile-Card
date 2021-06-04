import { useState } from 'react';
import './App.css';
import './Components/FontAwesomeIcons'
import Header from './Components/Header';
import Greeting from './Components/Greeting';
import Placeholder from './Components/Placeholder';
import Footer from './Components/Footer';
import Button from './Components/Button';
import Like from './Components/Like';

function App() {
  const [name, setName] = useState('');

  const nameHandler = () => {
    setName('My name is Zayed!');
  };

  const skillsHandler = () => {
    setName("I'm a Front-End Developer!");
  };

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <body>
      <div className='profile-card'>
        <Header/>
        <Greeting/>
        <Placeholder hold={name}/>
        <div className='btns'>
          <Button handleClick={nameHandler} text={'Name'}/>
          <Button handleClick={skillsHandler} text={'Skills'}/>
        </div>
        <div className='like-container'>
          <Placeholder hold={count}/>
          <Like countHandler={handleCount}/>
        </div>
        <Footer/>
      </div>
    </body>
  );
}

export default App;
