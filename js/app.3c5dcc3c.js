(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},o={app:0},a=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Simon/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"122e":function(e,t,i){e.exports=i.p+"media/2.d2c4a2c4.mp3"},"3c61":function(e,t,i){},"3f26":function(e,t,i){e.exports=i.p+"media/4.36d5a722.mp3"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("h1",[e._v("Simon Says")]),i("div",{staticClass:"game-board"},[i("div",{staticClass:"simon"},[i("ul",e._l(e.tiles,(function(t,n){return i("li",{key:n,class:[{active:t.activeTile,hoverable:e.isHoverable,lit:t.isLittenTile},t.tileColor],attrs:{"data-tile":t.dataTile},on:{click:function(i){e.registerClick(t),e.playSound(t)},mousedown:function(i){e.deactivated?t.activeTile=!1:t.activeTile=!0},mouseup:function(e){t.activeTile=!1}}})})),0)])]),i("div",{staticClass:"game-info"},[i("h2",[e._v("Round: "),i("span",{domProps:{textContent:e._s(e.dataRound)}})]),i("button",{on:{click:e.startGame}},[e._v("Start")]),this.ifLost?i("p",{staticClass:"lose__message"},[e._v("Sorry, you lost after "),i("span",{domProps:{textContent:e._s(e.dataRound)}}),e._v(" rounds! ")]):e._e()]),i("div",{staticClass:"game-options"},[i("h2",[e._v("Game Options:")]),e._l(e.modes,(function(t,n){return i("div",{key:n},[i("input",{attrs:{type:"radio",name:"mode",checked:""},domProps:{value:t.value},on:{click:function(i){return e.changeMode(t)}}}),e._v(e._s(t.name)),i("br")])}))],2)])},o=[],a=(i("fb6a"),i("b0c0"),i("3c61"),{name:"App",data:function(){return{sequence:[],copy:[],mode:{name:"free-board",time:1e3},dataRound:0,deactivated:!0,active:!1,ifLost:!1,isHoverable:!1,modes:{hard:{value:"hard",name:"Hard",checked:!1,time:400},normal:{value:"normal",name:"Normal",checked:!0,time:1e3},easy:{value:"easy",name:"Easy",checked:!1,time:1500},sound:{value:"sound-only",name:"Sound Only",checked:!1,time:600},light:{value:"light-only",name:"Light Only",checked:!1,time:600},free:{value:"free-board",name:"Free board",checked:!1,time:600}},tiles:{1:{tileColor:"tile red",dataTile:1,activeTile:!1,isLittenTile:!1},2:{tileColor:"tile blue",dataTile:2,activeTile:!1,isLittenTile:!1},3:{tileColor:"tile yellow",dataTile:3,activeTile:!1,isLittenTile:!1},4:{tileColor:"tile green",dataTile:4,activeTile:!1,isLittenTile:!1}}}},methods:{randomNumber:function(){return Math.floor(4*Math.random()+1)},startGame:function(){this.sequence=[],this.copy=[],this.dataRound=0,this.active=!0,this.ifLost=!1,this.newRound()},newRound:function(){this.deactivated=!1,this.isHoverable=!0,this.dataRound++,this.sequence.push(this.randomNumber()),this.copy=this.sequence.slice(0),this.animate()},registerClick:function(e){if(!this.deactivated){var t=this.copy.shift(),i=e.dataTile;this.active=t===i,this.checkLose()}},playSound:function(e){var t=new Audio(i("df68")("./".concat(e.dataTile,".mp3")));this.sound=e.dataTile,"light-only"===this.mode.name||this.deactivated||t.play()},changeMode:function(e){this.mode.name=e.value,this.mode.time=e.time},checkLose:function(){"free-board"!==this.mode.name&&(0===this.copy.length&&this.active?(this.deactivateSimonBoard(),this.newRound()):this.active||(this.deactivateSimonBoard(),this.ifLost=!0))},deactivateSimonBoard:function(){this.deactivated=!0,this.isHoverable=!1},lightUp:function(e){"sound-only"!==this.mode.name&&(e.isLittenTile=!0,setTimeout((function(){e.isLittenTile=!1}),this.mode.time))},animate:function(){var e=0,t=this,i=setInterval((function(){t.lightUp(t.tiles[t.sequence[e]]),t.playSound(t.tiles[t.sequence[e]]),e++,e>=t.sequence.length&&(clearInterval(i),t.deactivated=!1)}),this.mode.time/1.5)}}}),r=a,s=i("2877"),c=Object(s["a"])(r,n,o,!1,null,null,null),l=c.exports,d=i("2b0e");d["a"].config.productionTip=!1,d["a"].config.devtools=!0,new d["a"]({render:function(e){return e(l)}}).$mount("#app")},aedf:function(e,t,i){e.exports=i.p+"media/3.c1c96b44.mp3"},df68:function(e,t,i){var n={"./1.mp3":"fdf0","./2.mp3":"122e","./3.mp3":"aedf","./4.mp3":"3f26"};function o(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="df68"},fdf0:function(e,t,i){e.exports=i.p+"media/1.99e50f7d.mp3"}});
//# sourceMappingURL=app.3c5dcc3c.js.map