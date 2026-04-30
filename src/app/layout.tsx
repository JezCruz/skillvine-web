import type { Metadata } from "next";
import ClientInteractions from "./ClientInteractions";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skillvine",
  description: "Skillvine learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <button type="button" className="menu-toggle">
              &#9776;
            </button>

            <div className="logo">
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                Skillvine
              </Link>
            </div>

            <ul className="nav-links">
              <li><a href="#" id="about-link">About</a></li>
              <li><a href="#" id="services-link">Services</a></li>
              <li><a href="#" id="contact-link">Contact</a></li>
            </ul>

            <Link href="/login" className="btn" id="nav-btn">
              Login
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>&copy; 2025 Skillvine. All rights reserved.</p>
        </footer>
        <ClientInteractions />
      </body>
    </html>
  );
}