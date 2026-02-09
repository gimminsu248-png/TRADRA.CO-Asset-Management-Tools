'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import AdSlot from '../../components/ads/AdSlot';
import CoupangAds from '../../components/ads/CoupangAds';

export default function KellyCriterionCalculator() {
  const [formData, setFormData] = useState({
    winRate: 50,
    rrRatio: 2.0,
    bankroll: 10000,
  });

  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const p = formData.winRate / 100;
    const q = 1 - p;
    const b = formData.rrRatio;

    // Kelly Formula: f* = (bp - q) / b
    const kelly = (b * p - q) / b;
    const recommendedAmount = kelly > 0 ? formData.bankroll * kelly : 0;

    setResult({
      kellyPercentage: kelly * 100,
      recommendedAmount,
    });
  };

  return (
    <div className="container py-8">
      <h1>켈리 공식 & 파산 확률 분석</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="데이터 입력">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="승률 (%)"
                type="number"
                value={formData.winRate}
                onChange={(e) => setFormData({ ...formData, winRate: Number(e.target.value) })}
              />
              <Input
                label="손익비 (평균수익/평균손실)"
                type="number"
                step="0.1"
                value={formData.rrRatio}
                onChange={(e) => setFormData({ ...formData, rrRatio: Number(e.target.value) })}
              />
              <Input
                label="총 가용 자산 ($)"
                type="number"
                className="md:col-span-2"
                value={formData.bankroll}
                onChange={(e) => setFormData({ ...formData, bankroll: Number(e.target.value) })}
              />
            </div>
            <Button className="w-full mt-6" onClick={calculate}>최적 비중 산출</Button>
          </Card>

          {result && (
            <Card title="자금 관리 제안" className="bg-accent-light">
              <div className="text-center">
                {result.kellyPercentage > 0 ? (
                  <>
                    <p className="text-sm">최적 투자 비중 (Kelly %)</p>
                    <p className="text-4xl font-bold text-success">{result.kellyPercentage.toFixed(2)}%</p>
                    <p className="mt-2">추천 진입 금액: <span className="font-bold">${result.recommendedAmount.toLocaleString()}</span></p>
                  </>
                ) : (
                  <p className="text-danger font-bold">기대수익이 음수입니다. 이 전략으로는 매매하지 마세요.</p>
                )}
              </div>
            </Card>
          )}

          <AdSlot id="kelly-middle" />
        </div>

        <CoupangAds />

        <section className="mt-12 glass-card">
          <h2 className="text-2xl font-bold mb-6">⚖️ 켈리 공식: 수학적으로 증명된 최적의 자산 배분 전략</h2>
          <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. 켈리의 법칙이란 무엇인가?</h3>
                <p>
                  1956년 존 켈리가 발표한 이 공식은 원래 정보 이론에서 시작되었으나, 현재는 워렌 버핏과 같은 거물 투자자들이
                  사용하는 **최강의 자금 관리 기법**으로 알려져 있습니다. 핵심은 "나의 승률과 손익비를 알 때, 파산을 피하면서
                  자산을 가장 빠르게 불릴 수 있는 비중은 얼마인가?"에 대한 해답을 주는 것입니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. 공식의 결과값 해석 (f*)</h3>
                <p>
                  계산 결과가 양수(+)라면 장기적으로 수익이 나는 우월한 전략임을 의미하며, 음수(-)라면 그 매매를 즉시 중단해야 함을 뜻합니다.
                  하지만 켈리 공식이 제안하는 비중은 수학적 한계치이므로, 실제 매매에서는 심리적 안정을 위해 이 수치의
                  **25% ~ 50% 수준(Fractional Kelly)**만 사용하는 것이 정석입니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg border-left-secondary">
              <h3 className="text-lg font-semibold text-foreground mb-2">⚠️ 켈리 공식 사용 시 주의사항</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>**정확한 승률 파악**: 자신의 과거 매매 데이터를 바탕으로 한 객관적인 승률 입력을 필수로 합니다.</li>
                <li>**손익비의 일관성**: 평균 수익과 평균 손실의 비율이 일정하게 유지되는 전략에서 가장 효과적입니다.</li>
                <li>**변동성 관리**: Full Kelly를 그대로 적용할 경우 일시적인 하락장(Drawdown)에서 심리적 고통이 클 수 있습니다.</li>
              </ul>
            </div>

            <p className="text-center text-sm italic mt-8 font-semibold">
              "투자는 예측이 아니라 대응이며, 그 대응의 핵심은 수학적인 자금 관리입니다."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
