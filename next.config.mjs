/** @type {import('next').NextConfig} */
// next.config.js


const nextConfig = {
   images:{
    remotePatterns:[
      {
      protocol:"https",
      hostname:"**",
      },
    ],
   },
};

export default nextConfig;
