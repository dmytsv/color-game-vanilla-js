!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const r="hide",n="negative",l="",c="Please enter number of rows",s="Please use whole positive number",u="STATE_CHANGE_EVENT";var i=()=>{const e=document.querySelector("#root");let{colors:t,fields:o,gridSize:r}=g();const n=document.createElement("div");n.classList.add("field-container"),o.forEach(({color:e,row:o,col:l})=>{let c=(({gridSize:e,color:t,row:o,col:r})=>{const n=Math.floor(100/e),l=document.createElement("div");return l.style.cssText=`\n  flex: 1 0 ${n}%; \n  background: ${t};\n  box-sizing: border-box;\n  border: 1px solid white;\n  `,l.setAttribute("data-row",o),l.setAttribute("data-col",r),l.addEventListener("click",d),l})({gridSize:r,color:t[e],row:o,col:l});n.appendChild(c)}),e.innerHTML="",e.appendChild(n)};const a=new Event(u),d=({target:e})=>{let t=+e.getAttribute("data-row"),o=+e.getAttribute("data-col"),{fields:r,numberOfColors:n}=g();r.length&&(r=r.map(e=>({...e,color:e.row===t||e.col===o?++e.color%n:e.color})),v({fields:r}))},f=document.querySelector("#grid"),m=e=>Math.floor(Math.random()*e),b=()=>{let e=[...document.querySelectorAll('.colors > input[type="color"]')],{numberOfColors:t,defaultColors:o}=g(),r=e.map(({value:e})=>e);r=r.length?r:o,v({colors:r,numberOfColors:r.length})};let p={gridSize:0,numberOfColors:3,colors:[],defaultColors:["#fa8072","#0080ff","#50c878"],fields:[],input:"",message:{text:"",baseClass:["ui","message"],customClass:["hide"]}};const g=()=>({...p}),v=e=>{p={...p,...e},window.dispatchEvent(a)},y=document.querySelector("#start"),S=document.querySelector("#color"),h=document.querySelector("#up"),w=document.querySelector("#down");y.addEventListener("click",e=>{let t=+f.value,{message:o,numberOfColors:u}=g(),i="",a="";t?t<0||t%1?(i=s,a=[n],t=null):(i=l,a=[r]):(i=c,a=[n],t=null);const d=[];for(let e=0;e<t;e++)for(let o=0;o<t;o++)d.push({row:e,col:o,color:m(u)});b(),t=t||g().gridSize,o={...o,text:i,customClass:a},v({message:o,gridSize:t,fields:d})}),S.addEventListener("click",e=>{const t=()=>(e=>{let t=e.toString(16);return 1===t.length?"0"+t:t})(Math.floor(257*Math.random()));let o=document.querySelector("#color"),r=document.querySelector(".colors"),n=document.createElement("input");n.setAttribute("type","color"),n.value=`#${t()}${t()}${t()}`,r.insertBefore(n,o),b()}),h.addEventListener("click",e=>{let{value:t}=f;f.value=t&&+t==+t&&+t>1?+t+1:1}),w.addEventListener("click",e=>{let{value:t}=f;f.value=t&&+t==+t&&+t>1?+t-1:1}),window.addEventListener(u,e=>{(()=>{const e=document.querySelector("#message");let{message:{text:t,baseClass:o,customClass:r}}=g();e.classList=[...o,...r].join(" "),e.textContent=t})(),i()})}]);