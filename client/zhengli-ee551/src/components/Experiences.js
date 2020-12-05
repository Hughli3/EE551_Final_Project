import React, { useState, useEffect } from "react";
import serverController from '../serverController';

const Experiences = () => {
    const [loading, setLoading] = useState(true);
    const [experience, setExperience] = useState([]);

    useEffect(
        () => {
            async function fetchData() {
                setLoading(true);
                const {data:data} = await serverController.getExperiences();  
                console.log(data);
                setExperience(data);
                setLoading(false);
            }
        }

    );
    
    let output = null;

    if (loading) {
        return (<p>loading</p>);
    } else {
        return (<p></p>);
    }
};

export default Experiences;