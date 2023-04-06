"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_label:"Page.setContent"},p="Page.setContent() method",l={unversionedId:"api/puppeteer.page.setcontent",id:"version-19.8.3/api/puppeteer.page.setcontent",title:"Page.setContent() method",description:"Set the content of the page.",source:"@site/versioned_docs/version-19.8.3/api/puppeteer.page.setcontent.md",sourceDirName:"api",slug:"/api/puppeteer.page.setcontent",permalink:"/api/puppeteer.page.setcontent",draft:!1,tags:[],version:"19.8.3",frontMatter:{sidebar_label:"Page.setContent"},sidebar:"api",previous:{title:"Page.setCacheEnabled",permalink:"/api/puppeteer.page.setcacheenabled"},next:{title:"Page.setCookie",permalink:"/api/puppeteer.page.setcookie"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"pagesetcontent-method"}),"Page.setContent() method"),(0,r.kt)("p",null,"Set the content of the page."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  setContent(html: string, options?: WaitForOptions): Promise<void>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"html"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"HTML markup to assign to the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.waitforoptions"}),"WaitForOptions")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"(Optional)")," Parameters that has some properties.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," might have the following options."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," : Maximum time in milliseconds for resources to load, defaults to 30 seconds, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.setdefaultnavigationtimeout"}),"Page.setDefaultNavigationTimeout()")," or ",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.setdefaulttimeout"}),"Page.setDefaultTimeout()")," methods.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"waitUntil"),": When to consider setting markup succeeded, defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, setting content is considered to be successful after all events have been fired. Events can be either:",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," : consider setting content to be finished when the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event is fired.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider setting content to be finished when the ",(0,r.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," event is fired.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"networkidle0")," : consider setting content to be finished when there are no more than 0 network connections for at least ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," ms.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"networkidle2")," : consider setting content to be finished when there are no more than 2 network connections for at least ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," ms."))))}m.isMDXComponent=!0}}]);