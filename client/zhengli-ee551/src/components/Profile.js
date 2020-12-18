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
            // console.log(data);
            setInfo(data);
            setLoading(false);
        }
        fetchData();
    }, []);
    
    if (loading) {
        return (<p>loading</p>)
    } else{
        return (
            <div id="profile">
                <h2>Profile</h2>
                <p class="lead">I'm a full stack developer</p>
                <hr class="line"></hr>
                <div class="row">
                
                <div class="col-md-4" style={{textAlign:"left"}}>
                    <h3>About me</h3>
                    <p>{info.description}</p>
                </div>
                <div class="col-md-4">
                    <img src={"data:image/png;base64," + info.image} width="246" height="246" className="img rounded-circle" ></img>
                </div>
                <div class="col-md-4" style={{textAlign:"left"}}>
                    <h3>Details</h3>
                    <strong >Name:</strong><p>{info.name}</p>
                    <strong>Age:</strong><p>{info.age}</p>
                </div>
                </div>
            </div>
        );    
    }
    
}
export default Profile