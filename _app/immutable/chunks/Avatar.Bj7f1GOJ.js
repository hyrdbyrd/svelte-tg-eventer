import{o as v,n as p,S as L,i as O,G as C,H as k,a as y,d as w,A as c,g as P,h as z,w as S,u as Q,v as R,e as W,c as X,C as D,z as E,q as F,k as Y,l as x,m as $,p as ee}from"./index.xbAWuAcx.js";import{r as U,s as V,n as q,q as te,x as J}from"./scheduler.CxJaiRdw.js";import{g as le}from"./helpers.CyXyzbaH.js";import"./entry.DAWFn0C_.js";import"./UserAvatarsList.svelte_svelte_type_style_lang.CSczB_Ul.js";function _e(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ge(n,e){v(n,1,1,()=>{e.delete(n.key)})}function we(n,e,l,t,s,i,r,o,a,h,d,Z){let m=n.length,f=i.length,b=m;const B={};for(;b--;)B[n[b].key]=b;const M=[],G=new Map,I=new Map,H=[];for(b=f;b--;){const u=Z(s,i,b),_=l(u);let g=r.get(_);g?t&&H.push(()=>g.p(u,e)):(g=h(_,u),g.c()),G.set(_,M[b]=g),_ in B&&I.set(_,Math.abs(b-B[_]))}const T=new Set,j=new Set;function N(u){p(u,1),u.m(o,d),r.set(u.key,u),d=u.first,f--}for(;m&&f;){const u=M[f-1],_=n[m-1],g=u.key,A=_.key;u===_?(d=u.first,m--,f--):G.has(A)?!r.has(g)||T.has(g)?N(u):j.has(A)?m--:I.get(g)>I.get(A)?(j.add(g),N(u)):(T.add(A),m--):(a(_,r),m--)}for(;m--;){const u=n[m];G.has(u.key)||a(u,r)}for(;f;)N(M[f-1]);return U(H),M}function ie(n){let e,l,t,s,i;return{c(){e=C("svg"),l=C("circle"),t=C("path"),s=C("circle"),i=C("path"),this.h()},l(r){e=k(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var o=y(e);l=k(o,"circle",{r:!0,cx:!0,cy:!0,fill:!0}),y(l).forEach(w),t=k(o,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0}),y(t).forEach(w),s=k(o,"circle",{r:!0,cx:!0,cy:!0,fill:!0}),y(s).forEach(w),i=k(o,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0}),y(i).forEach(w),o.forEach(w),this.h()},h(){c(l,"r","53.3652"),c(l,"cx","58.6686"),c(l,"cy","59.3315"),c(l,"fill",n[2].themeParams.hint_color),c(t,"fill-rule","evenodd"),c(t,"clip-rule","evenodd"),c(t,"fill",n[2].themeParams.bg_color),c(t,"d","M15.1072 98.204C17.0166 86.6421 35.0415 77.5778 56.9953 77.5778C80.2219 77.5778 99.0507 87.7234 99.0507 100.239C99.0507 100.783 99.015 101.324 98.9449 101.859C88.4182 111.622 74.3225 117.592 58.8326 117.592C41.4938 117.592 25.9019 110.112 15.1072 98.204Z"),c(s,"r","19.1903"),c(s,"cx","59.2042"),c(s,"cy","43.6886"),c(s,"fill",n[2].themeParams.bg_color),c(i,"fill-rule","evenodd"),c(i,"clip-rule","evenodd"),c(i,"fill",n[2].themeParams.bg_color),c(i,"d","M59 118C91.5848 118 118 91.5848 118 59C118 26.4152 91.5848 0 59 0C26.4152 0 0 26.4152 0 59C0 91.5848 26.4152 118 59 118ZM58.6686 112.697C88.1414 112.697 112.034 88.8042 112.034 59.3315C112.034 29.8587 88.1414 5.96628 58.6686 5.96628C29.1958 5.96628 5.30344 29.8587 5.30344 59.3315C5.30344 88.8042 29.1958 112.697 58.6686 112.697Z"),c(e,"width",n[0]),c(e,"height",n[1]),c(e,"viewBox","0 0 118 118"),c(e,"fill","none"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(r,o){P(r,e,o),z(e,l),z(e,t),z(e,s),z(e,i)},p(r,[o]){o&1&&c(e,"width",r[0]),o&2&&c(e,"height",r[1])},i:q,o:q,d(r){r&&w(e)}}}function ne(n,e,l){const t=le();let{width:s=110}=e,{height:i=110}=e;return n.$$set=r=>{"width"in r&&l(0,s=r.width),"height"in r&&l(1,i=r.height)},[s,i,t]}class se extends L{constructor(e){super(),O(this,e,ne,ie,V,{width:0,height:1})}}function K(n){let e,l,t,s;const i=[ce,re],r=[];function o(a,h){return a[6]||!a[1]?0:1}return e=o(n),l=r[e]=i[e](n),{c(){l.c(),t=S()},l(a){l.l(a),t=S()},m(a,h){r[e].m(a,h),P(a,t,h),s=!0},p(a,h){let d=e;e=o(a),e===d?r[e].p(a,h):(Q(),v(r[d],1,1,()=>{r[d]=null}),R(),l=r[e],l?l.p(a,h):(l=r[e]=i[e](a),l.c()),p(l,1),l.m(t.parentNode,t))},i(a){s||(p(l),s=!0)},o(a){v(l),s=!1},d(a){a&&w(t),r[e].d(a)}}}function re(n){let e,l,t,s;return{c(){e=W("img"),this.h()},l(i){e=X(i,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){c(e,"alt",n[0]),J(e.src,l=n[1])||c(e,"src",l),c(e,"class","svelte-srgf9m"),D(e,"loading",n[5]),E(e,"width",n[3]),E(e,"height",n[4])},m(i,r){P(i,e,r),t||(s=[F(e,"error",n[8]),F(e,"load",n[9])],t=!0)},p(i,r){r&1&&c(e,"alt",i[0]),r&2&&!J(e.src,l=i[1])&&c(e,"src",l),r&32&&D(e,"loading",i[5]),r&8&&E(e,"width",i[3]),r&16&&E(e,"height",i[4])},i:q,o:q,d(i){i&&w(e),t=!1,U(s)}}}function ce(n){let e,l;return e=new se({props:{width:n[2],height:n[2]}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){$(e,t,s),l=!0},p(t,s){const i={};s&4&&(i.width=t[2]),s&4&&(i.height=t[2]),e.$set(i)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function ae(n){let e,l,t=n[7]&&K(n);return{c(){t&&t.c(),e=S()},l(s){t&&t.l(s),e=S()},m(s,i){t&&t.m(s,i),P(s,e,i),l=!0},p(s,[i]){s[7]?t?(t.p(s,i),i&128&&p(t,1)):(t=K(s),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(Q(),v(t,1,1,()=>{t=null}),R())},i(s){l||(p(t),l=!0)},o(s){v(t),l=!1},d(s){s&&w(e),t&&t.d(s)}}}function fe(n,e,l){let{alt:t="Avatar"}=e,{src:s}=e,{size:i=40}=e,{width:r=`${i}px`}=e,{height:o=`${i}px`}=e,a=!0,h=!1,d=!1;te(()=>{l(7,d=!0)});const Z=()=>l(6,h=!0),m=f=>{l(5,a=!1),(f.status||0)>=400&&l(6,h=!0)};return n.$$set=f=>{"alt"in f&&l(0,t=f.alt),"src"in f&&l(1,s=f.src),"size"in f&&l(2,i=f.size),"width"in f&&l(3,r=f.width),"height"in f&&l(4,o=f.height)},[t,s,i,r,o,a,h,d,Z,m]}class be extends L{constructor(e){super(),O(this,e,fe,ae,V,{alt:0,src:1,size:2,width:3,height:4})}}export{be as A,_e as e,ge as o,we as u};