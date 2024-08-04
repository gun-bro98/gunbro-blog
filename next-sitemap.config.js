/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://blog.gunbro.kr',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/500'],
  // 페이지 필터링을 통해 불필요한 태그를 제거하는 방법
  transform: async (config, path) => {
    return {
      loc: path, // 현재 경로
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ? config.alternateRefs : [],
    };
  },
};
