import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '복리 계산기 및 자산 시뮬레이터 | TRANDRA',
    description: '일일, 월간 복리 수익률을 시뮬레이션하고 장기적인 자산 성장 곡선을 확인하세요. 눈덩이 효과를 수학적으로 증명하는 복리 도구입니다.',
    keywords: '복리 계산기, 자산 시뮬레이션, 눈덩이 효과, 투자 수익률 계산, 장기 투자',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
