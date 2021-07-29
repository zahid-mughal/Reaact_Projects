// import logo from './logo.svg';
// import './App.css';
import Heder from './components/header'
// import {Footer} from './components/header'

let test= "this ";
console.log("in function console log", test)

function App() {
  console.log("in function console log", test)
  return (
    <div className="App">
      {/* <p>{test}</p> */}
  <p> <Heder/></p>
  {/* <Footer /> */}
      
    </div>
  );
}

export default App;
