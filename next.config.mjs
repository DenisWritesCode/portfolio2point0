/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  // Enable React Strict Mode to help with debugging and catching potential issues
  reactStrictMode: true,

  // Set up modern JavaScript transpiling and bundling for improved performance
  swcMinify: true,

  // Optionally, to handle third-party attributes that might cause extra attributes on the client
  // If you're deploying the app and want to ignore such warnings, use the following setting
  eslint: {
    ignoreDuringBuilds: true, // Useful if ESLint warnings are causing build issues
  },

  // // Add internationalization (optional)
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
