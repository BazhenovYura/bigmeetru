/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  //output: 'export',  // <-- Добавьте эту строку
}

export default nextConfig
