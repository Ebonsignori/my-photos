(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{9404:function(e,n,t){"use strict";function r(e,n,t,r,o,a,u){try{var i=e[a](u),l=i.value}catch(s){return void t(s)}i.done?n(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var u=e.apply(n,t);function i(e){r(u,o,a,i,l,"next",e)}function l(e){r(u,o,a,i,l,"throw",e)}i(void 0)}))}}t.r(n),t.d(n,{__N_SSG:function(){return S},default:function(){return E}});var a=t(4649),u=t(7135),i=t.n(u),l=t(6677),s=t(2023),c=t.n(s),f=t(7378),h=t(3735),p=t(7468),g=t(2212);function d(e){return e}function v(e,n){return"string"===typeof n&&(n=e.objects[n]),"GeometryCollection"===n.type?{type:"FeatureCollection",features:n.geometries.map((function(n){return b(e,n)}))}:b(e,n)}function b(e,n){var t=n.id,r=n.bbox,o=null==n.properties?{}:n.properties,a=function(e,n){var t=function(e){if(null==e)return d;var n,t,r=e.scale[0],o=e.scale[1],a=e.translate[0],u=e.translate[1];return function(e,i){i||(n=t=0);var l=2,s=e.length,c=new Array(s);for(c[0]=(n+=e[0])*r+a,c[1]=(t+=e[1])*o+u;l<s;)c[l]=e[l],++l;return c}}(e.transform),r=e.arcs;function o(e,n){n.length&&n.pop();for(var o=r[e<0?~e:e],a=0,u=o.length;a<u;++a)n.push(t(o[a],a));e<0&&function(e,n){for(var t,r=e.length,o=r-n;o<--r;)t=e[o],e[o++]=e[r],e[r]=t}(n,u)}function a(e){return t(e)}function u(e){for(var n=[],t=0,r=e.length;t<r;++t)o(e[t],n);return n.length<2&&n.push(n[0]),n}function i(e){for(var n=u(e);n.length<4;)n.push(n[0]);return n}function l(e){return e.map(i)}function s(e){var n,t=e.type;switch(t){case"GeometryCollection":return{type:t,geometries:e.geometries.map(s)};case"Point":n=a(e.coordinates);break;case"MultiPoint":n=e.coordinates.map(a);break;case"LineString":n=u(e.arcs);break;case"MultiLineString":n=e.arcs.map(u);break;case"Polygon":n=l(e.arcs);break;case"MultiPolygon":n=e.arcs.map(l);break;default:return null}return{type:t,coordinates:n}}return s(n)}(e,n);return null==t&&null==r?{type:"Feature",properties:o,geometry:a}:null==r?{type:"Feature",id:t,properties:o,geometry:a}:{type:"Feature",id:t,bbox:r,properties:o,geometry:a}}var m=t(1879),y=t(2616),w=t(6526);var k=t(8481),j=t(8153),x=t(4246);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var M={},O=function(e){if(!M[e.name]){var n=(t=.15,r=.4,Math.random()*(r-t)+t);return M[e.name]=n,n}var t,r;return M[e.name]},R={},C=function(e){var n=R[e.name];return n||(n=c()({format:"rgba",alpha:.6}),R[e.name]=n),n},_=function(){return.85},A=function(){return.1},S=!0;function E(e){var n=e.images,r=(0,f.useRef)(),u=(0,l.useRouter)(),s=(0,f.useMemo)((function(){return u.asPath.match(/#([a-z0-9]+)/gi)||""}),[u]),c=(0,f.useState)({}),p=c[0],d=c[1],b=(0,f.useState)({}),M=b[0],R=b[1],S=(0,f.useState)(!0),E=S[0],N=S[1],I=(0,f.useState)(null!==s&&void 0!==s&&s.length?s[0].replace("#",""):void 0),G=I[0],F=I[1],D=(0,f.useCallback)((function(e){(e=e.toLowerCase())?u.push("#".concat(e),void 0,{shallow:!0}):u.push("/photo-map",void 0,{shallow:!0}),F(e)}),[u]),T=(0,f.useMemo)((function(){return function(e){var n;return'\n      <div style="text-align: center; color: white; background-color: rgba(0, 0, 0, 0.75); padding: 10px; border-radius: 10px;">\n        <div>'.concat(null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.address?e.location.address:"",", <b>").concat(e.name,"</b></div>\n        <div><em>").concat((0,w.Sg)(e.date),"</em></div>\n      </div>\n    ")}}),[]);(0,f.useEffect)((function(){if(!Object.values(M).length){for(var e=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n),t=Object.values(n),r=0;r<t.length;r++){var o=t[r].name;e[o].prev=r-1>=0?t[r-1].name:t[t.length-1].name,r+1<t.length?e[o].next=t[r+1].name:e[o].next=t[0].name}R(e)}}),[]),(0,f.useEffect)((function(){function e(){return(e=o(i().mark((function e(){var n,r,o,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(246),t.e(316),t.e(312)]).then(t.bind(t,2116));case 2:return n=e.sent.default,e.next=5,fetch("//unpkg.com/world-atlas/land-110m.json");case 5:return r=e.sent,e.next=8,r.json();case 8:o=e.sent,a=v(o,o.objects.land).features,u=new g.YBo({color:"darkslategrey",side:g.ehD}),d({ThreeGlobe:n,landPolygons:a,polygonsMaterial:u});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var Z=(0,f.useMemo)((function(){return p.landPolygons?(E&&N(!1),(0,x.jsx)(p.ThreeGlobe,{ref:r,backgroundColor:"rgba(0,0,0,0)",showGlobe:!1,showAtmosphere:!1,polygonsData:p.landPolygons,polygonCapMaterial:p.polygonsMaterial,polygonSideColor:function(){return"rgba(0, 0, 0, 0)"},pointsData:Object.values(M),pointLat:function(e){return e.location?e.location.latitude:null},pointLng:function(e){return e.location?e.location.longitude:null},pointAltitude:O,pointRadius:A,pointColor:C,pointResolution:2,pointLabel:T,onPointClick:function(e){D(e.name)},labelsData:Object.values(M),labelLat:function(e){return e.location?e.location.latitude:null},labelLng:function(e){return e.location?e.location.longitude:null},labelText:function(){return""},labelAltitude:O,labelLabel:T,labelSize:function(){return 0},labelDotRadius:_,labelColor:C,labelResolution:2,onLabelClick:function(e){D(e.name)},onGlobeReady:function(){r&&r.current&&r.current.pointOfView({lat:"39.01",lng:"-100.88",altitude:1.5})}})):null}),[p]),B=(0,f.useMemo)((function(){return(0,x.jsx)(k.Z,{images:M,imageName:G,setSelectedImageName:D})}),[G,M]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j.Z,{title:"Photo Map",description:"Globe showing locations of all photos on the site",keywords:"Photo Map, Locations, Image Globe",image:"https://evan-bio-assets.s3.amazonaws.com/blog-themed-pencil-icon.jpg",imageAlt:"Pencil icon with colors matching the theme of the blog"}),B,(0,x.jsx)(y.ZP,{title:"Photos",titleUrl:"/",subtitle:"by Evan Bonsignori",navLinks:[{url:"/license",name:"License"},{url:"/photo-map",name:"Photo Map",active:!0},{url:"https://writing.evan.bio",name:"Blog"},{url:"https://evan.bio",name:"About Me"}]}),(0,x.jsxs)(L,{children:[(0,x.jsx)(h.v,{enabled:E,style:{width:"50%",height:"50%",color:"var(--secondary)"}}),Z]}),(0,x.jsx)(m.Z,{})]})}var L=p.ZP.div.withConfig({displayName:"photo-map__GlobeContainer",componentId:"sc-1omh28m-0"})(["height:80vh;display:flex;justify-content:center;align-items:center;max-height:80vh;width:100vw;max-width:100vw;overflow:hidden;border-top:1px solid black;border-bottom:1px solid black;"])},2149:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photo-map",function(){return t(9404)}])},2023:function(e,n,t){e=t.nmd(e),function(t,r){var o=function(){var e=null,n={};d();var t=[],r=function(n){if(void 0!==(n=n||{}).seed&&null!==n.seed&&n.seed===parseInt(n.seed,10))e=n.seed;else if("string"===typeof n.seed)e=y(n.seed);else{if(void 0!==n.seed&&null!==n.seed)throw new TypeError("The seed value must be an integer or string");e=null}var l,s;if(null!==n.count&&void 0!==n.count){for(var c=n.count,f=[],h=0;h<n.count;h++)t.push(!1);for(n.count=null;c>f.length;){var p=r(n);null!==e&&(n.seed=e),f.push(p)}return n.count=c,f}return i([l=o(n),s=a(l,n),u(l,s,n)],n)};function o(e){if(t.length>0){var n=h(a=w(e.hue)),r=(a[1]-a[0])/t.length,o=parseInt((n-a[0])/r);return!0===t[o]?o=(o+2)%t.length:t[o]=!0,(n=h(a=[(a[0]+o*r)%359,(a[0]+(o+1)*r)%359]))<0&&(n=360+n),n}var a;return(n=h(a=s(e.hue)))<0&&(n=360+n),n}function a(e,n){if("monochrome"===n.hue)return 0;if("random"===n.luminosity)return h([0,100]);var t=c(e),r=t[0],o=t[1];switch(n.luminosity){case"bright":r=55;break;case"dark":r=o-10;break;case"light":o=55}return h([r,o])}function u(e,n,t){var r=l(e,n),o=100;switch(t.luminosity){case"dark":o=r+20;break;case"light":r=(o+r)/2;break;case"random":r=0,o=100}return h([r,o])}function i(e,n){switch(n.format){case"hsvArray":return e;case"hslArray":return m(e);case"hsl":var t=m(e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)";case"hsla":var r=m(e),o=n.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+o+")";case"rgbArray":return v(e);case"rgb":return"rgb("+v(e).join(", ")+")";case"rgba":var a=v(e);o=n.alpha||Math.random();return"rgba("+a.join(", ")+", "+o+")";default:return p(e)}}function l(e,n){for(var t=f(e).lowerBounds,r=0;r<t.length-1;r++){var o=t[r][0],a=t[r][1],u=t[r+1][0],i=t[r+1][1];if(n>=o&&n<=u){var l=(i-a)/(u-o);return l*n+(a-l*o)}}return 0}function s(e){if("number"===typeof parseInt(e)){var t=parseInt(e);if(t<360&&t>0)return[t,t]}if("string"===typeof e)if(n[e]){var r=n[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var o=b(e)[0];return[o,o]}return[0,360]}function c(e){return f(e).saturationRange}function f(e){for(var t in e>=334&&e<=360&&(e-=360),n){var r=n[t];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return n[t]}return"Color not found"}function h(n){if(null===e){var t=.618033988749895,r=Math.random();return r+=t,r%=1,Math.floor(n[0]+r*(n[1]+1-n[0]))}var o=n[1]||1,a=n[0]||0,u=(e=(9301*e+49297)%233280)/233280;return Math.floor(a+u*(o-a))}function p(e){var n=v(e);function t(e){var n=e.toString(16);return 1==n.length?"0"+n:n}return"#"+t(n[0])+t(n[1])+t(n[2])}function g(e,t,r){var o=r[0][0],a=r[r.length-1][0],u=r[r.length-1][1],i=r[0][1];n[e]={hueRange:t,lowerBounds:r,saturationRange:[o,a],brightnessRange:[u,i]}}function d(){g("monochrome",null,[[0,0],[100,0]]),g("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),g("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),g("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),g("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),g("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),g("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),g("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function v(e){var n=e[0];0===n&&(n=1),360===n&&(n=359),n/=360;var t=e[1]/100,r=e[2]/100,o=Math.floor(6*n),a=6*n-o,u=r*(1-t),i=r*(1-a*t),l=r*(1-(1-a)*t),s=256,c=256,f=256;switch(o){case 0:s=r,c=l,f=u;break;case 1:s=i,c=r,f=u;break;case 2:s=u,c=r,f=l;break;case 3:s=u,c=i,f=r;break;case 4:s=l,c=u,f=r;break;case 5:s=r,c=u,f=i}return[Math.floor(255*s),Math.floor(255*c),Math.floor(255*f)]}function b(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var n=parseInt(e.substr(0,2),16)/255,t=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,o=Math.max(n,t,r),a=o-Math.min(n,t,r),u=o?a/o:0;switch(o){case n:return[(t-r)/a%6*60||0,u,o];case t:return[60*((r-n)/a+2)||0,u,o];case r:return[60*((n-t)/a+4)||0,u,o]}}function m(e){var n=e[0],t=e[1]/100,r=e[2]/100,o=(2-t)*r;return[n,Math.round(t*r/(o<1?o:2-o)*1e4)/100,o/2*100]}function y(e){for(var n=0,t=0;t!==e.length&&!(n>=Number.MAX_SAFE_INTEGER);t++)n+=e.charCodeAt(t);return n}function w(e){if(isNaN(e)){if("string"===typeof e)if(n[e]){var t=n[e];if(t.hueRange)return t.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){return f(b(e)[0]).hueRange}}else{var r=parseInt(e);if(r<360&&r>0)return f(e).hueRange}return[0,360]}return r}();e&&e.exports&&(n=e.exports=o),n.randomColor=o}()}},function(e){e.O(0,[737,73,671,481,774,888,179],(function(){return n=2149,e(e.s=n);var n}));var n=e.O();_N_E=n}]);