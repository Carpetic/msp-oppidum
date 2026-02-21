import { LandingHero } from '@/components/landing/Hero';
import { LandingInformation } from '@/components/landing/Information';
import { LandingLocalization } from '@/components/landing/Localization';

export default function Home() {
    return (
        <main className="min-h-screen bg-linear-to-b from-background to-muted">
            {/* Hero Section */}
            <LandingHero />

            {/* Qu'est-ce qu'une MSP Section */}
            <LandingInformation />

            {/* Localisation Section */}
            <LandingLocalization />
        </main>
    );
}