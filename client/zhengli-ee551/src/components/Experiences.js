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
                    // console.log(data);
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
            return (<div>
                
                <p key={ex.name}><i className="fas fa-bath"></i>School: {ex.name}</p> 
                <p key={ex.description}><i className="fas fa-bath"></i>Description: {ex.description}</p> 
                <p key={ex.location}><i className="fas fa-bath"></i>Location: {ex.location}</p> 
                <p key={ex.startTime}><i className="fas fa-bath"></i>Start Time: {ex.startTime}</p> 
                <p key={ex.endTime}><i className="fas fa-bath"></i>End Time: {ex.endTime}</p> 
            </div>)
        }
    );
    myCareer = experience.careers && experience.careers.map(
        (career) => {
            return (
            <div>
                    <p key={career.name}><i className="fas fa-bath"></i>Compnay: {career.name}</p> 
                    <p key={career.title}><i className="fas fa-bath"></i>Title: {career.title}</p>
                    <p key={career.description}><i className="fas fa-bath"></i>Description: {career.description}</p>
                    <p key={career.location}><i className="fas fa-bath"></i>Location: {career.location}</p>
                    <p key={career.startTime}><i className="fas fa-bath"></i>Start Time: {career.startTime}</p>
                    <p key={career.endTime}><i className="fas fa-bath"></i>End Time: {career.endTime}</p>
            </div>)
        }
    );
    
    if (loading) {
        return (<p>loading</p>);
    } else {
        return (
            <div>
                <h2>Experiences</h2>
                <h3>Education</h3>
                {myEducation}
                <h3>Career</h3>
                {myCareer}
            </div>
        );
    }
};

export default Experiences;