import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <header>
      <h1>This is eve's kitchen</h1>
    </header>
  )
}

function Main(){
  return (
    <section>
      <h2><p>We serve delicious food</p></h2>
    </section>
  )
}

function Footer(){
  return (
    <footer>
      <h3><p>we are d.....</p></h3>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
