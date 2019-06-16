(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"jenkins-web-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-web-task","aria-hidden":"true"}},[e._v("#")]),e._v(" Jenkins Web Task")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("Just like reliable-web, we recommend to build web with Docker.")]),e._v(" "),a("h2",{attrs:{id:"sample-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Sample Project")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"//github.com/app-bootstrap/web-app-bootstrap"}},[e._v("web-app-bootstrap")])])]),e._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),a("h3",{attrs:{id:"step1-create-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step1-create-new","aria-hidden":"true"}},[e._v("#")]),e._v(" Step1 - Create New")]),e._v(" "),a("p",[e._v("Create a new item named "),a("code",[e._v("web-app-bootstrap")]),e._v(", and select the "),a("code",[e._v("Freestyle project")]),e._v(" mode.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ftc27q3vd3j21kw128tpk.jpg",width:"75%"}})]),e._v(" "),a("h3",{attrs:{id:"step2-scm-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step2-scm-config","aria-hidden":"true"}},[e._v("#")]),e._v(" Step2 - SCM Config")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ftc27pr7xuj21kw128gzp.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("Please input the "),a("code",[e._v("web-app-bootstrap")]),e._v(" git url, and set the clone depth to "),a("code",[e._v("1")]),e._v(", branch to "),a("code",[e._v("master")]),e._v(" is ok.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://github.com/app-bootstrap/web-app-bootstrap.git\n")])])]),a("h3",{attrs:{id:"step3-build-scripts-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step3-build-scripts-config","aria-hidden":"true"}},[e._v("#")]),e._v(" Step3 - Build Scripts Config")]),e._v(" "),a("p",[a("strong",[e._v("Noted")])]),e._v(" "),a("ul",[a("li",[e._v("please confirm jenkins delete the workspace before build to avoid the old middle-file problem.")])]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ftc27nq3rsj21kw12j7if.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("We provide the webpack build docker like "),a("code",[e._v("macacajs/macaca-electron-docker")]),e._v(", so you can set the feild content like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker stop $JOB_NAME || true && docker rm $JOB_NAME || true\n\ndocker run --rm \\\n  --name $JOB_NAME \\\n  -e JOB_NAME \\\n  -e BUILD_NUMBER \\\n  -e RELIABLE_SERVER_URL=http://129.168.1.102:9900 \\\n  -v $HOME/reliable_home/static:/static \\\n  -v $WORKSPACE:/root/src \\\n  macacajs/macaca-electron-docker \\\n  bash -c "cd /root/src && npm run ci"\n')])])]),a("p",[a("strong",[e._v("Noted")])]),e._v(" "),a("ul",[a("li",[e._v("please confirm the "),a("code",[e._v("RELIABLE_SERVER_URL")]),e._v(" has the correct address just like the IPV4 or some domain name which can be visited from the docker container, otherwise you will meet the problem below.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("error: TypeError: Cannot read property 'server' of undefined\n    at _.postToGW (/root/src/node_modules/reliable-cli/lib/helper.js:31:66)\n    at ReportCommand.pushToWebhook (/root/src/node_modules/reliable-cli/lib/report-command.js:130:18)\n    at ReportCommand._run (/root/src/node_modules/reliable-cli/lib/report-command.js:70:35)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! web-app-bootstrap@1.0.8 reliable: `reliable report -c ./reliable.config.js`\nnpm ERR! Exit status 1\n")])])]),a("h3",{attrs:{id:"step4-build-now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step4-build-now","aria-hidden":"true"}},[e._v("#")]),e._v(" Step4 - Build Now")]),e._v(" "),a("p",[e._v("After the building ready, you can get the final result from reliable-web.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3nqcab4vj21kw0xxwn0.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("We cat get the build results of the "),a("code",[e._v("web-app-bootstrap")]),e._v(".")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3nqcmte5j21kw0xxdm6.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("You can also get other extra build infomation. If you want more, please tweak the "),a("a",{attrs:{href:"//github.com/macacajs/reliable-cli#configuration"}},[e._v("reliable-cli#configuration")]),e._v(" file.")]),e._v(" "),a("h3",{attrs:{id:"step5-test-reporter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step5-test-reporter","aria-hidden":"true"}},[e._v("#")]),e._v(" Step5 - Test Reporter")]),e._v(" "),a("p",[e._v("Reliable support the Unit and E2E test reporter, coverage based on Macaca is supported.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3nqbd9e3j21kw0xx45p.jpg",width:"75%"}})]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3nqbgjesj21kw0xx7ee.jpg",width:"75%"}})]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3nqbnft5j21kw0xxaq1.jpg",width:"75%"}})]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3nqd3c7fj21kw0xxqcj.jpg",width:"75%"}})]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3nqcraoij21kw0xxjyt.jpg",width:"75%"}})])])}],!1,null,null,null);t.default=s.exports}}]);