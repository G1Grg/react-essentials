import React from "react";
import './App.css';
import table from './table.jpg'

const dishes =[
  "Food 1",
  "food 2",
  "food 3",
  "food 4",
  "food 5"
]

const dishesObject = dishes.map((dish,i)=>({id: i, title: dish}));

function Header(props){
  return(
    <header>
      <h1>This is {props.name}'s kitchen</h1>
    </header>
  )
}

function Main(props){
  return (
    <section>
      <h2><p>We serve {props.a} food</p></h2>
      <img 
      src={table} height={200} alt ="table for four"></img>
      <ul style ={{textAlign:"Left" }}>
        {props.dish.map((dishing)=>
        <li key={dishing.id}>
          {dishing.title}
        </li>)}
      </ul>
    </section>
  )
}


function Footer(props){
  return (
    <footer>
      <h3><p>copyright {props.year}</p></h3>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
      <Header name="Jeevan" />
      <Main text="amazing" dish ={dishesObject} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
