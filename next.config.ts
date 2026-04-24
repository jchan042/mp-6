/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
};

module.exports = nextConfig;