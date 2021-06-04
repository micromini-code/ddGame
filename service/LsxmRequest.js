const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

class LsxmRequest {
	//默认配置
	[config] = {
		baseURL: '',
		header: {
			'content-type': 'application/json'
		},
		method: 'GET',
		dataType: 'json',
		responseType: 'text'
	}
	//拦截器
	interceptors = {
		request: (func) => {
			if (func) {
				LsxmRequest[requestBefore] = func
			} else {
				LsxmRequest[requestBefore] = (request) => request
			}
		},
		response: (func) => {
			if (func) {
				LsxmRequest[requestAfter] = func
			} else {
				LsxmRequest[requestAfter] = (response) => response
			}
		}
	}

	static[requestBefore](config) {
		return config
	}

	static[requestAfter](response) {
		return response
	}

	static[isCompleteURL](url) {
		return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
	}

	request(options = {}) {
		options.baseURL = options.baseURL || this[config].baseURL
		options.dataType = options.dataType || this[config].dataType
		options.url = LsxmRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
		options.data = options.data
		options.header = { ...options.header,
			...this[config].header
		}
		options.method = options.method || this[config].method

		options = { ...options,
			...LsxmRequest[requestBefore](options)
		}

		return new Promise((resolve, reject) => {
			options.success = function(res) {
				resolve(LsxmRequest[requestAfter](res))
			}
			options.fail = function(err) {
				reject(LsxmRequest[requestAfter](err))
			}
			uni.request(options)
		})
	}

	get(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	}

	post(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	}
	
	put(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	}
	
	delete(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
	
	setConfig (func) {
	        this[config] = func(this[config])
	}
	getConfig() {
	    return this[config];
	}
	
	install(Vue) {
	   Vue.mixin({
	       beforeCreate: function () 
	       {
	           if (this.$options.apis) 
	           {
	               console.log(this.$options.apis)
	               Vue._lsxmRequest = this.$options.apis
	           }
	       }
	   })
	   
	   Object.defineProperty(Vue.prototype, '$lsxmApi', {
	       get: function () 
	       {
	           return Vue._lsxmRequest.apis
	       }
	   })
	}
}

// LsxmRequest.install = function (Vue) {
// 	   Vue.mixin({
// 	       beforeCreate: function () 
// 	       {
// 	           if (this.$options.apis) 
// 	           {
// 	               console.log(this.$options.apis)
// 	               Vue._lsxmRequest = this.$options.apis
// 	           }
// 	       }
// 	   })
	   
// 	   Object.defineProperty(Vue.prototype, '$lsxmApi', {
// 	       get: function () 
// 	       {
// 	           return Vue._lsxmRequest.apis
// 	       }
// 	   })
// 	}
const lsxmRequest = new LsxmRequest()

export default lsxmRequest
