import{s as B,e as Q,h as X,j as de,x as pe,v as le,k as ke,u as we,l as $e,m as be,w as F,b as R,c as ve}from"./scheduler.BAuVadtp.js";import{S as D,i as G,k as v,l as H,m as I,n as w,o as $,p as S,s as J,f as K,g as T,d as p,t as ae,b as ie,j as He,w as Y,e as U,c as j,a as q,x as W,z,h as oe,H as Ie,q as Se,u as Ce,v as Te}from"./index.BX_zT-d1.js";import{S as fe}from"./Section.Brb7WJTZ.js";import{A as Ee,e as Z,u as Le,o as Ne}from"./Avatar.ARXkGQrK.js";import"./UserAvatarsList.svelte_svelte_type_style_lang.CazUwnNA.js";import{S as ce,T as x}from"./Stack.B16WhLmd.js";import{a as ee}from"./index.BR4cKySz.js";import{p as Ve}from"./stores._bceiPb6.js";function ze(l){let e;return{c(){e=ae(l[0])},l(s){e=ie(s,l[0])},m(s,t){T(s,e,t)},p(s,t){t&1&&He(e,s[0])},d(s){s&&p(e)}}}function te(l){let e;return{c(){e=ae("Это вы")},l(s){e=ie(s,"Это вы")},m(s,t){T(s,e,t)},d(s){s&&p(e)}}}function Me(l){let e,s=l[1]&&te();return{c(){s&&s.c(),e=Y()},l(t){s&&s.l(t),e=Y()},m(t,r){s&&s.m(t,r),T(t,e,r)},p(t,r){t[1]?s||(s=te(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){t&&p(e),s&&s.d(t)}}}function Pe(l){let e,s,t,r;return e=new x({props:{role:"main",$$slots:{default:[ze]},$$scope:{ctx:l}}}),t=new x({props:{role:"secondary",$$slots:{default:[Me]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment),s=J(),v(t.$$.fragment)},l(n){H(e.$$.fragment,n),s=K(n),H(t.$$.fragment,n)},m(n,a){I(e,n,a),T(n,s,a),I(t,n,a),r=!0},p(n,a){const o={};a&65&&(o.$$scope={dirty:a,ctx:n}),e.$set(o);const i={};a&66&&(i.$$scope={dirty:a,ctx:n}),t.$set(i)},i(n){r||(w(e.$$.fragment,n),w(t.$$.fragment,n),r=!0)},o(n){$(e.$$.fragment,n),$(t.$$.fragment,n),r=!1},d(n){n&&p(s),S(e,n),S(t,n)}}}function ye(l){let e,s,t,r;return e=new Ee({props:{src:l[2]}}),t=new ce({props:{direction:"vertical",$$slots:{default:[Pe]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment),s=J(),v(t.$$.fragment)},l(n){H(e.$$.fragment,n),s=K(n),H(t.$$.fragment,n)},m(n,a){I(e,n,a),T(n,s,a),I(t,n,a),r=!0},p(n,a){const o={};a&4&&(o.src=n[2]),e.$set(o);const i={};a&67&&(i.$$scope={dirty:a,ctx:n}),t.$set(i)},i(n){r||(w(e.$$.fragment,n),w(t.$$.fragment,n),r=!0)},o(n){$(e.$$.fragment,n),$(t.$$.fragment,n),r=!1},d(n){n&&p(s),S(e,n),S(t,n)}}}function Oe(l){let e,s;return e=new ce({props:{gap:"10",align:"center",$$slots:{default:[ye]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){I(e,t,r),s=!0},p(t,r){const n={};r&71&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function Ue(l){let e,s;return e=new fe({props:{class:l[4].class,$$slots:{default:[Oe]},$$scope:{ctx:l}}}),e.$on("click",l[3]),{c(){v(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){I(e,t,r),s=!0},p(t,[r]){const n={};r&16&&(n.class=t[4].class),r&71&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function je(l,e,s){const t=["name","userId","isCurrent","src"];let r=Q(e,t),{name:n}=e,{userId:a}=e,{isCurrent:o=!1}=e,{src:i}=e;function h(){o?ee("/profile"):ee("/user",{userForId:a})}return l.$$set=m=>{e=X(X({},e),de(m)),s(4,r=Q(e,t)),"name"in m&&s(0,n=m.name),"userId"in m&&s(5,a=m.userId),"isCurrent"in m&&s(1,o=m.isCurrent),"src"in m&&s(2,i=m.src)},[n,o,i,h,r,a]}class qe extends D{constructor(e){super(),G(this,e,je,Ue,B,{name:0,userId:5,isCurrent:1,src:2})}}function se(l,e,s){const t=l.slice();return t[22]=e[s],t}const Ae=l=>({item:l&64}),ne=l=>({item:l[22].data});function re(l,e){let s,t,r;const n=e[14].default,a=ke(n,e,e[13],ne);return{key:l,first:null,c(){s=U("vl-row"),a&&a.c(),t=J(),this.h()},l(o){s=j(o,"VL-ROW",{class:!0});var i=q(s);a&&a.l(i),t=K(i),i.forEach(p),this.h()},h(){W(s,"class","svelte-mwk0e5"),this.first=s},m(o,i){T(o,s,i),a&&a.m(s,null),oe(s,t),r=!0},p(o,i){e=o,a&&a.p&&(!r||i&8256)&&we(a,n,e,e[13],r?be(n,e[13],i,Ae):$e(e[13]),ne)},i(o){r||(w(a,o),r=!0)},o(o){$(a,o),r=!1},d(o){o&&p(s),a&&a.d(o)}}}function Fe(l){let e,s,t=[],r=new Map,n=`${l[4]}px`,a=`${l[5]}px`,o,i,h,m,b=Z(l[6]);const E=f=>f[22].index;for(let f=0;f<b.length;f+=1){let c=se(l,b,f),g=E(c);r.set(g,t[f]=re(g,c))}return{c(){e=U("vl-viewport"),s=U("vl-contents");for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){e=j(f,"VL-VIEWPORT",{class:!0});var c=q(e);s=j(c,"VL-CONTENTS",{class:!0});var g=q(s);for(let k=0;k<t.length;k+=1)t[k].l(g);g.forEach(p),c.forEach(p),this.h()},h(){W(s,"class","svelte-mwk0e5"),z(s,"padding-top",n),z(s,"padding-bottom",a),W(e,"class","svelte-mwk0e5"),pe(()=>l[17].call(e)),z(e,"height",l[0])},m(f,c){T(f,e,c),oe(e,s);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(s,null);l[15](s),l[16](e),o=Ie(e,l[17].bind(e)),i=!0,h||(m=Se(e,"scroll",l[7]),h=!0)},p(f,[c]){c&8256&&(b=Z(f[6]),Ce(),t=Le(t,c,E,1,f,b,r,s,Ne,re,null,se),Te()),c&16&&n!==(n=`${f[4]}px`)&&z(s,"padding-top",n),c&32&&a!==(a=`${f[5]}px`)&&z(s,"padding-bottom",a),c&1&&z(e,"height",f[0])},i(f){if(!i){for(let c=0;c<b.length;c+=1)w(t[c]);i=!0}},o(f){for(let c=0;c<t.length;c+=1)$(t[c]);i=!1},d(f){f&&p(e);for(let c=0;c<t.length;c+=1)t[c].d();l[15](null),l[16](null),o(),h=!1,m()}}}function Re(l,e,s){let t,{$$slots:r={},$$scope:n}=e,{items:a}=e,{itemHeight:o=0}=e,{height:i="100%"}=e,{end:h=0}=e,{start:m=0}=e,b=!1,E,f,c=0,g,k=[],y=0,A=0,L;async function ue(u,V,d){const{scrollTop:C}=g;await F();let M=y-C,_=m;for(;M<V&&_<u.length;){let P=f[_-m];P||(s(8,h=_+1),await F(),P=f[_-m]);const N=k[_]=d||P.offsetHeight;M+=N,_+=1}s(8,h=_);const O=u.length-h;L=(y+M)/h,s(5,A=O*L),k.length=u.length}async function me(){const{scrollTop:u}=g,V=m;for(let _=0;_<f.length;_+=1)k[m+_]=o||f[_].offsetHeight;let d=0,C=0;for(;d<a.length;){const _=k[d]||L;if(C+_>u){s(9,m=d),s(4,y=C);break}C+=_,d+=1}for(;d<a.length&&(C+=k[d]||L,d+=1,!(C>u+c)););s(8,h=d);const M=a.length-h;for(L=C/h;d<a.length;)k[d++]=L;if(s(5,A=M*L),m<V){await F();let _=0,O=0;for(let N=m;N<V;N+=1)f[N-m]&&(O+=k[N],_+=o||f[N-m].offsetHeight);const P=_-O;g.scrollTo(0,u+P)}}le(()=>{f=E.getElementsByTagName("vl-row"),s(12,b=!0)});function _e(u){R[u?"unshift":"push"](()=>{E=u,s(2,E)})}function ge(u){R[u?"unshift":"push"](()=>{g=u,s(3,g)})}function he(){c=this.offsetHeight,s(1,c)}return l.$$set=u=>{"items"in u&&s(10,a=u.items),"itemHeight"in u&&s(11,o=u.itemHeight),"height"in u&&s(0,i=u.height),"end"in u&&s(8,h=u.end),"start"in u&&s(9,m=u.start),"$$scope"in u&&s(13,n=u.$$scope)},l.$$.update=()=>{l.$$.dirty&1792&&s(6,t=a.slice(m,h).map((u,V)=>({index:V+m,data:u}))),l.$$.dirty&7170&&b&&ue(a,c,o)},[i,c,E,g,y,A,t,me,h,m,a,o,b,n,r,_e,ge,he]}class We extends D{constructor(e){super(),G(this,e,Re,Fe,B,{items:10,itemHeight:11,height:0,end:8,start:9})}}function Be(l){let e,s;return e=new qe({props:{userId:l[5].meta.id,name:l[5].meta.userName,src:l[5].meta.photoLink||"",isCurrent:String(l[5].meta.id)===l[3].url.searchParams.get("userId")}}),{c(){v(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){I(e,t,r),s=!0},p(t,r){const n={};r&32&&(n.userId=t[5].meta.id),r&32&&(n.name=t[5].meta.userName),r&32&&(n.src=t[5].meta.photoLink||""),r&40&&(n.isCurrent=String(t[5].meta.id)===t[3].url.searchParams.get("userId")),e.$set(n)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function De(l){let e,s;return e=new We({props:{items:l[0],height:l[1]-10+"px",$$slots:{default:[Be,({item:t})=>({5:t}),({item:t})=>t?32:0]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){I(e,t,r),s=!0},p(t,r){const n={};r&1&&(n.items=t[0]),r&2&&(n.height=t[1]-10+"px"),r&104&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function Ge(l){let e,s,t;return s=new fe({props:{type:"main",$$slots:{default:[De]},$$scope:{ctx:l}}}),{c(){e=U("div"),v(s.$$.fragment)},l(r){e=j(r,"DIV",{});var n=q(e);H(s.$$.fragment,n),n.forEach(p)},m(r,n){T(r,e,n),I(s,e,null),l[4](e),t=!0},p(r,[n]){const a={};n&75&&(a.$$scope={dirty:n,ctx:r}),s.$set(a)},i(r){t||(w(s.$$.fragment,r),t=!0)},o(r){$(s.$$.fragment,r),t=!1},d(r){r&&p(e),S(s),l[4](null)}}}function Je(l,e,s){let t;ve(l,Ve,i=>s(3,t=i));let{users:r}=e,n=0,a;le(()=>{var i;s(1,n=((i=a.parentElement)==null?void 0:i.offsetHeight)||0)});function o(i){R[i?"unshift":"push"](()=>{a=i,s(2,a)})}return l.$$set=i=>{"users"in i&&s(0,r=i.users)},[r,n,a,t,o]}class st extends D{constructor(e){super(),G(this,e,Je,Ge,B,{users:0})}}export{st as U};