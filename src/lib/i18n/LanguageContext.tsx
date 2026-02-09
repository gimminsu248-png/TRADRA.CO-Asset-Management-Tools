'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, i18nConfig, translations } from './config';

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (keyPath: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocaleState] = useState<Locale>(i18nConfig.defaultLocale);

    useEffect(() => {
        const saved = localStorage.getItem('i18nextLng') as Locale;
        if (saved && i18nConfig.locales.includes(saved)) {
            setLocaleState(saved);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('i18nextLng', newLocale);
        document.documentElement.lang = newLocale;
    };

    const t = (keyPath: string): string => {
        const keys = keyPath.split('.');
        let current: any = translations[locale];

        for (const key of keys) {
            if (current && current[key]) {
                current = current[key];
            } else {
                // Fallback to Korean
                let fallback: any = translations['ko'];
                for (const fKey of keys) {
                    if (fallback && fallback[fKey]) {
                        fallback = fallback[fKey];
                    } else {
                        return keyPath;
                    }
                }
                return fallback;
            }
        }
        return current;
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useTranslation must be used within LanguageProvider');
    return context;
};
