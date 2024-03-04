import{s as B,e as Y,c as pe,h as Z,j as de,n as $e,x as we,q as oe,k as ke,u as be,l as ve,m as He,w as F,b as R}from"./scheduler.Dbynjw4J.js";import{S as D,i as G,k as H,l as S,m as y,n as b,o as v,p as T,s as J,f as K,g as E,d,t as Q,b as X,j as ae,w as x,e as P,c as U,a as j,x as W,z,h as ie,H as Se,q as ye,u as Te,v as Ee}from"./index.UfXP5qVR.js";import{S as fe}from"./Section.bJAJ5_dW.js";import{A as Le,e as ee,u as Ie,o as Ne}from"./Avatar.Dwufb9PF.js";import"./UserAvatarsList.svelte_svelte_type_style_lang.B_bC7DFJ.js";import{p as Ve}from"./stores.BaL2jw4p.js";import{S as ce,T as te}from"./Stack.Cm9HVKGS.js";import{a as se}from"./index.vp3Jcj7B.js";import"./entry.DIp5vlnm.js";function ze(l){let e;return{c(){e=Q(l[3])},l(s){e=X(s,l[3])},m(s,t){E(s,e,t)},p(s,t){t&8&&ae(e,s[3])},d(s){s&&d(e)}}}function Ce(l){let e=l[0].meta.description+"",s;return{c(){s=Q(e)},l(t){s=X(t,e)},m(t,r){E(t,s,r)},p(t,r){r&1&&e!==(e=t[0].meta.description+"")&&ae(s,e)},d(t){t&&d(s)}}}function Me(l){let e;return{c(){e=Q("Это вы")},l(s){e=X(s,"Это вы")},m(s,t){E(s,e,t)},p:$e,d(s){s&&d(e)}}}function qe(l){let e;function s(n,o){return n[1]?Me:Ce}let t=s(l),r=t(l);return{c(){r.c(),e=x()},l(n){r.l(n),e=x()},m(n,o){r.m(n,o),E(n,e,o)},p(n,o){t===(t=s(n))&&r?r.p(n,o):(r.d(1),r=t(n),r&&(r.c(),r.m(e.parentNode,e)))},d(n){n&&d(e),r.d(n)}}}function Oe(l){let e,s,t,r;return e=new te({props:{role:"main",$$slots:{default:[ze]},$$scope:{ctx:l}}}),t=new te({props:{role:"secondary",$$slots:{default:[qe]},$$scope:{ctx:l}}}),{c(){H(e.$$.fragment),s=J(),H(t.$$.fragment)},l(n){S(e.$$.fragment,n),s=K(n),S(t.$$.fragment,n)},m(n,o){y(e,n,o),E(n,s,o),y(t,n,o),r=!0},p(n,o){const a={};o&264&&(a.$$scope={dirty:o,ctx:n}),e.$set(a);const u={};o&259&&(u.$$scope={dirty:o,ctx:n}),t.$set(u)},i(n){r||(b(e.$$.fragment,n),b(t.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),r=!1},d(n){n&&d(s),T(e,n),T(t,n)}}}function Pe(l){let e,s,t,r;return e=new Le({props:{src:l[2]}}),t=new ce({props:{direction:"vertical",$$slots:{default:[Oe]},$$scope:{ctx:l}}}),{c(){H(e.$$.fragment),s=J(),H(t.$$.fragment)},l(n){S(e.$$.fragment,n),s=K(n),S(t.$$.fragment,n)},m(n,o){y(e,n,o),E(n,s,o),y(t,n,o),r=!0},p(n,o){const a={};o&4&&(a.src=n[2]),e.$set(a);const u={};o&267&&(u.$$scope={dirty:o,ctx:n}),t.$set(u)},i(n){r||(b(e.$$.fragment,n),b(t.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),r=!1},d(n){n&&d(s),T(e,n),T(t,n)}}}function Ue(l){let e,s;return e=new ce({props:{gap:"10",align:"center",$$slots:{default:[Pe]},$$scope:{ctx:l}}}),{c(){H(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){y(e,t,r),s=!0},p(t,r){const n={};r&271&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function je(l){let e,s;return e=new fe({props:{class:l[5].class,$$slots:{default:[Ue]},$$scope:{ctx:l}}}),e.$on("click",l[4]),{c(){H(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){y(e,t,r),s=!0},p(t,[r]){const n={};r&32&&(n.class=t[5].class),r&271&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Ae(l,e,s){let t,r,n,o;const a=["user"];let u=Y(e,a),_;pe(l,Ve,p=>s(6,_=p));let{user:m}=e;function w(){o?se("/profile"):se("/user",{userForId:t})}return l.$$set=p=>{e=Z(Z({},e),de(p)),s(5,u=Y(e,a)),"user"in p&&s(0,m=p.user)},l.$$.update=()=>{l.$$.dirty&1&&(t=m.meta.id),l.$$.dirty&1&&s(3,r=m.meta.userName),l.$$.dirty&1&&s(2,n=m.meta.photoLink),l.$$.dirty&65&&s(1,o=String(m.meta.id)===_.url.searchParams.get("userId"))},[m,o,n,r,w,u,_]}class Fe extends D{constructor(e){super(),G(this,e,Ae,je,B,{user:0})}}function ne(l,e,s){const t=l.slice();return t[22]=e[s],t}const Re=l=>({item:l&64}),re=l=>({item:l[22].data});function le(l,e){let s,t,r;const n=e[14].default,o=ke(n,e,e[13],re);return{key:l,first:null,c(){s=P("vl-row"),o&&o.c(),t=J(),this.h()},l(a){s=U(a,"VL-ROW",{class:!0});var u=j(s);o&&o.l(u),t=K(u),u.forEach(d),this.h()},h(){W(s,"class","svelte-mwk0e5"),this.first=s},m(a,u){E(a,s,u),o&&o.m(s,null),ie(s,t),r=!0},p(a,u){e=a,o&&o.p&&(!r||u&8256)&&be(o,n,e,e[13],r?He(n,e[13],u,Re):ve(e[13]),re)},i(a){r||(b(o,a),r=!0)},o(a){v(o,a),r=!1},d(a){a&&d(s),o&&o.d(a)}}}function We(l){let e,s,t=[],r=new Map,n=`${l[4]}px`,o=`${l[5]}px`,a,u,_,m,w=ee(l[6]);const p=i=>i[22].index;for(let i=0;i<w.length;i+=1){let f=ne(l,w,i),h=p(f);r.set(h,t[i]=le(h,f))}return{c(){e=P("vl-viewport"),s=P("vl-contents");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=U(i,"VL-VIEWPORT",{class:!0});var f=j(e);s=U(f,"VL-CONTENTS",{class:!0});var h=j(s);for(let k=0;k<t.length;k+=1)t[k].l(h);h.forEach(d),f.forEach(d),this.h()},h(){W(s,"class","svelte-mwk0e5"),z(s,"padding-top",n),z(s,"padding-bottom",o),W(e,"class","svelte-mwk0e5"),we(()=>l[17].call(e)),z(e,"height",l[0])},m(i,f){E(i,e,f),ie(e,s);for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(s,null);l[15](s),l[16](e),a=Se(e,l[17].bind(e)),u=!0,_||(m=ye(e,"scroll",l[7]),_=!0)},p(i,[f]){f&8256&&(w=ee(i[6]),Te(),t=Ie(t,f,p,1,i,w,r,s,Ne,le,null,ne),Ee()),f&16&&n!==(n=`${i[4]}px`)&&z(s,"padding-top",n),f&32&&o!==(o=`${i[5]}px`)&&z(s,"padding-bottom",o),f&1&&z(e,"height",i[0])},i(i){if(!u){for(let f=0;f<w.length;f+=1)b(t[f]);u=!0}},o(i){for(let f=0;f<t.length;f+=1)v(t[f]);u=!1},d(i){i&&d(e);for(let f=0;f<t.length;f+=1)t[f].d();l[15](null),l[16](null),a(),_=!1,m()}}}function Be(l,e,s){let t,{$$slots:r={},$$scope:n}=e,{items:o}=e,{itemHeight:a=0}=e,{height:u="100%"}=e,{end:_=0}=e,{start:m=0}=e,w=!1,p,i,f=0,h,k=[],q=0,A=0,I;async function ue(c,V,$){const{scrollTop:L}=h;await F();let C=q-L,g=m;for(;C<V&&g<c.length;){let M=i[g-m];M||(s(8,_=g+1),await F(),M=i[g-m]);const N=k[g]=$||M.offsetHeight;C+=N,g+=1}s(8,_=g);const O=c.length-_;I=(q+C)/_,s(5,A=O*I),k.length=c.length}async function me(){const{scrollTop:c}=h,V=m;for(let g=0;g<i.length;g+=1)k[m+g]=a||i[g].offsetHeight;let $=0,L=0;for(;$<o.length;){const g=k[$]||I;if(L+g>c){s(9,m=$),s(4,q=L);break}L+=g,$+=1}for(;$<o.length&&(L+=k[$]||I,$+=1,!(L>c+f)););s(8,_=$);const C=o.length-_;for(I=L/_;$<o.length;)k[$++]=I;if(s(5,A=C*I),m<V){await F();let g=0,O=0;for(let N=m;N<V;N+=1)i[N-m]&&(O+=k[N],g+=a||i[N-m].offsetHeight);const M=g-O;h.scrollTo(0,c+M)}}oe(()=>{i=p.getElementsByTagName("vl-row"),s(12,w=!0)});function _e(c){R[c?"unshift":"push"](()=>{p=c,s(2,p)})}function ge(c){R[c?"unshift":"push"](()=>{h=c,s(3,h)})}function he(){f=this.offsetHeight,s(1,f)}return l.$$set=c=>{"items"in c&&s(10,o=c.items),"itemHeight"in c&&s(11,a=c.itemHeight),"height"in c&&s(0,u=c.height),"end"in c&&s(8,_=c.end),"start"in c&&s(9,m=c.start),"$$scope"in c&&s(13,n=c.$$scope)},l.$$.update=()=>{l.$$.dirty&1792&&s(6,t=o.slice(m,_).map((c,V)=>({index:V+m,data:c}))),l.$$.dirty&7170&&w&&ue(o,f,a)},[u,f,p,h,q,A,t,me,_,m,o,a,w,n,r,_e,ge,he]}class De extends D{constructor(e){super(),G(this,e,Be,We,B,{items:10,itemHeight:11,height:0,end:8,start:9})}}function Ge(l){let e,s;return e=new Fe({props:{user:l[4],userId:l[4].meta.id,name:l[4].meta.userName,src:l[4].meta.photoLink||""}}),{c(){H(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){y(e,t,r),s=!0},p(t,r){const n={};r&16&&(n.user=t[4]),r&16&&(n.userId=t[4].meta.id),r&16&&(n.name=t[4].meta.userName),r&16&&(n.src=t[4].meta.photoLink||""),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Je(l){let e,s;return e=new De({props:{items:l[0],height:l[1]-10+"px",$$slots:{default:[Ge,({item:t})=>({4:t}),({item:t})=>t?16:0]},$$scope:{ctx:l}}}),{c(){H(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){y(e,t,r),s=!0},p(t,r){const n={};r&1&&(n.items=t[0]),r&2&&(n.height=t[1]-10+"px"),r&48&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Ke(l){let e,s,t;return s=new fe({props:{type:"main",$$slots:{default:[Je]},$$scope:{ctx:l}}}),{c(){e=P("div"),H(s.$$.fragment)},l(r){e=U(r,"DIV",{});var n=j(e);S(s.$$.fragment,n),n.forEach(d)},m(r,n){E(r,e,n),y(s,e,null),l[3](e),t=!0},p(r,[n]){const o={};n&35&&(o.$$scope={dirty:n,ctx:r}),s.$set(o)},i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){v(s.$$.fragment,r),t=!1},d(r){r&&d(e),T(s),l[3](null)}}}function Qe(l,e,s){let{users:t}=e,r=0,n;oe(()=>{var a;s(1,r=((a=n.parentElement)==null?void 0:a.offsetHeight)||0)});function o(a){R[a?"unshift":"push"](()=>{n=a,s(2,n)})}return l.$$set=a=>{"users"in a&&s(0,t=a.users)},[t,r,n,o]}class lt extends D{constructor(e){super(),G(this,e,Qe,Ke,B,{users:0})}}export{lt as U};
