/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_CONNECTION: process.env.NEXT_PUBLIC_BACKEND_CONNECTION,
  },
}

export default nextConfig
