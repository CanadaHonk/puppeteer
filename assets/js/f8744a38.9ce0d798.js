"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(r),y=i,b=f["".concat(c,".").concat(y)]||f[y]||s[y]||o;return r?n.createElement(b,p(p({ref:t},l),{},{components:r})):n.createElement(b,p({ref:t},l))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>l});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const p={sidebar_label:"HTTPRequest.client"},a="HTTPRequest.client property",c={unversionedId:"api/puppeteer.httprequest.client",id:"version-19.7.2/api/puppeteer.httprequest.client",title:"HTTPRequest.client property",description:"Warning! Using this client can break Puppeteer. Use with caution.",source:"@site/versioned_docs/version-19.7.2/api/puppeteer.httprequest.client.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.client",permalink:"/api/puppeteer.httprequest.client",draft:!1,tags:[],version:"19.7.2",frontMatter:{sidebar_label:"HTTPRequest.client"},sidebar:"api",previous:{title:"HTTPRequest.abortErrorReason",permalink:"/api/puppeteer.httprequest.aborterrorreason"},next:{title:"HTTPRequest.continue",permalink:"/api/puppeteer.httprequest.continue"}},u={},l=[{value:"Signature:",id:"signature",level:4}],s={toc:l};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"httprequestclient-property"}),"HTTPRequest.client property"),(0,n.kt)("p",null,"Warning! Using this client can break Puppeteer. Use with caution."),(0,n.kt)("h4",i({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"class HTTPRequest {\n  get client(): CDPSession;\n}\n")))}f.isMDXComponent=!0}}]);