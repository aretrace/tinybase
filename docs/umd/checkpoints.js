var e,t;e=this,t=function(e){"use strict";const t="",n=(e,t)=>e.includes(t),o=(e,t)=>e.forEach(t),r=e=>e.length,s=e=>0==r(e),i=(e,...t)=>e.push(...t),l=e=>e.pop(),c=e=>null==e,d=(e,t,n)=>c(e)?n?.():t(e),a=(e,t)=>e?.has(t)??!1,u=e=>c(e)||0==(e=>e.size)(e),p=(e,t)=>e?.forEach(t),h=(e,t)=>e?.delete(t),f=e=>new Map(e),C=(e,t)=>e?.get(t),g=(e,t,n)=>c(n)?(h(e,t),e):e?.set(t,n),k=(e,t,n)=>(a(e,t)||g(e,t,n()),C(e,t)),v=(e,t,n,o,s=0)=>d((n?k:C)(e,t[s],s>r(t)-2?n:f),(i=>{if(s>r(t)-2)return o?.(i)&&g(e,t[s]),i;const l=v(i,t,n,o,s+1);return u(i)&&g(e,t[s]),l})),y=e=>new Set(e),L=(e,n=[t])=>{const s=[],l=(e,t)=>t==r(n)?i(s,e):null===n[t]?p(e,(e=>l(e,t+1))):o([n[t],null],(n=>l(C(e,n),t+1)));return l(e,0),s},b=Object.freeze,w=(e=>{const t=new WeakMap;return n=>(t.has(n)||t.set(n,e(n)),t.get(n))})((e=>{let w,S,T,j=100,x=f(),z=1;const E=f(),M=f(),[m,B,I]=(e=>{let n,s=0;const a=[],k=f();return[(o,r,i)=>{n??=e();const c=l(a)??t+s++;var d;return g(k,c,[o,r,i]),d=c,v(r,i??[t],y)?.add(d),c},(e,t,...r)=>o(L(e,t),(e=>p(e,(e=>C(k,e)[0](n,...t??[],...r))))),e=>d(C(k,e),(([,n,o])=>(v(n,o??[t],void 0,(t=>(h(t,e),u(t)?1:0))),g(k,e),r(a)<1e3&&i(a,e),o))),(e,t)=>{return n=L(e,t),o=c,!n.every(o);var n,o},(e,t,s)=>d(C(k,e),(([e,,i=[]])=>{const l=(...d)=>{const a=r(d);a==r(i)?e(n,...d,...s(d)):c(i[a])?o(t[a](...d),(e=>l(...d,e))):l(...d,i[a])};l()}))]})((()=>V)),O=f(),_=f(),F=[],P=[],W=(t,n)=>{z=0,e.transaction((()=>p(C(O,n),((n,o)=>p(n,((n,r)=>p(n,((n,s)=>((e,t,n,o,r)=>c(r)?e.delCell(t,n,o,!0):e.setCell(t,n,o,r))(e,o,r,s,n[t]))))))))),z=1},q=e=>{g(O,e),g(_,e),B(M,[e])},A=(e,t)=>o(((e,t)=>e.splice(0,t))(e,t??r(e)),q),D=()=>A(F,r(F)-j),G=e.addCellListener(null,null,null,((e,t,n,o,r,s)=>{if(z){d(w,(()=>{i(F,w),D(),A(P),w=void 0,T=1}));const e=k(x,t,f),c=k(e,n,f),a=k(c,o,(()=>[s,void 0]));a[1]=r,a[0]===r&&u(g(c,o))&&u(g(e,n))&&u(g(x,t))&&(w=l(F),T=1),N()}})),H=(e="")=>(c(w)&&(w=t+S++,g(O,w,x),R(w,e),x=f(),T=1),w),J=()=>{s(F)||(P.unshift(H()),W(0,w),w=l(F),T=1)},K=()=>{s(P)||(i(F,w),w=P.shift(),W(1,w),T=1)},N=()=>{T&&(B(E),T=0)},Q=e=>{const t=H(e);return N(),t},R=(e,t)=>(U(e)&&C(_,e)!==t&&(g(_,e,t),B(M,[e])),V),U=e=>a(O,e),V={setSize:e=>(j=e,D(),V),addCheckpoint:Q,setCheckpoint:R,getStore:()=>e,getCheckpointIds:()=>[[...F],w,[...P]],forEachCheckpoint:e=>{return t=e,p(_,((e,n)=>t(n,e)));var t},hasCheckpoint:U,getCheckpoint:e=>C(_,e),goBackward:()=>(J(),N(),V),goForward:()=>(K(),N(),V),goTo:e=>{const t=n(F,e)?J:n(P,e)?K:null;for(;!c(t)&&e!=w;)t();return N(),V},addCheckpointIdsListener:e=>m(e,E),addCheckpointListener:(e,t)=>m(t,M,[e]),delListener:e=>(I(e),V),clear:()=>(A(F),A(P),c(w)||q(w),w=void 0,S=0,Q(),V),destroy:()=>{e.delListener(G)},getListenerStats:()=>({})};return b(V.clear())}));e.createCheckpoints=w,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseCheckpoints={});
