import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({user}) {
    const dispatch = useDispatch();
    
  return (
    <div className={css.contactContainer}>
      <span className={css.contactNewUser}>{user.name}</span>
      <span className={css.contactNewUser}>{user.number}</span>
      <button className={css.contactBtn} onClick={() => dispatch(deleteContact(user.id))}>
        Delete
      </button>
    </div>
  );
}
