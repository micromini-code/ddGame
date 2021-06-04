<template>
	<view class="content">
		<!-- 自定义顶部导航 -->
		<u-navbar class="self-nav" :is-back="false" title-color="white" :background="{background: 'linear-gradient(#1ab94f,#68b92a)'}"
		 title="dd开黑">
			<view class="barIcon">
				<view class="emailBlock">
					<u-icon name="email" color="#fff" size="48"></u-icon>
					<view class="cu-tag badge" v-if="msgNum!=0">
						<block v-if="msgNum!=1">{{msgNum>99?'99+':msgNum}}</block>
					</view>
				</view>
				<u-icon name="search" color="#fff" size="48"></u-icon>
				<!-- <view class="cuIcon-mail mailIcon">
					<view class="cu-tag badge" v-if="msgNum!=0">
						<block v-if="msgNum!=1">{{msgNum>99?'99+':msgNum}}</block>
					</view>
				</view> -->
			</view>
			<!-- <text v-show="current===0" @click="popShowHandle" class="iconfont icon-shaixuan1"></text> -->
		</u-navbar>
		<swiper class="banners round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in banners" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol">
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<u-grid :col="2">
			<u-grid-item>
				<u-icon name="photo" :size="46"></u-icon>
				<view class="grid-text">救火队长</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="lock" :size="46"></u-icon>
				<view class="grid-text">热门商家</view>
			</u-grid-item>
		</u-grid>
		<!-- 玩法推荐 -->
		<u-line color="green" />
		<view class="recommendPlay">
			<u-section title="玩法推荐" sub-title="查看更多" lineColor="green" @click="naviToArticleList"></u-section>
		</view>
		<view class="playCards">
			<view class="cu-card case" :class="isCard?'':''" @click="naviToArticle" v-for="(item,index) in [1,2,3]">
				<view class="cu-item shadow">
					<view class="image">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="widthFix"></image>
						<view class="cu-tag bg-blue">狼人杀</view>
						<view class="cu-bar bg-shadeBottom myPlayBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜11</text>
							<view class="text-gray text-sm flex justify-between align-center">
								十天前
								<view class="text-gray">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
									<text class="cuIcon-messagefill margin-lr-xs"></text> 30
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 剧本推荐 -->
		<u-line color="green" style="padding-top: 15upx;" />
		<view class="recommendPlay">
			<u-section title="剧本推荐" sub-title="查看更多" lineColor="green" @click="naviToGameList"></u-section>
		</view>
		<view class="jubenCards">
			<view class="cu-card article" :class="isCard?'':''" v-for="(item) in 2">
				<view class="cu-item shadow">
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
						<view class="desc">
							<view class="gametitle"> 无意者 烈火焚身</view>
							<view class="gametime">2020-10-17</view>
							<view>
								<view class="cu-tag bg-red light sm round">正义天使</view>
								<view class="cu-tag bg-green light sm round">史诗</view>
							</view>
							<view class="text-gray">
								<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
								<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
								<text class="cuIcon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
					</view>
					<!-- <view class="image">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="widthFix"></image>
						<view class="cu-tag bg-blue">史诗</view>
						<view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="content flex-sub">
								<view class="text-grey">正义天使 凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									十天前
									<view class="text-gray text-sm">
										<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
										<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
										<text class="cuIcon-messagefill margin-lr-xs"></text> 30
									</view>
								</view>
							</view>
						</view> -->
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard: true,
				msgNum: 13123,
				banners: [{
					id: 0,
					url: '../../static/img/banner/banner-wolf.jpg',
					type: 'image'
				}, {
					id: 1,
					url: '../../static/img/banner/banner-awalon.jpg',
					type: 'image'
				}, {
					id: 2,
					url: '../../static/img/banner/banner-plane.jpg',
					type: 'image'
				}, {
					id: 3,
					url: '../../static/img/banner/banner-sanguo.png',
					type: 'image'
				}],
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}],
				modalName: null,
				gridCol: 5,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			}
		},
		onLoad() {
			this.getBannerList()
		},
		methods: {
			// 
			naviToArticleList() {
				uni.navigateTo({
					url: "/pages/index/playRecommend/index"
				})
			},
			naviToArticle() {
				uni.navigateTo({
					url: "/pages/index/playRecommend/recomendDetail"
				})
			},
			// 获取banner列表
			getBannerList(){
				this.$lsxmApi.getBannerList().then((res) => {
				        console.log(res)
				})
			},
		}
	}
</script>

<style lang="scss">
	.content {
		// background:white;
	}

	.barIcon {
		width: 35%;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-around;
		position: relative;
		

		.emailBlock {
			// position: relative;
		}
		.cu-tag.badge {
			// position: static;
			right: 45%;
		}
	}

	.playCards {
		>view {
			background-color: white;
			border-radius: 15rpx !important;
			margin: 15rpx;
		}
	}

	.jubenCards {
		>view {
			background-color: white;
			border-radius: 15rpx !important;
			margin: 15rpx;

			.cu-item {
				padding: 0px !important;

				.content {
					padding: 0px !important;

					.text-gray {
						font-size: 22rpx;
					}
				}
			}

			.gametitle {
				font-size: 32rpx;
			}

			.gametime {
				color: #909399;
				font-weight: lighter;
			}
		}
	}

	.banners,
	.banners-item {
		width: 100%;
		height: 300rpx;
	}

	.banners image {
		height: 100%;
		width: 100%;
	}

	.recommendPlay {
		padding: 20rpx 15rpx 0;
		// background-color: white;
	}

	.myPlayBottom {
		.text-cut {
			width: 50%;
		}
	}

	// .scriptRem{
	// 	.content.flex-sub{
	// 		// width:85% !important;
	// 		left:0 !important;
	// 		margin: 0 60upx;
	// 	}
	// }
</style>
