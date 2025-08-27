import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieConsent from "@/components/CookieConsent";
import { AuthProvider } from "@/components/Auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finovate — Finance in one place",
  description: "Fintech landing demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Header />
        
        {children}
        <CookieConsent />
        
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

