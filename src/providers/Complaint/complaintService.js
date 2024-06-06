import axios from "axios";

const API_URL = '/api/ticket'

const getComplaints = async(token) => {

    const options = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, options);
    return response.data;
}


const getComplaint = async(id,token) => {

    const options = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + '/' + id , options);
    return response.data;
}


const addComplaint = async(formData, token) => {
    // console.log(formData)
    const options = {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, formData , options);
    // console.log(response.data)
    // const response = await axios.post(API_URL, formData, options);
    return response.data;
}



const closeComplaint = async(id, token) => {
    const options = {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    }
    const response = await axios.put(API_URL + '/' + id, {status: 'close'}, options);
    return response.data;
}

const complaintService = {
    getComplaints,
    getComplaint,
    addComplaint,
    closeComplaint
};

export default complaintService