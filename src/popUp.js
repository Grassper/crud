import React from "react";
import { Button, Modal } from "react-bootstrap";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      department: "",
      phoneNumber: "",
      mailId: "",
    };
  }

  componentDidMount() {
    const { editStudent } = this.props;
    if (editStudent) {
      this.setName(editStudent.name);
      this.setDepartment(editStudent.department);
      this.setPhoneNumber(editStudent.phoneNumber);
      this.setMailId(editStudent.mailId);
    }
  }

  setName(value) {
    this.setState({ ...this.state, name: value });
  }

  setDepartment(value) {
    this.setState({ ...this.state, department: value });
  }

  setPhoneNumber(value) {
    this.setState({ ...this.state, phoneNumber: value });
  }

  setMailId(value) {
    this.setState({ ...this.state, mailId: value });
  }

  handleClose = () => {
    this.props.hide();
    this.setState({
      name: "",
      department: "",
      phoneNumber: "",
      mailId: "",
    });
    this.props.clearEdit();
  };

  handleSubmit = () => {
    const { name, department, phoneNumber, mailId } = this.state;
    if (!this.props.editStudent) {
      this.props.add(name, department, phoneNumber, mailId);
    } else {
      this.props.edit(
        this.props.editStudent.id,
        name,
        department,
        phoneNumber,
        mailId
      );
    }
    this.handleClose();
  };

  render() {
    const { name, department, phoneNumber, mailId } = this.state;
    const { form, editStudent } = this.props;
    return (
      <div>
        <Modal show={form} onHide={this.handleClose}>
          <Modal.Body>
            <form>
              <label className="form-height">Name</label>
              <input
                type="text"
                name="txtName"
                className="form-control"
                value={name}
                onChange={(e) => this.setName(e.target.value)}
                placeholder="Enter Your Name"
              />
              <label className="form-height">Department</label>
              <input
                type="text"
                name="txtDept"
                className="form-control"
                value={department}
                onChange={(e) => this.setDepartment(e.target.value)}
                placeholder="Enter Your Department"
              />
              <label className="form-height">Phone Number</label>
              <input
                type="text"
                name="txtNum"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => this.setPhoneNumber(e.target.value)}
                placeholder="Enter Your Phone Number"
              />
              <label className="form-height">Mail-Id</label>
              <input
                type="text"
                name="txtMail"
                className="form-control"
                value={mailId}
                onChange={(e) => this.setMailId(e.target.value)}
                placeholder="Enter Your Mail-Id"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose} id="clsbtn">
              Close
            </Button>
            <Button onClick={this.handleSubmit}>
              {!editStudent ? "Add" : "update"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Popup;
