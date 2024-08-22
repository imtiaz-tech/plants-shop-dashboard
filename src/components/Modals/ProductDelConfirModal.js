import React from "react";
import { Modal } from "react-bootstrap";

function ProductConfirModal(props) {
  const { isModal, setIsModal,deleteProduct } = props;
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
        <p>Are you sure you want to delete it? If you delete it changes cannot recovered again.</p>
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
            deleteProduct();
            setIsModal(false);
          }}
        >
          Save changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductConfirModal;
