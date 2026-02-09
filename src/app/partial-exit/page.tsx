'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import AdSlot from '../../components/ads/AdSlot';
import CoupangAds from '../../components/ads/CoupangAds';

export default function PartialExitCalculator() {
  const [formData, setFormData] = useState({
    entryPrice: 50000,
    totalQty: 10,
    tp1Price: 55000,
    tp1Ratio: 50,
    sl1Price: 48000,
  });

  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const tp1Qty = formData.totalQty * (formData.tp1Ratio / 100);
    const tp1Profit = tp1Qty * (formData.tp1Price - formData.entryPrice);

    const remainingQty = formData.totalQty - tp1Qty;
    const slAfterTpProfit = remainingQty * (formData.sl1Price - formData.entryPrice);
    const finalPnl = tp1Profit + slAfterTpProfit;

    setResult({
      tp1Profit,
      slAfterTpProfit,
      finalPnl,
      isProfit: finalPnl > 0
    });
  };

  return (
    <div className="container py-8">
      <h1>다단계 분할 청산(TP/SL) 시뮬레이터</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="청산 시나리오 설정">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="진입 평단가" type="number" value={formData.entryPrice} onChange={(e) => setFormData({ ...formData, entryPrice: Number(e.target.value) })} />
              <Input label="보유 수량" type="number" value={formData.totalQty} onChange={(e) => setFormData({ ...formData, totalQty: Number(e.target.value) })} />

              <div className="md:col-span-2 p-4 bg-gray-50 rounded-lg">
                <p className="font-bold mb-2">1차 익절(TP) 계획</p>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="1차 익절가" type="number" value={formData.tp1Price} onChange={(e) => setFormData({ ...formData, tp1Price: Number(e.target.value) })} />
                  <Input label="익절 비중 (%)" type="number" value={formData.tp1Ratio} onChange={(e) => setFormData({ ...formData, tp1Ratio: Number(e.target.value) })} />
                </div>
              </div>

              <div className="md:col-span-2 p-4 bg-gray-50 rounded-lg">
                <p className="font-bold mb-2">손절(SL) 계획</p>
                <Input label="최종 손절가" type="number" value={formData.sl1Price} onChange={(e) => setFormData({ ...formData, sl1Price: Number(e.target.value) })} />
              </div>
            </div>
            <Button className="w-full mt-6" onClick={calculate}>시나리오 분석 실행</Button>
          </Card>

          {result && (
            <Card title="시뮬레이션 결과(혼합 시나리오)" className="bg-accent-light">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>1차 익절 시 수익</span>
                  <span className="text-success font-bold">+{result.tp1Profit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>나머지 물량 손절 시 손실</span>
                  <span className="text-danger font-bold">{result.slAfterTpProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-4 border-top font-bold text-lg">
                  <span>최종 정산 손익</span>
                  <span className={result.isProfit ? 'text-success' : 'text-danger'}>
                    {result.finalPnl.toLocaleString()}
                  </span>
                </div>
              </div>
            </Card>
          )}

          <AdSlot id="exit-middle" />
        </div>

        <CoupangAds />

        <section className="mt-12 glass-card">
          <h2 className="text-2xl font-bold mb-6">📉 전략적 분할 청산: 심리적 안정과 수익 극대화</h2>
          <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. 왜 전액 청산보다 분할 청산인가?</h3>
                <p>
                  인간의 뇌는 수익 확보에 대한 강한 욕구와 추세 이탈에 대한 공포를 동시에 느낍니다.
                  **분할 청산(Scale-out)**은 1차 목표가(TP1)에서 수익의 일부를 확정함으로써 심리적 여유를 얻고,
                  남은 물량으로 더 큰 추세 수익을 노릴 수 있게 해주는 선진적인 기법입니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. 본절가(Break-even) 설정의 마법</h3>
                <p>
                  1차 익절이 완료된 후, 남은 물량의 손절가를 진입가(본절가)로 옮기면 해당 거래는 **'안전 거래(Free Trade)'**로 전환됩니다.
                  어떤 상황이 와도 손해는 보지 않는 상태에서 느긋하게 시장을 관망하며 큰 수익을 기다릴 수 있습니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg border-left-success">
              <h3 className="text-lg font-semibold text-foreground mb-2">💡 분할 청산 시뮬레이터 활용 팁</h3>
              <p className="mb-4">
                단순히 익절만 생각하는 것이 아니라, "일부만 익절하고 나머지가 손절되었을 때 나는 최종적으로 얼마를 벌거나 잃는가?"를
                미리 계산해보세요. 최종 정산 손익이 플러스(+)가 되는 시나리오를 설계하는 것이 핵심입니다.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>**자금 보존**: 손절이 발생하더라도 1차 익절금이 이를 상쇄할 수 있는지 확인하세요.</li>
                <li>**비중 조절**: 장 상황에 따라 25%, 50%, 75% 등 다양한 익절 비중을 시뮬레이션 해보세요.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
