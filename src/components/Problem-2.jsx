import { useState } from "react";
import MyModal from "./Modal";

const Problem2 = () => {
    const [showModal, setShowModal] = useState(false);
    const [type,setType]=useState('')
    const handleShow = (t) =>{
        setType(t)
        setShowModal(true)
    };
    const handleClose = () => setShowModal(false)
    return (
        <>
         <MyModal show={showModal} type={type} handleClose={handleClose} handleShow={handleShow} />
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" onClick={()=>handleShow('A')} type="button" >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" onClick={()=>handleShow('B')} type="button" >US Contacts</button>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default Problem2;