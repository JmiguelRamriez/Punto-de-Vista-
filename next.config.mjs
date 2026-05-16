/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tec.mx",
      },
      {
        protocol: "https",
        hostname: "assets.isu.pub",
      },
    ],
  },
}

export default nextConfig
