import{s as E,k as I,o as d,u as N,l as P,m as k,e as _,h,j as z}from"./scheduler.BAuVadtp.js";import{S as G,i as T,e as q,c as y,a as C,d as b,A as j,E as A,z as c,g as D,n as L,o as V}from"./index.BX_zT-d1.js";import{c as S}from"./Stack.svelte_svelte_type_style_lang.DhQYKH1l.js";function B(i){let e,a,n;const f=i[5].default,s=I(f,i,i[4],null);return{c(){e=q("span"),s&&s.c(),this.h()},l(l){e=y(l,"SPAN",{class:!0});var t=C(e);s&&s.l(t),t.forEach(b),this.h()},h(){j(e,"class",a=d(S(i[1],i[3].class))+" svelte-17g551l"),A(e,"bold",i[0]),c(e,"text-align",i[2])},m(l,t){D(l,e,t),s&&s.m(e,null),n=!0},p(l,[t]){s&&s.p&&(!n||t&16)&&N(s,f,l,l[4],n?k(f,l[4],t,null):P(l[4]),null),(!n||t&10&&a!==(a=d(S(l[1],l[3].class))+" svelte-17g551l"))&&j(e,"class",a),(!n||t&11)&&A(e,"bold",l[0]),t&4&&c(e,"text-align",l[2])},i(l){n||(L(s,l),n=!0)},o(l){V(s,l),n=!1},d(l){l&&b(e),s&&s.d(l)}}}function F(i,e,a){const n=["bold","role","align"];let f=_(e,n),{$$slots:s={},$$scope:l}=e,{bold:t=!1}=e,{role:r="main"}=e,{align:m=void 0}=e;return i.$$set=u=>{e=h(h({},e),z(u)),a(3,f=_(e,n)),"bold"in u&&a(0,t=u.bold),"role"in u&&a(1,r=u.role),"align"in u&&a(2,m=u.align),"$$scope"in u&&a(4,l=u.$$scope)},[t,r,m,f,l,s]}class Q extends G{constructor(e){super(),T(this,e,F,B,E,{bold:0,role:1,align:2})}}const g={end:"flex-end",center:"center",start:"flex-start",between:"space-between"};function H(i){let e,a,n;const f=i[7].default,s=I(f,i,i[6],null);return{c(){e=q("div"),s&&s.c(),this.h()},l(l){e=y(l,"DIV",{class:!0});var t=C(e);s&&s.l(t),t.forEach(b),this.h()},h(){j(e,"class",a=d(S(i[3],i[5].class))+" svelte-bjn9m0"),c(e,"gap",`${i[4]}px`),c(e,"width",i[0]?"100%":""),c(e,"align-items",g[i[1]]),c(e,"justify-content",g[i[2]])},m(l,t){D(l,e,t),s&&s.m(e,null),n=!0},p(l,[t]){s&&s.p&&(!n||t&64)&&N(s,f,l,l[6],n?k(f,l[6],t,null):P(l[6]),null),(!n||t&40&&a!==(a=d(S(l[3],l[5].class))+" svelte-bjn9m0"))&&j(e,"class",a),t&16&&c(e,"gap",`${l[4]}px`),t&1&&c(e,"width",l[0]?"100%":""),t&2&&c(e,"align-items",g[l[1]]),t&4&&c(e,"justify-content",g[l[2]])},i(l){n||(L(s,l),n=!0)},o(l){V(s,l),n=!1},d(l){l&&b(e),s&&s.d(l)}}}function J(i,e,a){const n=["wide","align","justify","direction","gap"];let f=_(e,n),{$$slots:s={},$$scope:l}=e,{wide:t=!1}=e,{align:r="start"}=e,{justify:m="start"}=e,{direction:u="horizontal"}=e,{gap:v="0"}=e;return i.$$set=o=>{e=h(h({},e),z(o)),a(5,f=_(e,n)),"wide"in o&&a(0,t=o.wide),"align"in o&&a(1,r=o.align),"justify"in o&&a(2,m=o.justify),"direction"in o&&a(3,u=o.direction),"gap"in o&&a(4,v=o.gap),"$$scope"in o&&a(6,l=o.$$scope)},[t,r,m,u,v,f,l,s]}class R extends G{constructor(e){super(),T(this,e,J,H,E,{wide:0,align:1,justify:2,direction:3,gap:4})}}export{R as S,Q as T};