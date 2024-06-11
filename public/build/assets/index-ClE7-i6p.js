import{_ as l,$ as D,a as I}from"./button-DmYYAY6m.js";import{r as t}from"./app-BsvG0l7S.js";import{$ as M,d as m,h as N,c as u,f as F,g as y,i as T,a as w,b as _,R as k,e as L,l as S}from"./Combination-Bb2ysm-k.js";import{$ as p}from"./index-D_5WTDs-.js";const v="Dialog",[R,ae]=M(v),[j,i]=R(v),G=e=>{const{__scopeDialog:a,children:n,open:r,defaultOpen:c,onOpenChange:o,modal:s=!0}=e,d=t.useRef(null),$=t.useRef(null),[b=!1,g]=w({prop:r,defaultProp:c,onChange:o});return t.createElement(j,{scope:a,triggerRef:d,contentRef:$,contentId:_(),titleId:_(),descriptionId:_(),open:b,onOpenChange:g,onOpenToggle:t.useCallback(()=>g(A=>!A),[g]),modal:s},n)},W="DialogTrigger",K=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(W,n),o=D(a,c.triggerRef);return t.createElement(p.button,l({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":E(c.open)},r,{ref:o,onClick:u(e.onClick,c.onOpenToggle)}))}),C="DialogPortal",[U,O]=R(C,{forceMount:void 0}),V=e=>{const{__scopeDialog:a,forceMount:n,children:r,container:c}=e,o=i(C,a);return t.createElement(U,{scope:a,forceMount:n},t.Children.map(r,s=>t.createElement(m,{present:n||o.open},t.createElement(L,{asChild:!0,container:c},s))))},x="DialogOverlay",Y=t.forwardRef((e,a)=>{const n=O(x,e.__scopeDialog),{forceMount:r=n.forceMount,...c}=e,o=i(x,e.__scopeDialog);return o.modal?t.createElement(m,{present:r||o.open},t.createElement(Z,l({},c,{ref:a}))):null}),Z=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(x,n);return t.createElement(k,{as:I,allowPinchZoom:!0,shards:[c.contentRef]},t.createElement(p.div,l({"data-state":E(c.open)},r,{ref:a,style:{pointerEvents:"auto",...r.style}})))}),f="DialogContent",q=t.forwardRef((e,a)=>{const n=O(f,e.__scopeDialog),{forceMount:r=n.forceMount,...c}=e,o=i(f,e.__scopeDialog);return t.createElement(m,{present:r||o.open},o.modal?t.createElement(z,l({},c,{ref:a})):t.createElement(B,l({},c,{ref:a})))}),z=t.forwardRef((e,a)=>{const n=i(f,e.__scopeDialog),r=t.useRef(null),c=D(a,n.contentRef,r);return t.useEffect(()=>{const o=r.current;if(o)return N(o)},[]),t.createElement(h,l({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:u(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:u(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,d=s.button===0&&s.ctrlKey===!0;(s.button===2||d)&&o.preventDefault()}),onFocusOutside:u(e.onFocusOutside,o=>o.preventDefault())}))}),B=t.forwardRef((e,a)=>{const n=i(f,e.__scopeDialog),r=t.useRef(!1),c=t.useRef(!1);return t.createElement(h,l({},e,{ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,o),!o.defaultPrevented){var d;r.current||(d=n.triggerRef.current)===null||d===void 0||d.focus(),o.preventDefault()}r.current=!1,c.current=!1},onInteractOutside:o=>{var s,d;(s=e.onInteractOutside)===null||s===void 0||s.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const $=o.target;((d=n.triggerRef.current)===null||d===void 0?void 0:d.contains($))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&c.current&&o.preventDefault()}}))}),h=t.forwardRef((e,a)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:c,onCloseAutoFocus:o,...s}=e,d=i(f,n),$=t.useRef(null),b=D(a,$);return F(),t.createElement(t.Fragment,null,t.createElement(y,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:c,onUnmountAutoFocus:o},t.createElement(T,l({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":E(d.open)},s,{ref:b,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),P="DialogTitle",H=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(P,n);return t.createElement(p.h2,l({id:c.titleId},r,{ref:a}))}),J="DialogDescription",Q=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(J,n);return t.createElement(p.p,l({id:c.descriptionId},r,{ref:a}))}),X="DialogClose",ee=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(X,n);return t.createElement(p.button,l({type:"button"},r,{ref:a,onClick:u(e.onClick,()=>c.onOpenChange(!1))}))});function E(e){return e?"open":"closed"}const te="DialogTitleWarning",[se,de]=S(te,{contentName:f,titleName:P,docsSlug:"dialog"}),le=G,ie=K,$e=V,fe=Y,ue=q,pe=H,be=Q,ge=ee;export{ae as $,le as a,ie as b,fe as c,se as d,ue as e,pe as f,be as g,ge as h,$e as i};
