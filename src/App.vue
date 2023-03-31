<template>
	<!-- <lay-tab v-model="current">
	    <lay-tab-item title="添加" v-if="true" id="1"><addInfo/></lay-tab-item>
	    <lay-tab-item title="修改" id="2"><alterInfo/></lay-tab-item>
	 </lay-tab> -->
<!-- 	 <LoginPage /> -->
	<router-view class="r_view" :key="new Date().getTime()" /> 
</template>

<script setup>
// import addInfo from './components/addInfo.vue'
// import alterInfo from './components/alterInfo.vue'
// import LoginPage from './components/LoginPage.vue'
import { ref, reactive } from 'vue'
import {layer} from '@layui/layer-vue'
import axios from 'axios'
//axios.defaults.baseURL = 'http://127.0.0.1:5000';
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

  
      const current = ref("1")
	  
  
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100vw;
  min-height: 100vh;
}
.main-page{
	max-width: 1000px;
	min-width: 800px;
	margin: 0px auto;
}
</style>
