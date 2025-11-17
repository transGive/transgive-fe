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

interface FormData {
  applicantType: 'individual' | 'organization';
  name: string;
  operationalScope: string;
  activityField: string;
  locationAddress: string;
  description: string;
  supportingImages: File[];
}

function UpdateFundraiserForm({
  handleSubmit,
  setFormData,
  formData,
  submitStatus,
  isUploading,
  errors = {},
  clearError,
}: {
  formData: FormData,
  handleSubmit: (e: React.FormEvent) => Promise<void>,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>,
  submitStatus: 'idle' | 'success' | 'error',
  isUploading: boolean,
  errors?: Partial<Record<keyof FormData, string>>,
  clearError?: (field: keyof FormData) => void
}) {
  const [markdownModalOpen, setMarkdownModalOpen] = useState(false);
  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (clearError) {
      clearError(field);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setFormData(prev => ({
        ...prev,
        supportingImages: [...prev.supportingImages, ...newFiles]
      }));
    }
  };

  const handleRemoveFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      supportingImages: prev.supportingImages.filter((_, i) => i !== index)
    }));
  };


  return (
    <>
      <Container maxWidth="md">
        {/* Header */}
        {/* Form Card */}
        <Card
          sx={{
            boxShadow: '0 4px 24px rgba(13, 148, 136, 0.1)',
            borderRadius: 3
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <form onSubmit={handleSubmit}>
              {/* Applicant Type */}
              <FormControl component="fieldset" sx={{ mb: 4, width: '100%' }}>
                <FormLabel
                  component="legend"
                  sx={{
                    color: '#0d9488',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    mb: 2
                  }}
                >
                  Loại hình đăng ký
                </FormLabel>
                <RadioGroup
                  row
                  value={formData.applicantType}
                  onChange={(e) => handleInputChange('applicantType', e.target.value)}
                >
                  <FormControlLabel
                    value="individual"
                    control={<Radio sx={{ color: '#0d9488', '&.Mui-checked': { color: '#0d9488' } }} />}
                    label="Cá nhân"
                  />
                  <FormControlLabel
                    value="organization"
                    control={<Radio sx={{ color: '#0d9488', '&.Mui-checked': { color: '#0d9488' } }} />}
                    label="Tổ chức"
                  />
                </RadioGroup>
              </FormControl>

              {/* Name */}
              <TextField
                fullWidth
                label={formData.applicantType === 'individual' ? 'Tên cá nhân' : 'Tên tổ chức'}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ mb: 3 }}
                required
                placeholder={
                  formData.applicantType === 'individual'
                    ? 'Ví dụ: Nguyễn Văn A'
                    : 'Ví dụ: Quỹ từ thiện ABC'
                }
              />

              {/* operationalScope of Activity */}
              <TextField
                fullWidth
                label="Lĩnh vực hoạt động"
                value={formData.activityField}
                onChange={(e) => handleInputChange('activityField', e.target.value)}
                error={!!errors.activityField}
                helperText={errors.activityField || 'Ví dụ: Giáo dục, Y Tế, Văn hoá, Đời sống,...'}
                sx={{ mb: 3 }}
                required
                placeholder="Nhập lĩnh vực hoạt động của bạn"
              />

              {/* operationalScope of Activity */}
              <TextField
                fullWidth
                label="Phạm vi hoạt động"
                value={formData.operationalScope}
                onChange={(e) => handleInputChange('operationalScope', e.target.value)}
                error={!!errors.operationalScope}
                helperText={errors.operationalScope || 'Ví dụ: Toàn quốc, Thành phố Hồ Chí Minh, Khu vực miền Trung'}
                sx={{ mb: 3 }}
                required
                placeholder="Nhập phạm vi hoạt động của bạn"
              />

              {/* locationAddress */}
              <TextField
                fullWidth
                label="Địa chỉ"
                value={formData.locationAddress}
                onChange={(e) => handleInputChange('locationAddress', e.target.value)}
                error={!!errors.locationAddress}
                helperText={errors.locationAddress}
                sx={{ mb: 3 }}
                required
                multiline
                rows={2}
                placeholder="Nhập địa chỉ đầy đủ"
              />

              {/* Description */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography
                    sx={{
                      color: '#0d9488',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}
                  >
                    Mô tả
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<HelpOutline />}
                    onClick={() => setMarkdownModalOpen(true)}
                    sx={{
                      borderColor: '#0d9488',
                      color: '#0d9488',
                      textTransform: 'none',
                      fontSize: '0.85rem',
                      py: 0.5,
                      px: 1.5,
                      '&:hover': {
                        borderColor: '#0d9488',
                        bgcolor: '#f0fdfa'
                      }
                    }}
                  >
                    Hướng dẫn Markdown
                  </Button>
                </Box>
                <TextField
                  fullWidth
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  error={!!errors.description}
                  helperText={errors.description || `${formData.description.length} / 50 ký tự tối thiểu`}
                  required
                  multiline
                  rows={6}
                  placeholder="Mô tả chi tiết về mục đích gây quỹ, hoạt động, và kế hoạch sử dụng nguồn vốn..."
                />
              </Box>

              {/* Supporting Images */}
              <FormControl fullWidth sx={{ mb: 3 }}>
                <FormLabel
                  sx={{
                    color: '#0d9488',
                    fontWeight: 600,
                    fontSize: '1rem',
                    mb: 2
                  }}
                >
                  Ảnh minh chứng *
                </FormLabel>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                  Sơ yếu lý lịch, giấy phép hoạt động, mạng xã hội, hoặc các tài liệu chứng minh khác
                </Typography>

                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<CloudUpload />}
                  sx={{
                    borderColor: errors.supportingImages ? '#d32f2f' : '#0d9488',
                    color: errors.supportingImages ? '#d32f2f' : '#0d9488',
                    '&:hover': {
                      borderColor: errors.supportingImages ? '#d32f2f' : '#0d9488',
                      bgcolor: '#f0fdfa'
                    },
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Tải lên ảnh minh chứng
                  <input
                    type="file"
                    hidden
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                  />
                </Button>

                {errors.supportingImages && (
                  <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                    {errors.supportingImages}
                  </Typography>
                )}

                {/* Display uploaded files */}
                {formData.supportingImages.length > 0 && (
                  <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      {formData.supportingImages.map((file, index) => (
                        <Grid key={index} className='xs:12 sm:6'>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              bgcolor: '#f0fdfa'
                            }}
                          >
                            <Description sx={{ color: '#0d9488' }} />
                            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                {file.name}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {(file.size / 1024).toFixed(2)} KB
                              </Typography>
                            </Box>
                            <IconButton
                              size="small"
                              onClick={() => handleRemoveFile(index)}
                              sx={{ color: '#d32f2f' }}
                            >
                              <Delete />
                            </IconButton>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </FormControl>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Đăng ký thành công! Chúng tôi sẽ xem xét và phản hồi trong thời gian sớm nhất.
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  Có lỗi xảy ra. Vui lòng thử lại sau.
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={isUploading}
                sx={{
                  bgcolor: '#0d9488',
                  color: 'white',
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.3)',
                  '&:hover': {
                    bgcolor: '#0f766e',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(13, 148, 136, 0.4)',
                  },
                  '&:disabled': {
                    bgcolor: '#0d9488',
                    opacity: 0.7,
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {isUploading ? 'Đang tải lên...' : 'Gửi đăng ký'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info Section */}
        {/* <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Sau khi gửi đăng ký, chúng tôi sẽ xem xét và liên hệ với bạn trong vòng 3-5 ngày làm việc.
          </Typography>
        </Box> */}
      </Container>

      <MarkdownSyntaxModal
        open={markdownModalOpen}
        onClose={() => setMarkdownModalOpen(false)}
      />
    </>
  )
}

export default UpdateFundraiserForm