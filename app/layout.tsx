import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leandro Gaspar | Full-Stack Developer",
  description:
    "Full-stack freelance developer from Rio de Janeiro, Brazil. Building modern web applications and personal projects.",
  keywords: ["Leandro Gaspar", "Full-Stack Developer", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Leandro Gaspar" }],
  openGraph: {
    title: "Leandro Gaspar | Full-Stack Developer",
    description:
      "Full-stack freelance developer from Rio de Janeiro, Brazil.",
    type: "website",
    url: "https://leandrogaspar.vercel.app",
    images: [
      {
        url: "https://media.licdn.com/dms/image/D4D03AQHUF0JuA3iyEA/profile-displayphoto-shrink_100_100/0/1717536039901",
        width: 100,
        height: 100,
        alt: "Leandro Gaspar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandro Gaspar | Full-Stack Developer",
    description: "Full-stack freelance developer from Rio de Janeiro, Brazil.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
