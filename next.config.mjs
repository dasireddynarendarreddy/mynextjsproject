/** @type {import('next').NextConfig} */
// next.config.js


const nextConfig = {
 reactStrictMode: true,
   images:{
    remotePatterns:[
      {
      protocol:"https",
      hostname:"**",
      },
    ],
    domains: ['cdn-tp2.mozu.com']
   },
   async headers(){
       return[
        {
          source:'api/:path*',
        
        headers:[
          {key:'Access-Control-Allow-Credentials',value:'true'},
          {key:'Access-Control-Allow-Origin',value:'*'},
          {key:'Access-Control-Allow-Methods',
            value:'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key:'Access-Control-Allow-Headers',
            value:'X-CSRF-Token,X-Requested-With,Accept,Accept-version,Content-Length,Content-MD5,Content-Type,Date'
          },
        ]
          },
        ]
       
      }
   
};

export default nextConfig;
