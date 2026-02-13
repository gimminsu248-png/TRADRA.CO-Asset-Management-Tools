'use client';

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import AdSlot from '../ads/AdSlot';
import CoupangAds from '../ads/CoupangAds';
import { calculateCompoundInterest } from '../../lib/calculations/finance';

interface Props {
    assetName?: string;
    targetValue?: number;
}

export default function CompoundInterestTool({ assetName, targetValue }: Props) {
    const defaultPrincipal = targetValue ? Math.floor(targetValue / 10) : 1000000;
    const [formData, setFormData] = useState({
        principal: defaultPrincipal,
        rate: 5,
        duration: 20,
        addAmount: 0,
    });

    const [result, setResult] = useState<any>(null);

    const calculate = () => {
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
            <h1>{assetName ? `${assetName} 를 위한 ` : ''}고급 복리 시뮬레이터</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card title={`${assetName || '투자'} 시나리오 설정`}>
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

                <aside className="space-y-6">
                    <Card title={`${assetName || '복리'} 이용 가이드`} className="text-sm">
                        <p className="mb-2">1. 장기적인 {assetName || '자산'} 성장을 위해 현실적인 목표를 설정하세요.</p>
                        <p className="mb-2">2. 복리의 힘은 시간이 지날수록 강력해집니다. 최소 10회차 이상의 계획을 세우세요.</p>
                        <p>3. 적립식 투자의 효과를 확인하려면 추가 입금액을 입력해 보세요.</p>
                    </Card>
                    <AdSlot id="compound-sidebar" />
                </aside>
            </div>

            <CoupangAds />

            <section className="mt-12 glass-card">
                <h2 className="text-2xl font-bold mb-6">💰 복리의 마법: {assetName || '부'}의 축적을 위한 최고의 선택</h2>
                <div className="prose max-w-none text-secondary leading-relaxed space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">1. 시간의 가치를 활용하세요</h3>
                            <p>
                                복리는 이자에 다시 이자가 붙는 매커니즘입니다. {assetName ? `${assetName} 목표를 위해 ` : ''}하루라도 빨리 시작하는 것이 미래의 자산을 결정합니다.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">2. 적립식 투자의 중요성</h3>
                            <p>
                                목돈을 만드는 가장 확실한 방법은 정기적인 적립입니다. {assetName || '목표'}를 향한 여정에서 꾸준한 입금은 복리 효과를 가속화합니다.
                            </p>
                        </div>
                    </div>

                    <div className="bg-accent-light p-6 rounded-lg border-left-success">
                        <h3 className="text-lg font-semibold text-foreground mb-2">🚀 성공적인 {assetName || '복리'} 투자 원칙</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>**인내심을 가지세요**: 그래프의 급상승은 후반부에 나타납니다.</li>
                            <li>**재투자를 원칙으로 하세요**: 수익금을 다시 투자에 투입해야 진정한 복리가 완성됩니다.</li>
                            <li>**현실적인 시뮬레이션**: {assetName || '나만의'} 상황에 맞는 합리적인 수익률을 입력하세요.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
