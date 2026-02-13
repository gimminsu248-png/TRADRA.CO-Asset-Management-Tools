import { GOAL_ASSETS, SEOAsset } from '../../../lib/seo-data';
import CompoundInterestTool from '../../../components/tools/CompoundInterestTool';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return GOAL_ASSETS.map((asset) => ({
        target: asset.id,
    }));
}

export async function generateMetadata({ params }: { params: { target: string } }): Promise<Metadata> {
    const asset = GOAL_ASSETS.find((a: SEOAsset) => a.id === params.target);
    if (!asset) return { title: '고급 복리 시뮬레이터' };

    return {
        title: `${asset.name} 위한 복리 시뮬레이터 & 자산 관리 도구`,
        description: `${asset.name} 목표를 달성하기 위한 최적의 복리 투자 계획을 세우세요. ${asset.keywords.join(', ')} 성공 재테크 가이드.`,
        keywords: asset.keywords.join(', ') + ', 복리 계산기, 재테크 시뮬레이션',
    };
}

export default function CompoundInterestAssetPage({ params }: { params: { target: string } }) {
    const asset = GOAL_ASSETS.find((a: SEOAsset) => a.id === params.target);

    return (
        <CompoundInterestTool
            assetName={asset?.name}
        />
    );
}
