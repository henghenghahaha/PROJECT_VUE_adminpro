<template>
	<!-- <lay-button @click="change(1)" style='height: 20px;'>11111</lay-button>
	<lay-button @click="change(2)" style='height: 20px;'>2222(1)</lay-button> -->
	<lay-form :model="model" style='width: 80%;margin-left: 100px;'>
		<lay-form-item label="账户" prop="username">
			<lay-input v-model="model.username"></lay-input>
		</lay-form-item>

		<lay-form-item label="密码" prop="password">
			<lay-input v-model="model.password" type="password"></lay-input>
		</lay-form-item>

		<lay-form-item>
			<lay-button @click="submitClick">提交</lay-button>
		</lay-form-item>
	</lay-form>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		layer
	} from '@layui/layer-vue'
	import {
		useRouter
	} from 'vue-router';

	const router = useRouter();


	const model = reactive({
		username: "admin",
		password: "",
	})

	const submitClick = function() {
		if (model.username == 'admin' && model.password == 'nzh278799') {
			router.push({
				path: '/addInfo',
				query: {
					userId: model.username
				}
			})
		} else {
			alert('抱歉用户名或密码输入错误，请重新输入');
			model.password = '';
		}
	};
</script>

<style>
</style>
