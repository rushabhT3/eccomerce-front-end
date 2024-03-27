(()=>{var e={};e.id=271,e.ids=[271],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},35:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>l});var s=t(482),n=t(9108),a=t(2563),o=t.n(a),i=t(8300),u={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>i[e]);t.d(r,u);let l=["",{children:["auth",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8768)),"/workspaces/eccomerce-front-end/src/app/auth/signup/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1965)),"/workspaces/eccomerce-front-end/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/workspaces/eccomerce-front-end/src/app/auth/signup/page.js"],c="/auth/signup/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/auth/signup/page",pathname:"/auth/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},1503:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},2858:(e,r,t)=>{Promise.resolve().then(t.bind(t,3682))},8473:()=>{},8428:(e,r,t)=>{"use strict";var s=t(4767);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}})},3682:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var s=t(5344),n=t(3729),a=t(6506),o=t(3608),i=t(8428);function u(){let e=(0,i.useRouter)(),[r,t]=(0,n.useState)(""),[u,l]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[p,m]=(0,n.useState)(!1),x=process.env.NEXT_PUBLIC_BACKEND_URL,h=async t=>{t.preventDefault();try{let t=await o.Z.post(`${x}/signup`,{name:r,email:u,password:d});alert(t.data.message),201===t.status&&e.push(`/auth/verify?email=${u}`)}catch(e){console.error(e),alert(e.response?.data?.message||"An error occurred during signup.")}};return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[s.jsx("div",{children:s.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign up for an account"})}),(0,s.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:h,children:[s.jsx("input",{type:"hidden",name:"remember",value:"true"}),(0,s.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"name",className:"sr-only",children:"Name"}),s.jsx("input",{id:"name",name:"name",type:"text",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Name",value:r,onChange:e=>t(e.target.value)})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),s.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:u,onChange:e=>l(e.target.value)})]}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),s.jsx("input",{id:"password",name:"password",type:p?"text":"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",value:d,onChange:e=>c(e.target.value)}),s.jsx("div",{onClick:()=>m(!p),className:"absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-10",children:p?"\uD83D\uDE48":"\uD83D\uDC41️"})]})]}),s.jsx("div",{children:s.jsx("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sign up"})})]}),(0,s.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Already have an account?"," ",s.jsx(a.default,{href:"/auth/login",className:"font-medium text-indigo-600 hover:underline",children:"Login"})]})]})})}},8768:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>n,default:()=>o});let s=(0,t(6843).createProxy)(String.raw`/workspaces/eccomerce-front-end/src/app/auth/signup/page.js`),{__esModule:n,$$typeof:a}=s,o=s.default},1965:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>o});var s=t(5036),n=t(1541),a=t.n(n);t(5023),function(){var e=Error("Cannot find module '../components/Banner'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '../components/Footer'");throw e.code="MODULE_NOT_FOUND",e}();let o={title:"Create Next App",description:"Generated by create next app"};function i({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:a().className,children:[s.jsx(Object(function(){var e=Error("Cannot find module '../components/Banner'");throw e.code="MODULE_NOT_FOUND",e}()),{}),e,s.jsx(Object(function(){var e=Error("Cannot find module '../components/Footer'");throw e.code="MODULE_NOT_FOUND",e}()),{})]})})}},3881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,852,337,608,506],()=>t(35));module.exports=s})();