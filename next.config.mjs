// https://nextjs.org/docs/app/api-reference/next-config-js

/** @type {import('next').NextConfig} */
import path from 'path';

export default {
  sassOptions: {
    includePaths: [path.resolve(process.cwd(), 'css')],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Feature-Policy',
            value: "microphone 'none'; geolocation 'none'",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1',
          },
        ],
      },
    ];
  },
};
