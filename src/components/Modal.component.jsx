import styles from "./Modal.module.css";

const Modal = (props) => {
  const { children, hideModalHandler } = props;
  return (
    <>
      <div className={styles.backdrop} onClick={hideModalHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
