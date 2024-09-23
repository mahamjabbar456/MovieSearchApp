/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns : [
           {
            protocol : "https",
           hostname : "m.media-amazon.com",
           port : "",
           },
        ],
    },
    eslint : {
        ignoreDuringBuilds : true,
    }
};

export default nextConfig;
