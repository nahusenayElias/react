import '../App'
import { useState } from 'react';

const Box = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Title: {props.title}</p>
            <p>Location: {props.location}</p>
        </div>
    );
};

function BoxList() {
    const [boxes, setBoxes] = useState([
        {id: 1, name: 'Elias'},
        {id: 2, name: 'Eljah'},
        {id: 3, name: 'Nahusenay'}
    ]);

}

export default Box;
