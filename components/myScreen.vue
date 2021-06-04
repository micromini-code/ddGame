<template>
	<view class="content">
		<view class="myScreen">
			<u-form :model="form" ref="uForm">
				<!-- 下拉 -->
			<!-- 	<u-form-item label="性别">
					<u-input v-model="form.sex" type="select" :border="false" @click="show = true" />
					<u-action-sheet :list="selectList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
				</u-form-item> -->
				<!-- 单选 -->
				<u-form-item label="人数">
					<u-radio-group v-model="form.numRadio">
						<u-radio v-for="(item, index) in numList" :key="index" :name="item.name" :disabled="item.disabled">
							{{ item.name }}
						</u-radio>
					</u-radio-group>
				</u-form-item>

				<u-form-item label="难度">
					<u-radio-group v-model="form.easyHardRadio">
						<u-radio v-for="(item, index) in easyHard" :key="index" :name="item.name" :disabled="item.disabled">
							{{ item.name }}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<!-- 多选 -->
				<u-form-item label="主题">
					<u-checkbox-group>
						<u-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">
							{{ item.name }}
						</u-checkbox>
					</u-checkbox-group>
				</u-form-item>
			</u-form>
			<u-button @click="submit" class="bg-gradual-green" :border="false" :hair-line="false" :custom-style="{border:'none'}">筛选</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					sex: '',
					numRadio: '不限',
					easyHardRadio: '简单'
				},
				show: false,
				selectList: [{
						text: '男',
						value:'1'
					},
					{
						text: '女',
						value:'0'
					},
					{
						text: '保密',
						value:'all'
					}
				],
				checkboxList: [{
						name: '不限',
						value:'all',
						checked: true,
						disabled: false
					}, {
						name: '苹果',
						value:'apple',
						checked: false,
						disabled: false
					},
					{
						name: '雪梨',
						value:'peer',
						checked: false,
						disabled: false
					},
					{
						name: '柠檬',
						value:'lemon',
						checked: false,
						disabled: false
					}
				],
				numList: [{
						name: '不限',
						value:'all',
						disabled: false
					},
					{
						name: '1人',
						value:'one',
						disabled: false
					}, {
						name: '2人',
						value:'two',
						disabled: false
					}, {
						name: '3人',
						value:'three',
						disabled: false
					}
				],
				easyHard: [{
						name: '不限',
						value:'all',
						disabled: false
					},
					{
						name: '简单',
						value:'easy',
						disabled: false
					}, {
						name: '中等',
						value:'middle',
						disabled: false
					}, {
						name: '困难',
						value:'hard',
						disabled: false
					}
				],
			};
		},
		onLoad() {},
		methods: {
			onSearch() {
				this.$emit("getKeyword", this.keyword)
			},
			actionSheetCallback(index) {
				this.form.sex = this.selectList[index].text;
			},
			submit() {
				console.log(112233)
				console.log(this.form);
				this.$refs.uForm.validate(valid => {
					console.log(valid)
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style>
	.content {
		background-color: white;
		margin: 5rpx 30rpx;
	}
</style>
