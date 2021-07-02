import React, {useState, useReducer} from "react";
import './App.css';

// useState hook

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
    );
  
   
  return (
  <>
  <h1>I am in a {emotion} state</h1>
   <button onClick ={() => setEmotion("Grumpy")}>
     Grumpy
   </button>
   <button onClick ={() => setEmotion("rude")}>
     Rude
   </button>
   <button onClick ={() => setEmotion("sad")}>
     Sad
   </button>

  <h1>I am using useReducer Hook</h1>
  <input type ="checkbox"
    value ={checked}
    onChange={toggle}/>
  <p>{checked ? "checked" : "not checked" }</p>
  
  
  </>
  )
}

export default App;
