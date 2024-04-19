import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps"


function Contact({ name, number, id  }) {
    const dispatch = useDispatch();
    return (
        <>
    <div className={css.contactWrapper}>
          <div className={css.contactInfo}>
              <IoMdPerson className={css.contactIcon} />
              <p>{ name}</p>
          </div>
          <div className={css.contactInfo}>
              <FaPhoneAlt className={css.contactIcon} />
              {number}
                </div>
                
        </div>
        <button className={css.deleteBtn} onClick={() => dispatch(deleteContact(id))} >Delete </button>
          </>  
     
  )
}

export default Contact