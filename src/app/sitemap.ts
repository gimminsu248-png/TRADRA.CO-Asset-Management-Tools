// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tradra.co'

    // 향후 카테고리나 블로그 포스트가 늘어나면 여기서 동적으로 생성 가능
    const routes = [
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

    return routes
}
