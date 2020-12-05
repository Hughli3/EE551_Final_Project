import React, { useState, useEffect } from "react";
import serverController from '../serverController';

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState({});
    
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            // const data = await serverController.getTest();
          
            const {data:data} = await serverController.getProfile();
            console.log(data);
            setInfo(data);
            setLoading(false);
        }
        fetchData();
    }, []);
    
    if (loading) {
        return (<p>loading</p>)
    } else{
        return (
            <div>
                <h2>Profile</h2>
                <p>{info.name}</p>
                <p>{info.age}</p>
                <p>{info.description}</p>
            </div>
        );    
    }
    
}
export default Profile