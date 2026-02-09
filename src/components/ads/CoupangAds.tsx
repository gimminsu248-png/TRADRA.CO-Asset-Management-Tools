'use client';

import React, { useState, useEffect } from 'react';

const COUPANG_SNIPPETS = [
    '<iframe src="https://ads-partners.coupang.com/widgets.html?id=clziFd&format=vertical&width=120&height=240" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
    '<iframe src="https://ads-partners.coupang.com/widgets.html?id=clziFp&format=vertical&width=120&height=240" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
    '<iframe src="https://ads-partners.coupang.com/widgets.html?id=clziFI&format=vertical&width=120&height=240" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
    '<iframe src="https://ads-partners.coupang.com/widgets.html?id=clziFT&format=vertical&width=120&height=240" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
    '<iframe src="https://ads-partners.coupang.com/widgets.html?id=clziF2&format=vertical&width=120&height=240" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
    '<iframe src="https://ads-partners.coupang.com/widgets.html?id=clziF7&format=vertical&width=120&height=240" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>'
];

export default function CoupangAds() {
    const [adHtml, setAdHtml] = useState<string>('');

    useEffect(() => {
        const shuffled = [...COUPANG_SNIPPETS].sort(() => 0.5 - Math.random());
        setAdHtml(shuffled.slice(0, 3).join(''));
    }, []);

    if (!adHtml) return <div className="h-[240px]" />;

    return (
        <div className="coupang-ads-container my-8 p-4 glass-card">
            <div
                className="flex flex-wrap justify-center gap-4"
                dangerouslySetInnerHTML={{ __html: adHtml }}
            />
            <p className="text-[10px] text-secondary text-center mt-4 opacity-70">
                이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </p>
        </div>
    );
}
