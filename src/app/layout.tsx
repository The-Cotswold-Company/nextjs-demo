import type { Metadata } from "next";
import "./globals.css";
import { NavLink } from "@/components/nav-link";

export const metadata: Metadata = {
  title: "The Cotswoldco | Next.js Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/posts">Posts</NavLink>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
