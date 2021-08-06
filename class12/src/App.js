// import logo from './logo.svg';
import './App.css';
import Students from './students/students'
import {useSelector,useDispatch} from 'react-redux'
import {addStudent} from './redux/actions/studentActions'

function App() {
  const dispatch = useDispatch();
let s = useSelector(store=>store.studentReducer)
console.log("data from store",s) 

const ctaHandler =()=>{
  let dataPassToStore = {
    agNo: "12-fsd-2019",
    createdBy: new Date()
  }
  dispatch(addStudent(dataPassToStore))
}


  return (
    <div className="App">
     <Students />
     <hr />
     <button onClick={ctaHandler}>Data To Store</button>
     
    </div>
  );
}

export default App;
