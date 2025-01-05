# 架构设计

- 目录结构定义
- 公共函数编写
- 开发规范定义
- 环境设置、统一请求处理、错误机制、Loading机制
- 组件封装

## 微信授权流程

概念理解：

- 业务域名、JS接口安全域名、网页授权域名
- 开发者工具（添加开发者微信号）、人员设置（添加运营者微信号）
- 网页授权access_token、普通access_token
- UnionID

授权流程：

- 用户同意授权，获取code
- 通过code换取网页授权access_token
- 拉取用户信息（需 scope 改为 snsapi_userinfo）

JSSDK调用流程：

- 绑定域名（业务域名、JS接口安全域名、网页授权域名）
- 引入JS文件
- 通过config接口注入权限验证配置（接口签名）
- 通过ready接口处理成功验证

## H5 添加接口代理、域名解析

如何在没有域名时在本地进行测试。

接口代理：

- 配置主机
- 设置端口
- 拦截请求

Host域名解析：

- 修改本地host文件
  - window:C:\Windows\System32\drivers\etc\HOSTS
  - MAC:vi /etc/hosts
- 通过软件修改

## H5 接入微信分享

- 定义请求地址
- 微信授权、注入 openid
- 获取签名信息配置 config
- 定义分享公共信息

## 公众号测试号注册链接

<https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login>

## Express文档

<http://www.expressjs.com.cn/starter/generator.html>

## 接口签名验证

<https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign>

## 下载mongoDB

<https://www.mongodb.com/download-center/community>

## 支付文档入口

<https://pay.weixin.qq.com/wiki/doc/api/index.html>

## H5后台支付开发文档

<https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6>

## H5前端 JS-SDK开发文档

<https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115>

## 小程序后台支付开发文档

<https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=5>

## 小程序前端支付开发文档

<https://developers.weixin.qq.com/miniprogram/dev/api/wx.requestPayment.html>
