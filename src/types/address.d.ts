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

