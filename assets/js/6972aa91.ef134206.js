"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={sidebar_label:"HTTPRequest.initiator"},p="HTTPRequest.initiator() method",u={unversionedId:"api/puppeteer.httprequest.initiator",id:"api/puppeteer.httprequest.initiator",title:"HTTPRequest.initiator() method",description:"The initiator of the request.",source:"@site/../docs/api/puppeteer.httprequest.initiator.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.initiator",permalink:"/next/api/puppeteer.httprequest.initiator",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPRequest.initiator"},sidebar:"api",previous:{title:"HTTPRequest.headers",permalink:"/next/api/puppeteer.httprequest.headers"},next:{title:"HTTPRequest.interceptResolutionState",permalink:"/next/api/puppeteer.httprequest.interceptresolutionstate"}},l={},c=[{value:"Signature:",id:"signature",level:4}],s={toc:c};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"httprequestinitiator-method"}),"HTTPRequest.initiator() method"),(0,n.kt)("p",null,"The initiator of the request."),(0,n.kt)("h4",i({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"class HTTPRequest {\n  initiator(): Protocol.Network.Initiator;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Protocol.Network.Initiator"))}f.isMDXComponent=!0}}]);