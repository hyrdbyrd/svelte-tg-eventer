import{f as r,d as s,a as f,S as o,b as n,h as u}from"./Stack.svelte_svelte_type_style_lang.DR52BQGh.js";const l=r(s,"RUFFLE_END");function R(e,a){return f.get(`/raffle/${e}/${a}`).then(t=>t.data)}function d(e,a){return f.get(`/raffle/user_seen_raffle/${e}/${a}`).then(t=>t.data)}function E(e,a){return f.get(`/raffle/user_registered_to_raffle/${e}/${a}`).then(t=>t.data)}const c=o(l),i=n(({eventId:e,userId:a})=>d(e,a)),g=n(({eventId:e,userId:a})=>E(e,a)),S=n(({eventId:e,userId:a})=>R(e,a)),$=u({isUserSeen:!1,status:"NOT_REGISTERED"}).on(S.doneData,(e,a)=>a).on(g.doneData,e=>({...e,status:"REGISTERED"})).on(i.doneData,e=>({...e,isUserSeen:!0})).on(c,(e,a)=>a);export{i as a,c as b,S as g,$ as r,g as u};