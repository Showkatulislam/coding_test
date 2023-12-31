import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = () => {

    const {country}=useParams()
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const data = queryParams.get('data');
    console.log(country,data);



    return (
        <div>
            contact detail
        </div>
    );
};

export default ContactDetail;