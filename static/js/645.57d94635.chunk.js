"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[645],{377:function(n,e,t){t.d(e,{Hg:function(){return o},IQ:function(){return f},Jh:function(){return d},pm:function(){return s},yK:function(){return p}});var r=t(861),a=t(757),c=t.n(a),i=t(388);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="3a7b9fae23d21ee4f1e0a0e3e74eac23",o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&include_adult=false&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},645:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(982),a=t(885),c=t(377),i=t(791),u=t(689),o=t(243),s=t(184),p=function(){var n=(0,u.TH)(),e=function(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),t=e[0],u=e[1];return(0,i.useEffect)((function(){(0,c.Hg)().then((function(n){u((0,r.Z)(n.results))}))}),[]),{trendingMovies:t}}(),t=e.trendingMovies;return(0,s.jsxs)("main",{children:[(0,s.jsx)(o.h4,{children:(0,s.jsx)("h1",{children:"Check out the trending list for the day! "})}),(0,s.jsx)(o.W2,{children:t.map((function(e){return(0,s.jsx)(o.im,{children:(0,s.jsxs)(o.Fg,{to:"movies/".concat(e.id),state:{from:n},children:[(0,s.jsxs)("p",{children:[e.title," "]}),(0,s.jsx)(o.Ee,{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"".concat(e.title),width:"280"})]})},e.id)}))})]})}},243:function(n,e,t){t.d(e,{Ee:function(){return h},Fg:function(){return l},W2:function(){return d},h4:function(){return f},im:function(){return x}});var r,a,c,i,u,o=t(168),s=t(444),p=t(731),f=s.ZP.div(r||(r=(0,o.Z)(["\n  background-color: #663366;\n  padding: 10px;\n  justify-content: center;\n  text-align: center;\n  color: white;\n  text-transform: uppercase;\n"]))),d=s.ZP.div(a||(a=(0,o.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  grid-gap: 16px;\n  list-style: none;\n  align-items: center;\n  margin-top: 60px;\n  margin-bottom: 60px;\n"]))),x=s.ZP.div(c||(c=(0,o.Z)(["\n  text-decoration: none;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-height: 500px;\n  text-align: center;\n  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),h=s.ZP.img(i||(i=(0,o.Z)(["\nobject-fit: cover;\n height:100%;\n width:100%;\n  border-radius: 2px;\n    \n  }\n"]))),l=(0,s.ZP)(p.rU)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  color: black;\n"])))}}]);
//# sourceMappingURL=645.57d94635.chunk.js.map