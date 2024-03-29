import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import styles from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contactsList = useSelector(selectContacts);

  return (
    <ul className={styles.listContacts}>
      {contactsList.map((user) => (
        <li key={user.id} className={styles.listItem}>
          <Contact user={user} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
