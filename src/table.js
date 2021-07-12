import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Popup from "./childComponent";

import "./App.css";

const Table = () => {
  const [studentData, setStudentData] = useState([]);
  const [index, setIndex] = useState("");
  const [act, setAct] = useState(0)
  const [show, setShow] = useState(false)

  handleShow() {
    this.setState({ show: true });
  }
  handleHide() {
    this.setState({ show: false });
  }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   function validation(name,dept,phn,email){
  //       if(name==="" || dept === "" || phn==="" || email=== ""){
  //           alert("Inputs cannot be empty");
  //           return false;
  //       }
  //       if((/\d/).test(name)){
  //           alert("First Name should contain only alphabets");
  //           return false;
  //       }
  //       if((/\d/).test(dept)){
  //           alert("Department name should contain only alphabets");
  //           return false;
  //       }
  //       if((/\D/).test(phn)){
  //           alert("Phone Number must be only in numbers");
  //           return false;
  //       }
  //       if(!(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/).test(email)){
  //           alert("You have entered an invalid email address!");
  //           return false;
  //       }
  //   }
  //   let studentData = this.state.studentData;
  //   let name = this.refs.txtName.value;
  //   let department = this.refs.txtDept.value;
  //   let phoneNumber = this.refs.txtNum.value;
  //   let mailId = this.refs.txtMail.value;
  //   const validationCheck=validation(name,department,phoneNumber,mailId);
  //   if(validationCheck===false){
  //       return;
  //   }
  //   if (this.state.act === 0) {
  //     let newStudent = {
  //     "name": name,
  //     "department": department,
  //     "phoneNumber": phoneNumber,
  //     "mailId": mailId
  //     }
  //     studentData.push(newStudent);
  //   }
  //   else {
  //     let index = this.state.index;
  //     studentData[index].name = name;
  //     studentData[index].department = department;
  //     studentData[index].phoneNumber = phoneNumber;
  //     studentData[index].mailId = mailId;

  //   }

  //   this.setState({
  //     studentData: studentData,
  //     act:0
  //   })
  //   this.refs.myForm.reset();
  //   this.setState({show:!this.state.show})
  // }

  //getRecord = (id) => {
  //  const data = this.state.studentData.find(item => item.id == id);
  //  return data;
  //}

  // onEdit = (id) => {
  //   const tempData = this.state.studentData;
  //   const indexes = tempData.indexOf(this.getRecord(id));
  //   const selectedData = tempData[indexes];
  //   this.setState({
  //     id: selectedData['id'],
  //     name: selectedData['name'],
  //     department: selectedData['department'],
  //     phoneNumber: selectedData['phoneNumber'],
  //     mailId: selectedData['mailId']
  //   })
  //}

  handleEdit = (i) => {
    console.log(i);
    let data = this.state.studentData[i];
    console.log(data.name);
    console.log(data["name"]);
    this.refs.txtName.value = data.name;
    this.refs.txtDept.value = data.department;
    this.refs.txtNum.value = data.phoneNumber;
    this.refs.txtMail.value = data.mailId;

    this.setState({
      act: 1,
      index: i,
    });
  };

  handleDelete = (i) => {
    let studentData = this.state.studentData;
    const confirmBox = window.confirm("Do you really want to delete this?");
    if (confirmBox === true) {
      studentData.splice(i, 1);
    }
    this.setState({
      studentData: studentData,
    });
  };

    let studentData = this.state.studentData;
    return (
      <div class="col-md-7 offset-md-3 mt-5">
        <div>
          <div className="modalClass">
            <Button onClick={() => this.handleShow()} class="text-right">
              Add User
            </Button>
            <Popup
              form={this.state.show}
              hide={this.handleHide}
              add={this.handleSubmit}
            />
          </div>
        </div>
        <table className="table mt-3">
          <tr scope="row" class="table-top th-color">
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Mail-Id</th>
            <th scope="col">Actions</th>
          </tr>
          {studentData.map((data, i) => (
            <tr key={i} scope="row" class="table-top">
              <td>{data.name}</td>
              <td>{data.department}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.mailId}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  id="editbtn"
                  onClick={(e) => this.handleEdit(i)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  id="dltbtn"
                  onClick={(e) => this.handleDelete(i)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
}
export default Table;
