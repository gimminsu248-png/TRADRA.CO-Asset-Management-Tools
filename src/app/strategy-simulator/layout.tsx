import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '매매 전략 시뮬레이터 (마틴게일/그리드) | TRANDRA',
    description: '마틴게일, 피라미딩, 그리드 등 다양한 매매 기법의 성과를 시뮬레이션하세요. 수학적 모델링을 통해 전략의 장단점과 최대 낙폭(MDD)을 예측합니다.',
    keywords: '매매 시뮬레이션, 마틴게일 계산기, 그리드 매매, 전략 검증, MDD 계산',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
