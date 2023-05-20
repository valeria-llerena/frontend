/* eslint-disable react/prop-types */
const Modal = ({ isModalOpen, handleOk, handleCancel, children }) => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};

export default Modal;
