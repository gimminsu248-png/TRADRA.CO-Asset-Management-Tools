import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '분할 익절 전략 및 기대수익 계산기 | TRANDRA',
    description: '다단계 분할 익절(Take Profit) 시의 최종 수익률과 리스크를 시뮬레이션하세요. 심리적 안정과 수익 보존을 위한 분할 매도 전략 도구입니다.',
    keywords: '분할 익절, 분할 매도, 수익 실현, 트레일링 스탑, 수익 시뮬레이션',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
