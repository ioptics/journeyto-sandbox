import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JourneyTo Integration Sandbox",
  description: "Test environment for JourneyTo webhook integrations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Hotjar / ContentSquare tracking */}
        <Script
          src="https://t.contentsquare.net/uxa/078730f0e7fa2.js"
          strategy="afterInteractive"
        />
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
              <a href="/" className="text-lg font-semibold text-gray-900">
                JourneyTo Sandbox
              </a>
              <a
                href="https://github.com/ioptics/journeyto-sandbox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                GitHub
              </a>
            </div>
          </header>
          <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
