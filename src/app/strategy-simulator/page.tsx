'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import AdSlot from '../../components/ads/AdSlot';
import CoupangAds from '../../components/ads/CoupangAds';

export default function StrategySimulator() {
  const [formData, setFormData] = useState({
    baseBet: 10,
    multiplier: 2.0,
    maxSteps: 7,
    winRate: 50,
  });

  const [result, setResult] = useState<any>(null);

  const simulate = () => {
    let steps = [];
    let totalInvested = 0;
    let currentBet = formData.baseBet;

    for (let i = 1; i <= formData.maxSteps; i++) {
      totalInvested += currentBet;
      steps.push({
        step: i,
        bet: currentBet,
        totalInvested,
        recoveryProfit: (currentBet * 2) - totalInvested, // Simple 1:1 payout scenario
      });
      currentBet *= formData.multiplier;
    }

    const failureProb = Math.pow((1 - formData.winRate / 100), formData.maxSteps) * 100;

    setResult({
      steps,
      totalInvested,
      failureProb,
    });
  };

  return (
    <div className="container py-8">
      <h1>전략 시나리오 시뮬레이터 (마틴게일)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="마틴게일 설정">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="최초 투입 금액 ($)" type="number" value={formData.baseBet} onChange={(e) => setFormData({ ...formData, baseBet: Number(e.target.value) })} />
              <Input label="배수 (Multiplier)" type="number" step="0.1" value={formData.multiplier} onChange={(e) => setFormData({ ...formData, multiplier: Number(e.target.value) })} />
              <Input label="최대 버틸 차수 (Step)" type="number" value={formData.maxSteps} onChange={(e) => setFormData({ ...formData, maxSteps: Number(e.target.value) })} />
              <Input label="평균 승률 (%)" type="number" value={formData.winRate} onChange={(e) => setFormData({ ...formData, winRate: Number(e.target.value) })} />
            </div>
            <Button className="w-full mt-6" onClick={simulate}>전략 시나리오 생성</Button>
          </Card>

          {result && (
            <Card title="단계별 투입 계획" className="bg-accent-light">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2">차수</th>
                      <th className="py-2">투입액</th>
                      <th className="py-2">총 누적액</th>
                      <th className="py-2">성공 시 순익</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.steps.map((s: any) => (
                      <tr key={s.step} className="text-center border-b">
                        <td className="py-2">{s.step}회차</td>
                        <td className="py-2">${s.bet.toLocaleString()}</td>
                        <td className="py-2 font-bold">${s.totalInvested.toLocaleString()}</td>
                        <td className="py-2 text-success">+${s.recoveryProfit.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-danger-light rounded-lg">
                <p className="text-sm">파산 확률 (연속 패배 시): <span className="font-bold text-danger">{result.failureProb.toFixed(4)}%</span></p>
                <p className="text-xs text-secondary mt-1">※ {formData.maxSteps}회 연속 패배 시 모든 자산을 잃게 됩니다.</p>
              </div>
            </Card>
          )}

          <AdSlot id="strat-middle" />
        </div>

        <CoupangAds />

        <section className="mt-12 glass-card">
          <h2 className="text-2xl font-bold mb-6">🎲 마틴게일 전략: 이론적 한계와 현실적 리스크</h2>
          <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. 승률 50%의 함정</h3>
                <p>
                  마틴게일(Martingale) 전략은 질 때마다 배팅액을 두 배로 늘려 한 번만 이겨도 앞선 손실을 모두 만회하려는 전략입니다.
                  이론적으로는 승리할 확률이 100%에 가깝다고 착각하기 쉽지만, 실제로는 **'연속 패배'**라는 변수가 계좌를 파쇄합니다.
                  본 시뮬레이터는 당신이 몇 번의 연속 패배까지 견딜 수 있는지 수치로 증명해 드립니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. 기하급수적으로 늘어나는 위험</h3>
                <p>
                  10달러로 시작한 투입액이 불과 10단계만 지나도 약 10,000달러(약 1,000배)로 불어납니다.
                  반면 이겼을 때 얻는 수익은 여전히 초기 투자금인 10달러에 불과합니다.
                  **'적은 보상을 위해 무한한 리스크를 지는 것'**이 마틴게일의 본질임을 이해해야 합니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg border-left-danger">
              <h3 className="text-lg font-semibold text-foreground mb-2">📢 전략 시뮬레이션의 목적</h3>
              <p>
                TRANDRA.CO는 이 전략을 권장하기 위해 시뮬레이터를 제작하지 않았습니다.
                오히려 "내 자본금이 감당할 수 있는 수준이 어디까지인가?"와 **"연속 패배 확률이 얼마나 높은가?"**를
                데이터로 직접 확인하여, 무분별한 뇌동 매매와 배팅을 방지하는 것이 주된 목적입니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
