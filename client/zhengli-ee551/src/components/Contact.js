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
                    console.log(data);
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
        <div>
            <p>loading</p>
        </div>)
    } else{
        return(<div>
            <h2>Contact</h2>
            <p>LinkedIn: {contact.LinkedIn}</p>
            <p>Email: {contact.email}</p>
        </div>)
        
    }
}

export default Contact