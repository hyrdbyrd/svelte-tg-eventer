import{f as d,m as u,a as c,b as i,S as g,d as o,e as M,g as f}from"./Stack.svelte_svelte_type_style_lang.BvmJlThE.js";import"./entry.BdY31Yq_.js";function l(e){return{mark:e.rate,card:e.card,name:e.name,meetingId:e.id,eventId:e.eventId,userIds:e.userIds,meetingType:e.type,capacity:e.capacity,timeStart:e.timeStart,meetingStatus:e.status,description:e.description,meetingNote:e.meetingNote,organisatorId:e.organizatorId}}function s(e,t){return{queueType:t,rate:e.mark,card:e.card,name:e.name,id:e.meetingId,eventId:e.eventId,userIds:e.userIds,type:e.meetingType,capacity:e.capacity,timeStart:e.timeStart,status:e.meetingStatus,description:e.description,meetingNote:e.meetingNote,organizatorId:e.organisatorId}}const A=d(c,"NEW_AVAILABLE_MEETING").pipe(u(e=>s(e,"AVAILABLE"))),$=d(c,"SOME_MEETING_BECOME_UN_AVAILABLE").pipe(u(e=>s(e,"AVAILABLE"))),I=d(c,"METTING_END").pipe(u(e=>s(e,"MY"))),x=d(c,"METTING_BECOME_END").pipe(u(e=>s(e,"ENDED"))),N=d(c,"FAST_MEETING_USER_FOUND").pipe(u(e=>s(e,"MY"))),h=d(c,"MEETING_UPDATED");function D(e,t){return i.get(`/meeting/get_user_meetings/${e}/${t}`).then(n=>n.data).then(n=>n.map(a=>s(a,"MY")))}function F(e,t){return i.get(`/meeting/ended_user_meetings/${e}/${t}`).then(n=>n.data).then(n=>n.map(a=>s(a,"ENDED")))}function T(e,t){return i.get(`/meeting/get_available_custom_meetings/${e}/${t}`).then(n=>n.data).then(n=>n.map(a=>s(a,"AVAILABLE")))}function U(e){return i.post(`/meeting/create_custom_meeting/${e.eventId}`,l(e)).then(t=>t.data).then(t=>s(t,"MY"))}function y(e,t,n,a,r){return i.post(`/meeting/mark/${e}`,{mark:a,userId:t,eventId:e,meetingId:n,meetingNote:r}).then(m=>m.data)}function S(e,t,n){return i.post(`/meeting/join_meeting/${e}/${t}`,{userId:t,eventId:e,meetingId:n})}function b(e,t,n){return i.post(`/meeting/mark_meeting_finished/${e}`,{eventId:e,userId:t,meetingId:n})}function B(e,t,n){return i.post(`/meeting/meeting_not_happend/${e}/${t}`,{eventId:e,userId:t,meetingId:n})}function L(e,t,n){return i.post(`/meeting/left_meeting/${e}/${t}`,{userId:t,eventId:e,meetingId:n}).then(a=>a.data)}function v(e,t,n){return i.get(`/meeting/is_request_already_exist/${e}/${t}/${n}`).then(a=>a.data)}const k=g(I),E=g(h),C=g(x),G=g(A),V=g(N),Y=g($),j=o(({userId:e,eventId:t})=>D(t,e)),O=o(({userId:e,eventId:t})=>F(t,e)),K=o(({userId:e,eventId:t,meetingId:n})=>B(t,e,n)),Q=o(({eventId:e,userId:t,meetingId:n})=>b(e,t,n)),q=o(({eventId:e,userId:t,meetingId:n,mark:a,meetingNote:r})=>y(e,t,n,a,r)),X=o(({eventId:e,userId:t,meetingId:n})=>S(e,t,n)),R=o(({eventId:e,userId:t,meetingId:n})=>L(e,t,n)),w=o(({userId:e,eventId:t})=>T(t,e)),Z=o(({eventId:e,userFromId:t,userToId:n})=>v(e,t,n)),ee=o(U);function p(e,t){const n=e.findIndex(a=>a.id===t);return n!==-1?e.toSpliced(n,1):e}function _(e,t,n){const a=e.findIndex(r=>r.id===t.meetingId);return a!==-1?(e[a]=s(t,n),[...e]):e}const z=M([],{name:"availableMeetings"}).on(G,(e,t)=>[t,...e]).on(w.doneData,(e,t)=>t).on(E,(e,t)=>_(e,t,"AVAILABLE")).on(Y,(e,t)=>p(e,t.id)),H=M([],{name:"myMeetings"}).on(j.doneData,(e,t)=>t).on(V,(e,t)=>[t,...e]).on(k,(e,t)=>p(e,t.id)).on(E,(e,t)=>_(e,t,"MY")).on(R.doneData,(e,{meetingId:t})=>p(e,t)),P=M([],{name:"endedMeetings"}).on(C,(e,t)=>[...e,t]).on(O.doneData,(e,t)=>t).on(E,(e,t)=>_(e,t,"ENDED")).on(q.doneData,(e,{mark:t,meetingId:n,meetingNote:a})=>{const r=e.findIndex(m=>m.id===n);return r!==-1?(e[r]={...e[r],rate:t,meetingNote:a},[...e]):e}),te=f(z,H,P,(e,t,n)=>e.concat(t,n));export{te as a,O as b,ee as c,w as d,P as e,V as f,j as g,Q as h,Z as i,X as j,K as k,R as l,q as m,H as n,z as o};
