import { createSlice } from '@reduxjs/toolkit'

const initialState = {
email : "",
password : ""
}

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    onChangeEmail: (state, action) => {
      state.email = action.payload
    },
    onChangePassword: (state, action) => {
      state.password = action.payload
    }
  }
});

export const {onChangeEmail, onChangePassword} = login.actions

export default login.reducer