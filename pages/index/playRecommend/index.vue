<template>
	<view class="content">
		<my-search @getKeyword="getKeyword" placeholder="请输入关键词" />
		<!-- active-color="green" -->
		<u-tabs-swiper :current="current" ref="tabs" :list="list" :is-scroll="false" @change="change"></u-tabs-swiper>
		<view class="tabContent">
			<view class="cu-card case" @click="naviToArticle" v-for="(item,index) in listContent">
				<view class="cu-item shadow">
					<view class="image">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="widthFix"></image>
						<view class="cu-tag bg-blue">{{item.tag}}</view>
						<view class="cu-bar bg-shadeBottom myPlayBottom flex flex-direction align-start justify-around"> <text class="text-cut">{{item.intro}}</text>
							<view class="text-gray text-sm flex justify-around align-center">
								{{item.updateTime}}
								<view class="text-gray">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> {{item.attention}}
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> {{item.appreciate}}
									<text class="cuIcon-messagefill margin-lr-xs"></text> {{item.message}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mySearch from "../../../components/mySearch.vue";
	export default {
		components: {
			mySearch
		},
		props: {

		},
		data() {
			return {
				current: 0,
				list: [{
						name: '我的收藏'
					},
					{
						name: '玩法推荐'
					},
					// {
					// 	name: '推荐内容',
					// 	count: 5
					// },
				],
				listContent:[],
				mock:{
					mySaveMock: [{
						tag: "狼人杀",
						attention: 10,
						appreciate: 3,
						message: 9,
						intro: "我是平民",
						imgUrl:'',
						updateTime:"2021-2-3"
					}, {
						tag: "我是谜",
						attention: 22,
						appreciate: 8,
						message: 1,
						intro: "***是凶手，我怀疑他杀了人111111111111111111111111111111111111",
						imgUrl:'',
						updateTime:"2021-4-23"
					}],
					recommendsMock: [{
						tag: "斗地主",
						attention: 1233,
						appreciate: 12,
						message: 0,
						intro: "叫地主",
						imgUrl:'',
						updateTime:"2021-3-3"
					}, {
						tag: "五子棋",
						attention: 123131,
						appreciate: 8,
						message: 1,
						intro: "横看成岭侧成峰",
						imgUrl:'',
						updateTime:"2021-2-22"
					}],
				}
			}
		},
		onLoad(){
			this.$set(this.$data,"listContent",this.mock.mySaveMock)
		},
		methods: {
			getKeyword(keyword) {
				console.log(keyword)
			},
			change(index) {
				this.current = index;
				this.$set(this.$data,"listContent",index===0?this.mock.mySaveMock:this.mock.recommendsMock)
			},
			naviToArticle() {
				uni.navigateTo({
					url: "./recomendDetail"
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.tabContent {
		background-color: white;
		margin: 15rpx;
		border-radius: 15rpx;
	}

	.myPlayBottom {
		.text-cut {
			width: 100%;
		}
	}
</style>
