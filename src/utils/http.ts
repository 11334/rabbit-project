/**
 * 添加拦截器:
 *   拦截 request 请求
 *   拦截 uploadFile 文件上传
 *
 * TODO:
 *   1. 非 http 开头需拼接地址
 *   2. 请求超时
 *   3. 添加小程序端请求头标识
 *   4. 添加 token 请求头标识
 */

import { useMemberStore } from "@/stores"

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器   拦截逻辑
const httpInterceptor = {
  //拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1.非http开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2、请求超时，默认60s
    options.timeout = 10000
    // console.log(options);
    // 3、添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4、添加token请求头标识
    const memberStore = useMemberStore()
    // profile清除的时候为undefine . 不出token
    const token = memberStore.profile?.token
    if (token) {
      console.log(token);
      options.header.Authorization = token
    }
  }
}
// 绑定拦截器 可以拦截request 和 uploadFile方法
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 请求函数
 * @param  UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */
interface Data<T> {
  code: string
  msg: string
  result: T
}
// 2.2 添加类型。支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  // 1、返回promise对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 2、请求成功
      success(res) {
        // 状态码2XX axios就是这样设计的---> 2xx的状态码都走resolve
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误---> 清理用户信息，跳转到登陆页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          // 小程序跳转页面的方法
          uni.navigateTo({ url: '/pages/login/login' })
          // 标记失败  将res进行回传 在catch中就可以获取到请求失败的响应信息
          // 这样后续通过catch可以捕获到这个被 reject 的 Promise。
          console.log('401401401');

          reject(res)
        } else {
          // 其他错误  -> 根据后端错误信息轻提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误'
          })
          // 标记为失败
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      }

    })
  })
}
