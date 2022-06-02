import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const signupandlogin_post_api_v1_signup_read = createAsyncThunk(
  "signupandlogin_response_post_Signups/signupandlogin_post_api_v1_signup_read",
  async payload => {
    const response = await apiService.signupandlogin_post_api_v1_signup_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const signupandlogin_response_post_SignupsSlice = createSlice({
  name: "signupandlogin_response_post_Signups",
  initialState,
  reducers: {},
  extraReducers: {
    [signupandlogin_post_api_v1_signup_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [signupandlogin_post_api_v1_signup_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [signupandlogin_post_api_v1_signup_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  signupandlogin_post_api_v1_signup_read,
  slice: signupandlogin_response_post_SignupsSlice
}
