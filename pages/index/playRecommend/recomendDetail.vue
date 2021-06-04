<template>
	<view class="content">
		<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false"
		 swiperWidth="750" scroll-with-animation></u-tabs-swiper>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view  scroll-y style="height: 100%;width: 100%;padding: 0 15rpx;" @scrolltolower="reachBottom">
					<intro-view />
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;padding: 0 15rpx;" @scrolltolower="reachBottom">
					<play-comments />
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import introView from "./introView.vue";
	import playComments from "@/pages/index/playRecommend/comment/playComments.vue";
	export default {
		components: {
			introView,
			playComments
		},
		props: {

		},
		data() {
			return {
				current: 0,
				swiperCurrent:0,
				dx: 0,
				list: [{
						name: '详情简介'
					},
					{
						name: '游戏评论'
					},
					// {
					// 	name: '推荐内容',
					// 	count: 5
					// },
				],
				listContent: [],
				mock: {

				}
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '推荐详情'
			});
			// this.$set(this.$data,"listContent",this.mock.mySaveMock);
		},
		methods: {
			change(index) {
				this.swiperCurrent = index;
				this.current = index;
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail: { current } }) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	}
</script>

<style scoped lang="scss">
	// .content{
	// 	background-color: #fff;
	// }
	.content {
		.swiper-box{
		margin-top: 15rpx;
		}
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}
	.swiper-box {
		flex: 1;
	}
	.swiper-item {
		height: 100%;
	}
</style>
