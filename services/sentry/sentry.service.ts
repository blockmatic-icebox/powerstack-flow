import { logger } from '~/lib/logger'

export async function sentry(params: any) {
  logger.log('sentry log', params)
}
