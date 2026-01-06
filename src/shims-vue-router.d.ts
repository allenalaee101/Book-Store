declare module 'vue-router' {
  import { Component } from 'vue'
  export function createRouter(options: any): any
  export function createWebHistory(base?: string): any
  export function useRouter(base?: string): any
  export function RouteLocationNormalized (base?:string) : any
  export function NavigationGuardNext (base?: any) : any
  export type RouteRecordRaw = any
  export default any
}
RouteLocationNormalized, NavigationGuardNext