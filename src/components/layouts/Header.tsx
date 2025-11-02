"use client";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { loginWallet } from '@/api/auth';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setUser, setUserAddress } from '@/store/slices/userSlice';


export default function Header() {
  const account = useAccount();
  const dispatch = useAppDispatch();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const user = useAppSelector((state) => state.user);
  console.log('account: ', account);
  console.log('user: ', user);
  

  // Handle wallet login when account connects
  useEffect(() => {
    const handleLogin = async () => {
      if (account.address && account.isConnected && !isLoggingIn) {
        setIsLoggingIn(true);
        try {
          console.log('ngu');
          
          const response = await loginWallet({ userAddress: account.address });

          // Save token to localStorage
          localStorage.setItem('authToken', response.accessToken);

          // Update Redux store with user data
          dispatch(setUser({
            userAddress: response.user.userAddress,
            userName: response.user.userName || '',
            email: response.user.email || '',
            avatar: response.user.avatar || '',
            accessToken: response.accessToken
          }));

          console.log('Login successful:', response);
        } catch (error) {
          console.error('Login failed:', error);
        } finally {
          setIsLoggingIn(false);
        }
      }
    };

    handleLogin();
  }, [account.address, account.isConnected, dispatch]);

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatBalance = (balance) => {
    return parseFloat(balance).toFixed(4);
  };

  return (
    <AppBar sx={{ bgcolor: 'teal600' }} position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          transGiv
        </Typography>

        {/* <Button
            variant="contained"
            // disabled={}
            sx={{
              textTransform: 'none',
              px: 3,
              py: '0.3rem',
              border: 'none',
              boxShadow: 'none',
              color: 'white',
              fontWeight: 'bold',
              transition: 'ease-in-out 0.2s',
              cursor: 'pointer',
              bgcolor: 'teal400',
              fontSize:'18px',
              ":hover": {
                bgcolor: 'teal300',
                border: 'none',
                boxShadow: 'none',
              },
              ":disabled": {
                bgcolor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
              }
            }}
          >
            Login
          </Button> */}
        <ConnectButton label='Kết nối ví' chainStatus={'icon'} showBalance={true} />
      </Toolbar>
    </AppBar>
  );
}
