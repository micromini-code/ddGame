import lsxmRequest from './config.js'

export default{

  apis:{
		// (废弃)微信授权code对应sessionKey 和openid
		dropCode(data){
			return lsxmRequest.get('/user/auth', data)
		},
		// 微信授权code换取游客sessionId
		getSessionId(data){
			return lsxmRequest.post('/user/auth2', data)
		},
		// 
		getUserInfo(data){
			return lsxmRequest.get('/user/info', data)
		},
		// 更新用户信息--提交信息
		updateUserInfo(data){
			return lsxmRequest.put('/user/info', data)
		},
		// // （废弃）登陆接口
		// login(data){
		// 	return lsxmRequest.post('/user/login', data)
		// },
		// 登陆接口
		login(data){
			return lsxmRequest.post('/user/login2', data)
		},
		// 电话登录登陆接口
		phoneLogin(data){
			return lsxmRequest.post('/user/phoneLogin', data)
		},
}