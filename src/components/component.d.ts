// src/types/components.d.ts
import XtxSwiper from './XtxSwiper.vue'
// 为哪个组件提供类型声明 ， 是Volar官方提供的
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
