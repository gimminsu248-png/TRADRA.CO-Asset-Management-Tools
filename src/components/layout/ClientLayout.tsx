'use client';

import React from 'react';
import { LanguageProvider, useTranslation } from '../../lib/i18n/LanguageContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
    );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
    const { t, locale, setLocale } = useTranslation();

    return (
        <body className="antialiased min-h-screen bg-background text-foreground">
            <header className="sticky top-0 z-50 glass-header border-b">
                <nav className="container flex items-center justify-between h-16">
                    <a href="/" className="logo text-2xl font-bold tracking-tighter">
                        TRANDRA<span>.CO</span>
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        <a href="/crypto-futures" className="nav-link">{t('nav.cryptoFutures')}</a>
                        <a href="/stock-position" className="nav-link">{t('nav.stockPosition')}</a>
                        <a href="/compound-interest" className="nav-link">{t('nav.compoundInterest')}</a>
                        <a href="/average-cost" className="nav-link">{t('nav.averageCost')}</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <select
                            value={locale}
                            onChange={(e) => setLocale(e.target.value as any)}
                            className="bg-transparent text-sm border-none focus:ring-0"
                        >
                            <option value="ko">KO</option>
                            <option value="en">EN</option>
                        </select>
                        <a href="/contact" className="btn-primary py-2 px-4 text-sm">문의하기</a>
                    </div>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="mt-20 border-t py-12 bg-accent-light">
                <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-bold mb-4">TRANDRA.CO</h3>
                        <p className="text-sm text-secondary leading-relaxed">
                            성공적인 트레이딩을 위한 프리미엄 금융 도구 플랫폼입니다. <br />
                            수학적으로 정교한 도구와 리스크 관리 가이드를 통해 트레이더의 성장을 돕습니다.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.disclaimerTitle')}</h4>
                        <ul className="space-y-2 text-sm text-secondary">
                            <li><a href="/privacy">개인정보처리방침</a></li>
                            <li><a href="/terms">이용약관</a></li>
                            <li><a href="/disclaimer">책임 한계 고지</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">고객 지원</h4>
                        <ul className="space-y-2 text-sm text-secondary">
                            <li><a href="/about">회사 소개</a></li>
                            <li><a href="/contact">문의하기</a></li>
                        </ul>
                    </div>
                </div>

                <div className="container mt-12 pt-8 border-t">
                    <div className="bg-background/50 p-6 rounded-lg border text-xs text-secondary leading-loose">
                        <p className="font-bold mb-2 text-foreground">{t('footer.disclaimerTitle')}</p>
                        <p>{t('footer.disclaimerContent')}</p>
                    </div>

                    <div className="mt-8 text-center text-xs text-secondary">
                        © 2025 TRANDRA.CO. {t('footer.rights')}
                    </div>
                </div>
            </footer>
        </body>
    );
}
