import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    title: "Khaxy | Coming Soon",
    description: "Stay tuned for something awesome!",
    openGraph: {
        title: "Khaxy | Coming Soon",
        description: "Stay tuned for something awesome!",
        images: [
            {
                url: "/og-image.png", // Make sure this file exists in `public/`
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Khaxy | Coming Soon",
        description: "Stay tuned for something awesome!",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      <SpeedInsights />
      </body>
    </html>
  );
}
