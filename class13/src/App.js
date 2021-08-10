// import logo from './logo.svg';
import './App.css';
import {db} from './components/config/firebase'

function App() {
  const ctaHandler =async () =>{
    let d ={ name:"zahid", rollNo:"1212"
}
try{
  let res = await db.collection("students").add(d)
  console.log("res",res)

}catch(error){
  console.log("error",error.messages)
}
}
  return (
    <div className="App">
     
      <button onClick={ctaHandler}>to firebase</button>
    </div>
  );
}

export default App;
