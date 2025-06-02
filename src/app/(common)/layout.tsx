import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ARC (Allied Restoration Contractors)",
  description:
    "Award Winning Service Allied Restoration Contractors, Repairs & Replacement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} antialiased !bg-white`}
      >
        <NextUiProvider>
          <ReduxProvider>
            <>
              <div className="min-h-screen grid grid-rows-[auto_1fr_auto] max-w-[100vw] overflow-hidden">
                <Navbar />
                {children}

                <Footer />
              </div>
              <ScrollToTopButton />
              <Toaster />
            </>
          </ReduxProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
