import {useState} from 'react'
import './App.css'
import Box from './Box';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Form from './Form.jsx';
import View from './View.jsx';


function App () {

  const [count, setCount] = useState(0)
  // const [persons, setPersons] = useState ([
  //   {id:1, name: "Elias", title:"CTO", location:"Helsinki"},
  //   {id:2, name: "Sulaimon", title:"Developer", location:"Lagos"},
  //   {id:3, name: "Jeurg", title:"Designer", location:"Mallorca"},
  // ]);
  const [formData, setFormData] = useState({});
  // const [inputValue, setInputValue] = useState('');
  // const [formData, setFormData] = useState({
  //   fname: '',
  //   lname: '',
  //   phone: '',
  //   email: '',
  //   message: '',
  // });
  // const changeHandler = (event) => {
  //   setInputValue(event.target.value);
  // };
  const changeFormHandler = (event) => {
    const{name, value } = event.target;
    setFormData({[name]: value});
    //  setFormData(event.target.value)
     setFormData((prevState) => ({...prevState, [name]: value}));
     console.log(formData);
  };
  // const clickHandlerAdd = () => {
  //   setCounter(counter + 1);
   // console.log('foxes forever!');
//  };
//  const clickHandlerSub = () =>{
//   setCounter(counter - 1);
//  // console.log('foxes forever!');
// };
// const clickHandlerReset = () =>{
//   setCounter(0);
//  // console.log('foxes forever!');
// 



    // <>
    //  <div>
    //   <a href="https://vitejs.dev" target='_blank'>
    //   <img src={viteLogo} className="logo" alt="Vite logo" /> 
    //   </a>
    //   <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p> */
  //     // }
  return (

   <>
      <Header />
      <Form changeHandler={changeFormHandler} />
      <View {...formData} />
      <Footer />
    </>
  
  );
}

// export default App
export default App;


//     </div>
//     <Header/>
//     <input type="text" onChange={changeHandler}/>
//     <input type="text" onChange={changeHandler}/>
//     <input type="text" onChange={changeHandler}/>
//     <input type="text" onChange={changeHandler}/>

{/* 
    <p>Counter: {counter}</p>
    <button onClick={clickHandler()}>Add me!</button>
    
    <p><button onClick={clickHandler()}>Subtract me!</button></p>
//     <p><button onClick={clickHandler()}>Reset me!</button></p> 
//      */}
//     {persons.map((person) => (
//       <Box 
//       key={person.id}
//       name = {person.name}
//       title = {person.title}
//       location= {person.location}
//       />
//      ) )}
//       </>
//   );
// }
// export default App;

