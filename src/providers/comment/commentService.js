import axios from "axios"

// Get All Comments
const fetchComments = async(id, token) => {
    // console.log(id, token)
    const options = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(`/api/ticket/${id}/note`, options)
    return response.data;
}


// Add Comment
const addComment = async(formData, token) => {
    const options = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(`/api/ticket/${formData.id}/note`, formData ,options)
    return response.data;
}

const commentService = {
    fetchComments,
    addComment
}

export default commentService