/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tcm-learner.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/studio/*'],
  alternateRefs: [
    { href: 'https://tcm-learner.vercel.app/zh', hreflang: 'zh' },
    { href: 'https://tcm-learner.vercel.app/en', hreflang: 'en' },
  ]
};
