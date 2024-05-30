import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css"

function Contact({contact:{id, name, number}, onDelete}) {
return (
    <div className={css.container}>
    <div className={css.contact}>
        <p className={css.items}><FaUser/>{name}</p>
        <p className={css.items}><FaPhone/>{number}</p>
    </div>
    <button className={css.button} onClick={() => onDelete(id)}>Delate</button>
    </div>
)
}
export default Contact;