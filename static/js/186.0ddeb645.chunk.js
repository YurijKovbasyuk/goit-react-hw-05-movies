"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{4776:function(e,t,n){n.d(t,{HJ:function(){return f},_C:function(){return o},hB:function(){return s},hW:function(){return i},zu:function(){return c}});var a=n(4569),r=n.n(a),u="0c691c9ea36cc638c018e3ab76aef558";a.defaults.baseURL="https://api.themoviedb.org/3/",a.defaults.params={api_key:u};var i=function(){return a.defaults.params={api_key:u},r().get("trending/movie/day").then((function(e){return e.data.results}))},c=function(e){return a.defaults.params={api_key:u,language:"en-US"},r().get("movie/"+e).then((function(e){return e.data}))},s=function(e){return a.defaults.params={api_key:u,query:e,language:"en-US",page:1,include_adult:!1},r().get("search/movie").then((function(e){return e.data.results}))},o=function(e){return a.defaults.params={api_key:u,language:"en-US",page:1},r().get("movie/".concat(e,"/reviews")).then((function(e){return e.data.results}))},f=function(e){return a.defaults.params={api_key:u,language:"en-US"},r().get("movie/".concat(e,"/credits")).then((function(e){return e.data.cast}))}},186:function(e,t,n){n.r(t);var a=n(8152),r=n(2791),u=n(4776),i=n(6871),c=n(184);t.default=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],o=(0,r.useState)(null),f=(0,a.Z)(o,2),l=f[0],h=f[1],d=(0,i.UO)().movieId;return(0,r.useEffect)((function(){(0,u._C)(d).then((function(e){if(0===e.length)throw new Error("Data is empty");s(e)})).catch((function(e){h(e)}))}),[d]),(0,c.jsx)(c.Fragment,{children:l?(0,c.jsx)("p",{children:"We don`t have any reviews for this time"}):(0,c.jsx)("ul",{children:n.map((function(e){var t=e.content,n=e.author,a=e.id;return(0,c.jsxs)("li",{children:[(0,c.jsxs)("h3",{children:["Author: ",n]}),(0,c.jsx)("p",{children:t})]},a)}))})})}}}]);
//# sourceMappingURL=186.0ddeb645.chunk.js.map