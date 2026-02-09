// src/lib/calculations/finance.ts

/**
 * 복리 계산기 엔진 (Compound Interest Calculator)
 * @param principal 초기 투자금
 * @param rate 월 수익률 (%)
 * @param duration 투자 기간 (회차)
 * @param addAmount 매회차 추가 입금액
 * @returns 복리 계산 결과 데이터셋
 */
export const calculateCompoundInterest = (
    principal: number,
    rate: number,
    duration: number,
    addAmount: number = 0
) => {
    let currentAsset = principal;
    let totalInvested = principal;
    const history = [];

    for (let i = 1; i <= duration; i++) {
        const profit = currentAsset * (rate / 100);
        currentAsset += profit + addAmount;
        totalInvested += addAmount;
        history.push({
            period: i,
            profit: Math.floor(profit),
            balance: Math.floor(currentAsset),
            invested: totalInvested,
        });
    }

    return {
        finalBalance: Math.floor(currentAsset),
        totalProfit: Math.floor(currentAsset - totalInvested),
        totalInvested,
        history,
    };
};

/**
 * 적정 포지션 사이즈 계산기 (Position Sizing for Crypto/Stocks)
 * @param riskAmount 손실 허용 금액
 * @param entryPrice 진입 가격
 * @param stopLossPrice 손절 가격
 * @param leverage 레버리지 (코인용)
 * @returns 상세 포지션 데이터
 */
export const calculatePositionSize = (
    riskAmount: number,
    entryPrice: number,
    stopLossPrice: number,
    leverage: number = 1
) => {
    const priceDiff = Math.abs(entryPrice - stopLossPrice);
    if (priceDiff === 0) return { entryQuantity: 0, positionSize: 0 };

    const entryQuantity = riskAmount / priceDiff;
    const positionSize = entryQuantity * entryPrice;

    return {
        entryQuantity: Number(entryQuantity.toFixed(4)),
        positionSize: Math.floor(positionSize),
        marginRequired: Math.floor(positionSize / leverage)
    };
};
