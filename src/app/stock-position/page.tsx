'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import AdSlot from '../../components/ads/AdSlot';
import CoupangAds from '../../components/ads/CoupangAds';
import { useTranslation } from '../../lib/i18n/LanguageContext';

export default function StockPositionCalculator() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    margin: 1000000,
    riskAmount: 100000,
    entryPrice: 50000,
    slPrice: 45000,
    targetRR: 3.0,
  });

  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const riskPerShare = Math.abs(formData.entryPrice - formData.slPrice);
    const quantity = Math.floor(formData.riskAmount / riskPerShare);
    const totalCost = quantity * formData.entryPrice;
    const targetPrice = formData.entryPrice + (riskPerShare * formData.targetRR);
    const expectedProfit = quantity * (targetPrice - formData.entryPrice);

    setResult({
      quantity,
      totalCost,
      targetPrice,
      expectedProfit,
      riskAmount: formData.riskAmount,
    });
  };

  return (
    <div className="container py-8">
      <h1>{t('nav.stockPosition')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="자금 및 전략 설정">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="나의 증거금 (원)"
                type="number"
                value={formData.margin}
                onChange={(e) => setFormData({ ...formData, margin: Number(e.target.value) })}
              />
              <Input
                label="로스 허용금액 (원)"
                type="number"
                value={formData.riskAmount}
                onChange={(e) => setFormData({ ...formData, riskAmount: Number(e.target.value) })}
              />
              <Input
                label="진입 가격 (원)"
                type="number"
                value={formData.entryPrice}
                onChange={(e) => setFormData({ ...formData, entryPrice: Number(e.target.value) })}
              />
              <Input
                label="손절 가격 (원)"
                type="number"
                value={formData.slPrice}
                onChange={(e) => setFormData({ ...formData, slPrice: Number(e.target.value) })}
              />
              <Input
                label="목표 손익비 (R)"
                type="number"
                step="0.1"
                value={formData.targetRR}
                onChange={(e) => setFormData({ ...formData, targetRR: Number(e.target.value) })}
              />
            </div>
            <Button className="w-full mt-6" onClick={calculate}>리스크 분석 및 계산</Button>
          </Card>

          {result && (
            <Card title="분석 결과" className="bg-accent-light">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border-bottom">
                  <span>적정 매수 수량</span>
                  <span className="font-bold text-lg">{result.quantity.toLocaleString()} 주</span>
                </div>
                <div className="flex justify-between items-center p-3 border-bottom">
                  <span>총 투자 원금</span>
                  <span className="font-bold text-lg">{result.totalCost.toLocaleString()} 원</span>
                </div>
                <div className="flex justify-between items-center p-3 border-bottom">
                  <span>목표가 (TP)</span>
                  <span className="font-bold text-lg text-success">{result.targetPrice.toLocaleString()} 원</span>
                </div>
                <div className="flex justify-between items-center p-3">
                  <span>기대 수익 / 예상 손실</span>
                  <span className="font-bold">
                    <span className="text-success">{result.expectedProfit.toLocaleString()}</span> /
                    <span className="text-danger"> -{result.riskAmount.toLocaleString()}</span>
                  </span>
                </div>
              </div>
            </Card>
          )}

          <AdSlot id="stock-middle" />
        </div>

        <CoupangAds />

        <section className="mt-12 glass-card">
          <h2 className="text-2xl font-bold mb-6">📉 주식 투자자를 위한 전문 리스크 관리 가이드</h2>
          <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. 주식 포지션 사이징의 기초</h3>
                <p>
                  많은 투자자가 "얼마나 살까?"를 결정할 때 단순히 남은 현금을 다 쓰거나 감에 의존합니다.
                  하지만 진정한 프로 트레이더는 내가 이 종목에서 **최대 얼마를 잃을 수 있는가(Risk Amount)**를 먼저 결정합니다.
                  로스 허용금액을 정해두면, 주가가 급락하더라도 나의 전체 계좌는 치명적인 타격을 입지 않습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. 손익비(Reward/Risk Ratio)의 힘</h3>
                <p>
                  수백 번의 매매를 거쳐 결국 살아남는 방법은 '손실은 짧게, 수익은 길게' 가져가는 것입니다.
                  목표 손익비를 2.0 이상으로 설정하면, 승률이 40%만 되어도 장기적으로 수익이 누적됩니다.
                  저희 계산기는 당신의 손절가에 맞는 최적의 목표가(TP)를 즉시 계산해 드립니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg border-left-primary">
              <h3 className="text-lg font-semibold text-foreground mb-2">💡 스마트한 분할 매수 전략</h3>
              <p className="mb-4">
                한 번에 전액을 매수하는 것보다, 계획된 분할 매수를 통해 평단가를 관리하는 것이 심리적으로나 기술적으로 유리합니다.
                하지만 물타기를 할 때도 반드시 '최대 손절 라인'을 지켜야 합니다.
                계산기로 결정된 총 수량을 2~3회에 나누어 진입해 보세요.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>**자금 보존**: 모든 거래의 첫 번째 목표는 원금을 지키는 것입니다.</li>
                <li>**시장 상황 고려**: 변동성이 높을 때는 로스 허용금액을 낮게 설정하세요.</li>
                <li>**기록 생활화**: 매매 일지를 작성하며 계산기 결과와 비교해 보세요.</li>
              </ul>
            </div>

            <p className="text-center text-sm italic mt-8">
              "투자는 확률 게임입니다. 수학적인 도구를 통해 운이 아닌 확률을 내 편으로 만드세요." - TRANDRA.CO
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
