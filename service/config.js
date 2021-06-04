import lsxmRequest from './LsxmRequest'

// const lsxmRequest = new LsxmRequest()

// 请求拦截器
lsxmRequest.interceptors.request((request) => {
    if (uni.getStorageSync('token')) {
        request.header['token'] = uni.getStorageSync('token');
    }
    return request
})

// 响应拦截器
lsxmRequest.interceptors.response((response) => {
    console.log('beforeRespone',response);
    // 超时重新登录
    if(response.data.isOverTime){
    uni.showModal({
            title:'提示',
            content:'您已超时,请重新登录!',
            showCancel:false,
            icon:'success',
            success:function(e){
                if(e.confirm){
                    uni.redirectTo({
                        url: '/pages/login/login'
                    })
                }
            }
        }); 
    }
    else
    {
        return response;
    }
})

// 设置默认配置
lsxmRequest.setConfig((config) => {
    config.baseURL = 'http://129.211.125.29:7776'
    config.fileURL = 'http://175.6.118.38:8888'
    
    if (uni.getStorageSync('token')) {
        config.header['token'] = uni.getStorageSync('token');
    }
    return config;
})

export default lsxmRequest