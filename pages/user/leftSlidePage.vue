<template>
	<view class="content">
		<!-- 侧边滑动菜单 -->
		<view class="page-slidebar">
			<view class="page-content">
				<view class="userinfo">
					<text>hhhhh</text>
					<!-- <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 点击获取头像昵称
					</button>
					<block wx:else>
						<image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
						<text class="userinfo-nickname">{{userInfo.nickName}}</text>
					</block> -->
				</view>
				<view class="account-info ">
					<view class="account-info-item">用户：小狐</view>
					<view class="account-info-item">账号：778899</view>
					<view class="account-info-item">角色：安其拉</view>
					<view class="account-info-item">版本：v1.0</view>
				</view>
				<view>
					<view class='quit-view'>
						<!-- <button class='quit-btn' bindtap='quit'>退出登录</button> -->
					</view>
				</view>
			</view>
		</view>
		<!-- 主页内容 -->
		<view @touchmove="tap_drag" @touchend="tap_end" @touchstart="tap_start" class="page-top" :class="open ? 'c-state cover' : '' ">
			<!-- <view class="usermotto">
				<text class="user-motto">{{motto}}</text> 
			</view> -->
			<text>223344</text>
		</view>
		<!-- 添加侧拉悬浮按钮 -->
		<view @tap="openSlider" class="floatbutton">
			<image class="floatbuttonImg" :class="open ? 'c-button-open' : ''" src="../../static/img/table-game-logo/add.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				open: false,
				mark: 0,
				newmark: 0
			}
		},
		onLoad() {

		},
		methods: {
			openSlider(e) {
				this.$set(this.$data, 'open', !this.open)
			},
			tap_start(e) {
				// touchstart事件
				// 把手指触摸屏幕的那一个点的 x 轴坐标赋值给 mark 和 newmark
				this.mark = this.newmark = e.touches[0].pageX;
			},
			tap_drag(e) {
				// touchmove事件
				this.newmark = e.touches[0].pageX;
				// 手指从左向右移动
				if (this.mark < this.newmark) {
					this.istoright = true;
				}
				// 手指从右向左移动
				if (this.mark > this.newmark) {
					this.istoright = false;
				}
				this.mark = this.newmark;
			},
			tap_end(e) {
				// touchend事件
				this.mark = 0;
				this.newmark = 0;
				// 通过改变 opne 的值，让主页加上滑动的样式
				this.$set(this.$data, 'open', !!this.istoright)
			}
		}
	}
</script>

<style lang="scss">
	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.userinfo-avatar {
		width: 128rpx;
		height: 128rpx;
		margin: 20rpx;
		border-radius: 50%;
	}

	.userinfo-nickname {
		color: #aaa;
	}

	.account-info {
		margin-top: 50rpx;
	}

	.account-info-item {
		display: flex;
		align-items: center;
		height: 54px;
		margin-left: 10rpx;
		border-bottom: 1px solid #eee;
	}


	/* 侧边栏样式 */
	.page-slidebar {
		height: 100%;
		width: 65%;
		position: fixed;
		background-color: white;
		z-index: 0;
	}

	/* 主页样式 */
	.page-top {
		height: 100%;
		position: fixed;
		width: 100%;
		background-color: white;
		z-index: 0;
		transition: All 0.4s ease;
		-webkit-transition: All 0.4s ease;
	}

	/* 控制侧边栏的内容距离顶部的距离 */
	.page-content {
		padding-top: 60rpx;
	}

	/* 当屏幕向左滑动，出现侧边栏的时候，主页的动画样式 */
	/* scale：取值范围 0~1 ，表示屏幕大小是原来的百分之几，可以自己修改成 0.8 试下*/
	/* translate(60%,0%) 表示向左滑动的时候，侧边栏占用平时的宽度为 60%   */
	.c-state {
		transform: rotate(0deg) scale(1) translate(65%, 0%);
		-webkit-transform: rotate(0deg) scale(1) translate(65%, 0%);
	}

	.floatbutton {
		position: fixed;
		width: 100rpx;
		height: 100rpx;
		bottom: 140rpx;
		left: 40rpx;
		z-index: 9999;
			image {
				width: 100%;
				height: 100%;
			}
	}

	.c-button-open {
		transform: rotate(180deg) scale(1) translate(65%, 0%);
		-webkit-transform: rotate(180deg) scale(1) translate(65%, 0%);
		transition-duration: 0.5s;
		-webkit-transition-duration: 0.5s;
		left: 60%;
	}

	/* 遮盖层样式 */
	.cover {
		width: 100%;
		height: 100%;
		background-color: gray;
		opacity: 0;
		z-index: 9000;
	}

	.quit-view {
		height: 5%;
		width: 65%;
	}

	.quit-btn {
		position: fixed;
		bottom: 5rpx;
		z-index: 999;
		color: #fff;
		width: 65%;
		border-radius: 5rpx;
		background-color: #064acb;
	}
</style>
