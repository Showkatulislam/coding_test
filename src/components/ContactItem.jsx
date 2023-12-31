import React from "react";
import { Link } from "react-router-dom";

const ContactItem = ({contact}) => {
  return (
        <tr>
      <th scope="row">{contact.id}</th>
      <td>{contact.phone}</td>
      <td>{contact.country.name}</td>
        <td>
        <Link  to={`/details/${contact.id}?number=${contact.phone}`}>
        click
    </Link>
        </td>
    </tr>
  );
};

export default ContactItem;
