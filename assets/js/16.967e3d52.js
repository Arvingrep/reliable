(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{168:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"jenkins-android-任务配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-android-任务配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Jenkins Android 任务配置")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"依赖准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖准备","aria-hidden":"true"}},[a._v("#")]),a._v(" 依赖准备")]),a._v(" "),e("h3",{attrs:{id:"环境依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境依赖")]),a._v(" "),e("p",[a._v("在 "),e("code",[a._v("reliable_home")]),a._v(" 创建 "),e("code",[a._v("gradle_cache")]),a._v(" 目录用于 Gradle 工具的缓存。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/reliable_home/gradle_cache\n")])])]),e("h3",{attrs:{id:"docker-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker 部署")]),a._v(" "),e("p",[a._v("就像 reliable-web 一样，Reliable 环境配置倾向于容器化，推荐你使用 Android Docker 容器运行任务。")]),a._v(" "),e("h2",{attrs:{id:"示例工程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例工程","aria-hidden":"true"}},[a._v("#")]),a._v(" 示例工程")]),a._v(" "),e("p",[e("a",{attrs:{href:"//github.com/app-bootstrap/android-app-bootstrap"}},[a._v("android-app-bootstrap")])]),a._v(" "),e("h2",{attrs:{id:"快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速上手")]),a._v(" "),e("h3",{attrs:{id:"第1步-创建任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第1步-创建任务","aria-hidden":"true"}},[a._v("#")]),a._v(" 第1步 - 创建任务")]),a._v(" "),e("p",[a._v("创建一个项目名为 "),e("code",[a._v("android-app-bootstrap")]),a._v("，并且选择自由风格模式。")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"/reliable/assets/6d308bd9ly1ft2p8qmlazj21kw15ztol.jpg",width:"75%"}})]),a._v(" "),e("h3",{attrs:{id:"第2步-scm-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第2步-scm-配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 第2步 - SCM 配置")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"/reliable/assets/6d308bd9ly1ft2panw2oqj21kw15znaj.jpg",width:"75%"}})]),a._v(" "),e("p",[a._v("输入项目的 git 地址，并且选择克隆深度为 1，分支为 "),e("code",[a._v("master")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("https://github.com/app-bootstrap/android-app-bootstrap.git\n")])])]),e("h3",{attrs:{id:"第3步-构建脚本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第3步-构建脚本配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 第3步 - 构建脚本配置")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"/reliable/assets/6d308bd9ly1ft2peam690j21kw15ztl8.jpg",width:"75%"}})]),a._v(" "),e("p",[e("strong",[a._v("注意")])]),a._v(" "),e("ul",[e("li",[a._v("请确保勾选构建前删除运行空间，以排除老的中间文件造成的问题。")])]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"/reliable/assets/6d308bd9ly1ft2plz2djxj21kw16pk5j.jpg",width:"75%"}})]),a._v(" "),e("p",[a._v("我们提供 Android 构建 Docker 镜像 "),e("code",[a._v("macacajs/macaca-android-build-docker")]),a._v("，你可以设置如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker stop $JOB_NAME || true && docker rm -f $JOB_NAME || true\n\ndocker run --rm \\\n  --name $JOB_NAME \\\n  -e JOB_NAME \\\n  -e BUILD_NUMBER \\\n  -e RELIABLE_SERVER_URL=http://192.168.0.102:9900 \\\n  -v $WORKSPACE:/root/src \\\n  -v $HOME/reliable_home/static:/static \\\n  -v $HOME/reliable_home/gradle_cache:/root/.gradle \\\n  macacajs/macaca-android-build-docker\n")])])]),e("p",[e("strong",[a._v("注意")])]),a._v(" "),e("ul",[e("li",[a._v("也可以不使用容器而使用系统命令行直接进行构建。")]),a._v(" "),e("li",[a._v("请确认 "),e("code",[a._v("RELIABLE_SERVER_URL")]),a._v(" 已经正确配置，可以是一个 IPV4 或者某个 url，否则会遇到如下问题：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("error: TypeError: Cannot read property 'server' of undefined\n    at _.postToGW (/root/src/node_modules/reliable-cli/lib/helper.js:31:66)\n    at ReportCommand.pushToWebhook (/root/src/node_modules/reliable-cli/lib/report-command.js:130:18)\n    at ReportCommand._run (/root/src/node_modules/reliable-cli/lib/report-command.js:70:35)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! android-app-bootstrap@1.0.8 reliable: `reliable report -c ./reliable.config.js`\nnpm ERR! Exit status 1\n")])])]),e("h3",{attrs:{id:"第4步-理解构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第4步-理解构建","aria-hidden":"true"}},[a._v("#")]),a._v(" 第4步 - 理解构建")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"/reliable/assets/6d308bd9ly1ft2pvmld7dj21kw148wn3.jpg",width:"75%"}})]),a._v(" "),e("p",[a._v("构建结束后，你可以在 reliable web 平台获得构建结果。")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"/reliable/assets/6d308bd9ly1ft2pvmlnkij21kw148dph.jpg",width:"75%"}})]),a._v(" "),e("p",[a._v("比如我们能够获得 "),e("code",[a._v("android-app-bootstrap")]),a._v(" 的 "),e("code",[a._v("debug")]),a._v(" 类型包和 "),e("code",[a._v("release")]),a._v(" 类型包。")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"/reliable/assets/6d308bd9ly1ft2pvmmewxj21kw14849j.jpg",width:"75%"}})]),a._v(" "),e("p",[a._v("Reliable 平台也支持扫码下载安装等实用功能。")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"/reliable/assets/6d308bd9ly1ft2pvmlz1hj21kw148tl3.jpg",width:"75%"}})]),a._v(" "),e("p",[a._v("我们也可以获得项目配置，版本等额外信息。如果需要更多上报信息可以参考上报脚本文档 "),e("a",{attrs:{href:"//github.com/macacajs/reliable-cli#configuration"}},[a._v("reliable-cli#configuration")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"第5步-自动化测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第5步-自动化测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 第5步 - 自动化测试")]),a._v(" "),e("p",[a._v("Reliable 无缝集成 Macaca 自动化测试工具，支持通过率报告，端到端链路刻画，覆盖率等质量覆盖方案。")]),a._v(" "),e("p",[a._v("配置敬请期待！")])])}],!1,null,null,null);t.default=s.exports}}]);