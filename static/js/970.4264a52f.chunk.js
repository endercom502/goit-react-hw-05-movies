"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{377:function(n,e,t){t.d(e,{Hg:function(){return u},IQ:function(){return l},Jh:function(){return f},pm:function(){return s},yK:function(){return p}});var r=t(861),a=t(757),i=t.n(a),c=t(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="3a7b9fae23d21ee4f1e0a0e3e74eac23",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&include_adult=false&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},970:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(689),a=t(791);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var o,u,s,p=t(885),l=t(377),f=function(n){var e=(0,a.useState)(null),t=(0,p.Z)(e,2),r=t[0],o=t[1];return(0,a.useEffect)((function(){n&&(0,l.yK)(n).then((function(n){o(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n))}))}),[n]),{movie:r}},d=t(168),x=t(128),h=t(731),v=t(444),g=t(184),m=(0,v.ZP)(h.rU)(o||(o=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  \n  :hover {\n    color: #9966CC;\n  }\n"]))),b=function(n){var e=n.to,t=n.children;return(0,g.jsxs)(m,{to:e,children:[(0,g.jsx)(x.jTe,{size:"24"}),t]})},j=v.ZP.div(u||(u=(0,d.Z)(["\n  display: flex;\n  margin-top: 50px;\n  margin-bottom: 50px;\n"]))),w=v.ZP.div(s||(s=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  margin-left: 10px;\n"]))),y=t(243),Z=t(723),k=function(){var n,e,t=(0,r.UO)().movieId,i=f(t).movie,c=null!==(n=null===(e=(0,r.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return i?(0,g.jsxs)("div",{children:[(0,g.jsx)(b,{to:c,children:"Back to movie list"}),(0,g.jsxs)(j,{children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(i.poster_path),alt:"".concat(i.title),width:"240"}),(0,g.jsxs)(w,{children:[(0,g.jsxs)("h2",{children:[i.title,", ",i.release_date.slice(0,4)]}),(0,g.jsxs)("p",{children:["User Score: ",Math.round(10*i.vote_average),"%"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:i.overview}),(0,g.jsx)("h3",{children:"Genre"}),"".concat(i.genres.map((function(n){return n.name})).join(" / "))]})]}),(0,g.jsx)("h3",{children:"Additional Information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(y.Fg,{to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(y.Fg,{to:"reviews",children:"Reviews"})})]}),(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(Z.Z,{}),children:(0,g.jsx)(r.j3,{})})]}):(0,g.jsx)(Z.Z,{})}},243:function(n,e,t){t.d(e,{Ee:function(){return x},Fg:function(){return h},W2:function(){return f},h4:function(){return l},im:function(){return d}});var r,a,i,c,o,u=t(168),s=t(444),p=t(731),l=s.ZP.div(r||(r=(0,u.Z)(["\n  background-color: #663366;\n  padding: 10px;\n  justify-content: center;\n  text-align: center;\n  color: white;\n  text-transform: uppercase;\n"]))),f=s.ZP.div(a||(a=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  grid-gap: 16px;\n  list-style: none;\n  align-items: center;\n  margin-top: 60px;\n  margin-bottom: 60px;\n"]))),d=s.ZP.div(i||(i=(0,u.Z)(["\n  text-decoration: none;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-height: 500px;\n  text-align: center;\n  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),x=s.ZP.img(c||(c=(0,u.Z)(["\nobject-fit: cover;\n height:100%;\n width:100%;\n  border-radius: 2px;\n    \n  }\n"]))),h=(0,s.ZP)(p.rU)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  color: black;\n"])))}}]);
//# sourceMappingURL=970.4264a52f.chunk.js.map