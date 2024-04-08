const Counter = (props) => {
    return (
        <div>
            <p>Counter: {props.counterP}</p>
            <button onClick={props.clickHandler}>Inc by 1</button>
            <button onClick={props.clickHandler}>Dec by 1!</button>
        </div>
      );
}
 
export default Counter;