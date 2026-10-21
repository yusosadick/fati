/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // Lets the dev server be opened at 127.0.0.1 as well as localhost (HMR + client JS).
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
