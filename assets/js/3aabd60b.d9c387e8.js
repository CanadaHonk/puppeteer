"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,v=d["".concat(a,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(v,u(u({ref:t},c),{},{components:r})):n.createElement(v,u({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,u=new Array(o);u[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,u[1]=p;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>u,metadata:()=>a,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const u={sidebar_label:"HTTPRequest.continueRequestOverrides"},p="HTTPRequest.continueRequestOverrides() method",a={unversionedId:"api/puppeteer.httprequest.continuerequestoverrides",id:"version-19.7.2/api/puppeteer.httprequest.continuerequestoverrides",title:"HTTPRequest.continueRequestOverrides() method",description:"Signature:",source:"@site/versioned_docs/version-19.7.2/api/puppeteer.httprequest.continuerequestoverrides.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.continuerequestoverrides",permalink:"/api/puppeteer.httprequest.continuerequestoverrides",draft:!1,tags:[],version:"19.7.2",frontMatter:{sidebar_label:"HTTPRequest.continueRequestOverrides"},sidebar:"api",previous:{title:"HTTPRequest.continue",permalink:"/api/puppeteer.httprequest.continue"},next:{title:"HTTPRequest.enqueueInterceptAction",permalink:"/api/puppeteer.httprequest.enqueueinterceptaction"}},s={},c=[{value:"Signature:",id:"signature",level:4}],l={toc:c};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"httprequestcontinuerequestoverrides-method"}),"HTTPRequest.continueRequestOverrides() method"),(0,n.kt)("h4",i({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"class HTTPRequest {\n  continueRequestOverrides(): ContinueRequestOverrides;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/api/puppeteer.continuerequestoverrides"}),"ContinueRequestOverrides")),(0,n.kt)("p",null,"the ",(0,n.kt)("inlineCode",{parentName:"p"},"ContinueRequestOverrides")," that will be used if the interception is allowed to continue (ie, ",(0,n.kt)("inlineCode",{parentName:"p"},"abort()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"respond()")," aren't called)."))}d.isMDXComponent=!0}}]);