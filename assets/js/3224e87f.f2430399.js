"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(a),d=n,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>m});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={sidebar_label:"Page.emulateMediaFeatures"},p="Page.emulateMediaFeatures() method",u={unversionedId:"api/puppeteer.page.emulatemediafeatures",id:"version-19.8.4/api/puppeteer.page.emulatemediafeatures",title:"Page.emulateMediaFeatures() method",description:"Signature:",source:"@site/versioned_docs/version-19.8.4/api/puppeteer.page.emulatemediafeatures.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatemediafeatures",permalink:"/api/puppeteer.page.emulatemediafeatures",draft:!1,tags:[],version:"19.8.4",frontMatter:{sidebar_label:"Page.emulateMediaFeatures"},sidebar:"api",previous:{title:"Page.emulateIdleState",permalink:"/api/puppeteer.page.emulateidlestate"},next:{title:"Page.emulateMediaType",permalink:"/api/puppeteer.page.emulatemediatype"}},o={},m=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:m};function s(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"pageemulatemediafeatures-method"}),"Page.emulateMediaFeatures() method"),(0,r.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  emulateMediaFeatures(features?: MediaFeature[]): Promise<void>;\n}\n")),(0,r.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"features"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mediafeature"}),"MediaFeature"),"[","]"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"(Optional)")," ",(0,r.kt)("code",null,"<","?Array","<","Object",">",">")," Given an array of media feature objects, emulates CSS media features on the page. Each media feature object must have the following properties:")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",n({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.emulateMediaFeatures([\n  {name: 'prefers-color-scheme', value: 'dark'},\n]);\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);\n// \u2192 false\n\nawait page.emulateMediaFeatures([\n  {name: 'prefers-reduced-motion', value: 'reduce'},\n]);\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: reduce)').matches\n);\n// \u2192 true\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: no-preference)').matches\n);\n// \u2192 false\n\nawait page.emulateMediaFeatures([\n  {name: 'prefers-color-scheme', value: 'dark'},\n  {name: 'prefers-reduced-motion', value: 'reduce'},\n]);\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);\n// \u2192 false\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: reduce)').matches\n);\n// \u2192 true\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: no-preference)').matches\n);\n// \u2192 false\n\nawait page.emulateMediaFeatures([{name: 'color-gamut', value: 'p3'}]);\nawait page.evaluate(() => matchMedia('(color-gamut: srgb)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(color-gamut: p3)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(color-gamut: rec2020)').matches);\n// \u2192 false\n")))}s.isMDXComponent=!0}}]);