import lsxmRequest from '../service/config.js'

export default{

  apis:{
		// ===subscribe
		// 
		getAllSubs(data){
			return lsxmRequest.get('/subscribe/game/allSubs', data)
		},
		// 
		getAllMySubs(data){
			return lsxmRequest.get('/subscribe/mySubs', data)
		},
		// 
		subscribeTopic(data){
			return lsxmRequest.post('/subscribe/subs', data)
		},
		// 
		deleteMySub(data){
			return lsxmRequest.delete('/subscribe/subs', data)
		},
		
		// ===feeds
		// 
		getUserFeeds(data){
			return lsxmRequest.get('/user-feed/info', data)
		},
		// 
		postNewUserFeeds(data){
			return lsxmRequest.post('/user-feed/info', data)
		},
		// 
		invalidUserFeeds(data){
			return lsxmRequest.delete('/user-feed/info', data)
		},
		
		// ===ddevent control
		// 
		getDdEvent(data){
			return lsxmRequest.get('/dd-event/events', data)
		},
		// 
		getHistoryDdEvent(data){
			return lsxmRequest.get('/dd-event/history/events', data)
		},
		// 
		postNewDdEvent(data){
			return lsxmRequest.post('/dd-event/info', data)
		},
		// 
		getDdEvent(data){
			const {eventId}=data
			return lsxmRequest.get(`/dd-event/${eventId}`)
		},
		// 
		deleteDdEvent(data){
			const {eventId}=data
			return lsxmRequest.delete(`/dd-event/${eventId}`)
		},
		
		// === User Info Contro
		//
		createUserPortrait(data){
			return lsxmRequest.post('/user-info/portrait', data)
		},
		
		
		// === banners
		//AAA获取当前有效的banners列表
		getBannerList(data){
			return lsxmRequest.get('/banner/banners', data)
		},	
		
		// ===  Dota Statistic C
		//
		basicUserInfo(data){
			return lsxmRequest.get('/statistic/dota/userBasicInfo', data)
		},
		
		// === Test Controller
		//
		count(data){
			return lsxmRequest.get('/count', data)
		},
		//
		test(data){
			return lsxmRequest.get('/test', data)
		},
		//
		testEx(data){
			return lsxmRequest.get('/testEx', data)
		},
		
		// ===  桌游百科API
		//BBB获取桌游评论列表
		getTableComments(data){
			const {tableGameId}=data
			return lsxmRequest.get(`/tableGame/comments/${tableGameId}`)
		},
		//AAA获取 首页 剧本推荐列表
		juben(data){
			return lsxmRequest.get('/tableGame/home/juben/list', data)
		},
		//
		testEx(data){
			return lsxmRequest.get('/testEx', data)
		},
		
},
}