import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import serverController from '../serverController';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState({});
    const [person, setPerson] = useState({});
    
    useEffect(
        () => {
            async function fetchData() {
                try {
                    setLoading(true);
                    // const data = await serverController.getTest();
                    // console.log(data);
                    const {data:data} = await serverController.getTest();
                    console.log(data);
                    setPhotos(data);
                    setLoading(false);
                }catch (e) {
                    // alert.current.error(e.message);
                    
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
                <p>Loading, please wait</p>
            </div>
        );
    }else {
        return (
        
            <main>
                <title>Zheng Li</title> 

                <p>Test information</p>
                <p>{photos.name}</p>
            </main>
            
        );
    }
    
};

export default Home;