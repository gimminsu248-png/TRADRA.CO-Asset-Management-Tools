import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '주식 평단가 및 포지션 계산기 | TRANDRA',
    description: '주식 투자 시 적정 매수 수량과 목표 손익비를 계산하세요. 원금을 보호하면서 수익을 극대화하는 과학적인 자금 관리 도구입니다.',
    keywords: '주식 계산기, 평단가 계산기, 포지션 사이징, 손익비 계산, 주식 리스크 관리',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
