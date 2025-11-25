import { type UploadImagesResponse } from '@/interfaces';
import { request } from '@/services/client';

export const uploadImages = (files: File[]) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append('files', file);
  });
  const totalSizeMB = files.reduce((sum, file) => sum + file.size, 0) / 1024 / 1024;
  const estimatedTimeout = Math.max(120000, Math.ceil(totalSizeMB * 20000) + 60000); // Min 2min, 20s per MB + 1min buffer
  console.log(`Upload timeout set to ${estimatedTimeout}ms for ${totalSizeMB.toFixed(2)}MB`);

  const response = request.post<FormData, UploadImagesResponse>(
    '/upload/images',
    formData,
  { timeout: estimatedTimeout }
  );
  return response;
}

