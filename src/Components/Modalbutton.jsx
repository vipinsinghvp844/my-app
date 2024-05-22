import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalButton() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className='modalbtn'>
      <Button variant="primary" onClick={handleShowModal}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="30">
    <path fill="currentColor" d="M3 22v-20l18 10-18 10z"></path>
          </svg>
        </Button>
        </div>
      <Modal show={showModal} onHide={handleCloseModal}>
          <iframe width="600" height="350" src="https://www.youtube.com/embed/VT9S9vB01PE?si=KN_X4W0NE6YJEABr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Modal>
    </>
  );
}

export default ModalButton;
