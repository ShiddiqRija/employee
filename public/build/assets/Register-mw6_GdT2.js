import{W as c,r as x,j as e,Y as p,a as u}from"./app-BsvG0l7S.js";import{G as f}from"./GuestLayout-DBXkROFx.js";import{C as h}from"./index-D_5WTDs-.js";import{L as o}from"./label-CzOLe_IT.js";import{I as i}from"./input-DcP8MAmH.js";import{B as j}from"./button-DmYYAY6m.js";function _(){const{data:r,setData:a,post:n,processing:m,errors:t,reset:d}=c({name:"",email:"",password:"",password_confirmation:""});x.useEffect(()=>()=>{d("password","password_confirmation")},[]);const l=s=>{s.preventDefault(),n(route("register"))};return e.jsxs(f,{children:[e.jsx(p,{title:"Register"}),e.jsxs(h,{className:"p-6",children:[e.jsx("div",{className:"flex flex-col space-y-2 text-center",children:e.jsx("h1",{className:"text-2xl font-semibold tracking-tight",children:"Register"})}),e.jsxs("form",{onSubmit:l,children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"name",children:"Name"}),e.jsx(i,{id:"name",name:"name",value:r.name,autoComplete:"name",onChange:s=>a("name",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:t.name})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"email",children:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:r.email,onChange:s=>a("email",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:t.email})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"password",children:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:r.password,autoComplete:"new-password",onChange:s=>a("password",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:t.password})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"password_confirmation",children:"Confirm Password"}),e.jsx(i,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,autoComplete:"new-password",onChange:s=>a("password_confirmation",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:t.password_confirmation})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(u,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(j,{className:"ms-4",disabled:m,children:"Register"})]})]})]})]})}export{_ as default};
