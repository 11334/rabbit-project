<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view class="search">
        <view class="input">
          <text class="icon-search sk-transparent sk-text-14-2857-720 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories">
        <scroll-view :scroll-y="true" class="primary">
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-869 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-44 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-338 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-474 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-261 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-840 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-694 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-570 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-453 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary">
          <view is="components/XtxSwiper" class="banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                  style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item
                  style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel">
            <view class="title">
              <text class="name sk-transparent sk-text-26-6667-662 sk-text">居家生活用品</text>
              <navigator class="more sk-transparent sk-text-30-0000-315 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none">全部</navigator>
            </view>
            <view class="section">
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-359 sk-text">法国年份雅文邑700毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-21 sk-text">1480.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-484 sk-text">梅乃宿梅酒720毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-994 sk-text">168.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-199 sk-text">多米尼加陈年朗姆酒700毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-443 sk-text">238.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-260 sk-text">全新升级，四川酸辣粉195克*6杯</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-548 sk-text">69.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-576 sk-text">川味牛肉辣椒酱190克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-988 sk-text">38.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-948 sk-text">极光限定 珠光蓝珐琅锅</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-349 sk-text">199.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-494 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-575 sk-text">149.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-926 sk-text">智利老牌名庄，梅洛干红750毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-682 sk-text">98.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-570 sk-text">紫米410克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-434 sk-text">19.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2023/9/28上午9:29:04

在 E:\onemonth\uniapp\ribbits\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-720 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2000rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-869 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-44 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-338 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-474 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-261 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-840 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-694 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-570 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-453 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-26-6667-662 {
  background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
  background-size: 100% 60.0000rpx;
  position: relative !important;
}

.sk-text-30-0000-315 {
  background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
  background-size: 100% 60.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-359 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-21 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-484 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-994 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-199 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-443 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-260 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-548 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-576 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-988 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-948 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-349 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-494 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-575 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-926 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-682 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-434 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
