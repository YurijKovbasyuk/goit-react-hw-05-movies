"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{4776:function(e,t,n){n.d(t,{HJ:function(){return f},_C:function(){return o},hB:function(){return s},hW:function(){return i},zu:function(){return c}});var a=n(4569),r=n.n(a),u="0c691c9ea36cc638c018e3ab76aef558";a.defaults.baseURL="https://api.themoviedb.org/3/",a.defaults.params={api_key:u};var i=function(){return a.defaults.params={api_key:u},r().get("trending/movie/day").then((function(e){return e.data.results})).catch((function(e){throw e}))},c=function(e){return a.defaults.params={api_key:u,language:"en-US"},r().get("movie/"+e).then((function(e){return e.data}))},s=function(e){return a.defaults.params={api_key:u,query:e,language:"en-US",page:1,include_adult:!1},r().get("search/movie").then((function(e){return e.data.results}))},o=function(e){return a.defaults.params={api_key:u,language:"en-US",page:1},r().get("movie/"+e+"/reviews").then((function(e){return e.data.results}))},f=function(e){return a.defaults.params={api_key:u,language:"en-US"},r().get("movie/"+e+"/credits").then((function(e){return e.data.cast}))}},4126:function(e,t,n){var a=n(6871),r=n(3504),u=n(184);t.Z=function(e){var t=e.movieList,n=(0,a.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{className:"link",to:{pathname:"/movies/".concat(e.id),state:{from:n}},children:(0,u.jsx)("h2",{children:e.title})})},e.id)}))})}},3983:function(e,t,n){n.r(t);var a=n(8152),r=n(2791),u=n(4126),i=n(4776),c=n(184);t.default=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1];return(0,r.useEffect)((function(){(0,i.hW)().then((function(e){s(e)}))}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Trending today"}),(0,c.jsx)(u.Z,{movieList:n})]})}}}]);
//# sourceMappingURL=983.303352a5.chunk.js.map