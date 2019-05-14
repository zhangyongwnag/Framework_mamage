let host = ''
if (process.env.NODE_ENV !== 'production'){
  host = 'https://mall-api.malrro.com'
}else {
  if (process.env.type == 'test'){
    host = 'https://mall-api.malrro.com'
  }else {
    host = 'https://mall-api.bazaarbeya.com'
  }
}

//请求的所有url地址
export const URL_SCAN_CODE = host + '/admin/auth/login/code/get'
export const URL_LOGIN = host + '/admin/auth/code/login'
export const URL_LOGOUT = host + '/admin/auth/logout'
export const URL_GET_ORDER_ALL_LIST = host + '/admin/order/list'
export const URL_GET_BEPAYED_LIST = host + '/admin/order/bepayed/list'
export const URL_GET_BESEND_LIST = host + '/admin/order/besend/list'
export const URL_GET_BEALLOTED_LIST = host + '/admin/order/bealloted/list'
export const URL_GET_BERECEIVED_LIST = host + '/admin/order/bereceived/list'
export const URL_GET_COMPLETE_LIST = host + '/admin/order/complete/list'
export const URL_GET_CLOSE_LIST = host + '/admin/order/close/list'
export const URL_SEND_INFO = host + '/admin/order/send/info'
export const URL_SEND_SINGLE = host + '/admin/order/send/single'
export const URL_SEND_MULTI = host + '/admin/order/send/multi'
export const URL_SEND_CANCEL_INFO = host + '/admin/order/send/cancel/info'
export const URL_SEND_CANCEL_SUBMIT = host + '/admin/order/send/cancel'
export const URL_EXPRESS_INFO = host + '/admin/order/express/info'
export const URL_EXPRESS_UPDATE = host + '/admin/order/express/update'
export const URL_REMARK_INFO = host + '/admin/order/remark/info'
export const URL_REMARK_UPDATE = host + '/admin/order/remark/update'
export const URL_MEMBER_LIST = host + '/admin/member/list'
export const URL_MEMBER_LEVEL_INFO = host + '/admin/member/level/info'
export const URL_MEMBER_LEVEL_UPDATE = host + '/admin/member/level/update'
export const URL_RECHARGE_LIST = host + '/admin/recharge/list'
export const URL_RECHARGE_UPDATE = host + '/admin/recharge/remark/update'
export const URL_RECHARGE_SUCCESS = host + '/admin/recharge/success'
export const URL_RECHARGE_FAILED = host + '/admin/recharge/failed'
export const URL_WITHDRAW_LIST = host + '/admin/withdraw/list'
export const URL_WITHDRAW_UPDATE = host + '/admin/withdraw/remark/update'
export const URL_WITHDRAW_SUCCESS = host + '/admin/withdraw/success'
export const URL_WITHDRAW_FAILED = host + '/admin/withdraw/failed'
