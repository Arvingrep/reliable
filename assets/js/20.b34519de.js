(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{170:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("hr"),e._v(" "),e._m(1),e._v(" "),a("h2",{attrs:{id:"使用-docker-compose-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-推荐","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 "),a("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose"),a("OutboundLink")],1),e._v(" (推荐)")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),a("p",[e._v("第一次运行需添加初始数据，否则服务器会返回500错误：")]),e._v(" "),e._m(6),a("p",[e._v("如何进入 MySQL：")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("需要按需修改 "),a("a",{attrs:{href:"https://github.com/macacajs/reliable/blob/master/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose.yml"),a("OutboundLink")],1),e._v(" 配置。")]),e._v(" "),a("h2",{attrs:{id:"其他-docker-服务部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他-docker-服务部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 其他 "),a("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(" 服务部署")]),e._v(" "),e._m(12),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/macacajs/reliable/blob/master/docker/reliable-mysql/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/macacajs/reliable/blob/master/docker/reliable-mysql/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("doc"),a("OutboundLink")],1)])]),e._v(" "),e._m(13),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/macacajs/reliable/blob/master/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/macacajs/reliable/blob/master/docker/reliable-web/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("doc"),a("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"web-服务部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-服务部署","aria-hidden":"true"}},[this._v("#")]),this._v(" Web 服务部署")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("注意：运行 reliable 需要启动数据库容器（"),t("code",[this._v("reliable-mysql")]),this._v("）和应用容器（"),t("code",[this._v("reliable-web")]),this._v("）。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"生产环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 生产环境")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# start services")]),this._v("\n$ docker-compose -p reliable -f docker-compose.yml up -d\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# NOTE: if you meet the problem, maybe the issue caused by the existed service, just run the stop command below.")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# stop services")]),this._v("\n$ docker-compose -p reliable -f docker-compose.yml down\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("执行 "),t("code",[this._v("docker ps")]),this._v(" 我们能够看到以下容器：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('$  docker ps\nCONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS                            PORTS                               NAMES\n7c641bdb57c6        macacajs/reliable-web:v2   "./entrypoint.sh npm…"   6 seconds ago       Up 5 seconds (health: starting)   0.0.0.0:9900->9900/tcp              reliable_web_1\nf589b1c9046f        macacajs/reliable-mysql    "docker-entrypoint.s…"   6 minutes ago       Up 6 seconds                      0.0.0.0:3306->3306/tcp, 33060/tcp   reliable_mysql_1\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ NODE_ENV"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("production "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run db:seed:all\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("exec")]),e._v(" -it reliable_mysql_1 mysql -uroot -preliable\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" use reliable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" show tables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" * from reliable.jobNames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发环境")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# start services")]),this._v("\n$ docker-compose up\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# stop services")]),this._v("\n$ docker-compose down\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Reliable 服务默认运行在 "),t("code",[this._v("http://127.0.0.1:9900")]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Nginx 服务默认运行在 "),t("code",[this._v("http://127.0.0.1:9920")]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"database-container-reliable-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-container-reliable-mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" Database container - reliable-mysql")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"reliable-main-app-container-backend-and-frontend-reliable-web"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reliable-main-app-container-backend-and-frontend-reliable-web","aria-hidden":"true"}},[this._v("#")]),this._v(" Reliable main app container (backend and frontend) - reliable-web")])}],!1,null,null,null);t.default=r.exports}}]);