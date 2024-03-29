import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import styles from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contactsList = useSelector(selectContacts);
  const filteredList = useSelector(selectNameFilter);

  return (
    <ul className={styles.listContacts}>
      {contactsList.map(
        (user) => (
          console.log(user),
          (
            <li key={user.id} className={styles.listItem}>
              <Contact user={user} />
            </li>
          )
        )
      )}
    </ul>
  );
};

export default ContactList;
