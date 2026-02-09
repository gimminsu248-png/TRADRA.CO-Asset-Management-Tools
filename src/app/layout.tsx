import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '../components/layout/ClientLayout';

import Script from 'next/script';

export const metadata: Metadata = {
    title: 'TRANDRA.CO | 프리미엄 금융 트레이딩 도구 플랫폼',
    description: '코인 선물, 주식 포지션, 복리 계산 등 성공적인 트레이딩을 위한 9가지 전문 리스크 관리 도구를 제공합니다.',
    keywords: '코인 선물 계산기, 주식 평단가 계산기, 복리 시뮬레이션, 켈리 공식, 트레이딩 도구',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" data-theme="dark">
            <head>
                {/* Google tag (gtag.js) */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-TE8B1LE98S"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-TE8B1LE98S');
                    `}
                </Script>
            </head>
            <ClientLayout>{children}</ClientLayout>
        </html>
    );
}
