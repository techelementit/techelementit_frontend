/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // IT WILL NEED FOR GENERATING STATIC PAGE
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
