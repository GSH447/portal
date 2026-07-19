/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'standalone',
  
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'discovertemplate.com'
            },
            
            {
              protocol: 'https',
              hostname: 'flagcdn.com'
            },

            {
              protocol: 'https',
              hostname: 'upload.wikimedia.org'
            }
          ],
    }
};



module.exports = nextConfig;
// module.exports = {
//     output: 'export',
// };
  




