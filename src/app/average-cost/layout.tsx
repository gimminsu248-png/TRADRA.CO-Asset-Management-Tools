import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '주식/코인 평단가 낮추기(물타기) 계산기 | TRANDRA',
    description: '추가 매수 시 변화하는 평균 단가와 손익분기점을 예측하세요. 전략적인 물타기와 비중 조절을 돕는 평단가 계산 도구입니다.',
    keywords: '물타기 계산기, 평단가 계산기, 추매 계산기, 손익분기점, 주식 평단가',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
