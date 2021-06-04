<template>
	<view class="content">
		<view class="titleSty flex flex-direction">
			<text class="titleName">狼人杀--笑到最后的玩家</text>
			<text class="titleTime">十五天前</text>
			<text class="titleBy">作者：小狐不是狐</text>
		</view>
		<!-- 视频区域 -->
		<view class="introViedo">
			<!-- 预留视频播放区 -->
			<image src="../../../static/timg.jpg" mode=""></image>
		</view>
		<view class="introWords">
			介绍文字：【俞敏洪称年轻人不能躺平：要激起奋斗精神，不能佛系，要不国家未来靠谁？】在第四届全国青年企业家峰会上，新东方董事长俞敏洪谈到“年轻人躺平的问题”，俞敏洪称，董大姐（董明珠）和他聊天，说他们这一代企业家要激起年轻人奋斗精神，不能光鼓励年轻人天天打游戏、贷款消费，而是为中国创造财富。要讲讲奋斗精神。她这点说的是很对的。

俞敏洪称，现在年轻人躺平了生活，太佛系的话，国家的未来靠谁做？
		</view>
		<view class="text-gray flex justify-end introBottom">
			<view class="">
				<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
			</view>
			<view class="">
				<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
			</view>
			<view class="">
				<text class="cuIcon-messagefill margin-lr-xs"></text> 30
			</view>
		</view>
	</view>
</template>

<script>
	// import mySearch from "../../../components/mySearch.vue";
	export default {
		components: {
			// mySearch
		},
		props: {

		},
		data() {
			return {
				current: 0,
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
				this.current = index;
			},
		}
	}
</script>

<style scoped lang="scss">
	.content {
		background-color: #fff;
		padding: 20rpx;
		box-sizing: border-box;
		border-radius: 20rpx;
	}

	.titleSty {
		font-size: 40rpx;
		font-weight: 800;
		padding-bottom: 10rpx;

		.titleName {
			padding-bottom: 15rpx;
		}

		.titleTime {
			font-size: 30rpx;
			color: #a8a8a8;
			font-weight: normal;
			padding-bottom: 5rpx;
		}

		.titleBy {
			color: #1CBBB4;
			font-size: 34rpx;
			font-weight: normal;
		}
	}

	.introViedo {
		width: 100%;
		height: 400rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.introWords {
		padding: 15rpx 5rpx;
		text-indent: 30rpx;
	}
	
	.introBottom{
		margin-right: 15rpx;
		}
</style>
