import{o as D,n as E,S as F,i as H,e as J,c as K,z as r,y as v,g as L,v as N,d as O}from"./index.u1-28GgA.js";import{r as Q,s as U,q as G,o as P,n as R,e as k,h as B,j as V}from"./scheduler.XmwO7aH4.js";import"./UserAvatarsList.svelte_svelte_type_style_lang.CiUUtSRJ.js";function p(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function $(s,e){D(s,1,1,()=>{e.delete(s.key)})}function ee(s,e,i,f,d,m,t,a,_,y,w,l){let u=s.length,g=m.length,o=u;const A={};for(;o--;)A[s[o].key]=o;const z=[],M=new Map,q=new Map,T=[];for(o=g;o--;){const n=l(d,m,o),h=i(n);let c=t.get(h);c?f&&T.push(()=>c.p(n,e)):(c=y(h,n),c.c()),M.set(h,z[o]=c),h in A&&q.set(h,Math.abs(o-A[h]))}const b=new Set,j=new Set;function C(n){E(n,1),n.m(a,w),t.set(n.key,n),w=n.first,g--}for(;u&&g;){const n=z[g-1],h=s[u-1],c=n.key,S=h.key;n===h?(w=n.first,u--,g--):M.has(S)?!t.has(c)||b.has(c)?C(n):j.has(S)?u--:q.get(c)>q.get(S)?(j.add(c),C(n)):(b.add(S),u--):(_(h,t),u--)}for(;u--;){const n=s[u];M.has(n.key)||_(n,t)}for(;g;)C(z[g-1]);return Q(T),z}function W(s){let e,i,f,d,m;return{c(){e=J("img"),this.h()},l(t){e=K(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){r(e,"alt",s[1]),G(e.src,i=s[0]||I)||r(e,"src",i),r(e,"class",f=P(s[4].class)+" svelte-btudgp"),v(e,"width",s[2]),v(e,"height",s[3])},m(t,a){L(t,e,a),d||(m=N(e,"error",s[6]),d=!0)},p(t,[a]){a&2&&r(e,"alt",t[1]),a&1&&!G(e.src,i=t[0]||I)&&r(e,"src",i),a&16&&f!==(f=P(t[4].class)+" svelte-btudgp")&&r(e,"class",f),a&4&&v(e,"width",t[2]),a&8&&v(e,"height",t[3])},i:R,o:R,d(t){t&&O(e),d=!1,m()}}}const I="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-34";function X(s,e,i){const f=["alt","src","size","width","height"];let d=k(e,f),{alt:m="Avatar"}=e,{src:t}=e,{size:a=40}=e,{width:_=`${a}px`}=e,{height:y=`${a}px`}=e;const w=()=>i(0,t=I);return s.$$set=l=>{e=B(B({},e),V(l)),i(4,d=k(e,f)),"alt"in l&&i(1,m=l.alt),"src"in l&&i(0,t=l.src),"size"in l&&i(5,a=l.size),"width"in l&&i(2,_=l.width),"height"in l&&i(3,y=l.height)},[t,m,_,y,d,a,w]}class se extends F{constructor(e){super(),H(this,e,X,W,U,{alt:1,src:0,size:5,width:2,height:3})}}export{se as A,p as e,$ as o,ee as u};