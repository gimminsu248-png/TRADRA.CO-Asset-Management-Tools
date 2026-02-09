'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import AdSlot from '../../components/ads/AdSlot';
import CoupangAds from '../../components/ads/CoupangAds';

export default function AverageCostCalculator() {
  const [formData, setFormData] = useState({
    currentPrice: 1000,
    currentQty: 10,
    newPrice: 800,
    newQty: 0,
    targetAvg: 900,
  });

  const [mode, setMode] = useState<'standard' | 'reverse'>('standard');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    if (mode === 'standard') {
      const totalCost = (formData.currentPrice * formData.currentQty) + (formData.newPrice * formData.newQty);
      const totalQty = formData.currentQty + formData.newQty;
      const averagePrice = totalCost / totalQty;
      setResult({ averagePrice, totalQty, totalCost });
    } else {
      // Reverse calculation: (CurrentCost + NewPrice * X) / (CurrentQty + X) = TargetAvg
      // CurrentCost + NewPrice * X = TargetAvg * CurrentQty + TargetAvg * X
      // (NewPrice - TargetAvg) * X = TargetAvg * CurrentQty - CurrentCost
      const currentCost = formData.currentPrice * formData.currentQty;
      const x = (formData.targetAvg * formData.currentQty - currentCost) / (formData.newPrice - formData.targetAvg);

      if (x > 0) {
        setResult({ reqQty: x, reqCost: x * formData.newPrice });
      } else {
        setResult({ error: '목표 평단가에 도달할 수 없습니다. 가격 설정을 확인하세요.' });
      }
    }
  };

  return (
    <div className="container py-8">
      <h1>평단가 및 목표가 역산 도구</h1>

      <div className="mt-4 flex gap-2">
        <Button variant={mode === 'standard' ? 'primary' : 'secondary'} onClick={() => { setMode('standard'); setResult(null); }}>일반 평단가 계산</Button>
        <Button variant={mode === 'reverse' ? 'primary' : 'secondary'} onClick={() => { setMode('reverse'); setResult(null); }}>목표가 수량 역산</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title={mode === 'standard' ? "물타기/불타기 계산" : "목표 평단가 맞추기"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="현재 평단가" type="number" value={formData.currentPrice} onChange={(e) => setFormData({ ...formData, currentPrice: Number(e.target.value) })} />
              <Input label="현재 보유 수량" type="number" value={formData.currentQty} onChange={(e) => setFormData({ ...formData, currentQty: Number(e.target.value) })} />

              {mode === 'standard' ? (
                <>
                  <Input label="추가 매수가" type="number" value={formData.newPrice} onChange={(e) => setFormData({ ...formData, newPrice: Number(e.target.value) })} />
                  <Input label="추가 매수량" type="number" value={formData.newQty} onChange={(e) => setFormData({ ...formData, newQty: Number(e.target.value) })} />
                </>
              ) : (
                <>
                  <Input label="현재 시장가 (추가 매수가)" type="number" value={formData.newPrice} onChange={(e) => setFormData({ ...formData, newPrice: Number(e.target.value) })} />
                  <Input label="목표하는 평단가" type="number" value={formData.targetAvg} onChange={(e) => setFormData({ ...formData, targetAvg: Number(e.target.value) })} />
                </>
              )}
            </div>
            <Button className="w-full mt-6" onClick={calculate}>계산 실행</Button>
          </Card>

          {result && (
            <Card title="계산 결과" className="bg-accent-light">
              <div className="text-center">
                {result.error ? (
                  <p className="text-danger font-bold">{result.error}</p>
                ) : mode === 'standard' ? (
                  <>
                    <p className="text-sm">최종 예상 평단가</p>
                    <p className="text-3xl font-bold">{result.averagePrice.toFixed(2)}</p>
                    <p className="text-xs mt-2 text-secondary">(총 {result.totalQty} 주 / {result.totalCost.toLocaleString()} 원)</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm">필수 매수 수량</p>
                    <p className="text-3xl font-bold text-success">{result.reqQty.toFixed(2)} 주</p>
                    <p className="text-xs mt-2 text-secondary">(필요 투자금: {result.reqCost.toLocaleString()} 원)</p>
                  </>
                )}
              </div>
            </Card>
          )}

          <AdSlot id="avg-middle" />
        </div>

        <CoupangAds />

        <section className="mt-12 glass-card">
          <h2 className="text-2xl font-bold mb-6">🎯 평단가 관리: 물타기와 불타기, 그리고 전략적 진입</h2>
          <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. 물타기(Dilution)의 기술</h3>
                <p>
                  단순히 주가가 떨어졌다고 매수하는 것은 물타기가 아니라 '기도'에 가깝습니다.
                  진정한 물타기는 목표 평단가를 정해두고, 해당 가격을 맞추기 위해 필요한 정확한 수량을 계산하여
                  **자금 계획 범위 내에서** 추가 진입하는 것입니다. 조급함을 버리고 수학적으로 대응하세요.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. 불타기(Pyramiding)의 힘</h3>
                <p>
                  수익이 나고 있을 때 비중을 늘리는 '불타기'는 평단가를 높이지만, 추세적 상승장에서 수익금을 극대화하는 강력한 방법입니다.
                  이때도 무작정 사는 것이 아니라, 추가 매수 후의 예상 평단가를 미리 확인하여 나의 손절 라인이 여전히 안전한지
                  검토하는 과정이 반드시 필요합니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg border-left-warning">
              <h3 className="text-lg font-semibold text-foreground mb-2">💡 목표 평단가 역산 기능 활용법</h3>
              <p>
                "현재 10,000원인 내 평단가를 9,000원까지 낮추고 싶은데, 지금 가격에서 몇 주를 더 사야 할까?"
                이런 질문에 대한 해답을 '역산 도구' 탭에서 바로 찾을 수 있습니다.
                내가 가진 여유 자금과 필요 수량을 대조하여 가장 효율적인 진입 시점을 결정하세요.
              </p>
            </div>

            <div className="p-4 bg-secondary-light border rounded-lg text-sm italic">
              "최고의 매매는 진입하기 전 이미 모든 시나리오가 계산되어 있는 매매입니다. TRANDRA.CO가 당신의 시나리오를 완성해 드립니다."
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
