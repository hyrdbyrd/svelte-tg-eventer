import{v as a}from"./scheduler.CxJaiRdw.js";import{b as s,g as i}from"./entry.DrfH1RM5.js";function u(t="",o={}){const n=new URL(location.href);n.pathname=s+(t.startsWith("/")?t:`/${t}`),n.searchParams.delete("no_back");for(const[c,r]of Object.entries(o))n.searchParams.set(c,String(r));return i(n)}function f(t={}){return u("",t)}function e(){return Telegram.WebApp}function g(){const t=e();function o(){t.BackButton.show();const n=()=>f();return t.BackButton.onClick(n),()=>t.BackButton.offClick(n)}a(o)}function k(){const t=e();function o(){t.BackButton.hide()}a(o)}export{u as a,e as b,f as g,k as h,g as s};
