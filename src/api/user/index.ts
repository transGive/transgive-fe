import { request } from '@/services/client';
import { UpdateUserDto, UpdateUserResponse } from '@/interfaces';


export const updateUser = (data: UpdateUserDto) =>
    request.patch<UpdateUserDto, UpdateUserResponse>('/users/update', data);
