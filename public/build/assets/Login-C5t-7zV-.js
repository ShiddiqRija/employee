import{W as x,r as u,j as e,Y as p,a as f}from"./app-BsvG0l7S.js";import{G as h}from"./GuestLayout-DBXkROFx.js";import{C as j}from"./index-D_5WTDs-.js";import{L as n}from"./label-CzOLe_IT.js";import{I as i}from"./input-DcP8MAmH.js";import{B as g}from"./button-DmYYAY6m.js";function E({status:t,canResetPassword:w}){const{data:r,setData:a,post:l,processing:m,errors:o,reset:d}=x({email:"",password:"",remember:!1});u.useEffect(()=>()=>{d("password")},[]);const c=s=>{s.preventDefault(),l(route("login"))};return e.jsxs(h,{children:[e.jsx(p,{title:"Log in"}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs(j,{className:"p-6",children:[e.jsxs("div",{className:"flex flex-col space-y-2 text-center",children:[e.jsx("h1",{className:"text-2xl font-semibold tracking-tight",children:"Login"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Enter your email and password below ",e.jsx("br",{}),"to log into your account"]})]}),e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:r.email,autoComplete:"username",onChange:s=>a("email",s.target.value)}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:o.email})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"password",children:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:r.password,autoComplete:"current-password",onChange:s=>a("password",s.target.value)}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:o.password})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(f,{href:route("register"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Don't have an account?"}),e.jsx(g,{className:"ms-4",disabled:m,children:"Log in"})]})]})]})]})}export{E as default};
