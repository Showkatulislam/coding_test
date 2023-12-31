import React from "react";

const ContactItem = ({contact}) => {
  return (
    <tr>
      <th scope="row">{contact.id}</th>
      <td>{contact.phone}</td>
      <td>{contact.country.name}</td>
    </tr>
  );
};

export default ContactItem;
