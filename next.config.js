/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.skincaretalk.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "my.clevelandclinic.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
