(function(t){function e(e){for(var a,c,i=e[0],o=e[1],l=e[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"1e07":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Main",{staticClass:"canvas"}),n("Gallery",{staticClass:"gallery"}),n("Footer",{staticClass:"footer"})],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"wrapper"},[t._m(0),t._m(1),n("Canvas")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Draw my "),n("span",{staticClass:"accent"},[t._v("Pet")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Draw your "),n("span",{staticClass:"accent"},[t._v("pet")]),t._v(" (imaginary or real) in the canvas below! Use the "),n("span",{staticClass:"accent"},[t._v("save")]),t._v(" feature so the entire world can see your masterpiece. ")])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-canvas-grid"},[n("div",{staticClass:"canvas-wrap",attrs:{id:"canvas-wrap"}},[n("canvas",{ref:"canvas",staticClass:"draw",attrs:{id:"canvas",height:"500",width:"500"},on:{mousedown:t.startDrawing,mouseup:t.stopDrawing,mousemove:t.draw}})]),n("div",{staticClass:"draw-options"},[n("button",{staticClass:"pencil",attrs:{id:"pencil"}},[n("label",{attrs:{for:"color-selection"}},[t._v("Color ")]),n("input",{staticClass:"color-selection",attrs:{name:"color-selection",type:"color",id:"color-selection"},on:{change:this.getColor}})]),n("button",{staticClass:"eraser",attrs:{id:"eraser"},on:{click:t.erase}},[t._v(" Eraser ")]),n("button",{staticClass:"random-color",attrs:{id:"random-color"},on:{click:t.getRandomColor}},[t._v(" ??? ")]),n("button",{staticClass:"clear",attrs:{id:"clear"},on:{click:t.clear}},[t._v("Clear")]),n("button",{staticClass:"save",attrs:{id:"save"},on:{click:t.save}},[t._v("Save")])]),n("Gallery")],1)},l=[],u=(n("d3b7"),n("25f0"),n("96cf"),n("1da1")),f=n("8aa5"),d=n.n(f),p={apiKey:"AIzaSyBFZkh-PYJFB6bvPzwyV-9SuKe6_HfJKog",authDomain:"petcanvas-94d74.firebaseapp.com",databaseURL:"https://petcanvas-94d74.firebaseio.com",projectId:"petcanvas-94d74",storageBucket:"petcanvas-94d74.appspot.com",messagingSenderId:"325789857084",appId:"1:325789857084:web:66e9c19ce2398236d29a39"};d.a.initializeApp(p);var v=d.a,h={name:"Canvas",data:function(){return{canvas:null,ctx:null,drawing:!1,startX:0,startY:0}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.ctx.lineWidth=10,this.ctx.lineCap="round",this.ctx.lineJoin="round"},methods:{startDrawing:function(t){var e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,a=t.clientY-e.top;this.startX=n,this.startY=a,this.drawing=!0,this.draw(t)},stopDrawing:function(){this.drawing=!1,this.ctx.beginPath()},draw:function(t){var e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,a=t.clientY-e.top;this.drawing&&(this.ctx.lineTo(n,a),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(this.startX,this.startY),this.startX=n,this.startY=a)},getColor:function(t){var e=t.currentTarget.value;this.ctx.strokeStyle=e},clear:function(){this.ctx.clearRect(0,0,500,500),this.drawing=!1},erase:function(){this.ctx.strokeStyle="white"},getRandomColor:function(){for(var t="0123456789ABCDEF",e="#",n=0;n<6;n++)e+=t[Math.floor(16*Math.random())];return this.ctx.strokeStyle=e},save:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=v.storage().ref(),a=t.generateID(),r=t.canvas.toDataURL(),document.getElementById("save").disabled=!1,e.next=6,fetch(r).then((function(t){return t.blob()})).then((function(t){return n.child(a).put(t)})).catch((function(t){console.log(t)}));case 6:return location.reload(),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})))()},generateID:function(){var t=Math.random().toString(36).substring(7);return t}}},g=h,m=(n("973d"),n("2877")),b=Object(m["a"])(g,o,l,!1,null,"6e04f5c7",null),w=b.exports,y={name:"Main",components:{Canvas:w}},_=y,C=(n("c8fc"),Object(m["a"])(_,c,i,!1,null,"cc7e9364",null)),x=C.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"gallery-wrapper"},[n("ul",{staticClass:"gallery-list"},[n("li",{staticClass:"gallery-item vibrate",attrs:{id:"gallery"}})])])}],k=(n("4160"),n("159b"),{name:"Gallery",mounted:function(){var t=v.storage().ref(),e=document.createElement("LI"),n=t.listAll();n.then((function(t){t.items.forEach((function(t){t.getDownloadURL().then((function(t){var n=t,a=new Image(130,130);a.src=n,e.appendChild(a),document.getElementById("gallery").appendChild(e)}))}))}))}}),E=k,S=(n("7d8a"),Object(m["a"])(E,O,j,!1,null,null,null)),D=S.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v("🌟Negin Melina Sauermann © 2020🌟")])},M=[],I={name:"Footer"},R=I,$=(n("b4b1"),Object(m["a"])(R,P,M,!1,null,"4dcd1c2f",null)),B=$.exports,Y={name:"App",components:{Main:x,Footer:B,Gallery:D}},F=Y,T=(n("034f"),Object(m["a"])(F,r,s,!1,null,null,null)),X=T.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(X)}}).$mount("#app")},"5e43":function(t,e,n){},"63e5":function(t,e,n){},"7d8a":function(t,e,n){"use strict";var a=n("5e43"),r=n.n(a);r.a},"85ec":function(t,e,n){},"87cf":function(t,e,n){},"973d":function(t,e,n){"use strict";var a=n("87cf"),r=n.n(a);r.a},b4b1:function(t,e,n){"use strict";var a=n("63e5"),r=n.n(a);r.a},c8fc:function(t,e,n){"use strict";var a=n("1e07"),r=n.n(a);r.a}});
//# sourceMappingURL=app.5090d331.js.map