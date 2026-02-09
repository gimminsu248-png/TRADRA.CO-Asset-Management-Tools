'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import AdSlot from '../../components/ads/AdSlot';
import CoupangAds from '../../components/ads/CoupangAds';
import { calculateCompoundInterest } from '../../lib/calculations/finance';

export default function CompoundInterestCalculator() {
  const [formData, setFormData] = useState({
    principal: 1000000,
    rate: 1,
    duration: 30,
    addAmount: 0,
  });

  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    // lib/calculations/finance.ts 에 정의된 함수 사용
    const res = calculateCompoundInterest(
      formData.principal,
      formData.rate,
      formData.duration,
      formData.addAmount
    );
    setResult(res);
  };

  return (
    <div className="container py-8">
      <h1>고급 복리 시뮬레이터</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="투자 시나리오 설정">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="초기 투자금 (원)"
                type="number"
                value={formData.principal}
                onChange={(e) => setFormData({ ...formData, principal: Number(e.target.value) })}
              />
              <Input
                label="목표 수익률 (%)"
                type="number"
                value={formData.rate}
                onChange={(e) => setFormData({ ...formData, rate: Number(e.target.value) })}
              />
              <Input
                label="투자 기간 (회차)"
                type="number"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
              />
              <Input
                label="매회차 추가 입금액 (원)"
                type="number"
                value={formData.addAmount}
                onChange={(e) => setFormData({ ...formData, addAmount: Number(e.target.value) })}
              />
            </div>
            <Button className="w-full mt-6" onClick={calculate}>복리 시뮬레이션 실행</Button>
          </Card>

          {result && (
            <Card title="포트폴리오 예상 성장" className="bg-accent-light">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-xs text-secondary">최종 자산</p>
                  <p className="text-lg font-bold text-accent-primary">{result.finalBalance.toLocaleString()} 원</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-xs text-secondary">총 수익금</p>
                  <p className="text-lg font-bold text-success">{result.totalProfit.toLocaleString()} 원</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-xs text-secondary">수익률</p>
                  <p className="text-lg font-bold">{(result.totalProfit / result.totalInvested * 100).toFixed(1)}%</p>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 uppercase text-xs">
                    <tr>
                      <th className="px-4 py-2">기간</th>
                      <th className="px-4 py-2">자산</th>
                      <th className="px-4 py-2">수익</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.history.slice(0, 10).map((h: any) => (
                      <tr key={h.period} className="border-b">
                        <td className="px-4 py-2">{h.period}회차</td>
                        <td className="px-4 py-2">{Math.floor(h.balance).toLocaleString()} 원</td>
                        <td className="px-4 py-2 text-success">+{Math.floor(h.profit).toLocaleString()}</td>
                      </tr>
                    ))}
                    <tr><td colSpan={3} className="text-center py-2 text-gray-400">... 이후 생략 (총 {result.history.length}회차)</td></tr>
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          <AdSlot id="compound-middle" />
        </div>

        <CoupangAds />

        <section className="mt-12 glass-card">
          <h2 className="text-2xl font-bold mb-6">💰 복리의 마법: 부의 축적을 위한 가장 강력한 도구</h2>
          <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. 알버트 아인슈타인이 말한 '세계 8대 불가사의'</h3>
                <p>
                  복리는 단순히 원금에 이자가 붙는 것을 넘어, **이자에 다시 이자가 붙는 원리**입니다.
                  초기에는 변화가 미미해 보일 수 있지만, 시간이 지날수록 그래프는 기하급수적으로 상승합니다.
                  TRANDRA.CO의 복리 시뮬레이터는 이러한 시간의 힘을 수치로 시각화하여 당신의 투자 의욕을 고취시킵니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. 추가 입금의 엄청난 효과</h3>
                <p>
                  단순히 초기 자본을 굴리는 것보다, 매월 일정금액을 **지속적으로 적립(Add Amount)**하는 것이 최종 자산 규모를 드라마틱하게 바꿉니다.
                  저희 도구는 단일 투자가 아닌, 저축과 투자가 병행되는 현실적인 자산 증식 시나리오를 설계할 수 있게 돕습니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg border-left-success">
              <h3 className="text-lg font-semibold text-foreground mb-2">🚀 성공적인 복리 투자를 위한 3가지 원칙</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>**일찍 시작하세요**: 복리에서 가장 중요한 변수는 수익률이 아니라 '시간'입니다. 단 한 달이라도 먼저 시작하는 것이 미래의 수억 원을 결정합니다.</li>
                <li>**중도 인출을 삼가세요**: 복리의 마법이 본격적으로 시작되는 '임계점'에 도달하기 전까지 원금과 수익을 보존하는 인내심이 필요합니다.</li>
                <li>**현실적인 수익률 설정**: 연 100% 같은 비현실적인 목표보다는, 실현 가능한 연 10~20% 목표를 꾸준히 달성하는 것이 훨씬 안전하고 확실한 방법입니다.</li>
              </ul>
            </div>

            <p className="text-sm text-secondary italic">
              * 본 시뮬레이션은 세금, 수수료 및 인플레이션을 고려하지 않은 수치입니다. 실제 투자는 시장 상황에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
