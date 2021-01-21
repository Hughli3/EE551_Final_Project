import axios from 'axios';
// import { getParsedCommandLineOfConfigFile } from 'typescript';

const baseUrl = "http://localhost:6000"

const serverController = {

    async getAllPhotos(page, filter, sort) {
        if (!page) page = 1;

        try {
            if(filter !== "null" && sort !== "null"){
                return await axios.get(baseUrl + "/api/photo/?page=" + page + "&filter=" + filter + "&sort=" + sort)
            }
            else if ((filter  !== "null" && sort === "null") || (filter !== "null" && !sort)){
                return await axios.get(baseUrl + "/api/photo/?page=" + page + "&filter=" + filter)
            }
            else if((filter === "null" && sort !== "null") || (sort !== "null" && !filter) ){
                return await axios.get(baseUrl + "/api/photo/?page=" + page + "&sort=" + sort)
            }else{
                return await axios.get(baseUrl + "/api/photo/?page=" + page)
            }
            
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) throw Object.assign(new Error(e.response.data.error), { code: e.response.status });
            throw e
        }
    },

    async getProperty (pid) {
        try {
            return await axios.get(baseUrl + "/api/property/" + pid);
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) throw Object.assign(new Error(e.response.data.error), { code: e.response.status });
            throw e
        }
    },

    async getHome() {
        try {
            return await axios.get(baseUrl + "/api/");
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) throw Object.assign(new Error(e.response.data.error), { code: e.response.status });
            throw e
        }
    },

    async getProfile() {
        try{
            return await axios.get(baseUrl + "/api/profile/");
        }catch (e) {
            if (e.response && e.response.data && e.response.data.error) throw Object.assign(new Error(e.response.data.error), { code: e.response.status });
            throw e
        }
    },

    async getExperiences() {
        try{
            return await axios.get(baseUrl + "/api/experiences");
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) throw Object.assign(new Error(e.response.data.error), { code: e.response.status });
            throw e            
        }
    },

    async getProjects() {
        try{
            return await axios.get(baseUrl + "/api/projects");
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) throw Object.assign(new Error(e.response.data.error), { code: e.response.status });
            throw e            
        }
    },

    async getContact() {
        try{
            return await axios.get(baseUrl + "/api/contact");
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) throw Object.assign(new Error(e.response.data.error), { code: e.response.status });
            throw e            
        }
    }


};

export default serverController;
