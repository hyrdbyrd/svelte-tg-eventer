import{s as M,c as F,o as I,a as S,h as U,u as j,i as w,j as E}from"../chunks/scheduler.B2bB6zJV.js";import{S as B,i as q,e as g,c as _,a as h,d as u,x as v,g as z,h as A,n as c,o as m,r as P,v as $}from"../chunks/index.Dd9f2Vrx.js";import{h as C,u as O}from"../chunks/Stack.svelte_svelte_type_style_lang.q35J2cnn.js";import{s as T,g as D,h as L}from"../chunks/index.BKnKTQuf.js";import{g as N}from"../chunks/index.BkPKkSeD.js";import{p as R}from"../chunks/stores.DOmZsd_K.js";import{g as V,b as x}from"../chunks/UserAvatarsList.svelte_svelte_type_style_lang.CgKY2wda.js";/* empty css                                                      */import{g as G,d as H,f as J,h as K}from"../chunks/stores.B-Zg5BJv.js";const Q=!1,W=!0,X="always",me=Object.freeze(Object.defineProperty({__proto__:null,prerender:W,ssr:Q,trailingSlash:X},Symbol.toStringTag,{value:"Module"}));function Y(t){return p.add(t),Z(()=>{p.delete(t)})}function Z(t){const s=()=>t();return s.unsubscribe=s,s}function k(t){return b(t.node)}function b(t){const{meta:s,id:r}=t,n=(i=>i.config?i.config.loc:i.loc)(s),{sid:e,name:a,op:o}=s;return{meta:s,id:r,sid:e,name:a,kind:o,loc:n,derived:s.derived}}function f(t){if(!t)return;const{parent:s,meta:r,id:n}=t,e=f(s)||void 0;if(r.type==="factory"){const{sid:a,name:o,loc:i,method:l}=r;return{type:"factory",id:n,region:e,meta:r,sid:a,name:o,loc:i,method:l}}return{type:"region",id:n,region:e,meta:r}}const ee=new Set;O((t,s)=>{const{scope:r}=t,n=k(t);let e;ee.forEach(a=>{a.scope!==r&&(a.scope||r)||(a.trace&&!e&&(e=(o=>{const i=[];let l=o.parent;for(;l;){const d=k(l);i.push({type:"update",value:l.value,stack:l.meta||{},meta:d.meta,id:d.id,sid:d.sid,name:d.name,kind:d.kind,loc:d.loc,derived:d.derived}),l=l.parent}return i})(t)),a.fn({type:s.fail?"error":"update",value:t.value,error:s.fail?s.failReason:void 0,stack:t.meta||{},trace:a.trace?e:[],meta:n.meta,id:n.id,sid:n.sid,name:n.name,kind:n.kind,loc:n.loc,derived:n.derived}))})});const p=new Set;C((t,s)=>{let r;r=t==="region"?f(s):((n,e)=>{const a=b(n);return{type:"unit",region:f(e),meta:a.meta,id:a.id,sid:a.sid,name:a.name,kind:a.kind,loc:a.loc,derived:a.derived}})(t,s),r&&p.forEach(n=>{n.fn(r)})});Y({fn:t=>{t.derived||(t.kind==="store"&&t.meta.named,t.kind==="event"&&t.meta.named,t.kind==="effect"&&t.meta.named)}});function y(t){let s;const r=t[3].default,n=U(r,t,t[2],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,a){n&&n.m(e,a),s=!0},p(e,a){n&&n.p&&(!s||a&4)&&j(n,r,e,e[2],s?E(r,e[2],a,null):w(e[2]),null)},i(e){s||(c(n,e),s=!0)},o(e){m(n,e),s=!1},d(e){n&&n.d(e)}}}function te(t){let s,r,n,e=t[0]&&y(t);return{c(){s=g("div"),r=g("main"),e&&e.c(),this.h()},l(a){s=_(a,"DIV",{class:!0});var o=h(s);r=_(o,"MAIN",{class:!0});var i=h(r);e&&e.l(i),i.forEach(u),o.forEach(u),this.h()},h(){v(r,"class","svelte-jq8zrn"),v(s,"class","app svelte-jq8zrn")},m(a,o){z(a,s,o),A(s,r),e&&e.m(r,null),n=!0},p(a,[o]){a[0]?e?(e.p(a,o),o&1&&c(e,1)):(e=y(a),e.c(),c(e,1),e.m(r,null)):e&&($(),m(e,1,1,()=>{e=null}),P())},i(a){n||(c(e),n=!0)},o(a){m(e),n=!1},d(a){a&&u(s),e&&e.d()}}}function ne(t,s,r){let n;F(t,R,d=>r(1,n=d));let{$$slots:e={},$$scope:a}=s,o=!1;I(()=>{D().ready(),r(0,o=!0)});let i=n.url.searchParams.get("userId"),l=n.url.searchParams.get("eventId");return V(l),x({eventId:l,userId:i}),G(l),H({eventId:l,userId:i}),J({eventId:l,userId:i}),S(()=>K.watch(d=>N("meeting",{meetingId:d.id}))),t.$$set=d=>{"$$scope"in d&&r(2,a=d.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&(n.url.pathname==="/"?L():T())},[o,n,a,e]}class fe extends B{constructor(s){super(),q(this,s,ne,te,M,{})}}export{fe as component,me as universal};
