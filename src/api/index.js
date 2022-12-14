// api接口统一管理
// import requsts from './requst'
// 三级联动的接口，/api/product/getBaseCategoryList get
// export const reqCategoryList = () => requsts({ url: '/product/getBaseCategoryList', method: 'get' })
// 发请求axios发请求返回promise对象
// 当前这个模块:API进行统一管理

// 你要发请求,需要用到我们封装的axios
// 引入我们封装的aixos
import requests from './requst'

// 三级联动的接口
/// 请求地址: api/product/getBaseCategoryList   get  无参数

export const reqCategoryList = () => requests({ // 对外暴露
  url: '/product/getBaseCategoryList', // 因为在request.js中我们用了baseURL基础路径设置为/api,所以这里url我们就可以不用加api了
  method: 'get'
})
