import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '해외 선물 틱 가치 및 리스크 계산기 | TRANDRA',
    description: '나스닥, 오일, 골드 등 해외 선물의 틱당 가치와 증거금을 확인하고 적정 계약 수를 산출하세요. 전문 선물 트레이더를 위한 필수 도구입니다.',
    keywords: '해외 선물 계산기, 나스닥 선물, 틱 가치, 증거금 계산, 선물 리스크 관리',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
