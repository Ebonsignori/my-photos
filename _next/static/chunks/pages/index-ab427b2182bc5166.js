(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return N},default:function(){return Z}});var r=t(4649),i=t(409),o=t(7360),s=t.n(o),a=t(6677),l=t(7378),c=t(7468),u=t(1879),d=t(2616),g="ascending",p="descending",m=t(134),h=t(1639),f=t(7275),v=t(9857),y="/_next/static/media/smiling-face-with-tear.aee5c7f1.png",w=t(5860),x=t(8481),b=t(8153),j=t(3519),_=t(4246);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P="all",O=[{key:"order",direction:g,label:"Custom Order"},{key:"popularity",direction:p,label:"Most Viewed"},{key:"popularity",direction:g,label:"Least Viewed"},{key:"date",direction:p,label:"Newest First"},{key:"date",direction:g,label:"Oldest First"}],N=!0;function Z(e){var n,t,r=e.images,o=e.tags,c=e.models,p=(0,a.useRouter)(),h=(0,l.useMemo)((function(){return p.asPath.match(/#([a-z0-9-]+)/gi)||""}),[p]),k=(0,l.useMemo)((function(){return p.asPath.match(/(\?|&)([a-z0-9]+)/gi)||[]}),[p]),N=(0,l.useRef)(null),Z=(0,l.useRef)(null),M=(0,l.useState)(null!==k&&void 0!==k&&k.tags?p.query.tags:P),q=M[0],F=M[1];(0,l.useEffect)((function(){var e,n=null===(e=p.query)||void 0===e?void 0:e.tags;n&&q!==n&&F(n)}),[null===(n=p.query)||void 0===n?void 0:n.tags]);var W=(0,l.useCallback)((function(e){var n;e=null===(n=e)||void 0===n?void 0:n.toLowerCase();var t="";(null!==k&&void 0!==k&&k.includes("?models")||k.includes("&models"))&&(t="&models=".concat(p.query.models)),e!==P?p.push("?tags=".concat(e).concat(t),void 0,{shallow:!0}):p.push("/".concat(t.replace("&","?")),void 0,{shallow:!0}),F(e)}),[k,p]),Q=(0,l.useState)(null!==k&&void 0!==k&&k.models?p.query.models:P),V=Q[0],X=Q[1];(0,l.useEffect)((function(){var e,n=null===(e=p.query)||void 0===e?void 0:e.models;n&&V!==n&&X(n)}),[null===(t=p.query)||void 0===t?void 0:t.models]);var G=(0,l.useCallback)((function(e){var n;e=null===(n=e)||void 0===n?void 0:n.toLowerCase();var t="";(null!==k&&void 0!==k&&k.includes("?tags")||null!==k&&void 0!==k&&k.includes("&tags"))&&(t="&tags=".concat(p.query.tags)),e!==P?p.push("?models=".concat(e).concat(t),void 0,{shallow:!0}):p.push("/".concat(t.replace("&","?")),void 0,{shallow:!0}),X(e)}),[k,p]),$=(0,l.useState)(null!==h&&void 0!==h&&h.length?h[0].replace("#",""):void 0),J=$[0],K=$[1],U=(0,l.useCallback)((function(e){var n;e=null===(n=e)||void 0===n?void 0:n.toLowerCase();var t="";(null!==k&&void 0!==k&&k.includes("?tags")||null!==k&&void 0!==k&&k.includes("&tags"))&&(t+="?tags=".concat(p.query.tags)),(null!==k&&void 0!==k&&k.includes("?models")||null!==k&&void 0!==k&&k.includes("&models"))&&(t+=""!==t?"&":"?",t+="models=".concat(p.query.models)),e?p.push("/#".concat(e).concat(t),void 0,{shallow:!0}):p.push("/".concat(t),void 0,{shallow:!0}),K(e)}),[k,p]),Y=(0,l.useState)(10),ee=Y[0],ne=Y[1],te=(0,l.useState)(""),re=te[0],ie=te[1],oe=(0,l.useState)(O[0]),se=oe[0],ae=oe[1],le=(0,l.useMemo)((function(){return Object.values(r)}),[r]),ce=(0,l.useMemo)((function(){return le.length+10}),[le]),ue=(0,l.useCallback)((function(e){if(!(ee>ce)){var n=e.target;if(N.current&&Z.current)N.current.scrollHeight+Z.current.scrollHeight-500<=n.scrollTop+n.clientHeight&&ne((function(e){return e+10}))}}),[ee,ce]);le=(0,l.useMemo)((function(){return re?s().go(re,le,{keys:["slug","alt","model"],scoreFn:function(e){var n=e[0],t=e[1],r=e[2],i=Math.max(n?n.score:-1/0,t?t.score:-1/0,r?r.score:-1/0);return null!==n&&void 0!==n&&n.score&&null!==t&&void 0!==t&&t.score&&null!==r&&void 0!==r&&r.score?i+=1500:null!==n&&void 0!==n&&n.score&&null!==t&&void 0!==t&&t.score||null!==n&&void 0!==n&&n.score&&null!==r&&void 0!==r&&r.score?i+=1e3:null!==n&&void 0!==n&&n.score&&(i+=500),i}}).filter((function(e){return e.score>-1e3})).map((function(e){return e.obj})):le}),[le,re]),le=(0,l.useMemo)((function(){return(0,i.Z)(le).sort((function(e,n){var t=se.direction===g?1:-1,r=e[se.key]||9999,i=n[se.key]||9999;return"date"===se.key&&(r=new Date(r),i=new Date(i)),r>i?t:-t}))}),[le,se]),le=(0,l.useMemo)((function(){return le.filter((function(e){return!(q!==P&&!e.tags.includes(q))}))}),[le,q]),le=(0,l.useMemo)((function(){return le.filter((function(e){if(V!==P){if(null===e||void 0===e||!e.model)return!1;if(e.model.toLowerCase()!==V.toLowerCase())return!1}return!0}))}),[le,V]);var de=(0,l.useState)({}),ge=de[0],pe=de[1];(0,l.useEffect)((function(){for(var e=0;e<le.length;e++){var n=le[e].slug;r[n].prev=e-1>=0?le[e-1].slug:le[le.length-1].slug,e+1<le.length?r[n].next=le[e+1].slug:r[n].next=le[0].slug}pe(r)}),[le]);var me=null;me=(le=(0,l.useMemo)((function(){return le.slice(0,ee)}),[le,ee])).length?le.map((function(e,n){var t={};e.orientation&&(t[e.orientation]=!0);var r=(0,f.pI)(e.slug);return(0,_.jsx)(z,C(C({},t),{},{onClick:function(){var n,t;null!==(n=window)&&void 0!==n&&n.gtag&&(null===(t=window)||void 0===t||t.gtag("event","click",{slug:e.slug,homepage_click:1}));U(e.slug)},children:(0,_.jsxs)(B,{children:[(0,_.jsx)(w.Z,C(C({srcSet:r,src:(0,f.MC)(e.slug)},t),{},{alt:e.alt,width:"100%",height:"100%",index:n}),e.slug),(0,_.jsx)(L,{children:(0,_.jsxs)(D,{children:[(0,_.jsxs)(H,{children:[(0,_.jsx)(j.Z,{}),(0,_.jsx)(A,{onClick:function(){return G(e.model)},children:e.model})]}),(0,_.jsxs)(H,{children:[(0,_.jsx)(m.Z,{}),(0,_.jsx)(R,{children:e.tags.map((function(n){return(0,_.jsx)(A,{onClick:function(){return W(n)},children:(0,v.R0)(n)},"".concat(e.slug,"-").concat(n))}))})]})]})})]})}),"lazy-".concat(e.slug))})):(0,_.jsxs)(T,{children:[(0,_.jsxs)("h2",{children:['No Images Found for "',re,'"']}),(0,_.jsx)("img",{src:y,alt:"Smiley cry emoji with single tear",width:"200",height:"200"})]});var he=(0,l.useMemo)((function(){return(0,_.jsx)(x.Z,{images:ge,slug:J,setSelectedSlug:U,refreshOnSelect:!0})}),[J,ge]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b.Z,{title:"Photography - Evan Bonsignori",description:"Free to use photos taken by Evan Bonsignori",keywords:"Photography, Free Images, Evan Bonsignori",image:"".concat("https://d1qewfastjlta0.cloudfront.net","/photos-themed-camera-icon.png"),imageAlt:"Camera icon with colors matching the theme of the photos site",type:"website"}),he,(0,_.jsxs)(S,{onScroll:ue,children:[(0,_.jsx)(d.ZP,{headerRef:Z,title:"Photos",subtitle:"by Evan Bonsignori",navLinks:[{url:"/license",name:"License"},{url:"/photo-map",name:"Photo Map"},{url:"https://writing.evan.bio",name:"Blog"},{url:"https://evan.bio",name:"About Me"}],tags:[{pluralName:"tags",icon:(0,_.jsx)(m.Z,{}),multiple:!1,options:o,selected:q,setSelected:W,includeAll:!0},{pluralName:"models",icon:(0,_.jsx)(j.Z,{}),multiple:!1,options:c,selected:V,setSelected:G,includeAll:!0}],search:{searchQuery:re,setSearchQuery:ie},sortBy:{sortBy:se,setSortBy:ae,options:O}}),(0,_.jsx)(I,{ref:N,children:(0,_.jsx)(E,{children:me})}),(0,_.jsx)(u.Z,{})]})]})}var S=c.ZP.div.withConfig({displayName:"pages__PageWrapper",componentId:"sc-1tbygr9-0"})(["position:relative;max-height:100vh;overflow-y:scroll;overflow-x:hidden;width:100vw;max-width:100vw;"]),I=c.ZP.div.withConfig({displayName:"pages__ImagesWrapper",componentId:"sc-1tbygr9-1"})(["*{margin:0;padding:0;}display:flex;justify-content:center;min-width:100vw;min-height:100vh;"]),M=(0,h.CH)({xs:"\n  grid-template-columns: 100%;\n  grid-auto-rows: 60vw;\n  grid-gap: 5px;\n  ",sm:"\n  grid-template-columns: 100%;\n  grid-auto-rows: .5fr;\n  grid-gap: 5px;\n  ",md:"\n  grid-template-columns: repeat(2, minmax(225px, 1fr));\n  grid-auto-rows: .5fr;\n  ",lg:"\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n  grid-auto-rows: .5fr;\n  ",xl:"\n  grid-template-columns: repeat(3, minmax(355px, 1fr));\n  grid-auto-rows: .5fr;\n  ",xxl:"\n  grid-template-columns: repeat(4, minmax(400px, 1fr));\n  grid-auto-rows: .5fr;\n  "}),E=c.ZP.div.withConfig({displayName:"pages__Images",componentId:"sc-1tbygr9-2"})(["width:100%;display:grid;margin:0 5px;grid-gap:10px;grid-template-columns:repeat(2,minmax(250px,1fr));grid-auto-rows:250px;grid-auto-flow:dense;",""],M),q=(0,h.CH)({xs:"\n    grid-column: span 1;\n    grid-row: span 1;\n  "}),L=c.ZP.div.withConfig({displayName:"pages__ImageMeta",componentId:"sc-1tbygr9-3"})(["position:absolute;top:0;opacity:0;transition:opacity 0.5s;display:flex;width:100%;height:fit-content;justify-content:flex-start;align-items:flex-start;color:var(--background);background-color:rgba(0,0,0,0.65);z-index:2;border-radius:5px;"]),z=c.ZP.div.withConfig({displayName:"pages__ImageContainer",componentId:"sc-1tbygr9-4"})(["position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:100%;border-radius:5px;border:1px solid black;&:last-child:nth-child(3n - 2){grid-column:span 3 !important;}"," "," svg{user-select:none;}*{transition:opacity 0.5s;}:hover,:focus,:target{cursor:pointer;*{opacity:1;}}"],q,(function(e){var n="";return e.big?n="\n      grid-column: span 2;\n      grid-row: span 2;\n    ":e.tall?n="\n      grid-row: span 3;\n      ".concat(h.y$," {\n        grid-row: span 3;\n      }\n    "):e.wide&&(n="\n      grid-column: span 2;\n      &:last-child:nth-child(3n - 2) {\n        grid-column: span 3;\n      }\n    "),n})),B=c.ZP.div.withConfig({displayName:"pages__ImageWrapper",componentId:"sc-1tbygr9-5"})(["position:relative;user-select:none;display:flex;width:100%;height:100%;border-radius:5px;"]),F=(0,h.CH)({lg:"\n  font-size: 1.5rem;\n  margin: 0.75rem;\n  svg {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  ",xl:"\n  font-size: 1.75rem;\n  margin: 1rem;\n  svg {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n  ",xxl:"\n  font-size: 2rem;\n  margin: 1rem;\n  svg {\n    width: 2rem;\n    height: 2rem;\n  }\n  "}),D=c.ZP.div.withConfig({displayName:"pages__MetaList",componentId:"sc-1tbygr9-6"})(["opacity:0;display:flex;flex-wrap:wrap;margin:0.5rem;font-size:1rem;svg{width:1rem;height:1rem;fill:var(--background);margin-right:10px;}",""],F),H=c.ZP.div.withConfig({displayName:"pages__MetaItem",componentId:"sc-1tbygr9-7"})(["display:flex;align-content:center;margin:0.5rem;"]),R=c.ZP.div.withConfig({displayName:"pages__MetaTags",componentId:"sc-1tbygr9-8"})(["display:flex;align-content:center;"]),A=c.ZP.a.withConfig({displayName:"pages__MetaLink",componentId:"sc-1tbygr9-9"})(["color:var(--background);text-decoration:underline;:hover{color:var(--primary);}margin-left:0.5rem;:first-of-type{margin-left:0;}"]),T=c.ZP.div.withConfig({displayName:"pages__NoResultsWrapper",componentId:"sc-1tbygr9-10"})(["display:flex;justify-self:center;align-self:baseline;flex-direction:column;justify-content:center;align-items:center;grid-column:1/-1;margin:0 10px;img{width:200px !important;}"])},2610:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5728)}])}},function(e){e.O(0,[563,360,671,481,774,888,179],(function(){return n=2610,e(e.s=n);var n}));var n=e.O();_N_E=n}]);