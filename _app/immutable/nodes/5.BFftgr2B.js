import{s as _,c as y,n as E}from"../chunks/scheduler.BFJKazVz.js";import{S as d,i as M,k as o,s as S,l as a,f as T,m as p,g as w,n as f,o as c,d as C,p as g}from"../chunks/index.D8e8Tln1.js";import"../chunks/entry.LGw1kUyP.js";import"../chunks/Stack.svelte_svelte_type_style_lang.DR52BQGh.js";import"../chunks/Section.svelte_svelte_type_style_lang.C69TpQDn.js";import"../chunks/UserAvatarsList.svelte_svelte_type_style_lang.Dckes1uq.js";import{e as b}from"../chunks/RateMeeeting.svelte_svelte_type_style_lang.OEZP6QCU.js";import{M as l}from"../chunks/MeetingsList.DnfpYb1D.js";function h(i){let t,s,n,m;return t=new l({props:{title:"Быстрые",meetings:i[1]}}),n=new l({props:{title:"С параметрами",meetings:i[0]}}),{c(){o(t.$$.fragment),s=S(),o(n.$$.fragment)},l(e){a(t.$$.fragment,e),s=T(e),a(n.$$.fragment,e)},m(e,r){p(t,e,r),w(e,s,r),p(n,e,r),m=!0},p(e,[r]){const $={};r&2&&($.meetings=e[1]),t.$set($);const u={};r&1&&(u.meetings=e[0]),n.$set(u)},i(e){m||(f(t.$$.fragment,e),f(n.$$.fragment,e),m=!0)},o(e){c(t.$$.fragment,e),c(n.$$.fragment,e),m=!1},d(e){e&&C(s),g(t,e),g(n,e)}}}function x(i,t,s){let n,m,e;return y(i,b,r=>s(2,e=r)),i.$$.update=()=>{i.$$.dirty&4&&s(1,n=e.filter(r=>r.type!=="CUSTOM_MEETING")),i.$$.dirty&4&&s(0,m=e.filter(r=>r.type==="CUSTOM_MEETING"))},[m,n,e]}class G extends d{constructor(t){super(),M(this,t,x,h,_,{})}}function I(i){let t,s;return t=new G({}),{c(){o(t.$$.fragment)},l(n){a(t.$$.fragment,n)},m(n,m){p(t,n,m),s=!0},p:E,i(n){s||(f(t.$$.fragment,n),s=!0)},o(n){c(t.$$.fragment,n),s=!1},d(n){g(t,n)}}}class z extends d{constructor(t){super(),M(this,t,null,I,_,{})}}export{z as component};