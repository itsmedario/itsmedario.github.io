(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],d=0,l=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3f564484","chunk-0a955c54":"b54dde16","chunk-2d0cec3e":"2a69be55","chunk-2d0d0bd7":"f2424806","chunk-2d0d6cc5":"bfb89733","chunk-2d0f06be":"ff1b53c3","chunk-2d213aca":"84c6a176","chunk-2d2143ce":"34bd6b0f","chunk-2d230c46":"1f8f8a7e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-0a955c54":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"75cb0133","chunk-0a955c54":"100fdba9","chunk-2d0cec3e":"31d6cfe0","chunk-2d0d0bd7":"31d6cfe0","chunk-2d0d6cc5":"31d6cfe0","chunk-2d0f06be":"31d6cfe0","chunk-2d213aca":"31d6cfe0","chunk-2d2143ce":"31d6cfe0","chunk-2d230c46":"31d6cfe0"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"008c":function(e,t,n){"use strict";n("e3b9")},"034f":function(e,t,n){"use strict";n("85ec")},"0418":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"responsive",attrs:{id:"header"}},[r("h1",[e._v(" Willkommen zur Lernplattform ")]),r("img",{attrs:{src:n("1e90")}})])},c=[],a=n("d4ec"),o=n("262e"),i=n("2caf"),u=n("9ab4"),s=n("1b40"),d=function(e){Object(o["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]);Object(u["a"])([Object(s["b"])()],d.prototype,"msg",void 0),d=Object(u["a"])([s["a"]],d);var l=d,f=l,h=(n("008c"),n("2877")),b=Object(h["a"])(f,r,c,!1,null,"411e6a44",null);t["a"]=b.exports},"0d7f":function(e,t,n){},"1a5d":function(e,t,n){var r={"./About.vue":["f820","about"],"./AddWeights.vue":["9bfe","chunk-0a955c54","chunk-2d0f06be"],"./BuildBridges.vue":["73a4","chunk-0a955c54","chunk-2d0d6cc5"],"./BuildTowers.vue":["ee4d","chunk-0a955c54","chunk-2d230c46"],"./CheckBridges.vue":["ae4d","chunk-0a955c54","chunk-2d213aca"],"./CheckTowers.vue":["68ed","chunk-0a955c54","chunk-2d0d0bd7"],"./CheckWeights.vue":["afa4","chunk-0a955c54","chunk-2d2143ce"],"./DistributeWeights.vue":["619f","chunk-0a955c54","chunk-2d0cec3e"],"./Home.vue":["bb51"],"./PageNotFound.vue":["a5b5"]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id="1a5d",e.exports=c},"1e90":function(e,t,n){e.exports=n.p+"img/beaver_transport2.cfd6b800.png"},3122:function(e,t,n){"use strict";n("0d7f")},"5dd7":function(e,t,n){e.exports=n.p+"img/ethz-logo.0eb7ebdd.svg"},"5e41":function(e,t,n){"use strict";var r=[{id:1,path:"/check-weights",title:"Ladungen überprüfen",img:"transport/wood.png",view:"CheckWeights",component:"CheckWeights"},{id:2,path:"/check-bridges",title:"Brücken überprüfen",img:"bridges/bridge_long.png",view:"CheckBridges",component:"CheckBridges"},{id:3,path:"/check-towers",title:"Türme überprüfen",img:"bridges/tower.png",view:"CheckTowers",component:"CheckTowers"},{id:4,path:"/distribute-weights",title:"Boote laden",img:"transport/wood.png",view:"DistributeWeights",component:"DistributeWeights"},{id:5,path:"/build-bridges",title:"Brücken bauen",img:"bridges/bridge_long.png",view:"BuildBridges",component:"BuildBridges"},{id:6,path:"/build-towers",title:"Türme bauen",img:"bridges/tower.png",view:"BuildTowers",component:"BuildTowers"}];t["a"]=r},"85ec":function(e,t,n){},"8cf7":function(e,t,n){e.exports=n.p+"img/abz-logo.af08d409.png"},"9a25":function(e,t,n){e.exports=n.p+"img/load_boat.a93e1eaf.png"},a2cd:function(e,t,n){"use strict";n("e5f6")},a5b5:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("Seite nicht gefunden! Error 404")]),e._m(0),r("img",{attrs:{src:n("9a25")}}),r("hr"),r("Footer")],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticStyle:{"font-size":"1.5em"}},[e._v("Feedback hinterlassen: "),n("a",{attrs:{href:"mailto:dnaepfer@student.ethz.ch?subject=Feedback zur Lernumgebung"}},[e._v(" dnaepfer@student.ethz.ch")])])}],a=n("d4ec"),o=n("262e"),i=n("2caf"),u=n("9ab4"),s=n("2b0e"),d=n("1b40"),l=n("0418"),f=n("fd2d"),h=function(e){Object(o["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(s["a"]);h=Object(u["a"])([Object(d["a"])({components:{Header:l["a"],Footer:f["a"]}})],h);var b=h,p=b,g=(n("a60d"),n("2877")),v=Object(g["a"])(p,r,c,!1,null,"2b9c9ed2",null);t["default"]=v.exports},a60d:function(e,t,n){"use strict";n("e658")},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("Header"),n("hr")],1)},c=[],a=n("d4ec"),o=n("bee2"),i=n("262e"),u=n("2caf"),s=n("9ab4"),d=n("1b40"),l=n("fd2d"),f=n("0418"),h=n("5e41"),b=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.views2=[{id:1,path:"/weights/check",title:"Ladungen überprüfen",img:"transport/wood.png",view:"CheckWeights",component:"CheckWeights"},{id:2,path:"/bridges/check",title:"Brücken überprüfen",img:"bridges/bridge_long.png",view:"CheckWeights",component:"CheckWeights"},{id:3,path:"/towers/check",title:"Türme überprüfen",img:"bridges/tower.png",view:"CheckTowers",component:"CheckWeights"},{id:4,path:"/boats/load",title:"Boote laden",img:"wood.png",view:"LoadBoats",component:"LoadBoats"},{id:5,path:"/bridges/build",title:"Brücken bauen",img:"wood.png",view:"BuildBridges",component:"BuildBridges"},{id:6,path:"/towers/build",title:"Türme bauen",img:"wood.png",view:"BuildTowers",component:"BuildTowers"}],e}return Object(o["a"])(n,[{key:"getItems",value:function(){return h["a"]}}]),n}(d["c"]);b=Object(s["a"])([Object(d["a"])({components:{Header:f["a"],Footer:l["a"]}})],b);var p=b,g=p,v=(n("a2cd"),n("2877")),m=Object(v["a"])(g,r,c,!1,null,"43a5a0f3",null);t["default"]=m.exports},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"flex-item flex-row flex-center flex-wrap",attrs:{id:"button-menu"}},[n("router-link",{attrs:{to:"/home"}},[n("button",{staticClass:"card clickable",attrs:{id:"home"},on:{click:function(t){e.selectedTab="Home"}}},[e._v("Startseite")])]),n("router-link",{attrs:{to:"/about"}},[n("button",{staticClass:"card clickable",on:{click:function(t){e.selectedTab="About"}}},[e._v("Impressum")])]),n("router-link",{attrs:{to:"/distribute-weights"}},[n("button",{staticClass:"card clickable"},[e._v("Boote beladen")])]),n("router-link",{attrs:{to:"/check-weights"}},[n("button",{staticClass:"card clickable"},[e._v("Boote überprüfen")])])],1),n("hr")]),n("router-view",{attrs:{id:"container"}})],1)},a=[],o=n("d4ec"),i=n("262e"),u=n("2caf"),s=n("9ab4"),d=n("1b40"),l=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.selectedTab="Home",e}return n}(r["a"]);l=Object(s["a"])([Object(d["a"])({components:{}})],l);var f=l,h=f,b=(n("034f"),n("2877")),p=Object(b["a"])(h,c,a,!1,null,null,null),g=p.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("d81d"),n("8c4f")),m=n("bb51"),k=n("a5b5"),w=n("5e41");r["a"].use(v["a"]);var O=[{path:"/",name:"Home",component:m["default"]},{path:"/home",redirect:"/"},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}];O=O.concat(w["a"].map((function(e){var t={path:e.path,component:function(){return n("1a5d")("./".concat(e.view,".vue"))}};return t}))),O.push({path:"/*",component:k["default"]});var j=new v["a"]({mode:"history",base:"/",routes:O}),y=j;r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(g)}}).$mount("#app")},e3b9:function(e,t,n){},e5f6:function(e,t,n){},e658:function(e,t,n){},fd2d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"responsive",attrs:{id:"footer"}},[r("div",{staticClass:"logo-ethz"},[r("a",{attrs:{href:"https://ethz.ch",target:"blank"}},[r("img",{staticStyle:{height:"40px","margin-top":"10px"},attrs:{"_ngcontent-c1":"",src:n("5dd7")}})])]),r("div",{staticClass:"seperator"}),r("div",{staticClass:"logo-abz"},[r("a",{attrs:{href:"https://abz.inf.ethz.ch/",target:"blank"}},[r("img",{staticStyle:{height:"80px"},attrs:{src:n("8cf7")}})])])])}],a=n("d4ec"),o=n("262e"),i=n("2caf"),u=n("9ab4"),s=n("1b40"),d=function(e){Object(o["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]);Object(u["a"])([Object(s["b"])()],d.prototype,"msg",void 0),d=Object(u["a"])([s["a"]],d);var l=d,f=l,h=(n("3122"),n("2877")),b=Object(h["a"])(f,r,c,!1,null,"258d6f53",null);t["a"]=b.exports}});
//# sourceMappingURL=app.1578df6b.js.map