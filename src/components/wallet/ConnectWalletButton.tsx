"use client";

import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const WalletButtonWrapper = styled(Box)(() => ({
    "& .wallet-adapter-button": {
        backgroundColor: "#2dd4bf",
        color: "white",
        borderRadius: "8px",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: 600,
        transition: "all 0.2s ease-in-out",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        "&:hover": {
            backgroundColor: "#14b8a6",
            boxShadow: "0 4px 12px rgba(45, 212, 191, 0.3)",
        },
        "&:not([disabled]):hover": {
            backgroundColor: "#14b8a6",
        },
        "&[disabled]": {
            backgroundColor: "rgba(45, 212, 191, 0.5)",
            cursor: "not-allowed",
        },
    },
    "& .wallet-adapter-button-trigger": {
        backgroundColor: "#2dd4bf",
        "&:hover": {
            backgroundColor: "#14b8a6",
        },
    },
    "& .wallet-adapter-modal-wrapper": {
        "& .wallet-adapter-modal": {
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
        },
        "& .wallet-adapter-modal-title": {
            color: "white",
            fontSize: "20px",
            fontWeight: 600,
        },
        "& .wallet-adapter-modal-button": {
            backgroundColor: "#2a2a2a",
            borderRadius: "8px",
            "&:hover": {
                backgroundColor: "#3a3a3a",
            },
        },
    },
}));

interface ConnectWalletButtonProps {
    label?: string;
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
    label = "Kết nối ví",
}) => {
    return (
        <WalletButtonWrapper>
            <WalletMultiButton>{label}</WalletMultiButton>
        </WalletButtonWrapper>
    );
};

export default ConnectWalletButton;
