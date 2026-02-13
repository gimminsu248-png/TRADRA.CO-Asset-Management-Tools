import { CRYPTO_ASSETS, SEOAsset } from '../../../lib/seo-data';
import CryptoFuturesTool from '../../../components/tools/CryptoFuturesTool';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return CRYPTO_ASSETS.map((asset) => ({
        symbol: asset.id,
    }));
}

export async function generateMetadata({ params }: { params: { symbol: string } }): Promise<Metadata> {
    const asset = CRYPTO_ASSETS.find((a) => a.id === params.symbol);
    if (!asset) return { title: '코인 선물 리스크 계산기' };

    return {
        title: `${asset.name} (${asset.symbol}) 선물 리스크 계산기 | 레버리지 및 포지션 사이징`,
        description: `${asset.name} (${asset.symbol}) 선물 거래를 위한 최적의 포지션 규모와 리스크를 계산하세요. ${asset.keywords.join(', ')} 리스크 관리 도구.`,
        keywords: asset.keywords.join(', ') + ', 선물 계산기, 리스크 관리',
    };
}

export default function CryptoFuturesAssetPage({ params }: { params: { symbol: string } }) {
    const asset = CRYPTO_ASSETS.find((a) => a.id === params.symbol);

    return (
        <CryptoFuturesTool
            assetName={asset?.name || '코인'}
            symbol={asset?.symbol}
        />
    );
}
