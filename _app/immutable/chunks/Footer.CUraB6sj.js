import{s as w,k as T,h as b,u as E,l as F,m as O,r as D,e as y,j as H,p as h,y as M,q as P,z as U,b as G}from"./scheduler.CxJaiRdw.js";import{S as z,i as C,e as N,c as R,a as j,d as _,A as q,B as p,g as k,q as g,n as d,o as m,w as B,u as I,v as J,k as K,l as L,z as Q,m as V,p as W}from"./index.DBMmBRm2.js";import{g as X,S as Y}from"./Stack.bzWPVkk5.js";import{g as Z}from"./helpers.CyXyzbaH.js";import"./entry.CfuVJxkY.js";function $(n){let e,o,t,s;const a=n[5].default,i=T(a,n,n[4],null);let r=[{disabled:n[1]},{class:n[2]},n[3]],c={};for(let l=0;l<r.length;l+=1)c=b(c,r[l]);return{c(){e=N("button"),i&&i.c(),this.h()},l(l){e=R(l,"BUTTON",{class:!0});var u=j(e);i&&i.l(u),u.forEach(_),this.h()},h(){q(e,c),p(e,"wide",n[0]),p(e,"svelte-q9ygx5",!0)},m(l,u){k(l,e,u),i&&i.m(e,null),e.autofocus&&e.focus(),o=!0,t||(s=[g(e,"click",n[6]),g(e,"pointerdown",n[7]),g(e,"pointerup",n[8])],t=!0)},p(l,[u]){i&&i.p&&(!o||u&16)&&E(i,a,l,l[4],o?O(a,l[4],u,null):F(l[4]),null),q(e,c=X(r,[(!o||u&2)&&{disabled:l[1]},(!o||u&4)&&{class:l[2]},u&8&&l[3]])),p(e,"wide",l[0]),p(e,"svelte-q9ygx5",!0)},i(l){o||(d(i,l),o=!0)},o(l){m(i,l),o=!1},d(l){l&&_(e),i&&i.d(l),t=!1,D(s)}}}function x(n,e,o){const t=["wide","disabled","color"];let s=y(e,t),{$$slots:a={},$$scope:i}=e,{wide:r=!1}=e,{disabled:c=!1}=e,{color:l="theme"}=e;function u(f){h.call(this,n,f)}function v(f){h.call(this,n,f)}function A(f){h.call(this,n,f)}return n.$$set=f=>{e=b(b({},e),H(f)),o(3,s=y(e,t)),"wide"in f&&o(0,r=f.wide),"disabled"in f&&o(1,c=f.disabled),"color"in f&&o(2,l=f.color),"$$scope"in f&&o(4,i=f.$$scope)},[r,c,l,s,i,a,u,v,A]}class re extends z{constructor(e){super(),C(this,e,x,$,w,{wide:0,disabled:1,color:2})}}function S(n){let e,o,t;return o=new Y({props:{gap:"6",$$slots:{default:[ee]},$$scope:{ctx:n}}}),{c(){e=N("footer"),K(o.$$.fragment),this.h()},l(s){e=R(s,"FOOTER",{class:!0});var a=j(e);L(o.$$.fragment,a),a.forEach(_),this.h()},h(){Q(e,"class","svelte-y05pu8")},m(s,a){k(s,e,a),V(o,e,null),n[3](e),t=!0},p(s,a){const i={};a&16&&(i.$$scope={dirty:a,ctx:s}),o.$set(i)},i(s){t||(d(o.$$.fragment,s),t=!0)},o(s){m(o.$$.fragment,s),t=!1},d(s){s&&_(e),W(o),n[3](null)}}}function ee(n){let e;const o=n[2].default,t=T(o,n,n[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&16)&&E(t,o,s,s[4],e?O(o,s[4],a,null):F(s[4]),null)},i(s){e||(d(t,s),e=!0)},o(s){m(t,s),e=!1},d(s){t&&t.d(s)}}}function te(n){let e,o,t=n[1].default&&S(n);return{c(){t&&t.c(),e=B()},l(s){t&&t.l(s),e=B()},m(s,a){t&&t.m(s,a),k(s,e,a),o=!0},p(s,[a]){s[1].default?t?(t.p(s,a),a&2&&d(t,1)):(t=S(s),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(I(),m(t,1,1,()=>{t=null}),J())},i(s){o||(d(t),o=!0)},o(s){m(t),o=!1},d(s){s&&_(e),t&&t.d(s)}}}function se(n,e,o){let{$$slots:t={},$$scope:s}=e;const a=M(t),i=Z();let r=null;P(()=>{if(a.default&&r){const l=r.getBoundingClientRect();o(0,r.style.top=`${i.viewportHeight-l.height}px`,r),o(0,r.style.height="100%",r);const u=document.querySelector(".app");u&&(u.style.paddingBottom=`${l.height}px`)}}),U(()=>{const l=document.querySelector(".app");l&&(l.style.paddingBottom="")});function c(l){G[l?"unshift":"push"](()=>{r=l,o(0,r)})}return n.$$set=l=>{"$$scope"in l&&o(4,s=l.$$scope)},[r,a,t,c,s]}class ue extends z{constructor(e){super(),C(this,e,se,te,w,{})}}export{re as B,ue as F};