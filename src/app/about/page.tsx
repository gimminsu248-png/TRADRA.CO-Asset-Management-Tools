import React from 'react';
import { Card } from '../../components/ui/Card';

export default function AboutUs() {
    return (
        <div className="container py-12 max-w-4xl">
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">TRANDRA<span>.CO</span></h1>
                <p className="text-xl text-secondary">수학적 데이터로 당신의 투자를 더 명확하게.</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="전문적인 도구">
                    <p className="text-sm">우리는 트레이더들이 가장 많이 필요로 하는 계산 도구들을 직접 개발합니다. 선물 리스크 관리부터 복리 시뮬레이션까지, 검증된 로직만을 제공합니다.</p>
                </Card>
                <Card title="투명한 정보">
                    <p className="text-sm">모든 계산 로직은 투명하게 공개되며, 사용자가 감정에 치우치지 않고 객관적인 의사결정을 내릴 수 있도록 돕는 것이 우리의 목표입니다.</p>
                </Card>
            </div>

            <section className="mt-16 prose max-w-none space-y-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">우리의 미션 (Our Mission)</h2>
                    <p className="text-secondary">
                        금융 시장은 본질적으로 불확실성의 공간입니다. 하지만 그 안에서도 **철저한 리스크 관리**와 **확률적 사고**를 견지하는 트레이더는 살아남습니다.
                        TRANDRA.CO는 단순한 계산기를 넘어, 트레이더들이 감정에 휘둘리지 않고 차분하게 숫자를 직면할 수 있도록 돕는 '금융의 망원경'이 되고자 합니다.
                    </p>
                </div>

                <div className="bg-accent-light p-8 rounded-xl border border-dashed border-primary/30">
                    <h2 className="text-2xl font-bold mb-4">왜 TRANDRA인가?</h2>
                    <ul className="list-disc pl-5 space-y-4 text-secondary">
                        <li><strong>검증된 알고리즘</strong>: 모든 계산 공식은 글로벌 퀀트 및 전문 트레이더들이 사용하는 정교한 수학적 모델링을 기반으로 합니다.</li>
                        <li><strong>실전 중심 UI</strong>: 1초가 급한 트레이딩 환경에서 최소한의 입력으로 최대의 인사이트를 얻을 수 있도록 설계되었습니다.</li>
                        <li><strong>무료 전문성</strong>: 고가의 유료 분석 도구에서나 제공하던 고급 시뮬레이션 기능을 누구나 무료로 이용할 수 있습니다.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">트레이더와 함께 성장합니다</h2>
                    <p className="text-secondary">
                        우리는 매크로 환경 변화, 시장 변동성 확대 등 트레이더가 마주하는 새로운 도전들에 맞춰 끊임없이 도구를 업데이트합니다.
                        TRANDRA.CO와 함께하는 것은 단순한 도구 사용을 넘어, 더 나은 트레이더로 성장하는 여정에 합류하는 것입니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
