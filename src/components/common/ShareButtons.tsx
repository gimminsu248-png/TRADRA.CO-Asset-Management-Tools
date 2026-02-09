'use client';

declare global {
    interface Window {
        Kakao: any;
    }
}

interface ShareButtonsProps {
    resultText: string;
}

export default function ShareButtons({ resultText }: ShareButtonsProps) {
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('링크가 성공적으로 복사되었습니다! 친구들에게 공유해보세요.');
    };

    const handleKakaoShare = () => {
        // Kakao SDK는 layout.tsx에서 로드됨
        if (window.Kakao && window.Kakao.isInitialized && !window.Kakao.isInitialized()) {
            // 여기에 Kakao.init('YOUR_APP_KEY')가 필요할 수 있음
        }

        if (window.Kakao) {
            window.Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '내 10년 뒤 자산은 얼마일까?',
                    description: resultText || 'TRADRA 계산기로 지금 바로 확인해보세요!',
                    imageUrl: 'https://tradra.co/og-image.webp',
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: '나도 확인하기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            });
        } else {
            alert('카카오톡 공유 기능을 준비 중입니다.');
        }
    };

    return (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button
                onClick={handleKakaoShare}
                style={{
                    flex: 1,
                    backgroundColor: '#FEE500',
                    color: '#000',
                    border: 'none',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}
            >
                💬 카톡 공유
            </button>
            <button
                onClick={handleCopyLink}
                style={{
                    flex: 1,
                    backgroundColor: '#eee',
                    color: '#333',
                    border: 'none',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    cursor: 'pointer'
                }}
            >
                🔗 링크 복사
            </button>
        </div>
    );
}
