"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[261],{4776:function(e,t,n){n.d(t,{HJ:function(){return d},_C:function(){return l},hB:function(){return u},hW:function(){return s},zu:function(){return o}});var r=n(4569),a=n.n(r),i="0c691c9ea36cc638c018e3ab76aef558";r.defaults.baseURL="https://api.themoviedb.org/3/",r.defaults.params={api_key:i};var s=function(){return r.defaults.params={api_key:i},a().get("trending/movie/day").then((function(e){return e.data.results})).catch((function(e){throw e}))},o=function(e){return r.defaults.params={api_key:i,language:"en-US"},a().get("movie/"+e).then((function(e){return e.data}))},u=function(e){return r.defaults.params={api_key:i,query:e,language:"en-US",page:1,include_adult:!1},a().get("search/movie").then((function(e){return e.data.results}))},l=function(e){return r.defaults.params={api_key:i,language:"en-US",page:1},a().get("movie/"+e+"/reviews").then((function(e){return e.data.results}))},d=function(e){return r.defaults.params={api_key:i,language:"en-US"},a().get("movie/"+e+"/credits").then((function(e){return e.data.cast}))}},8261:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(8152),a=n(2791),i=n(3504),s=n(6871),o=n(184),u=function(){var e=(0,s.s0)(),t=(0,s.TH)();return(0,o.jsx)("button",{onClick:function(){var n,r=(null===(n=t.state)||void 0===n?void 0:n.from)||"/";e(r)},children:" Go back"})},l=n(4776),d=function(){var e,t,n=(0,s.TH)(),d=(0,a.useState)({}),c=(0,r.Z)(d,2),f=c[0],p=c[1],h=(0,s.UO)();(0,a.useEffect)((function(){(0,l.zu)(h.movieId).then(p)}),[h.movieId]);var v=f.poster_path,m=f.title,x=f.vote_averag,g=f.overview,j=f.genres;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{}),(0,o.jsxs)("div",{style:{padding:"10px 30px ",display:"flex",justifyContent:"start",boxShadow:"0 0 10px rgba(0,0,0,0.22)"},children:[(0,o.jsx)("img",{src:v&&"https://image.tmdb.org/t/p/w400"+v,alt:"",width:"20%"}),(0,o.jsxs)("div",{style:{padding:"10px 30px ",display:"flex",flexDirection:"column",alignItems:"start"},children:[(0,o.jsx)("h2",{children:m}),(0,o.jsxs)("p",{children:["User Score ",x]}),(0,o.jsx)("h3",{children:"Overvies"}),(0,o.jsx)("p",{children:g}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("ul",{children:null===j||void 0===j?void 0:j.map((function(e){var t=e.id,n=e.name;return(0,o.jsx)("li",{children:n},t)}))})]})]}),(0,o.jsxs)("div",{style:{display:"flex",padding:"10px 30px"},children:[(0,o.jsx)("span",{style:{marginRight:"10px"},children:"Additional informaintion"}),(0,o.jsx)(i.rU,{style:{marginRight:"10px",textDecoration:"none"},to:{pathname:"/movies/"+h.movieId+"/cast",state:{from:(null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.from)||"/"}},children:"Cast"}),(0,o.jsx)(i.rU,{style:{marginRight:"10px",textDecoration:"none"},to:{pathname:"/movies/"+h.movieId+"/reviews",state:{from:(null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)||"/"}},children:"Reviews"})]}),(0,o.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=261.43a37098.chunk.js.map