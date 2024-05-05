import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import {animals} from './animalsList';
import { useState } from 'react';

function App() {
const [animalsData, setAnimalsData] = useState(animals);

  const removeCard = (animal) => {
    const updatedArray = animalsData.filter(item => item.name !== animal);
    // console.log(animal, 'remove card was trggered');
setAnimalsData(updatedArray);

  };
  const likesHandler = (animal, action) => {
    const updatedArray = animalsData.map((item) => {
      if (item.name === animal) {
        if (action === 'add') {
        return {...item, likes: item.likes + 1};
      
    } else {
      return { ...item, likes: item.likes - 1};
    }
    // console.log(animal, 'action likes was trggered');

  } else {
    return item;
  }
});
setAnimalsData(updatedArray);
  };
  const removeLikes = (animal) => {
    console.log(animal, 'remove likes was trggered');
  }

  // const removeHandler = (name) => {
  //   const updatedArray = animals.filter((animal) => animal.name !== name);
  //   setAnimalsData(updatedArray);
  // };

  return (
    <>
    <Header/>
      <main>
        {animalsData.map((animal) => (
        <Card 
        key={animal.name} 
        {...animal}
        removeLikes={() => likesHandler(animal.name, 'remove')}
        addLikes={likesHandler.bind(this,animal.name, 'add')}
        removeCard={() => removeCard(animal.name)}
        />
        ))}
      </main>
    <Footer/>
    </>
  );
}

export default App


