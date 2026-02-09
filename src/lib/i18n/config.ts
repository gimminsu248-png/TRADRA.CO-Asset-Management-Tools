export type Locale = 'ko' | 'en';

export const i18nConfig = {
    defaultLocale: 'ko' as Locale,
    locales: ['ko', 'en'] as Locale[],
};

export const translations = {
    ko: {
        common: {
            calculate: '계산 실행',
            reset: '초기화',
            loading: '로딩 중...',
            share: '공유하기',
        },
        nav: {
            cryptoFutures: '코인 선물',
            stockPosition: '주식 포지션',
            compoundInterest: '복리 계산',
            overseasFutures: '해외 선물',
            kellyCriterion: '켈리 공식',
            averageCost: '평단가 계산',
            partialExit: '분할 청산',
            strategySim: '전략 시뮬레이터',
            cfdCalculator: 'CFD 계산기',
        }
    },
    en: {
        common: {
            calculate: 'Calculate',
            reset: 'Reset',
            loading: 'Loading...',
            share: 'Share',
        },
        nav: {
            cryptoFutures: 'Crypto Futures',
            stockPosition: 'Stock Position',
            compoundInterest: 'Compound Interest',
            overseasFutures: 'Global Futures',
            kellyCriterion: 'Kelly Criterion',
            averageCost: 'Avg Cost',
            partialExit: 'Partial TP/SL',
            strategySim: 'Strategy Sim',
            cfdCalculator: 'CFD Calc',
        }
    }
};
