import React, { useState, useEffect } from "react";
import serverController from '../serverController';

const Contact = () => {
    const [loading, setLoading] = useState(true);
    const [contact, setContact] = useState([]);
    useEffect(
        () => {
            async function fetchData() {
                try {
                    setLoading(true);
                    const {data:data} = await serverController.getContact();  
                    // console.log(data);
                    setContact(data);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                }

            }
            fetchData();
        },
        []
    );

    if (loading) {
        return (
        <div id="contact">
            <p>loading</p>
        </div>)
    } else{
        return(<div id="contact row" style={{fontSize:"20pt"}}> 
            <h2>Contact</h2>
            <hr class="line"></hr>
            <a href={contact.linkedIn} className="col-md-6"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href={"mailto:" + contact.email} className="col-md-6"><i className="fas fa-envelope"></i>  Email</a>
        </div>)
        
    }
}

export default Contact