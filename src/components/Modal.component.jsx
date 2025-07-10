import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const hideModalHandler = () => {
    navigate("..");
  };

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
