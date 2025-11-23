import { request } from "@/services/client";
import { LoginWalletRequest, LoginWalletResponse } from "@/interfaces";

export const loginWallet = (data: LoginWalletRequest) =>
    request.post<LoginWalletRequest, LoginWalletResponse>(
        "/auth/login-wallet",
        data
    );

export interface RefreshTokenResponse {
    accessToken: string;
}

export const refreshToken = () =>
    request.get<any, RefreshTokenResponse>("/auth/refresh");
