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
        },
        footer: {
            disclaimerTitle: '면책 조항',
            disclaimerContent: '본 사이트에서 제공하는 모든 계산 결과 및 정보는 투자 참고용이며, 실제 거래 결과에 대한 어떠한 책임도 지지 않습니다. 모든 투자의 결정과 책임은 투자자 본인에게 있습니다.',
            rights: 'All rights reserved.',
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
        },
        footer: {
            disclaimerTitle: 'Disclaimer',
            disclaimerContent: 'All calculation results and information provided on this site are for reference purposes only. We do not take any responsibility for actual trading results. All investment decisions and responsibilities lie with the investor.',
            rights: 'All rights reserved.',
        }
    }
};
