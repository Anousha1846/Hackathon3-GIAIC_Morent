/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com',
          pathname: '/**',
        },
      ],
    
    },

    env: {
      GITHUB_ID: process.env.GITHUB_ID,
      GITHUB_SECRET: process.env.GITHUB_SECRET,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
  };
  
  export default nextConfig;
  