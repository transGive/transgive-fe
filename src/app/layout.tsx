"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { transGivTheme } from "@/themes/theme";
import Header from "@/components/layouts/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReduxProvider } from "@/store/provider";
import { WalletContextProvider } from "@/contexts/WalletContextProvider";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1_000 * 60 * 60 * 24,
            refetchOnWindowFocus: false,
        },
    },
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ReduxProvider>
                    <QueryClientProvider client={queryClient}>
                        <WalletContextProvider>
                            <ThemeProvider theme={transGivTheme}>
                                <Header />
                                {children}
                            </ThemeProvider>
                        </WalletContextProvider>
                    </QueryClientProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
