import React, { Component } from 'react';
//import { Modal } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';

class Popup extends Component {
    constructor() {
        super();
        this.state = {
            student: [],
            data: {
                name: '',
                department: '',
                phoneNumber: '',
                mailId: ''
            }

        }
    }
    
handleSubmit(e){
    let student = this.state.student;
    let name = e.target.value;
    let department = e.target.value;
    let phoneNumber = e.target.value;
    let mailId = e.target.value;
    console.log(e);
    let newStudent = {
      "name": name,
      "department": department,
      "phoneNumber": phoneNumber,
      "mailId": mailId
      }
      student.push(newStudent);
    
    this.setState({
      student: student,
    })
    }
render(){
        return (
            <div>
                <Modal show={this.props.form} onHide={this.props.hide}>    
                <Modal.Body>
                    <form ref="myForm">
                        <label className="form-height">Name</label>
                        <input type="text" name="txtName" className="form-control" value={this.state.data.name} onChange={e=>this.handleSubmit(e)} placeholder="Enter Your Name" />
                        <label className="form-height">Department</label>
                        <input type="text" name="txtDept" className="form-control" value={this.state.data.department} onChange={e=>this.handleSubmit(e)} placeholder="Enter Your Department" />
                        <label className="form-height">Phone Number</label>
                        <input type="text" name="txtNum" className="form-control" value={this.state.data.phoneNumer} onChange={e=>this.handleSubmit(e)} placeholder="Enter Your Phone Number" />
                        <label className="form-height">Mail-Id</label>
                        <input type="text" name="txtMail"className="form-control" value={this.state.data.mailId} onChange={e=>this.handleSubmit(e)} placeholder="Enter Your Mail-Id" />
                    </form>
                </Modal.Body>
                <Modal.Footer>  
                    <Button onClick={this.props.hide} id="clsbtn">Close</Button>  
                    <Button onClick={this.props.add}>Add</Button>  
                </Modal.Footer>  
                </Modal>  
            </div>
        );
    }
}
 
export default Popup;