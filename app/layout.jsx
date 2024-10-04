import dynamic from "next/dynamic";
import localFont from "next/font/local";
import Script from "next/script";
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
  metadataBase: new URL("https://re-reversed-ui-2-x.vercel.app"),
  title: "Re-Reversed-UI 2X",
  description: "dadadada its da rererereversed ui",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${departureMono.variable} antialiased`}>
        <Script
          src="/sln.js"
          data-api-host="/_sln"
          data-token="2f227008b6dc9d2"
          strategy="beforeInteractive"
          async
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
