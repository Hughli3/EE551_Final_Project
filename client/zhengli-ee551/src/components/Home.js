import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import serverController from '../serverController';
import Profile from "./Profile"
import Expriences from "./Experiences"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import "../public/css/Home.css"
import "../public/css/argon.css"

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [homeData, setHomeData] = useState({});
    let image = "data:image/png;base64," + homeData.image;
    useEffect(
        () => {
            async function fetchData() {
                try {
                    setLoading(true);
                    // const data = await serverController.getTest();
                    // console.log(data);
                    const {data:data} = await serverController.getHome();
                    // console.log(data);
                    setHomeData(data);
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
    let sectionStyle = {
        width: "100%",
        // position: "absolute",
        background:`url(${image}) no-repeat center fixed`,
        backgroundSize:"cover",
        marginBottom: "0px",
        padding: "0px",
        // minHeight: "100%",
        height:"100vh"
      };

    let homeDiv = {
        position: "relative",
        top: "30%",
        zIndex: "4",
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        color:"white"
    }

    let line = {
        backgroundColor:"white", 
        height: "0.3px"
    }
    if (loading) {
        return (
            <div style={homeDiv}>
                <h1><i className="fas fa-redo"></i>Loading</h1>
            </div>
        );
    }else {
        return (
        
            <main >
                {/* <Profile></Profile> */}
               
                <div style={sectionStyle}  class="home">
                    <div id="homeText" style={homeDiv}>                    
                        <h1 style={{color:"white"}}>{homeData.name}</h1> 
                        <hr class="line" style={line}></hr>
                        {/* <div class="title-flex"></div> */}
                        <h2  style={{color:"white"}}> One World One Dream </h2>
                    </div>
                 </div>
                 <div class="container">
                 <div><Profile></Profile></div>
                
                 <div class="backgound-diff container" style ={{width: "100%"}}><Expriences></Expriences> </div>
                <Projects></Projects>
                <div class="backgound-diff container">
                    <Contact></Contact>
                </div>
                <Footer></Footer>
                </div>
            </main>
            
        );
    }
    
};

export default Home;