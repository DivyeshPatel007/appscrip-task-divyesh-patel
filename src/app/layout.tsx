import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Appscript | Home",
  description: "Discover cutting-edge digital solutions at Appscript. We offer innovative software development, mobile apps, and web services tailored to elevate your business. Explore our tech-driven solutions today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="w-full min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
