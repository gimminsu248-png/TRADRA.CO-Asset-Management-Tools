// src/lib/seo-data.ts

export interface SEOAsset {
  id: string;
  name: string;
  symbol?: string;
  ticker?: string;
  keywords: string[];
}

export const CRYPTO_ASSETS: SEOAsset[] = [
  { id: 'bitcoin', name: '비트코인', symbol: 'BTC', keywords: ['비트코인', 'BTC', 'Bitcoin'] },
  { id: 'ethereum', name: '이더리움', symbol: 'ETH', keywords: ['이더리움', 'ETH', 'Ethereum'] },
  { id: 'ripple', name: '리플', symbol: 'XRP', keywords: ['리플', 'XRP', 'Ripple'] },
  { id: 'solana', name: '솔라나', symbol: 'SOL', keywords: ['솔라나', 'SOL', 'Solana'] },
  { id: 'dogecoin', name: '도지코인', symbol: 'DOGE', keywords: ['도지코인', 'DOGE', 'Dogecoin'] },
  { id: 'binance-coin', name: '바이낸스 코인', symbol: 'BNB', keywords: ['바이낸스 코인', 'BNB', 'Binance Coin'] },
  { id: 'cardano', name: '에이다', symbol: 'ADA', keywords: ['에이다', 'ADA', 'Cardano'] },
  { id: 'avalanche', name: '아발란체', symbol: 'AVAX', keywords: ['아발란체', 'AVAX', 'Avalanche'] },
  { id: 'polkadot', name: '폴카닷', symbol: 'DOT', keywords: ['폴카닷', 'DOT', 'Polkadot'] },
  { id: 'tron', name: '트론', symbol: 'TRX', keywords: ['트론', 'TRX', 'Tron'] },
];

export const STOCK_ASSETS: SEOAsset[] = [
  { id: 'samsung-electronics', name: '삼성전자', ticker: '005930', keywords: ['삼성전자', '삼성전자 주가', '국내주식'] },
  { id: 'sk-hynix', name: 'SK하이닉스', ticker: '000660', keywords: ['SK하이닉스', '하이닉스 주가', '반도체'] },
  { id: 'tesla', name: '테슬라', ticker: 'TSLA', keywords: ['테슬라', 'TSLA', 'Tesla'] },
  { id: 'apple', name: '애플', ticker: 'AAPL', keywords: ['애플', 'AAPL', 'Apple'] },
  { id: 'nvidia', name: '엔비디아', ticker: 'NVDA', keywords: ['엔비디아', 'NVDA', 'Nvidia'] },
  { id: 'microsoft', name: '마이크로소프트', ticker: 'MSFT', keywords: ['마이크로소프트', 'MSFT', 'Microsoft'] },
  { id: 'amazon', name: '아마존', ticker: 'AMZN', keywords: ['아마존', 'AMZN', 'Amazon'] },
  { id: 'alphabet', name: '구글', ticker: 'GOOGL', keywords: ['알파벳', '구글 주식', 'GOOGL'] },
  { id: 'meta', name: '메타', ticker: 'META', keywords: ['메타', '페이스북', 'META'] },
];

export const GOAL_ASSETS: SEOAsset[] = [
  { id: '100m', name: '1억 모으기', keywords: ['1억 모으기', '자산 1억', '재테크 목표'] },
  { id: '500m', name: '5억 모으기', keywords: ['5억 모으기', '자산 5억', '조기 은퇴'] },
  { id: '1b', name: '10억 모으기', keywords: ['10억 모으기', '10억 굴리기', '부자 되는 법'] },
  { id: 'retirement', name: '노후 자금', keywords: ['노후 준비', '은퇴 자금', '연금 계산'] },
];

export const PSEO_DATA = {
  'crypto-futures': CRYPTO_ASSETS,
  'stock-position': STOCK_ASSETS,
  'compound-interest': GOAL_ASSETS,
  'kelly-criterion': CRYPTO_ASSETS, // Reuse for variety
  'average-cost': STOCK_ASSETS, // Reuse for variety
};
