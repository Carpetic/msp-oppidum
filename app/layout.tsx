import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DEFAULT_TITLE, SITE_DEFAULT_DESCRIPTION } from "@/lib/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    preload: true,
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    preload: true,
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_DEFAULT_TITLE,
        template: `%s - ${SITE_NAME}`,
    },
    description: SITE_DEFAULT_DESCRIPTION,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: SITE_DEFAULT_TITLE,
        description: SITE_DEFAULT_DESCRIPTION,
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: `MSP L'Oppidum à Laudun`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_DEFAULT_TITLE,
        description: SITE_DEFAULT_DESCRIPTION,
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    alternates: { canonical: SITE_URL },
    category: "health",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <JsonLd />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
