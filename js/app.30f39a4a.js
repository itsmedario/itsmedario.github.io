(function(e){function t(t){for(var r,a,o=t[0],s=t[1],u=t[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"43c6eb31","chunk-366d00fa":"77396d69","chunk-273ed2b0":"df851eb7","chunk-2af2eda9":"c0a37587","chunk-2c993030":"8d6eac26","chunk-2d213aca":"63da07e3","chunk-41487829":"42d3d364","chunk-cdeacafa":"b579aafb","chunk-d81397fc":"d29d0f62","chunk-f0a5c5be":"31ab4090"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,"chunk-366d00fa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"b270858d","chunk-366d00fa":"78d03b34","chunk-273ed2b0":"31d6cfe0","chunk-2af2eda9":"31d6cfe0","chunk-2c993030":"31d6cfe0","chunk-2d213aca":"31d6cfe0","chunk-41487829":"31d6cfe0","chunk-cdeacafa":"31d6cfe0","chunk-d81397fc":"31d6cfe0","chunk-f0a5c5be":"31d6cfe0"}[e]+".css",c=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===r||d===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],b.parentNode.removeChild(b),n(i)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var b=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"0418":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"responsive",attrs:{id:"header"}},[r("p",{staticClass:"title"},[e._v(" Willkommen zur Lernplattform ")]),r("img",{attrs:{src:n("1e90"),draggable:"false"}})])},a=[],c=n("d4ec"),i=n("262e"),o=n("2caf"),s=n("9ab4"),u=n("1b40"),d=function(e){Object(i["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);Object(s["a"])([Object(u["b"])()],d.prototype,"msg",void 0),d=Object(s["a"])([u["a"]],d);var l=d,b=l,f=(n("fbe8"),n("2877")),h=Object(f["a"])(b,r,a,!1,null,"512d24b4",null);t["a"]=h.exports},"1a5d":function(e,t,n){var r={"./About.vue":["f820","about"],"./AddWeights.vue":["9bfe","chunk-366d00fa","chunk-2af2eda9"],"./BuildBridges.vue":["73a4","chunk-366d00fa","chunk-d81397fc"],"./BuildTowers.vue":["ee4d","chunk-366d00fa","chunk-f0a5c5be"],"./CheckBridges.vue":["ae4d","chunk-366d00fa","chunk-2d213aca"],"./CheckTowers.vue":["68ed","chunk-366d00fa","chunk-2c993030"],"./CheckWeights.vue":["afa4","chunk-366d00fa","chunk-cdeacafa"],"./DistributeWeights.vue":["619f","chunk-366d00fa","chunk-41487829"],"./Home.vue":["bb51"],"./OptimizeWeights.vue":["2d2a","chunk-366d00fa","chunk-273ed2b0"],"./PageNotFound.vue":["a5b5"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="1a5d",e.exports=a},"1e90":function(e,t,n){e.exports=n.p+"img/beaver_transport2.cfd6b800.png"},"3aa2":function(e,t,n){},"3e1c":function(e,t,n){e.exports=n.p+"img/logo_abz_weiss.28ebdea4.png"},"4a57":function(e,t,n){"use strict";n("8c84")},"546e":function(e,t,n){},"5dd7":function(e,t,n){e.exports=n.p+"img/ethz-logo.0eb7ebdd.svg"},"5e41":function(e,t,n){"use strict";var r=[{id:1,path:"/check-weights",title:"Ladungen überprüfen",img:"transport/wood.png",view:"CheckWeights",component:"CheckWeights"},{id:2,path:"/check-bridges",title:"Brücken überprüfen",img:"bridges/bridge_long.png",view:"CheckBridges",component:"CheckBridges"},{id:3,path:"/check-towers",title:"Türme überprüfen",img:"bridges/tower.png",view:"CheckTowers",component:"CheckTowers"},{id:4,path:"/distribute-weights",title:"Boote laden",img:"transport/wood.png",view:"DistributeWeights",component:"DistributeWeights"},{id:5,path:"/build-bridges",title:"Brücken bauen",img:"bridges/bridge_long.png",view:"BuildBridges",component:"BuildBridges"},{id:6,path:"/build-towers",title:"Türme bauen",img:"bridges/tower.png",view:"BuildTowers",component:"BuildTowers"},{id:7,path:"/add-weights",title:"Gewichte ergänzen",img:"transport/wood.png",view:"AddWeights",component:"AddWeights"},{id:8,path:"/optimize-weights",title:"Gewichte optimmieren",img:"transport/wood.png",view:"OptimizeWeights",component:"OptimizeWeights"}];t["a"]=r},"85ec":function(e,t,n){},"8c84":function(e,t,n){},"9a25":function(e,t,n){e.exports=n.p+"img/load_boat.a93e1eaf.png"},a5b5:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about responsive"},[r("p",{staticClass:"title"},[e._v("Seite nicht gefunden! Error 404")]),e._m(0),r("img",{attrs:{src:n("9a25"),draggable:"false"}}),r("hr",{staticStyle:{height:"1px","border-width":"0",color:"black","background-color":"black"}}),r("Footer")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticStyle:{"font-size":"1.5em"}},[e._v("Diese Seite wird bald verfügbar sein. "),n("br"),e._v(" Feedback hinterlassen: "),n("a",{attrs:{href:"mailto:dnaepfer@student.ethz.ch?subject=Feedback zur Lernumgebung"}},[e._v(" dnaepfer@student.ethz.ch")])])}],c=n("d4ec"),i=n("262e"),o=n("2caf"),s=n("9ab4"),u=n("2b0e"),d=n("1b40"),l=n("0418"),b=n("fd2d"),f=function(e){Object(i["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(u["a"]);f=Object(s["a"])([Object(d["a"])({components:{Header:l["a"],Footer:b["a"]}})],f);var h=f,p=h,g=(n("4a57"),n("2877")),m=Object(g["a"])(p,r,a,!1,null,"571e8bf1",null);t["default"]=m.exports},afb3:function(e,t,n){},b1d0:function(e,t,n){"use strict";n("afb3")},b23a:function(e,t,n){"use strict";n("546e")},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("Header"),n("hr",{staticStyle:{height:"1px","border-width":"0",color:"black","background-color":"black"}}),n("p",[e._v("[Platzhalter für Aufgabenraster]")])],1)},a=[],c=n("d4ec"),i=n("bee2"),o=n("262e"),s=n("2caf"),u=n("9ab4"),d=n("1b40"),l=n("fd2d"),b=n("0418"),f=n("5e41"),h=function(e){Object(o["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.views2=[{id:1,path:"/weights/check",title:"Ladungen überprüfen",img:"transport/wood.png",view:"CheckWeights",component:"CheckWeights"},{id:2,path:"/bridges/check",title:"Brücken überprüfen",img:"bridges/bridge_long.png",view:"CheckWeights",component:"CheckWeights"},{id:3,path:"/towers/check",title:"Türme überprüfen",img:"bridges/tower.png",view:"CheckTowers",component:"CheckWeights"},{id:4,path:"/boats/load",title:"Boote laden",img:"wood.png",view:"LoadBoats",component:"LoadBoats"},{id:5,path:"/bridges/build",title:"Brücken bauen",img:"wood.png",view:"BuildBridges",component:"BuildBridges"},{id:6,path:"/towers/build",title:"Türme bauen",img:"wood.png",view:"BuildTowers",component:"BuildTowers"}],e}return Object(i["a"])(n,[{key:"getItems",value:function(){return f["a"]}}]),n}(d["c"]);h=Object(u["a"])([Object(d["a"])({components:{Header:b["a"],Footer:l["a"]}})],h);var p=h,g=p,m=(n("b23a"),n("2877")),v=Object(m["a"])(g,r,a,!1,null,"597b5413",null);t["default"]=v.exports},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"flex-item flex-row flex-center flex-wrap",attrs:{id:"button-menu"}},[n("router-link",{attrs:{to:"/check-weights"}},[n("button",{staticClass:"card clickable"},[e._v("Ladungen überprüfen")])]),n("router-link",{attrs:{to:"/distribute-weights"}},[n("button",{staticClass:"card clickable"},[e._v("Boote beladen")])]),n("router-link",{attrs:{to:"/add-weights"}},[n("button",{staticClass:"card clickable"},[e._v("Ladungen ergänzen")])]),n("router-link",{attrs:{to:"/optimize-weights"}},[n("button",{staticClass:"card clickable"},[e._v("Boote maximal beladen")])]),n("router-link",{attrs:{to:"/*"}},[n("button",{staticClass:"card clickable"},[e._v("Türme überprüfen")])]),n("router-link",{attrs:{to:"/about"}},[n("button",{staticClass:"card clickable",on:{click:function(t){e.selectedTab="About"}}},[e._v("Impressum")])])],1)]),n("hr",{staticStyle:{height:"1px","border-width":"0",color:"black","background-color":"black"}}),n("router-view",{attrs:{id:"container"}})],1)},c=[],i=n("d4ec"),o=n("262e"),s=n("2caf"),u=n("9ab4"),d=n("1b40"),l=function(e){Object(o["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.selectedTab="Home",e}return n}(r["a"]);l=Object(u["a"])([Object(d["a"])({components:{}})],l);var b=l,f=b,h=(n("034f"),n("2877")),p=Object(h["a"])(f,a,c,!1,null,null,null),g=p.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("d81d"),n("8c4f")),v=n("bb51"),k=n("a5b5"),w=n("5e41");r["a"].use(m["a"]);var O=[{path:"/",name:"Home",component:v["default"]},{path:"/home",redirect:"/"},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}];O=O.concat(w["a"].map((function(e){var t={path:e.path,component:function(){return n("1a5d")("./".concat(e.view,".vue"))}};return t}))),O.push({path:"/*",component:k["default"]});var j=new m["a"]({mode:"history",base:"/",routes:O}),_=j;r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(g)}}).$mount("#app")},fbe8:function(e,t,n){"use strict";n("3aa2")},fd2d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"responsive cards",attrs:{id:"footer"}},[r("div",{staticClass:"logo-ethz"},[r("a",{attrs:{href:"https://ethz.ch",target:"blank"}},[r("img",{staticStyle:{height:"40px","margin-top":"10px"},attrs:{src:n("5dd7"),draggable:"false"}})])]),r("div",{staticClass:"seperator"}),r("div",{staticClass:"logo-abz"},[r("a",{attrs:{href:"https://abz.inf.ethz.ch/",target:"blank"}},[r("img",{staticStyle:{height:"80px"},attrs:{src:n("3e1c"),draggable:"false"}})])])])}],c=n("d4ec"),i=n("262e"),o=n("2caf"),s=n("9ab4"),u=n("1b40"),d=function(e){Object(i["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);Object(s["a"])([Object(u["b"])()],d.prototype,"msg",void 0),d=Object(s["a"])([u["a"]],d);var l=d,b=l,f=(n("b1d0"),n("2877")),h=Object(f["a"])(b,r,a,!1,null,"95461c38",null);t["a"]=h.exports}});
//# sourceMappingURL=app.30f39a4a.js.map