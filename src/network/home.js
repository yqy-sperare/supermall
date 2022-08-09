import {request} from './Request'

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
    // 此时获得res
    // 函数调用->压入函数栈(保存函数调用过程中所有变量)
    // 此时，如果函数内的元素被函数外的元素占用，函数栈就不会被销毁
    // 函数调用结束->弹出函数栈(释放函数所有的变量)
  })
 }
