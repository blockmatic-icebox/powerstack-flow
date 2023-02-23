export const clientEnv = {
  debug: process.env.NODE_ENV !== 'production',
  analytics: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '',
    sentry: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  },
  cloudinary: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
    apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
  },
  niftory: {
    clientId: process.env.NEXT_PUBLIC_NIFTORY_CLIENT_ID || '',
  },
}
