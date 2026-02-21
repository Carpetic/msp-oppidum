'use client';

import { useState, useCallback } from 'react';
import { MapPin, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { LocationData } from '@/app/data/location';
import { getFormattedAddress } from '@/app/data/location';

export interface AddressCardProps {
  location: LocationData;
}

export function AddressCard({ location }: AddressCardProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = useCallback(async () => {
    const formatted = getFormattedAddress(location);
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback pour navigateurs anciens
      setCopied(false);
    }
  }, [location]);

  const { address } = location;

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <div
            className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
            aria-hidden
          >
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <address className="not-italic text-foreground leading-relaxed">
            <span className="font-semibold text-card-foreground block mb-1">
              {location.name}
            </span>
            <span className="block">{address.street}</span>
            {address.complement && (
              <span className="block text-muted-foreground">{address.complement}</span>
            )}
            <span className="block">
              {address.postalCode} {address.city}
            </span>
            <span className="block text-muted-foreground">{address.country}</span>
          </address>
        </div>
        <Button
          type="button"
          variant="secondary"
          size="default"
          onClick={copyAddress}
          aria-label={copied ? 'Adresse copiée' : 'Copier l\'adresse'}
          className="shrink-0 bg-secondary hover:bg-secondary/80"
        >
          {copied ? (
            <>
              <Check className="size-4" aria-hidden />
              Copié
            </>
          ) : (
            <>
              <Copy className="size-4" aria-hidden />
              Copier l&apos;adresse
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
