import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import {
    SITE_URL,
    SITE_NAME,
    SITE_DEFAULT_TITLE,
    SITE_DEFAULT_DESCRIPTION,
    SITE_THEME_COLOR,
} from "@/lib/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    preload: true,
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: SITE_THEME_COLOR,
};

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
    manifest: "/site.webmanifest",
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: SITE_DEFAULT_TITLE,
        description: SITE_DEFAULT_DESCRIPTION,
        images: [
            {
                url: "/og-image-v3.jpg",
                width: 1200,
                height: 630,
                alt: `MSP L'Oppidum à Laudun-l'Ardoise`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_DEFAULT_TITLE,
        description: SITE_DEFAULT_DESCRIPTION,
        images: ["/og-image-v3.jpg"],
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
                <JsonLd />
            </head>
            <body className={`${geistSans.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
