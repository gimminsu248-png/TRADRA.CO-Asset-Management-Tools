document.addEventListener('DOMContentLoaded', () => {
    // =================================================================
    // 0. TRANSLATIONS & LANGUAGE LOGIC
    // =================================================================
    const translations = {
        ko: {
            app_title: "TRANDRA.CO 종합 관리 도구",
            tab1: "코인 포지션/리스크 계산기",
            tab2: "주식 포지션/리스크 계산기",
            tab3: "CFD 포지션/리스크 계산기",
            tab4: "복리 계산기",
            tab5: "해외선물 포지션/리스크 계산기",
            tab6: "켈리 공식 계산기",
            tab7: "평단가 & 불타기 계산기",
            tab8: "분할 청산(TP/SL) 계산기",
            tab9: "전략 시뮬레이터",
            currency_settings: "[통화 설정]",
            guide_futures_btn: "🔽 코인 선물 계산기 사용법 (가이드)",
            guide_stock_btn: "🔽 주식 포지션 계산기 사용법 (가이드)",
            guide_meta_btn: "🔽 CFD 계산기 사용법 (가이드)",
            guide_comp_btn: "🔽 복리 계산기 사용법 (가이드)",
            guide_fut_btn: "🔽 해외선물 계산기 사용법 (가이드)",
            guide_kelly_btn: "🔽 켈리 공식이란? (초보자 가이드)",
            guide_avg_btn: "🔽 평단가 계산기 사용법 (가이드)",
            guide_partial_btn: "🔽 분할 청산 계산기 사용법 (가이드)",
            guide_strat_btn: "🔽 전략 시뮬레이터 사용법 (가이드)",
            guide_hide_btn: "🔼 가이드 접기",
            basic_settings: "[기본 설정]",
            risk_amount: "로스 허용금액",
            leverage: "레버리지 (x)",
            entry_price: "진입 가격",
            sl_price: "손절 가격",
            fee_settings: "[수수료 및 주문]",
            maker_fee: "지정가 수수료 (%)",
            taker_fee: "시장가 수수료 (%)",
            entry_type: "진입:",
            exit_type: "청산:",
            market: "시장가",
            limit: "지정가",
            tp_target: "[익절 타겟]",
            final_rr: "최종 목표 손익비(R)",
            use_partial: "✂️ 분할 익절 사용하기",
            reset_btn: "🔄 입력 초기화",
            calc_btn: "🚀 계산 실행",
            long: "LONG (매수) 📈",
            short: "SHORT (매도) 📉",
            entry_qty: "■ 진입 물량",
            pos_size: "■ 포지션 규모",
            req_margin: "■ 필요 증거금",
            net_profit: "😊 익절 시 순수익",
            total_loss: "😭 손절 시 총손실",
            est_fee: "(예상 수수료: 익절 {0} / 손절 {1})",
            final_target: "최종 목표",
            partial_tp: "분할 익절",
            contract_size: "계약 크기 (Contract Size)",
            total_margin: "총 계좌 증거금",
            margin_usage: "증거금 점유율",
            warning_margin: "⚠️ 경고: 증거금 사용량이 너무 높습니다!",
            final_balance: "■ 최종 자산",
            total_invested: "■ 총 투자 원금",
            total_profit: "■ 총 수익금",
            mdd: "📉 최대 낙폭 (MDD)",
            win_rate: "승률",
            avg_profit: "평균 수익",
            avg_loss: "평균 손실",
            profit_factor: "손익비(PF)",
            max_win_streak: "최대 연승",
            max_loss_streak: "최대 연패",
            total_trades_stat: "총 매매 횟수",
            my_margin: "나의 증거금 금액",
            fee_percent: "수수료 (%)",
            partial_tp_option: "[분할 익절 옵션]",
            tp1_ratio: "1차 익절 비중 (%)",
            tp1_rr: "1차 목표 손익비(R)",
            account_symbol_settings: "[계좌 및 종목 설정]",
            symbol_type: "종목 종류",
            risk_leverage: "[리스크 및 레버리지]",
            position_settings: "[포지션 설정]",
            long_simple: "매수 (Long)",
            short_simple: "매도 (Short)",
            calc_analyze_btn: "🚀 계산 및 리스크 분석",
            basic_invest_settings: "[기본 투자 설정]",
            initial_principal: "초기 투자금 (원금)",
            target_rate: "목표 수익률 (%)",
            invest_duration: "투자 기간",
            use_add_deposit: "추가 입금액 설정",
            deposit_per_cycle: "1회당 입금액",
            advanced_features_btn: "🔽 특화 기능 (시뮬레이션/인출) 펼치기",
            loss_sim: "[손실 확률 시뮬레이션]",
            use_winrate_sim: "승률 기반 시뮬레이션 적용",
            loss_rate_per_loss: "손실 시 손실률 (%)",
            comp_note: "* 수익률은 위 '목표 수익률'을 따릅니다.",
            mdd_analysis: "[MDD(최대 낙폭) 분석]",
            run_mdd_sim: "MDD 시뮬레이션 실행",
            mdd_limit: "허용 MDD 한계 (%)",
            withdraw_settings: "[인출금 설정]",
            withdraw_profits: "수익금 인출",
            withdraw_ratio: "수익의 인출 비율 (%)",
            calc_target_period: "🎯 목표 자산까지 남은 기간 역산",
            target_asset_amt: "목표 자산 금액",
            calc_comp_btn: "🚀 복리 계산 실행",
            view_proj: "📈 예상 추이 보기",
            view_sim: "🎲 시뮬레이션 보기",
            view_mdd: "📉 MDD 시뮬레이션 보기",
            period: "기간",
            total_asset: "총 자산",
            profit_amt: "수익금",
            profit_rate: "수익률",
            sim_asset: "시뮬레이션 자산",
            mdd_asset: "MDD 시뮬레이션 자산",
            symbol_account_settings: "[종목 및 계좌 설정]",
            symbol_cme: "거래 종목 (CME)",
            point_value: "1포인트당 가치 ($)",
            risk_position: "[리스크 및 포지션]",
            tp1_qty_contract: "1차 청산 수량 (계약)",
            calc_fut_btn: "🚀 해외선물 계산 실행",
            total_assets: "총 자산",
            rr_ratio: "손익비 (Reward/Risk Ratio)",
            kelly_fraction_settings: "[켈리 비율 설정]",
            full_kelly: "Full (100%)",
            half_kelly: "Half (50%)",
            quarter_kelly: "Quarter (25%)",
            ruin_analysis: "[파산 확률(Risk of Ruin) 분석]",
            ruin_loss_rate: "파산 간주 손실률 (%)",
            ruin_note: "* 설정한 손실률(Drawdown)에 도달할 확률을 계산합니다.",
            calc_kelly_btn: "🚀 켈리 계산 실행",
            current_position: "[현재 보유 포지션]",
            current_avg: "현재 평단가",
            current_qty: "보유 수량",
            market_price: "현재 시장가",
            calc_target_avg: "🎯 목표 평단가 맞추기 (필요 수량 계산)",
            add_entry_price: "추가 진입가",
            add_qty: "추가 수량",
            target_avg_price: "목표 평단가",
            calc_integer: "정수 단위로 계산 (근사치)",
            avg_note: "* 현재 시장가로 매수 시 목표 평단가를 맞추기 위해 필요한 수량을 계산합니다.",
            calc_avg_btn: "🚀 평단가 계산 실행",
            position_info: "[포지션 정보]",
            entry_avg: "진입 평단가",
            holding_qty: "보유 수량",
            tp_plan: "[분할 익절 (TP) 계획]",
            sl_plan: "[분할 손절 (SL) 계획]",
            calc_partial_btn: "🚀 분할 청산 계산 실행",
            select_strategy: "[전략 선택]",
            strat_fixed: "고정 비율 (Fixed Fraction)",
            strat_martingale: "마틴게일 (Martingale)",
            strat_pyramiding: "피라미딩 (Pyramiding)",
            strat_grid: "그리드 (Grid)",
            common_settings: "[공통 설정]",
            start_balance: "시작 자산 ($)",
            iterations: "반복 횟수 (매매/틱)",
            market_condition: "시장 상황 (Price Movement)",
            market_abstract: "추상적 확률 (Win Rate 기반)",
            market_random: "랜덤 워크 (Random Walk)",
            market_sine: "횡보장 (Sine Wave)",
            market_uptrend: "상승장 (Uptrend)",
            market_downtrend: "하락장 (Downtrend)",
            fixed_settings: "[고정 비율 설정]",
            risk_per_trade: "1회당 리스크 (%)",
            tp1_ratio_rr: "1차 익절 (비중% / R)",
            set_be: "1차 익절 후 본절(BE) 설정",
            martingale_settings: "[마틴게일 설정]",
            base_bet: "기본 베팅금 ($)",
            multiplier: "배수 (Multiplier)",
            pyramiding_settings: "[피라미딩 (Paroli) 설정]",
            multiplier_win: "연승 시 증액 배수",
            grid_settings: "[그리드 봇 설정]",
            start_price: "시작 가격",
            grid_step: "그리드 간격 (Price)",
            order_qty: "주문당 수량",
            start_sim_btn: "🚀 시뮬레이션 시작",
            daily: "일간", weekly: "주간", monthly: "월간", yearly: "연간",
            guide_futures_content: "<p><strong>1. 리스크 관리 핵심</strong><br>진입가와 손절가를 입력하고 '로스 허용금액'을 설정하면, 손절 시 딱 그 금액만큼만 잃도록 <strong>적정 진입 물량</strong>을 계산해줍니다.</p><p><strong>2. 수수료 고려</strong><br>거래소의 지정가/시장가 수수료율을 입력하면, 진입과 청산 시 발생하는 수수료를 미리 계산하여 순수익을 보여줍니다.</p><p><strong>3. 레버리지</strong><br>레버리지는 증거금 계산에만 영향을 미치며, 실제 손실액은 '로스 허용금액'으로 고정됩니다.</p>",
            guide_stock_content: "<p><strong>1. 자금 관리</strong><br>'나의 증거금'과 '로스 허용 금액'을 입력하세요. 손절가에 도달했을 때 허용 금액만큼만 손실을 보게 되는 <strong>매수 수량</strong>을 알려줍니다.</p><p><strong>2. 통화 변환</strong><br>미국 주식(USD)이나 한국 주식(KRW) 등 통화를 선택하면 결과값이 해당 통화 기호로 표시됩니다.</p><p><strong>3. 손익비(R)</strong><br>손실 대비 수익 비율(R)을 설정하여 목표가를 자동으로 계산해보세요.</p>",
            guide_meta_content: "<p><strong>1. 계약 크기(Contract Size) 중요성</strong><br>CFD/Forex는 종목마다 1랏(Lot)의 단위가 다릅니다. (예: 유로달러 100,000, 금 100). 종목을 선택하면 자동으로 설정되지만, 브로커마다 다를 수 있으니 확인하세요.</p><p><strong>2. 증거금 점유율</strong><br>총 계좌 증거금 대비 진입하려는 포지션이 차지하는 비율을 계산하여, 무리한 진입을 방지합니다.</p>",
            guide_comp_content: "<p><strong>1. 복리 효과 시뮬레이션</strong><br>초기 투자금과 목표 수익률(일/주/월)을 입력하여 시간이 지남에 따라 자산이 어떻게 불어나는지 확인하세요.</p><p><strong>2. 현실적인 시나리오</strong><br>'특화 기능'을 펼쳐서 <strong>추가 입금</strong>이나 <strong>수익 인출</strong>, 그리고 승률에 따른 <strong>손실 시뮬레이션</strong>을 적용해보면 더 현실적인 결과를 볼 수 있습니다.</p>",
            guide_fut_content: "<p><strong>1. 틱 가치(Tick Value)</strong><br>해외선물은 종목마다 1포인트(또는 틱)의 가치가 정해져 있습니다. 종목을 선택하면 자동으로 적용됩니다. (예: NQ $20, ES $50)</p><p><strong>2. 계약 수 산출</strong><br>설정한 '손절 허용액' 안에서 운용 가능한 최대 계약 수를 계산해줍니다. 리스크를 넘지 않는 '보수적 진입' 수량을 권장합니다.</p>",
            guide_kelly_content: "<p><strong>1. 켈리 공식이란?</strong><br>자신의 승률과 손익비를 바탕으로, 자산을 가장 빠르게 증식시킬 수 있는 <strong>'최적의 투자 비중'</strong>을 수학적으로 계산하는 공식입니다.</p><p><strong>2. 주요 용어 설명</strong><br>- <strong>승률 (Win Rate)</strong>: 전체 거래 중 이익을 본 거래의 비율입니다.<br>- <strong>손익비 (R/R Ratio)</strong>: (평균 이익금 / 평균 손실금) 비율입니다. 예: 100불 잃을 때 200불 벌면 손익비는 2.0입니다.</p><p><strong>3. 결과 해석 및 주의사항</strong><br>- <strong>Full Kelly</strong>: 수학적으로 가장 빠른 성장 속도를 제공하지만, 변동성이 매우 커서 심리적으로 버티기 힘들 수 있습니다.<br>- <strong>Half / Quarter Kelly</strong>: 계산된 비중의 50% 또는 25%만 진입하는 방식입니다. 수익 속도는 조금 줄어들지만, 파산 위험과 변동성을 획기적으로 낮춰주어 실전 매매에서 권장됩니다.<br>- <strong>음수 결과</strong>: 계산 결과가 0% 이하로 나온다면, 해당 전략은 장기적으로 손실이 나는 전략이므로 매매를 멈추고 전략을 수정해야 합니다.</p>",
            guide_avg_content: "<p><strong>1. 평단가 계산 (물타기/불타기)</strong><br>현재 보유 중인 평단가/수량에 새로운 가격으로 추가 매수했을 때의 최종 평단가를 계산합니다.</p><p><strong>2. 목표 평단가 맞추기 (역산)</strong><br>\"평단가를 100원으로 만들고 싶다\"면 체크박스를 켜고 목표가를 입력하세요. 현재가 기준으로 몇 주를 더 사야 하는지 계산해줍니다.</p>",
            guide_partial_content: "<p><strong>1. 기본 사용법</strong><br>진입 평단가와 보유 수량을 입력한 후, 원하는 익절(TP) 및 손절(SL) 단계의 체크박스를 켜고 가격과 비중(%)을 설정하세요.</p><p><strong>2. 금액($)으로 가격 찾기 (역산 기능)</strong><br>특정 가격이 아닌 <strong>\"이 단계에서 100불을 벌고 싶다\"</strong>면, 가격 칸을 비우고 <strong>금액($) 칸에 100</strong>을 입력하세요. 계산 버튼을 누르면 해당 수익금이 나오는 가격을 자동으로 찾아줍니다. (손절은 양수로 입력해도 자동으로 손실 처리됩니다.)</p><p><strong>3. 시나리오 분석</strong><br>계산 결과에서 익절만 했을 때, 손절만 했을 때, 그리고 <strong>1차 익절 후 나머지가 손절났을 때(혼합)</strong>의 최종 손익을 비교해볼 수 있습니다.</p>",
            guide_strat_content: "<p><strong>1. 고정 비율 (Fixed Fraction)</strong><br>매 거래마다 자산의 일정 비율(%)을 리스크로 거는 방식입니다. 자산이 늘어나면 베팅금도 늘어나 복리 효과를 누릴 수 있습니다.</p><p><strong>2. 마틴게일 (Martingale)</strong><br>손실 시 베팅금을 배수로 늘려 한 번의 승리로 손실을 만회하는 전략입니다. 승률이 낮아도 수익을 낼 수 있지만, 연패 시 파산 위험이 매우 큽니다.</p><p><strong>3. 피라미딩 (Pyramiding)</strong><br>이익이 날 때 베팅금을 늘리는(불타기) 전략입니다. 추세장에서는 큰 수익을 낼 수 있지만, 횡보장에서는 잦은 손절이 발생할 수 있습니다.</p><p><strong>4. 그리드 (Grid)</strong><br>일정 가격 간격으로 매수/매도 주문을 깔아두는 전략입니다. 횡보장(Sine Wave)에서 가장 효율적이며, 추세장에서는 물릴 위험이 있습니다.</p>",
            disclaimer_content: "<strong>[ TRANDRA.CO 자산 관리 도구 이용 고지 ]</strong><br><br><strong>1. 저작권 및 지식재산권 (Copyright)</strong><br>본 TRANDRA.CO 계산기의 로직, 디자인 및 소스 코드에 대한 모든 권리는 개발자에게 있습니다. 무단 복제, 배포 및 상업적 도용은 저작권법에 따라 엄격히 금지됩니다.<br><br><strong>2. 통합 위험 경고 (Comprehensive Risk Warning)</strong><br>변동성 위험: 주식, 암호화폐(코인), 해외선물 및 CFD는 시장 변동성이 매우 큰 자산입니다. 과거의 성과가 미래의 수익을 보장하지 않습니다.<br>레버리지 위험: 해외선물, CFD 및 코인 선물 거래 시 사용하는 레버리지는 이익뿐만 아니라 손실 또한 극대화합니다. 투자 원금의 전액 또는 그 이상의 손실이 발생할 수 있음을 충분히 인지해야 합니다.<br>자산별 특성: 각 자산군은 거래 시간, 증거금 정책, 계약 단위, 환율 변동 등 고유의 리스크를 가집니다. 사용자는 거래 전 해당 상품의 특성을 완전히 이해해야 합니다.<br><br><strong>3. 계산기 이용 면책 조항 (Disclaimer)</strong><br>데이터의 한계: TRANDRA.CO 계산 결과는 입력된 데이터를 기반으로 한 참고용 수치입니다. 실제 거래소/브로커의 실시간 체결가, 수수료, 슬리피지, 스왑 포인트 등이 반영되지 않아 실제 결과와 오차가 발생할 수 있습니다.<br>책임의 소재: 본 도구는 투자를 권유하거나 자문하기 위한 목적이 아닙니다. 모든 투자 결정은 사용자 본인의 판단과 책임하에 이루어져야 하며, TRANDRA.CO 및 개발자는 본 도구 사용으로 발생하는 어떠한 직접적·간접적 손실에 대해서도 법적 책임을 지지 않습니다.<br><br><strong>4. 수익 모델 고지</strong><br>본 서비스는 무료로 제공되나, 내부 제휴 링크를 통해 구매나 가입이 발생할 경우 개발자는 소정의 제휴 수수료를 제공받을 수 있습니다.",
            target_1st: "1차",
            target_final: "최종",
            target_final_goal: "최종목표",
            sim_loss_prob: "🎲 시뮬레이션 손실 확률: {0}% ({1}회 시행)",
            mdd_prob: "📉 MDD > {0}% 확률: {1}% (최대발생: {2}%)",
            target_unreachable: "목표 도달 불가 (너무 오래 걸림)",
            target_reached_est: "🎯 목표 금액({0}) 도달 예상: 약 {1} {2}",
            unit_day: "일",
            unit_week: "주",
            unit_month: "개월",
            unit_year: "년",
            err_partial_qty: "⚠️ 분할 청산 수량이 전체 수량보다 큽니다.",
            contract_1st: "1차({0}계약)",
            contract_final: "최종({0}계약)",
            final_target_price: "최종 목표가",
            contract_count: "계약 수",
            est_loss: "예상 손실",
            est_profit: "예상 수익",
            symbol_label: "종목",
            tick_value_label: "1틱/포인트 가치",
            entry_conservative: "보수적 진입 - Risk 내",
            entry_aggressive: "공격적 진입 - Risk 초과",
            win_rate_label: "승률",
            rr_label: "손익비",
            full_kelly_label: "Full Kelly (100%)",
            kelly_neg_warn: "⚠️ 기대값이 음수이거나 0입니다. 거래를 권장하지 않습니다.",
            applied_ratio: "적용 비율",
            rec_bet_amt: "권장 진입 금액",
            total_asset_base: "(총 자산 {0} 기준)",
            risk_safe: "✅ 매우 안전",
            risk_caution: "⚠️ 주의 필요",
            risk_danger: "🚨 위험",
            ruin_prob_label: "파산 확률 ({0}% 손실 도달)",
            err_input_num: "모든 값을 숫자로 입력해주세요.",
            err_target_range: "목표 평단가는 '현재 평단가'와 '현재 시장가' 사이에 있어야 계산이 가능합니다.",
            target_avg_label: "목표 평단가",
            est_real_avg: "예상 실제 평단가",
            req_buy_qty: "필요 매수 수량",
            req_invest_amt: "필요 투자 금액",
            after_buy_info: "(매수 후 총 수량: {0} 개 / 총 투자액: {1})",
            final_avg_label: "최종 평단가",
            existing_label: "(기존 {0} → {1} / {2}%)",
            total_hold_qty: "총 보유 수량",
            total_invest_amt: "총 투자 금액",
            pos_label: "포지션",
            avg_price_label: "평단",
            tp_scenario: "📈 익절 시나리오 (총 {0}% 청산)",
            sl_scenario: "📉 손절 시나리오 (총 {0}% 청산)",
            mixed_scenario: "⚖️ 혼합 시나리오 (TP1 후 나머지 SL)",
            mixed_detail: "TP1({0}%) 익절 후 나머지({1}%) SL1 도달 시:",
            final_pnl: "최종 손익",
            total_tp_profit: "총 익절 수익",
            total_sl_loss: "총 손절 손실",
            strat_fixed_log: "[고정 비율] 승률 {0}%, R/R {1}, Risk {2}%",
            strat_partial_log: "(분할 익절: {0}% @ {1}R)",
            strat_martin_log: "[마틴게일] 기본 ${0}, 배수 {1}x",
            strat_pyra_log: "[피라미딩] 승리 시 증액 (Paroli), 배수 {0}x",
            strat_grid_log: "[그리드] 모드: {0}, 시작가 {1}, 간격 {2}, 보유 {3}개",
            stats_title: "📊 상세 통계:",
            stats_trades: "총 매매 횟수: {0}회 (승 {1} / 패 {2})",
            stats_winrate: "승률: {0}%",
            stats_avg_pnl: "평균 수익: {0} / 평균 손실: {1}",
            stats_pf: "손익비(PF): {0}",
            stats_streak: "최대 연승: {0}회 / 최대 연패: {1}회",
            step_label: "{0}차",
            price_target_header: "[가격 타겟 - {0}]",
            price_label: "가격",
            profit_label: "수익",
            entry_impossible: "[{0}] 진입 불가 (자금 부족 또는 리스크 과다)",
            taker_fee: "시장가 수수료 (%)",
            err_price_zero: "가격에 0을 입력할 수 없습니다.",
            err_entry_sl_same: "진입가와 손절가가 같습니다.",
            err_input_valid: "입력 오류: 숫자를 정확히 입력해주세요.",
            result_placeholder: "결과가 여기에 표시됩니다.",
            leverage_result: "레버리지"
        },
        en: {
            app_title: "TRANDRA.CO Asset Management Tool",
            tab1: "Crypto Position/Risk Calc",
            tab2: "Stock Position/Risk Calc",
            tab3: "CFD Position/Risk Calc",
            tab4: "Compound Interest Calc",
            tab5: "Futures Position/Risk Calc",
            tab6: "Kelly Criterion Calc",
            tab7: "Avg Cost & Pyramiding",
            tab8: "Partial TP/SL Calc",
            tab9: "Strategy Simulator",
            currency_settings: "[Currency Settings]",
            guide_futures_btn: "🔽 Crypto Futures Guide",
            guide_stock_btn: "🔽 Stock Guide",
            guide_meta_btn: "🔽 CFD Guide",
            guide_comp_btn: "🔽 Compound Guide",
            guide_fut_btn: "🔽 Overseas Futures Guide",
            guide_kelly_btn: "🔽 Kelly Criterion Guide",
            guide_avg_btn: "🔽 Avg Cost Guide",
            guide_partial_btn: "🔽 Partial TP/SL Guide",
            guide_strat_btn: "🔽 Strategy Sim Guide",
            guide_hide_btn: "🔼 Hide Guide",
            basic_settings: "[Basic Settings]",
            risk_amount: "Risk Amount",
            leverage: "Leverage (x)",
            entry_price: "Entry Price",
            sl_price: "Stop Loss Price",
            fee_settings: "[Fees & Order Type]",
            maker_fee: "Maker Fee (%)",
            taker_fee: "Taker Fee (%)",
            entry_type: "Entry:",
            exit_type: "Exit:",
            market: "Market",
            limit: "Limit",
            tp_target: "[Take Profit Target]",
            final_rr: "Final Target R/R",
            use_partial: "✂️ Use Partial TP",
            reset_btn: "🔄 Reset",
            calc_btn: "🚀 Calculate",
            long: "LONG (Buy) 📈",
            short: "SHORT (Sell) 📉",
            entry_qty: "■ Entry Qty",
            pos_size: "■ Position Size",
            req_margin: "■ Required Margin",
            net_profit: "😊 Net Profit",
            total_loss: "😭 Total Loss",
            est_fee: "(Est. Fee: Win {0} / Loss {1})",
            final_target: "Final Target",
            partial_tp: "Partial TP",
            contract_size: "Contract Size",
            total_margin: "Total Account Margin",
            margin_usage: "Margin Usage",
            warning_margin: "⚠️ Warning: Margin usage is too high!",
            final_balance: "■ Final Balance",
            total_invested: "■ Total Invested",
            total_profit: "■ Total Profit",
            mdd: "📉 Max Drawdown (MDD)",
            win_rate: "Win Rate",
            avg_profit: "Avg Profit",
            avg_loss: "Avg Loss",
            profit_factor: "Profit Factor",
            max_win_streak: "Max Win Streak",
            max_loss_streak: "Max Loss Streak",
            total_trades_stat: "Total Trades",
            my_margin: "My Margin Amount",
            fee_percent: "Fee (%)",
            partial_tp_option: "[Partial TP Option]",
            tp1_ratio: "1st TP Ratio (%)",
            tp1_rr: "1st TP R/R",
            account_symbol_settings: "[Account & Symbol Settings]",
            symbol_type: "Symbol Type",
            risk_leverage: "[Risk & Leverage]",
            position_settings: "[Position Settings]",
            long_simple: "Buy (Long)",
            short_simple: "Sell (Short)",
            calc_analyze_btn: "🚀 Calc & Risk Analysis",
            basic_invest_settings: "[Basic Investment Settings]",
            initial_principal: "Initial Principal",
            target_rate: "Target Rate (%)",
            invest_duration: "Duration",
            use_add_deposit: "Add Deposit",
            deposit_per_cycle: "Deposit per Cycle",
            advanced_features_btn: "🔽 Advanced Features (Sim/Withdraw)",
            loss_sim: "[Loss Probability Sim]",
            use_winrate_sim: "Use Win Rate Sim",
            loss_rate_per_loss: "Loss Rate per Loss (%)",
            comp_note: "* Returns follow 'Target Rate' above.",
            mdd_analysis: "[MDD Analysis]",
            run_mdd_sim: "Run MDD Sim",
            mdd_limit: "MDD Limit (%)",
            withdraw_settings: "[Withdrawal Settings]",
            withdraw_profits: "Withdraw Profits",
            withdraw_ratio: "Withdraw Ratio (%)",
            calc_target_period: "🎯 Calc Time to Target",
            target_asset_amt: "Target Asset Amount",
            calc_comp_btn: "🚀 Run Compound Calc",
            view_proj: "📈 View Projection",
            view_sim: "🎲 View Simulation",
            view_mdd: "📉 View MDD Sim",
            period: "Period",
            total_asset: "Total Asset",
            profit_amt: "Profit Amt",
            profit_rate: "Profit %",
            sim_asset: "Sim Asset",
            mdd_asset: "MDD Asset",
            symbol_account_settings: "[Symbol & Account Settings]",
            symbol_cme: "Symbol (CME)",
            point_value: "Value per Point ($)",
            risk_position: "[Risk & Position]",
            tp1_qty_contract: "1st TP Qty (Contracts)",
            calc_fut_btn: "🚀 Run Futures Calc",
            total_assets: "Total Assets",
            rr_ratio: "R/R Ratio",
            kelly_fraction_settings: "[Kelly Fraction Settings]",
            full_kelly: "Full (100%)",
            half_kelly: "Half (50%)",
            quarter_kelly: "Quarter (25%)",
            ruin_analysis: "[Risk of Ruin Analysis]",
            ruin_loss_rate: "Ruin Loss Rate (%)",
            ruin_note: "* Calculates probability of hitting this drawdown.",
            calc_kelly_btn: "🚀 Run Kelly Calc",
            current_position: "[Current Position]",
            current_avg: "Current Avg Price",
            current_qty: "Holding Qty",
            market_price: "Current Market Price",
            calc_target_avg: "🎯 Calc Qty for Target Avg",
            add_entry_price: "Add Entry Price",
            add_qty: "Add Qty",
            target_avg_price: "Target Avg Price",
            calc_integer: "Calc as Integer (Approx)",
            avg_note: "* Calculates required qty to reach target avg at market price.",
            calc_avg_btn: "🚀 Run Avg Cost Calc",
            position_info: "[Position Info]",
            entry_avg: "Entry Avg Price",
            holding_qty: "Holding Qty",
            tp_plan: "[Partial TP Plan]",
            sl_plan: "[Partial SL Plan]",
            calc_partial_btn: "🚀 Run Partial Calc",
            select_strategy: "[Select Strategy]",
            strat_fixed: "Fixed Fraction",
            strat_martingale: "Martingale",
            strat_pyramiding: "Pyramiding",
            strat_grid: "Grid",
            common_settings: "[Common Settings]",
            start_balance: "Start Balance ($)",
            iterations: "Iterations",
            market_condition: "Market Condition",
            market_abstract: "Abstract (Win Rate)",
            market_random: "Random Walk",
            market_sine: "Sine Wave (Sideways)",
            market_uptrend: "Uptrend",
            market_downtrend: "Downtrend",
            fixed_settings: "[Fixed Fraction Settings]",
            risk_per_trade: "Risk per Trade (%)",
            tp1_ratio_rr: "1st TP (Ratio% / R)",
            set_be: "Set BE after 1st TP",
            martingale_settings: "[Martingale Settings]",
            base_bet: "Base Bet ($)",
            multiplier: "Multiplier",
            pyramiding_settings: "[Pyramiding Settings]",
            multiplier_win: "Multiplier on Win",
            grid_settings: "[Grid Bot Settings]",
            start_price: "Start Price",
            grid_step: "Grid Step",
            order_qty: "Qty per Order",
            start_sim_btn: "🚀 Start Simulation",
            daily: "Daily", weekly: "Weekly", monthly: "Monthly", yearly: "Yearly",
            guide_futures_content: "<p><strong>1. Risk Management Core</strong><br>Enter Entry and SL prices and set 'Risk Amount'. It calculates the <strong>optimal entry quantity</strong> to lose exactly that amount.</p><p><strong>2. Fees</strong><br>Enter Maker/Taker fees to see net profit after fees.</p><p><strong>3. Leverage</strong><br>Leverage only affects margin, actual loss is fixed by 'Risk Amount'.</p>",
            guide_stock_content: "<p><strong>1. Money Management</strong><br>Enter 'My Margin' and 'Risk Amount'. It tells you how many shares to buy to limit loss to the risk amount.</p><p><strong>2. Currency</strong><br>Select USD or KRW to see results in that currency symbol.</p><p><strong>3. R/R Ratio</strong><br>Set Reward/Risk ratio to auto-calculate target price.</p>",
            guide_meta_content: "<p><strong>1. Contract Size</strong><br>CFD/Forex lot sizes vary (e.g., Euro 100k, Gold 100). Check your broker's specs.</p><p><strong>2. Margin Usage</strong><br>Calculates margin usage % to prevent over-leveraging.</p>",
            guide_comp_content: "<p><strong>1. Compound Effect</strong><br>Simulate asset growth over time with initial principal and target rate.</p><p><strong>2. Realistic Scenarios</strong><br>Use 'Advanced Features' to add deposits, withdrawals, or simulate losses based on win rate.</p>",
            guide_fut_content: "<p><strong>1. Tick Value</strong><br>Futures have fixed point values (e.g., NQ $20). Select symbol to auto-apply.</p><p><strong>2. Contract Calculation</strong><br>Calculates max contracts within your 'Risk Amount'. Recommends conservative entry.</p>",
            guide_kelly_content: "<p><strong>1. Kelly Criterion</strong><br>Mathematical formula to calculate optimal bet size for max growth based on win rate and R/R.</p><p><strong>2. Terms</strong><br>- <strong>Win Rate</strong>: % of profitable trades.<br>- <strong>R/R Ratio</strong>: Avg Profit / Avg Loss.</p><p><strong>3. Caution</strong><br>- <strong>Full Kelly</strong>: Max growth but high volatility.<br>- <strong>Half/Quarter</strong>: Safer, recommended for real trading.</p>",
            guide_avg_content: "<p><strong>1. Avg Cost Calc</strong><br>Calculate new average price when adding to a position.</p><p><strong>2. Target Avg (Reverse)</strong><br>Check the box to calculate how many shares you need to buy to reach a specific target average price.</p>",
            guide_partial_content: "<p><strong>1. Basic Usage</strong><br>Enter entry price and qty. Enable TP/SL checkboxes and set price/ratio.</p><p><strong>2. Reverse Calc ($)</strong><br>Enter desired Profit/Loss amount ($) to auto-calculate the price level.</p><p><strong>3. Scenarios</strong><br>Compare outcomes for TP-only, SL-only, or mixed scenarios.</p>",
            guide_strat_content: "<p><strong>1. Fixed Fraction</strong><br>Risk % of equity per trade. Compounding effect.</p><p><strong>2. Martingale</strong><br>Double bet on loss. High risk of ruin.</p><p><strong>3. Pyramiding</strong><br>Increase bet on win. Good for trends.</p><p><strong>4. Grid</strong><br>Buy/Sell at intervals. Good for sideways markets.</p>",
            disclaimer_content: "<strong>[ TRANDRA.CO Disclaimer ]</strong><br><br><strong>1. Copyright</strong><br>All rights reserved by the developer.<br><br><strong>2. Risk Warning</strong><br>Trading involves significant risk. Past performance is not indicative of future results.<br><br><strong>3. Disclaimer</strong><br>This tool is for reference only. Actual results may vary due to slippage, fees, etc. The developer is not liable for any losses.<br><br><strong>4. Revenue</strong><br>This service is free but may contain affiliate links.",
            target_1st: "1st",
            target_final: "Final",
            target_final_goal: "Final Target",
            sim_loss_prob: "🎲 Sim. Loss Probability: {0}% ({1} trials)",
            mdd_prob: "📉 Prob. MDD > {0}%: {1}% (Max: {2}%)",
            target_unreachable: "Target Unreachable (Takes too long)",
            target_reached_est: "🎯 Target Amount({0}) Reached: approx. {1} {2}",
            unit_day: "day(s)",
            unit_week: "week(s)",
            unit_month: "month(s)",
            unit_year: "year(s)",
            err_partial_qty: "⚠️ Partial qty exceeds total qty.",
            contract_1st: "1st({0} contract(s))",
            contract_final: "Final({0} contract(s))",
            final_target_price: "Final Target Price",
            contract_count: "Contract Count",
            est_loss: "Estimated Loss",
            est_profit: "Estimated Profit",
            symbol_label: "Symbol",
            tick_value_label: "1 Tick/Point Value",
            entry_conservative: "Conservative - Within Risk",
            entry_aggressive: "Aggressive - Over Risk",
            win_rate_label: "Win Rate",
            rr_label: "R/R Ratio",
            full_kelly_label: "Full Kelly (100%)",
            kelly_neg_warn: "⚠️ Expected value is zero or negative. Trading not recommended.",
            applied_ratio: "Applied Ratio",
            rec_bet_amt: "Rec. Bet Amount",
            total_asset_base: "(Based on Total Assets {0})",
            risk_safe: "✅ Very Safe",
            risk_caution: "⚠️ Caution",
            risk_danger: "🚨 High Risk",
            ruin_prob_label: "Prob. of Ruin ({0}% Loss)",
            err_input_num: "Please enter all values as numbers.",
            err_target_range: "Target Avg must be between current Avg and Market Price.",
            target_avg_label: "Target Avg Price",
            est_real_avg: "Est. Real Avg",
            req_buy_qty: "Req. Buy Qty",
            req_invest_amt: "Req. Invest Amount",
            after_buy_info: "(Total Qty: {0} / Total Invested: {1})",
            final_avg_label: "Final Avg Price",
            existing_label: "(Prev {0} → {1} / {2}%)",
            total_hold_qty: "Total Holding Qty",
            total_invest_amt: "Total Invested Amount",
            pos_label: "Position",
            avg_price_label: "Avg",
            tp_scenario: "📈 TP Scenario (Total {0}% closed)",
            sl_scenario: "📉 SL Scenario (Total {0}% closed)",
            mixed_scenario: "⚖️ Mixed Scenario (SL after TP1)",
            mixed_detail: "After TP1({0}%), Remainder({1}%) at SL1:",
            final_pnl: "Final PnL",
            total_tp_profit: "Total TP Profit",
            total_sl_loss: "Total SL Loss",
            strat_fixed_log: "[Fixed] Win {0}%, R/R {1}, Risk {2}%",
            strat_partial_log: "(Partial TP: {0}% @ {1}R)",
            strat_martin_log: "[Martingale] Base ${0}, {1}x",
            strat_pyra_log: "[Pyramiding] Incr. on Win (Paroli), {0}x",
            strat_grid_log: "[Grid] Mode: {0}, Start {1}, Step {2}, Holding {3}",
            stats_title: "📊 Detailed Stats:",
            stats_trades: "Total Trades: {0} (W {1} / L {2})",
            stats_winrate: "Win Rate: {0}%",
            stats_avg_pnl: "Avg Profit: {0} / Avg Loss: {1}",
            stats_pf: "Profit Factor: {0}",
            stats_streak: "Max W Streak: {0} / Max L Streak: {1}",
            step_label: "Step {0}",
            price_target_header: "[Price Target - {0}]",
            price_label: "Price",
            profit_label: "Profit",
            entry_impossible: "[{0}] Impossible Entry (Funds/Risk)",
            leverage_result: "Leverage",
            result_placeholder: "Results will appear here."
        },
        ja: { app_title: "TRANDRA.CO 資産管理ツール", tab1: "仮想通貨ポジション計算機", calc_btn: "🚀 計算する", reset_btn: "🔄 リセット", long: "買い (Long) 📈", short: "売り (Short) 📉", entry_qty: "■ 注文数量", pos_size: "■ ポジション規模", req_margin: "■ 必要証拠金", net_profit: "😊 純利益", total_loss: "😭 総損失", guide_btn: "🔽 ガイド", basic_settings: "[基本設定]", risk_amount: "許容損失額", leverage: "レバレッジ (x)", entry_price: "エントリー価格", sl_price: "損切り価格", fee_settings: "[手数料設定]", maker_fee: "指値手数料 (%)", taker_fee: "成行手数料 (%)", entry_type: "エントリー:", exit_type: "決済:", market: "成行", limit: "指値", tp_target: "[利確ターゲット]", final_rr: "最終目標リスクリワード(R)", use_partial: "✂️ 分割決済を使用", est_fee: "(予想手数料: 利確 {0} / 損切 {1})", final_target: "最終目標", partial_tp: "分割利確", contract_size: "契約サイズ", total_margin: "口座残高", margin_usage: "証拠金維持率", warning_margin: "⚠️ 警告: 証拠金使用率が高すぎます!", final_balance: "■ 最終資産", total_invested: "■ 総投資額", total_profit: "■ 総利益", mdd: "📉 最大ドローダウン (MDD)", win_rate: "勝率", avg_profit: "平均利益", avg_loss: "平均損失", profit_factor: "プロフィットファクター", max_win_streak: "最大連勝", max_loss_streak: "最大連敗", total_trades: "総取引数", my_margin: "証拠金", fee_percent: "手数料 (%)", partial_tp_option: "[分割利確オプション]", tp1_ratio: "1次利確比率 (%)", tp1_rr: "1次目標R/R", account_symbol_settings: "[口座＆銘柄設定]", symbol_type: "銘柄タイプ", risk_leverage: "[リスク＆レバレッジ]", position_settings: "[ポジション設定]", long_simple: "買い (Long)", short_simple: "売り (Short)", calc_analyze_btn: "🚀 計算＆分析", basic_invest_settings: "[基本投資設定]", initial_principal: "初期投資額", target_rate: "目標収益率 (%)", invest_duration: "投資期間", use_add_deposit: "追加入金設定", deposit_per_cycle: "1回あたりの入金額", advanced_features_btn: "🔽 高度な機能 (シミュレーション/出金)", loss_sim: "[損失確率シミュレーション]", use_winrate_sim: "勝率ベースのシミュレーション", loss_rate_per_loss: "損失時の損失率 (%)", comp_note: "* 収益率は上記の「目標収益率」に従います。", mdd_analysis: "[MDD分析]", run_mdd_sim: "MDDシミュレーション実行", mdd_limit: "許容MDD限界 (%)", withdraw_settings: "[出金設定]", withdraw_profits: "利益を出金", withdraw_ratio: "出金比率 (%)", calc_target_period: "🎯 目標資産までの期間逆算", target_asset_amt: "目標資産額", calc_comp_btn: "🚀 複利計算実行", view_proj: "📈 推移を表示", view_sim: "🎲 シミュレーション表示", view_mdd: "📉 MDD表示", period: "期間", total_asset: "総資産", profit_amt: "収益額", profit_rate: "収益率", sim_asset: "シミュレーション資産", mdd_asset: "MDD資産", symbol_account_settings: "[銘柄＆口座設定]", symbol_cme: "取引銘柄 (CME)", point_value: "1ポイントの価値 ($)", risk_position: "[リスク＆ポジション]", tp1_qty_contract: "1次決済数量 (枚)", calc_fut_btn: "🚀 海外先物計算実行", total_assets: "総資産", rr_ratio: "リスクリワード比 (R/R)", kelly_fraction_settings: "[ケリー比率設定]", full_kelly: "Full (100%)", half_kelly: "Half (50%)", quarter_kelly: "Quarter (25%)", ruin_analysis: "[破産確率分析]", ruin_loss_rate: "破産とみなす損失率 (%)", ruin_note: "* 設定したドローダウンに達する確率を計算します。", calc_kelly_btn: "🚀 ケリー計算実行", current_position: "[現在のポジション]", current_avg: "現在の平均単価", current_qty: "保有数量", market_price: "現在市場価格", calc_target_avg: "🎯 目標単価合わせ (必要数量計算)", add_entry_price: "追加エントリー価格", add_qty: "追加数量", target_avg_price: "目標平均単価", calc_integer: "整数単位で計算 (概算)", avg_note: "* 現在価格で買い増しした場合の必要数量を計算します。", calc_avg_btn: "🚀 平均単価計算実行", position_info: "[ポジション情報]", entry_avg: "エントリー平均単価", holding_qty: "保有数量", tp_plan: "[分割利確(TP)計画]", sl_plan: "[分割損切(SL)計画]", calc_partial_btn: "🚀 分割決済計算実行", select_strategy: "[戦略選択]", strat_fixed: "固定比率 (Fixed Fraction)", strat_martingale: "マーチンゲール", strat_pyramiding: "ピラミッティング", strat_grid: "グリッド", common_settings: "[共通設定]", start_balance: "開始資産 ($)", iterations: "回数", market_condition: "市場状況", market_abstract: "抽象的確率 (勝率ベース)", market_random: "ランダムウォーク", market_sine: "レンジ相場 (Sine)", market_uptrend: "上昇トレンド", market_downtrend: "下降トレンド", fixed_settings: "[固定比率設定]", risk_per_trade: "1回のリスク (%)", tp1_ratio_rr: "1次利確 (比率% / R)", set_be: "1次利確後に建値決済(BE)設定", martingale_settings: "[マーチンゲール設定]", base_bet: "基本賭け金 ($)", multiplier: "倍率", pyramiding_settings: "[ピラミッティング設定]", multiplier_win: "勝利時の増額倍率", grid_settings: "[グリッドボット設定]", start_price: "開始価格", grid_step: "グリッド間隔", order_qty: "注文数量", start_sim_btn: "🚀 シミュレーション開始", daily: "日次", weekly: "週次", monthly: "月次", yearly: "年次", guide_futures_content: "<p><strong>1. リスク管理</strong><br>エントリー価格と損切り価格を入力し、許容損失額を設定すると、適切なポジションサイズを計算します。</p>", guide_stock_content: "<p><strong>1. 資金管理</strong><br>証拠金と許容損失額を入力してください。</p>", guide_meta_content: "<p><strong>1. 契約サイズ</strong><br>CFD/Forexの1ロット単位を確認してください。</p>", guide_comp_content: "<p><strong>1. 複利効果</strong><br>初期投資額と目標収益率を入力して資産の成長を確認します。</p>", guide_fut_content: "<p><strong>1. ティック価値</strong><br>銘柄ごとのポイント価値が自動適用されます。</p>", guide_kelly_content: "<p><strong>1. ケリー基準</strong><br>最適な投資比率を計算します。</p>", guide_avg_content: "<p><strong>1. 平均単価</strong><br>追加購入時の平均単価を計算します。</p>", guide_partial_content: "<p><strong>1. 分割決済</strong><br>複数のTP/SLターゲットを設定して損益を計算します。</p>", guide_strat_content: "<p><strong>1. 戦略シミュレーション</strong><br>様々な戦略のパフォーマンスをテストします。</p>", disclaimer_content: "<strong>[ 免責事項 ]</strong><br>本ツールは参考用であり、開発者は損失に対して責任を負いません。" },
        "zh-TW": { app_title: "TRANDRA.CO 資產管理工具", tab1: "加密貨幣倉位計算機", calc_btn: "🚀 計算", reset_btn: "🔄 重置", long: "做多 (Long) 📈", short: "做空 (Short) 📉", entry_qty: "■ 進場數量", pos_size: "■ 倉位規模", req_margin: "■ 所需保證金", net_profit: "😊 淨利潤", total_loss: "😭 總虧損", guide_btn: "🔽 使用指南", basic_settings: "[基本設定]", risk_amount: "容許虧損金額", leverage: "槓桿 (x)", entry_price: "進場價格", sl_price: "止損價格", fee_settings: "[手續費設定]", maker_fee: "掛單手續費 (%)", taker_fee: "吃單手續費 (%)", entry_type: "進場:", exit_type: "出場:", market: "市價", limit: "限價", tp_target: "[止盈目標]", final_rr: "最終目標損益比(R)", use_partial: "✂️ 使用分批止盈", est_fee: "(預估手續費: 止盈 {0} / 止損 {1})", final_target: "最終目標", partial_tp: "分批止盈", contract_size: "合約大小", total_margin: "帳戶總保證金", margin_usage: "保證金佔用率", warning_margin: "⚠️ 警告: 保證金使用率過高!", final_balance: "■ 最終資產", total_invested: "■ 總投資額", total_profit: "■ 總收益", mdd: "📉 最大回撤 (MDD)", win_rate: "勝率", avg_profit: "平均收益", avg_loss: "平均虧損", profit_factor: "獲利因子", max_win_streak: "最大連勝", max_loss_streak: "最大連敗", total_trades: "總交易次數", my_margin: "我的保證金", fee_percent: "手續費 (%)", partial_tp_option: "[分批止盈選項]", tp1_ratio: "第一批比例 (%)", tp1_rr: "第一批損益比(R)", account_symbol_settings: "[帳戶及商品設定]", symbol_type: "商品類型", risk_leverage: "[風險及槓桿]", position_settings: "[倉位設定]", long_simple: "做多 (Long)", short_simple: "做空 (Short)", calc_analyze_btn: "🚀 計算及風險分析", basic_invest_settings: "[基本投資設定]", initial_principal: "初始本金", target_rate: "目標收益率 (%)", invest_duration: "投資期間", use_add_deposit: "設定追加投入", deposit_per_cycle: "每期投入金額", advanced_features_btn: "🔽 進階功能 (模擬/提款)", loss_sim: "[虧損機率模擬]", use_winrate_sim: "使用勝率模擬", loss_rate_per_loss: "單次虧損率 (%)", comp_note: "* 收益率依照上方「目標收益率」。", mdd_analysis: "[MDD分析]", run_mdd_sim: "執行MDD模擬", mdd_limit: "容許MDD上限 (%)", withdraw_settings: "[提款設定]", withdraw_profits: "提取利潤", withdraw_ratio: "提款比例 (%)", calc_target_period: "🎯 計算達成目標所需時間", target_asset_amt: "目標資產金額", calc_comp_btn: "🚀 執行複利計算", view_proj: "📈 顯示預測趨勢", view_sim: "🎲 顯示模擬", view_mdd: "📉 顯示MDD", period: "期間", total_asset: "總資產", profit_amt: "收益金額", profit_rate: "收益率", sim_asset: "模擬資產", mdd_asset: "MDD資產", symbol_account_settings: "[商品及帳戶設定]", symbol_cme: "交易商品 (CME)", point_value: "每點價值 ($)", risk_position: "[風險及倉位]", tp1_qty_contract: "第一批平倉數量 (口)", calc_fut_btn: "🚀 執行海外期貨計算", total_assets: "總資產", rr_ratio: "損益比 (R/R)", kelly_fraction_settings: "[凱利比例設定]", full_kelly: "Full (100%)", half_kelly: "Half (50%)", quarter_kelly: "Quarter (25%)", ruin_analysis: "[破產機率分析]", ruin_loss_rate: "破產認定虧損率 (%)", ruin_note: "* 計算達到此回撤幅度的機率。", calc_kelly_btn: "🚀 執行凱利計算", current_position: "[目前持倉]", current_avg: "目前均價", current_qty: "持有數量", market_price: "目前市價", calc_target_avg: "🎯 計算目標均價所需數量", add_entry_price: "加倉價格", add_qty: "加倉數量", target_avg_price: "目標均價", calc_integer: "取整數計算 (近似值)", avg_note: "* 計算以目前市價加倉達到目標均價所需的數量。", calc_avg_btn: "🚀 執行均價計算", position_info: "[倉位資訊]", entry_avg: "進場均價", holding_qty: "持有數量", tp_plan: "[分批止盈(TP)計畫]", sl_plan: "[分批止損(SL)計畫]", calc_partial_btn: "🚀 執行分批平倉計算", select_strategy: "[選擇策略]", strat_fixed: "固定比例 (Fixed Fraction)", strat_martingale: "馬丁格爾 (Martingale)", strat_pyramiding: "金字塔加倉 (Pyramiding)", strat_grid: "網格 (Grid)", common_settings: "[通用設定]", start_balance: "初始資金 ($)", iterations: "次數", market_condition: "市場狀況", market_abstract: "抽象機率 (勝率基礎)", market_random: "隨機漫步", market_sine: "震盪盤 (Sine)", market_uptrend: "上升趨勢", market_downtrend: "下降趨勢", fixed_settings: "[固定比例設定]", risk_per_trade: "單筆風險 (%)", tp1_ratio_rr: "第一批止盈 (比例% / R)", set_be: "第一批止盈後設保本(BE)", martingale_settings: "[馬丁格爾設定]", base_bet: "基礎賭注 ($)", multiplier: "倍數", pyramiding_settings: "[金字塔設定]", multiplier_win: "獲勝加碼倍數", grid_settings: "[網格機器人設定]", start_price: "起始價格", grid_step: "網格間距", order_qty: "每單數量", start_sim_btn: "🚀 開始模擬", daily: "日", weekly: "週", monthly: "月", yearly: "年", guide_futures_content: "<p><strong>1. 風險管理核心</strong><br>輸入進場價與止損價並設定「容許虧損金額」，計算機將算出<strong>合適的進場數量</strong>。</p>", guide_stock_content: "<p><strong>1. 資金管理</strong><br>輸入保證金與容許虧損金額。</p>", guide_meta_content: "<p><strong>1. 合約大小</strong><br>確認CFD/Forex的合約規格。</p>", guide_comp_content: "<p><strong>1. 複利效應</strong><br>輸入本金與目標收益率查看資產增長。</p>", guide_fut_content: "<p><strong>1. 跳動價值</strong><br>自動套用各商品的每點價值。</p>", guide_kelly_content: "<p><strong>1. 凱利公式</strong><br>計算最佳資金配置比例。</p>", guide_avg_content: "<p><strong>1. 均價計算</strong><br>計算加倉後的平均成本。</p>", guide_partial_content: "<p><strong>1. 分批平倉</strong><br>設定多個止盈/止損目標。</p>", guide_strat_content: "<p><strong>1. 策略模擬</strong><br>測試不同交易策略的表現。</p>", disclaimer_content: "<strong>[ 免責聲明 ]</strong><br>本工具僅供參考，開發者不對任何損失負責。" },
        es: { app_title: "Herramienta de Gestión TRANDRA.CO", tab1: "Calc. Posición Cripto", tab2: "Calc. Posición Acciones", tab3: "Calc. Posición CFD", tab4: "Calc. Interés Compuesto", tab5: "Calc. Futuros", tab6: "Calc. Criterio Kelly", tab7: "Calc. Precio Promedio", tab8: "Calc. TP/SL Parcial", tab9: "Simulador de Estrategia", currency_settings: "[Config. Moneda]", guide_btn: "🔽 Guía de Usuario", basic_settings: "[Config. Básica]", risk_amount: "Monto de Riesgo", leverage: "Apalancamiento (x)", entry_price: "Precio Entrada", sl_price: "Precio Stop Loss", fee_settings: "[Comisiones]", maker_fee: "Comisión Maker (%)", taker_fee: "Comisión Taker (%)", entry_type: "Entrada:", exit_type: "Salida:", market: "Mercado", limit: "Límite", tp_target: "[Objetivo TP]", final_rr: "R/R Final", use_partial: "✂️ Usar TP Parcial", reset_btn: "🔄 Reiniciar", calc_btn: "🚀 Calcular", long: "LARGO (Compra) 📈", short: "CORTO (Venta) 📉", entry_qty: "■ Cantidad Entrada", pos_size: "■ Tamaño Posición", req_margin: "■ Margen Requerido", net_profit: "😊 Beneficio Neto", total_loss: "😭 Pérdida Total", est_fee: "(Comisión Est.: Ganar {0} / Perder {1})", final_target: "Objetivo Final", partial_tp: "TP Parcial", contract_size: "Tamaño Contrato", total_margin: "Margen Total", margin_usage: "Uso de Margen", warning_margin: "⚠️ Advertencia: ¡Uso de margen demasiado alto!", final_balance: "■ Balance Final", total_invested: "■ Total Invertido", total_profit: "■ Beneficio Total", mdd: "📉 Max Drawdown (MDD)", win_rate: "Tasa de Acierto", avg_profit: "Beneficio Prom.", avg_loss: "Pérdida Prom.", profit_factor: "Factor de Beneficio", max_win_streak: "Max Racha Ganadora", max_loss_streak: "Max Racha Perdedora", total_trades: "Total Operaciones", my_margin: "Mi Margen", fee_percent: "Comisión (%)", partial_tp_option: "[Opción TP Parcial]", tp1_ratio: "1er Ratio TP (%)", tp1_rr: "1er R/R TP", account_symbol_settings: "[Config. Cuenta y Símbolo]", symbol_type: "Tipo Símbolo", risk_leverage: "[Riesgo y Apalancamiento]", position_settings: "[Config. Posición]", long_simple: "Compra (Long)", short_simple: "Venta (Short)", calc_analyze_btn: "🚀 Calc. y Análisis", basic_invest_settings: "[Config. Inversión]", initial_principal: "Capital Inicial", target_rate: "Tasa Objetivo (%)", invest_duration: "Duración", use_add_deposit: "Añadir Depósito", deposit_per_cycle: "Depósito por Ciclo", advanced_features_btn: "🔽 Funciones Avanzadas", loss_sim: "[Sim. Probabilidad Pérdida]", use_winrate_sim: "Usar Sim. Tasa Acierto", loss_rate_per_loss: "Tasa de Pérdida (%)", comp_note: "* Retornos siguen la 'Tasa Objetivo'.", mdd_analysis: "[Análisis MDD]", run_mdd_sim: "Ejecutar Sim. MDD", mdd_limit: "Límite MDD (%)", withdraw_settings: "[Config. Retiro]", withdraw_profits: "Retirar Beneficios", withdraw_ratio: "Ratio Retiro (%)", calc_target_period: "🎯 Calc. Tiempo a Objetivo", target_asset_amt: "Monto Objetivo", calc_comp_btn: "🚀 Ejecutar Calc. Compuesto", view_proj: "📈 Ver Proyección", view_sim: "🎲 Ver Simulación", view_mdd: "📉 Ver MDD", period: "Período", total_asset: "Activo Total", profit_amt: "Beneficio", profit_rate: "% Beneficio", sim_asset: "Activo Sim.", mdd_asset: "Activo MDD", symbol_account_settings: "[Config. Símbolo y Cuenta]", symbol_cme: "Símbolo (CME)", point_value: "Valor por Punto ($)", risk_position: "[Riesgo y Posición]", tp1_qty_contract: "Cant. 1er TP (Contratos)", calc_fut_btn: "🚀 Ejecutar Calc. Futuros", total_assets: "Activos Totales", rr_ratio: "Ratio R/R", kelly_fraction_settings: "[Config. Fracción Kelly]", full_kelly: "Full (100%)", half_kelly: "Half (50%)", quarter_kelly: "Quarter (25%)", ruin_analysis: "[Análisis Riesgo Ruina]", ruin_loss_rate: "Tasa Pérdida Ruina (%)", ruin_note: "* Calcula probabilidad de alcanzar este drawdown.", calc_kelly_btn: "🚀 Ejecutar Calc. Kelly", current_position: "[Posición Actual]", current_avg: "Precio Prom. Actual", current_qty: "Cant. Actual", market_price: "Precio Mercado", calc_target_avg: "🎯 Calc. Cant. para Objetivo", add_entry_price: "Precio Añadido", add_qty: "Cant. Añadida", target_avg_price: "Precio Prom. Objetivo", calc_integer: "Calc. Entero (Aprox)", avg_note: "* Calcula cantidad requerida para precio objetivo.", calc_avg_btn: "🚀 Ejecutar Calc. Promedio", position_info: "[Info. Posición]", entry_avg: "Precio Prom. Entrada", holding_qty: "Cant. Tenencia", tp_plan: "[Plan TP Parcial]", sl_plan: "[Plan SL Parcial]", calc_partial_btn: "🚀 Ejecutar Calc. Parcial", select_strategy: "[Seleccionar Estrategia]", strat_fixed: "Fracción Fija", strat_martingale: "Martingala", strat_pyramiding: "Piramidal", strat_grid: "Grid", common_settings: "[Config. Común]", start_balance: "Balance Inicial ($)", iterations: "Iteraciones", market_condition: "Condición Mercado", market_abstract: "Abstracto (Tasa Acierto)", market_random: "Caminata Aleatoria", market_sine: "Lateral (Seno)", market_uptrend: "Tendencia Alcista", market_downtrend: "Tendencia Bajista", fixed_settings: "[Config. Fracción Fija]", risk_per_trade: "Riesgo por Op. (%)", tp1_ratio_rr: "1er TP (Ratio% / R)", set_be: "Poner BE tras 1er TP", martingale_settings: "[Config. Martingala]", base_bet: "Apuesta Base ($)", multiplier: "Multiplicador", pyramiding_settings: "[Config. Piramidal]", multiplier_win: "Mult. al Ganar", grid_settings: "[Config. Bot Grid]", start_price: "Precio Inicio", grid_step: "Paso Grid", order_qty: "Cant. por Orden", start_sim_btn: "🚀 Iniciar Simulación", daily: "Diario", weekly: "Semanal", monthly: "Mensual", yearly: "Anual", guide_futures_content: "<p><strong>1. Gestión de Riesgos</strong><br>Ingrese precios y monto de riesgo para calcular el tamaño de posición óptimo.</p>", guide_stock_content: "<p><strong>1. Gestión de Capital</strong><br>Ingrese su margen y monto de riesgo.</p>", guide_meta_content: "<p><strong>1. Tamaño Contrato</strong><br>Verifique el tamaño del lote (ej. Euro 100k).</p>", guide_comp_content: "<p><strong>1. Interés Compuesto</strong><br>Simule el crecimiento de activos con tasa objetivo.</p>", guide_fut_content: "<p><strong>1. Valor Tick</strong><br>El valor por punto se aplica automáticamente.</p>", guide_kelly_content: "<p><strong>1. Criterio Kelly</strong><br>Calcula el tamaño de apuesta óptimo.</p>", guide_avg_content: "<p><strong>1. Precio Promedio</strong><br>Calcula el nuevo precio promedio al añadir posición.</p>", guide_partial_content: "<p><strong>1. Cierre Parcial</strong><br>Configure múltiples objetivos TP/SL.</p>", guide_strat_content: "<p><strong>1. Simulación</strong><br>Pruebe diferentes estrategias de trading.</p>", disclaimer_content: "<strong>[ Aviso Legal ]</strong><br>Esta herramienta es solo para referencia. El desarrollador no es responsable de pérdidas." }
    };

    let currentLang = 'ko';

    function t(key) {
        if (translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        return translations['ko'][key] || key; // Fallback to Korean or key
    }

    // --- Common Elements ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeLabel = document.getElementById('theme-label');
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const shareBtn = document.getElementById('share-btn');
    const langSelector = document.getElementById('lang-selector');

    // --- Tab 1 (Futures) Elements ---
    const calculateBtnFutures = document.getElementById('calculate-btn');
    const resultTextFutures = document.getElementById('result');
    const usePartialCheckboxFutures = document.getElementById('use_partial');
    const partialSettingsFutures = document.getElementById('partial_settings');
    const futuresToggleGuide = document.getElementById('futures_toggle_guide');
    const futuresGuideContent = document.getElementById('futures_guide_content');

    // [사용자 요청] 쿠팡 파트너스 원본 HTML 스니펫 (랜덤 갱신)
    const COUPANG_SNIPPETS = [
        '<iframe src="https://coupa.ng/clziFd" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
        '<iframe src="https://coupa.ng/clziFp" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
        '<iframe src="https://coupa.ng/clziFI" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
        '<iframe src="https://coupa.ng/clziFT" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
        '<iframe src="https://coupa.ng/clziF2" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
        '<iframe src="https://coupa.ng/clziF7" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>'
    ];

    function updateCoupangAds() {
        const shuffled = [...COUPANG_SNIPPETS].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        const adsHtml = selected.join('');

        document.querySelectorAll('.coupang-ads-container-inner').forEach(el => {
            el.innerHTML = adsHtml;
        });
    }

    const resetBtnIds = [
        'reset-btn-futures', 'reset-btn-stock', 'reset-btn-meta',
        'reset-btn-comp', 'reset-btn-fut', 'reset-btn-kelly',
        'reset-btn-avg', 'reset-btn-partial', 'reset-btn-strat'
    ];

    resetBtnIds.forEach(id => {
        const btn = document.getElementById(id);
        if (btn && btn.parentNode) {
            const coupaDiv = document.createElement('div');
            coupaDiv.className = 'coupang-ads-wrapper';
            coupaDiv.style.marginBottom = '20px';
            coupaDiv.style.marginTop = '20px';
            coupaDiv.style.textAlign = 'center';
            coupaDiv.style.padding = '15px';
            coupaDiv.style.background = 'rgba(255, 255, 255, 0.05)';
            coupaDiv.style.borderRadius = '12px';
            coupaDiv.style.border = '1px solid rgba(255, 255, 255, 0.1)';

            coupaDiv.innerHTML = `
                <div class="coupang-ads-container-inner" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
                    <!-- Ads will be injected here -->
                </div>
                <p style="font-size: 10px; color: #888; margin-top: 10px; opacity: 0.8;">
                    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
                </p>
            `;
            btn.parentNode.insertBefore(coupaDiv, btn);
        }
    });

    // 초기 로드 시 광고 로드
    updateCoupangAds();

    // --- Tab 2 (Stock) Elements ---
    const calculateBtnStock = document.getElementById('calculate-btn-stock');
    const resultTextStock = document.getElementById('result-stock');
    const usePartialCheckboxStock = document.getElementById('stock_use_partial');
    const partialSettingsStock = document.getElementById('stock_partial_settings');
    const stockToggleGuide = document.getElementById('stock_toggle_guide');
    const stockGuideContent = document.getElementById('stock_guide_content');

    // --- Tab 3 (Meta) Elements ---
    const calculateBtnMeta = document.getElementById('calculate-btn-meta');
    const resultTextMeta = document.getElementById('result-meta');
    const metaSymbolSelect = document.getElementById('meta_symbol');
    const metaContractInput = document.getElementById('meta_contract');
    const metaUsePartialCheckbox = document.getElementById('meta_use_partial');
    const metaPartialSettings = document.getElementById('meta_partial_settings');
    const metaToggleGuide = document.getElementById('meta_toggle_guide');
    const metaGuideContent = document.getElementById('meta_guide_content');

    // --- Tab 4 (Compound) Elements ---
    const calculateBtnComp = document.getElementById('calculate-btn-comp');
    const resultTextComp = document.getElementById('result-comp');
    const compResultArea = document.getElementById('comp-result-area');
    const compChartCanvas = document.getElementById('compChart');
    const compTableBody = document.querySelector('#comp-table tbody');
    const compViewProj = document.getElementById('comp-view-proj');
    const compViewSim = document.getElementById('comp-view-sim');
    const compViewSimContainer = document.getElementById('comp-view-sim-container');
    const compViewMdd = document.getElementById('comp-view-mdd');
    const compViewMddContainer = document.getElementById('comp-view-mdd-container');

    const compUseAdd = document.getElementById('comp_use_add');
    const compAddSettings = document.getElementById('comp_add_settings');
    const compToggleAdvanced = document.getElementById('comp_toggle_advanced');
    const compAdvancedSettings = document.getElementById('comp_advanced_settings');
    const compUseTarget = document.getElementById('comp_use_target');
    const compTargetSettings = document.getElementById('comp_target_settings');
    const compToggleGuide = document.getElementById('comp_toggle_guide');
    const compGuideContent = document.getElementById('comp_guide_content');

    // --- Tab 5 (Futures - Overseas) Elements ---
    const calculateBtnFut = document.getElementById('calculate-btn-fut');
    const resultTextFut = document.getElementById('result-fut');
    const futSymbolSelect = document.getElementById('fut_symbol');
    const futMultiplierInput = document.getElementById('fut_multiplier');
    const futUsePartialCheckbox = document.getElementById('fut_use_partial');
    const futPartialSettings = document.getElementById('fut_partial_settings');
    const futToggleGuide = document.getElementById('fut_toggle_guide');
    const futGuideContent = document.getElementById('fut_guide_content');

    // --- Tab 6 (Kelly) Elements ---
    const calculateBtnKelly = document.getElementById('calculate-btn-kelly');
    const resultTextKelly = document.getElementById('result-kelly');
    const kellyToggleGuide = document.getElementById('kelly_toggle_guide');
    const kellyGuideContent = document.getElementById('kelly_guide_content');

    // --- Tab 7 (Average) Elements ---
    const calculateBtnAvg = document.getElementById('calculate-btn-avg');
    const resultTextAvg = document.getElementById('result-avg');
    const avgMarketPriceInput = document.getElementById('avg_market_price');
    const avgNewPriceInput = document.getElementById('avg_new_price');
    const avgUseTargetCheckbox = document.getElementById('avg_use_target');
    const avgStandardSettings = document.getElementById('avg_standard_settings');
    const avgTargetSettings = document.getElementById('avg_target_settings');
    const avgIntegerModeCheckbox = document.getElementById('avg_integer_mode');
    const avgToggleGuide = document.getElementById('avg_toggle_guide');
    const avgGuideContent = document.getElementById('avg_guide_content');

    // --- Tab 8 (Partial TP/SL) Elements ---
    const calculateBtnPartial = document.getElementById('calculate-btn-partial');
    const resultTextPartial = document.getElementById('result-partial');
    const partialToggleGuide = document.getElementById('partial_toggle_guide');
    const partialGuideContent = document.getElementById('partial_guide_content');

    // --- Tab 9 (Strategy Simulator) Elements ---
    const calculateBtnStrat = document.getElementById('calculate-btn-strat');
    const resultTextStrat = document.getElementById('result-strat');
    const stratChartCanvas = document.getElementById('stratChart');
    const stratTypeRadios = document.querySelectorAll('input[name="strat_type"]');
    const stratToggleGuide = document.getElementById('strat_toggle_guide');
    const stratGuideContent = document.getElementById('strat_guide_content');

    // [사용자 설정] 배너 HTML 정의 (언어별)
    const bannerHtmls = {
        ko: `
            <a href="https://www.tradingview.com/chart/?aff_id=153275&utm_source=creative&utm_lang=KR" target="_blank">
                <img src="https://s3.tradingview.com/pub/referrals/creatives/DT/KR/468x60Banner.jpg" 
                     srcset="https://s3.tradingview.com/pub/referrals/creatives/DT/KR/936x120Banner.jpg 2x"
                     width="468" height="60" border="0" alt="TradingView" style="max-width: 100%; height: auto;" />
            </a>
        `,
        en: `
            <a href="https://www.tradingview.com/chart/?aff_id=153275&utm_source=creative&utm_lang=EN" target="_blank">
                <img src="https://s3.tradingview.com/pub/referrals/creatives/DT/EN/468x60Banner.jpg" 
                     srcset="https://s3.tradingview.com/pub/referrals/creatives/DT/EN/936x120Banner.jpg 2x"
                     width="468" height="60" border="0" alt="TradingView" style="max-width: 100%; height: auto;" />
            </a>
        `
    };
    // 기타 언어는 영어 배너 사용
    bannerHtmls.ja = bannerHtmls.en;
    bannerHtmls['zh-TW'] = bannerHtmls.en;
    bannerHtmls.es = bannerHtmls.en;

    // [사용자 설정] 모든 탭 가이드 하단 제휴마케팅 링크 배너 삽입 함수
    function addBannerToGuide(guideContentElement) {
        if (guideContentElement && guideContentElement.parentNode) {
            const affDiv = document.createElement('div');
            affDiv.className = 'affiliate-banner-container'; // 언어 변경 시 업데이트를 위한 클래스
            affDiv.style.marginTop = '15px';
            affDiv.style.textAlign = 'center';

            // 현재 언어에 맞는 배너 적용
            affDiv.innerHTML = bannerHtmls[currentLang] || bannerHtmls.en;

            guideContentElement.parentNode.insertBefore(affDiv, guideContentElement.nextSibling);
        }
    }

    // 언어 변경 시 배너 업데이트 리스너 추가
    if (langSelector) {
        langSelector.addEventListener('change', () => {
            const newLang = langSelector.value;
            const newHtml = bannerHtmls[newLang] || bannerHtmls.en;
            document.querySelectorAll('.affiliate-banner-container').forEach(el => {
                el.innerHTML = newHtml;
            });
        });
    }

    // 모든 탭(1~9)의 가이드 콘텐츠 요소에 배너 적용
    [futuresGuideContent, stockGuideContent, metaGuideContent, compGuideContent, futGuideContent, kellyGuideContent, avgGuideContent, partialGuideContent, stratGuideContent]
        .forEach(addBannerToGuide);

    let stratChartInstance = null;

    let compChartInstance = null;

    // =================================================================
    // 1. THEME & TAB UI LOGIC
    // =================================================================
    // 페이지 로드 시 저장된 테마 확인
    const savedTheme = localStorage.getItem('calculator-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
        themeLabel.textContent = 'Dark';
    } else {
        themeLabel.textContent = 'Light';
    }

    // 테마 토글 이벤트 리스너
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('calculator-theme', 'dark');
            themeLabel.textContent = 'Dark';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('calculator-theme', 'light');
            themeLabel.textContent = 'Light';
        }
    });

    // =================================================================
    // 1. ROUTING & SEO ARCHITECTURE (Replaces simple Tab UI)
    // =================================================================

    // 각 탭에 대응하는 URL 경로 및 메타데이터 정의
    const routes = {
        'tab1': {
            paths: { ko: '/crypto-futures', en: '/en/crypto-futures' }, titleKey: 'tab1',
            desc: '비트코인 및 알트코인 선물 레버리지, 리스크 관리, 진입 물량 계산기. 바이낸스, 바이비트 등 주요 거래소 수수료 반영.',
            keywords: '코인 선물 계산기, 레버리지 계산, 비트코인 리스크 관리, 포지션 사이즈'
        },
        'tab2': {
            paths: { ko: '/stock-position', en: '/en/stock-position' }, titleKey: 'tab2',
            desc: '주식 물타기, 손익비(R/R), 증거금 기반 적정 매수 수량 계산 도구. 미국 주식 및 국내 주식 지원.',
            keywords: '주식 물타기 계산기, 손익비 계산, 주식 포지션 사이징'
        },
        'tab3': {
            paths: { ko: '/cfd-calculator', en: '/en/cfd-calculator' }, titleKey: 'tab3',
            desc: '해외선물 CFD, MetaTrader 랏(Lot) 단위 및 증거금 계산기. 금, 오일, 나스닥 등 주요 종목 지원.',
            keywords: 'CFD 계산기, 메타트레이더 랏 계산, 해외선물 증거금'
        },
        'tab4': {
            paths: { ko: '/compound-interest', en: '/en/compound-interest' }, titleKey: 'tab4',
            desc: '복리 효과 시뮬레이션, 적립식 투자 및 목표 금액 달성 기간 계산. 월복리, 연복리 및 추가 입금 반영.',
            keywords: '복리 계산기, 적립식 투자 계산, 자산 증식 시뮬레이션'
        },
        'tab5': {
            paths: { ko: '/overseas-futures', en: '/en/overseas-futures' }, titleKey: 'tab5',
            desc: '해외선물 틱 가치 기반 계약 수 계산 및 리스크 관리 도구. 마이크로/미니 종목 틱 가치 자동 적용.',
            keywords: '해외선물 계산기, 틱 가치 계산, 선물 계약 수'
        },
        'tab6': {
            paths: { ko: '/kelly-criterion', en: '/en/kelly-criterion' }, titleKey: 'tab6',
            desc: '켈리 공식(Kelly Criterion) 기반 최적 베팅 비율 및 파산 확률 분석. 자금 관리의 핵심 도구.',
            keywords: '켈리 공식 계산기, 자금 관리, 파산 확률 분석'
        },
        'tab7': {
            paths: { ko: '/average-cost', en: '/en/average-cost' }, titleKey: 'tab7',
            desc: '주식 코인 평단가 계산기, 물타기/불타기 시뮬레이션 및 목표 평단 역산 기능.',
            keywords: '평단가 계산기, 물타기 계산, 불타기 시뮬레이션'
        },
        'tab8': {
            paths: { ko: '/partial-exit', en: '/en/partial-exit' }, titleKey: 'tab8',
            desc: '분할 청산(TP/SL) 시나리오 분석 및 확정 손익 계산기. 다단계 익절/손절 전략 수립.',
            keywords: '분할 청산 계산기, 분할 매도, TP/SL 계산'
        },
        'tab9': {
            paths: { ko: '/strategy-simulator', en: '/en/strategy-simulator' }, titleKey: 'tab9',
            desc: '마틴게일, 그리드, 피라미딩 전략 백테스팅 및 자산 시뮬레이터. 다양한 시장 상황 시뮬레이션.',
            keywords: '전략 시뮬레이터, 마틴게일 계산기, 그리드 매매, 백테스팅'
        }
    };

    // 경로(Path)를 탭 ID로 매핑하는 역참조 객체 생성
    const pathToTabId = {};
    Object.keys(routes).forEach(key => {
        const r = routes[key];
        if (r.paths) {
            Object.entries(r.paths).forEach(([lang, path]) => {
                pathToTabId[path] = { tabId: key, lang: lang };
            });
        }
    });

    // 메타데이터(Title, Description) 업데이트 함수
    function updateSEO(tabId) {
        const route = routes[tabId];
        if (!route) return;

        // 제목 업데이트 (다국어 지원)
        const pageTitle = `${t(route.titleKey)} | TRANDRA.CO`;
        document.title = pageTitle;

        // 메타 설명 업데이트 (SEO)
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = route.desc;

        // 키워드 업데이트
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords && route.keywords) {
            metaKeywords.content = route.keywords;
        }

        // Open Graph 업데이트
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = pageTitle;

        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.content = route.desc;

        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.content = window.location.href;

        // Canonical URL 업데이트 (SEO 핵심)
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.href = window.location.href;
        }

        // JSON-LD 구조화 데이터 업데이트 (SoftwareApplication)
        const jsonLdScript = document.getElementById('dynamic-json-ld');
        if (jsonLdScript) {
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": t(route.titleKey),
                "applicationCategory": "FinanceApplication",
                "description": route.desc,
                "url": window.location.href
            };
            jsonLdScript.textContent = JSON.stringify(structuredData);
        }
    }

    // 탭 활성화 및 라우팅 처리 함수
    function activateTab(targetId, updateHistory = true) {
        if (!routes[targetId]) return;

        // 1. UI 업데이트
        tabs.forEach(t => {
            t.classList.remove('active');
            if (t.dataset.tab === targetId) t.classList.add('active');
        });

        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === targetId) {
                content.classList.add('active');
            }
        });

        // 2. URL 및 메타데이터 업데이트 + 광고 갱신
        if (updateHistory) {
            updateCoupangAds(); // 탭 이동 시 광고 랜덤 갱신
        }

        // 현재 언어에 맞는 경로 선택 (기본값: en)
        const newPath = routes[targetId].paths[currentLang] || routes[targetId].paths['en'];

        if (updateHistory) {
            try {
                history.pushState({ tabId: targetId }, "", newPath);
            } catch (e) {
                console.warn("History API error (local file?):", e);
            }
        }
        updateSEO(targetId);
    }

    // 이벤트 리스너: 탭 클릭 시 라우터 호출
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // 기본 앵커 동작 방지
            const targetTab = tab.dataset.tab;
            activateTab(targetTab);
        });
    });

    // 제목 클릭 시 홈(Tab 1)으로 이동
    const appTitle = document.getElementById('app-title');
    if (appTitle) {
        appTitle.addEventListener('click', () => {
            activateTab('tab1');
        });
    }

    // 이벤트 리스너: 뒤로가기/앞으로가기 (Popstate)
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.tabId) {
            activateTab(event.state.tabId, false);
        } else {
            // State가 없을 경우 URL 경로 기반 복구
            const currentPath = window.location.pathname;
            const tabId = pathToTabId[currentPath] || 'tab1';
            activateTab(tabId, false);
        }
    });

    // 초기 로드 시 URL 경로 확인 및 라우팅
    const initialPath = window.location.pathname;
    const routeInfo = pathToTabId[initialPath];

    if (routeInfo) {
        // URL에 언어 정보가 있으면 언어 설정 업데이트
        currentLang = routeInfo.lang;
        if (langSelector) {
            langSelector.value = currentLang;
            // 언어 변경 이벤트 트리거 (UI 텍스트 업데이트를 위해)
            langSelector.dispatchEvent(new Event('change'));
        }
        activateTab(routeInfo.tabId, false);
    } else {
        // 루트 경로(/)이거나 매칭되지 않는 경우 기본 탭(한국어)으로 URL 교체
        try {
            history.replaceState({ tabId: 'tab1' }, "", routes['tab1'].paths['ko']);
        } catch (e) {
            console.warn("History API error (local file?):", e);
        }
        activateTab('tab1', false);
    }


    // Share functionality
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: 'TRANDRA.CO 종합 관리 도구',
                text: '코인, 주식, 선물, 복리, 켈리 등 다양한 트레이딩 계산기를 이용해보세요!',
                url: window.location.href
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.log('Share canceled');
                }
            } else {
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert('주소가 클립보드에 복사되었습니다!');
                } catch (err) {
                    prompt('이 주소를 복사해서 공유하세요:', window.location.href);
                }
            }
        });
    }

    // Language Change Logic
    if (langSelector) {
        langSelector.addEventListener('change', () => {
            currentLang = langSelector.value;

            // Update static elements with data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.innerHTML = t(key); // Use innerHTML to support HTML tags in guides
            });

            // 언어 변경 시 현재 활성화된 탭의 페이지 제목도 업데이트
            const activeTab = document.querySelector('.tab-link.active');
            if (activeTab) {
                updateSEO(activeTab.dataset.tab);
            }

            // 언어 변경 시 현재 탭의 URL도 해당 언어 경로로 업데이트 (Replace)
            if (activeTab) {
                const tabId = activeTab.dataset.tab;
                const newPath = routes[tabId].paths[currentLang];
                if (newPath) {
                    try {
                        history.replaceState({ tabId: tabId }, "", newPath);
                    } catch (e) { }
                }
            }

            // Update placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                el.placeholder = t(key);
            });

            // Re-trigger calculations if needed to update result text (Optional, user can just click calc)
            // For now, we just update static UI.
        });
    }

    // =================================================================
    // 2. CALCULATOR LOGIC
    // =================================================================

    // --- Helper Functions ---
    function formatNum(num, options = { minimumFractionDigits: 2, maximumFractionDigits: 2 }) {
        return num.toLocaleString(undefined, options);
    }

    // --- Tab 1: Futures Calculator ---
    function togglePartialSettingsFutures() {
        partialSettingsFutures.style.display = usePartialCheckboxFutures.checked ? 'block' : 'none';
    }
    usePartialCheckboxFutures.addEventListener('change', togglePartialSettingsFutures);
    togglePartialSettingsFutures();

    // Guide Toggle
    futuresToggleGuide.addEventListener('click', () => {
        const isHidden = futuresGuideContent.style.display === 'none';
        futuresGuideContent.style.display = isHidden ? 'block' : 'none';
        futuresToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_futures_btn');
    });

    calculateBtnFutures.addEventListener('click', () => {
        try {
            const currency = document.querySelector('input[name="futures_currency"]:checked').value;
            const risk = parseFloat(document.getElementById('risk').value);
            const lev = parseFloat(document.getElementById('lev').value);
            const entry = parseFloat(document.getElementById('entry').value);
            const sl = parseFloat(document.getElementById('sl').value);

            const makerRate = parseFloat(document.getElementById('maker_fee').value) / 100;
            const takerRate = parseFloat(document.getElementById('taker_fee').value) / 100;

            const entryFeeType = document.querySelector('input[name="entry_fee_type"]:checked').value;
            const exitFeeType = document.querySelector('input[name="exit_fee_type"]:checked').value;

            const rateEntry = entryFeeType === 'maker' ? makerRate : takerRate;
            const rateExit = exitFeeType === 'maker' ? makerRate : takerRate;

            // 유효성 검사
            if (isNaN(risk) || isNaN(lev) || isNaN(entry) || entry === 0 || isNaN(sl) || sl === 0) {
                alert(t('err_price_zero'));
                return;
            }
            if (entry === sl) {
                alert(t('err_entry_sl_same'));
                return;
            }
            const isLong = entry > sl;
            const diff1r = Math.abs(entry - sl);
            const totalQty = risk / diff1r;

            const positionVal = totalQty * entry;
            const margin = positionVal / lev;

            const posText = isLong ? t('long') : t('short');

            const finalRr = parseFloat(document.getElementById('final_rr').value);

            const getPrice = (rr) => {
                return isLong ? entry + (diff1r * rr) : entry - (diff1r * rr);
            };

            const finalTpPrice = getPrice(finalRr);

            const currencySymbols = {
                'USD': '$', 'EUR': '€', 'JPY': '¥', 'CNY': '¥', 'KRW': '₩'
            };
            const symbol = currencySymbols[currency] || currency;

            const fmt = (val) => {
                const options = (currency === 'KRW' || currency === 'JPY')
                    ? { maximumFractionDigits: 0 }
                    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                return `${formatNum(val, options)} ${symbol}`;
            };

            let grossProfit = 0;
            let totalFeeWin = 0;
            let scenarioMsg = "";
            let targetStr = "";

            if (usePartialCheckboxFutures.checked) {
                const tp1Rr = parseFloat(document.getElementById('tp1_rr').value);
                const tp1Pct = parseFloat(document.getElementById('tp1_pct').value) / 100;
                const tp1Price = getPrice(tp1Rr);

                const qtyTp1 = totalQty * tp1Pct;
                const qtyFinal = totalQty - qtyTp1;

                const profitTp1 = Math.abs(entry - tp1Price) * qtyTp1;
                const profitFinal = Math.abs(entry - finalTpPrice) * qtyFinal;
                grossProfit = profitTp1 + profitFinal;

                const feeEntry = positionVal * rateEntry;
                const feeTp1 = (qtyTp1 * tp1Price) * rateExit;
                const feeFinal = (qtyFinal * finalTpPrice) * rateExit;
                totalFeeWin = feeEntry + feeTp1 + feeFinal;

                scenarioMsg = `${t('partial_tp')}: ${t('target_1st')} ${Math.round(tp1Pct * 100)}% + ${t('target_final')}`;
                targetStr = `${t('target_1st')}(${tp1Rr}R): ${formatNum(tp1Price)}\n${t('target_final')}(${finalRr}R): ${formatNum(finalTpPrice)}`;
            } else {
                grossProfit = Math.abs(entry - finalTpPrice) * totalQty;

                const feeEntry = positionVal * rateEntry;
                const feeFinal = (totalQty * finalTpPrice) * rateExit;
                totalFeeWin = feeEntry + feeFinal;

                scenarioMsg = `100% ${t('target_final_goal')}`;
                targetStr = `${t('target_final_goal')}(${finalRr}R): ${formatNum(finalTpPrice)}`;
            }

            const netProfit = grossProfit - totalFeeWin;

            const lossGross = risk;
            const feeSl = (totalQty * sl) * rateExit;
            const totalFeeLoss = (positionVal * rateEntry) + feeSl;
            const totalLoss = -lossGross - totalFeeLoss;

            let res = `[${posText}]\n`;
            res += `--------------------------------------------------\n`;
            res += `${t('entry_qty')}: ${totalQty.toFixed(4)}\n`;
            res += `${t('pos_size')}: ${fmt(positionVal)}\n`;
            res += `${t('req_margin')}: ${fmt(margin)} (${t('leverage_result')} ${parseInt(lev)}x)\n`;
            res += `--------------------------------------------------\n`;
            res += `${t('price_target_header').replace('{0}', scenarioMsg)}\n${targetStr}\n`;
            res += `--------------------------------------------------\n`;
            res += `${t('net_profit')}: +${fmt(netProfit)}\n`;
            res += `${t('total_loss')}: ${fmt(totalLoss)}\n`;
            res += t('est_fee').replace('{0}', fmt(totalFeeWin)).replace('{1}', fmt(totalFeeLoss));

            resultTextFutures.value = res;

        } catch (error) {
            alert(t('err_input_valid'));
            console.error(error);
        }
    });

    // --- Tab 2: Stock Calculator ---
    function togglePartialSettingsStock() {
        partialSettingsStock.style.display = usePartialCheckboxStock.checked ? 'block' : 'none';
    }
    usePartialCheckboxStock.addEventListener('change', togglePartialSettingsStock);
    togglePartialSettingsStock();

    // Guide Toggle
    stockToggleGuide.addEventListener('click', () => {
        const isHidden = stockGuideContent.style.display === 'none';
        stockGuideContent.style.display = isHidden ? 'block' : 'none';
        stockToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_stock_btn');
    });

    calculateBtnStock.addEventListener('click', () => {
        try {
            const currency = document.querySelector('input[name="stock_currency"]:checked').value;
            const marginInput = parseFloat(document.getElementById('stock_margin').value);
            const riskInput = parseFloat(document.getElementById('stock_risk').value);
            const entryP = parseFloat(document.getElementById('stock_entry').value);
            const slP = parseFloat(document.getElementById('stock_sl').value);
            const feeRate = parseFloat(document.getElementById('stock_fee').value) / 100;
            const finalRr = parseFloat(document.getElementById('stock_final_rr').value);

            if (entryP <= 0 || slP <= 0) {
                alert("가격을 0보다 크게 입력하세요.");
                return;
            }

            const cMargin = marginInput;
            const cRisk = riskInput;
            const cEntry = entryP;
            const cSl = slP;

            const diff1r = Math.abs(cEntry - cSl);
            if (diff1r === 0) return;

            const qty = Math.floor(cRisk / diff1r);
            if (qty <= 0) {
                alert("금액이 너무 적어 1주도 살 수 없습니다.");
                return;
            }

            const posValUsd = qty * cEntry;
            const isLong = cEntry > cSl;

            const getTargetPrice = (rr) => isLong ? cEntry + (diff1r * rr) : cEntry - (diff1r * rr);

            const finalTpPUsd = getTargetPrice(finalRr);
            const feeEntry = posValUsd * feeRate;

            let grossProfitUsd, totalFeeWin, targetInfo;

            if (usePartialCheckboxStock.checked) {
                const tp1Rr = parseFloat(document.getElementById('stock_tp1_rr').value);
                const tp1Pct = parseFloat(document.getElementById('stock_tp1_pct').value) / 100;
                const tp1PUsd = getTargetPrice(tp1Rr);

                const qtyTp1 = Math.floor(qty * tp1Pct);
                const qtyFinal = qty - qtyTp1;

                const profitTp1 = Math.abs(tp1PUsd - cEntry) * qtyTp1;
                const profitFinal = Math.abs(finalTpPUsd - cEntry) * qtyFinal;
                grossProfitUsd = profitTp1 + profitFinal;

                const feeExitWin = (qtyTp1 * tp1PUsd * feeRate) + (qtyFinal * finalTpPUsd * feeRate);
                totalFeeWin = feeEntry + feeExitWin;
                targetInfo = `🎯 ${t('target_1st')}(${tp1Rr}R): ${formatNum(tp1PUsd, { minimumFractionDigits: 2 })}\n🎯 ${t('target_final_goal')}(${finalRr}R): ${formatNum(finalTpPUsd, { minimumFractionDigits: 2 })}`;
            } else {
                grossProfitUsd = Math.abs(finalTpPUsd - cEntry) * qty;
                const feeExitWin = (qty * finalTpPUsd) * feeRate;
                totalFeeWin = feeEntry + feeExitWin;
                targetInfo = `🎯 ${t('target_final_goal')}(${finalRr}R): ${formatNum(finalTpPUsd, { minimumFractionDigits: 2 })}`;
            }

            const feeExitLoss = (qty * cSl) * feeRate;
            const totalFeeLoss = feeEntry + feeExitLoss;

            const netProfitUsd = grossProfitUsd - totalFeeWin;
            const totalLossUsd = cRisk + totalFeeLoss;

            const currencySymbols = {
                'USD': '$', 'EUR': '€', 'JPY': '¥', 'CNY': '¥', 'KRW': '₩'
            };
            const symbol = currencySymbols[currency] || currency;

            const fmt = (val) => {
                const options = (currency === 'KRW' || currency === 'JPY')
                    ? { maximumFractionDigits: 0 }
                    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                return `${formatNum(val, options)} ${symbol}`;
            };

            let res = `[${isLong ? t('long') : t('short')} | ${usePartialCheckboxStock.checked ? t('partial_tp') : '100%'}]\n`;
            res += "=".repeat(42) + "\n";
            res += `${t('entry_qty')}: ${qty.toLocaleString()}\n`;
            res += `${t('pos_size')}: ${fmt(posValUsd)}\n`;
            res += `${t('my_margin')}: ${fmt(cMargin)}\n`;
            res += "-".repeat(42) + "\n";
            res += `${targetInfo}\n`;
            res += `🛑 ${t('sl_price')}(1R): ${formatNum(slP, { minimumFractionDigits: 2 })}\n`;
            res += "-".repeat(42) + "\n";
            res += `🟢 ${t('net_profit')}: +${fmt(netProfitUsd)}\n`;
            res += `   (${t('est_fee').replace('{0}', fmt(totalFeeWin)).replace('{1}', '0')})\n\n`;
            res += `🔴 ${t('total_loss')}: -${fmt(totalLossUsd)}\n`;
            res += `   (${t('est_fee').replace('{0}', '0').replace('{1}', fmt(totalFeeLoss))})\n`;

            if (posValUsd > cMargin) {
                res += `\n${t('warning_margin')}`;
            }

            resultTextStock.value = res;

        } catch (error) {
            alert("입력 오류: 숫자만 정확히 입력해주세요.");
            console.error(error);
        }
    });

    // --- Tab 3: Meta Pro Calculator ---

    // 종목 선택 시 계약 크기 자동 업데이트
    metaSymbolSelect.addEventListener('change', () => {
        metaContractInput.value = metaSymbolSelect.value;
    });

    function togglePartialSettingsMeta() {
        metaPartialSettings.style.display = metaUsePartialCheckbox.checked ? 'block' : 'none';
    }
    metaUsePartialCheckbox.addEventListener('change', togglePartialSettingsMeta);
    togglePartialSettingsMeta();

    // Guide Toggle
    metaToggleGuide.addEventListener('click', () => {
        const isHidden = metaGuideContent.style.display === 'none';
        metaGuideContent.style.display = isHidden ? 'block' : 'none';
        metaToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_meta_btn');
    });

    calculateBtnMeta.addEventListener('click', () => {
        try {
            const totalMargin = parseFloat(document.getElementById('meta_total_margin').value);
            const risk = parseFloat(document.getElementById('meta_risk').value);
            const lev = parseFloat(document.getElementById('meta_lev').value);
            const entry = parseFloat(document.getElementById('meta_entry').value);
            const sl = parseFloat(document.getElementById('meta_sl').value);
            const contract = parseFloat(document.getElementById('meta_contract').value);
            const side = document.querySelector('input[name="meta_side"]:checked').value;

            const finalRr = parseFloat(document.getElementById('meta_final_rr').value);

            let splitRatio = 0;
            let splitRr = 0;
            if (metaUsePartialCheckbox.checked) {
                splitRatio = parseFloat(document.getElementById('meta_split_ratio').value) / 100;
                splitRr = parseFloat(document.getElementById('meta_split_rr').value);
            }

            if (isNaN(entry) || entry === 0 || isNaN(sl) || sl === 0) {
                alert("가격을 정확히 입력해주세요.");
                return;
            }

            const priceGap = Math.abs(entry - sl);
            if (priceGap === 0) {
                alert("진입가와 손절가가 같습니다.");
                return;
            }

            // 1. 랏수 및 증거금 계산
            const lotSize = risk / (priceGap * contract);
            const requiredMargin = (lotSize * contract * entry) / lev;
            const marginUsagePct = (requiredMargin / totalMargin) * 100;

            // 2. 수익금 계산
            const direction = (side === "Long") ? 1 : -1;

            let tp1Price = 0;
            let tp1Profit = 0;
            if (metaUsePartialCheckbox.checked) {
                tp1Price = entry + (priceGap * splitRr * direction);
                tp1Profit = risk * splitRr * splitRatio;
            }

            const tpFinalPrice = entry + (priceGap * finalRr * direction);
            const tpFinalProfit = risk * finalRr * (1 - splitRatio);

            const totalProfit = tp1Profit + tpFinalProfit;

            // 결과 출력 구성
            let res = `▶ ${t('entry_qty')} : ${lotSize.toFixed(2)} Lot\n`;
            res += `▶ ${t('req_margin')}   : $${formatNum(requiredMargin)}\n`;
            res += `▶ ${t('margin_usage')} : ${marginUsagePct.toFixed(2)}%\n`;
            res += `──────────────────────────────\n`;

            if (metaUsePartialCheckbox.checked) {
                res += `▶ ${t('target_1st')} TP (R ${splitRr} | ${Math.round(splitRatio * 100)}%)\n`;
                res += `   - ${t('price_label')}: ${formatNum(tp1Price, { minimumFractionDigits: 5 })} | ${t('profit_label')}: $${formatNum(tp1Profit)}\n`;
                res += `▶ ${t('target_final')} TP (R ${finalRr} | ${Math.round((1 - splitRatio) * 100)}%)\n`;
            } else {
                res += `▶ ${t('target_final')} TP (R ${finalRr} | 100%)\n`;
            }
            res += `   - ${t('price_label')}: ${formatNum(tpFinalPrice, { minimumFractionDigits: 5 })} | ${t('profit_label')}: $${formatNum(tpFinalProfit)}\n`;
            res += `──────────────────────────────\n`;
            res += `▶ ${t('total_profit')} : $${formatNum(totalProfit)}\n`;
            res += `▶ ${t('total_loss')}  : -$${formatNum(risk)} (${(risk / totalMargin * 100).toFixed(2)}%)\n`;

            if (marginUsagePct > 80) {
                res += `\n${t('warning_margin')} (${marginUsagePct.toFixed(1)}%)`;
            }
            resultTextMeta.value = res;
        } catch (error) {
            alert("입력 오류: 숫자를 정확히 입력해주세요.");
        }
    });

    // --- Tab 4: Compound Calculator ---

    // UI Toggles
    compUseAdd.addEventListener('change', () => {
        compAddSettings.style.display = compUseAdd.checked ? 'block' : 'none';
    });

    compToggleAdvanced.addEventListener('click', () => {
        const isHidden = compAdvancedSettings.style.display === 'none';
        compAdvancedSettings.style.display = isHidden ? 'block' : 'none';
        compToggleAdvanced.textContent = isHidden ? '🔼 특화 기능 접기' : '🔽 특화 기능 (시뮬레이션/인출) 펼치기';
    });

    compUseTarget.addEventListener('change', () => {
        compTargetSettings.style.display = compUseTarget.checked ? 'block' : 'none';
    });

    // View Toggles Logic
    function updateCompVisuals() {
        if (!compChartInstance) return;

        const showProj = compViewProj.checked;
        const showSim = compViewSim.checked && compViewSimContainer.style.display !== 'none';
        const showMdd = compViewMdd.checked && compViewMddContainer.style.display !== 'none';

        // 1. Update Chart
        // Dataset 0 is Projection, Dataset 1 is Simulation (if exists)
        if (compChartInstance.data.datasets.length > 0) {
            compChartInstance.setDatasetVisibility(0, showProj);
        }
        if (compChartInstance.data.datasets.length > 1) {
            compChartInstance.setDatasetVisibility(1, showSim);
        }
        if (compChartInstance.data.datasets.length > 2) {
            compChartInstance.setDatasetVisibility(2, showMdd);
        }
        compChartInstance.update();

        // 2. Update Table Columns
        const projCols = document.querySelectorAll('.col-proj');
        const simCols = document.querySelectorAll('.col-sim');
        const mddCols = document.querySelectorAll('.col-mdd');

        projCols.forEach(el => el.classList.toggle('hidden-col', !showProj));
        simCols.forEach(el => el.classList.toggle('hidden-col', !showSim));
        mddCols.forEach(el => el.classList.toggle('hidden-col', !showMdd));
    }

    compViewProj.addEventListener('change', updateCompVisuals);
    compViewSim.addEventListener('change', updateCompVisuals);
    compViewMdd.addEventListener('change', updateCompVisuals);

    // Guide Toggle
    compToggleGuide.addEventListener('click', () => {
        const isHidden = compGuideContent.style.display === 'none';
        compGuideContent.style.display = isHidden ? 'block' : 'none';
        compToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_comp_btn');
    });

    calculateBtnComp.addEventListener('click', () => {
        try {
            const currency = document.querySelector('input[name="comp_currency"]:checked').value;
            const principal = parseFloat(document.getElementById('comp_principal').value);
            const rate = parseFloat(document.getElementById('comp_rate').value) / 100;
            const periodUnit = document.getElementById('comp_period_unit').value;
            const duration = parseInt(document.getElementById('comp_duration').value);

            const useAdd = compUseAdd.checked;
            const addAmt = useAdd ? parseFloat(document.getElementById('comp_add_amt').value) : 0;
            const addUnit = useAdd ? document.getElementById('comp_add_unit').value : 'monthly';

            const useSim = document.getElementById('comp_use_sim').checked;
            const winRate = parseFloat(document.getElementById('comp_win_rate').value) / 100;
            const lossRate = parseFloat(document.getElementById('comp_loss_rate').value) / 100;

            const useMdd = document.getElementById('comp_use_mdd').checked;
            const mddLimit = parseFloat(document.getElementById('comp_mdd_limit').value) / 100;

            const useWithdraw = document.getElementById('comp_use_withdraw').checked;
            const withdrawRate = parseFloat(document.getElementById('comp_withdraw_rate').value) / 100;

            const useTarget = compUseTarget.checked;
            const targetAmt = parseFloat(document.getElementById('comp_target_amt').value);

            if (isNaN(principal) || isNaN(rate) || isNaN(duration)) {
                alert("기본 설정 값을 정확히 입력해주세요.");
                return;
            }

            // 1. Basic Calculation & Chart Data
            let balance = principal;
            let totalInvested = principal;
            let labels = [];
            let dataPoints = [];
            let tableRows = [];

            const currencySymbols = {
                'USD': '$', 'EUR': '€', 'JPY': '¥', 'CNY': '¥', 'KRW': '₩'
            };
            const symbol = currencySymbols[currency] || currency;

            const fmt = (val) => {
                const options = (currency === 'KRW' || currency === 'JPY')
                    ? { maximumFractionDigits: 0 }
                    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                return `${formatNum(val, options)} ${symbol}`;
            };

            // Monthly summary helper
            const getDays = (unit) => {
                if (unit === 'daily') return 1;
                if (unit === 'weekly') return 7;
                if (unit === 'monthly') return 30;
                if (unit === 'yearly') return 365;
                return 1;
            };

            let daysPerMainUnit = getDays(periodUnit);
            let daysPerAddUnit = getDays(addUnit);

            labels.push(0);
            dataPoints.push(principal);

            let currentDay = 0;
            let nextDepositDay = daysPerAddUnit;

            for (let i = 1; i <= duration; i++) {
                // Apply Interest
                let profit = balance * rate;
                balance += profit;
                currentDay += daysPerMainUnit;

                // Additional Deposit (Time-based accumulation)
                if (useAdd) {
                    while (currentDay >= nextDepositDay) {
                        balance += addAmt;
                        totalInvested += addAmt;
                        nextDepositDay += daysPerAddUnit;
                    }
                }

                // Withdrawal
                if (useWithdraw && profit > 0) {
                    let wAmt = profit * withdrawRate;
                    balance -= wAmt;
                }

                // Store Data
                labels.push(i);
                dataPoints.push(balance);

                // Table Data (All periods)
                let totalProfit = balance - totalInvested;
                let returnRate = (totalProfit / totalInvested) * 100;
                tableRows.push({
                    period: i,
                    balance: balance,
                    profit: totalProfit,
                    rate: returnRate
                });
            }

            // 2. Simulation (Monte Carlo for Loss Probability)
            let lossProbMsg = "";
            let mddMsg = "";
            let simDataPoints = []; // One sample path
            let mddDataPoints = []; // Worst MDD path

            if (useSim || useMdd) {
                let lossCount = 0;
                let mddFailCount = 0;
                let globalWorstMdd = 0;
                const iterations = 1000;

                // Run Monte Carlo
                for (let k = 0; k < iterations; k++) {
                    let simBal = principal;
                    let simInvested = principal;
                    let simCurrentDay = 0;
                    let simNextDepositDay = daysPerAddUnit;
                    let tempPath = [principal];
                    let pathPeak = principal;
                    let pathMaxDD = 0;

                    for (let i = 1; i <= duration; i++) {
                        let isWin = Math.random() < winRate;
                        let simProfit = isWin ? simBal * rate : -simBal * lossRate;
                        simBal += simProfit;
                        simCurrentDay += daysPerMainUnit;

                        // Track Peak & DD
                        if (simBal > pathPeak) pathPeak = simBal;
                        let currentDD = (pathPeak - simBal) / pathPeak;
                        if (currentDD > pathMaxDD) pathMaxDD = currentDD;

                        if (useAdd) {
                            while (simCurrentDay >= simNextDepositDay) {
                                simBal += addAmt;
                                simInvested += addAmt;
                                simNextDepositDay += daysPerAddUnit;
                            }
                        }
                        if (useWithdraw && simProfit > 0) {
                            simBal -= (simProfit * withdrawRate);
                        }
                        tempPath.push(simBal);
                    }

                    if (useSim) {
                        if (simBal < simInvested) lossCount++;
                        if (k === 0) simDataPoints = tempPath;
                    }
                    if (useMdd) {
                        if (pathMaxDD > mddLimit) mddFailCount++;
                        if (pathMaxDD > globalWorstMdd) {
                            globalWorstMdd = pathMaxDD;
                            mddDataPoints = [...tempPath];
                        }
                    }
                }

                // Add simulation data to table rows (using the last run path for visualization)
                if (useSim) simDataPoints.forEach((val, idx) => { if (tableRows[idx]) tableRows[idx].simBalance = val; });
                if (useMdd) mddDataPoints.forEach((val, idx) => { if (tableRows[idx]) tableRows[idx].mddBalance = val; });

                if (useSim) lossProbMsg = t('sim_loss_prob').replace('{0}', (lossCount / iterations * 100).toFixed(1)).replace('{1}', '1000');
                if (useMdd) mddMsg = t('mdd_prob').replace('{0}', (mddLimit * 100).toFixed(0)).replace('{1}', (mddFailCount / iterations * 100).toFixed(1)).replace('{2}', (globalWorstMdd * 100).toFixed(1));
            }

            // 3. Target Reverse Calculation
            let targetMsg = "";
            if (useTarget) {
                let tBal = principal;
                let periods = 0;
                let maxPeriods = 10000; // Safety break
                let tCurrentDay = 0;
                let tNextDepositDay = daysPerAddUnit;

                while (tBal < targetAmt && periods < maxPeriods) {
                    tBal += tBal * rate;
                    tCurrentDay += daysPerMainUnit;
                    if (useAdd) {
                        while (tCurrentDay >= tNextDepositDay) {
                            tBal += addAmt;
                            tNextDepositDay += daysPerAddUnit;
                        }
                    }
                    if (useWithdraw && (tBal * rate) > 0) tBal -= (tBal * rate * withdrawRate);
                    periods++;
                }

                let unitLabel = t('period');
                if (periodUnit === 'daily') unitLabel = t('unit_day');
                else if (periodUnit === 'weekly') unitLabel = t('unit_week');
                else if (periodUnit === 'monthly') unitLabel = t('unit_month');
                else if (periodUnit === 'yearly') unitLabel = t('unit_year');

                if (periods >= maxPeriods) targetMsg = t('target_unreachable');
                else targetMsg = t('target_reached_est').replace('{0}', fmt(targetAmt)).replace('{1}', periods).replace('{2}', unitLabel);
            }

            // Render Result
            compResultArea.style.display = 'block';
            let finalBalance = dataPoints[dataPoints.length - 1];
            let totalProfit = finalBalance - totalInvested;
            let finalRate = (totalProfit / totalInvested) * 100;

            let resText = `${t('final_balance')}: ${fmt(finalBalance)}\n`;
            resText += `${t('total_invested')}: ${fmt(totalInvested)}\n`;
            resText += `${t('total_profit')}: ${fmt(totalProfit)} (${finalRate.toFixed(2)}%)\n`;
            if (useSim) resText += `\n${lossProbMsg}\n`;
            if (useTarget) resText += `\n${targetMsg}\n`;
            if (useMdd) resText += `\n${mddMsg}\n`;

            resultTextComp.value = resText;

            // Render Table
            // Show/Hide Sim Column Header based on usage
            const simHeader = document.querySelector('th.col-sim');
            if (useSim) {
                simHeader.style.display = 'table-cell';
                compViewSimContainer.style.display = 'inline-block';
            } else {
                simHeader.style.display = 'none';
                compViewSimContainer.style.display = 'none';
            }

            const mddHeader = document.querySelector('th.col-mdd');
            if (useMdd) {
                mddHeader.style.display = 'table-cell';
                compViewMddContainer.style.display = 'inline-block';
            } else {
                mddHeader.style.display = 'none';
                compViewMddContainer.style.display = 'none';
            }

            compTableBody.innerHTML = "";
            tableRows.forEach(row => {
                let tr = document.createElement('tr');
                let simCell = useSim ? `<td class="col-sim">${fmt(row.simBalance || 0)}</td>` : '';
                let mddCell = useMdd ? `<td class="col-mdd">${fmt(row.mddBalance || 0)}</td>` : '';
                tr.innerHTML = `<td>${row.period}</td><td class="col-proj">${fmt(row.balance)}</td><td class="col-proj">${fmt(row.profit)}</td><td class="col-proj">${row.rate.toFixed(2)}%</td>${simCell}${mddCell}`;
                compTableBody.appendChild(tr);
            });

            // Render Chart
            if (compChartInstance) compChartInstance.destroy();

            const isDark = document.body.classList.contains('dark-mode');
            const gridColor = isDark ? '#444' : '#ddd';
            const textColor = isDark ? '#eee' : '#333';

            let datasets = [{
                label: '예상 자산 추이',
                data: dataPoints,
                borderColor: '#00b894',
                backgroundColor: 'rgba(0, 184, 148, 0.1)',
                fill: true,
                tension: 0.4
            }];

            if (useSim && simDataPoints.length > 0) {
                datasets.push({
                    label: '시뮬레이션 예시 (1회)',
                    data: simDataPoints,
                    borderColor: '#ff7675',
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4
                });
            }

            if (useMdd && mddDataPoints.length > 0) {
                datasets.push({
                    label: '최대 MDD 발생 시나리오',
                    data: mddDataPoints,
                    borderColor: '#e17055',
                    borderDash: [2, 2],
                    fill: false,
                    tension: 0.4
                });
            }

            compChartInstance = new Chart(compChartCanvas, {
                type: 'line',
                data: { labels: labels, datasets: datasets },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { mode: 'index', intersect: false },
                    plugins: {
                        legend: { labels: { color: textColor } }
                    },
                    scales: {
                        x: { grid: { color: gridColor }, ticks: { color: textColor } },
                        y: { grid: { color: gridColor }, ticks: { color: textColor } }
                    }
                }
            });

            // Apply initial visibility
            updateCompVisuals();

        } catch (error) {
            console.error(error);
            alert("계산 중 오류가 발생했습니다.");
        }
    });

    // --- Tab 5: Overseas Futures Calculator ---

    // 종목 선택 시 승수(Multiplier) 자동 업데이트
    futSymbolSelect.addEventListener('change', () => {
        futMultiplierInput.value = futSymbolSelect.value;
    });

    function togglePartialSettingsFut() {
        futPartialSettings.style.display = futUsePartialCheckbox.checked ? 'block' : 'none';
    }
    futUsePartialCheckbox.addEventListener('change', togglePartialSettingsFut);
    togglePartialSettingsFut();

    // Guide Toggle
    futToggleGuide.addEventListener('click', () => {
        const isHidden = futGuideContent.style.display === 'none';
        futGuideContent.style.display = isHidden ? 'block' : 'none';
        futToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_fut_btn');
    });

    calculateBtnFut.addEventListener('click', () => {
        try {
            const totalMargin = parseFloat(document.getElementById('fut_total_margin').value);
            const risk = parseFloat(document.getElementById('fut_risk').value);
            const entry = parseFloat(document.getElementById('fut_entry').value);
            const sl = parseFloat(document.getElementById('fut_sl').value);
            const multiplier = parseFloat(document.getElementById('fut_multiplier').value);
            const side = document.querySelector('input[name="fut_side"]:checked').value;
            const finalRr = parseFloat(document.getElementById('fut_final_rr').value);

            if (isNaN(entry) || entry === 0 || isNaN(sl) || sl === 0) {
                alert("가격을 정확히 입력해주세요.");
                return;
            }

            const priceGap = Math.abs(entry - sl);
            if (priceGap === 0) {
                alert("진입가와 손절가가 같습니다.");
                return;
            }

            // 1계약당 손실액
            const lossPerContract = priceGap * multiplier;

            // 적정 계약 수 계산 (소수점)
            const rawQty = risk / lossPerContract;

            // 시나리오 1: 리스크 내 (내림)
            const qtySafe = Math.floor(rawQty);
            // 시나리오 2: 리스크 근사 초과 (올림)
            const qtyAggressive = Math.ceil(rawQty);

            const direction = (side === "Long") ? 1 : -1;
            const finalTpPrice = entry + (priceGap * finalRr * direction);

            // 결과 텍스트 생성 함수
            const generateResult = (qty, label) => {
                if (qty <= 0) return `${t('entry_impossible').replace('{0}', label)}\n`;

                const actualRisk = qty * lossPerContract;
                const riskPct = (actualRisk / totalMargin) * 100;

                let profitText = "";
                let totalProfit = 0;

                if (futUsePartialCheckbox.checked) {
                    const splitQty = parseFloat(document.getElementById('fut_split_qty').value);
                    const splitRr = parseFloat(document.getElementById('fut_split_rr').value);

                    if (splitQty >= qty) {
                        profitText = `   ${t('err_partial_qty')}\n`;
                    } else {
                        const tp1Price = entry + (priceGap * splitRr * direction);
                        const tp1Profit = splitQty * (priceGap * splitRr) * multiplier;
                        const finalQty = qty - splitQty;
                        const finalProfit = finalQty * (priceGap * finalRr) * multiplier;
                        totalProfit = tp1Profit + finalProfit;

                        profitText += `   - ${t('contract_1st').replace('{0}', splitQty)}: ${formatNum(tp1Price)} (+$${formatNum(tp1Profit)})\n`;
                        profitText += `   - ${t('contract_final').replace('{0}', finalQty)}: ${formatNum(finalTpPrice)} (+$${formatNum(finalProfit)})\n`;
                    }
                } else {
                    totalProfit = qty * (priceGap * finalRr) * multiplier;
                    profitText += `   - ${t('final_target_price')}: ${formatNum(finalTpPrice)}\n`;
                }

                let res = `[${label}] ${t('contract_count')}: ${qty}\n`;
                res += `   - ${t('est_loss')}: -$${formatNum(actualRisk)} (${riskPct.toFixed(2)}%)\n`;
                res += `   - ${t('est_profit')}: +$${formatNum(totalProfit)}\n`;
                res += profitText;
                return res;
            };

            let res = `■ ${t('symbol_label')}: ${futSymbolSelect.options[futSymbolSelect.selectedIndex].text}\n`;
            res += `■ ${t('tick_value_label')}: $${multiplier}\n`;
            res += `──────────────────────────────\n`;
            res += generateResult(qtySafe, t('entry_conservative'));
            res += `──────────────────────────────\n`;
            res += generateResult(qtyAggressive, t('entry_aggressive'));

            resultTextFut.value = res;

        } catch (error) {
            alert("입력 오류: 숫자를 정확히 입력해주세요.");
        }
    });

    // --- Tab 6: Kelly Criterion Calculator ---
    kellyToggleGuide.addEventListener('click', () => {
        const isHidden = kellyGuideContent.style.display === 'none';
        kellyGuideContent.style.display = isHidden ? 'block' : 'none';
        kellyToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_kelly_btn');
    });

    calculateBtnKelly.addEventListener('click', () => {
        try {
            const currency = document.querySelector('input[name="kelly_currency"]:checked').value;
            const bankroll = parseFloat(document.getElementById('kelly_bankroll').value);
            const winRate = parseFloat(document.getElementById('kelly_win_rate').value) / 100;
            const rr = parseFloat(document.getElementById('kelly_rr').value);
            const fraction = parseFloat(document.querySelector('input[name="kelly_fraction"]:checked').value);
            const ruinLoss = parseFloat(document.getElementById('kelly_ruin_loss').value);

            if (isNaN(bankroll) || isNaN(winRate) || isNaN(rr)) {
                alert("입력값을 확인해주세요.");
                return;
            }

            const currencySymbols = {
                'USD': '$', 'EUR': '€', 'JPY': '¥', 'CNY': '¥', 'KRW': '₩'
            };
            const symbol = currencySymbols[currency] || currency;

            const fmt = (val) => {
                const options = (currency === 'KRW' || currency === 'JPY')
                    ? { maximumFractionDigits: 0 }
                    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                return `${formatNum(val, options)} ${symbol}`;
            };

            // Kelly Formula: f = p - (q / b)
            // p = winRate, q = 1-p, b = rr
            const q = 1 - winRate;
            const kellyFull = winRate - (q / rr);

            const kellyApplied = kellyFull * fraction;
            const betAmount = bankroll * kellyApplied;

            let res = `■ ${t('win_rate_label')}: ${(winRate * 100).toFixed(2)}%\n`;
            res += `■ ${t('rr_label')}: ${rr} : 1\n`;
            res += `──────────────────────────────\n`;
            res += `▶ ${t('full_kelly_label')}: ${(kellyFull * 100).toFixed(2)}%\n`;

            if (kellyFull <= 0) {
                res += `\n${t('kelly_neg_warn')}`;
            } else {
                let fractionLabel = "Custom";
                if (fraction === 1) fractionLabel = "Full";
                else if (fraction === 0.5) fractionLabel = "Half";
                else if (fraction === 0.25) fractionLabel = "Quarter";

                res += `▶ ${t('applied_ratio')} (${fractionLabel}): ${(kellyApplied * 100).toFixed(2)}%\n`;
                res += `▶ ${t('rec_bet_amt')}: ${fmt(betAmount)}\n`;
                res += `──────────────────────────────\n`;
                res += t('total_asset_base').replace('{0}', fmt(bankroll));
            }

            // Risk of Ruin Calculation
            if (!isNaN(ruinLoss) && ruinLoss > 0 && ruinLoss < 100) {
                const remaining = 1 - (ruinLoss / 100);
                let ruinProb = 0;

                if (fraction >= 2) {
                    ruinProb = 100; // 2배 이상 켈리는 장기적으로 파산 확정
                } else {
                    const exponent = (2 / fraction) - 1;
                    ruinProb = Math.pow(remaining, exponent) * 100;
                }

                let probStr = ruinProb < 0.01 && ruinProb > 0 ? "< 0.01%" : ruinProb.toFixed(2) + "%";

                let riskLevel = "";
                if (ruinProb < 1) riskLevel = t('risk_safe');
                else if (ruinProb < 5) riskLevel = t('risk_caution');
                else riskLevel = t('risk_danger');

                res += `\n▶ ${t('ruin_prob_label').replace('{0}', ruinLoss)}: ${probStr} [${riskLevel}]\n`;
            }

            resultTextKelly.value = res;

        } catch (error) {
            alert("계산 중 오류가 발생했습니다.");
        }
    });

    // --- Tab 7: Average Cost & Pyramiding Calculator ---

    // 현재 시장가 입력 시 추가 진입가에도 자동 반영 (편의성)
    avgMarketPriceInput.addEventListener('input', () => {
        if (!avgUseTargetCheckbox.checked) {
            avgNewPriceInput.value = avgMarketPriceInput.value;
        }
    });

    // 모드 전환 토글
    avgUseTargetCheckbox.addEventListener('change', () => {
        if (avgUseTargetCheckbox.checked) {
            avgStandardSettings.style.display = 'none';
            avgTargetSettings.style.display = 'block';
        } else {
            avgStandardSettings.style.display = 'block';
            avgTargetSettings.style.display = 'none';
            // 모드 해제 시 현재가를 추가 진입가로 동기화
            avgNewPriceInput.value = avgMarketPriceInput.value;
        }
    });

    // Guide Toggle
    avgToggleGuide.addEventListener('click', () => {
        const isHidden = avgGuideContent.style.display === 'none';
        avgGuideContent.style.display = isHidden ? 'block' : 'none';
        avgToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_avg_btn');
    });

    calculateBtnAvg.addEventListener('click', () => {
        try {
            const currency = document.querySelector('input[name="avg_currency"]:checked').value;
            const currentPrice = parseFloat(document.getElementById('avg_current_price').value);
            const currentQty = parseFloat(document.getElementById('avg_current_qty').value);

            const currencySymbols = {
                'USD': '$', 'EUR': '€', 'JPY': '¥', 'CNY': '¥', 'KRW': '₩'
            };
            const symbol = currencySymbols[currency] || currency;

            const fmt = (val) => {
                const options = (currency === 'KRW' || currency === 'JPY')
                    ? { maximumFractionDigits: 0 }
                    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                return `${formatNum(val, options)} ${symbol}`;
            };

            let res = "";

            if (avgUseTargetCheckbox.checked) {
                // [목표 평단가 모드]
                const marketPrice = parseFloat(document.getElementById('avg_market_price').value);
                const targetPrice = parseFloat(document.getElementById('avg_target_price').value);

                if (isNaN(currentPrice) || isNaN(currentQty) || isNaN(marketPrice) || isNaN(targetPrice)) {
                    alert(t('err_input_num'));
                    return;
                }

                // 유효성 검사: 목표가는 현재가와 평단가 사이에 있어야 함
                if ((targetPrice <= marketPrice && targetPrice <= currentPrice) ||
                    (targetPrice >= marketPrice && targetPrice >= currentPrice)) {
                    alert(t('err_target_range'));
                    return;
                }

                // 필요 수량 공식: Q_new = Q_old * (P_old - P_target) / (P_target - P_market)
                let requiredQty = currentQty * (currentPrice - targetPrice) / (targetPrice - marketPrice);
                let qtyMsg = "";

                if (avgIntegerModeCheckbox.checked) {
                    requiredQty = Math.round(requiredQty);
                    qtyMsg = ` (${t('calc_integer')})`;
                }

                const requiredAmount = requiredQty * marketPrice;
                const totalQty = currentQty + requiredQty;
                const totalAmount = (currentPrice * currentQty) + requiredAmount;

                // 정수 계산 시 실제 평단가가 목표와 다를 수 있으므로 재계산
                const actualAvg = totalAmount / totalQty;

                res = `■ ${t('target_avg_label')}: ${fmt(targetPrice)}\n`;
                if (avgIntegerModeCheckbox.checked) res += `   (${t('est_real_avg')}: ${fmt(actualAvg)})\n`;
                res += `──────────────────────────────\n`;
                res += `▶ ${t('req_buy_qty')}: ${formatNum(requiredQty)} ${qtyMsg}\n`;
                res += `▶ ${t('req_invest_amt')}: ${fmt(requiredAmount)}\n`;
                res += `──────────────────────────────\n`;
                res += t('after_buy_info').replace('{0}', formatNum(totalQty)).replace('{1}', fmt(totalAmount));

            } else {
                // [일반 평단가 모드]
                const newPrice = parseFloat(document.getElementById('avg_new_price').value);
                const newQty = parseFloat(document.getElementById('avg_new_qty').value);

                if (isNaN(currentPrice) || isNaN(currentQty) || isNaN(newPrice) || isNaN(newQty)) {
                    alert(t('err_input_num'));
                    return;
                }

                const currentTotal = currentPrice * currentQty;
                const newTotal = newPrice * newQty;
                const totalQty = currentQty + newQty;
                const totalAmount = currentTotal + newTotal;

                const newAverage = totalAmount / totalQty;
                const priceDiff = newAverage - currentPrice;
                const priceDiffPct = (priceDiff / currentPrice) * 100;

                res = `■ ${t('final_avg_label')}: ${fmt(newAverage)}\n`;
                res += `   ${t('existing_label').replace('{0}', fmt(currentPrice)).replace('{1}', (priceDiff > 0 ? '+' : '') + fmt(priceDiff)).replace('{2}', (priceDiff > 0 ? '+' : '') + priceDiffPct.toFixed(2))}\n`;
                res += `──────────────────────────────\n`;
                res += `■ ${t('total_hold_qty')}: ${formatNum(totalQty)}\n`;
                res += `■ ${t('total_invest_amt')}: ${fmt(totalAmount)}\n`;
            }
            resultTextAvg.value = res;
        } catch (error) {
            alert("계산 중 오류가 발생했습니다.");
        }
    });

    // --- Tab 8: Partial TP/SL Calculator ---
    partialToggleGuide.addEventListener('click', () => {
        const isHidden = partialGuideContent.style.display === 'none';
        partialGuideContent.style.display = isHidden ? 'block' : 'none';
        partialToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_partial_btn');
    });

    calculateBtnPartial.addEventListener('click', () => {
        try {
            const currency = document.querySelector('input[name="partial_currency"]:checked').value;
            const side = document.querySelector('input[name="partial_side"]:checked').value;
            const entryPrice = parseFloat(document.getElementById('partial_entry_price').value);
            const totalQty = parseFloat(document.getElementById('partial_total_qty').value);

            if (isNaN(entryPrice) || isNaN(totalQty) || entryPrice <= 0 || totalQty <= 0) {
                alert("진입가와 수량을 정확히 입력해주세요.");
                return;
            }

            const currencySymbols = {
                'USD': '$', 'EUR': '€', 'JPY': '¥', 'CNY': '¥', 'KRW': '₩'
            };
            const symbol = currencySymbols[currency] || currency;
            const fmt = (val) => {
                const options = (currency === 'KRW' || currency === 'JPY')
                    ? { maximumFractionDigits: 0 }
                    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                return `${formatNum(val, options)} ${symbol}`;
            };

            const direction = side === "Long" ? 1 : -1;

            // --- 역산 기능: 금액($) 입력 시 가격 자동 계산 ---
            const performReverseCalc = (prefix, count, isSl) => {
                for (let i = 1; i <= count; i++) {
                    const amtInput = document.getElementById(`${prefix}_${i}_amt`);
                    const priceInput = document.getElementById(`${prefix}_${i}_price`);
                    const pctInput = document.getElementById(`${prefix}_${i}_pct`);

                    if (amtInput && priceInput && pctInput) {
                        let amt = parseFloat(amtInput.value);
                        let currentPrice = parseFloat(priceInput.value);
                        const pct = parseFloat(pctInput.value);

                        // 가격이 비어있고 금액이 입력된 경우 역산 수행
                        if (!isNaN(amt) && (isNaN(currentPrice) || currentPrice === 0) && !isNaN(pct) && pct > 0) {
                            const qty = totalQty * (pct / 100);
                            if (isSl && amt > 0) amt = -amt; // 손절란에 양수 입력 시 자동으로 음수(손실) 처리
                            const calcPrice = entryPrice + (amt / (qty * direction));
                            priceInput.value = parseFloat(calcPrice.toFixed(5)); // 결과 입력창에 반영
                        }
                    }
                }
            };
            performReverseCalc('partial_tp', 3, false);
            performReverseCalc('partial_sl', 3, true);

            // 1. TP Scenario
            let tpVal = 0;
            let tpPct = 0;
            let tpDetails = "";
            [1, 2, 3].forEach(i => {
                const isChecked = document.getElementById(`partial_tp${i}_check`).checked;
                if (!isChecked) return;

                const price = parseFloat(document.getElementById(`partial_tp${i}_price`).value);
                const pct = parseFloat(document.getElementById(`partial_tp${i}_pct`).value);

                if (!isNaN(price) && !isNaN(pct) && pct > 0) {
                    const qty = totalQty * (pct / 100);
                    const pnl = (price - entryPrice) * qty * direction;
                    tpVal += pnl;
                    tpPct += pct;
                    tpDetails += `   - ${t('step_label').replace('{0}', i)}(${Math.round(pct)}%): ${fmt(price)} (${pnl >= 0 ? '+' : ''}${fmt(pnl)})\n`;
                }
            });

            // 2. SL Scenario
            let slVal = 0;
            let slPct = 0;
            let slDetails = "";
            [1, 2, 3].forEach(i => {
                const isChecked = document.getElementById(`partial_sl${i}_check`).checked;
                if (!isChecked) return;

                const price = parseFloat(document.getElementById(`partial_sl${i}_price`).value);
                const pct = parseFloat(document.getElementById(`partial_sl${i}_pct`).value);

                if (!isNaN(price) && !isNaN(pct) && pct > 0) {
                    const qty = totalQty * (pct / 100);
                    const pnl = (price - entryPrice) * qty * direction;
                    slVal += pnl;
                    slPct += pct;
                    slDetails += `   - ${t('step_label').replace('{0}', i)}(${Math.round(pct)}%): ${fmt(price)} (${pnl >= 0 ? '+' : ''}${fmt(pnl)})\n`;
                }
            });

            let res = `■ ${t('pos_label')}: ${side} (${t('avg_price_label')} ${fmt(entryPrice)} / ${formatNum(totalQty)})\n`;
            res += `──────────────────────────────\n`;
            res += `${t('tp_scenario').replace('{0}', Math.round(tpPct))}\n`;
            res += tpDetails;
            res += `▶ ${t('total_tp_profit')}: ${tpVal >= 0 ? '+' : ''}${fmt(tpVal)}\n`;
            res += `──────────────────────────────\n`;
            res += `${t('sl_scenario').replace('{0}', Math.round(slPct))}\n`;
            res += slDetails;
            res += `▶ ${t('total_sl_loss')}: ${slVal >= 0 ? '+' : ''}${fmt(slVal)}\n`;

            // 3. Mixed Scenario (TP1 Hit -> Remaining SL)
            const tp1Check = document.getElementById('partial_tp1_check').checked;
            const sl1Check = document.getElementById('partial_sl1_check').checked;
            const tp1Price = parseFloat(document.getElementById('partial_tp1_price').value);
            const tp1Pct = parseFloat(document.getElementById('partial_tp1_pct').value);
            const sl1Price = parseFloat(document.getElementById('partial_sl1_price').value);

            if (tp1Check && sl1Check && !isNaN(tp1Price) && !isNaN(tp1Pct) && !isNaN(sl1Price)) {
                const tp1Qty = totalQty * (tp1Pct / 100);
                const tp1Pnl = (tp1Price - entryPrice) * tp1Qty * direction;

                const remQty = totalQty - tp1Qty;
                const remPnl = (sl1Price - entryPrice) * remQty * direction;

                const mixedTotal = tp1Pnl + remPnl;

                res += `──────────────────────────────\n`;
                res += `${t('mixed_scenario')}\n`;
                res += `▶ ${t('mixed_detail').replace('{0}', Math.round(tp1Pct)).replace('{1}', Math.round(100 - tp1Pct))}\n`;
                res += `   ${t('final_pnl')}: ${mixedTotal >= 0 ? '+' : ''}${fmt(mixedTotal)}\n`;
            }

            resultTextPartial.value = res;
        } catch (error) {
            alert("계산 중 오류가 발생했습니다.");
        }
    });

    // --- Tab 9: Strategy Simulator ---

    // Fixed Strategy Partial TP Toggle
    const stratFixedUsePartial = document.getElementById('strat_fixed_use_partial');
    const stratFixedPartialSettings = document.getElementById('strat_fixed_partial_settings');
    stratFixedUsePartial.addEventListener('change', () => {
        stratFixedPartialSettings.style.display = stratFixedUsePartial.checked ? 'block' : 'none';
    });

    // Pyramiding Strategy Partial TP Toggle
    const stratPyraUsePartial = document.getElementById('strat_pyra_use_partial');
    const stratPyraPartialSettings = document.getElementById('strat_pyra_partial_settings');
    stratPyraUsePartial.addEventListener('change', () => {
        stratPyraPartialSettings.style.display = stratPyraUsePartial.checked ? 'block' : 'none';
    });

    // Guide Toggle
    stratToggleGuide.addEventListener('click', () => {
        const isHidden = stratGuideContent.style.display === 'none';
        stratGuideContent.style.display = isHidden ? 'block' : 'none';
        stratToggleGuide.textContent = isHidden ? t('guide_hide_btn') : t('guide_strat_btn');
    });

    // Toggle Settings based on Strategy Selection
    stratTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            document.getElementById('strat_fixed_settings').style.display = 'none';
            document.getElementById('strat_martingale_settings').style.display = 'none';
            document.getElementById('strat_pyramiding_settings').style.display = 'none';
            document.getElementById('strat_grid_settings').style.display = 'none';

            if (radio.checked) {
                document.getElementById(`strat_${radio.value}_settings`).style.display = 'block';
            }
        });
    });

    calculateBtnStrat.addEventListener('click', () => {
        try {
            const currency = document.querySelector('input[name="strat_currency"]:checked').value;
            const stratType = document.querySelector('input[name="strat_type"]:checked').value;
            const startBalance = parseFloat(document.getElementById('strat_balance').value);
            const iterations = parseInt(document.getElementById('strat_iterations').value);
            const marketMode = document.getElementById('strat_market_mode').value;

            if (isNaN(startBalance) || isNaN(iterations)) {
                alert("기본 설정을 확인해주세요.");
                return;
            }

            const currencySymbols = {
                'USD': '$', 'EUR': '€', 'JPY': '¥', 'CNY': '¥', 'KRW': '₩'
            };
            const symbol = currencySymbols[currency] || currency;

            const fmt = (val) => {
                const options = (currency === 'KRW' || currency === 'JPY')
                    ? { maximumFractionDigits: 0 }
                    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                return `${formatNum(val, options)} ${symbol}`;
            };

            let balance = startBalance;
            let dataPoints = [startBalance];
            let labels = [0];
            let log = "";

            let peakBalance = startBalance;
            let maxDrawdown = 0;
            let currentPeakIndex = 0;
            let mddPeakIndex = 0;
            let mddTroughIndex = 0;

            // Statistics Variables
            let winCount = 0;
            let lossCount = 0;
            let totalWinAmt = 0;
            let totalLossAmt = 0;
            let currentStreak = 0; // + for wins, - for losses
            let maxWinStreak = 0;
            let maxLossStreak = 0;

            // Helper: Update Stats
            const updateStats = (pnl) => {
                if (pnl > 0) {
                    winCount++;
                    totalWinAmt += pnl;
                    if (currentStreak > 0) currentStreak++;
                    else currentStreak = 1;
                    if (currentStreak > maxWinStreak) maxWinStreak = currentStreak;
                } else if (pnl < 0) {
                    lossCount++;
                    totalLossAmt += Math.abs(pnl);
                    if (currentStreak < 0) currentStreak--;
                    else currentStreak = -1;
                    if (Math.abs(currentStreak) > maxLossStreak) maxLossStreak = Math.abs(currentStreak);
                }
            };

            // Helper: Generate Price Path
            // We generate enough data points. For trade-based strats, we might need more steps than iterations.
            // Let's assume max trade duration is 100 steps, so we generate iterations * 100 points roughly.
            const pricePath = [];
            if (marketMode !== 'abstract') {
                let p = 1000; // Start Price
                const step = 1; // Base step
                const totalSteps = iterations * 100 + 1000; // Buffer

                for (let i = 0; i < totalSteps; i++) {
                    pricePath.push(p);
                    let move = 0;
                    if (marketMode === 'sine') {
                        const angle = i * 0.05;
                        const target = 1000 + 50 * Math.sin(angle); // Center 1000, Amp 50
                        const noise = (Math.random() - 0.5) * 5;
                        move = (target + noise) - p;
                        // Dampen move to avoid instant jumps
                        move *= 0.1;
                    } else if (marketMode === 'uptrend') {
                        move = (Math.random() - 0.4) * 2; // Bias positive
                    } else if (marketMode === 'downtrend') {
                        move = (Math.random() - 0.6) * 2; // Bias negative
                    } else { // random
                        move = (Math.random() - 0.5) * 2;
                    }
                    p += move;
                    if (p < 10) p = 10; // Floor
                }
            }

            let priceIndex = 0;

            // Simulation Logic
            if (stratType === 'fixed') {
                const winRate = parseFloat(document.getElementById('strat_fixed_winrate').value) / 100;
                const rr = parseFloat(document.getElementById('strat_fixed_rr').value);
                const riskPct = parseFloat(document.getElementById('strat_fixed_risk').value) / 100;

                const usePartial = document.getElementById('strat_fixed_use_partial').checked;
                const tp1Ratio = usePartial ? parseFloat(document.getElementById('strat_fixed_tp1_ratio').value) / 100 : 0;
                const tp1Rr = usePartial ? parseFloat(document.getElementById('strat_fixed_tp1_rr').value) : 0;
                const useBreakeven = usePartial ? document.getElementById('strat_fixed_breakeven').checked : false;

                for (let i = 1; i <= iterations; i++) {
                    const riskAmt = balance * riskPct;
                    let pnl = 0;

                    if (marketMode === 'abstract') {
                        // Abstract Mode: Simple Win/Loss based on WinRate
                        // Assumption: Win = Hits Final Target (so TP1 also hit)
                        // Loss = Hits SL immediately
                        const isWin = Math.random() < winRate;
                        if (isWin) {
                            if (usePartial) {
                                pnl = (riskAmt * tp1Ratio * tp1Rr) + (riskAmt * (1 - tp1Ratio) * rr);
                            } else {
                                pnl = riskAmt * rr;
                            }
                        } else {
                            pnl = -riskAmt;
                        }
                    } else {
                        // Price Path Mode: Simulate Trade
                        const entryPrice = pricePath[priceIndex];
                        let slPrice = entryPrice * (1 - 0.01); // Assume 1% risk distance
                        const finalTpPrice = entryPrice * (1 + 0.01 * rr);
                        const tp1Price = usePartial ? entryPrice * (1 + 0.01 * tp1Rr) : finalTpPrice;

                        let tp1Done = false;
                        let tradeDone = false;

                        for (let j = priceIndex + 1; j < pricePath.length; j++) {
                            const p = pricePath[j];

                            // Check SL
                            if (p <= slPrice) {
                                if (usePartial && tp1Done) {
                                    pnl -= riskAmt * (1 - tp1Ratio); // Loss on remainder
                                } else {
                                    pnl -= riskAmt; // Full loss
                                }
                                priceIndex = j;
                                tradeDone = true;
                                break;
                            }

                            // Check TP1
                            if (usePartial && !tp1Done && p >= tp1Price) {
                                pnl += riskAmt * tp1Ratio * tp1Rr;
                                tp1Done = true;
                                if (useBreakeven) slPrice = entryPrice; // Move SL to BE
                            }

                            // Check Final TP
                            if (p >= finalTpPrice) {
                                if (usePartial && !tp1Done) { // Gap up case
                                    pnl += riskAmt * tp1Ratio * tp1Rr;
                                }
                                pnl += usePartial ? (riskAmt * (1 - tp1Ratio) * rr) : (riskAmt * rr);
                                priceIndex = j;
                                tradeDone = true;
                                break;
                            }
                        }

                        if (!tradeDone) {
                            priceIndex += 100; // Timeout / Force close
                            // Simple close at end
                            // pnl += 0; 
                        }
                    }

                    balance += pnl;
                    updateStats(pnl);

                    if (balance < 0) balance = 0;

                    if (balance > peakBalance) {
                        peakBalance = balance;
                        currentPeakIndex = i;
                    }
                    const dd = (peakBalance - balance) / peakBalance;
                    if (dd > maxDrawdown) {
                        maxDrawdown = dd;
                        mddPeakIndex = currentPeakIndex;
                        mddTroughIndex = i;
                    }

                    dataPoints.push(balance);
                    labels.push(i);
                }

                log = `[고정 비율] 승률 ${winRate * 100}%, R/R ${rr}, Risk ${riskPct * 100}%`;
                if (usePartial) {
                    log += `\n(분할 익절: ${tp1Ratio * 100}% @ ${tp1Rr}R)`;
                }

            } else if (stratType === 'martingale') {
                const winRate = parseFloat(document.getElementById('strat_martin_winrate').value) / 100;
                const rr = parseFloat(document.getElementById('strat_martin_rr').value);
                const baseBet = parseFloat(document.getElementById('strat_martin_base').value);
                const mult = parseFloat(document.getElementById('strat_martin_mult').value);

                let currentBet = baseBet;

                for (let i = 1; i <= iterations; i++) {
                    let isWin = false;
                    if (marketMode === 'abstract') {
                        isWin = Math.random() < winRate;
                    } else {
                        const entryPrice = pricePath[priceIndex];
                        const tpPrice = entryPrice * (1 + 0.01 * rr);
                        const slPrice = entryPrice * (1 - 0.01);

                        let outcome = null;
                        for (let j = priceIndex + 1; j < pricePath.length; j++) {
                            if (pricePath[j] >= tpPrice) { outcome = true; priceIndex = j; break; }
                            if (pricePath[j] <= slPrice) { outcome = false; priceIndex = j; break; }
                        }
                        if (outcome === null) { priceIndex += 100; isWin = Math.random() < 0.5; }
                        else isWin = outcome;
                    }

                    let pnl = 0;
                    if (isWin) {
                        pnl = currentBet * rr;
                        balance += pnl;
                        currentBet = baseBet; // Reset
                    } else {
                        pnl = -currentBet;
                        balance += pnl;
                        currentBet *= mult; // Increase
                    }
                    updateStats(pnl);

                    if (balance < 0) balance = 0;

                    if (balance > peakBalance) {
                        peakBalance = balance;
                        currentPeakIndex = i;
                    }
                    const dd = (peakBalance - balance) / peakBalance;
                    if (dd > maxDrawdown) {
                        maxDrawdown = dd;
                        mddPeakIndex = currentPeakIndex;
                        mddTroughIndex = i;
                    }

                    dataPoints.push(balance);
                    labels.push(i);
                    if (balance <= 0) break;
                }
                log = `[마틴게일] 기본 $${baseBet}, 배수 ${mult}x`;

            } else if (stratType === 'pyramiding') {
                const winRate = parseFloat(document.getElementById('strat_pyra_winrate').value) / 100;
                const rr = parseFloat(document.getElementById('strat_pyra_rr').value);
                const baseBet = parseFloat(document.getElementById('strat_pyra_base').value);
                const mult = parseFloat(document.getElementById('strat_pyra_mult').value);

                const usePartial = document.getElementById('strat_pyra_use_partial').checked;
                const tp1Ratio = usePartial ? parseFloat(document.getElementById('strat_pyra_tp1_ratio').value) / 100 : 0;
                const tp1Rr = usePartial ? parseFloat(document.getElementById('strat_pyra_tp1_rr').value) : 0;

                let currentBet = baseBet;

                for (let i = 1; i <= iterations; i++) {
                    let pnl = 0;
                    let tradeWin = false; // For streak reset logic

                    if (marketMode === 'abstract') {
                        const isWin = Math.random() < winRate;
                        if (isWin) {
                            if (usePartial) {
                                pnl = (currentBet * tp1Ratio * tp1Rr) + (currentBet * (1 - tp1Ratio) * rr);
                            } else {
                                pnl = currentBet * rr;
                            }
                            tradeWin = true;
                        } else {
                            pnl = -currentBet;
                            tradeWin = false;
                        }
                    } else {
                        const entryPrice = pricePath[priceIndex];
                        const slPrice = entryPrice * (1 - 0.01);
                        const finalTpPrice = entryPrice * (1 + 0.01 * rr);
                        const tp1Price = usePartial ? entryPrice * (1 + 0.01 * tp1Rr) : finalTpPrice;

                        let tp1Done = false;
                        let tradeDone = false;

                        for (let j = priceIndex + 1; j < pricePath.length; j++) {
                            const p = pricePath[j];

                            // Check SL
                            if (p <= slPrice) {
                                if (usePartial && tp1Done) {
                                    pnl -= currentBet * (1 - tp1Ratio);
                                } else {
                                    pnl -= currentBet;
                                }
                                priceIndex = j;
                                tradeDone = true;
                                tradeWin = false; // Hit SL means streak ends
                                break;
                            }

                            // Check TP1
                            if (usePartial && !tp1Done && p >= tp1Price) {
                                pnl += currentBet * tp1Ratio * tp1Rr;
                                tp1Done = true;
                            }

                            // Check Final TP
                            if (p >= finalTpPrice) {
                                if (usePartial && !tp1Done) pnl += currentBet * tp1Ratio * tp1Rr;
                                pnl += usePartial ? (currentBet * (1 - tp1Ratio) * rr) : (currentBet * rr);
                                priceIndex = j;
                                tradeDone = true;
                                tradeWin = true;
                                break;
                            }
                        }
                        if (!tradeDone) priceIndex += 100;
                    }

                    balance += pnl;

                    if (tradeWin) {
                        currentBet *= mult; // Increase on win (Paroli)
                    } else {
                        currentBet = baseBet; // Reset on loss
                    }

                    updateStats(pnl);

                    if (balance < 0) balance = 0;

                    if (balance > peakBalance) {
                        peakBalance = balance;
                        currentPeakIndex = i;
                    }
                    const dd = (peakBalance - balance) / peakBalance;
                    if (dd > maxDrawdown) {
                        maxDrawdown = dd;
                        mddPeakIndex = currentPeakIndex;
                        mddTroughIndex = i;
                    }

                    dataPoints.push(balance);
                    labels.push(i);
                    if (balance <= 0) break;
                }
                log = `[피라미딩] 승리 시 증액 (Paroli), 배수 ${mult}x`;
                if (usePartial) {
                    log += `\n(분할 익절: ${tp1Ratio * 100}% @ ${tp1Rr}R)`;
                }

            } else if (stratType === 'grid') {
                const startPrice = parseFloat(document.getElementById('strat_grid_price').value);
                const step = parseFloat(document.getElementById('strat_grid_step').value);
                const qty = parseFloat(document.getElementById('strat_grid_qty').value);

                let currentPrice = startPrice;
                let positions = []; // Array of buy prices
                let cash = balance;

                // Use generated price path or generate on fly if abstract (Grid needs price)
                // If abstract selected for Grid, fallback to Random Walk
                let gridPath = pricePath;
                if (marketMode === 'abstract') {
                    // Generate random walk on fly
                    gridPath = [];
                    let p = startPrice;
                    for (let i = 0; i < iterations; i++) {
                        gridPath.push(p);
                        p += (Math.random() - 0.5) * step * 2;
                    }
                } else {
                    // Scale the common price path to startPrice
                    // The common path starts at 1000. We can just use it relative or use logic above.
                    // For simplicity, let's regenerate specific for grid to match startPrice/step
                    // OR just use the logic inside the loop as before but respecting marketMode
                }

                for (let i = 1; i <= iterations; i++) {
                    let move = 0;
                    // Re-implementing logic to match common modes but scaled to Grid Step
                    if (marketMode === 'sine') {
                        const angle = i * 0.1;
                        const targetPrice = startPrice + (step * 10) * Math.sin(angle);
                        const noise = (Math.random() - 0.5) * step;
                        move = (targetPrice + noise) - currentPrice;
                    } else if (marketMode === 'uptrend') {
                        move = (Math.random() - 0.3) * step * 2;
                    } else if (marketMode === 'downtrend') {
                        move = (Math.random() - 0.7) * step * 2;
                    } else { // random or abstract
                        move = (Math.random() - 0.5) * step * 2;
                    }

                    const prevPrice = currentPrice;
                    currentPrice += move;

                    // Check Grid Crossings
                    // Long Grid: Buy if price drops below grid line, Sell if price rises above grid line + profit
                    // Simplified: If price drops by step, Buy. If price rises by step, Sell latest.

                    const gridLevel = Math.floor(currentPrice / step) * step;
                    const prevGridLevel = Math.floor(prevPrice / step) * step;

                    if (gridLevel < prevGridLevel) {
                        // Price dropped a level -> Buy
                        cash -= currentPrice * qty;
                        positions.push(currentPrice);
                        // No realized PnL on buy
                    } else if (gridLevel > prevGridLevel) {
                        // Price rose a level -> Sell (FIFO or LIFO? LIFO for grid usually)
                        if (positions.length > 0) {
                            const buyPrice = positions.pop();
                            cash += currentPrice * qty;
                            const pnl = (currentPrice - buyPrice) * qty;
                            updateStats(pnl);
                        }
                    }

                    // Calculate Total Equity
                    const equity = cash + (positions.length * currentPrice * qty);

                    if (equity > peakBalance) {
                        peakBalance = equity;
                        currentPeakIndex = i;
                    }
                    const dd = (peakBalance - equity) / peakBalance;
                    if (dd > maxDrawdown) {
                        maxDrawdown = dd;
                        mddPeakIndex = currentPeakIndex;
                        mddTroughIndex = i;
                    }

                    dataPoints.push(equity);
                    labels.push(i);
                }
                balance = dataPoints[dataPoints.length - 1];
                log = `[그리드] 모드: ${marketMode}, 시작가 ${startPrice}, 간격 ${step}, 보유 ${positions.length}개`;
            }

            // Result Output
            const profit = balance - startBalance;
            const profitPct = (profit / startBalance) * 100;

            // Stats Calculation
            const totalTrades = winCount + lossCount;
            const winRateCalc = totalTrades > 0 ? (winCount / totalTrades * 100) : 0;
            const avgProfit = winCount > 0 ? totalWinAmt / winCount : 0;
            const avgLoss = lossCount > 0 ? totalLossAmt / lossCount : 0;
            const profitFactor = totalLossAmt > 0 ? totalWinAmt / totalLossAmt : (totalWinAmt > 0 ? "∞" : 0);

            let resultStr = `${log}\n──────────────────────────────\n`;
            resultStr += `▶ ${t('final_balance')}: ${fmt(balance)}\n`;
            resultStr += `▶ ${t('total_profit')}: ${fmt(profit)} (${profitPct.toFixed(2)}%)\n`;
            resultStr += `${t('mdd')}: ${(maxDrawdown * 100).toFixed(2)}%`;
            resultStr += `──────────────────────────────\n`;
            resultStr += `📊 상세 통계:\n`;
            resultStr += `   - ${t('total_trades')}: ${totalTrades} (Win ${winCount} / Loss ${lossCount})\n`;
            resultStr += `   - ${t('win_rate')}: ${winRateCalc.toFixed(2)}%\n`;
            resultStr += `   - ${t('avg_profit')}: ${fmt(avgProfit)} / ${t('avg_loss')}: ${fmt(avgLoss)}\n`;
            resultStr += `   - ${t('profit_factor')}: ${typeof profitFactor === 'number' ? profitFactor.toFixed(2) : profitFactor}\n`;
            resultStr += `   - ${t('max_win_streak')}: ${maxWinStreak} / ${t('max_loss_streak')}: ${maxLossStreak}`;

            resultTextStrat.value = resultStr;

            // Chart
            if (stratChartInstance) stratChartInstance.destroy();
            const isDark = document.body.classList.contains('dark-mode');
            const gridColor = isDark ? '#444' : '#ddd';
            const textColor = isDark ? '#eee' : '#333';

            // Prepare MDD Highlight Data
            let mddData = new Array(dataPoints.length).fill(null);
            if (maxDrawdown > 0 && mddPeakIndex < mddTroughIndex) {
                for (let k = mddPeakIndex; k <= mddTroughIndex; k++) {
                    mddData[k] = dataPoints[k];
                }
            }

            stratChartInstance = new Chart(stratChartCanvas, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        { label: '자산 변화', data: dataPoints, borderColor: '#0984e3', tension: 0.1, pointRadius: 0 },
                        { label: 'MDD 구간', data: mddData, borderColor: '#e74c3c', backgroundColor: 'rgba(231, 76, 60, 0.3)', borderWidth: 3, pointRadius: 0, tension: 0.1 }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false, scales: { x: { grid: { color: gridColor }, ticks: { color: textColor } }, y: { grid: { color: gridColor }, ticks: { color: textColor } } }, plugins: { legend: { labels: { color: textColor } } } }
            });

        } catch (error) {
            alert("시뮬레이션 중 오류가 발생했습니다.");
        }
    });

    // =================================================================
    // 3. RESET FUNCTIONALITY
    // =================================================================
    function setupReset(btnId, containerId) {
        const btn = document.getElementById(btnId);
        const container = document.getElementById(containerId);
        if (!btn || !container) return;

        btn.addEventListener('click', () => {
            // Reset Inputs
            container.querySelectorAll('input').forEach(input => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = input.defaultChecked;
                    input.dispatchEvent(new Event('change')); // Trigger change for UI toggles
                } else {
                    input.value = input.defaultValue;
                    input.dispatchEvent(new Event('input')); // Trigger input for sync logic
                }
            });

            // Reset Selects
            container.querySelectorAll('select').forEach(select => {
                for (let i = 0; i < select.options.length; i++) {
                    if (select.options[i].defaultSelected) {
                        select.selectedIndex = i;
                        break;
                    }
                }
                select.dispatchEvent(new Event('change'));
            });

            // Clear Results
            container.querySelectorAll('textarea').forEach(ta => ta.value = '');
        });
    }

    setupReset('reset-btn-futures', 'tab1');
    setupReset('reset-btn-stock', 'tab2');
    setupReset('reset-btn-meta', 'tab3');
    setupReset('reset-btn-comp', 'tab4');
    setupReset('reset-btn-fut', 'tab5');
    setupReset('reset-btn-kelly', 'tab6');
    setupReset('reset-btn-avg', 'tab7');
    setupReset('reset-btn-partial', 'tab8');
    setupReset('reset-btn-strat', 'tab9');
});
