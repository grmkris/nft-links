/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.lorem.space',
      'fakeimg.pl',
      'bear.mypinata.cloud',
      'media.smallbiztrends.com',
      'miro.medium.com',
      'd1don5jg7yw08.cloudfront.net',
      'scontent.flju4-1.fna.fbcdn.net',
      'ipfs.io',
      'cloudflare-ipfs.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
