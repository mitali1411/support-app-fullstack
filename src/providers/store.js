import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import complaintReducer from "./Complaint/complaintSlice";
import commentReducer from './comment/commentSlice'

const store = configureStore({
    reducer : {
        auth : authReducer,
        complaint : complaintReducer,
        comment : commentReducer
    } 
})

export default store