import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Popup from "./popUp";

import "./App.css";

const TableContainer = () => {
  const [studentData, setStudentData] = useState([]);
  const [show, setShow] = useState(false);
  const [editStudent, setEditStudent] = useState({});

  const clearEdit = () => {
    setEditStudent({});
  };

  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };

  const handleSubmit = (name, department, phoneNumber, mailId) => {
    const data = {
      name,
      department,
      phoneNumber,
      mailId,
    };
    setStudentData((prevState) => [...prevState, data]);
  };

  const handleEdit = (index) => {
    const student = studentData[index];
    setEditStudent(student);
    toggleShow();
  };

  const handleDelete = (index) => {
    const confirmBox = window.confirm("Do you really want to delete this?");
    if (confirmBox === true) {
      if (index === 0) {
        studentData.shift();
      } else if (index === studentData.length - 1) {
        studentData.pop();
      } else {
        studentData.splice(index, 1);
      }
    }
    setStudentData([...studentData]);
    return;
  };

  // handleEdit = (i) => {
  //   let data = this.state.studentData[i];
  //   this.refs.txtName.value = data.name;
  //   this.refs.txtDept.value = data.department;
  //   this.refs.txtNum.value = data.phoneNumber;
  //   this.refs.txtMail.value = data.mailId;

  //   this.setState({
  //     act: 1,
  //     index: i,
  //   });
  // };

  return (
    <div className="col-md-7 offset-md-3 mt-5">
      <div>
        <div className="modalClass">
          <Button onClick={toggleShow} className="text-right">
            Add User
          </Button>
          <Popup
            form={show}
            hide={toggleShow}
            add={handleSubmit}
            clearEdit={clearEdit}
            editStudent={editStudent}
          />
        </div>
      </div>
      <table className="table mt-3">
        <thead>
          <tr className="table-top th-color">
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Mail-Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((data, i) => (
            <tr key={i} className="table-top">
              <td>{data.name}</td>
              <td>{data.department}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.mailId}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  id="editbtn"
                  onClick={() => handleEdit(i)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  id="dltbtn"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableContainer;
