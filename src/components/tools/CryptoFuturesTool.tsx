'use client';

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import AdSlot from '../ads/AdSlot';
import CoupangAds from '../ads/CoupangAds';
import { calculatePositionSize } from '../../lib/calculations/finance';

interface Props {
    assetName?: string;
    symbol?: string;
}

export default function CryptoFuturesTool({ assetName = '코인', symbol }: Props) {
    const [formData, setFormData] = useState({
        riskAmount: 100,
        leverage: 10,
        entryPrice: 50000,
        slPrice: 48000,
        makerFee: 0.02,
        takerFee: 0.05,
    });

    const [result, setResult] = useState<any>(null);

    const handleCalc = () => {
        const res = calculatePositionSize(
            formData.riskAmount,
            formData.entryPrice,
            formData.slPrice,
            formData.leverage
        );
        setResult(res);
    };

    return (
        <div className="container py-8">
            <h1 className="mb-6">{assetName} {symbol ? `(${symbol})` : ''} 선물 리스크 계산기</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card title={`${assetName} 포지션 설정`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                label="로스 허용금액 ($)"
                                type="number"
                                value={formData.riskAmount}
                                onChange={(e) => setFormData({ ...formData, riskAmount: Number(e.target.value) })}
                            />
                            <Input
                                label="레버리지 (x)"
                                type="number"
                                value={formData.leverage}
                                onChange={(e) => setFormData({ ...formData, leverage: Number(e.target.value) })}
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
                        <Button className="w-full mt-6" onClick={handleCalc}>계산 실행</Button>
                    </Card>

                    {result && (
                        <Card title="계산 결과" className="bg-accent-light">
                            <div className="result-grid grid grid-cols-2 gap-4 text-center">
                                <div className="p-4 border-right">
                                    <p className="text-sm">적정 진입 물량</p>
                                    <p className="text-xl font-bold">{result.entryQuantity.toFixed(4)} Qty</p>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm">포지션 규모</p>
                                    <p className="text-xl font-bold">${result.positionSize.toLocaleString()}</p>
                                </div>
                            </div>
                        </Card>
                    )}

                    <AdSlot id="tool-middle" />
                </div>

                <aside className="space-y-6">
                    <Card title={`${assetName} 이용 가이드`} className="text-sm">
                        <p className="mb-2">1. {assetName} 손절 시 잃고 싶은 금액을 '로스 허용금액'에 입력하세요.</p>
                        <p className="mb-2">2. 레버리지는 증거금 규모에만 영향을 주며, 실제 손실액은 로스 허용금액으로 고정됩니다.</p>
                        <p>3. {symbol || assetName} 청산 수수료를 반영하여 더 정확한 익절 목표를 설정하세요.</p>
                    </Card>

                    <AdSlot id="tool-sidebar" />
                </aside>
            </div>

            <CoupangAds />

            <section className="mt-12 glass-card">
                <h2 className="text-2xl font-bold mb-6">💡 {assetName} 선물 리스크 관리 및 포지션 사이징 가이드</h2>
                <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">1. 왜 {assetName} 리스크 계산기가 필요한가?</h3>
                        <p>
                            {assetName} 선물 거래는 높은 변동성과 레버리지로 인해 매우 위험할 수 있습니다. 특히 {assetName}의 경우 급격한 시세 변동이 잦으므로
                            자신의 자산 규모에 비해 너무 큰 포지션을 잡는 것을 경계해야 합니다. **포지션 사이징**은 손절 시
                            확정되는 손실액을 미리 결정하여 안전한 트레이딩을 돕습니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">2. {assetName} 레버리지의 올바른 이해</h3>
                        <p>
                            많은 분이 10배, 20배 레버리지를 쓰면 그만큼 더 많이 번다고 생각하지만, 레버리지는 '증거금'을 적게 쓰게 해줄 뿐
                            실제 수익률과 손실률은 포지션 규모(Size)에 의해 결정됩니다. {assetName} 계산기는 레버리지가 아닌
                            **'로스 허용금액'**을 기준으로 물량을 산출하므로, 무리한 오버 레버리지를 방지해 줍니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">3. {assetName} 손절 가격(Stop Loss) 설정 원칙</h3>
                        <p>
                            손절가는 나의 매매 전략이 **기술적으로 틀렸음을 증명하는 자리**에 설정해야 합니다.
                            {assetName}의 주요 지지/저항선 아래나 박스권 이탈 지점이 적합하며, 이 가격과 진입가 사이의 거리가 곧 진입 물량을 결정짓는 핵심 변수가 됩니다.
                        </p>
                    </div>

                    <div className="bg-accent-light p-6 rounded-lg border">
                        <h3 className="text-lg font-semibold text-foreground mb-2">✅ {assetName} 성공 트레이딩 체크리스트</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>전체 자산의 1~2% 이상의 손실을 한 번의 거래에 걸지 마세요.</li>
                            <li>{assetName} 계산기가 산출한 '적정 진입 물량'을 초과하지 마세요.</li>
                            <li>거래소 수수료를 반드시 고려하여 실질 수익을 확인하세요.</li>
                            <li>{assetName} 가격이 요동칠 때는 감정을 배제하고 계산기를 다시 활용하세요.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
