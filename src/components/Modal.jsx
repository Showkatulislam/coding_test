import { useCallback, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactItem from "./ContactItem";

const MyModal = ({ show, handleClose, type, handleShow }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [Contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState([]);

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/?page=1")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.results)
      })
      let filterdata;
      if(type==='B'){
       filterdata=Contacts.filter(contact=>contact.country.name="United States")
       if(isChecked){
        filterdata=Contacts.filter(contact=>contact.id%2==0)
       }
       setShowContacts(filterdata)

      }else{
        if(isChecked){
            filterdata=Contacts.filter(contact=>contact.id%2==0)
            setShowContacts(filterdata)
        }else{
            setShowContacts(Contacts)
        }

      }
  }, [type,isChecked,isChecked]);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
   
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type === "A" ? "All Contact" : "Us Contact"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={() => handleShow("A")}>
            All Contact
          </Button>
          <Button variant="primary" onClick={() => handleShow("B")}>
            Us Contact
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </div>
        <div>
          <table className="table overflow-scroll">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {showContacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact}></ContactItem>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-content-start">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Only Even
        </label>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
