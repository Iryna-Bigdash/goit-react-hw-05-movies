"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{134:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var a,n=r(861),c=r(439),i=r(168),s=r(687),l=r.n(s),o=r(686),u=r(791),h=r(87),m=r(689),d=r(243),p=r(184),f=(0,o.Z)(h.OL)(a||(a=(0,i.Z)(["\n  color: black;\n\n  &:hover {\n    background-color: #edf4fe;\n  }\n"])));function v(){var e,t=(0,u.useState)([]),r=(0,c.Z)(t,2),a=r[0],i=r[1],s=(0,h.lr)(),o=(0,c.Z)(s,2),v=o[0],N=o[1],b=null!==(e=v.get("query"))&&void 0!==e?e:"",x=(0,m.TH)();(0,u.useEffect)((function(){if(b){var e=function(){var e=(0,n.Z)(l().mark((function e(){var t,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?query=".concat(b,"&include_adult=false&language=en-US&page=1"),r={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ"}},e.prev=2,e.next=5,d.Z.get(t,r);case 5:a=e.sent,i(a.data.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[b]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:"mb-1 p-3 fs-3 fw-bolder",children:"What do you like to watch?"}),(0,p.jsxs)("form",{className:"row g-3 p-3",onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchValue.value;N(""===t?{}:{query:t})},children:[(0,p.jsx)("div",{className:"col-auto",children:(0,p.jsx)("input",{type:"text",name:"searchValue",className:"form-control",placeholder:"Movie title input here...","aria-label":"Movie title input example",required:!0})}),(0,p.jsx)("div",{className:"col-auto",children:(0,p.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Search"})})]}),a.length>0&&(0,p.jsx)("ul",{className:"list-group",children:(0,p.jsx)("div",{className:"w-100",children:a.map((function(e){return(0,p.jsx)("li",{className:"list-group-item",children:(0,p.jsx)(f,{to:"".concat(e.id),state:{from:x},className:"list-group-item",children:e.title})},e.id)}))})})]})}}}]);
//# sourceMappingURL=134.e9d40c47.chunk.js.map