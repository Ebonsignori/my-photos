(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{825:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return O},default:function(){return S}});var r=t(4649),i=t(409),o=t(7360),s=t.n(o),a=t(6677),l=t(7378),c=t(7468),u=t(1879),d=t(2616),g="ascending",p="descending",m=t(134),h=t(1639),f=t(7275),v=t(9857),y=t(5860),w=t(8481),x=t(8153),b=t(3519),j=t(4246);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C="all",P=[{key:"order",direction:g,label:"Custom Order"},{key:"popularity",direction:p,label:"Most Viewed"},{key:"popularity",direction:g,label:"Least Viewed"},{key:"date",direction:p,label:"Newest First"},{key:"date",direction:g,label:"Oldest First"}],O=!0;function S(e){var n,t,r=e.images,o=e.tags,c=e.models,p=(0,a.useRouter)(),h=(0,l.useMemo)((function(){return p.asPath.match(/#([a-z0-9-]+)/gi)||""}),[p]),_=(0,l.useMemo)((function(){return p.asPath.match(/(\?|&)([a-z0-9]+)/gi)||[]}),[p]),O=(0,l.useRef)(null),S=(0,l.useRef)(null),I=(0,l.useState)(null!==_&&void 0!==_&&_.tags?p.query.tags:C),E=I[0],B=I[1];(0,l.useEffect)((function(){var e,n=null===(e=p.query)||void 0===e?void 0:e.tags;n&&E!==n&&B(n)}),[null===(n=p.query)||void 0===n?void 0:n.tags]);var A=(0,l.useCallback)((function(e){var n;e=null===(n=e)||void 0===n?void 0:n.toLowerCase();var t="";(null!==_&&void 0!==_&&_.includes("?models")||_.includes("&models"))&&(t="&models=".concat(p.query.models)),e!==C?p.push("?tags=".concat(e).concat(t),void 0,{shallow:!0}):p.push("/".concat(t.replace("&","?")),void 0,{shallow:!0}),B(e)}),[_,p]),T=(0,l.useState)(null!==_&&void 0!==_&&_.models?p.query.models:C),W=T[0],Q=T[1];(0,l.useEffect)((function(){var e,n=null===(e=p.query)||void 0===e?void 0:e.models;n&&W!==n&&Q(n)}),[null===(t=p.query)||void 0===t?void 0:t.models]);var V=(0,l.useCallback)((function(e){var n;e=null===(n=e)||void 0===n?void 0:n.toLowerCase();var t="";(null!==_&&void 0!==_&&_.includes("?tags")||null!==_&&void 0!==_&&_.includes("&tags"))&&(t="&tags=".concat(p.query.tags)),e!==C?p.push("?models=".concat(e).concat(t),void 0,{shallow:!0}):p.push("/".concat(t.replace("&","?")),void 0,{shallow:!0}),Q(e)}),[_,p]),X=(0,l.useState)(null!==h&&void 0!==h&&h.length?h[0].replace("#",""):void 0),G=X[0],$=X[1],J=(0,l.useCallback)((function(e){var n;e=null===(n=e)||void 0===n?void 0:n.toLowerCase();var t="";(null!==_&&void 0!==_&&_.includes("?tags")||null!==_&&void 0!==_&&_.includes("&tags"))&&(t+="?tags=".concat(p.query.tags)),(null!==_&&void 0!==_&&_.includes("?models")||null!==_&&void 0!==_&&_.includes("&models"))&&(t+=""!==t?"&":"?",t+="models=".concat(p.query.models)),e?p.push("/#".concat(e).concat(t),void 0,{shallow:!0}):p.push("/".concat(t),void 0,{shallow:!0}),$(e)}),[_,p]),K=(0,l.useState)(10),U=K[0],Y=K[1],ee=(0,l.useState)(""),ne=ee[0],te=ee[1],re=(0,l.useState)(P[0]),ie=re[0],oe=re[1],se=Object.values(r),ae=(0,l.useMemo)((function(){return se.length+10}),[se]),le=(0,l.useCallback)((function(e){if(!(U>ae)){var n=e.target;if(O.current&&S.current)O.current.scrollHeight+S.current.scrollHeight-500<=n.scrollTop+n.clientHeight&&Y((function(e){return e+10}))}}),[U,ae]);se=(0,l.useMemo)((function(){return ne?s().go(ne,r,{keys:["slug","alt","model"],scoreFn:function(e){var n=e[0],t=e[1],r=e[2],i=Math.max(n?n.score:-1/0,t?t.score:-1/0,r?r.score:-1/0);return null!==n&&void 0!==n&&n.score&&null!==t&&void 0!==t&&t.score&&null!==r&&void 0!==r&&r.score?i+=1500:null!==n&&void 0!==n&&n.score&&null!==t&&void 0!==t&&t.score||null!==n&&void 0!==n&&n.score&&null!==r&&void 0!==r&&r.score?i+=1e3:null!==n&&void 0!==n&&n.score&&(i+=500),i}}).map((function(e){return e.obj})):se}),[se,ne,r]),se=(0,l.useMemo)((function(){return(0,i.Z)(se).sort((function(e,n){var t=ie.direction===g?1:-1,r=e[ie.key]||9999,i=n[ie.key]||9999;return"date"===ie.key&&(r=new Date(r),i=new Date(i)),r>i?t:-t}))}),[se,ie]),se=(0,l.useMemo)((function(){return se.filter((function(e){return!(E!==C&&!e.tags.includes(E))}))}),[se,E]),se=(0,l.useMemo)((function(){return se.filter((function(e){if(W!==C){if(null===e||void 0===e||!e.model)return!1;if(e.model.toLowerCase()!==W.toLowerCase())return!1}return!0}))}),[se,W]);var ce=(0,l.useState)({}),ue=ce[0],de=ce[1];(0,l.useEffect)((function(){for(var e=0;e<se.length;e++){var n=se[e].slug;r[n].prev=e-1>=0?se[e-1].slug:se[se.length-1].slug,e+1<se.length?r[n].next=se[e+1].slug:r[n].next=se[0].slug}de(r)}),[se]);var ge=null;ge=(se=(0,l.useMemo)((function(){return se.slice(0,U)}),[se,U])).length?se.map((function(e,n){var t={};e.orientation&&(t[e.orientation]=!0);var r=(0,f.pI)(e.slug);return(0,j.jsx)(z,k(k({},t),{},{onClick:function(){var n,t;null!==(n=window)&&void 0!==n&&n.gtag&&(null===(t=window)||void 0===t||t.gtag("event","click",{slug:e.slug,homepage_click:1}));J(e.slug)},children:(0,j.jsxs)(L,{children:[(0,j.jsx)(y.Z,k(k({srcSet:r,src:(0,f.MC)(e.slug)},t),{},{alt:e.alt,width:"100%",height:"100%",index:n}),e.slug),(0,j.jsx)(q,{children:(0,j.jsxs)(H,{children:[(0,j.jsxs)(F,{children:[(0,j.jsx)(b.Z,{}),(0,j.jsx)(R,{onClick:function(){return V(e.model)},children:e.model})]}),(0,j.jsxs)(F,{children:[(0,j.jsx)(m.Z,{}),(0,j.jsx)(D,{children:e.tags.map((function(n){return(0,j.jsx)(R,{onClick:function(){return A(n)},children:(0,v.R0)(n)},"".concat(e.slug,"-").concat(n))}))})]})]})})]})}),"lazy-".concat(e.slug))})):(0,j.jsxs)(z,{big:!0,children:[(0,j.jsx)("img",{src:"https://i.imgflip.com/xyx99.jpg",alt:"Hide the pain Harold",width:"100%",height:"100%"}),(0,j.jsx)(q,{children:(0,j.jsxs)(H,{children:[(0,j.jsx)("div",{children:"No Images Found"}),(0,j.jsx)("br",{}),(0,j.jsx)("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/smiling-face-with-tear_1f972.png",alt:"Smiley cry emoji with single tear",width:"100%",height:"100%"})]})})]},"lazy-no-images-found");var pe=(0,l.useMemo)((function(){return(0,j.jsx)(w.Z,{images:ue,slug:G,setSelectedSlug:J,refreshOnSelect:!0})}),[G,ue]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.Z,{title:"Photography - Evan Bonsignori",description:"Free to use photos taken by Evan Bonsignori",keywords:"Photography, Free Images, Evan Bonsignori",image:"".concat("https://d1qewfastjlta0.cloudfront.net","/photos-themed-camera-icon.png"),imageAlt:"Camera icon with colors matching the theme of the photos site",type:"website"}),pe,(0,j.jsxs)(Z,{onScroll:le,children:[(0,j.jsx)(d.ZP,{headerRef:S,title:"Photos",subtitle:"by Evan Bonsignori",navLinks:[{url:"/license",name:"License"},{url:"/photo-map",name:"Photo Map"},{url:"https://writing.evan.bio",name:"Blog"},{url:"https://evan.bio",name:"About Me"}],tags:[{pluralName:"tags",icon:(0,j.jsx)(m.Z,{}),multiple:!1,options:o,selected:E,setSelected:A,includeAll:!0},{pluralName:"models",icon:(0,j.jsx)(b.Z,{}),multiple:!1,options:c,selected:W,setSelected:V,includeAll:!0}],search:{searchQuery:ne,setSearchQuery:te},sortBy:{sortBy:ie,setSortBy:oe,options:P}}),(0,j.jsx)(N,{ref:O,children:(0,j.jsx)(M,{children:ge})}),(0,j.jsx)(u.Z,{})]})]})}var Z=c.ZP.div.withConfig({displayName:"pages__PageWrapper",componentId:"sc-1tbygr9-0"})(["position:relative;max-height:100vh;overflow-y:scroll;overflow-x:hidden;width:100vw;max-width:100vw;"]),N=c.ZP.div.withConfig({displayName:"pages__ImagesWrapper",componentId:"sc-1tbygr9-1"})(["*{margin:0;padding:0;}display:flex;justify-content:center;min-width:100vw;min-height:100vh;"]),I=(0,h.CH)({xs:"\n  grid-template-columns: 100%;\n  grid-auto-rows: 60vw;\n  grid-gap: 5px;\n  ",sm:"\n  grid-template-columns: 100%;\n  grid-auto-rows: .5fr;\n  grid-gap: 5px;\n  ",md:"\n  grid-template-columns: repeat(2, minmax(225px, 1fr));\n  grid-auto-rows: .5fr;\n  ",lg:"\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n  grid-auto-rows: .5fr;\n  ",xl:"\n  grid-template-columns: repeat(3, minmax(355px, 1fr));\n  grid-auto-rows: .5fr;\n  ",xxl:"\n  grid-template-columns: repeat(4, minmax(400px, 1fr));\n  grid-auto-rows: .5fr;\n  "}),M=c.ZP.div.withConfig({displayName:"pages__Images",componentId:"sc-1tbygr9-2"})(["width:100%;display:grid;margin:0 5px;grid-gap:10px;grid-template-columns:repeat(2,minmax(250px,1fr));grid-auto-rows:250px;grid-auto-flow:dense;",""],I),E=(0,h.CH)({xs:"\n    grid-column: span 1;\n    grid-row: span 1;\n  "}),q=c.ZP.div.withConfig({displayName:"pages__ImageMeta",componentId:"sc-1tbygr9-3"})(["position:absolute;top:0;opacity:0;transition:opacity 0.5s;display:flex;width:100%;height:fit-content;justify-content:flex-start;align-items:flex-start;color:var(--background);background-color:rgba(0,0,0,0.65);z-index:2;border-radius:5px;"]),z=c.ZP.div.withConfig({displayName:"pages__ImageContainer",componentId:"sc-1tbygr9-4"})(["position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:100%;border-radius:5px;border:1px solid black;&:last-child:nth-child(3n - 2){grid-column:span 3 !important;}"," "," svg{user-select:none;}*{transition:opacity 0.5s;}:hover,:focus,:target{cursor:pointer;*{opacity:1;}}"],E,(function(e){var n="";return e.big?n="\n      grid-column: span 2;\n      grid-row: span 2;\n    ":e.tall?n="\n      grid-row: span 3;\n      ".concat(h.y$," {\n        grid-row: span 3;\n      }\n    "):e.wide&&(n="\n      grid-column: span 2;\n      &:last-child:nth-child(3n - 2) {\n        grid-column: span 3;\n      }\n    "),n})),L=c.ZP.div.withConfig({displayName:"pages__ImageWrapper",componentId:"sc-1tbygr9-5"})(["position:relative;user-select:none;display:flex;width:100%;height:100%;border-radius:5px;"]),B=(0,h.CH)({lg:"\n  font-size: 1.5rem;\n  margin: 0.75rem;\n  svg {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  ",xl:"\n  font-size: 1.75rem;\n  margin: 1rem;\n  svg {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n  ",xxl:"\n  font-size: 2rem;\n  margin: 1rem;\n  svg {\n    width: 2rem;\n    height: 2rem;\n  }\n  "}),H=c.ZP.div.withConfig({displayName:"pages__MetaList",componentId:"sc-1tbygr9-6"})(["opacity:0;display:flex;flex-wrap:wrap;margin:0.5rem;font-size:1rem;svg{width:1rem;height:1rem;fill:var(--background);margin-right:10px;}",""],B),F=c.ZP.div.withConfig({displayName:"pages__MetaItem",componentId:"sc-1tbygr9-7"})(["display:flex;align-content:center;margin:0.5rem;"]),D=c.ZP.div.withConfig({displayName:"pages__MetaTags",componentId:"sc-1tbygr9-8"})(["display:flex;align-content:center;"]),R=c.ZP.a.withConfig({displayName:"pages__MetaLink",componentId:"sc-1tbygr9-9"})(["color:var(--background);text-decoration:underline;:hover{color:var(--primary);}margin-left:0.5rem;:first-of-type{margin-left:0;}"])},2610:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(825)}])}},function(e){e.O(0,[563,360,671,481,774,888,179],(function(){return n=2610,e(e.s=n);var n}));var n=e.O();_N_E=n}]);