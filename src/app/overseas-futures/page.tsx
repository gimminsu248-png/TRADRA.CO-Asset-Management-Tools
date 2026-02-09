'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import AdSlot from '../../components/ads/AdSlot';
import CoupangAds from '../../components/ads/CoupangAds';

const SYMBOLS = [
  { name: 'NQ (나스닥 100)', tickValue: 20 },
  { name: 'MNQ (마이크로 나스닥)', tickValue: 2 },
  { name: 'ES (S&P 500)', tickValue: 50 },
  { name: 'MES (마이크로 S&P)', tickValue: 5 },
  { name: 'CL (크루드 오일)', tickValue: 1000 },
  { name: 'GC (골드)', tickValue: 100 },
];

export default function OverseasFuturesCalculator() {
  const [formData, setFormData] = useState({
    riskAmount: 500,
    tickValue: 20,
    entryPrice: 18000,
    slPrice: 17950,
  });

  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const pointsAtRisk = Math.abs(formData.entryPrice - formData.slPrice);
    const contracts = formData.riskAmount / (pointsAtRisk * formData.tickValue);

    setResult({
      contracts,
      pointsAtRisk,
      totalRisk: formData.riskAmount,
    });
  };

  return (
    <div className="container py-8">
      <h1>해외선물(CME) 리스크 계산기</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="종목 및 리스크 설정">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-field">
                <label className="input-label">종목 선택</label>
                <select
                  className="input-control"
                  onChange={(e) => setFormData({ ...formData, tickValue: Number(e.target.value) })}
                >
                  {SYMBOLS.map(s => <option key={s.name} value={s.tickValue}>{s.name}</option>)}
                </select>
              </div>
              <Input
                label="손절 허용액 ($)"
                type="number"
                value={formData.riskAmount}
                onChange={(e) => setFormData({ ...formData, riskAmount: Number(e.target.value) })}
              />
              <Input
                label="진입 가격"
                type="number"
                value={formData.entryPrice}
                onChange={(e) => setFormData({ ...formData, entryPrice: Number(e.target.value) })}
              />
              <Input
                label="손절 가격"
                type="number"
                value={formData.slPrice}
                onChange={(e) => setFormData({ ...formData, slPrice: Number(e.target.value) })}
              />
            </div>
            <Button className="w-full mt-6" onClick={calculate}>적정 계약 수 계산</Button>
          </Card>

          {result && (
            <Card title="포지션 제안" className="bg-accent-light">
              <div className="text-center">
                <p className="text-sm">권장 주문 계약 수</p>
                <p className="text-4xl font-bold text-accent-primary">{result.contracts.toFixed(2)} 계약</p>
                <p className="text-xs mt-2 text-secondary">({result.pointsAtRisk} 포인트 손절 시 ${result.totalRisk} 손실)</p>
              </div>
            </Card>
          )}

          <AdSlot id="futures-middle" />
        </div>

        <CoupangAds />

        <section className="mt-12 glass-card">
          <h2 className="text-2xl font-bold mb-6">🚀 해외선물(CME) 트레이딩: 틱 가치와 계약 관리</h2>
          <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. 높은 변동성 속의 자산 보호</h3>
                <p>
                  나스닥(NQ)이나 크루드 오일(CL)과 같은 해외선물 종목은 엄청난 변동성을 자랑합니다.
                  1포인트만 움직여도 수십 달러의 수익과 손실이 교차하는 시장에서, 감에 의존한 계약 수 결정은 파산의 지름길입니다.
                  **틱 가치(Tick Value)**를 정확히 계산하여, 한 번의 매매에 내 자산의 일정 비율 이상이 손실되지 않도록 철저히 계산해야 합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. 마이크로(Micro) 계약의 활용</h3>
                <p>
                  자본금이 충분하지 않다면 본 계약(E-mini)보다는 마이크로(E-micro) 계약을 활용해 리스크를 1/10로 줄여보세요.
                  TRANDRA.CO의 계산기는 각 종목의 틱 단가에 맞춰 최적의 계약 수를 산출해주므로,
                  진입 전 심리적 우위를 점할 수 있게 도와줍니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg border-left-secondary">
              <h3 className="text-lg font-semibold text-foreground mb-2">⚠️ 해외선물 리스크 체크리스트</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>지표 발표 시간 확인: 변동성이 폭발하는 시간대에는 평소보다 리스크 허용액을 낮추세요.</li>
                <li>오버나잇(Overnight) 주의: 장 마감 후 발생할 수 있는 갭 하락/상승 리스크를 인지하고 증거금을 넉넉히 관리하세요.</li>
                <li>추세 확인: 선물 시장은 추세가 한 번 형성되면 강하게 지속되는 경향이 있습니다. 역추세 매매 시에는 더 엄격한 손절이 필요합니다.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
