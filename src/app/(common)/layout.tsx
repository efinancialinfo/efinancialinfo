import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";

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
    <div>
      <NextUiProvider>
        <ReduxProvider>
          <>
       <div className="min-h-screen flex flex-col max-w-[100vw] overflow-hidden">
  <Navbar />
  <main className="flex-grow">{children}</main>
  <Footer />
</div>
            <ScrollToTopButton />
            <Toaster />
          </>
        </ReduxProvider>
      </NextUiProvider>
    </div>
  );
}
