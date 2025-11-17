import { apiClient } from '../client';

// export interface UploadImagesResponse {
//   urls: string[];
//   publicIds: string[];
// }
export interface UploadImageItem {
  url: string;
  publicId: string;
}

export type UploadImagesResponse = UploadImageItem[];
// export interface UploadImagesResponse { url: string; publicId: string }

export async function uploadImages(files: File[]): Promise<UploadImagesResponse> {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append('files', file);
  });

  // Calculate total file size for timeout calculation
  // Formula: 60s base + 20s per MB (allows for slower upload speeds)
  const totalSizeMB = files.reduce((sum, file) => sum + file.size, 0) / 1024 / 1024;
  const estimatedTimeout = Math.max(120000, Math.ceil(totalSizeMB * 20000) + 60000); // Min 2min, 20s per MB + 1min buffer
  console.log(`Upload timeout set to ${estimatedTimeout}ms for ${totalSizeMB.toFixed(2)}MB`);

  // The request interceptor will automatically handle FormData Content-Type
  const response = await apiClient.post<UploadImagesResponse>(
    '/upload/images',
    formData,
    {
      timeout: estimatedTimeout, // Dynamic timeout based on file size
      // Prevent axios from timing out too early
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    }
  );
  console.log('response: ', response);

  return response.data;
}

