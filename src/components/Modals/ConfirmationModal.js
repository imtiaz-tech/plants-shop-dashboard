import React from "react";
import { Modal } from "react-bootstrap";

function ConfirmationModal(props) {
  const { isModal, setIsModal } = props;
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
          Modal title
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
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
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
