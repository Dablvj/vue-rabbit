kubernetes | k8s

构建 vue 应用镜像
    配置 dockfile
        基于 nginx 镜像
        将 dist 文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
            要么本地打包构建
            要么git 拉取最新，然后打包 dist 文件夹
        用本地的 default.conf 配置来替换 Nginx 镜像里的默认配置
    构建镜像
    启动容器
        拉取nginx镜像（docker pull nginx）
        运行nginx镜像（docker run -d --name nginx-xxx -p 3344:80 nginx）
        验证是否启动成功（docker ps）
        

