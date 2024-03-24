import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const name = "Elias Nahusenay";
const first_page = 2022;

const Demo = () => {
  return (
    <div>
    <h1>Hello, My Name Is {name}</h1>
    <p>I have {2024 - first_page} years of building web pages.</p>
    <Box name="Elias" title="CEO" age="29"/>
    <Box name="Kati" title="CEO" age="20"/>
    <Box name="James" title="CEO" age="23"/>
    <Box name="Hiwi" title="CEO" age="33"/>
    <Box name="Elad" title="CEO" age="44"/>

  </div>
 );
};

const Box = (props) => {
  return(
    <div>
      <p>Name: {props.name}</p>
      <p>title:{props.title}</p>
      <p>age:{props.age}</p>
    </div>
  );
};




  // <div>
  //   <h1>Hello, my name is {name}</h1>
  //   <p>I have {2024 - first_page} years of building web pages.</p>
  // </div>



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Demo/>
  </React.StrictMode>,
);
