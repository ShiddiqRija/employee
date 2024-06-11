import{W as V,j as e,Y as q}from"./app-BsvG0l7S.js";import{B as j}from"./button-BQcOGcVJ.js";import{A as E,M as z,a as B,T as D,U as R,b as T}from"./AuthenticatedLayout-CqpCqJg2.js";import{P as p,a as f,C as _,b as g,c as v,p as N,R as I,d as F,S as x,e as o,f as h,g as m,h as r,T as P}from"./textarea-Cqlj72tx.js";import{C as L,b as u,c as H,d as b,a as y,e as J}from"./index-D_5WTDs-.js";import{I as d}from"./input-DcP8MAmH.js";import{L as t}from"./label-CzOLe_IT.js";import{c as w}from"./button-DmYYAY6m.js";import{f as c}from"./format-CTnvzoPA.js";import"./createLucideIcon-CV_u2zzI.js";import"./Combination-Bb2ysm-k.js";import"./chevron-left-XYDFPMAB.js";function se({auth:C,employee:a}){const{data:l,setData:i,put:M,errors:n,processing:S}=V({first_name:a.first_name,last_name:a.last_name,email:a.email,phone:a.phone,place_of_birth:a.place_of_birth,birth_date:a.birth_date,gender:a.gender,marital_status:a.marital_status,religion:a.religion,ktp:a.identity_address.ktp,postal_code:a.identity_address.postal_code,citizen_id_address:a.identity_address.citizen_id_address,residential_address:a.identity_address.residential_address,employee_number:a.employment.employee_number,employment_status:a.employment.employment_status,join_date:a.employment.join_date,resign_date:a.employment.resign_date,branch:a.employment.branch.split(" ").join("-"),job_position:a.employment.job_position,job_level:a.employment.job_level}),k=s=>{s.preventDefault(),M(route("employee.update",{id:a.id}))};return e.jsxs(E,{user:C.user,children:[e.jsx(q,{title:"Edit Employee"}),e.jsxs(z,{children:[e.jsx(B,{children:e.jsxs("div",{className:"ml-auto flex items-center space-x-4",children:[e.jsx(D,{}),e.jsx(R,{user:C.user})]})}),e.jsx(T,{children:e.jsx("div",{children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx("form",{onSubmit:k,className:"space-y-6",children:e.jsxs(L,{children:[e.jsx(u,{children:e.jsx(H,{children:"Edit Employee"})}),e.jsxs(u,{children:[e.jsx("h4",{className:"text-xl font-semibold leading-none tracking-tight",children:"Personal Data"}),e.jsx(b,{children:"Fill all employee personal basic information data"})]}),e.jsxs(y,{children:[e.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"first_name",children:["First Name"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx(d,{id:"first_name",type:"text",value:l.first_name,onChange:s=>i("first_name",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.first_name})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"last_name",children:["Last Name"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx(d,{id:"last_name",type:"text",value:l.last_name,onChange:s=>i("last_name",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.last_name})]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row  items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"email",children:["Email"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx(d,{id:"email",type:"email",value:l.email,onChange:s=>i("email",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.email})]}),e.jsxs("div",{className:"w-full",children:[e.jsx(t,{htmlFor:"phone",children:"Phone"}),e.jsx(d,{id:"phone",type:"text",value:l.phone,onChange:s=>i("phone",s.target.value)}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.phone})]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row  items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"place_of_birth",children:["Place of birth"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx(d,{id:"place_of_birth",type:"text",value:l.place_of_birth,onChange:s=>i("place_of_birth",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.place_of_birth})]}),e.jsxs("div",{className:"w-full flex flex-col",children:[e.jsxs(t,{htmlFor:"phone",children:["Birthdate"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs(p,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(j,{variant:"outline",className:w("w-full h-[40px] justify-start text-left font-normal",!l.birth_date&&"text-muted-foreground"),children:[e.jsx(_,{className:"mr-2 h-4 w-4"}),l.birth_date?c(l.birth_date,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(g,{className:"w-auto p-0",children:e.jsx(v,{mode:"single",selected:N(l.birth_date,"yyyy-MM-dd",new Date),onSelect:s=>i("birth_date",c(s,"yyyy-MM-dd")),initialFocus:!0})})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.birth_date})]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row  items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"gender",children:["Gender"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs(I,{defaultValue:l.gender,onValueChange:s=>i("gender",s),className:"flex mt-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(F,{value:"male",id:"male"}),e.jsx(t,{htmlFor:"male",children:"Male"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(F,{value:"female",id:"female"}),e.jsx(t,{htmlFor:"female",children:"Female"})]})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.gender})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"marital_status",children:["Marital Status"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs(x,{defaultValue:l.marital_status,onValueChange:s=>i("marital_status",s),children:[e.jsx(o,{children:e.jsx(h,{placeholder:"Marital Status"})}),e.jsxs(m,{children:[e.jsx(r,{value:"single",children:"Single"}),e.jsx(r,{value:"married",children:"Married"}),e.jsx(r,{value:"widow",children:"Widow"}),e.jsx(r,{value:"widower",children:"Widower"})]})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.marital_status})]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row  items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"religion",children:["Religion"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs(x,{defaultValue:l.religion,onValueChange:s=>i("religion",s),children:[e.jsx(o,{children:e.jsx(h,{placeholder:"Religion"})}),e.jsxs(m,{children:[e.jsx(r,{value:"islam",children:"Islam"}),e.jsx(r,{value:"catholic",children:"Catholic"}),e.jsx(r,{value:"cristian",children:"Cristian"}),e.jsx(r,{value:"buddha",children:"Buddha"}),e.jsx(r,{value:"hindu",children:"Hindu"}),e.jsx(r,{value:"Confucius",children:"Confucius"}),e.jsx(r,{value:"other",children:"Other"})]})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.religion})]}),e.jsx("div",{className:"w-full",children:e.jsx("p",{className:"sr-only",children:"spacer"})})]})]}),e.jsxs(u,{children:[e.jsx("h4",{className:"text-xl font-semibold leading-none tracking-tight",children:"Identity & address"}),e.jsx(b,{children:"Employee identity address information"})]}),e.jsxs(y,{children:[e.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"ktp",children:["KTP"," "]}),e.jsx(d,{id:"ktp",type:"text",value:l.ktp,onChange:s=>i("ktp",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.ktp})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"postal_code",children:["Postal Code"," "]}),e.jsx(d,{id:"postal_code",type:"text",value:l.postal_code,onChange:s=>i("postal_code",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.postal_code})]})]}),e.jsx("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4",children:e.jsxs("div",{className:"w-full",children:[e.jsx(t,{htmlFor:"citizen_id_address",children:"Citizen id address"}),e.jsx(P,{id:"citizen_id_address",value:l.citizen_id_address===null?"":l.citizen_id_address,onChange:s=>i("citizen_id_address",s.target.value)}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.citizen_id_address})]})}),e.jsx("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4",children:e.jsxs("div",{className:"w-full",children:[e.jsx(t,{htmlFor:"residential_address",children:"Redential address"}),e.jsx(P,{id:"residential_address",value:l.residential_address===null?"":l.residential_address,onChange:s=>i("residential_address",s.target.value)}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.residential_address})]})})]}),e.jsxs(u,{children:[e.jsx("h4",{className:"text-xl font-semibold leading-none tracking-tight",children:"Employment data"}),e.jsx(b,{children:"Fill all employee data information related to company"})]}),e.jsxs(y,{children:[e.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"employee_number",children:["Employment Number"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx(d,{id:"employee_number",type:"text",value:l.employee_number,onChange:s=>i("employee_number",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.employee_number})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"employment_status",children:["Employment status"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs(x,{defaultValue:l.employment_status,onValueChange:s=>i("employment_status",s),required:!0,children:[e.jsx(o,{children:e.jsx(h,{placeholder:"Employment status"})}),e.jsxs(m,{children:[e.jsx(r,{value:"internship",children:"internship"}),e.jsx(r,{value:"probation",children:"Probation"}),e.jsx(r,{value:"contract",children:"Contract"}),e.jsx(r,{value:"permanent",children:"Permanent"})]})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.employment_status})]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"join_date",children:["Join date"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs(p,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(j,{variant:"outline",className:w("w-full h-[40px] justify-start text-left font-normal",!l.join_date&&"text-muted-foreground"),children:[e.jsx(_,{className:"mr-2 h-4 w-4"}),l.join_date?c(l.join_date,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(g,{className:"w-auto p-0",children:e.jsx(v,{mode:"single",selected:N(l.join_date,"yyyy-MM-dd",new Date),onSelect:s=>i("join_date",c(s,"yyyy-MM-dd")),initialFocus:!0,required:!0})})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.join_date})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"resign_date",children:["Resign date"," "]}),e.jsxs(p,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(j,{variant:"outline",className:w("w-full h-[40px] justify-start text-left font-normal",!l.resign_date&&"text-muted-foreground"),children:[e.jsx(_,{className:"mr-2 h-4 w-4"}),l.resign_date?c(l.resign_date,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(g,{className:"w-auto p-0",children:e.jsx(v,{mode:"single",selected:l.resign_date?N(l.resign_date,"yyyy-MM-dd",new Date):null,onSelect:s=>i("resign_date",c(s,"yyyy-MM-dd")),initialFocus:!0})})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.resign_date})]})]}),e.jsx("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4",children:e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"branch",children:["Branch"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs(x,{defaultValue:l.branch,onValueChange:s=>i("branch",s),required:!0,children:[e.jsx(o,{children:e.jsx(h,{placeholder:"Branch"})}),e.jsxs(m,{children:[e.jsx(r,{value:"head-office",children:"Head Office"}),e.jsx(r,{value:"branch-office",children:"Branch Office"})]})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.branch})]})}),e.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"job_position",children:["Job Position"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx(d,{id:"job_position",type:"text",value:l.job_position,onChange:s=>i("job_position",s.target.value),required:!0}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.job_position})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs(t,{htmlFor:"job_level",children:["Job level"," ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs(x,{defaultValue:l.job_level,onValueChange:s=>i("job_level",s),required:!0,children:[e.jsx(o,{children:e.jsx(h,{placeholder:"Job level"})}),e.jsxs(m,{children:[e.jsx(r,{value:"intern",children:"Intern"}),e.jsx(r,{value:"staff",children:"Staff"}),e.jsx(r,{value:"manager",children:"Manager"}),e.jsx(r,{value:"director",children:"Director"})]})]}),e.jsx("p",{className:"mt-2 text-xs text-red-800",children:n.job_level})]})]})]}),e.jsx(J,{children:e.jsx(j,{disabled:S,children:"Update"})})]})})})})})]})]})}export{se as default};