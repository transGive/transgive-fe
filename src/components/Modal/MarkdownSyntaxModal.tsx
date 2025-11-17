"use client";

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Divider
} from '@mui/material';
import { Close, Code } from '@mui/icons-material';

interface MarkdownSyntaxModalProps {
  open: boolean;
  onClose: () => void;
}

const markdownExamples = [
  {
    syntax: '**text**',
    description: 'Đậm',
    example: '**Đậm**'
  },
  {
    syntax: '*text*',
    description: 'Nghiêng',
    example: '*Nghiêng*'
  },
  {
    syntax: '# Heading 1',
    description: 'Tiêu đề lớn',
    example: '# Tiêu đề lớn'
  },
  {
    syntax: '## Heading 2',
    description: 'Tiêu đề vừa',
    example: '## Tiêu đề vừa'
  },
  {
    syntax: '### Heading 3',
    description: 'Tiêu đề nhỏ',
    example: '### Tiêu đề nhỏ'
  },
  {
    syntax: '- Item',
    description: 'Danh sách dấu gạch đầu dòng',
    example: '- Mục 1\n- Mục 2'
  },
  {
    syntax: '1. Item',
    description: 'Danh sách đánh số',
    example: '1. Mục 1\n2. Mục 2'
  },
  {
    syntax: '[text](url)',
    description: 'Liên kết',
    example: '[TransGive](https://transgive.com)'
  },
  {
    syntax: '![alt](url)',
    description: 'Hình ảnh',
    example: '![Mô tả](https://example.com/image.jpg)'
  },
  {
    syntax: '`code`',
    description: 'Mã nguồn inline',
    example: '`const x = 10`'
  },
  {
    syntax: '```code```',
    description: 'Khối mã nguồn',
    example: '```\nconst x = 10;\n```'
  },
  {
    syntax: '> quote',
    description: 'Trích dẫn',
    example: '> Câu trích dẫn'
  }
];

function MarkdownSyntaxModal({ open, onClose }: MarkdownSyntaxModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: '0 4px 24px rgba(13, 148, 136, 0.2)'
        }
      }}
    >
      <DialogTitle
        sx={{
          bgcolor: '#0d9488',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          py: 2.5,
          px: 3
        }}
      >
        <Code sx={{ fontSize: 28 }} />
        <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
          Hướng dẫn sử dụng Markdown
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          onClick={onClose}
          sx={{
            minWidth: 'auto',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <Close />
        </Button>
      </DialogTitle>

      <DialogContent sx={{ p: 3, bgcolor: '#f9fafb' }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Sử dụng các cú pháp Markdown dưới đây để định dạng nội dung mô tả của bạn:
        </Typography>

        <TableContainer component={Paper} elevation={0} sx={{ bgcolor: 'white' }}>
          <Table>
            <TableBody>
              {markdownExamples.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow
                    sx={{
                      '&:hover': {
                        bgcolor: '#f0fdfa'
                      }
                    }}
                  >
                    <TableCell
                      sx={{
                        width: '35%',
                        borderRight: '1px solid #e5e7eb',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#0d9488'
                      }}
                    >
                      {item.syntax}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: '25%',
                        borderRight: '1px solid #e5e7eb',
                        fontSize: '0.9rem'
                      }}
                    >
                      {item.description}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: '40%',
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        color: '#374151',
                        whiteSpace: 'pre-wrap'
                      }}
                    >
                      {item.example}
                    </TableCell>
                  </TableRow>
                  {index < markdownExamples.length - 1 && (
                    <TableRow>
                      <TableCell colSpan={3} sx={{ border: 'none', py: 0.5 }}>
                        <Divider />
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 3, p: 2, bgcolor: '#eff6ff', borderRadius: 2, borderLeft: '4px solid #0d9488' }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#0d9488' }}>
            💡 Gợi ý:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bạn có thể kết hợp nhiều cú pháp với nhau để tạo nội dung phong phú và dễ đọc hơn.
            Ví dụ: **Đậm và [liên kết](url)** hoặc `mã nguồn` trong đoạn văn.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2.5, bgcolor: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: '#0d9488',
            color: 'white',
            px: 4,
            py: 1,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              bgcolor: '#0f766e'
            }
          }}
        >
          Đã hiểu
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MarkdownSyntaxModal;