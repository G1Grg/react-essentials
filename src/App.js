import React, {useState, useEffect, useReducer} from "react";
import './App.css';

// useState hook
// https://api.github.com/users/G1grg
function App({ login }) {
  // const [emotion, setEmotion] = useState("Happy");
  // const [checked, toggle] = useReducer(
  //   (checked) => !checked,
  //   false
  //   );
    
  const[data, setData] = useState(null);

  useEffect(() => {
    fetch ('https://api.github.com/users/${login}')
    .then ((response)=> response.json())
    .then((setData));   
  }, []);

  if (data){
   return <div>{JSON.stringify(data)}</div>
  }
  return <div> NO user found</div>
}
  // return (
  // <>
  // <h1>I am in a {emotion} state</h1>
  //  <button onClick ={() => setEmotion("Grumpy")}>
  //    Grumpy
  //  </button>
  //  <button onClick ={() => setEmotion("rude")}>
  //    Rude 
  //  </button>
  //  <button onClick ={() => setEmotion("sad")}>
  //    Sad
  //  </button>

  // <h1>I am using useReducer Hook</h1>
  // <input type ="checkbox"
  //   value ={checked}
  //   onChange={toggle}/>
  // <p>{checked ? "checked" : "not checked" }</p>
  
  
  // </>
  // )
  

export default App;
