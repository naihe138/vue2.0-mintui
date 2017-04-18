/**
 * @file 配置文件
 * @author hewnelin
 * @date 2017/4/12
 */

var serviceList = [
  //pro
  {
    service: 'http://120.77.56.94:8100/mxm/', // 生产xsimple
    dataService: 'http://120.77.56.94:8100/mxm/' // 外网mxm
  },
  //dev
  {
    service: 'http://test.coracle.com:10070/mxm/', // 生产xsimple
    dataService: 'http://test.coracle.com:10070/mxm/' // 外网mxm
  },
  {
    service: 'http://www.dev.com:8080/mxm/', // 生产xsimple
    dataService: 'http://www.dev.com:8080/mxm/' // 外网mxm
  },
];

var serviceIndex = 0;
var service = serviceList[serviceIndex].service;
var dataService = serviceList[serviceIndex].dataService;


var APIS = {
  /**
   * @condition 外平台
   * @description 登陆
   * @api    memberLogin
   * @param {String} userName 登录名
   * @param {String} password  密码
   * @method post
   * */
  externalLogin: service + 'api/memberLogin',
  /**
   * @condition 外平台
   * @description 用户注册
   * @api    v1/member/simpleRegister
   * @param {String} phone 手机号
   * @param {String} code  验证码
   * @param {String} newPassword 密码
   * @param {String} confirmPassword 确认密码
   * @method post
   * */
  externalRegister: service + 'api/v1/member/simpleRegister'
};

export {service, dataService, APIS};
