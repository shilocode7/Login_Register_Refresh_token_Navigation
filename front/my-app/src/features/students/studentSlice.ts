import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { login , register, refresh } from './studentAPI';
import ICred from '../../models/Cred';
import jwt_decode from "jwt-decode";

export interface StudentState {
  logged: boolean;
  access: string;
  userName: string;
  email: string
  registerd:boolean
  }

const initialState: StudentState = {
  logged: false,
  access: "",
  userName: '',
  email: '',
  registerd: false
};

export const refreshAsync = createAsyncThunk(
  'student/refresh',
  async (token:string ) => {
    const response = await refresh(token);
    return response.data;
  }
);

export const loginAsync = createAsyncThunk(
  'student/login',
  async (cred:ICred) => {
    const response = await login(cred);
    return response.data;
  }
);

export const registerAsync = createAsyncThunk(
  'student/register',
  async (cred:ICred) => {
    const response = await register(cred);
    return response.data;
  }
);



export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    logout: (state) => {
        state.logged =false
        localStorage.setItem("access","")
        localStorage.setItem("refresh","")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action.payload.access)
        state.access = action.payload.access

        console.log( jwt_decode(action.payload.refresh))
        console.log( jwt_decode(state.access))
        localStorage.setItem("access",state.access)
        localStorage.setItem("refresh",action.payload.refresh)
        state.userName = jwt_decode<any>(state.access).username
        state.email = jwt_decode<any>(state.access).email
        state.logged = true;
        //state.status = 'failed';
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
       console.log(action.payload)
        state.registerd = true;
      })
      .addCase(refreshAsync.fulfilled, (state, action) => {
        console.log(action.payload.access)
        state.access=action.payload.access

        console.log( jwt_decode(action.payload.refresh))
        console.log( jwt_decode(state.access))
        localStorage.setItem("access",state.access)
        localStorage.setItem("refresh",action.payload.refresh)
        state.userName=jwt_decode<any>(state.access).username
        state.email=jwt_decode<any>(state.access).email
        state.logged =true
      })
  },
});

export const { logout} = studentSlice.actions;
export const selectAccess = (state: RootState) => state.student.access;
export const selectLogged = (state: RootState) => state.student.logged;
export const selectregisterd = (state: RootState) => state.student.registerd;
export const selectuserName = (state: RootState) => state.student.userName;
export const selectemail = (state: RootState) => state.student.email;
export default studentSlice.reducer;
