(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32188882"],{"0f97":function(t,e,n){"use strict";n("5959")},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"25e0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Game"}},[n("Tutorial",{attrs:{"show-modal":t.showTutorial},on:{"close-tutorial":function(e){t.showTutorial=!1}}},[t._t("description",null,{slot:"description"}),t._t("video",null,{slot:"video"})],2),n("Verifier",{attrs:{showSolution:t.showSolution,correctSolution:t.correctSolution},on:{"close-verifier":function(e){t.showSolution=!1,t.correctSolution=!1}}}),n("Buttons",{on:{"next-task":function(e){return t.nextTask()},restart:function(t){return this.$refs.restart.restart()},"check-solution":function(e){return t.checkSolution()},"show-tutorial":function(e){return t.activateTutorial()}}}),n("div",{staticClass:"flex-center flex-row"},[t._t("title",[t._v("Unintentionally empty title!")]),t._t("intro",[t._v("Unintentionally empty description!")])],2),n(this.type,{tag:"component",attrs:{restartGame:t.restartGame,nextTask:t.nextTask},on:{"correct-solution":function(e){t.correctSolution=!0},"false-solution":function(e){t.correctSolution=!1}}})],1)},i=[],o=n("d4ec"),s=n("bee2"),a=n("262e"),c=n("2caf"),u=n("9ab4"),l=n("1b40"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showModal?n("div",{staticClass:"modal-mask",attrs:{id:"tutorial-wrapper"},on:{mousedown:function(e){e.stopPropagation(),t.showModal=!1,t.$emit("close-tutorial")}}},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container",on:{mousedown:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal-header"},[n("h3",[t._v("Anleitung zum Spiel")]),n("button",{staticStyle:{margin:"0.5em"},on:{click:function(e){t.showModal=!1,t.$emit("close-tutorial")}}},[t._v(" × ")])]),n("div",{staticClass:"flex-item flex-center flex-space-between flex-col",attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"flex-item flex-center flex-space-between flex-row"},[n("div",{staticClass:"description equal-space"},[t._t("description",[t._v("Unintentionally empty!")])],2),n("div",{staticClass:"responsive equal-space"},[t._t("video",[t._v("Unintentionally empty!")])],2)])])])])]):t._e()},d=[],v=function(t){Object(a["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);Object(u["a"])([Object(l["b"])({required:!0})],v.prototype,"showModal",void 0),v=Object(u["a"])([Object(l["a"])({components:{}})],v);var p=v,h=p,m=(n("0f97"),n("2877")),b=Object(m["a"])(h,f,d,!1,null,"02369f00",null),g=b.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showSolution?r("div",{staticClass:"modal-mask",attrs:{id:"tutorial-wrapper"},on:{mousedown:function(e){e.stopPropagation(),t.showSolution=!1,t.$emit("close-verifier")}}},[r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal-container",on:{mousedown:function(t){t.stopPropagation()}}},[r("div",{staticClass:"modal-header"},[t.correctSolution?r("h3",[t._v("Du hast die Aufgabe richtig gelöst!")]):r("h3",[t._v("Das ist leider nicht richtig!")]),r("button",{staticClass:"exit-button",on:{click:function(e){t.showSolution=!1,t.$emit("close-verifier")}}},[t._v(" × ")])]),r("div",{staticClass:"flex-item flex-center flex-space-between flex-col",attrs:{slot:"body"},slot:"body"},[r("div",{staticClass:"flex-item flex-center flex-space-between flex-row"},[t.correctSolution?r("img",{staticStyle:{animation:"shake 1s"},attrs:{src:n("afa5")}}):r("img",{staticStyle:{animation:"shake 0.5s"},attrs:{src:n("978d")}})])])])])]):t._e()},y=[],x=function(t){Object(a["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);Object(u["a"])([Object(l["b"])({required:!0})],x.prototype,"correctSolution",void 0),Object(u["a"])([Object(l["b"])({required:!0})],x.prototype,"showSolution",void 0),x=Object(u["a"])([Object(l["a"])({components:{}})],x);var O=x,k=O,j=(n("7078"),Object(m["a"])(k,w,y,!1,null,"a38ccaf6",null)),_=j.exports,S=n("262c"),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"img-container"}},[r("img",{attrs:{src:n("5aed"),draggable:"false"}})]),r("img",{staticStyle:{width:"4%"},attrs:{src:n("e743")}})])},z=[],E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-item flex-wrap flex-center-horizontally flex-row",attrs:{id:"item-selection"}},t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"flex-item flex-wrap flex-center card clickable responsive",class:[{selected:e.type===t.selected},e.class],attrs:{id:"item-selection-"+e.id,draggable:""},on:{click:function(n){return t.$emit("selected",e.type)},dragstart:function(n){return t.$emit("selected",e.type)},dragover:function(t){t.preventDefault()},dragend:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[t.isPath(e.img)?r("img",{attrs:{src:n("1771")("./"+e.img)}}):r("div",[t._v(t._s(e.img))])])})),0)},I=[],$=(n("caad"),n("2532"),function(t){Object(a["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.selected=null,t}return Object(s["a"])(n,null,[{key:"isPath",value:function(t){return t.includes("/")}}]),n}(l["c"]));Object(u["a"])([Object(l["b"])({required:!0})],$.prototype,"items",void 0),$=Object(u["a"])([l["a"]],$);var D=$,T=D,U=Object(m["a"])(T,E,I,!1,null,"44cb4cc0",null),W=U.exports,A=function(t){Object(a["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);A=Object(u["a"])([Object(l["a"])({components:{ItemSelection:W}})],A);var N=A,P=N,R=(n("e689"),Object(m["a"])(P,C,z,!1,null,"e40b8e14",null)),q=R.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticStyle:{width:"60%"},attrs:{src:n("5144"),draggable:"false",usemap:"#workmap"}}),t._m(0),r("img",{staticStyle:{width:"6%"},attrs:{src:n("8d19")}})])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("map",{attrs:{name:"workmap"}},[n("area",{attrs:{shape:"rect",coords:"34,44,270,350",alt:"Computer",href:"/about"}})])}],G=function(t){Object(a["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);G=Object(u["a"])([l["a"]],G);var M=G,Q=M,J=Object(m["a"])(Q,B,F,!1,null,"faf89b78",null),K=J.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",[r("tr",{attrs:{id:"0"}},[t._m(0),t._l(t.colNumbers,(function(e){return r("td",{key:e,staticClass:"dropzone responsive",on:{click:function(n){return t.dropItem(e,1)},dragstart:function(n){return t.dropItem(e,1)},dragover:function(t){t.preventDefault()},dragend:function(t){t.preventDefault()},drop:function(n){return n.stopPropagation(),n.preventDefault(),t.dropItem(e,1)}}},[0!=t.rows[0][e-1]?r("img",{attrs:{src:n("f571")("./size"+t.rows[0][e-1]+".png")}}):t._e()])}))],2),r("tr",[t._m(1),t._l(t.colNumbers,(function(e){return r("td",{key:e,staticClass:"dropzone responsive ",on:{click:function(n){return t.dropItem(e,2)},dragstart:function(n){return t.dropItem(e,2)},dragover:function(t){t.preventDefault()},dragend:function(t){t.preventDefault()},drop:function(n){return n.stopPropagation(),n.preventDefault(),t.dropItem(e,2)}}},[0!=t.rows[1][e-1]?r("img",{attrs:{src:n("f571")("./size"+t.rows[1][e-1]+".png")}}):t._e()])}))],2),r("tr",[t._m(2),t._l(t.colNumbers,(function(e){return r("td",{key:e,staticClass:"dropzone responsive",on:{click:function(n){return t.dropItem(e,3)},dragstart:function(n){return t.dropItem(e,3)},dragover:function(t){t.preventDefault()},dragend:function(t){t.preventDefault()},drop:function(n){return n.stopPropagation(),n.preventDefault(),t.dropItem(e,3)}}},[0!=t.rows[2][e-1]?r("img",{attrs:{src:n("f571")("./size"+t.rows[2][e-1]+".png")}}):t._e()])}))],2)]),t._l(t.weights,(function(e){return r("div",{key:e,staticClass:"weight-depot card clickable",class:{selected:t.selectedItem==e},on:{click:function(n){t.selectedItem=e},dragstart:function(n){t.selectedItem=e}}},[r("img",{attrs:{src:n("f571")("./size"+e+".png")}})])}))],2)},L=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("h3",[t._v("Boot 1")]),r("img",{staticStyle:{width:"55%"},attrs:{src:n("161d"),draggable:"false"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("h3",[t._v("Boot 2")]),r("img",{staticStyle:{width:"55%"},attrs:{src:n("161d"),draggable:"false"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("h3",[t._v("Boot 3")]),r("img",{staticStyle:{width:"55%"},attrs:{src:n("161d"),draggable:"false"}})])}],Z=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),function(t){Object(a["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.weights=[1,2,3,4,5,6,7,8,10,12],t.weightSum=0,t.colNumbers=[1,2,3,4,5,6],t.rows=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],t.selectedItem=0,t.sum=0,t.usedWeights=new Set,t.correctSolution=!1,t.items=[{id:1,type:1,value:1,max:1,img:"/weights/size1.png"}],t}return Object(s["a"])(n,[{key:"addUpWeights",value:function(){for(var t=0,e=0;e<this.weights.length;e+=1)t+=this.weights[e];this.weightSum=t}},{key:"dropItem",value:function(t,e){0!==this.rows[e-1][t-1]&&(this.rows[e-1][t-1]=0),this.rows[e-1][t-1]=this.selectedItem,this.selectedItem=0,this.checkSolution()}},{key:"restart",value:function(){this.selectedItem=0,this.rows=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]}},{key:"checkSolution",value:function(){this.sumArray()&&this.allWeightsUsed()?this.$emit("correct-solution"):this.$emit("false-solution")}},{key:"sumArray",value:function(){this.addUpWeights();for(var t=0,e=0,n=!1,r=0;r<3;r+=1){for(var i=0;i<6;i+=1)t+=this.rows[r][i];t>20&&(n=!0),e+=t,t=0}return this.sum=e,e===this.weightSum&&!n}},{key:"allWeightsUsed",value:function(){this.usedWeights.clear();for(var t=0;t<3;t+=1)for(var e=0;e<6;e+=1){if(this.usedWeights.has(this.rows[t][e])&&0!==this.rows[t][e])return!1;this.usedWeights.add(this.rows[t][e])}return this.usedWeights.size===this.weights.length+1}}]),n}(l["c"]));Object(u["a"])([Object(l["b"])({required:!0})],Z.prototype,"restartGame",void 0),Z=Object(u["a"])([Object(l["a"])({components:{}})],Z);var H=Z,X=H,Y=(n("850f"),Object(m["a"])(X,V,L,!1,null,"15954377",null)),tt=Y.exports,et=function(t){Object(a["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.nextTask=!1,t.restartGame=!1,t.showTutorial=!1,t.correctSolution=!1,t.showSolution=!1,t}return Object(s["a"])(n,[{key:"currentGameComponent",get:function(){return this.type}},{key:"activateTutorial",value:function(){this.showTutorial=!0}},{key:"checkSolution",value:function(){this.showSolution=!0}}]),n}(l["c"]);Object(u["a"])([Object(l["b"])({required:!0})],et.prototype,"type",void 0),et=Object(u["a"])([Object(l["a"])({components:{Tutorial:g,Verifier:_,Buttons:S["a"],Towers:q,Bridges:K,Weights:tt}})],et);var nt=et,rt=nt,it=(n("8a01"),Object(m["a"])(rt,r,i,!1,null,"67f1f074",null));e["a"]=it.exports},"262c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"buttons"},[r("router-link",{attrs:{to:"/"}},[r("button",{staticClass:"flex-item flex-center card clickable responsive"},[r("h3",[t._v("Zurück")]),r("img",{attrs:{src:n("0142")}})])]),r("button",{staticClass:"flex-item flex-center card clickable responsive",on:{click:function(e){return t.$emit("next-task")}}},[r("h3",[t._v("Nächste Aufgabe")]),r("img",{attrs:{src:n("de63")}})]),r("button",{staticClass:"flex-item flex-center card clickable responsive",on:{click:function(e){return t.$emit("restart")}}},[r("h3",[t._v("Neu starten")]),r("img",{attrs:{src:n("d6e5")}})]),r("button",{staticClass:"flex-item flex-center card clickable responsive",on:{click:function(e){return t.$emit("check-solution")}}},[r("h3",[t._v("Überprüfen")]),r("img",{attrs:{src:n("e209")}})]),r("button",{staticClass:"flex-item flex-center card clickable responsive",on:{click:function(e){return t.$emit("show-tutorial")}}},[r("h3",[t._v("Anleitung")]),r("img",{attrs:{src:n("be4c")}})])],1)])},i=[],o=n("d4ec"),s=n("262e"),a=n("2caf"),c=n("9ab4"),u=n("1b40"),l=function(t){Object(s["a"])(n,t);var e=Object(a["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.showAnimation=!1,t}return n}(u["c"]);l=Object(c["a"])([Object(u["a"])({components:{}})],l);var f=l,d=f,v=(n("d13c"),n("2877")),p=Object(v["a"])(d,r,i,!1,null,"0f3f957f",null);e["a"]=p.exports},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},5959:function(t,e,n){},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),o=n("e2cc"),s=n("0366"),a=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),p=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){a(t,l,e),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[u],{that:t,AS_ENTRIES:n})})),v=h(e),m=function(t,e,n){var r,i,o=v(t),s=b(t,e);return s?s.value=n:(o.last=s={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),f?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},b=function(t,e){var n,r=v(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=b(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),o(l.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),f&&r(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",i=h(e),o=h(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),b=h?"set":"add",g=i[t],w=g&&g.prototype,y=g,x={},O=function(t){var e=w[t];s(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},k=o(t,"function"!=typeof g||!(m||w.forEach&&!f((function(){(new g).entries().next()}))));if(k)y=n.getConstructor(e,t,h,b),a.REQUIRED=!0;else if(o(t,!0)){var j=new y,_=j[b](m?{}:-0,1)!=j,S=f((function(){j.has(1)})),C=d((function(t){new g(t)})),z=!m&&f((function(){var t=new g,e=5;while(e--)t[b](e,e);return!t.has(-0)}));C||(y=e((function(e,n){u(e,y,t);var r=p(new g,e,y);return void 0!=n&&c(n,r[b],{that:r,AS_ENTRIES:h}),r})),y.prototype=w,w.constructor=y),(S||z)&&(O("delete"),O("has"),h&&O("get")),(z||_)&&O(b),m&&w.clear&&delete w.clear}return x[t]=y,r({global:!0,forced:y!=g},x),v(y,t),m||n.setStrong(y,t,h),y}},7078:function(t,e,n){"use strict";n("ddc6")},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,s;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(t,s),t}},"850f":function(t,e,n){"use strict";n("affc")},"8a01":function(t,e,n){"use strict";n("9e1f")},"8ee9":function(t,e,n){},"9e1f":function(t,e,n){},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},affc:function(t,e,n){},b2db:function(t,e,n){},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d13c:function(t,e,n){"use strict";n("b2db")},ddc6:function(t,e,n){},e689:function(t,e,n){"use strict";n("8ee9")},f183:function(t,e,n){var r=n("d012"),i=n("861d"),o=n("5135"),s=n("9bf2").f,a=n("90e3"),c=n("bb2f"),u=a("meta"),l=0,f=Object.isExtensible||function(){return!0},d=function(t){s(t,u,{value:{objectID:"O"+ ++l,weakData:{}}})},v=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,u)){if(!f(t))return"F";if(!e)return"E";d(t)}return t[u].objectID},p=function(t,e){if(!o(t,u)){if(!f(t))return!0;if(!e)return!1;d(t)}return t[u].weakData},h=function(t){return c&&m.REQUIRED&&f(t)&&!o(t,u)&&d(t),t},m=t.exports={REQUIRED:!1,fastKey:v,getWeakData:p,onFreeze:h};r[u]=!0},f571:function(t,e,n){var r={"./size1.png":"b384","./size10.png":"f0ad","./size12.png":"b6b1","./size2.png":"a30c","./size3.png":"87af","./size4.png":"4afd","./size5.png":"0fcb","./size6.png":"efac","./size7.png":"77c5","./size8.png":"7281"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="f571"}}]);
//# sourceMappingURL=chunk-32188882.eae76a79.js.map