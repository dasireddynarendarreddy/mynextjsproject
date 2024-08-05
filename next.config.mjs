/** @type {import('next').NextConfig} */
// next.config.js


const nextConfig = {
 reactStrictMode: false,
   images:{
    remotePatterns:[
      {
      protocol:"https",
      hostname:"**",
      },
    ],
    domains: ['cdn-tp2.mozu.com']
   },
};

export default nextConfig;
