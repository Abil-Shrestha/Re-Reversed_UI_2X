import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "./globals.css";
const Footer = dynamic(() => import("@/app/components/footer"), {
  ssr: false,
});

const departureMono = localFont({
  src: "../public/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
  weight: "400",
});

export const metadata = {
  metadataBase: new URL(
    "https://re-reversed-ui-2-x-git-main-csiabils-projects.vercel.app/"
  ),
  title: "Re-Reversed-UI 2X",
  description: "dadadada its da rererereversed ui",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${departureMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
