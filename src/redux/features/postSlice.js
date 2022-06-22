import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPost ", async ({ id }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
});
export const deletePost = createAsyncThunk(
  "post/deletePost ",
  async ({ id }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }
);
export const createPost = createAsyncThunk(
  "post/createPost ",
  async ({ values }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/`, {
      method: "POST",
      headers: {
        Accept:"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        title:values.title,
        body:values.body,

      }),
    }).then((res) => res.json());
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading: false,
    error: null,
    edit: false,
  },
  // create asyncthunk generate three life cycle (promise 1.pending,2 fullffiled, 3 reajcted)
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // for delete objects
    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = {};
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
    //  created post
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload]
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});
export default postSlice.reducer;
