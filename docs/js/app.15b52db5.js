(function(t){function e(e){for(var n,i,o=e[0],r=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,o=1;o<a.length;o++){var r=a[o];0!==s[r]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},c=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"323b":function(t,e,a){},3947:function(t,e,a){"use strict";var n=a("c594"),s=a.n(n);s.a},"535f":function(t,e,a){"use strict";var n=a("323b"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Main",{staticClass:"canvas"}),a("Gallery",{staticClass:"gallery"}),a("Footer",{staticClass:"footer"})],1)},c=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"wrapper"},[t._m(0),t._m(1),a("Canvas")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("span",{staticClass:"draw-icon"},[t._v("✏")]),a("h1",[t._v("Draw my "),a("span",{staticClass:"accent"},[t._v("Pet")])]),a("span",{staticClass:"window-icons"},[a("i",{staticClass:"fas fa-window-minimize"}),a("i",{staticClass:"far fa-window-maximize"}),a("i",{staticClass:"fas fa-times"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Draw your "),a("span",{staticClass:"accent"},[t._v("pet")]),t._v(" (imaginary or real) in the canvas below! Use the "),a("span",{staticClass:"accent"},[t._v("save")]),t._v(" feature so the entire world can see your masterpiece. ")])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings-canvas-grid"},[a("div",{staticClass:"canvas-wrap",attrs:{id:"canvas-wrap"}},[a("canvas",{ref:"canvas",staticClass:"draw",attrs:{id:"canvas",height:"500",width:"500"},on:{mousedown:t.startDrawing,mouseup:t.stopDrawing,mousemove:t.draw}})]),a("div",{staticClass:"draw-options"},[a("button",{staticClass:"pencil",attrs:{id:"pencil"}},[a("label",{attrs:{for:"color-selection"}},[t._v("Color ")]),a("input",{staticClass:"color-selection",attrs:{name:"color-selection",type:"color"},on:{change:this.getColor}})]),a("button",{staticClass:"eraser",attrs:{id:"eraser"},on:{click:t.erase}},[t._v(" Eraser ")]),a("button",{staticClass:"random-color",attrs:{id:"random-color"},on:{click:t.getRandomColor}},[t._v(" ??? ")]),a("button",{staticClass:"clear",attrs:{id:"clear"},on:{click:t.clear}},[t._v("Clear")]),a("button",{staticClass:"save",attrs:{id:"save"},on:{click:t.save}},[t._v("Save")])]),a("div",{staticClass:"quick-colors",attrs:{id:"colors"}},[a("button",{staticClass:"color-1 box",staticStyle:{background:"black"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-2 box",staticStyle:{background:"gray"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-3 box",staticStyle:{background:"red"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-4 box",staticStyle:{background:"orange"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-5 box",staticStyle:{background:"yellow"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-6 box",staticStyle:{background:"green"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-7 box",staticStyle:{background:"blue"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-8 box",staticStyle:{background:"purple"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-9 box",staticStyle:{background:"hotpink"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-10 box",staticStyle:{background:"white"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-11 box",staticStyle:{background:"lightsteelblue"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-12 box",staticStyle:{background:"saddlebrown"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-13 box",staticStyle:{background:"honeydew"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-14 box",staticStyle:{background:"lavenderblush"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-15 box",staticStyle:{background:"mediumslateblue"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-16 box",staticStyle:{background:"springgreen"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-17 box",staticStyle:{background:"salmon"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-19 box",staticStyle:{background:"turquoise"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-20 box",staticStyle:{background:"burlywood"},on:{click:this.getQuickColor}}),a("button",{staticClass:"color-21 box",staticStyle:{background:"beige"},on:{click:this.getQuickColor}})]),a("button",{staticClass:"pensize"},[a("button",{staticClass:"pensize-small",staticStyle:{padding:"5px"},on:{click:this.getPenSize}}),a("button",{staticClass:"pensize-medium",staticStyle:{padding:"10px"},on:{click:this.getPenSize}}),a("button",{staticClass:"pensize-large",staticStyle:{padding:"15px"},on:{click:this.getPenSize}}),a("button",{staticClass:"pensize-xlarge",staticStyle:{padding:"20px"},on:{click:this.getPenSize}})])])},l=[],u=(a("45fc"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("fb2c"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("96cf"),a("1da1")),d=a("8aa5"),f=a.n(d),g={apiKey:"AIzaSyBFZkh-PYJFB6bvPzwyV-9SuKe6_HfJKog",authDomain:"petcanvas-94d74.firebaseapp.com",databaseURL:"https://petcanvas-94d74.firebaseio.com",projectId:"petcanvas-94d74",storageBucket:"petcanvas-94d74.appspot.com",messagingSenderId:"325789857084",appId:"1:325789857084:web:66e9c19ce2398236d29a39"};f.a.initializeApp(g);var b=f.a,p=a("3d20"),h=a.n(p),v={name:"Canvas",data:function(){return{canvas:null,ctx:null,drawing:!1,startX:0,startY:0}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.ctx.lineWidth=10,this.ctx.lineCap="round",this.ctx.lineJoin="round"},methods:{startDrawing:function(t){var e=this.canvas.getBoundingClientRect(),a=t.clientX-e.left,n=t.clientY-e.top;this.startX=a,this.startY=n,this.drawing=!0,this.draw(t)},stopDrawing:function(){this.drawing=!1,this.ctx.beginPath()},draw:function(t){var e=this.canvas.getBoundingClientRect(),a=t.clientX-e.left,n=t.clientY-e.top;this.drawing&&(this.ctx.lineTo(a,n),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(this.startX,this.startY),this.startX=a,this.startY=n)},getColor:function(t){var e=t.currentTarget.value;this.ctx.strokeStyle=e},getQuickColor:function(t){var e=t.currentTarget.style.backgroundColor;this.ctx.strokeStyle=e},clear:function(){this.ctx.clearRect(0,0,500,500),this.drawing=!1},erase:function(){this.ctx.strokeStyle="white"},getRandomColor:function(){for(var t="0123456789ABCDEF",e="#",a=0;a<6;a++)e+=t[Math.floor(16*Math.random())];return this.ctx.strokeStyle=e},getPenSize:function(t){var e=t.currentTarget.style.padding.replace("px","");this.ctx.lineWidth=e},getCanvas:function(){var t=new Uint32Array(this.ctx.getImageData(0,0,500,500).data.buffer);return!t.some((function(t){return 0!==t}))},save:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=b.storage().ref(),n=t.generateID(),s=t.canvas.toDataURL(),t.getCanvas(t.canvas.current)){e.next=12;break}return document.getElementById("save").disabled=!1,e.next=7,fetch(s).then((function(t){return t.blob()})).then((function(t){return a.child(n).put(t)})).catch((function(t){h.a.fire({title:"Error!",text:"Something broke..",icon:"error"}),console.log(t)}));case 7:return h.a.fire({title:"Success!",text:"Drawing saved! Page will now reload.",icon:"success"}),setTimeout((function(){location.reload()}),5e3),e.abrupt("return",!1);case 12:h.a.fire({title:"Oops..",text:"Cannot save an empty canvas! 😢",icon:"warning"});case 13:case"end":return e.stop()}}),e)})))()},generateID:function(){var t=Math.random().toString(36).substring(7);return t}}},C=v,k=(a("3947"),a("2877")),m=Object(k["a"])(C,r,l,!1,null,"84eab3a2",null),y=m.exports,w={name:"Main",components:{Canvas:y}},x=w,_=(a("535f"),Object(k["a"])(x,i,o,!1,null,"788d3788",null)),S=_.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery"},[a("header",{staticClass:"gallery-header"},[a("span",{staticClass:"draw-icon"}),a("h2",{staticClass:"gallery-text"},[t._v("Gallery")]),a("span",{staticClass:"window-icons"},[a("i",{staticClass:"fas fa-window-minimize"}),a("i",{staticClass:"far fa-window-maximize"}),a("i",{staticClass:"fas fa-times"})])]),a("aside",{staticClass:"gallery-wrapper"},[a("ul",{staticClass:"gallery-list"},[a("li",{staticClass:"gallery-item vibrate",attrs:{id:"gallery"}})])])])}],P=(a("4160"),a("159b"),{name:"Gallery",mounted:function(){var t=b.storage().ref(),e=document.createElement("LI"),a=t.listAll();a.then((function(t){t.items.forEach((function(t){t.getDownloadURL().then((function(t){var a=t,n=new Image(130,130);n.src=a,e.appendChild(n),document.getElementById("gallery").appendChild(e)}))}))}))}}),z=P,j=(a("7d8a"),Object(k["a"])(z,Q,O,!1,null,null,null)),E=j.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",[t._v("🌟"),a("a",{attrs:{href:"https://negi.dev/",target:"_blank"}},[t._v("Negin Melina Sauermann")]),t._v(" © 2020🌟")])])}],M={name:"Footer"},$=M,R=(a("d229"),Object(k["a"])($,D,I,!1,null,"68d6d708",null)),T=R.exports,B={name:"App",components:{Main:S,Footer:T,Gallery:E}},Y=B,A=(a("034f"),Object(k["a"])(Y,s,c,!1,null,null,null)),F=A.exports,X=a("5886");n["a"].use(X["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(F)}}).$mount("#app")},"5e43":function(t,e,a){},"7d8a":function(t,e,a){"use strict";var n=a("5e43"),s=a.n(n);s.a},"85ec":function(t,e,a){},c594:function(t,e,a){},cce8:function(t,e,a){},d229:function(t,e,a){"use strict";var n=a("cce8"),s=a.n(n);s.a}});
//# sourceMappingURL=app.15b52db5.js.map