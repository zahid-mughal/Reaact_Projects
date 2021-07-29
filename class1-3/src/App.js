// import logo from './logo.svg';
// import './App.css';
// import Heder from './components/header'
// import {Footer} from './components/header'
// import Parent from './Parent'
// import Button from './button1'
import Counter from './counter'

// let test= "this ";
let sampleData = {
  color:"red",
  title:"learn js",
  width:"120px"

}
let sampleData1 = {
  color:"green",
  title:"learn java",
  width:"150px"

}


function App() {
  return (
    <div className="App">
      {/* <p>{test}</p> */}
  {/* <p> <Heder/></p> */}
  {/* <Footer /> */}
{/* <Parent /> */}
<Counter data={sampleData} data1={sampleData1}  />



      
    </div>
  );
}

export default App;
