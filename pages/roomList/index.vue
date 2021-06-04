<template>
	<view class="content">
		<my-search @getKeyword="getKeyword" placeholder="请输入关键词"/>	
		<my-screen/>
		<view class="">
			<scroll-view scroll-x class="bg-gradual-green nav text-center">
				<view class="cu-item" :class="index==TabCur?'text-white cur':''" v-for="(item,index) in 10" :key="index" @tap="tabSelect" :data-id="index">
					Tab{{index}}
				</view>
			</scroll-view>
			<view class="">
				<tab-content :num="{TabCur,scrollLeft}"/>
			</view>
		</view>
	</view>
</template>

<script>
	import mySearch from "../../components/mySearch.vue";
	import myScreen from "../../components/myScreen.vue";
	import tabContent from "./tabContent.vue";
	export default {
		components: {
			mySearch,myScreen,tabContent
		},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				mockData:"辗转风干是你的泪啊"
			}
		},
		onLoad() {},
		methods: {
			getKeyword(keyword){
				console.log(keyword)
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	.content {
		background-color: white;
	}
</style>
