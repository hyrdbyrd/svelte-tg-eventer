import{s as C}from"./scheduler.BFJKazVz.js";import{S as D,i as O,w as k,g as m,n as c,u as p,o as f,v as d,d as h,e as v,s as q,c as g,a as b,f as L,x as $,h as N,y as j,k as z,l as w,z as B,m as T,p as V}from"./index.D8e8Tln1.js";import{e as R}from"./Avatar.DZRehTr_.js";import{U as F,a as G}from"./UserAvatarsStub.C2u1EDki.js";import"./UserAvatarsList.svelte_svelte_type_style_lang.Dckes1uq.js";function E(i,r,a){const s=i.slice();return s[2]=r[a],s[4]=a,s}function U(i){let r,a,s,e=R(i[0].slice(0,3)),t=[];for(let l=0;l<e.length;l+=1)t[l]=S(E(i,e,l));const _=l=>f(t[l],1,1,()=>{t[l]=null});let o=i[1]&&y(i);return{c(){r=v("user-avatars");for(let l=0;l<t.length;l+=1)t[l].c();a=q(),o&&o.c(),this.h()},l(l){r=g(l,"USER-AVATARS",{class:!0});var u=b(r);for(let n=0;n<t.length;n+=1)t[n].l(u);a=L(u),o&&o.l(u),u.forEach(h),this.h()},h(){$(r,"class","svelte-2v8hfd")},m(l,u){m(l,r,u);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(r,null);N(r,a),o&&o.m(r,null),s=!0},p(l,u){if(u&1){e=R(l[0].slice(0,3));let n;for(n=0;n<e.length;n+=1){const A=E(l,e,n);t[n]?(t[n].p(A,u),c(t[n],1)):(t[n]=S(A),t[n].c(),c(t[n],1),t[n].m(r,a))}for(p(),n=e.length;n<t.length;n+=1)_(n);d()}l[1]?o?(o.p(l,u),u&2&&c(o,1)):(o=y(l),o.c(),c(o,1),o.m(r,null)):o&&(p(),f(o,1,1,()=>{o=null}),d())},i(l){if(!s){for(let u=0;u<e.length;u+=1)c(t[u]);c(o),s=!0}},o(l){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)f(t[u]);f(o),s=!1},d(l){l&&h(r),j(t,l),o&&o.d()}}}function S(i){let r,a,s;return a=new F({props:{user:i[2],size:110}}),{c(){r=v("user-avatar-border"),z(a.$$.fragment),this.h()},l(e){r=g(e,"USER-AVATAR-BORDER",{class:!0});var t=b(r);w(a.$$.fragment,t),t.forEach(h),this.h()},h(){$(r,"class","svelte-2v8hfd"),B(r,"z-index",i[4]+1)},m(e,t){m(e,r,t),T(a,r,null),s=!0},p(e,t){const _={};t&1&&(_.user=e[2]),a.$set(_)},i(e){s||(c(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){e&&h(r),V(a)}}}function y(i){let r,a,s;return a=new G({props:{color:"main",count:i[1],size:110}}),{c(){r=v("user-avatar-border"),z(a.$$.fragment),this.h()},l(e){r=g(e,"USER-AVATAR-BORDER",{class:!0});var t=b(r);w(a.$$.fragment,t),t.forEach(h),this.h()},h(){$(r,"class","svelte-2v8hfd"),B(r,"z-index",1e3)},m(e,t){m(e,r,t),T(a,r,null),s=!0},p(e,t){const _={};t&2&&(_.count=e[1]),a.$set(_)},i(e){s||(c(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){e&&h(r),V(a)}}}function H(i){let r,a,s=i[0].length&&U(i);return{c(){s&&s.c(),r=k()},l(e){s&&s.l(e),r=k()},m(e,t){s&&s.m(e,t),m(e,r,t),a=!0},p(e,[t]){e[0].length?s?(s.p(e,t),t&1&&c(s,1)):(s=U(e),s.c(),c(s,1),s.m(r.parentNode,r)):s&&(p(),f(s,1,1,()=>{s=null}),d())},i(e){a||(c(s),a=!0)},o(e){f(s),a=!1},d(e){e&&h(r),s&&s.d(e)}}}function I(i,r,a){let s,{users:e=[]}=r;return i.$$set=t=>{"users"in t&&a(0,e=t.users)},i.$$.update=()=>{i.$$.dirty&1&&a(1,s=e.length-3<0?0:e.length-3)},[e,s]}class W extends D{constructor(r){super(),O(this,r,I,H,C,{users:0})}}export{W as U};