function g(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function A(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function E(t){return t()}function B(){return Object.create(null)}function j(t){t.forEach(E)}function q(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function D(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function G(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const o of n)o(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function H(t,n,e){t.$$.on_destroy.push(O(n,e))}function P(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function I(t,n,e,o,r,a){if(r){const _=m(n,e,o,a);t.p(_,r)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function K(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function L(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function N(t){const n={};for(const e in t)n[e]=!0;return n}function Q(t){return t??""}function R(t){return t&&q(t.destroy)?t.destroy:g}let f;function h(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function T(t){k().$$.on_mount.push(t)}function V(t){k().$$.after_update.push(t)}function W(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const i=[],y=[];let s=[];const p=[],x=Promise.resolve();let b=!1;function z(){b||(b=!0,x.then(M))}function X(){return z(),x}function F(t){s.push(t)}function Y(t){p.push(t)}const d=new Set;let c=0;function M(){if(c!==0)return;const t=f;do{try{for(;c<i.length;){const n=i[c];c++,h(n),S(n.$$)}}catch(n){throw i.length=0,c=0,n}for(h(null),i.length=0,c=0;y.length;)y.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(i.length);for(;p.length;)p.pop()();b=!1,d.clear(),h(t)}function S(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}function Z(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{q as A,G as B,Z as C,f as D,E,i as F,z as G,R as H,Y as a,y as b,H as c,h as d,L as e,M as f,k as g,w as h,A as i,K as j,P as k,J as l,U as m,g as n,Q as o,W as p,T as q,j as r,C as s,V as t,I as u,X as v,F as w,D as x,N as y,B as z};
