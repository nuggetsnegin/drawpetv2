(function(t){function a(a){for(var n,c,r=a[0],i=a[1],l=a[2],d=0,f=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(a);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,r=1;r<e.length;r++){var i=e[r];0!==s[i]&&(n=!1)}n&&(o.splice(a--,1),t=c(c.s=e[0]))}return t}var n={},s={app:0},o=[];function c(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)c.d(e,n,function(a){return t[a]}.bind(null,n));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var u=i;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("85ec"),s=e.n(n);s.a},"323b":function(t,a,e){},"535f":function(t,a,e){"use strict";var n=e("323b"),s=e.n(n);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Main",{staticClass:"canvas"}),e("Gallery",{staticClass:"gallery"}),e("Footer",{staticClass:"footer"})],1)},o=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"wrapper"},[t._m(0),t._m(1),e("Canvas")],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("span",{staticClass:"draw-icon"},[t._v("✏")]),e("h1",[t._v("Draw my "),e("span",{staticClass:"accent"},[t._v("Pet")])]),e("span",{staticClass:"window-icons"},[e("i",{staticClass:"fas fa-window-minimize"}),e("i",{staticClass:"far fa-window-maximize"}),e("i",{staticClass:"fas fa-times"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" Draw your "),e("span",{staticClass:"accent"},[t._v("pet")]),t._v(" (imaginary or real) in the canvas below! Use the "),e("span",{staticClass:"accent"},[t._v("save")]),t._v(" feature so the entire world can see your masterpiece. ")])}],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"settings-canvas-grid"},[e("div",{staticClass:"canvas-wrap",attrs:{id:"canvas-wrap"}},[e("canvas",{ref:"canvas",staticClass:"draw",attrs:{id:"canvas",height:"500",width:"500"},on:{mousedown:t.startDrawing,mouseup:t.stopDrawing,mousemove:t.draw}})]),e("div",{staticClass:"draw-options"},[e("button",{staticClass:"pencil",attrs:{id:"pencil"}},[e("label",{attrs:{for:"color-selection"}},[t._v("Color ")]),e("input",{staticClass:"color-selection",attrs:{name:"color-selection",type:"color"},on:{change:this.getColor}})]),e("button",{staticClass:"eraser",attrs:{id:"eraser"},on:{click:t.erase}},[t._v(" Eraser ")]),e("button",{staticClass:"random-color",attrs:{id:"random-color"},on:{click:t.getRandomColor}},[t._v(" ??? ")]),e("button",{staticClass:"clear",attrs:{id:"clear"},on:{click:t.clear}},[t._v("Clear")]),e("button",{staticClass:"save",attrs:{id:"save"},on:{click:t.save}},[t._v("Save")])]),e("div",{staticClass:"quick-colors",attrs:{id:"colors"}},[e("button",{staticClass:"color-1 box",staticStyle:{background:"black"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-2 box",staticStyle:{background:"gray"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-3 box",staticStyle:{background:"red"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-4 box",staticStyle:{background:"orange"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-5 box",staticStyle:{background:"yellow"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-6 box",staticStyle:{background:"green"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-7 box",staticStyle:{background:"blue"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-8 box",staticStyle:{background:"purple"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-9 box",staticStyle:{background:"hotpink"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-10 box",staticStyle:{background:"white"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-11 box",staticStyle:{background:"lightsteelblue"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-12 box",staticStyle:{background:"saddlebrown"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-13 box",staticStyle:{background:"honeydew"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-14 box",staticStyle:{background:"lavenderblush"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-15 box",staticStyle:{background:"mediumslateblue"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-16 box",staticStyle:{background:"springgreen"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-17 box",staticStyle:{background:"salmon"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-19 box",staticStyle:{background:"turquoise"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-20 box",staticStyle:{background:"burlywood"},on:{click:this.getQuickColor}}),e("button",{staticClass:"color-21 box",staticStyle:{background:"beige"},on:{click:this.getQuickColor}})])])},l=[],u=(e("45fc"),e("d3b7"),e("25f0"),e("fb2c"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("96cf"),e("1da1")),d=e("8aa5"),f=e.n(d),b={apiKey:"AIzaSyBFZkh-PYJFB6bvPzwyV-9SuKe6_HfJKog",authDomain:"petcanvas-94d74.firebaseapp.com",databaseURL:"https://petcanvas-94d74.firebaseio.com",projectId:"petcanvas-94d74",storageBucket:"petcanvas-94d74.appspot.com",messagingSenderId:"325789857084",appId:"1:325789857084:web:66e9c19ce2398236d29a39"};f.a.initializeApp(b);var g=f.a,h=e("3d20"),p=e.n(h),v={name:"Canvas",data:function(){return{canvas:null,ctx:null,drawing:!1,startX:0,startY:0}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.ctx.lineWidth=10,this.ctx.lineCap="round",this.ctx.lineJoin="round"},methods:{startDrawing:function(t){var a=this.canvas.getBoundingClientRect(),e=t.clientX-a.left,n=t.clientY-a.top;this.startX=e,this.startY=n,this.drawing=!0,this.draw(t)},stopDrawing:function(){this.drawing=!1,this.ctx.beginPath()},draw:function(t){var a=this.canvas.getBoundingClientRect(),e=t.clientX-a.left,n=t.clientY-a.top;this.drawing&&(this.ctx.lineTo(e,n),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(this.startX,this.startY),this.startX=e,this.startY=n)},getColor:function(t){var a=t.currentTarget.value;this.ctx.strokeStyle=a},getQuickColor:function(t){var a=t.currentTarget.style.backgroundColor;this.ctx.strokeStyle=a},clear:function(){this.ctx.clearRect(0,0,500,500),this.drawing=!1},erase:function(){this.ctx.strokeStyle="white"},getRandomColor:function(){for(var t="0123456789ABCDEF",a="#",e=0;e<6;e++)a+=t[Math.floor(16*Math.random())];return this.ctx.strokeStyle=a},getCanvas:function(){var t=new Uint32Array(this.ctx.getImageData(0,0,500,500).data.buffer);return!t.some((function(t){return 0!==t}))},save:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var e,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=g.storage().ref(),n=t.generateID(),s=t.canvas.toDataURL(),t.getCanvas(t.canvas.current)){a.next=12;break}return document.getElementById("save").disabled=!1,a.next=7,fetch(s).then((function(t){return t.blob()})).then((function(t){return e.child(n).put(t)})).catch((function(t){p.a.fire({title:"Error!",text:"Something broke..",icon:"error"}),console.log(t)}));case 7:return p.a.fire({title:"Success!",text:"Drawing saved! Page will now reload.",icon:"success"}),setTimeout((function(){location.reload()}),5e3),a.abrupt("return",!1);case 12:p.a.fire({title:"Oops..",text:"Cannot save an empty canvas! 😢",icon:"warning"});case 13:case"end":return a.stop()}}),a)})))()},generateID:function(){var t=Math.random().toString(36).substring(7);return t}}},C=v,k=(e("fc6b"),e("2877")),m=Object(k["a"])(C,i,l,!1,null,"f4aa1488",null),y=m.exports,w={name:"Main",components:{Canvas:y}},x=w,_=(e("535f"),Object(k["a"])(x,c,r,!1,null,"788d3788",null)),S=_.exports,Q=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"gallery"},[e("header",{staticClass:"gallery-header"},[e("span",{staticClass:"draw-icon"}),e("h2",{staticClass:"gallery-text"},[t._v("Gallery")]),e("span",{staticClass:"window-icons"},[e("i",{staticClass:"fas fa-window-minimize"}),e("i",{staticClass:"far fa-window-maximize"}),e("i",{staticClass:"fas fa-times"})])]),e("aside",{staticClass:"gallery-wrapper"},[e("ul",{staticClass:"gallery-list"},[e("li",{staticClass:"gallery-item vibrate",attrs:{id:"gallery"}})])])])}],j=(e("4160"),e("159b"),{name:"Gallery",mounted:function(){var t=g.storage().ref(),a=document.createElement("LI"),e=t.listAll();e.then((function(t){t.items.forEach((function(t){t.getDownloadURL().then((function(t){var e=t,n=new Image(130,130);n.src=e,a.appendChild(n),document.getElementById("gallery").appendChild(a)}))}))}))}}),E=j,D=(e("7d8a"),Object(k["a"])(E,Q,O,!1,null,null,null)),P=D.exports,I=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("p",[t._v("🌟"),e("a",{attrs:{href:"https://negi.dev/",target:"_blank"}},[t._v("Negin Melina Sauermann")]),t._v(" © 2020🌟")])])}],$={name:"Footer"},R=$,B=(e("d229"),Object(k["a"])(R,I,M,!1,null,"68d6d708",null)),T=B.exports,z={name:"App",components:{Main:S,Footer:T,Gallery:P}},Y=z,A=(e("034f"),Object(k["a"])(Y,s,o,!1,null,null,null)),F=A.exports,X=e("5886");n["a"].use(X["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(F)}}).$mount("#app")},"5e43":function(t,a,e){},"7d8a":function(t,a,e){"use strict";var n=e("5e43"),s=e.n(n);s.a},"85ec":function(t,a,e){},c125:function(t,a,e){},cce8:function(t,a,e){},d229:function(t,a,e){"use strict";var n=e("cce8"),s=e.n(n);s.a},fc6b:function(t,a,e){"use strict";var n=e("c125"),s=e.n(n);s.a}});
//# sourceMappingURL=app.b59d6c93.js.map