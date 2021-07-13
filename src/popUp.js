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

  static getDerivedStateFromProps(props, prevstate) {
    let editStudent = props.editStudent;
    if (editStudent) {
      editStudent = { ...props.editStudent };
      delete editStudent.id;
      if (
        JSON.stringify({
          name: "",
          department: "",
          phoneNumber: "",
          mailId: "",
        }) === JSON.stringify(prevstate)
      ) {
        return {
          name: editStudent.name,
          department: editStudent.department,
          phoneNumber: editStudent.phoneNumber,
          mailId: editStudent.mailId,
        };
      }
      if (JSON.stringify(editStudent) !== JSON.stringify(prevstate)) {
        return null;
      }
    }
    return null;
  }

  setName(value) {
    this.setState({ name: value });
  }

  setDepartment(value) {
    this.setState({ department: value });
  }

  setPhoneNumber(value) {
    this.setState({ phoneNumber: value });
  }

  setMailId(value) {
    this.setState({ mailId: value });
  }

  handleClose = () => {
    const { hide, clearEdit } = this.props;
    hide();
    this.setState({
      name: "",
      department: "",
      phoneNumber: "",
      mailId: "",
    });
    clearEdit();
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
