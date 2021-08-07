// import logo from './logo.svg';
import './App.css';
import Students from './students/students'
import {useSelector,useDispatch} from 'react-redux'
import {addStudent} from './redux/actions/studentActions'
import {fetchFollower} from './redux/actions/githubAction'

function App() {
  const dispatch = useDispatch();
let s = useSelector(store=>store)
console.log("data from store",s) 

const ctaHandler =()=>{
  let dataPassToStore = {
    agNo: "12-fsd-2019",
    createdBy: new Date()
  }
  dispatch(addStudent(dataPassToStore))
}

const ctaHandlerForGitub = () =>{
  let dataPassToAction= "naveed-rana";
  dispatch(fetchFollower(dataPassToAction));
}


  return (
    <div className="App">
     <Students />
     <hr />
     <button onClick={ctaHandler}>Data To Store</button>
     --------------------------------------------
     <button onClick={ctaHandlerForGitub}>follwer</button>
     
    </div>
  );
}

export default App;
