import { useSelector } from 'react-redux';
import css from './ContactList.module.css'
import Contact from '../Contact/Contact';

    export default function ContactList() {
        const contacts = useSelector((state) => state.contacts.items);
        const filter = useSelector((state) => state.filters.name);
        const visibleContact = Array.isArray(contacts) ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : [];

    return (
        <ul className={css.contactList}>
            {visibleContact.map((contact) => (
                <li key={contact.id} className={css.contactItem}>
                    <Contact user={contact}/>
                </li>
            ))}
        </ul>
    );
};
