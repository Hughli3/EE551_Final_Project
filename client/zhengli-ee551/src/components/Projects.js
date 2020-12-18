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
                <div class="row container">
                <div class="col-md-4" style={{textAlign:"left"}}>
                    <strong key={project.name}>{project.name}</strong> 
                    <p key={project.startTime}> {project.startTime} - {project.endTime}</p>   
                </div>
                <div class="col-md-8" style={{textAlign:"left"}}>
                    <pre key={project.description}>{project.description}</pre>
                    <a key={project.url} href={project.url}><i className="fab fa-github"></i> {project.url}</a>
                </div>
            </div>
            )
        }
    );
    if (loading) {
        return (
        <div id="project">
            <p>loading</p>
        </div>)
    } else{
        return(<div id="project">
            <h2>Projects</h2>
            <hr class="line"></hr>
            {myProject}
        </div>)
        
    }
}

export default Projects