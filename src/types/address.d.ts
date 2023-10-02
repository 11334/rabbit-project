// 添加收获地址：请求参数
export type AddressParams = {
  // 收货人姓名
  receiver: string,
  // 联系方式
  contact: string,
  // 所在省份编码
  provinceCode: string,
  // 所在城市编码
  cityCode: string,
  // 所在区 / 县编码
  countyCode: string,
  // 详细地址
  address: string,
  // 默认地址  1 为 是 0 为 否
  isDefault: integer,
}

/** 收货地址项   交叉类型合并*/
export type AddressItem = AddressParams & {
  /** 收货地址 id */
  id: string
  /** 省市区 */
  fullLocation: string
}

