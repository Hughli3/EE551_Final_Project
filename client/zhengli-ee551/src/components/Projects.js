import React, { useState, useEffect } from "react";
import serverController from '../serverController';

const Projects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    let myProject;
    useEffect(
        () => {
            async function fetchData() {
                try {
                    setLoading(true);
                    const {data:data} = await serverController.getProjects();  
                    console.log(data);
                    setProjects(data);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                }

            }
            fetchData();
        },
        []
    );

    myProject = projects.projects && projects.projects.map( 
        (project) => {
            return(
                <div>
                    <p key={project.name}><i className="fas fa-bath"></i>Compnay: {project.name}</p> 
                    <p key={project.description}><i className="fas fa-bath"></i>Description: {project.description}</p>
                    <p key={project.startTime}><i className="fas fa-bath"></i>Start Time: {project.startTime}</p>
                    <p key={project.endTime}><i className="fas fa-bath"></i>End Time: {project.endTime}</p>
                    <p key={project.url}><i className="fas fa-bath"></i>Url: {project.url}</p>
                </div>)
        }
    );
    if (loading) {
        return (
        <div>
            <p>loading</p>
        </div>)
    } else{
        return(<div>
            <h2>Projects</h2>
            {myProject}
        </div>)
        
    }
}

export default Projects