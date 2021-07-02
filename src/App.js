import React, {useState} from "react";
import './App.css';

// useState hook

function App() {
  const [emotion, setEmotion] = useState("Happy");
  
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

  </>
  )
}

export default App;
