import type { Metadata } from "next";
import {EB_Garamond} from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";



const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"], // Specify the weights you need
});
export const metadata: Metadata = {
  title: "Claremont Bitcoin Club",
  description: "CBC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.className}>
      <body className={`${ebGaramond.className}  antialiased bg-[#761515] `}>
        <Header />
        {children}
        <div className="max-w-[87rem] mx-auto bg-[#F5E6E6] py-14">
          <Footer />
      </div>
      </body>
    </html>
  );
}
