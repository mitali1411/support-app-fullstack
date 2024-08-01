import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import complaintService from "./complaintService";

const complaintSlice = createSlice({
    name : 'complaint',
    initialState :{
        complaints : [],
        complaint : {},
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : ''
    },
    reducers : {},
    extraReducers : builder => {
        builder.addCase(getAllComplaints.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = ''
        }).addCase(getAllComplaints.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload
        }).addCase(getAllComplaints.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.complaints = action.payload;
            state.message = ''
        }).addCase(getAllComplaint.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = ''
        }).addCase(getAllComplaint.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload
        }).addCase(getAllComplaint.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.complaint = action.payload;
            state.message = ''
        }).addCase(raiseComplaint.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = ''
        }).addCase(raiseComplaint.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload
        }).addCase(raiseComplaint.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.complaint = action.payload;
            state.message = ''
        }).addCase(closeComplaint.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = ''
        }).addCase(closeComplaint.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload
        }).addCase(closeComplaint.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.complaint = action.payload;
            state.message = ''
        })
    }
})
export default complaintSlice.reducer


// GET All COMPLAINTS
export const getAllComplaints = createAsyncThunk('GET/COMPLAINTS', async(_ , thunkAPI)=> {
    try {
        let token = thunkAPI.getState().auth.user.token;
        return await complaintService.getComplaints(token)
    } catch (error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
    }
});

// GET COMPLAINT
export const getAllComplaint = createAsyncThunk('GET/COMPLAINT', async(id , thunkAPI)=> {
    try {
        let token = thunkAPI.getState().auth.user.token;
        return await complaintService.getComplaint(id, token)
    } catch (error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
    }
});


// ADD COMPLAINT
export const raiseComplaint = createAsyncThunk('ADD/COMPLAINT', async(formData , thunkAPI)=> {
    try {
        let token = thunkAPI.getState().auth.user.token;
        return await complaintService.addComplaint(formData, token)
    } catch (error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
    }
});


// CLOSE COMPLAINT
export const closeComplaint = createAsyncThunk('CLOSE/COMPLAINT', async(id , thunkAPI)=> {
    try {
        let token = thunkAPI.getState().auth.user.token;
        return await complaintService.closeComplaint(id, token)
    } catch (error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
    }
});