import "./App.css";

import React from "react";
import { Button } from "react-bootstrap";

import Popup from "./popUp";

class TableContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      studentData: [],
      show: false,
      editStudent: null,
    };
  }

  clearEdit = () => {
    this.setState({
      editStudent: null,
    });
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  toggleEdit = (index) => {
    const student = this.state.studentData[index];
    student.id = index;
    this.setState({
      editStudent: student,
    });
    this.toggleShow();
  };

  handleAdd = (name, department, phoneNumber, mailId) => {
    const data = {
      name,
      department,
      phoneNumber,
      mailId,
    };
    this.setState({
      studentData: [...this.state.studentData, data],
    });
  };

  handleEdit = (id, name, department, phoneNumber, mailId) => {
    let studentData = this.state.studentData;
    studentData[id] = { name, department, phoneNumber, mailId };
    this.setState({
      studentData: [...studentData],
    });
  };

  handleDelete = (index) => {
    let studentData = this.state.studentData;
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
    this.setState({
      studentData: [...studentData],
    });
    return;
  };

  render() {
    const { show, editStudent } = this.state;
    return (
      <div className="col-md-7 offset-md-3 mt-5">
        <div>
          <div className="modalClass">
            <Button onClick={this.toggleShow} className="text-right">
              Add User
            </Button>
            <Popup
              form={show}
              hide={this.toggleShow}
              add={this.handleAdd}
              edit={this.handleEdit}
              clearEdit={this.clearEdit}
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
            {this.state.studentData.map((data, i) => (
              <tr key={i} className="table-top">
                <td>{data.name}</td>
                <td>{data.department}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.mailId}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    id="editbtn"
                    onClick={() => this.toggleEdit(i)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    id="dltbtn"
                    onClick={() => this.handleDelete(i)}
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
  }
}

export default TableContainer;
