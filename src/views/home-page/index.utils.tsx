import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SpeedIcon from "@mui/icons-material/Speed";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SearchIcon from "@mui/icons-material/Search";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";

export const useHome = () => {
    const trustIndicators = [
        {
            icon: <VerifiedUserIcon />,
            text: "Xác thực blockchain",
        },
        {
            icon: <SecurityIcon />,
            text: "Bảo mật tối đa",
        },
        {
            icon: <PublicIcon />,
            text: "Minh bạch 100%",
        },
    ];

    const features = [
        {
            title: "Minh bạch tuyệt đối",
            description:
                "Mọi giao dịch đều được ghi nhận vĩnh viễn trên blockchain. Theo dõi từng đồng tiền từ lúc đóng góp đến khi quỹ sử dụng, không thể giả mạo.",
            icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
            color: "#2dd4bf",
            gradient: "linear-gradient(135deg, #2dd4bf 0%, #5eead4 100%)",
        },
        {
            title: "An toàn & Tin cậy",
            description:
                "Smart contract được kiểm định kỹ lưỡng bởi chuyên gia. Chỉ những tổ chức uy tín, được xác minh mới có thể tạo quỹ trên nền tảng.",
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            color: "#0d9488",
            gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
        },
        {
            title: "Dễ dàng sử dụng",
            description:
                "Không cần ví blockchain, không cần kiến thức kỹ thuật phức tạp. Kết nối ví và bắt đầu đóng góp ngay lập tức, đơn giản như sử dụng email.",
            icon: <SpeedIcon sx={{ fontSize: 40 }} />,
            color: "#02A9B6",
            gradient: "linear-gradient(135deg, #02A9B6 0%, #2dd4bf 100%)",
        },
    ];

    const howItWorksSteps = [
        {
            step: "01",
            title: "Kết nối ví dễ dàng",
            description:
                "Kết nối ví blockchain của bạn (MetaMask, WalletConnect, v.v.) trong một cú nhấp chuột. Hệ thống tự động xác thực và bảo mật thông tin của bạn.",
            icon: <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />,
            color: "#2dd4bf",
        },
        {
            step: "02",
            title: "Chọn quỹ ưu tiên",
            description:
                "Duyệt qua các quỹ đã được xác minh và kiểm định. Xem thông tin chi tiết, mục tiêu và tiến độ của từng chiến dịch trước khi đóng góp.",
            icon: <SearchIcon sx={{ fontSize: 40 }} />,
            color: "#0d9488",
        },
        {
            step: "03",
            title: "Theo dõi minh bạch",
            description:
                "Xem lịch sử giao dịch on-chain theo thời gian thực. Theo dõi cách quỹ sử dụng từng khoản đóng góp một cách hoàn toàn minh bạch và xác thực.",
            icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
            color: "#02A9B6",
        },
    ];

    const stats = [
        {
            number: "100%",
            label: "Minh bạch",
            sublabel: "Mọi giao dịch on-chain",
            color: "#2dd4bf",
            gradient: "linear-gradient(135deg, #2dd4bf 0%, #5eead4 100%)",
        },
        {
            number: "Web3",
            label: "Công nghệ",
            sublabel: "Blockchain Ethereum",
            color: "#0d9488",
            gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
        },
        {
            number: "Web2",
            label: "Trải nghiệm",
            sublabel: "Dễ dùng như email",
            color: "#02A9B6",
            gradient: "linear-gradient(135deg, #02A9B6 0%, #2dd4bf 100%)",
        },
        {
            number: "24/7",
            label: "Theo dõi",
            sublabel: "Thời gian thực",
            color: "#14b8a6",
            gradient: "linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)",
        },
    ];

    return {
        trustIndicators,
        features,
        howItWorksSteps,
        stats,
    };
};
