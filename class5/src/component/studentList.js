function StudentList({student,index,deleteHandler}) {
    // console.log("student as props", props)


    return (
        <tr>
            <td>{index}</td>
            <td>{student.name}</td>
            <td>{student.batch}</td>
            <td>{student.roll}</td>
            <td>{student.sclass}</td>
            <td>
                <button onClick={()=>deleteHandler(index)}>delete</button>
            </td>


        </tr>
    )
}
export default StudentList;