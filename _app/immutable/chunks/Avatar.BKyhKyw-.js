import{o as v,n as p,S as J,i as K,B as C,C as k,a as y,d as w,A as c,g as P,h as A,w as S,u as L,v as Q,e as W,c as X,E as T,z,q as j,k as Y,l as x,m as $,p as ee}from"./index.D8e8Tln1.js";import{r as U,s as V,n as q,q as te,x as F}from"./scheduler.BFJKazVz.js";import{g as le}from"./index.CBkihCBH.js";import"./UserAvatarsList.svelte_svelte_type_style_lang.DRtGwFU7.js";function me(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function _e(n,e){v(n,1,1,()=>{e.delete(n.key)})}function ge(n,e,l,t,s,i,r,f,o,h,m,B){let d=n.length,a=i.length,b=d;const R={};for(;b--;)R[n[b].key]=b;const E=[],Z=new Map,I=new Map,D=[];for(b=a;b--;){const u=B(s,i,b),_=l(u);let g=r.get(_);g?t&&D.push(()=>g.p(u,e)):(g=h(_,u),g.c()),Z.set(_,E[b]=g),_ in R&&I.set(_,Math.abs(b-R[_]))}const G=new Set,O=new Set;function N(u){p(u,1),u.m(f,m),r.set(u.key,u),m=u.first,a--}for(;d&&a;){const u=E[a-1],_=n[d-1],g=u.key,M=_.key;u===_?(m=u.first,d--,a--):Z.has(M)?!r.has(g)||G.has(g)?N(u):O.has(M)?d--:I.get(g)>I.get(M)?(O.add(g),N(u)):(G.add(M),d--):(o(_,r),d--)}for(;d--;){const u=n[d];Z.has(u.key)||o(u,r)}for(;a;)N(E[a-1]);return U(D),E}function ie(n){let e,l,t,s,i;return{c(){e=C("svg"),l=C("circle"),t=C("path"),s=C("circle"),i=C("path"),this.h()},l(r){e=k(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var f=y(e);l=k(f,"circle",{r:!0,cx:!0,cy:!0,fill:!0}),y(l).forEach(w),t=k(f,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0}),y(t).forEach(w),s=k(f,"circle",{r:!0,cx:!0,cy:!0,fill:!0}),y(s).forEach(w),i=k(f,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0}),y(i).forEach(w),f.forEach(w),this.h()},h(){c(l,"r","53.3652"),c(l,"cx","58.6686"),c(l,"cy","59.3315"),c(l,"fill",n[2].themeParams.hint_color),c(t,"fill-rule","evenodd"),c(t,"clip-rule","evenodd"),c(t,"fill",n[2].themeParams.bg_color),c(t,"d","M15.1072 98.204C17.0166 86.6421 35.0415 77.5778 56.9953 77.5778C80.2219 77.5778 99.0507 87.7234 99.0507 100.239C99.0507 100.783 99.015 101.324 98.9449 101.859C88.4182 111.622 74.3225 117.592 58.8326 117.592C41.4938 117.592 25.9019 110.112 15.1072 98.204Z"),c(s,"r","19.1903"),c(s,"cx","59.2042"),c(s,"cy","43.6886"),c(s,"fill",n[2].themeParams.bg_color),c(i,"fill-rule","evenodd"),c(i,"clip-rule","evenodd"),c(i,"fill",n[2].themeParams.bg_color),c(i,"d","M59 118C91.5848 118 118 91.5848 118 59C118 26.4152 91.5848 0 59 0C26.4152 0 0 26.4152 0 59C0 91.5848 26.4152 118 59 118ZM58.6686 112.697C88.1414 112.697 112.034 88.8042 112.034 59.3315C112.034 29.8587 88.1414 5.96628 58.6686 5.96628C29.1958 5.96628 5.30344 29.8587 5.30344 59.3315C5.30344 88.8042 29.1958 112.697 58.6686 112.697Z"),c(e,"width",n[0]),c(e,"height",n[1]),c(e,"viewBox","0 0 118 118"),c(e,"fill","none"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(r,f){P(r,e,f),A(e,l),A(e,t),A(e,s),A(e,i)},p(r,[f]){f&1&&c(e,"width",r[0]),f&2&&c(e,"height",r[1])},i:q,o:q,d(r){r&&w(e)}}}function ne(n,e,l){const t=le();let{width:s=110}=e,{height:i=110}=e;return n.$$set=r=>{"width"in r&&l(0,s=r.width),"height"in r&&l(1,i=r.height)},[s,i,t]}class se extends J{constructor(e){super(),K(this,e,ne,ie,V,{width:0,height:1})}}function H(n){let e,l,t,s;const i=[ce,re],r=[];function f(o,h){return o[6]||!o[1]?0:1}return e=f(n),l=r[e]=i[e](n),{c(){l.c(),t=S()},l(o){l.l(o),t=S()},m(o,h){r[e].m(o,h),P(o,t,h),s=!0},p(o,h){let m=e;e=f(o),e===m?r[e].p(o,h):(L(),v(r[m],1,1,()=>{r[m]=null}),Q(),l=r[e],l?l.p(o,h):(l=r[e]=i[e](o),l.c()),p(l,1),l.m(t.parentNode,t))},i(o){s||(p(l),s=!0)},o(o){v(l),s=!1},d(o){o&&w(t),r[e].d(o)}}}function re(n){let e,l,t,s;return{c(){e=W("img"),this.h()},l(i){e=X(i,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){c(e,"alt",n[0]),F(e.src,l=n[1])||c(e,"src",l),c(e,"class","svelte-srgf9m"),T(e,"loading",n[5]),z(e,"width",n[3]),z(e,"height",n[4])},m(i,r){P(i,e,r),t||(s=[j(e,"error",n[8]),j(e,"load",n[9])],t=!0)},p(i,r){r&1&&c(e,"alt",i[0]),r&2&&!F(e.src,l=i[1])&&c(e,"src",l),r&32&&T(e,"loading",i[5]),r&8&&z(e,"width",i[3]),r&16&&z(e,"height",i[4])},i:q,o:q,d(i){i&&w(e),t=!1,U(s)}}}function ce(n){let e,l;return e=new se({props:{width:n[2],height:n[2]}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){$(e,t,s),l=!0},p(t,s){const i={};s&4&&(i.width=t[2]),s&4&&(i.height=t[2]),e.$set(i)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function oe(n){let e,l,t=n[7]&&H(n);return{c(){t&&t.c(),e=S()},l(s){t&&t.l(s),e=S()},m(s,i){t&&t.m(s,i),P(s,e,i),l=!0},p(s,[i]){s[7]?t?(t.p(s,i),i&128&&p(t,1)):(t=H(s),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(L(),v(t,1,1,()=>{t=null}),Q())},i(s){l||(p(t),l=!0)},o(s){v(t),l=!1},d(s){s&&w(e),t&&t.d(s)}}}function ae(n,e,l){let{alt:t="Avatar"}=e,{src:s}=e,{size:i=40}=e,{width:r=`${i}px`}=e,{height:f=`${i}px`}=e,o=!0,h=!1,m=!1;te(()=>{l(7,m=!0)});const B=()=>{l(6,h=!0),console.log("ERRORED")},d=a=>{console.log(a),l(5,o=!1),(a.status||0)>=400&&l(6,h=!0)};return n.$$set=a=>{"alt"in a&&l(0,t=a.alt),"src"in a&&l(1,s=a.src),"size"in a&&l(2,i=a.size),"width"in a&&l(3,r=a.width),"height"in a&&l(4,f=a.height)},[t,s,i,r,f,o,h,m,B,d]}class we extends J{constructor(e){super(),K(this,e,ae,oe,V,{alt:0,src:1,size:2,width:3,height:4})}}export{we as A,me as e,_e as o,ge as u};
