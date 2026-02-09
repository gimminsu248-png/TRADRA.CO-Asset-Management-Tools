// src/components/ads/AdSlot.tsx
'use client';

import React, { useEffect } from 'react';

interface AdSlotProps {
    id: string;
    type?: 'responsive' | 'in-article';
    marginTop?: string;
}

export default function AdSlot({ id, type = 'responsive', marginTop = '20px' }: AdSlotProps) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div className="ad-container" style={{ marginTop }}>
            {/* 2025 AdSense Policy: Sufficient margin from interactive elements */}
            <ins
                className="adsbygoogle"
                style={{ display: 'block', minWidth: '250px', minHeight: '100px' }}
                data-ad-client="ca-pub-7744247134223275"
                data-ad-slot={id}
                data-ad-format={type === 'responsive' ? 'auto' : 'fluid'}
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
}
