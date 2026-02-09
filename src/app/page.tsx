import React from 'react';
import { Card } from '../components/ui/Card';
import AdSlot from '../components/ads/AdSlot';

export default function Home() {
    const tools = [
        { id: 'crypto-futures', title: '코인 선물 계산기', desc: '레버리지 및 리스크 관리의 핵심', icon: '🚀' },
        { id: 'stock-position', title: '주식 포지션 계산기', desc: '적정 매수 수량 및 물타기 분석', icon: '📈' },
        { id: 'compound-interest', title: '복리 시뮬레이터', desc: '자산 증식의 마법을 직접 확인', icon: '💰' },
        { id: 'kelly-criterion', title: '켈리 공식 계산기', desc: '승률 기반 최적 베팅 비중', icon: '⚖️' },
        { id: 'average-cost', title: '평단가 역산 도구', desc: '목표 평단가 도달 수량 계산', icon: '🎯' },
        { id: 'strategy-simulator', title: '전략 시나리오', desc: '마틴게일/그리드 전략 테스트', icon: '🎲' },
    ];

    return (
        <div className="container py-10">
            <section className="hero text-center mb-16">
                <h1>성공적인 트레이딩을 위한<br /><span>맞춤형 금융 플랫폼</span></h1>
                <p>복잡한 계산은 TRANDRA.CO에 맡기고, 당신은 오직 수익에만 집중하세요.</p>
            </section>

            <AdSlot id="home-top" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {tools.map((tool) => (
                    <a key={tool.id} href={`/${tool.id}`}>
                        <Card className="tool-card hover-transform">
                            <div className="tool-icon">{tool.icon}</div>
                            <h3>{tool.title}</h3>
                            <p>{tool.desc}</p>
                        </Card>
                    </a>
                ))}
            </div>

            <AdSlot id="home-bottom" />

            <section className="finance-articles glass-card mb-16">
                <h2 className="text-2xl font-bold mb-6">📊 트레이딩 인사이트 & 리스크 관리 가이드</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="article-item">
                        <h3 className="text-lg font-semibold mb-2">1. 왜 리스크 관리가 가장 중요한가?</h3>
                        <p className="text-sm text-secondary leading-relaxed">
                            많은 초보 트레이더들이 승률(Win Rate)에 집착하지만, 실제 수익을 결정하는 것은 손익비(Risk/Reward)와 자금 관리(Position Sizing)입니다.
                            TRANDRA.CO의 계산기들은 당신이 한 번의 실수로 파산하지 않도록 수학적으로 설계되었습니다.
                        </p>
                    </div>
                    <div className="article-item">
                        <h3 className="text-lg font-semibold mb-2">2. 복리의 마법과 시간의 힘</h3>
                        <p className="text-sm text-secondary leading-relaxed">
                            하루 1%의 수익이 1년 뒤에는 약 37배의 자산 증식을 가져옵니다.
                            조급함을 버리고 정교한 복리 계획을 세우는 것이 성공적인 투자자로 가는 가장 빠른 길입니다.
                            저희의 복리 시뮬레이터를 통해 당신의 미래 자산을 설계해 보세요.
                        </p>
                    </div>
                    <div className="article-item">
                        <h3 className="text-lg font-semibold mb-2">3. 켈리 공식: 과학적인 베팅 비중</h3>
                        <p className="text-sm text-secondary leading-relaxed">
                            자신의 승률과 손익비를 알고 있다면, 켈리 공식을 통해 파산 확률을 0에 가깝게 유지하면서
                            수익을 극대화할 수 있는 최적의 비중을 계산할 수 있습니다.
                            수학은 거짓말을 하지 않습니다.
                        </p>
                    </div>
                    <div className="article-item">
                        <h3 className="text-lg font-semibold mb-2">4. 물타기 vs 불타기: 평단가의 비밀</h3>
                        <p className="text-sm text-secondary leading-relaxed">
                            무분별한 물타기는 큰 손실로 이어지지만, 계획된 분할 매수는 평균 단가를 효과적으로 관리하게 해줍니다.
                            목표 평단가 도달을 위해 필요한 수량을 역산하여 스마트한 진입 전략을 세우세요.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-branding text-center py-10 border-t">
                <h2 className="text-xl font-bold mb-4">전문 트레이더를 위한 데이터 솔루션, TRANDRA.CO</h2>
                <p className="max-w-2xl mx-auto text-sm text-secondary leading-relaxed">
                    단순한 계산기를 넘어, 우리는 데이터에 기반한 합리적인 투자 문화를 지향합니다.
                    모든 도구는 글로벌 트레이딩 표준 로직을 따르며, 사용자 편의를 위해 지속적으로 업데이트됩니다.
                    성공적인 투자의 파트너로서 TRANDRA.CO와 함께하세요.
                </p>
            </section>
        </div>
    );
}
