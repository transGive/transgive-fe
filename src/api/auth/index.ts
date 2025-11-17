import { apiClient } from '../client';
import axios from 'axios';
export interface LoginWalletRequest {
  userAddress: string;
}

export interface LoginWalletResponse {
  accessToken: string;
  user: {
    _id: string;
    userAddress: string;
    email?: string;
    userName?: string;
    avatar?: string;
    status?: 'active' | 'inactive' | 'banned' | 'pending';
    role?: 'admin' | 'fundraiser' | 'user';
    supportingImages?: { url: string; publicId: string }[];
    activityField?: string;
    operationalScope?: string;
    locationAddress?: string;
    description?: string;
  };
}

export const loginWallet = async (
  data: LoginWalletRequest
): Promise<LoginWalletResponse> => {
  const response = await axios.post<LoginWalletResponse>(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/login-wallet',
    data
  );
  return response.data;
};

export interface RefreshTokenResponse {
  accessToken: string;
}

export const refreshToken = async (): Promise<RefreshTokenResponse> => {
  const response = await apiClient.get<RefreshTokenResponse>('/auth/refresh');
  return response.data;
};
