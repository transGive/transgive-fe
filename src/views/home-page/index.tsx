"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import Chip from "@mui/material/Chip";
import { keyframes } from "@mui/system";
import { useHome } from "./index.utils";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

export default function HomePage() {
    const router = useRouter();
    const { trustIndicators, features, howItWorksSteps, stats } = useHome();

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    background:
                        "linear-gradient(165deg, #0d9488 0%, #2dd4bf 50%, #5eead4 100%)",
                    color: "white",
                    py: { xs: 10, md: 16 },
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "-50%",
                        right: "-20%",
                        width: "800px",
                        height: "800px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%)",
                        animation: `${float} 6s ease-in-out infinite`,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-30%",
                        left: "-10%",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(5, 150, 105, 0.15) 0%, transparent 70%)",
                        animation: `${float} 8s ease-in-out infinite`,
                        animationDelay: "2s",
                    },
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ position: "relative", zIndex: 1 }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 3,
                        }}
                    >
                        <Chip
                            icon={
                                <SecurityIcon
                                    sx={{ color: "white !important" }}
                                />
                            }
                            label="Được bảo mật bởi Blockchain"
                            sx={{
                                bgcolor: "rgba(255, 255, 255, 0.2)",
                                backdropFilter: "blur(10px)",
                                color: "white",
                                fontWeight: 600,
                                px: 2,
                                py: 2.5,
                                fontSize: "0.95rem",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                            }}
                        />
                    </Box>

                    <Typography
                        variant="h1"
                        component="h1"
                        textAlign="center"
                        sx={{
                            fontWeight: 900,
                            mb: 3,
                            fontSize: {
                                xs: "2.5rem",
                                sm: "3.5rem",
                                md: "4.5rem",
                            },
                            lineHeight: 1.2,
                            textShadow: "0 4px 20px rgba(0,0,0,0.2)",
                            background:
                                "linear-gradient(to right, #ffffff, #ccfbf1)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Từ thiện minh bạch
                        <br />
                        với Web3
                    </Typography>

                    <Typography
                        variant="h5"
                        textAlign="center"
                        sx={{
                            mb: 2,
                            opacity: 0.95,
                            fontWeight: 400,
                            fontSize: { xs: "1.1rem", md: "1.4rem" },
                            maxWidth: "800px",
                            mx: "auto",
                            lineHeight: 1.6,
                        }}
                    >
                        Theo dõi từng đồng đóng góp của bạn trên blockchain
                    </Typography>

                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            mb: 6,
                            maxWidth: "650px",
                            mx: "auto",
                            opacity: 0.85,
                            fontSize: { xs: "1rem", md: "1.15rem" },
                            lineHeight: 1.8,
                        }}
                    >
                        Không cần ví điện tử phức tạp, không cần kiến thức
                        blockchain - chỉ cần kết nối và bắt đầu hành trình từ
                        thiện an toàn, minh bạch
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            justifyContent: "center",
                            flexWrap: "wrap",
                            mb: 8,
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<SearchIcon />}
                            sx={{
                                bgcolor: "white",
                                color: "#0d9488",
                                px: 5,
                                py: 2,
                                fontSize: "1.15rem",
                                fontWeight: 700,
                                textTransform: "none",
                                borderRadius: "50px",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                                "&:hover": {
                                    bgcolor: "#f0fdfa",
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                                },
                                transition:
                                    "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                            onClick={() => router.push("/campaigns")}
                        >
                            Khám phá các quỹ
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<TrendingUpIcon />}
                            sx={{
                                borderColor: "white",
                                color: "white",
                                px: 5,
                                py: 2,
                                fontSize: "1.15rem",
                                fontWeight: 700,
                                textTransform: "none",
                                borderRadius: "50px",
                                borderWidth: 2,
                                backdropFilter: "blur(10px)",
                                bgcolor: "rgba(255, 255, 255, 0.1)",
                                "&:hover": {
                                    borderColor: "white",
                                    bgcolor: "rgba(255,255,255,0.2)",
                                    borderWidth: 2,
                                    transform: "translateY(-4px)",
                                },
                                transition:
                                    "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                            onClick={() => router.push("/fundraiser/apply")}
                        >
                            Tạo chiến dịch gây quỹ
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 4,
                            flexWrap: "wrap",
                            opacity: 0.9,
                        }}
                    >
                        {trustIndicators.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    color: "rgba(255, 255, 255, 0.95)",
                                }}
                            >
                                {item.icon}
                                <Typography sx={{ fontWeight: 500 }}>
                                    {item.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: "#02A9B6",
                                fontWeight: 700,
                                fontSize: "1rem",
                                letterSpacing: 2,
                            }}
                        >
                            TẠI SAO CHỌN TRANSGIVE
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                fontSize: { xs: "2rem", md: "3rem" },
                                color: "#134e4a",
                                mt: 1,
                            }}
                        >
                            Công nghệ Web3, trải nghiệm Web2
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                maxWidth: "700px",
                                mx: "auto",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                            }}
                        >
                            Kết hợp sức mạnh của blockchain với giao diện thân
                            thiện để mang đến nền tảng từ thiện an toàn, minh
                            bạch và dễ sử dụng nhất
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "repeat(3, 1fr)",
                            },
                            gap: 4,
                        }}
                    >
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                sx={{
                                    height: "100%",
                                    background: "rgba(255, 255, 255, 0.9)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(13, 148, 136, 0.1)",
                                    borderRadius: 4,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                    transition:
                                        "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    position: "relative",
                                    overflow: "hidden",
                                    "&:hover": {
                                        boxShadow:
                                            "0 20px 60px rgba(13, 148, 136, 0.2)",
                                        transform: "translateY(-12px)",
                                        border: `1px solid ${feature.color}`,
                                        "& .icon-box": {
                                            transform:
                                                "scale(1.1) rotate(5deg)",
                                        },
                                        "&::before": {
                                            transform: "translateX(0)",
                                        },
                                    },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "4px",
                                        background: feature.gradient,
                                        transform: "translateX(-100%)",
                                        transition: "transform 0.4s ease",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4, textAlign: "center" }}>
                                    <Box
                                        className="icon-box"
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: "24px",
                                            background: feature.gradient,
                                            color: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mx: "auto",
                                            mb: 3,
                                            boxShadow: `0 10px 40px ${feature.color}40`,
                                            transition: "all 0.4s ease",
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            color: "#134e4a",
                                            fontSize: "1.5rem",
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "text.secondary",
                                            lineHeight: 1.8,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>

            <Box
                sx={{
                    background:
                        "linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%)",
                    py: { xs: 8, md: 12 },
                    position: "relative",
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 10 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: "#02A9B6",
                                fontWeight: 700,
                                fontSize: "1rem",
                                letterSpacing: 2,
                            }}
                        >
                            CÁCH THỨC HOẠT ĐỘNG
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                fontSize: { xs: "2rem", md: "3rem" },
                                color: "#134e4a",
                                mt: 1,
                            }}
                        >
                            3 bước đơn giản
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                maxWidth: "600px",
                                mx: "auto",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                            }}
                        >
                            Bắt đầu hành trình từ thiện minh bạch chỉ trong vài
                            phút
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "repeat(3, 1fr)",
                            },
                            gap: 6,
                        }}
                    >
                        {howItWorksSteps.map((step, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: "relative",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: -20,
                                        left: 20,
                                        width: 60,
                                        height: 60,
                                        borderRadius: "50%",
                                        background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`,
                                        color: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.5rem",
                                        fontWeight: 900,
                                        boxShadow: `0 8px 30px ${step.color}60`,
                                        zIndex: 2,
                                    }}
                                >
                                    {step.step}
                                </Box>

                                <Card
                                    sx={{
                                        flex: 1,
                                        pt: 6,
                                        pb: 4,
                                        px: 3,
                                        borderRadius: 4,
                                        border: "2px solid transparent",
                                        background: "white",
                                        boxShadow:
                                            "0 4px 20px rgba(0,0,0,0.06)",
                                        transition: "all 0.4s ease",
                                        "&:hover": {
                                            border: `2px solid ${step.color}`,
                                            boxShadow: `0 12px 50px ${step.color}30`,
                                            transform: "translateY(-8px)",
                                            "& .step-icon": {
                                                transform:
                                                    "scale(1.2) rotate(10deg)",
                                            },
                                        },
                                    }}
                                >
                                    <CardContent sx={{ textAlign: "center" }}>
                                        <Box
                                            className="step-icon"
                                            sx={{
                                                color: step.color,
                                                mb: 3,
                                                display: "inline-block",
                                                transition: "all 0.4s ease",
                                            }}
                                        >
                                            {step.icon}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                color: "#134e4a",
                                            }}
                                        >
                                            {step.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: "text.secondary",
                                                lineHeight: 1.8,
                                            }}
                                        >
                                            {step.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            <Box sx={{ bgcolor: "#f0fdfa", py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(2, 1fr)",
                                md: "repeat(4, 1fr)",
                            },
                            gap: 4,
                        }}
                    >
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                sx={{
                                    textAlign: "center",
                                    p: 4,
                                    borderRadius: 4,
                                    background: "white",
                                    border: "1px solid rgba(13, 148, 136, 0.1)",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                    transition: "all 0.4s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow: `0 20px 60px ${stat.color}30`,
                                        "&::before": {
                                            transform: "scale(1)",
                                            opacity: 0.1,
                                        },
                                    },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        width: "200%",
                                        height: "200%",
                                        background: stat.gradient,
                                        transform:
                                            "translate(-50%, -50%) scale(0)",
                                        borderRadius: "50%",
                                        opacity: 0,
                                        transition: "all 0.6s ease",
                                    },
                                }}
                            >
                                <Box sx={{ position: "relative", zIndex: 1 }}>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: 900,
                                            background: stat.gradient,
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            mb: 1,
                                            fontSize: {
                                                xs: "2.5rem",
                                                md: "3rem",
                                            },
                                        }}
                                    >
                                        {stat.number}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            color: "#134e4a",
                                            mb: 0.5,
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        {stat.sublabel}
                                    </Typography>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    background:
                        "linear-gradient(165deg, #0d9488 0%, #2dd4bf 50%, #5eead4 100%)",
                    py: { xs: 10, md: 14 },
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        opacity: 0.6,
                    },
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 900,
                            mb: 3,
                            color: "white",
                            fontSize: { xs: "2rem", md: "3.5rem" },
                            textShadow: "0 4px 20px rgba(0,0,0,0.2)",
                        }}
                    >
                        Bắt đầu hành trình từ thiện minh bạch
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 5,
                            opacity: 0.95,
                            color: "white",
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                            lineHeight: 1.8,
                            maxWidth: "600px",
                            mx: "auto",
                        }}
                    >
                        Tham gia cùng hàng nghìn người đang làm từ thiện một
                        cách minh bạch, an toàn và có trách nhiệm
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<TrendingUpIcon />}
                        sx={{
                            bgcolor: "white",
                            color: "#0d9488",
                            px: 6,
                            py: 2.5,
                            fontSize: "1.25rem",
                            fontWeight: 800,
                            textTransform: "none",
                            borderRadius: "50px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                            "&:hover": {
                                bgcolor: "#f0fdfa",
                                transform: "translateY(-6px) scale(1.05)",
                                boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
                            },
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                        onClick={() => router.push("/campaigns")}
                    >
                        Bắt đầu ngay hôm nay
                    </Button>
                </Container>
            </Box>
        </>
    );
}
