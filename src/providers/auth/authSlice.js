import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const userExist = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : userExist ? userExist : null,
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : ''
    },
    reducers : {},

    extraReducers : builder => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false,
            state.message = ''
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true,
            state.user = action.payload,
            state.message = ''
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false,
            state.user = ''
            state.message = action.payload
        }).addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = false,
            state.user = null,
            state.message = ''
        }).addCase(loginUser.pending, (state, action) => {
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false,
            state.message = ''
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true,
            state.user = action.payload,
            state.message = ''
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false,
            state.user = ''
            state.message = action.payload
        })
    }

})

export default authSlice.reducer;



// Register User Thunk
export const registerUser = createAsyncThunk('AUTH/REGISTER', async(formData, thunkAPI) => {
    try {
        return await authService.register(formData)
    } catch (error) {
        const message = error.response.data.error
        return thunkAPI.rejectWithValue(message)
    }
});


// Login User Thunk
export const loginUser = createAsyncThunk('AUTH/LOGIN', async(formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
        const message = error.response.data.error
        return thunkAPI.rejectWithValue(message)
    }
});


// Logout User Thunk
export const logoutUser = createAsyncThunk('AUTH/LOGOUT', async() => {
    localStorage.removeItem('user');
});

