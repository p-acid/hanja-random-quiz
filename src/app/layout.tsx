import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { CANONICAL_URL, SERVICE_METADATA } from "@/constants/service";
import { MainLayout } from "@/layouts/main-layout";

import "./globals.css";
import { Providers } from "@/providers";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SERVICE_METADATA.TITLE,
  description: SERVICE_METADATA.DESCRIPTION,
  metadataBase: new URL(CANONICAL_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} antialiased`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
