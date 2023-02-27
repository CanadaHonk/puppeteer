"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_label:"ElementHandle.$$eval"},i="ElementHandle.$$eval() method",p={unversionedId:"api/puppeteer.elementhandle.__eval",id:"version-19.7.2/api/puppeteer.elementhandle.__eval",title:"ElementHandle.$$eval() method",description:"Runs the given function on an array of elements matching the given selector in the current element.",source:"@site/versioned_docs/version-19.7.2/api/puppeteer.elementhandle.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.__eval",permalink:"/api/puppeteer.elementhandle.__eval",draft:!1,tags:[],version:"19.7.2",frontMatter:{sidebar_label:"ElementHandle.$$eval"},sidebar:"api",previous:{title:"ElementHandle.$$",permalink:"/api/puppeteer.elementhandle.__"},next:{title:"ElementHandle.$eval",permalink:"/api/puppeteer.elementhandle._eval"}},u={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"elementhandleeval-method"}),"ElementHandle.$$eval() method"),(0,r.kt)("p",null,"Runs the given function on an array of elements matching the given selector in the current element."),(0,r.kt)("p",null,"If the given function returns a promise, then this method will wait till the promise resolves."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"selector"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Selector"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The selector to query for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"pageFunction"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Func ","|"," string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The function to be evaluated in the element's page's context. An array of elements matching the given selector will be passed to the function as its first argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"args"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Params"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Additional arguments to pass to ",(0,r.kt)("code",null,"pageFunction"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,r.kt)("p",null,"A promise to the result of the function."),(0,r.kt)("h2",a({},{id:"example"}),"Example"),(0,r.kt)("p",null,"HTML:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<div class="feed">\n  <div class="tweet">Hello!</div>\n  <div class="tweet">Hi!</div>\n</div>\n')),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"const feedHandle = await page.$('.feed');\nexpect(\n  await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))\n).toEqual(['Hello!', 'Hi!']);\n")))}m.isMDXComponent=!0}}]);