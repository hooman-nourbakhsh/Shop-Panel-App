import { Toaster } from "react-hot-toast";
import Providers from "./Providers";
import Header from "./Header";
import vazirFont from "@/constants/localFonts";
import "./globals.css";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Toaster />
        <Header />
        <div className="container xl:max-w-screen-xl">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
