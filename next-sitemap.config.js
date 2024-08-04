/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://blog.gunbro.kr', // 사이트의 기본 URL
  generateRobotsTxt: true, // robots.txt 생성 여부
  changefreq: 'daily', // 기본 changefreq 값
  priority: 0.7, // 기본 priority 값
  sitemapSize: 5000, // 각 sitemap 파일의 최대 URL 수
  exclude: ['/404', '/500'], // 사이트맵에서 제외할 페이지
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  additionalSitemaps: [
    'https://blog.gunbro.kr/sitemap-0.xml', // 추가 사이트맵 URL
  ],
};
