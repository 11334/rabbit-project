<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home';
import CustomNavbar from './componnets/CustomNavbar.vue';
import CategoryPanel from './componnets/CategoryPanel.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem } from '@/types/home';
// 空数组在 ts 里面没有指定类型  以后只能是空数组 不能存放任何数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res.result);
  bannerList.value = res.result

}
// 页面加载的时候调用一次
onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #F7F7F7;
}
</style>
