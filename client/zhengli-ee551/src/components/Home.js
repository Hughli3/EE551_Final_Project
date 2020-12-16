import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import serverController from '../serverController';
import Profile from "./Profile"
import Expriences from "./Experiences"
import Projects from "./Projects"
import Contact from "./Contact"

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
                    // console.log(data);
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
                {/* <Profile></Profile> */}
                <title>Zheng Li</title> 
                <p>Test information</p>
                <Profile></Profile>
                <Expriences></Expriences>
                <Projects></Projects>
                <Contact></Contact>
            </main>
            
        );
    }
    
};

export default Home;