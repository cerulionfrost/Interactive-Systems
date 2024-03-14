import logo from './logo.svg';
import About from './About';
import './App.css';
function Testing()
{
  return(
    <button>
        Click Me
    </button>

  );
}

function App() {
  return (
    <>
    <h1>Hello to our first app</h1>
    <p>This is test</p>
    <Testing/>
    <About/>
    </>
  );
}

export default App;
