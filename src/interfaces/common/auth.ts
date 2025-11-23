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
        status?: "active" | "inactive" | "banned" | "pending";
        role?: "admin" | "fundraiser" | "user";
        supportingImages?: { url: string; publicId: string }[];
        activityField?: string;
        operationalScope?: string;
        locationAddress?: string;
        description?: string;
    };
}
