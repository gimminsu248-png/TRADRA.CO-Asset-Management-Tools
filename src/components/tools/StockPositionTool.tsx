'use client';

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import AdSlot from '../ads/AdSlot';
import CoupangAds from '../ads/CoupangAds';
import { useTranslation } from '../../lib/i18n/LanguageContext';

interface Props {
    assetName?: string;
    ticker?: string;
}

export default function StockPositionTool({ assetName, ticker }: Props) {
    const { t } = useTranslation();
    const displayName = assetName || t('nav.stockPosition');

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
        if (riskPerShare === 0) return;
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
            <h1>{displayName} {ticker ? `(${ticker})` : ''} 리스크 계산기</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card title={`${displayName} 자금 및 전략 설정`}>
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

                <aside className="space-y-6">
                    <Card title={`${displayName} 이용 가이드`} className="text-sm">
                        <p className="mb-2">1. {displayName} 매수 시 최대 손실액을 정하는 것이 가장 중요합니다.</p>
                        <p className="mb-2">2. 분석 결과가 보여주는 수량은 원칙을 지키는 가장 안전한 규모입니다.</p>
                        <p>3. 손익비를 조절하여 목표 수익을 현실적으로 관리하세요.</p>
                    </Card>
                    <AdSlot id="stock-sidebar" />
                </aside>
            </div>

            <CoupangAds />

            <section className="mt-12 glass-card">
                <h2 className="text-2xl font-bold mb-6">📉 {displayName} 투자자를 위한 전문 리스크 관리 가이드</h2>
                <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">1. {displayName} 포지션 사이징의 기초</h3>
                            <p>
                                많은 투자자가 "얼마나 살까?"를 결정할 때 단순히 남은 현금을 다 쓰거나 감에 의존합니다.
                                하지만 진정한 프로 트레이더는 내가 {displayName}에서 **최대 얼마를 잃을 수 있는가**를 먼저 결정합니다.
                                로스 허용금액을 정해두면, 주가가 급락하더라도 나의 전체 계좌는 치명적인 타격을 입지 않습니다.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">2. {displayName} 손익비의 힘</h3>
                            <p>
                                수백 번의 매매를 거쳐 결국 살아남는 방법은 '손실은 짧게, 수익은 길게' 가져가는 것입니다.
                                {displayName} 계산기를 통해 승률이 낮더라도 장기적으로 수익이 누적될 수 있는 구조를 만드세요.
                            </p>
                        </div>
                    </div>

                    <div className="bg-accent-light p-6 rounded-lg border-left-primary">
                        <h3 className="text-lg font-semibold text-foreground mb-2">💡 스마트한 {displayName} 대응 전략</h3>
                        <p className="mb-4">
                            계산기로 결정된 총 수량을 한 번에 진입하기보다, 분할 매수를 통해 심리적 안정감을 확보하는 것이 좋습니다.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>적정 매수 수량을 초과하지 않도록 주의하세요.</li>
                            <li>시장 변동성이 높을 때는 로스 허용금액 비율을 낮추세요.</li>
                            <li>명확한 손절가를 기준으로 매매 계획을 세우세요.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
