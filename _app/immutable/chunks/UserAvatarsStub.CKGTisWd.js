import{s as y,o as _,n as f,e as h,h as z,j as p}from"./scheduler.BAuVadtp.js";import{S as U,i as k,k as j,l as E,m as L,n as R,o as T,p as q,e as B,t as g,c as C,a as P,b as d,d as v,x as A,z as m,g as V,h as b,j as D}from"./index.BX_zT-d1.js";import{A as F}from"./Avatar.ARXkGQrK.js";import{c as S}from"./Stack.svelte_svelte_type_style_lang.DhQYKH1l.js";import"./UserAvatarsList.svelte_svelte_type_style_lang.CazUwnNA.js";function G(a){var i;let t,n;return t=new F({props:{src:(i=a[0])==null?void 0:i.meta.photoLink,size:a[1]}}),{c(){j(t.$$.fragment)},l(s){E(t.$$.fragment,s)},m(s,e){L(t,s,e),n=!0},p(s,[e]){var c;const r={};e&1&&(r.src=(c=s[0])==null?void 0:c.meta.photoLink),e&2&&(r.size=s[1]),t.$set(r)},i(s){n||(R(t.$$.fragment,s),n=!0)},o(s){T(t.$$.fragment,s),n=!1},d(s){q(t,s)}}}function H(a,t,n){let{user:i}=t,{size:s=40}=t;return a.$$set=e=>{"user"in e&&n(0,i=e.user),"size"in e&&n(1,s=e.size)},[i,s]}class W extends U{constructor(t){super(),k(this,t,H,G,y,{user:0,size:1})}}function I(a){let t,n,i,s;return{c(){t=B("user-avatars-stub"),n=g("+"),i=g(a[0]),this.h()},l(e){t=C(e,"USER-AVATARS-STUB",{class:!0});var r=P(t);n=d(r,"+"),i=d(r,a[0]),r.forEach(v),this.h()},h(){A(t,"class",s=_(S(a[4].class,a[1]))+" svelte-14myiz8"),m(t,"width",a[3]),m(t,"height",a[2])},m(e,r){V(e,t,r),b(t,n),b(t,i)},p(e,[r]){r&1&&D(i,e[0]),r&18&&s!==(s=_(S(e[4].class,e[1]))+" svelte-14myiz8")&&A(t,"class",s),r&8&&m(t,"width",e[3]),r&4&&m(t,"height",e[2])},i:f,o:f,d(e){e&&v(t)}}}function J(a,t,n){let i,s;const e=["count","size","color"];let r=h(t,e),{count:c}=t,{size:u=40}=t,{color:l="main"}=t;return a.$$set=o=>{t=z(z({},t),p(o)),n(4,r=h(t,e)),"count"in o&&n(0,c=o.count),"size"in o&&n(5,u=o.size),"color"in o&&n(1,l=o.color)},a.$$.update=()=>{a.$$.dirty&32&&n(3,i=`${u}px`),a.$$.dirty&32&&n(2,s=`${u}px`)},[c,l,s,i,r,u]}class X extends U{constructor(t){super(),k(this,t,J,I,y,{count:0,size:5,color:1})}}export{W as U,X as a};
