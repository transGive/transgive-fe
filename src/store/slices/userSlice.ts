import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userAddress: string;
  avatar?: string;
  userName: string;
  email: string;
  accessToken: string;
  _id: string;
  status?: 'active' | 'inactive' | 'banned' | 'pending';
  role?: 'admin' | 'fundraiser' | 'user';
  supportingImages?: { url: string; publicId: string }[];
  activityField?: string;
  operationalScope?: string;
  locationAddress?: string;
  description?: string;
}

const initialState: UserState = {
  userAddress: '',
  avatar: '',
  userName: '',
  email: '',
  accessToken: '',
  _id: '',
  status: 'active',
  role: 'user',
  supportingImages: [],
  activityField: '',
  operationalScope: '',
  locationAddress: '',
  description: '',
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
      state.accessToken = action.payload.accessToken;
      state._id = action.payload._id;
      state.status = action.payload.status;
      state.role = action.payload.role;
      state.supportingImages = action.payload.supportingImages;
      state.activityField = action.payload.activityField;
      state.operationalScope = action.payload.operationalScope;
      state.locationAddress = action.payload.locationAddress;
      state.description = action.payload.description;
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
      state.accessToken = '';
      state._id = '';
      state.status = undefined;
      state.role = undefined;
      state.supportingImages = undefined;
      state.activityField = undefined;
      state.operationalScope = undefined;
      state.locationAddress = undefined;
      state.description = undefined;
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
