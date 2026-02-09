import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '코인 선물 리스크 계산기 | TRANDRA',
    description: '코인 선물 거래의 적정 진입 물량과 리스크를 수학적으로 계산하세요. 레버리지와 손절가를 기반으로 자산을 보호하는 최적의 포지션 사이징 도구입니다.',
    keywords: '코인 선물 계산기, 포지션 사이징, 비트코인 선물, 레버리지 계산, 손절가 계산',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
