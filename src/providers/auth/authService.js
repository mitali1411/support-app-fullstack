import axios from "axios";

const register = async(formData) => {
    // console.log(formData)
    const response = await axios.post('/api/user/', formData);

    // LOCALSTORAGE
    localStorage.setItem('user', JSON.stringify(response.data));
    // console.log(response)
    return response.data;
};


const login = async(formData) => {
    // console.log(formData)
    const response = await axios.post('/api/user/login', formData);

    // LOCALSTORAGE
    localStorage.setItem('user', JSON.stringify(response.data));
    // console.log(response)
    return response.data;
};


const authService = {
    register,
    login
};

export default authService