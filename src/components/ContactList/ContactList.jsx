import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const contactsList = useSelector((state) => state.contacts.contacts.items);
  console.log(contactsList);

  return (
    <ul className={styles.listContacts}>
      {contactsList.map((user) => (
        <Contact
          key={user.id}
          id={user.id}
          name={user.name}
          number={user.number}
          // removeUser={removeUser}
        />
      ))}
    </ul>
  );
};

export default ContactList;
