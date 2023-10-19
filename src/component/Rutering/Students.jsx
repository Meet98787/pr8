import React from 'react'
import { Link } from 'react-router-dom'
// import { StudentList } from './Studentlist'
import { useState } from 'react'
import { useEffect } from 'react';


export default function Students() {
  const [StudentList , setStudentList] = useState(JSON.parse(localStorage.getItem("studentlist")))
  const [student, setStudent] = useState(StudentList);
  const [data, setData] = useState(student);
  useEffect(() => {
    setData(student);
  }, [data]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    StudentList.splice(id, 1);
    localStorage.setItem("studentlist", JSON.stringify(StudentList));
    setData([student])
  }

  return (
    <div class="list p-3">
      <Link className='btn btn-primary  me-2' to={`/student/addstudent`}>Add Student</Link>
      <table class="table table-bordered rounded rounded-3">
        <thead class="bg-light">
          <tr>
            <th class="text-black fs-4 text-center">Student Name</th>
            <th class="text-black fs-4 text-center">Student Class</th>
            <th class="text-black fs-4 text-center">DOB</th>
            <th class="text-black fs-4 text-center">Father Name</th>
            <th class="text-black fs-4 text-center">Mother Name</th>
            <th class="text-black fs-4 text-center">Contact Number</th>
            <th class="text-black fs-4 text-center">Address</th>
            <th class="text-black fs-4 text-center">Maths</th>
            <th class="text-black fs-4 text-center">Computer</th>
            <th class="text-black fs-4 text-center">Scince</th>
            <th class="text-black fs-4 text-center">English</th>
            <th class="text-black fs-4 text-center">Email id</th>
            <th class="text-black fs-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody id="user-data-list">
          {student && student.map((st, key) => (
            <tr key={key}>
              
              <td class="fs-4 text-center">{st.stname}</td>
              <td class="fs-4 text-center">{st.stclass}</td>
              <td class="fs-4 text-center">{st.stdob}</td>
              <td class="fs-4 text-center">{st.fname}</td>
              
              <td class="fs-4 text-center">{st.mname}</td>
              <td class="fs-4 text-center">{st.cnumber}</td>
              <td class="fs-4 text-center">{st.address}</td>
              <td class="fs-4 text-center">{st.maths}</td>
              <td class="fs-4 text-center">{st.computer}</td>
              <td class="fs-4 text-center">{st.scince}</td>
              <td class="fs-4 text-center">{st.english}</td>
              <td class="fs-4 text-center">{st.uEmail}</td>
              <td class="fs-4 text-center">
                  <Link className='btn btn-success me-2' to={`/student/view/${key}`}>VIEW</Link>
                  <Link className='btn btn-warning me-2' to={`/student/edit/${key}`}>Edit</Link>
                  <a href="" className='btn btn-danger' onClick={(e)=>handleDelete(e,key)}
                  >Delete</a>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}
