"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { loginWallet } from "@/api/auth";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/userSlice";
import Link from "next/link";
import ConnectWalletButton from "@/components/wallet/ConnectWalletButton";

export default function Header() {
    const { publicKey, connected } = useWallet();
    const dispatch = useAppDispatch();
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    // const user = useAppSelector((state) => state.user);
    const walletAddress = publicKey?.toBase58();

    useEffect(() => {
        const handleLogin = async () => {
            if (walletAddress && connected && !isLoggingIn) {
                setIsLoggingIn(true);
                try {
                    const response = await loginWallet({
                        userAddress: walletAddress,
                    });

                    localStorage.setItem("authToken", response.accessToken);

                    dispatch(
                        setUser({
                            _id: response.user._id,
                            userAddress: response.user.userAddress,
                            userName: response.user.userName || "",
                            email: response.user.email || "",
                            avatar: response.user.avatar || "",
                            accessToken: response.accessToken,
                            status: response.user.status,
                            role: response.user.role,
                            supportingImages: response.user.supportingImages,
                            activityField: response.user.activityField,
                            operationalScope: response.user.operationalScope,
                            locationAddress: response.user.locationAddress,
                            description: response.user.description,
                        }),
                    );
                } catch (error) {
                    console.error("Login failed:", error);
                } finally {
                    setIsLoggingIn(false);
                }
            }
        };

        handleLogin();
    }, [walletAddress, connected, dispatch, isLoggingIn]);

    return (
        <AppBar sx={{ bgcolor: "teal600" }} position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Link href="/">
                    <Typography
                        variant="h5"
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                        }}
                    >
                        transGiv
                    </Typography>
                </Link>

                <ConnectWalletButton label="Kết nối ví" />
            </Toolbar>
        </AppBar>
    );
}
