<template>
	<view class="content">
		<view class="mySearch">
			<u-search :placeholder="placeholder" v-model="keyword" shape="round" :clearabled="true" border-color="#8cb92b"
			 search-icon-color="" :show-action="false"></u-search>
			<button class="cu-btn round bg-olive" @click="onSearch">搜索</button>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: String,
				default: '请输入关键词'
			}
		},
		data() {
			return {
				keyword: '',
			}
		},
		onLoad() {},
		methods: {
			onSearch() {
				this.$emit("getKeyword", this.keyword)
			},
		}
	}
</script>

<style>
	.content {
		background-color: white;
		height: 84rpx;
	}

	.mySearch {
		padding: 10rpx 15rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
