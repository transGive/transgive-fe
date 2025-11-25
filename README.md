This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Solana Wallet Integration

Dự án này sử dụng **@solana/wallet-adapter-react** để tích hợp ví Solana, hỗ trợ các ví phổ biến như Phantom, Solflare, Torus, và Ledger.

### Cấu hình

Tạo file `.env.local` trong thư mục gốc và thêm (tùy chọn):

```env
# Solana RPC URL (không bắt buộc, mặc định sẽ dùng devnet)
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com

# Để sử dụng mainnet-beta:
# NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
```

Nếu không thiết lập `NEXT_PUBLIC_SOLANA_RPC_URL`, ứng dụng sẽ tự động sử dụng Solana devnet cluster.

### Cài đặt dependencies

Đầu tiên, cài đặt các dependencies:

```bash
npm install
# or
yarn install
```

## Getting Started

Sau đó, chạy development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
