import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.etsystatic.com',
      },
      {
        protocol: 'https',
        hostname: 'frontstreet.art',
      },
      {
        protocol: 'https',
        hostname: 'www.al-hadaya.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wallmur.com',
      },
      {
        protocol: 'https',
        hostname: 'i.etsystatic.com',
      },
      {
        protocol: 'https',
        hostname: 'alisketchez.pk',
      },
      {
        protocol: 'https',
        hostname: 'framer.pk',
      },
      {
        protocol: 'https',
        hostname: 'img.drz.lazcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'image.made-in-china.com',
      },
      {
        protocol: 'https',
        hostname: 'images.openai.com',
      },
    ],
  },
};

export default nextConfig;
