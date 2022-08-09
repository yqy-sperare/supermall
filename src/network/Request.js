import axios from "axios";
// 导出多个函数用function，导出默认值用default
// *Promise方法
export function request(config){

  // ~1、创建axios的实例
  // const instance =axios.create({
  //   baseURL:'http://123.207.32.32:8000',
  //   timeout:5000
  // })
  const instance =axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })
  // ~2、axios的拦截器
  // axios.interceptors 全局的拦截器
  // todo 2.1请求拦截
  instance.interceptors.request.use(config=>{
    return config
  },
  err=>{
    // console.log(err);
  })
  // todo 2.2响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res);
    console.log(res.data);
    // !拦截之后记得返回，可以都返回不过只返回data就够了
    return res.data
  },err=>{
    // 接口错误的时候才会打印
    console.log(err);
  })
  // ~3、发送真正的网络请求
//  instance类型是一个可以返回promise的类型
  return instance(config)

}