(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,i,c=n(0),r=n.n(c),o=n(9),u=n.n(o),s=(n(17),n(2));!function(e){e.TOP="TOP",e.BOTTOM="BOTTOM",e.LEFT="LEFT",e.RIGHT="RIGHT"}(a||(a={})),function(e){e.MENU="MENU",e.PLAY="PLAY",e.END="END"}(i||(i={}));var d=n(5),l=n(6),f=function(){function e(t,n){Object(d.a)(this,e),this.x=t,this.y=n}return Object(l.a)(e,[{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}}],[{key:"random",value:function(t){return new e(Math.floor(Math.random()*t),Math.floor(Math.random()*t))}}]),e}(),h=n(1),y=n(10),b=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.RIGHT;Object(d.a)(this,e),this.body=t,this.direction=n}return Object(l.a)(e,[{key:"getHead",value:function(){return this.body[0]}},{key:"hasEatenSelf",value:function(){var e=Object(y.a)(this.body),t=e[0];return e.slice(1).findIndex(function(e){return e.equals(t)})>=0}},{key:"hasLeftGrid",value:function(e){var t=Object(s.a)(this.body,1)[0];return t.x<0||t.y<0||t.x>e-1||t.y>e-1}},{key:"feedSnake",value:function(){var t=this.body[this.body.length-1];switch(this.direction){case a.TOP:return new e([].concat(Object(h.a)(this.body),[new f(t.x,t.y-1)]),this.direction);case a.BOTTOM:return new e([].concat(Object(h.a)(this.body),[new f(t.x,t.y+1)]),this.direction);case a.LEFT:return new e([].concat(Object(h.a)(this.body),[new f(t.x+1,t.y)]),this.direction);case a.RIGHT:return new e([].concat(Object(h.a)(this.body),[new f(t.x-1,t.y-1)]),this.direction)}return this}},{key:"move",value:function(){switch(this.direction){case a.TOP:return new e([new f(this.body[0].x,this.body[0].y-1)].concat(Object(h.a)(this.body.slice(0,this.body.length-1))),this.direction);case a.BOTTOM:return new e([new f(this.body[0].x,this.body[0].y+1)].concat(Object(h.a)(this.body.slice(0,this.body.length-1))),this.direction);case a.LEFT:return new e([new f(this.body[0].x-1,this.body[0].y)].concat(Object(h.a)(this.body.slice(0,this.body.length-1))),this.direction);case a.RIGHT:return new e([new f(this.body[0].x+1,this.body[0].y)].concat(Object(h.a)(this.body.slice(0,this.body.length-1))),this.direction)}return this}},{key:"setDirection",value:function(t){return this.canChangeDirection(t)?new e(this.body,t):this}},{key:"canChangeDirection",value:function(e){switch(e){case a.TOP:return this.direction!==a.BOTTOM;case a.BOTTOM:return this.direction!==a.TOP;case a.LEFT:return this.direction!==a.RIGHT;case a.RIGHT:return this.direction!==a.LEFT;default:return!0}}}],[{key:"initialSnake",value:function(t){return new e([new f(t/2,t/2),new f(t/2,t/2+1)],a.LEFT)}}]),e}(),m=(n(18),n(19),function(){return r.a.createElement("div",{className:"Cell"})}),O=Object(c.createContext)({state:i.MENU,onResetGame:function(){},onStateChange:function(e){}}),E=(n(20),function(){var e=Object(c.useContext)(O).onResetGame;return r.a.createElement("div",{className:"End"},r.a.createElement("div",null,r.a.createElement("button",{className:"EndResumeButton",onClick:e},"PLAY AGAIN")))}),v=(n(21),function(){return r.a.createElement("div",{className:"Fruit"})}),k=(n(22),function(){var e=Object(c.useContext)(O),t=e.state,n=e.onStateChange,a=Object(c.useCallback)(function(){t===i.MENU&&n(i.PLAY)},[t,n]);return r.a.createElement("div",{className:"Menu"},r.a.createElement("div",null,r.a.createElement("button",{className:"MenuResumeButton",onClick:a},"RESUME")))}),T=(n(23),function(){return r.a.createElement("div",{className:"SnakeBody"})}),w=(n(24),function(){return r.a.createElement("div",{className:"SnakeHead"})}),j=function(e){var t=e.fruit,n=e.snake,a=e.gridSize,c=e.state;return r.a.createElement("div",{className:"Game"},c===i.MENU&&r.a.createElement(k,null),c===i.END&&r.a.createElement(E,null),Array.from({length:a}).map(function(e,t){return t}).map(function(e){return r.a.createElement("div",{className:"OsX",key:e},Array.from({length:a}).map(function(e,t){return t}).map(function(a){var i=n.body.findIndex(function(t){return t.x===a&&t.y===e});return i>=0?0===i?r.a.createElement(w,{key:a}):r.a.createElement(T,{key:a}):a===t.x&&e===t.y?r.a.createElement(v,{key:a}):r.a.createElement(m,{key:a})}))}))},C=(n(25),setInterval(function(){},1e6)),N=function(){var e=Object(c.useState)(i.PLAY),t=Object(s.a)(e,2),n=t[0],o=t[1],u=Object(c.useState)(300),d=Object(s.a)(u,2),l=d[0],h=d[1],y=Object(c.useState)(f.random(50)),m=Object(s.a)(y,2),E=m[0],v=m[1],k=Object(c.useState)(b.initialSnake(50)),T=Object(s.a)(k,2),w=T[0],N=T[1];Object(c.useEffect)(function(){document.onkeydown=function(e){38===e.keyCode||87===e.keyCode?N(function(e){return e.setDirection(a.TOP)}):40===e.keyCode||83===e.keyCode?N(function(e){return e.setDirection(a.BOTTOM)}):37===e.keyCode||65===e.keyCode?N(function(e){return e.setDirection(a.LEFT)}):39===e.keyCode||68===e.keyCode?N(function(e){return e.setDirection(a.RIGHT)}):27===e.keyCode&&n===i.PLAY&&o(i.MENU)}},[n]),Object(c.useEffect)(function(){clearInterval(C),C=setInterval(function(){n===i.PLAY&&N(function(e){var t=e.move(),n=t.hasEatenSelf(),a=t.hasLeftGrid(50);return n||a?(o(i.END),e):t})},l)},[n,l]),Object(c.useEffect)(function(){w.getHead().equals(E)&&(N(function(e){return e.feedSnake()}),v(f.random(50)),h(function(e){return Math.ceil(.7*e)}))},[w,E]);var x=Object(c.useCallback)(function(){o(i.PLAY),N(b.initialSnake(50))},[]);return r.a.createElement("div",{className:"App"},r.a.createElement(O.Provider,{value:{state:n,onStateChange:o,onResetGame:x}},r.a.createElement(j,{gridSize:50,snake:w,fruit:E,state:n})))};u.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.f028ffe9.chunk.js.map