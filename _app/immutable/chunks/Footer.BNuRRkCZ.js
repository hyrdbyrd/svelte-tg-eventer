import{s as w,k as B,h as g,u as F,l as O,m as T,r as P,e as v,j as R,p,y as U}from"./scheduler.DEh22MT4.js";import{S as N,i as j,e as y,c as z,a as A,d as _,D as q,E as h,g as k,q as b,n as d,o as m,w as E,u as G,v as H,k as I,l as J,A as K,m as L,p as M}from"./index.Cv8GhbO8.js";import{g as Q,S as V}from"./Stack.BP1gHAO2.js";function W(o){let e,l,t,s;const a=o[5].default,i=B(a,o,o[4],null);let c=[{disabled:o[1]},{class:o[2]},o[3]],f={};for(let n=0;n<c.length;n+=1)f=g(f,c[n]);return{c(){e=y("button"),i&&i.c(),this.h()},l(n){e=z(n,"BUTTON",{class:!0});var u=A(e);i&&i.l(u),u.forEach(_),this.h()},h(){q(e,f),h(e,"wide",o[0]),h(e,"svelte-q9ygx5",!0)},m(n,u){k(n,e,u),i&&i.m(e,null),e.autofocus&&e.focus(),l=!0,t||(s=[b(e,"click",o[6]),b(e,"pointerdown",o[7]),b(e,"pointerup",o[8])],t=!0)},p(n,[u]){i&&i.p&&(!l||u&16)&&F(i,a,n,n[4],l?T(a,n[4],u,null):O(n[4]),null),q(e,f=Q(c,[(!l||u&2)&&{disabled:n[1]},(!l||u&4)&&{class:n[2]},u&8&&n[3]])),h(e,"wide",n[0]),h(e,"svelte-q9ygx5",!0)},i(n){l||(d(i,n),l=!0)},o(n){m(i,n),l=!1},d(n){n&&_(e),i&&i.d(n),t=!1,P(s)}}}function X(o,e,l){const t=["wide","disabled","color"];let s=v(e,t),{$$slots:a={},$$scope:i}=e,{wide:c=!1}=e,{disabled:f=!1}=e,{color:n="theme"}=e;function u(r){p.call(this,o,r)}function C(r){p.call(this,o,r)}function D(r){p.call(this,o,r)}return o.$$set=r=>{e=g(g({},e),R(r)),l(3,s=v(e,t)),"wide"in r&&l(0,c=r.wide),"disabled"in r&&l(1,f=r.disabled),"color"in r&&l(2,n=r.color),"$$scope"in r&&l(4,i=r.$$scope)},[c,f,n,s,i,a,u,C,D]}class se extends N{constructor(e){super(),j(this,e,X,W,w,{wide:0,disabled:1,color:2})}}function S(o){let e,l,t;return l=new V({props:{gap:"6",$$slots:{default:[Y]},$$scope:{ctx:o}}}),{c(){e=y("footer"),I(l.$$.fragment),this.h()},l(s){e=z(s,"FOOTER",{class:!0});var a=A(e);J(l.$$.fragment,a),a.forEach(_),this.h()},h(){K(e,"class","svelte-1yz0v2x")},m(s,a){k(s,e,a),L(l,e,null),t=!0},p(s,a){const i={};a&4&&(i.$$scope={dirty:a,ctx:s}),l.$set(i)},i(s){t||(d(l.$$.fragment,s),t=!0)},o(s){m(l.$$.fragment,s),t=!1},d(s){s&&_(e),M(l)}}}function Y(o){let e;const l=o[1].default,t=B(l,o,o[2],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&4)&&F(t,l,s,s[2],e?T(l,s[2],a,null):O(s[2]),null)},i(s){e||(d(t,s),e=!0)},o(s){m(t,s),e=!1},d(s){t&&t.d(s)}}}function Z(o){let e,l,t=o[0].default&&S(o);return{c(){t&&t.c(),e=E()},l(s){t&&t.l(s),e=E()},m(s,a){t&&t.m(s,a),k(s,e,a),l=!0},p(s,[a]){s[0].default?t?(t.p(s,a),a&1&&d(t,1)):(t=S(s),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(G(),m(t,1,1,()=>{t=null}),H())},i(s){l||(d(t),l=!0)},o(s){m(t),l=!1},d(s){s&&_(e),t&&t.d(s)}}}function $(o,e,l){let{$$slots:t={},$$scope:s}=e;const a=U(t);return o.$$set=i=>{"$$scope"in i&&l(2,s=i.$$scope)},[a,t,s]}class le extends N{constructor(e){super(),j(this,e,$,Z,w,{})}}export{se as B,le as F};