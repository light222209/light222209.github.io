var posts=["2023/10/15/FileBrowser搭建轻量级文件服务器/","2023/10/15/Hexo基础环境搭建/","2023/10/29/Markdown常用语法/","2024/12/08/NPT服务搭建与配制/","2023/10/29/OpenWrt手动安装PassWall插件/","2024/11/17/Samba网络文件服务/","2023/10/15/安装Butterfly主题/","2023/11/02/安装部署docker docker-compse/","2023/11/13/激活Win10-Win11-Office/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };