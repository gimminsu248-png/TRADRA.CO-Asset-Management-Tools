// src/components/ads/AffiliateCard.tsx
import React from 'react';

interface AffiliateCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    price?: string;
}

export default function AffiliateCard({ title, description, imageUrl, link, price }: AffiliateCardProps) {
    return (
        <div className="affiliate-card" style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            backgroundColor: 'var(--card-bg)',
            transition: 'box-shadow 0.2s'
        }}>
            <div style={{ height: '180px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={imageUrl} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', height: '3rem', overflow: 'hidden' }}>
                    {description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {price && <span style={{ fontWeight: 800, color: 'var(--primary)' }}>{price}원~</span>}
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                    >
                        최저가 확인
                    </a>
                </div>
            </div>
            <div style={{ fontSize: '0.65rem', color: '#ccc', textAlign: 'center', paddingBottom: '0.5rem' }}>
                이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </div>
        </div>
    );
}
