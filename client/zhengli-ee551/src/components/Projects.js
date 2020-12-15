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

    myProject = projects && projects.map( 
        (project) => {
            return(
            <div>
                {project.name}
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