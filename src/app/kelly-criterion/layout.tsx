import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '켈리 공식 베팅 사이즈 계산기 | TRANDRA',
    description: '나의 승률과 손익비를 바탕으로 파산 위험을 방지하는 최적의 베팅 비율을 찾으세요. 수학적으로 검증된 켈리 기준(Kelly Criterion) 계산기입니다.',
    keywords: '켈리 공식, 켈리 기준, 베팅 사이즈, 자금 관리, 파산 위험 계산',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
