import{s as N,e as j,h as _,j as P,k as T,o as y,u as q,l as A,m as B}from"./scheduler.CxJaiRdw.js";import{S as D,i as H,w as C,g as S,n as I,o as z,d as g,e as L,c as U,a as V,H as E,B as h,y as c,z as G}from"./index.DBMmBRm2.js";import{c as v}from"./Stack.svelte_svelte_type_style_lang.CUA6CrGc.js";function F(a,e){const n={},f={},i={$$scope:1};let t=a.length;for(;t--;){const l=a[t],u=e[t];if(u){for(const s in l)s in u||(f[s]=1);for(const s in u)i[s]||(n[s]=u[s],i[s]=1);a[t]=u}else for(const s in l)i[s]=1}for(const l in f)l in n||(n[l]=void 0);return n}function k(a){let e,n,f;const i=a[7].default,t=T(i,a,a[6],null);let l=[{class:n=y(v(a[1],a[5].class,"element"))+" svelte-c11cfe"}],u={};for(let s=0;s<l.length;s+=1)u=_(u,l[s]);return{c(){e=L(a[4]),t&&t.c(),this.h()},l(s){e=U(s,(a[4]||"null").toUpperCase(),{class:!0});var r=V(e);t&&t.l(r),r.forEach(g),this.h()},h(){E(a[4])(e,u),h(e,"bold",a[0]),h(e,"truncate",a[2]),c(e,"text-align",a[3])},m(s,r){S(s,e,r),t&&t.m(e,null),f=!0},p(s,r){t&&t.p&&(!f||r&64)&&q(t,i,s,s[6],f?B(i,s[6],r,null):A(s[6]),null),E(s[4])(e,u=F(l,[(!f||r&34&&n!==(n=y(v(s[1],s[5].class,"element"))+" svelte-c11cfe"))&&{class:n}])),h(e,"bold",s[0]),h(e,"truncate",s[2]),r&8&&c(e,"text-align",s[3])},i(s){f||(I(t,s),f=!0)},o(s){z(t,s),f=!1},d(s){s&&g(e),t&&t.d(s)}}}function J(a){let e=a[4],n,f,i=a[4]&&k(a);return{c(){i&&i.c(),n=C()},l(t){i&&i.l(t),n=C()},m(t,l){i&&i.m(t,l),S(t,n,l),f=!0},p(t,[l]){t[4]?e?N(e,t[4])?(i.d(1),i=k(t),e=t[4],i.c(),i.m(n.parentNode,n)):i.p(t,l):(i=k(t),e=t[4],i.c(),i.m(n.parentNode,n)):e&&(i.d(1),i=null,e=t[4])},i(t){f||(I(i,t),f=!0)},o(t){z(i,t),f=!1},d(t){t&&g(n),i&&i.d(t)}}}function K(a,e,n){const f=["bold","role","truncate","align","as"];let i=j(e,f),{$$slots:t={},$$scope:l}=e,{bold:u=!1}=e,{role:s="main"}=e,{truncate:r=!1}=e,{align:m=void 0}=e,{as:d=r?"p":"span"}=e;return a.$$set=o=>{e=_(_({},e),P(o)),n(5,i=j(e,f)),"bold"in o&&n(0,u=o.bold),"role"in o&&n(1,s=o.role),"truncate"in o&&n(2,r=o.truncate),"align"in o&&n(3,m=o.align),"as"in o&&n(4,d=o.as),"$$scope"in o&&n(6,l=o.$$scope)},[u,s,r,m,d,i,l,t]}class X extends D{constructor(e){super(),H(this,e,K,J,N,{bold:0,role:1,truncate:2,align:3,as:4})}}const b={end:"flex-end",center:"center",start:"flex-start",between:"space-between"};function M(a){let e,n,f;const i=a[7].default,t=T(i,a,a[6],null);return{c(){e=L("div"),t&&t.c(),this.h()},l(l){e=U(l,"DIV",{class:!0});var u=V(e);t&&t.l(u),u.forEach(g),this.h()},h(){G(e,"class",n=y(v(a[3],a[5].class))+" svelte-bjn9m0"),c(e,"gap",`${a[4]}px`),c(e,"width",a[0]?"100%":""),c(e,"align-items",b[a[1]]),c(e,"justify-content",b[a[2]])},m(l,u){S(l,e,u),t&&t.m(e,null),f=!0},p(l,[u]){t&&t.p&&(!f||u&64)&&q(t,i,l,l[6],f?B(i,l[6],u,null):A(l[6]),null),(!f||u&40&&n!==(n=y(v(l[3],l[5].class))+" svelte-bjn9m0"))&&G(e,"class",n),u&16&&c(e,"gap",`${l[4]}px`),u&1&&c(e,"width",l[0]?"100%":""),u&2&&c(e,"align-items",b[l[1]]),u&4&&c(e,"justify-content",b[l[2]])},i(l){f||(I(t,l),f=!0)},o(l){z(t,l),f=!1},d(l){l&&g(e),t&&t.d(l)}}}function O(a,e,n){const f=["wide","align","justify","direction","gap"];let i=j(e,f),{$$slots:t={},$$scope:l}=e,{wide:u=!1}=e,{align:s="start"}=e,{justify:r="start"}=e,{direction:m="horizontal"}=e,{gap:d="0"}=e;return a.$$set=o=>{e=_(_({},e),P(o)),n(5,i=j(e,f)),"wide"in o&&n(0,u=o.wide),"align"in o&&n(1,s=o.align),"justify"in o&&n(2,r=o.justify),"direction"in o&&n(3,m=o.direction),"gap"in o&&n(4,d=o.gap),"$$scope"in o&&n(6,l=o.$$scope)},[u,s,r,m,d,i,l,t]}class Y extends D{constructor(e){super(),H(this,e,O,M,N,{wide:0,align:1,justify:2,direction:3,gap:4})}}export{Y as S,X as T,F as g};
