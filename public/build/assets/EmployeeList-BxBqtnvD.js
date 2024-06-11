import{r,j as e,a as o}from"./app-BsvG0l7S.js";import{B as c,a as j,C as p}from"./button-BQcOGcVJ.js";import{c as t}from"./button-DmYYAY6m.js";import{C as f}from"./chevron-left-XYDFPMAB.js";import{c as b}from"./createLucideIcon-CV_u2zzI.js";/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=b("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]),u=r.forwardRef(({className:s,...a},l)=>e.jsx("ul",{ref:l,className:t("flex flex-row items-center gap-1",s),...a}));u.displayName="PaginationContent";const v=r.forwardRef(({className:s,...a},l)=>e.jsx("li",{ref:l,className:t("",s),...a}));v.displayName="PaginationItem";const x=r.forwardRef(({className:s,...a},l)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:l,className:t("w-full caption-bottom text-sm",s),...a})}));x.displayName="Table";const m=r.forwardRef(({className:s,...a},l)=>e.jsx("thead",{ref:l,className:t("[&_tr]:border-b",s),...a}));m.displayName="TableHeader";const h=r.forwardRef(({className:s,...a},l)=>e.jsx("tbody",{ref:l,className:t("[&_tr:last-child]:border-0",s),...a}));h.displayName="TableBody";const w=r.forwardRef(({className:s,...a},l)=>e.jsx("tfoot",{ref:l,className:t("border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50",s),...a}));w.displayName="TableFooter";const d=r.forwardRef(({className:s,...a},l)=>e.jsx("tr",{ref:l,className:t("border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",s),...a}));d.displayName="TableRow";const n=r.forwardRef(({className:s,...a},l)=>e.jsx("th",{ref:l,className:t("h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 dark:text-slate-400",s),...a}));n.displayName="TableHead";const i=r.forwardRef(({className:s,...a},l)=>e.jsx("td",{ref:l,className:t("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...a}));i.displayName="TableCell";const y=r.forwardRef(({className:s,...a},l)=>e.jsx("caption",{ref:l,className:t("mt-4 text-sm text-slate-500 dark:text-slate-400",s),...a}));y.displayName="TableCaption";function E({data:s}){const a=s.data.length>0?s.data.map((l,g)=>e.jsxs(d,{children:[e.jsxs(i,{children:[l.name,e.jsx("p",{className:"text-xs",children:l.email})]}),e.jsx(i,{children:l.employee_number}),e.jsx(i,{className:"capitalize",children:l.branch}),e.jsx(i,{children:l.job_position}),e.jsx(i,{className:"capitalize",children:l.job_level}),e.jsx(i,{className:"capitalize",children:l.employment_status}),e.jsx(i,{children:e.jsx(o,{href:route("employee.show",{id:l.id}),children:e.jsx(c,{variant:"ghost",children:"VIEW"})})})]},l.id)):e.jsx(d,{children:e.jsx(i,{colSpan:7,className:"text-center",children:"No employees listed."})});return e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(n,{children:"Employee Name"}),e.jsx(n,{children:"Employee ID"}),e.jsx(n,{children:"Branch"}),e.jsx(n,{children:"Job Position"}),e.jsx(n,{children:"Job Level"}),e.jsx(n,{children:"Employment Status"}),e.jsx(n,{})]})}),e.jsx(h,{children:a})]}),e.jsxs("div",{className:"flex items-center justify-between mt-2",children:[e.jsxs("p",{className:"text-xs",children:["Showing ",s.meta.from," to ",s.meta.to," of"," ",s.meta.total," entries"]}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(o,{href:s.links.first,preserveScroll:!0,children:e.jsx(c,{disabled:s.links.prev===null,variant:"outline",className:"h-8 w-8 p-0",children:e.jsx(j,{size:18})})}),e.jsx(o,{href:s.links.prev,preserveScroll:!0,children:e.jsx(c,{disabled:s.links.prev===null,variant:"outline",className:"h-8 w-8 p-0",children:e.jsx(f,{size:18})})}),e.jsx(o,{href:s.links.next,preserveScroll:!0,children:e.jsx(c,{disabled:s.links.next===null,variant:"outline",className:"h-8 w-8 p-0",children:e.jsx(p,{size:18})})}),e.jsx(o,{href:s.links.last,preserveScroll:!0,children:e.jsx(c,{disabled:s.links.next===null,variant:"outline",className:"h-8 w-8 p-0",children:e.jsx(N,{size:18})})})]})})]})]})}export{E as default};
