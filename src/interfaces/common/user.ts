export interface UpdateUserDto {
    userName?: string;
    avatar?: string;
    email?: string;
    password?: string;
    status?: "active" | "inactive" | "banned" | "pending";
    role?: "admin" | "fundraiser" | "user";
    supportingImages?: { url: string; publicId: string }[];
    activityField?: string;
    operationalScope?: string;
    locationAddress?: string;
    description?: string;
}

export interface UpdateUserResponse {
    _id: string;
    userAddress: string;
    userName?: string;
    avatar?: string;
    email?: string;
    status?: "active" | "inactive" | "banned" | "pending";
    role?: "admin" | "fundraiser" | "user";
    supportingImages?: { url: string; publicId: string }[];
    activityField?: string;
    operationalScope?: string;
    locationAddress?: string;
    description?: string;
}
