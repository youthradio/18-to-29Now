(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{201:function(t,e,r){"use strict";var n=r(2),o=r(35).find,l=r(104),c=r(16),d=!0,f=c("find");"find"in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d||!f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l("find")},204:function(t,e,r){var n=r(205)("jsonp");t.exports=function(t,e,r){"function"==typeof e&&(r=e,e={});e||(e={});var script,c,d=e.prefix||"__jp",f=e.name||d+o++,param=e.param||"callback",m=null!=e.timeout?e.timeout:6e4,h=encodeURIComponent,v=document.getElementsByTagName("script")[0]||document.head;m&&(c=setTimeout((function(){y(),r&&r(new Error("Timeout"))}),m));function y(){script.parentNode&&script.parentNode.removeChild(script),window[f]=l,c&&clearTimeout(c)}return window[f]=function(data){n("jsonp got",data),y(),r&&r(null,data)},t=(t+=(~t.indexOf("?")?"&":"?")+param+"="+h(f)).replace("?&","?"),n('jsonp req "%s"',t),(script=document.createElement("script")).src=t,v.parentNode.insertBefore(script,v),function(){window[f]&&y()}};var o=0;function l(){}},205:function(t,e,r){(function(n){function o(){var t;try{t=e.storage.debug}catch(t){}return!t&&void 0!==n&&"env"in n&&(t=n.env.DEBUG),t}(e=t.exports=r(206)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var o=0,l=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(o++,"%c"===t&&(l=o))})),t.splice(l,0,n)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}},e.load=o,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(o())}).call(this,r(148))},206:function(t,e,r){var n;function o(t){function r(){if(r.enabled){var t=r,o=+new Date,l=o-(n||o);t.diff=l,t.prev=n,t.curr=o,n=o;for(var c=new Array(arguments.length),i=0;i<c.length;i++)c[i]=arguments[i];c[0]=e.coerce(c[0]),"string"!=typeof c[0]&&c.unshift("%O");var d=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;d++;var o=e.formatters[n];if("function"==typeof o){var l=c[d];r=o.call(t,l),c.splice(d,1),d--}return r})),e.formatArgs.call(t,c);var f=r.log||e.log||console.log.bind(console);f.apply(t,c)}}return r.namespace=t,r.enabled=e.enabled(t),r.useColors=e.useColors(),r.color=function(t){var i,r=0;for(i in t)r=(r<<5)-r+t.charCodeAt(i),r|=0;return e.colors[Math.abs(r)%e.colors.length]}(t),"function"==typeof e.init&&e.init(r),r}(e=t.exports=o.debug=o.default=o).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){e.save(t),e.names=[],e.skips=[];for(var r=("string"==typeof t?t:"").split(/[\s,]+/),n=r.length,i=0;i<n;i++)r[i]&&("-"===(t=r[i].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){var i,r;for(i=0,r=e.skips.length;i<r;i++)if(e.skips[i].test(t))return!1;for(i=0,r=e.names.length;i<r;i++)if(e.names[i].test(t))return!0;return!1},e.humanize=r(207),e.names=[],e.skips=[],e.formatters={}},207:function(t,e){var s=1e3,r=6e4,n=60*r,o=24*n;function l(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}t.exports=function(t,e){e=e||{};var c,d=typeof t;if("string"===d&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!e)return;var l=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*l;case"days":case"day":case"d":return l*o;case"hours":case"hour":case"hrs":case"hr":case"h":return l*n;case"minutes":case"minute":case"mins":case"min":case"m":return l*r;case"seconds":case"second":case"secs":case"sec":case"s":return l*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}(t);if("number"===d&&!1===isNaN(t))return e.long?l(c=t,o,"day")||l(c,n,"hour")||l(c,r,"minute")||l(c,s,"second")||c+" ms":function(t){if(t>=o)return Math.round(t/o)+"d";if(t>=n)return Math.round(t/n)+"h";if(t>=r)return Math.round(t/r)+"m";if(t>=s)return Math.round(t/s)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},208:function(t,e,r){"use strict";const n=r(209),o=r(210),l=r(211);function c(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function f(t,e){return e.decode?o(t):t}function m(input){const t=input.indexOf("#");return-1!==t&&(input=input.slice(0,t)),input}function h(input){const t=(input=m(input)).indexOf("?");return-1===t?"":input.slice(t+1)}function v(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function y(input,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const e=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,n)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return(t,r,n)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return(e,r,n)=>{const o="string"==typeof r&&r.split("").indexOf(t.arrayFormatSeparator)>-1?r.split(t.arrayFormatSeparator).map(e=>f(e,t)):null===r?r:f(r,t);n[e]=o};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(t),r=Object.create(null);if("string"!=typeof input)return r;if(!(input=input.trim().replace(/^[?#&]/,"")))return r;for(const param of input.split("&")){let[n,o]=l(t.decode?param.replace(/\+/g," "):param,"=");o=void 0===o?null:["comma","separator"].includes(t.arrayFormat)?o:f(o,t),e(f(n,t),o,r)}for(const e of Object.keys(r)){const n=r[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=v(n[e],t);else r[e]=v(n,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((t,e)=>{const n=r[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=function t(input){return Array.isArray(input)?input.sort():"object"==typeof input?t(Object.keys(input)).sort((a,b)=>Number(a)-Number(b)).map(t=>input[t]):input}(n):t[e]=n,t},Object.create(null))}e.extract=h,e.parse=y,e.stringify=(object,t)=>{if(!object)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const e=e=>t.skipNull&&null==object[e]||t.skipEmptyString&&""===object[e],r=function(t){switch(t.arrayFormat){case"index":return e=>(r,n)=>{const o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[d(e,t),"[",o,"]"].join("")]:[...r,[d(e,t),"[",d(o,t),"]=",d(n,t)].join("")]};case"bracket":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[d(e,t),"[]"].join("")]:[...r,[d(e,t),"[]=",d(n,t)].join("")];case"comma":case"separator":return e=>(r,n)=>null==n||0===n.length?r:0===r.length?[[d(e,t),"=",d(n,t)].join("")]:[[r,d(n,t)].join(t.arrayFormatSeparator)];default:return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,d(e,t)]:[...r,[d(e,t),"=",d(n,t)].join("")]}}(t),n={};for(const t of Object.keys(object))e(t)||(n[t]=object[t]);const o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map(e=>{const n=object[e];return void 0===n?"":null===n?d(e,t):Array.isArray(n)?n.reduce(r(e),[]).join("&"):d(e,t)+"="+d(n,t)}).filter(t=>t.length>0).join("&")},e.parseUrl=(input,t)=>{t=Object.assign({decode:!0},t);const[e,r]=l(input,"#");return Object.assign({url:e.split("?")[0]||"",query:y(h(input),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:f(r,t)}:{})},e.stringifyUrl=(input,t)=>{t=Object.assign({encode:!0,strict:!0},t);const r=m(input.url).split("?")[0]||"",n=e.extract(input.url),o=e.parse(n,{sort:!1}),l=Object.assign(o,input.query);let c=e.stringify(l,t);c&&(c="?"+c);let f=function(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(input.url);return input.fragmentIdentifier&&(f="#"+d(input.fragmentIdentifier,t)),`${r}${c}${f}`}},209:function(t,e,r){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())},210:function(t,e,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function l(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],l(r),l(n))}function c(input){try{return decodeURIComponent(input)}catch(e){for(var t=input.match(n),i=1;i<t.length;i++)t=(input=l(t,i).join("")).match(n);return input}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(input){for(var t={"%FE%FF":"��","%FF%FE":"��"},e=o.exec(input);e;){try{t[e[0]]=decodeURIComponent(e[0])}catch(n){var r=c(e[0]);r!==e[0]&&(t[e[0]]=r)}e=o.exec(input)}t["%C2"]="�";for(var n=Object.keys(t),i=0;i<n.length;i++){var l=n[i];input=input.replace(new RegExp(l,"g"),t[l])}return input}(t)}}},211:function(t,e,r){"use strict";t.exports=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},212:function(t,e,r){"use strict";var n=r(17),o=r(71),l=r(8);t.exports=function(t){for(var e=n(this),r=l(e.length),c=arguments.length,d=o(c>1?arguments[1]:void 0,r),f=c>2?arguments[2]:void 0,m=void 0===f?r:o(f,r);m>d;)e[d++]=t;return e}},224:function(t,e,r){"use strict";var n=r(204),o=r(208);e.a={props:{url:{required:!0,type:String},userId:{required:!0,type:String},listId:{required:!0,type:String}},data:function(){return{email:null,success:!1,error:null,loading:!1}},computed:{data:function(){return o.stringify({u:this.userId,id:this.listId,EMAIL:this.email})}},methods:{setEmail:function(t){void 0===t&&(t=""),this.email=t.trim()},subscribe:function(){null===this.email||this.loading||(this.success=!1,this.error=null,this.loading=!0,n(this.url+"?"+this.data,{param:"c"},this.onResponse))},onResponse:function(t,s){this.loading=!1,t&&(this.error=t),s&&"error"===s.result&&(this.error=this.formatErrorMessage(s.msg)),this.error?this.$emit("error",this.error):(this.success=!0,this.email=null,this.$emit("success"))},formatErrorMessage:function(t){return t.replace("0 - ","")}},render:function(){return this.$scopedSlots.default({subscribe:this.subscribe,setEmail:this.setEmail,error:this.error,success:this.success,loading:this.loading})}}},225:function(t,e,r){var n=r(2),o=r(212),l=r(104);n({target:"Array",proto:!0},{fill:o}),l("fill")},237:function(t,e,r){"use strict";var n={mixins:[r(200).a],props:{articles:{type:Array,required:!0}},mounted:function(){},methods:{}},o=r(27),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.articles?r("main",{staticClass:"relative flex flex-column flex-row-ns mw8 center",attrs:{id:"header"}},t._l(t.articles,(function(e,i){return r("article",{key:e.slug,class:[i%2?"pl2-ns":"pr2-ns","w-50-ns"]},[r("div",{staticClass:"flex flex-column"},[r("div",{staticClass:"mb2"},[r("nuxt-link",{staticClass:"link db dim black",attrs:{title:e.title,to:{path:"/story/"+e.slug}}},[r("div",{staticClass:"relative"},[r("img",{staticClass:"db lazyload",staticStyle:{"object-fit":"cover"},attrs:{"data-src":e.featureImageSmall,loading:"lazy",src:"blankfeature.jpg",alt:"Photo of a dimly lit room with a computer interface terminal."}})])])],1),t._v(" "),r("div",{staticClass:"w-100 w-90-ns"},[r("nuxt-link",{staticClass:"link db underline-hover blue",attrs:{title:e.title,to:{path:"/story/"+e.slug}}},[r("h2",{staticClass:"blue f3 f2-ns serif ma0 lh-title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),r("a",{staticClass:"pointer link db blue dim black",attrs:{title:e.author+" Bio"},on:{click:function(r){return r.preventDefault(),t.$emit("toggleBioModalSlug",e.authorslug)}}},[r("h3",{staticClass:"dark-red lh-title mv1 f5 f4-ns"},[t._v("\n            "+t._s(e.author)+" |\n            "),r("span",{staticClass:"ttc normal"},[t._v(" "+t._s(e.format)+" ")])])]),t._v(" "),r("nuxt-link",{staticClass:"link db dim black",attrs:{title:e.summary,to:{path:"/story/"+e.slug}}},[r("p",{staticClass:"f4-l lh-copy mt0"},[t._v("\n            "+t._s(e.summary)+"\n          ")])])],1)])])})),0):t._e()}),[],!1,null,null,null);e.a=component.exports},248:function(t,e,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("1631d672",content,!0,{sourceMap:!1})},265:function(t,e,r){"use strict";r(248)},266:function(t,e,r){(e=r(66)(!1)).push([t.i,'[id][data-v-0cb3a4dc]:before{content:"";display:block;height:50px;margin-top:-50px;visibility:hidden}',""]),t.exports=e},269:function(t,e,r){"use strict";r.r(e);r(68),r(201),r(49),r(29),r(50),r(28),r(69),r(51),r(37);var data=r(223),n=r(200),o={mixins:[n.a],props:{copy:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){window.innerWidth>1300&&this.randomIcons(this.$refs.flourishes,3,!0,!0)}},l=r(27),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"relative min-vh-100 bg-washed-red"},[r("div",{ref:"flourishes",staticClass:"absolute flex flex-column justify-around z-0 top-0 left-0 right-0 bottom-0 pointer-events-none"}),t._v(" "),r("nav",{staticClass:"fixed w-100 top-0 serif db pv2 f6 f4-ns bg-blue b z-5"},[r("div",{staticClass:"flex justify-around justify-center-ns"},[r("nuxt-link",{staticClass:"link dib mh4-ns pv1 underline-hover washed-red",attrs:{title:"About",to:{path:"/",hash:"#about"}}},[t._v("\n        About this Project\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"link dib mh4-ns pv1 underline-hover washed-red",attrs:{title:"Latest",to:{path:"/",hash:"#stories"}}},[t._v("\n        Stories\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"link dib mh4-ns pv1 underline-hover washed-red",attrs:{to:{path:"/",hash:"#contributors"},title:"Contributors"}},[t._v("\n        Contributors\n      ")])],1)]),t._v(" "),r("div",{staticClass:"relative min-vh-100 layers ph3 ph0-ns mt4 pb4-ns flex flex-column justify-center"},[r("img",{staticClass:"db dn-ns w-50 mt3 nb4 ml3 z-2",attrs:{alt:"",src:"logos/youngamerica.svg"}}),t._v(" "),r("div",{staticClass:"grid-container grid-container-ns grid-container-l h-100 self-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("div",{staticClass:"measure dn db-ns grid-col-5-7 grid-col-5-6-lg"},[r("p",{staticClass:"sans-serif lh-title ma0 b",domProps:{innerHTML:t._s(t.copy)}})])]),t._v(" "),t._m(17),t._v(" "),r("div",{staticClass:"flex ml-auto ph2 db dn-ns"},[r("p",{staticClass:"sans-serif lh-title b",domProps:{innerHTML:t._s(t.copy)}})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid-col-start-2 dn db-ns"},[e("img",{staticClass:"gridimg db mw-none w-100 z-0",attrs:{alt:"",src:"images/grid/1.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/2.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/3.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/4.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dn db-ns grid-col-1-4"},[e("div",{staticClass:"flex justify-end items-end h-100 pl4"},[e("img",{staticClass:"db h-100",attrs:{alt:"",src:"logos/ygamerica.svg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/5.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/6.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid-col-start-1 dn db-ns"},[e("div",{},[e("p",{staticClass:"sans-serif f7 lh-title ttu tr"},[this._v("BROUGHT"),e("br"),this._v("TO YOU BY")]),this._v(" "),e("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://yr.media",target:"_blank"}},[e("img",{staticClass:"db ml-auto pa1 pr0 img-fluid-h",attrs:{src:"logos/yrlogo.svg",alt:"YR Media Logo"}})]),this._v(" "),e("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://wnyc.org",target:"_blank"}},[e("img",{staticClass:"db ml-auto pa1 pr0 img-fluid-h",attrs:{src:"logos/wnyclogo.svg",alt:"WNYC Logo"}})]),this._v(" "),e("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://www.wnyc.org/shows/rookies",target:"_blank"}},[e("img",{staticClass:"db ml-auto pa1 pr0 img-fluid-h",attrs:{src:"logos/radio-rookies.svg",alt:"Radio Rookies"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid-col-start-2 dn db-ns"},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/7.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative"},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/8.jpg"}}),this._v(" "),e("img",{staticClass:"absolute mw-none bottom-1 dn db-ns",staticStyle:{width:"220%"},attrs:{alt:"",src:"logos/18to29stroke.svg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/9.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dn db-ns grid-col-5-7"},[e("div",{staticClass:"flex h-100 pr5"},[e("img",{staticClass:"db h-100",attrs:{alt:"",src:"logos/speaksup.svg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid-col-start-2"},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/10.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"gridimg db mw-none w-100",attrs:{alt:"",src:"images/grid/11.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"gridimg db mw-none w-100 db-ns",attrs:{alt:"",src:"images/grid/12.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"db dn-ns"},[e("img",{staticClass:"gridimg db mw-none w-100 db-ns",attrs:{alt:"",src:"images/grid/7.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"db dn-ns"},[e("img",{staticClass:"gridimg db mw-none w-100 db-ns",attrs:{alt:"",src:"images/grid/1.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"db dn-ns mt3 ph3"},[e("p",{staticClass:"sans-serif lh-title ttu tc f7"},[this._v("BROUGHT TO YOU BY")]),this._v(" "),e("div",{staticClass:"flex w-80 center justify-around justify-start-ns items-baseline"},[e("div",{staticClass:"ph2"},[e("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://yr.media",target:"_blank"}},[e("img",{staticClass:"db h-100",attrs:{src:"logos/yrlogo.svg",alt:"YR Media Logo"}})])]),this._v(" "),e("div",{staticClass:"ph2"},[e("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://www.wnyc.org",target:"_blank"}},[e("img",{staticClass:"db h-100",attrs:{src:"logos/wnyclogo.svg",alt:"WNYC Logo"}})])]),this._v(" "),e("div",{staticClass:"ph2"},[e("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://www.wnyc.org/shows/rookies",target:"_blank"}},[e("img",{staticClass:"db h-100",attrs:{src:"logos/radio-rookies.svg",alt:"Radio Rookies"}})])])])])}],!1,null,null,null).exports,d=r(234),f=r(237);function m(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v={components:{MainHeader:c,Footer:d.a,HorizontalContainer:f.a},mixins:[n.a],asyncData:function(t){var e=data.main.quotes.length,r=data.main.latest.map((function(t){return data.stories.find((function(e){return e.slug===t.slug}))})),n=data.main.quotes[~~(Math.random()*e)];return{featured:data.main.featured.map((function(t){return data.stories.find((function(e){return e.slug===t.slug}))})),randomQuote:n,latest:r,biosData:data.bios.filter((function(t){return!t.hide})).sort((function(a,b){return a.name.split(" ")[1]>b.name.split(" ")[1]?1:-1})),articleData:data}},data:function(){return{}},computed:{},mounted:function(){window.innerWidth>1300&&this.randomIcons(this.$refs.flourishes,8,!0,!0),this.$nextTick((function(){location.hash&&document.querySelector(location.hash).scrollIntoView()})),new ResizeObserver((function(t){var e,r=m(t);try{for(r.s();!(e=r.n()).done;){var n=e.value;location.hash&&n&&setTimeout((function(){document.querySelector(location.hash).scrollIntoView()}),400)}}catch(t){r.e(t)}finally{r.f()}})).observe(this.$refs.bios);var t=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&history.pushState({},null,"#"+encodeURIComponent(t.target.id))}))}),{threshold:1});this.$el.querySelectorAll("h1[id],h2[id]").forEach((function(e){return t.observe(e)}))}},y=(r(265),Object(l.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("MainHeader",{staticClass:"relative",attrs:{copy:t.articleData.main.header.copy}}),t._v(" "),r("div",{staticClass:"relative"},[r("div",{ref:"flourishes",staticClass:"absolute flex flex-column justify-around z-0 top-0 left-0 right-0 bottom-0 pointer-events-none"}),t._v(" "),r("h1",{staticClass:"mw8 f3 lh-title center ph3 blue ttu mt4",attrs:{id:"stories"}},[t._v("\n      Stories\n    ")]),t._v(" "),r("HorizontalContainer",{staticClass:"ph3 relative z-1",attrs:{articles:t.featured},on:{toggleBioModalSlug:function(e){return t.toggleBioModalSlug(e)}}}),t._v(" "),r("section",{staticClass:"mw8 center ph3 relative z-1 mt2"},[t._l(t.latest,(function(article){return[r("article",{key:article.slug,staticClass:"pb4"},[r("div",{staticClass:"flex flex-column flex-row-ns"},[r("div",{staticClass:"pr3-ns mb4 mb0-ns w-30-ns"},[r("nuxt-link",{staticClass:"link db dim black",attrs:{title:article.title,to:{path:"story/"+article.slug}}},[r("img",{staticClass:"db lazyload",staticStyle:{"object-fit":"cover"},attrs:{"data-src":article.featureImageSmall,src:"blankfeature.jpg",loading:"lazy",alt:"Photo of a dimly lit room with a computer interface terminal."}})])],1),t._v(" "),r("div",{staticClass:"w-70-ns pl3-ns"},[r("nuxt-link",{staticClass:"link db blue underline-hover",attrs:{title:article.title,to:{path:"story/"+article.slug}}},[r("h2",{staticClass:"blue serif mv0 lh-title f4 f3-ns",domProps:{innerHTML:t._s(article.title)}})]),t._v(" "),r("a",{staticClass:"pointer link db blue dim black",attrs:{title:article.author+" Bio"},on:{click:function(e){return e.preventDefault(),t.toggleBioModalSlug(article.authorslug)}}},[r("h3",{staticClass:"dark-red lh-title mv1 f5 f4-ns"},[t._v("\n                  "+t._s(article.author)+" |\n                  "),r("span",{staticClass:"ttc normal"},[t._v(" "+t._s(article.format))])])]),t._v(" "),r("nuxt-link",{staticClass:"link db dim black",attrs:{title:article.summary,to:{path:"story/"+article.slug}}},[r("p",{staticClass:"f4-l lh-copy mv0"},[t._v(t._s(article.summary))])])],1)])])]}))],2),t._v(" "),r("div",{staticClass:"bg-washed-red relative z--1"},[r("blockquote",{staticClass:"flex flex-column flex-row-ns items-end f3 f2-ns center mw8 ph3"},[r("p",{staticClass:"blue serif fw9 lh-copy lh-title-ns w-80-ns mv3 mv5-ns"},[t._v("\n          "+t._s(t.randomQuote.quote)+"\n        ")]),t._v(" "),r("cite",{staticClass:"blue sans f6 fs-normal w-20-ns mv3 mv5-ns"},[r("a",{staticClass:"pointer link db blue dim black",attrs:{title:t.randomQuote.author+" Bio"},on:{click:function(e){return e.preventDefault(),t.toggleBioModalSlug(t.randomQuote.authorslug)}}},[r("div",{staticClass:"cite-symbol"},[t._v("\n              "+t._s(t.randomQuote.author)+"\n            ")]),t._v("\n            "+t._s(t.randomQuote.location)+"\n          ")])])])]),t._v(" "),r("section",{staticClass:"mw8 center relative z-1 pt4"},[r("h1",{staticClass:"blue f3 lh-title ttu ph3 relative",attrs:{id:"contributors"}},[t._v("\n        Contributors\n      ")]),t._v(" "),r("div",{ref:"bios",staticClass:"flex flex-wrap ph2 relative"},[t._l(t.biosData,(function(e){return[r("div",{key:e.authorslug,staticClass:"w-50 w-20-ns relative"},[r("div",{staticClass:"ph2 ph2-ns"},[r("a",{staticClass:"link pointer db dim black",attrs:{title:e.name+"\n"+e.location},on:{click:function(r){return r.preventDefault(),t.toggleBioModal(e)}}},[r("div",{staticClass:"bb bw2 pb3 b--dark-red"},[r("div",{staticClass:"aspect-ratio aspect-ratio--1x1"},[r("img",{staticClass:"aspect-ratio--object db img-fluid lazyload",attrs:{"data-src":e.image,src:"blank.jpg",loading:"lazy",alt:"Photo of a dimly lit room with a computer interface terminal."}})])]),t._v(" "),r("h3",{staticClass:"blue serif mt3 mb0 lh-title f5 f4-ns"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),r("h4",{staticClass:"normal lh-title mt0 f6 f5-ns"},[t._v("\n                  "+t._s(e.location)+"\n                ")])])])])]}))],2)]),t._v(" "),r("section",{staticClass:"mw8 center ph3 mt4 mt5-ns relative z-1"},[r("h2",{staticClass:"blue mt0 lh-title ttu",attrs:{id:"about"}},[t._v("About")]),t._v(" "),r("div",{staticClass:"mw9 center two-col-ns lh-copy f5 f4-ns",domProps:{innerHTML:t._s(t.articleData.main.about.text)}}),t._v(" "),r("div",{staticClass:"mw9 center lh-copy f7 i",domProps:{innerHTML:t._s(t.articleData.main.about.credits)}})]),t._v(" "),t.modelBioData?r("Modal",{staticClass:"z-10",attrs:{authordata:t.modelBioData,"article-data":t.articleData},on:{toggleModal:t.toggleBioModal}}):t._e(),t._v(" "),t._m(0)],1),t._v(" "),r("Footer",{attrs:{content:t.articleData.main.footer}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center pv4"},[e("a",{staticClass:"pointer f6 grow no-underline br-pill ph3 pv2 mb2 dib washed-red bg-blue center",attrs:{href:"#",title:"Back to Top"}},[this._v("\n        Back to Top\n      ")])])}],!1,null,"0cb3a4dc",null));e.default=y.exports}}]);