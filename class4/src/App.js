// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react'
import FormHandling from './formHandling'

function App() {

  // const [students, setStudents] = useState([
  //   {
  //     name: "zahid",
  //     batch: "batch1",
  //     roll: "16777",
  //     sclass: "web"
  //   },
  //   {
  //     name: "zahid2",
  //     batch: "batch12",
  //     roll: "167772",
  //     sclass: "web2"
  //   },
  //   {
  //     name: "zahid3",
  //     batch: "batch13",
  //     roll: "167773",
  //     sclass: "web3"
  //   }
  // ])
  // console.log("sudents in state", students)

  return (
    <div className="App">
      <FormHandling />

  {/* //     <table>
  //       <tr>
  //         <th>No.</th>
  //         <th>Name</th>
  //         <th>Batch</th>
  //         <th>Roll</th>
  //         <th>Class</th>
  //       </tr>

  //       {students.map((student,index) => { */}
  {/* //         return (
  //           <tr>
  //             <td>{index+1}</td>
  //             <td>{student.name}</td>
  //             <td>{student.batch}</td>
  //             <td>{student.roll}</td>
  //             <td>{student.sclass}</td>

  //           </tr>
  //         )
  //       })
  //       } */}
       
  {/* //     </table> */}

    </div>
  );
}

export default App;
