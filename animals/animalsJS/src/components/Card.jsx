/* import './components/Card.css'; */

const Card = ({name, likes,  addLikes, removeCard, removeLikes}) => {
  return (
    <div className="card">
    <h2>{name}</h2>
    <img src={`https://source.unsplash.com/400x400/?${name}`}/>
    <button onClick={removeLikes}>
      <span className="material-symbols-outlined">heart_minus</span></button>
      <p>{likes}</p>
    <button onClick={removeCard}> 
    <span className="material-symbols-outlined">cancel</span></button>
   <button onClick={addLikes}>
    <span className="material-symbols-outlined">heart_plus</span></button>
  
    </div>
  );
};

export default Card;