import logo from './logo.svg';
import './App.css';

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
      <Header name="Jeevan"/>
      <Main text="amazing"/>
      <Footer year={new Date().getFullYear}/>
    </div>
  );
}

export default App;
