// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { PSEO_DATA } from '../lib/seo-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tradra.co'

    // 기본 정적 경로
    const staticRoutes = [
        '',
        '/crypto-futures',
        '/stock-position',
        '/compound-interest',
        '/kelly-criterion',
        '/average-cost',
        '/cfd-calculator',
        '/overseas-futures',
        '/partial-exit',
        '/strategy-simulator',
        '/about',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // pSEO 동적 경로 추가
    const pseoRoutes: MetadataRoute.Sitemap = []

    Object.entries(PSEO_DATA).forEach(([tool, assets]) => {
        assets.forEach((asset) => {
            pseoRoutes.push({
                url: `${baseUrl}/${tool}/${asset.id}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.6,
            })
        })
    })

    return [...staticRoutes, ...pseoRoutes]
}
