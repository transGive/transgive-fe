// "use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.4,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Từ thiện minh bạch với Web3
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.95,
              fontWeight: 400,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            Theo dõi từng đồng đóng góp của bạn trên blockchain
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 5,
              maxWidth: '700px',
              mx: 'auto',
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Không cần ví điện tử, không cần kiến thức blockchain - chỉ cần email để bắt đầu hành trình từ thiện an toàn và minh bạch
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#0d9488',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: '#f0fdfa',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease'
              }}
              onClick={() => router.push('/campaigns')}
            >
              Khám phá các quỹ
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
              onClick={() => router.push('/fundraiser/apply')}
            >
              Gây quỹ
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: '#0d9488'
          }}
        >
          Tại sao chọn TransGive?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            mb: 6,
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Kết hợp công nghệ Web3 và trải nghiệm Web2 để mang đến nền tảng từ thiện an toàn và dễ sử dụng nhất
        </Typography>

        <Box className="flex w-[100%] justify-between mb-8">
          {[
            {
              title: 'Minh bạch tuyệt đối',
              description: 'Mọi giao dịch đều được ghi nhận trên blockchain. Theo dõi từng đồng tiền từ lúc đóng góp đến khi quỹ sử dụng.',
              icon: '🔍',
              color: '#2dd4bf'
            },
            {
              title: 'An toàn & Tin cậy',
              description: 'Smart contract được kiểm định kỹ lưỡng. Chỉ những tổ chức uy tín mới được tạo quỹ trên nền tảng.',
              icon: '🔒',
              color: '#0d9488'
            },
            {
              title: 'Dễ dàng sử dụng',
              description: 'Không cần ví blockchain, không cần kiến thức kỹ thuật. Đăng nhập bằng email và bắt đầu đóng góp ngay.',
              icon: '✨',
              color: '#2dd4bf'
            }
          ].map((feature, index) => (
            <Box sx={{ width: '32%' }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  width: '100%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(13, 148, 136, 0.15)',
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      fontSize: '3rem',
                      mb: 2,
                      display: 'inline-block',
                      width: 100,
                      height: 100,
                      // display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      borderRadius: '50%',
                      bgcolor: `${feature.color}15`,
                    }}
                  >
                    <div className="p-3">{feature.icon}</div>
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#0d9488'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: 'gray2', py: 8, display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#0d9488'
            }}
          >
            Cách thức hoạt động
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Chỉ với 3 bước đơn giản để bắt đầu hành trình từ thiện minh bạch
          </Typography>

          <Box sx={{ mt: 2, display: 'flex' }}>
            {[
              {
                step: '1',
                title: 'Đăng nhập dễ dàng',
                description: 'Kết nối ví blockchain hoặc đăng nhập bằng email. Hệ thống tự động tạo ví ảo cho bạn.',
              },
              {
                step: '2',
                title: 'Chọn quỹ và đóng góp',
                description: 'Duyệt qua các quỹ đã được xác minh, xem thông tin chi tiết và đóng góp an tâm.',
              },
              {
                step: '3',
                title: 'Theo dõi minh bạch',
                description: 'Xem lịch sử giao dịch on-chain, theo dõi cách quỹ sử dụng đóng góp của bạn theo thời gian thực.',
              }
            ].map((step, index) => (
              <Box key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: '#2dd4bf',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      fontWeight: 700,
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 4px 12px rgba(45, 212, 191, 0.3)',
                    }}
                  >
                    {step.step}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#0d9488'
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
          {[
            { number: '100%', label: 'Minh bạch', sublabel: 'Mọi giao dịch on-chain' },
            { number: 'Web3', label: 'Công nghệ', sublabel: 'Blockchain Ethereum' },
            { number: 'Web2', label: 'Trải nghiệm', sublabel: 'Dễ dùng như email' },
            { number: '24/7', label: 'Theo dõi', sublabel: 'Thời gian thực' }
          ].map((stat, index) => (
            <Box key={index}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: '#2dd4bf',
                  mb: 1
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#0d9488',
                  mb: 0.5
                }}
              >
                {stat.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.sublabel}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2
            }}
          >
            Bắt đầu hành trình từ thiện minh bạch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.95
            }}
          >
            Tham gia cùng hàng nghìn người đang làm từ thiện một cách minh bạch và an toàn
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#0d9488',
              px: 5,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              '&:hover': {
                bgcolor: '#f0fdfa',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.3s ease'
            }}
            onClick={() => router.push('/campaigns')}
          >
            Bắt đầu ngay
          </Button>
        </Container>
      </Box>
    </>
  );
}
