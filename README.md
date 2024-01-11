## 电商前台项目技术点

### 进阶Vue3
    组合式api体验（代码量、分散式维护转为集中式维护）
    vue3优势（
        更容易维护    
            组合式api
            更好的ts支持
        更快的速度
            重写diff算法
            模版编译优化
            更高效的组件初始化
        更优的数据响应式
            proxy
        更小的体积
            良好的treeshaking
            按需引入          
    使用create-vue创建项目
        node >= 16
        npm init vue@latest     
    熟悉项目目录和关键文件  
    组合式api入口之setup选项  
    组合式api之reactive和ref函数
    组合式api之watch基础使用、立即执行、深度侦听和精确侦听
    组合式api之computed
    组合式api之生命周期函数
    组合式api之父子通信
    组合式api之模版引用
    组合式api之provide和inject
### Pinia
    添加pinia到vue项目
    conterStore基础使用
    getters和异步action
    storeToRefs和调试
### Layout组件
    项目起步：项目初始化、git管理、别名路径联想
    elementPlus主体定制、自动按需导入配置
    axios基础配置
    项目整体路由设计
    静态资源引入和ErrorLen安装
    scss文件自动导入
    字体图标引入
    吸顶导航组件封装实现
    pinia优化重复请求
    一级导航渲染
### 商品列表
    一级分类和路由配置
    二级导航渲染
    使用逻辑函数拆分业务
    解决路由缓存
    懒加载指令
    激活状态控制
    GoodItem组件封装
### 商品详情
    二级分类和路由配置
    三级导航渲染
    路由配置、通用组件统一注册
    面包屑导航
    列表无线加载
    定制路由滚动行为
    商品详情：图片预览之放大镜、图片预览之滑块跟随移动、小图切大图、商品规格组件
### 登录
    表单统一校验、自定义校验规则
    pinia用户信息数据持久化
    不同状态模版适配
    请求拦截器携带token
    退出登录
    token 401拦截
### 购物车
    统计计算
    本地购物车、合并服务器
    单选、全选
    加入、删除、清空
    结算、切换地址、生成订单、支付、支付结果展示
        封装倒计时展示
### 会员中心-个人中心、我的订单
    整体功能梳理和路由配置
    三级路由
### SKU 组件|商品规格组件功能拆解（规格、尺寸、产地）
    选择状态更新
    当前规格是否禁用（生成有效路径字典）
    产出对应sku数据