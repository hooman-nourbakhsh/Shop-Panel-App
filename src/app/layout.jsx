import vazirFont from "@/constants/localFonts";
import "./globals.css";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} fonst-sans`}>
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
