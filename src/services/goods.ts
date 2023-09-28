import { http } from './../utils/http';
/**
 * 商品详情
 * @param id 商品id
 */
export const getGoodsByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: '/goods',
    // API 接收的参数
    data: {
      id
    }
  })
}