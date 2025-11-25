import { request } from "@/services/client";
import { type UpdateUserDto, type UpdateUserResponse } from "@/interfaces";

export const updateUser = (data: UpdateUserDto) =>
    request.patch<UpdateUserDto, UpdateUserResponse>("/users/update", data);
