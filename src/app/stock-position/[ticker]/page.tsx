import { STOCK_ASSETS, SEOAsset } from '../../../lib/seo-data';
import StockPositionTool from '../../../components/tools/StockPositionTool';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return STOCK_ASSETS.map((asset) => ({
        ticker: asset.id,
    }));
}

export async function generateMetadata({ params }: { params: { ticker: string } }): Promise<Metadata> {
    const asset = STOCK_ASSETS.find((a: SEOAsset) => a.id === params.ticker);
    if (!asset) return { title: '주식 리스크 관리 계산기' };

    return {
        title: `${asset.name} (${asset.ticker}) 리스크 관리 & 포지션 사이징 계산기`,
        description: `${asset.name} (${asset.ticker}) 주식 매수 시 적정 수량과 손절 라인을 계산하세요. ${asset.keywords.join(', ')} 주가 리스크 관리.`,
        keywords: asset.keywords.join(', ') + ', 주식 계산기, 포지션 사이징',
    };
}

export default function StockPositionAssetPage({ params }: { params: { ticker: string } }) {
    const asset = STOCK_ASSETS.find((a: SEOAsset) => a.id === params.ticker);

    return (
        <StockPositionTool
            assetName={asset?.name}
            ticker={asset?.ticker}
        />
    );
}
