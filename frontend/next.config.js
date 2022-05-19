/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakeimg.pl","bear.mypinata.cloud","media.smallbiztrends.com", "miro.medium.com", "d1don5jg7yw08.cloudfront.net", "scontent.flju4-1.fna.fbcdn.net", "ipfs.io", "cloudflare-ipfs.com"],
  },
};

module.exports = nextConfig;
