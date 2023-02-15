export default interface ICred{
    username:string
    password:string
    email?:string
}

interface AuthState {
    token: string | null;
    refreshToken: string | null;
    // ... other properties
  }
  
  const initialState: AuthState = {
    token: null,
    refreshToken: null,
    // ... other initial properties
  };
  