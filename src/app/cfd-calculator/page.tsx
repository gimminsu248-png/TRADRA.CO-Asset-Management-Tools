'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import AdSlot from '../../components/ads/AdSlot';
import CoupangAds from '../../components/ads/CoupangAds';
import { useTranslation } from '../../lib/i18n/LanguageContext';

export default function CfdCalculator() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    totalMargin: 10000,
    riskAmount: 100,
    contractSize: 100000, // Forex Standard Lot
    entryPrice: 1.0850,
    slPrice: 1.0800,
  });

  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const pipsAtRisk = Math.abs(formData.entryPrice - formData.slPrice);
    const lotSize = formData.riskAmount / (pipsAtRisk * formData.contractSize);
    const marginUsage = (lotSize * formData.contractSize * formData.entryPrice) / 100; // Assume 1:100 leverage

    setResult({
      lotSize,
      marginUsage,
      riskAmount: formData.riskAmount,
    });
  };

  return (
    <div className="container py-8">
      <h1>{t('nav.cfdCalculator')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="계좌 및 종목 설정">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="총 계좌 증거금 ($)"
                type="number"
                value={formData.totalMargin}
                onChange={(e) => setFormData({ ...formData, totalMargin: Number(e.target.value) })}
              />
              <Input
                label="손절 허용액 ($)"
                type="number"
                value={formData.riskAmount}
                onChange={(e) => setFormData({ ...formData, riskAmount: Number(e.target.value) })}
              />
              <Input
                label="계약 크기 (1랏 단위)"
                type="number"
                value={formData.contractSize}
                onChange={(e) => setFormData({ ...formData, contractSize: Number(e.target.value) })}
              />
              <Input
                label="진입 가격"
                type="number"
                step="0.0001"
                value={formData.entryPrice}
                onChange={(e) => setFormData({ ...formData, entryPrice: Number(e.target.value) })}
              />
              <Input
                label="손절 가격 (SL)"
                type="number"
                step="0.0001"
                value={formData.slPrice}
                onChange={(e) => setFormData({ ...formData, slPrice: Number(e.target.value) })}
              />
            </div>
            <Button className="w-full mt-6" onClick={calculate}>랏(Lot) 계산 실행</Button>
          </Card>

          {result && (
            <Card title="최적 랏 구성" className="bg-accent-light">
              <div className="text-center space-y-4">
                <p className="text-sm">권장 진입 물량</p>
                <p className="text-3xl font-bold text-accent-primary">{result.lotSize.toFixed(2)} Lots</p>
                <div className="flex justify-around mt-4 pt-4 border-top">
                  <div>
                    <p className="text-xs">예상 손실</p>
                    <p className="font-bold">${result.riskAmount}</p>
                  </div>
                  <div>
                    <p className="text-xs">필수 증거금 (1:100 기준)</p>
                    <p className="font-bold">${result.marginUsage.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          <AdSlot id="cfd-middle" />
        </div>

        <CoupangAds />

        <section className="mt-12 glass-card">
          <h2 className="text-2xl font-bold mb-6">📉 CFD & 외환 트레이딩: 랏(Lot) 사이징의 중요성</h2>
          <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. CFD 거래의 핵심, 레버리지와 리스크</h3>
                <p>
                  CFD(차익결제거래)는 적은 증거금으로 큰 규모의 자산을 운용할 수 있게 해주지만, 이는 곧 양날의 검과 같습니다.
                  많은 트레이더들이 자신의 계좌 규모를 잊고 과도한 물량(Lots)을 진입하여 순식간에 마진콜을 당하곤 합니다.
                  TRANDRA.CO의 CFD 계산기는 당신의 계좌 증거금을 보호하기 위한 **수학적 방어막**입니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. 핍(Pip) 가치와 계약 크기 이해</h3>
                <p>
                  외환(Forex)이나 지수 CFD는 종목마다 1핍의 가치가 다릅니다. 유로/달러(EURUSD)와 금(Gold)의 변동폭을 동일하게 생각하면 리스크 관리에 실패합니다.
                  저희 계산기는 각 종목의 계약 크기(Contract Size)를 반영하여, 손절 시 정확히 내가 허용할 수 있는 금액만큼만 잃도록 물량을 추천합니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg border-left-primary">
              <h3 className="text-lg font-semibold text-foreground mb-2">💡 성공적인 CFD 리스크 관리 원칙</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>**마진 사용량 확인**: 포지션 진입 시 소요되는 필요 증거금이 내 가용 자산의 일정 비율(예: 10~20%)을 넘지 않도록 주의하세요.</li>
                <li>**손절가(SL) 필수 설정**: CFD는 변동성이 매우 크기 때문에, 시스템적인 손절 없는 진입은 도박과 다름없습니다.</li>
                <li>**스왑 포인트 고려**: 단기 매매가 아닌 중장기 포지션이라면, 보유 기간에 따른 이자 비용(Swap)이 수익률에 미치는 영향을 체크해야 합니다.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
