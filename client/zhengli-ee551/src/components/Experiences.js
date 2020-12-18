import React, { useState, useEffect } from "react";
import serverController from '../serverController';

const Experiences = () => {
    const [loading, setLoading] = useState(true);
    const [experience, setExperience] = useState([]);
    let myEducation;
    let myCareer;
    useEffect(
        () => {
            async function fetchData() {
                try {
                    setLoading(true);
                    const {data:data} = await serverController.getExperiences();  
                    console.log(data);
                    setExperience(data);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                }

            }
            fetchData();
        },
        []
    );
    
    myEducation = experience.education && experience.education.map(
        (ex) => {
            return (<div class="row container" style={{textAlign:"left"}}>
                <div class="col-md-4" >
                    <strong key={ex.name} > {ex.name}</strong> 
                    <p key={ex.startTime}> {ex.startTime} - {ex.endTime}</p>   
                </div>
                <div class="col-md-8">
                    <strong>{ex.degree} - {ex.major}</strong>
                    <p key={ex.description}>{ex.description}</p> 
                    <p key={ex.location}><i className="fas fa-map-marker-alt"></i> {ex.location}</p> 
                </div>
            </div>)
        }
    );
    myCareer = experience.careers && experience.careers.map(
        (career) => {
            return (
            <div class="row container" style={{textAlign:"left"}}>
                <div class="col-md-4">
                    <strong key={career.name}> {career.name}</strong> 
                    <p key={career.startTime}> {career.startTime} - {career.endTime}</p>   
                </div>
                <div class="col-md-8">
                    <strong key={career.title}> {career.title}</strong>
                    <p key={career.description}> {career.description}</p>
                    <p key={career.location}><i className="fas fa-map-marker-alt"></i> {career.location}</p>
                </div>
            </div>)
        }
    );
    
    if (loading) {
        return (<p>loading</p>);
    } else {
        return (
            <div id="experiences">
                <h2>Experiences</h2>
                <hr class="line"></hr>
                <div>
                <h3>Education</h3>
                {myEducation}
                <hr class="line"></hr>
                <h3>Career</h3>
                {myCareer}
                </div>
            </div>
        );
    }
};

export default Experiences;