"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||p;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},99030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"Frame.$x"},i="Frame.$x() method",l={unversionedId:"api/puppeteer.frame._x",id:"version-19.7.2/api/puppeteer.frame._x",title:"Frame.$x() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-19.7.2/api/puppeteer.frame._x.md",sourceDirName:"api",slug:"/api/puppeteer.frame._x",permalink:"/api/puppeteer.frame._x",draft:!1,tags:[],version:"19.7.2",frontMatter:{sidebar_label:"Frame.$x"},sidebar:"api",previous:{title:"Frame.$eval",permalink:"/api/puppeteer.frame._eval"},next:{title:"Frame.addScriptTag",permalink:"/api/puppeteer.frame.addscripttag"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],m={toc:u};function c(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"framex-method"}),"Frame.$x() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,n.kt)("p",{parentName:"blockquote"},"Use ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.frame.__"}),"Frame.$$()")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"xpath")," prefix."),(0,n.kt)("p",{parentName:"blockquote"},"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"await frame.$$('xpath/' + xpathExpression)")),(0,n.kt)("p",{parentName:"blockquote"},"This method evaluates the given XPath expression and returns the results. If ",(0,n.kt)("inlineCode",{parentName:"p"},"xpath")," starts with ",(0,n.kt)("inlineCode",{parentName:"p"},"//")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},".//"),", the dot will be appended automatically.")),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Frame {\n  $x(expression: string): Promise<Array<ElementHandle<Node>>>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"expression"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"the XPath expression to evaluate.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","Array","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","Node",">",">",">"))}c.isMDXComponent=!0}}]);