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
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_DEFAULT_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DEFAULT_DESCRIPTION,
    keywords: [
        "MSP",
        "Maison de Santé Pluriprofessionnelle",
        "médecine générale",
        "soins primaires",
        "soins coordonnés",
        "santé",
    ],
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
                url: "/logo-oppidum.webp",
                width: 512,
                height: 512,
                alt: `Logo ${SITE_NAME}`,
            },
        ],
    },
    twitter: {
        card: "summary",
        title: SITE_DEFAULT_TITLE,
        description: SITE_DEFAULT_DESCRIPTION,
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
