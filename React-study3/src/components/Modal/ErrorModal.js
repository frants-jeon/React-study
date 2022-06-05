import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const removeModalHandler = () => {
    props.onClick();
  };

  return (
    <>
      <div className={styles.backdrop} onClick={removeModalHandler} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.errorInfo.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorInfo.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={removeModalHandler}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModal;
