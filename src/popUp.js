import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Popup = ({ form, hide, add, editStudent, clearEdit }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailId, setMailId] = useState("");

  const handleClose = () => {
    hide();
    setName("");
    setDepartment("");
    setPhoneNumber("");
    setMailId("");
    clearEdit();
  };

  const handleSubmit = () => {
    add(name, department, phoneNumber, mailId);
    handleClose();
  };

  return (
    <div>
      <Modal show={form} onHide={handleClose}>
        <Modal.Body>
          <form>
            <label className="form-height">Name</label>
            <input
              type="text"
              name="txtName"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            />
            <label className="form-height">Department</label>
            <input
              type="text"
              name="txtDept"
              className="form-control"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Enter Your Department"
            />
            <label className="form-height">Phone Number</label>
            <input
              type="text"
              name="txtNum"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Your Phone Number"
            />
            <label className="form-height">Mail-Id</label>
            <input
              type="text"
              name="txtMail"
              className="form-control"
              value={mailId}
              onChange={(e) => setMailId(e.target.value)}
              placeholder="Enter Your Mail-Id"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} id="clsbtn">
            Close
          </Button>
          <Button onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
