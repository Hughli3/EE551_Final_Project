import axios from 'axios';

const baseUrl = "http://localhost:5000"

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

    async getTest() {
        try {
            return await axios.get(baseUrl + "/api/");
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) throw Object.assign(new Error(e.response.data.error), { code: e.response.status });
            throw e
        }
    }

};

export default serverController;
