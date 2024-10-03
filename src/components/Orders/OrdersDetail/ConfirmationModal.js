import React from "react";
import { Modal } from "react-bootstrap";

function ConfirmationModal(props) {
  // props pass from parent component
  const { isModal, setIsModal, onConfirm } = props;
  return (
    <Modal
      show={isModal}
      centered
      onHide={() => {
        setIsModal(false);
      }}
    >
      <Modal.Header>
        <h5 className="modal-title" id="staticBackdropLiveLabel">
          Are you sure?
        </h5>
        <button
          type="button"
          className="btn-close"
          onClick={() => {
            setIsModal(false);
          }}
        ></button>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to update it?</p>
      </Modal.Body>

      <Modal.Footer>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setIsModal(false);
          }}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            onConfirm();
            setIsModal(false);
          }}
        >
          Save changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
