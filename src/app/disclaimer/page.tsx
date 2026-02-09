import React from 'react';

export default function Disclaimer() {
    return (
        <div className="container py-12 prose max-w-4xl">
            <h1>책임 한계 고지 (Disclaimer)</h1>
            <p>TRANDRA.CO에서 제공하는 모든 계산 도구 및 정보는 사용자의 편의를 위해 수학적 모델을 기반으로 산출된 참고 자료일 뿐입니다.</p>

            <div className="p-6 bg-danger-light border-left-danger rounded-lg my-8">
                <p className="font-bold text-danger">⚠️ 중요 알림</p>
                <p>본 사이트에서 제공하는 결과값은 미래의 수익을 보장하지 않으며, 모든 투자 의사결정의 책임은 사용자 본인에게 있습니다.</p>
            </div>

            <h2>1. 정보의 정확성</h2>
            <p>본 사이트는 제공하는 계산 결과의 정확성을 위해 최선을 다하지만, 데이터 입력 오류나 시스템적 문제로 인한 오차가 발생할 수 있습니다. 실제 거래 전 반드시 전문가와 상담하거나 직접 검증하시기 바랍니다.</p>

            <h2>2. 직접 수익 및 손실</h2>
            <p>본 사이트는 사용자가 본 사이트의 정보를 활용하여 발생한 어떠한 직접적, 간접적 손실이나 이익에 대해서도 법적인 책임을 지지 않습니다.</p>

            <h2>3. 외부 링크 및 제휴</h2>
            <p>본 사이트에 포함된 쿠팡 파트너스, 트레이딩뷰 등 외부 제휴 링크를 통해 발생하는 거래는 해당 플랫폼의 약관을 따르며, 본 사이트와는 독립된 거래임을 밝힙니다.</p>
        </div>
    );
}
