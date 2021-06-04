<template>
	<view class="content">
		<!-- active-color="green" -->
		<u-tabs-swiper :current="current" ref="tabs" :list="list" :is-scroll="false" @change="change"></u-tabs-swiper>
		<view class="tabContent">
			
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
				listContent:[],
				mock:{
					
				}
			}
		},
		onLoad(){
			uni.setNavigationBarTitle({
			    title: '推荐详情'
			});
			// this.$set(this.$data,"listContent",this.mock.mySaveMock);
		},
		methods: {
			change(index) {
				console.log(index)
				this.current = index;
			},
		}
	}
</script>

<style scoped lang="scss">
</style>
