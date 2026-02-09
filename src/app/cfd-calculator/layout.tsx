import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CFD 및 FX 마진 거래 계산기 | TRANDRA',
    description: '증거금, 핍 가치, 적정 랏(Lot) 사이즈를 즉시 계산하세요. 복잡한 CFD 거래 리스크를 초보자도 쉽게 관리할 수 있도록 도와드립니다.',
    keywords: 'CFD 계산기, FX 마진, 랏 계산기, Lot 사이즈, 해외 통화 거래',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
