import { ConfigInterface } from './types'
declare function cacheGet(key: string): any
declare function cacheSet(key: string, value: any): Map<any, any>
declare function cacheClear(): void
declare const CONCURRENT_PROMISES: {}
declare const CONCURRENT_PROMISES_TS: {}
declare const FOCUS_REVALIDATORS: {}
declare const CACHE_REVALIDATORS: {}
declare const MUTATION_TS: {}
declare const defaultConfig: ConfigInterface
export {
  CONCURRENT_PROMISES,
  CONCURRENT_PROMISES_TS,
  FOCUS_REVALIDATORS,
  CACHE_REVALIDATORS,
  MUTATION_TS,
  cacheGet,
  cacheSet,
  cacheClear
}
export default defaultConfig
