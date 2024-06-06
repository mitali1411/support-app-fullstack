import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentService from "./commentService";

const commentSlice = createSlice({
    name : 'comment',
    initialState : {
        isLoading: false,
        isError : false,
        isSuccess : false,
        comments : [],
        message : ''
    },
    reducers:{},
    extraReducers : builder => {
        builder.addCase(getComments.pending, (state, action) => {
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false,
            state.message = ''
        }).addCase(getComments.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false,
            state.message = action.payload
        }).addCase(getComments.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true,
            state.comments = action.payload,
            state.message =''
        }).addCase(addComment.pending, (state, action) => {
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false,
            state.message = ''
        }).addCase(addComment.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false,
            state.message = action.payload
        }).addCase(addComment.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true,
            state.comments = [action.payload, ...state.comments],
            state.message =''
        })
    }
});

export default commentSlice.reducer;


// Fetch All Comments
export const getComments = createAsyncThunk('FETCH/COMMENTS', async(formData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    try {
        return await commentService.fetchComments(formData, token)
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message)
    }
})

// Add Comments
export const addComment = createAsyncThunk('ADD/COMMENTS', async(formData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    try {
        return await commentService.addComment(formData, token)
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message)
    }
})