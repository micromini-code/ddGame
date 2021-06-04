<template>
	<view class="content">
		<text>当前选中{{num.TabCur}}</text>
		<text>滚动{{num.scrollLeft}}px</text>
	</view>
</template>

<script>
	export default {
		props: {
			num: {
				type: Object,
				default: "#fff"
			}
		},
		data() {
			return {
			}
		},
		onLoad() {},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		background-color: white;
	}
</style>
