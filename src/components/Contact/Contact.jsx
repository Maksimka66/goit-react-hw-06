import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <li className={styles.listItem}>
      <div className={styles.itemContainer}>
        <p className={styles.userInfo}></p>
        <p className={styles.userInfo}></p>
      </div>
      <button className={styles.deleteBtn} onClick={() => removeUser(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
