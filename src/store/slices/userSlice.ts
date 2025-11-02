import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userAddress: string;
  avatar: string;
  userName: string;
  email: string;
  accessToken: string;
}

const initialState: UserState = {
  userAddress: '',
  avatar: '',
  userName: '',
  email: '',
  accessToken: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userAddress = action.payload.userAddress;
      state.avatar = action.payload.avatar;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken
    },
    setUserAddress: (state, action: PayloadAction<string>) => {
      state.userAddress = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    clearUser: (state) => {
      state.userAddress = '';
      state.avatar = '';
      state.userName = '';
      state.email = '';
    },
  },
});

export const {
  setUser,
  setUserAddress,
  setAvatar,
  setUserName,
  setEmail,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;
