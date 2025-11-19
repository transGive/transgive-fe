"use client";

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Paper,
  IconButton,
  Grid
} from '@mui/material';
import { CloudUpload, Delete, Description, HelpOutline } from '@mui/icons-material';
import MarkdownSyntaxModal from '@/components/Modal/MarkdownSyntaxModal';
import { uploadImages } from '@/api/upload';
import UpdateFundraiserForm from '@/components/form/UpdateFundraiserForm';
import { updateUser } from '@/api/user';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setUser } from '@/store/slices/userSlice';

interface FormData {
  applicantType: 'individual' | 'organization';
  name: string;
  operationalScope: string;
  activityField: string;
  locationAddress: string;
  description: string;
  supportingImages: File[];
}

function ApplyFundraiser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState<FormData>({
    applicantType: 'individual',
    name: '',
    activityField: '',
    operationalScope: '',
    locationAddress: '',
    description: '',
    supportingImages: []
  });


  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [markdownModalOpen, setMarkdownModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const clearError = (field: keyof FormData) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files) {
  //     const newFiles = Array.from(files);
  //     setFormData(prev => ({
  //       ...prev,
  //       supportingImages: [...prev.supportingImages, ...newFiles]
  //     }));
  //   }
  // };

  // const handleRemoveFile = (index: number) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     supportingImages: prev.supportingImages.filter((_, i) => i !== index)
  //   }));
  // };
  console.log(formData);


  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập tên';
    }

    if (!formData.activityField.trim()) {
      newErrors.activityField = 'Vui lòng nhập lĩnh vực hoạt động';
    }

    if (!formData.operationalScope.trim()) {
      newErrors.operationalScope = 'Vui lòng nhập phạm vi hoạt động';
    }

    // if (!formData.locationAddress.trim()) {
    //   newErrors.locationAddress = 'Vui lòng nhập địa chỉ';
    // }

    if (!formData.description.trim()) {
      newErrors.description = 'Vui lòng nhập mô tả';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Mô tả phải có ít nhất 50 ký tự';
    }

    // if (formData.supportingImages.length === 0) {
    //   newErrors.supportingImages = 'Vui lòng tải lên ít nhất 1 ảnh minh chứng';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsUploading(true);
    setSubmitStatus('idle');

    try {
      // Step 1: Upload images to Cloudinary
      let uploadResult: { url: string, publicId: string }[] = []
      if (formData?.supportingImages.length > 0) {
        uploadResult = await uploadImages(formData.supportingImages);
      }
      // const imageUrls = uploadResult.map((item: any) => item.url);
      console.log('uploadResult: ', uploadResult);


      // Step 2: Submit form data with image URLs
      const formDataToSend = {
        userName: formData.name,
        operationalScope: formData.operationalScope,
        locationAddress: formData.locationAddress,
        activityField: formData.activityField,
        description: formData.description,
        supportingImages: uploadResult,
        status: 'active' as const,
        role: 'fundraiser' as const,
      };

      // Call updateUser API
      const updatedUser = await updateUser(formDataToSend);
      console.log('updatedUser: ', updatedUser);

      // Update Redux store with new user data
      dispatch(setUser({
        ...user,
        ...updatedUser,
      }));

      setSubmitStatus('success');
      // Reset form after successful submission
      setTimeout(() => {
        // setFormData({
        //   applicantType: 'individual',
        //   name: '',
        //   activityField: '',
        //   operationalScope: '',
        //   locationAddress: '',
        //   description: '',
        //   supportingImages: []
        // });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: 'gray1', minHeight: '100vh', py: 8 }}>
      {/*  */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: '#0d9488',
            mb: 2
          }}
        >
          Đăng ký gây quỹ
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Điền thông tin chi tiết để đăng ký gây quỹ trên nền tảng TransGive
        </Typography>
      </Box>

      <UpdateFundraiserForm formData={formData} setFormData={setFormData} isUploading={isUploading} submitStatus={submitStatus} handleSubmit={handleSubmit} errors={errors} clearError={clearError} />
    </Box>
  );
}

export default ApplyFundraiser;
