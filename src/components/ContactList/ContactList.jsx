import { useSelector } from 'react-redux';
import css from './ContactList.module.css'
import Contact from '../Contact/Contact';

    export default function ContactList() {
        const contacts = useSelector((state) => state.contacts.items);
        const filter = useSelector((state) => state.filters.name);
        const visibleContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase));

    return (
        <ul>
            {visibleContact.map((contact) => (
                <li key={contact.id}>
                    <Contact user={contact}/>
                </li>
            ))}
        </ul>
    );
};