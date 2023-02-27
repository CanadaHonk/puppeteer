"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={},i="Query Selectors",s={unversionedId:"guides/query-selectors",id:"version-19.7.2/guides/query-selectors",title:"Query Selectors",description:"Queries are the primary mechanism for interacting with the DOM on your site. For example, a typical workflow goes like:",source:"@site/versioned_docs/version-19.7.2/guides/query-selectors.md",sourceDirName:"guides",slug:"/guides/query-selectors",permalink:"/guides/query-selectors",draft:!1,tags:[],version:"19.7.2",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/guides/configuration"},next:{title:"Evaluate JavaScript",permalink:"/guides/evaluate-javascript"}},c={},p=[{value:"CSS",id:"css",level:2},{value:"Example",id:"example",level:3},{value:"Built-in selectors",id:"built-in-selectors",level:2},{value:"Text selectors (<code>text/</code>)",id:"text-selectors-text",level:3},{value:"Example",id:"example-1",level:4},{value:"XPath selectors (<code>xpath/</code>)",id:"xpath-selectors-xpath",level:3},{value:"Example",id:"example-2",level:4},{value:"ARIA selectors (<code>aria/</code>)",id:"aria-selectors-aria",level:3},{value:"Example",id:"example-3",level:4},{value:"Pierce selectors (<code>pierce/</code>)",id:"pierce-selectors-pierce",level:3},{value:"Example",id:"example-4",level:4},{value:"Custom selectors",id:"custom-selectors",level:2}],u={toc:p};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"query-selectors"}),"Query Selectors"),(0,r.kt)("p",null,"Queries are the primary mechanism for interacting with the DOM on your site. For example, a typical workflow goes like:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// Import puppeteer\nimport puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser\n  const browser = await puppeteer.launch();\n\n  // Create a page\n  const page = await browser.newPage();\n\n  // Go to your site\n  await page.goto('YOUR_SITE');\n\n  // Query for an element handle.\n  const element = await page.waitForSelector('div > .class-name');\n\n  // Do something with element...\n  await element.click(); // Just an example.\n\n  // Dispose of handle\n  await element.dispose();\n\n  // Close browser.\n  await browser.close();\n})();\n")),(0,r.kt)("h2",a({},{id:"css"}),"CSS"),(0,r.kt)("p",null,"CSS selectors follow the CSS spec of the browser being automated. We provide some basic type deduction for CSS selectors (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLInputElement")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"), but any selector that contains no type information (such as ",(0,r.kt)("inlineCode",{parentName:"p"},".class-name"),") will need to be coerced manually using TypeScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"as")," coercion mechanism."),(0,r.kt)("h3",a({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// Automatic\nconst element = await page.waitForSelector('div > input');\n// Manual\nconst element = (await page.waitForSelector(\n  'div > .class-name-for-input'\n)) as HTMLInputElement;\n")),(0,r.kt)("h2",a({},{id:"built-in-selectors"}),"Built-in selectors"),(0,r.kt)("p",null,"Built-in selectors are Puppeteer's own class of selectors for doing things CSS cannot. Every built-in selector starts with a prefix ",(0,r.kt)("inlineCode",{parentName:"p"},".../")," to assist Puppeteer in distinguishing between CSS selectors and a built-in."),(0,r.kt)("h3",a({},{id:"text-selectors-text"}),"Text selectors (",(0,r.kt)("inlineCode",{parentName:"h3"},"text/"),")"),(0,r.kt)("p",null,'Text selectors will select "minimal" elements containing the given text, even within (open) shadow roots. Here, "minimum" means the deepest elements that contain a given text, but not their parents (which technically will also contain the given text).'),(0,r.kt)("h4",a({},{id:"example-1"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// Note we usually need type coercion since the type cannot be deduced, but for text selectors, `instanceof` checks may be better for runtime validation.\nconst element = await page.waitForSelector('text/My name is Jun');\n")),(0,r.kt)("h3",a({},{id:"xpath-selectors-xpath"}),"XPath selectors (",(0,r.kt)("inlineCode",{parentName:"h3"},"xpath/"),")"),(0,r.kt)("p",null,"XPath selectors will use the browser's native ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate"}),(0,r.kt)("inlineCode",{parentName:"a"},"Document.evaluate"))," to query for elements."),(0,r.kt)("h4",a({},{id:"example-2"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// There is not type deduction for XPaths.\nconst node = await page.waitForSelector('xpath/h2');\n")),(0,r.kt)("h3",a({},{id:"aria-selectors-aria"}),"ARIA selectors (",(0,r.kt)("inlineCode",{parentName:"h3"},"aria/"),")"),(0,r.kt)("p",null,"ARIA selectors can be used to find elements with a given ARIA label. These labels are computed using Chrome's internal representation."),(0,r.kt)("h4",a({},{id:"example-3"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const node = await page.waitForSelector('aria/Button name');\n")),(0,r.kt)("h3",a({},{id:"pierce-selectors-pierce"}),"Pierce selectors (",(0,r.kt)("inlineCode",{parentName:"h3"},"pierce/"),")"),(0,r.kt)("p",null,"Pierce selectors will run the ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelector*")," API on the document and all shadow roots to find an element."),(0,r.kt)("admonition",a({},{type:"danger"}),(0,r.kt)("p",{parentName:"admonition"},"Selectors will ",(0,r.kt)("strong",{parentName:"p"},"not")," ",(0,r.kt)("em",{parentName:"p"},"partially")," pierce through shadow roots. See the examples below.")),(0,r.kt)("h4",a({},{id:"example-4"}),"Example"),(0,r.kt)("p",null,"Suppose the HTML is"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-html"}),"<div>\n  <custom-element>\n    <div></div>\n  </custom-element>\n</div>\n")),(0,r.kt)("p",null,"Then"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// This will be two elements because of the outer and inner div.\nexpect((await page.$$('pierce/div')).length).toBe(2);\n\n// Partial piercing doesn't work.\nexpect((await page.$$('pierce/div div')).length).toBe(0);\n")),(0,r.kt)("h2",a({},{id:"custom-selectors"}),"Custom selectors"),(0,r.kt)("p",null,"Puppeteer provides users the ability to add their own query selectors to Puppeteer using ",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.registercustomqueryhandler"}),"Puppeteer.registerCustomQueryHandler"),". This is useful for creating custom selectors based on framework objects or other vendor-specific objects."))}m.isMDXComponent=!0}}]);