import{f as d,m as E,d as c,a as i,S as u,b as o,h as l,g as $}from"./Stack.svelte_svelte_type_style_lang.DhQYKH1l.js";function D(e){return{mark:e.rate,card:e.card,name:e.name,meetingId:e.id,eventId:e.eventId,userIds:e.userIds,meetingType:e.type,capacity:e.capacity,timeStart:e.timeStart,meetingStatus:e.status,description:e.description,meetingNote:e.meetingNote,organisatorId:e.organizatorId,telegramChatLink:e.telegramChatLink}}function s(e,t){return{queueType:t,rate:e.mark,card:e.card,name:e.name,id:e.meetingId,eventId:e.eventId,userIds:e.userIds,type:e.meetingType,capacity:e.capacity,timeStart:e.timeStart,status:e.meetingStatus,description:e.description,meetingNote:e.meetingNote,organizatorId:e.organisatorId,telegramChatLink:e.telegramChatLink}}const N=d(c,"NEW_AVAILABLE_MEETING").pipe(E(e=>s(e,"AVAILABLE"))),I=d(c,"SOME_MEETING_BECOME_UN_AVAILABLE").pipe(E(e=>s(e,"AVAILABLE"))),T=d(c,"METTING_END").pipe(E(e=>s(e,"MY"))),x=d(c,"METTING_BECOME_END").pipe(E(e=>s(e,"ENDED"))),S=d(c,"FAST_MEETING_USER_FOUND").pipe(E(e=>s(e,"MY"))),C=d(c,"MEETING_UPDATED"),_={REJECTED:"REJECTED",ACCEPTED:"ACCEPTED",AWAITING_RESPONSE:"AWAITING_RESPONSE"};function F(e,t){return i.get(`/meeting/get_user_meetings/${e}/${t}`).then(n=>n.data).then(n=>n.map(a=>s(a,"MY")))}function L(e,t){return i.get(`/meeting/ended_user_meetings/${e}/${t}`).then(n=>n.data).then(n=>n.map(a=>s(a,"ENDED")))}function R(e,t){return i.get(`/meeting/get_available_custom_meetings/${e}/${t}`).then(n=>n.data).then(n=>n.map(a=>s(a,"AVAILABLE")))}function U(e){return i.post(`/meeting/create_custom_meeting/${e.eventId}`,D(e)).then(t=>t.data).then(t=>s(t,"MY"))}function k(e,t,n,a,r){return i.post(`/meeting/mark/${e}`,{mark:a,userId:t,eventId:e,meetingId:n,meetingNote:r}).then(p=>p.data)}function b(e,t,n){return i.post(`/meeting/join_meeting/${e}/${t}`,{userId:t,eventId:e,meetingId:n}).then(a=>a.data).then(a=>s(a,"MY"))}function q(e,t,n){return i.post(`/meeting/mark_meeting_finished/${e}`,{eventId:e,userId:t,meetingId:n}).then(()=>n)}function y(e,t,n){return i.post(`/meeting/meeting_not_happend/${e}/${t}`,{eventId:e,userId:t,meetingId:n}).then(()=>n)}function B(e,t,n){return i.post(`/meeting/left_meeting/${e}/${t}`,{userId:t,eventId:e,meetingId:n}).then(()=>({meetingId:n}))}function G(e,t,n){return i.get(`/meeting/is_request_already_exist/${e}/${t}/${n}`).then(a=>a.data)}function v(e,t,n){return i.get(`/meeting/can_send_meeting_request/${e}/${t}/${n}`).then(a=>a.data)}function Y(e,t,n){return i.post(`/meeting/${e}/send_meeting_request`,{eventId:e,idTo:n,idFrom:t,status:_.AWAITING_RESPONSE}).then(a=>a.data).then(a=>s(a,"MY"))}function A(e,t,n,a){return i.post(`/meeting/${e}/answer_meeting_request`,{eventId:e,idTo:n,idFrom:t,status:a?_.ACCEPTED:_.REJECTED}).then(r=>r.data)}const O=u(T),f=u(C),P=u(x),V=u(N),j=u(S),w=u(I),W=o(({userId:e,eventId:t})=>F(t,e)),J=o(({userId:e,eventId:t})=>L(t,e)),ie=o(({userId:e,eventId:t,meetingId:n})=>y(t,e,n)),se=o(({eventId:e,userId:t,meetingId:n})=>q(e,t,n)),z=o(({eventId:e,userId:t,meetingId:n,mark:a,meetingNote:r})=>k(e,t,n,a,r)),h=o(({eventId:e,userId:t,meetingId:n})=>b(e,t,n)),H=o(({eventId:e,userId:t,meetingId:n})=>B(e,t,n)),K=o(({userId:e,eventId:t})=>R(t,e));o(({eventId:e,userFromId:t,userToId:n})=>G(e,t,n));const re=o(({eventId:e,userFromId:t,userToId:n})=>v(e,t,n)),Q=o(({eventId:e,userFromId:t,userToId:n})=>Y(e,t,n)),X=o(({eventId:e,userFromId:t,userToId:n})=>A(e,t,n,!0)),Z=o(({eventId:e,userFromId:t,userToId:n})=>A(e,t,n,!1)),ee=o(U);function g(e,t){const n=e.findIndex(a=>a.id===t);return n!==-1?e.toSpliced(n,1):e}function m(e,t,n){const a=e.findIndex(r=>r.id===t.meetingId);return a!==-1?(e[a]=s(t,n),[...e]):e}function M(e,t){const n=e.findIndex(a=>a.id===t.id);return n!==-1?(e[n]=t,[...e]):[t,...e]}const te=l([],{name:"availableMeetings"}).on(V,(e,t)=>M(e,t)).on(K.doneData,(e,t)=>t).on(h.doneData,(e,t)=>g(e,t.id)).on(f,(e,t)=>m(e,t,"AVAILABLE")).on(w,(e,t)=>g(e,t.id)),ne=l([],{name:"myMeetings"}).on(W.doneData,(e,t)=>t).on(f,(e,t)=>m(e,t,"MY")).on(j,(e,t)=>M(e,t)).on(h.doneData,(e,t)=>M(e,t)).on(O,(e,t)=>g(e,t.id)).on(H.doneData,(e,{meetingId:t})=>{const n=g(e,Number(t));return console.log("meeets",n),n}).on(ee.doneData,(e,t)=>M(e,t)).on(Q.doneData,(e,t)=>[...e,t]).on(X.doneData,(e,t)=>m(e,t,"MY")).on(Z.doneData,(e,t)=>g(e,t.meetingId)),ae=l([],{name:"endedMeetings"}).on(P,(e,t)=>[...e,t]).on(J.doneData,(e,t)=>t).on(f,(e,t)=>m(e,t,"ENDED")).on(z.doneData,(e,{mark:t,meetingId:n,meetingNote:a})=>{const r=e.findIndex(p=>p.id===n);return r!==-1?(e[r]={...e[r],rate:t,meetingNote:a},[...e]):e}),de=$(te,ne,ae,(e,t,n)=>(console.log(e),e.concat(t,n)));export{de as a,ee as b,re as c,J as d,ae as e,K as f,W as g,j as h,X as i,h as j,se as k,ie as l,z as m,H as n,ne as o,te as p,Z as r,Q as s};
