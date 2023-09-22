<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home';
import CustomNavbar from './componnets/CustomNavbar.vue';
import CategoryPanel from './componnets/CategoryPanel.vue';
import HotPanel from './componnets/HotPanel.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import type { XtxGuessInstance } from '@/types/component';
import PageSkeleton from './componnets/PageSkeleton.vue'
// 空数组在 ts 里面没有指定类型  以后只能是空数组 不能存放任何数据
// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res.result);
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const homeHotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  // console.log('res', res);
  homeHotList.value = res.result

}
// 骨架屏是否显示的标记
const isLoading = ref(false)
// 页面加载的时候调用一次
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(),
  getHomeCategoryData(),
  getHomeHotData()])

  isLoading.value = false
})
// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底自动触发
const onScrolltolower = () => {
  // console.log('滚动触底');
  guessRef.value?.getMore()
}
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 下拉开始动画
  isTriggered.value = true
  // 加载数据
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData()
  // 代码调优
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  guessRef.value?.getMore()
  // 关闭下拉动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" @scrolltolower="onScrolltolower"
    :refresher-triggered="isTriggered" class="scroll-view" scroll-y>
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="homeHotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #F7F7F7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1
}
</style>
