export const featureFlags = {
  someFeature: Boolean(process.env.NEXT_PUBLIC_FEATURE_WEBGL) || false,
}
