var e,t;e=this,t=function(e,t){"use strict";const s=e=>typeof e,n="",o=s(n),r=s(!0),a=s(0),l=s(s),i="type",d="default",c="utf8",u=(e,t)=>e.includes(t),f=(e,t)=>e.every(t),h=(e,t)=>T(e)===T(t)&&f(e,((e,s)=>t[s]===e)),R=(e,t)=>f(e,((s,n)=>0==n||t(e[n-1],s)<=0)),g=(e,t)=>e.sort(t),w=(e,t)=>e.forEach(t),L=(e,t)=>e.map(t),I=e=>p(e,((e,t)=>e+t),0),T=e=>e.length,v=e=>0==T(e),p=(e,t,s)=>e.reduce(t,s),S=(e,...t)=>e.push(...t),b=e=>e.pop(),y=e=>JSON.stringify(e,((e,t)=>M(t,Map)?p([...t],((e,[t,s])=>(e[t]=s,e)),{}):t)),C=JSON.parse,m=Math.max,E=Math.min,k=isFinite,M=(e,t)=>e instanceof t,x=e=>null==e,D=(e,t,s)=>x(e)?s?.():t(e),A=e=>e==o||e==r,F=e=>s(e)==l,P=()=>{},J=e=>e.size,Q=(j=J,e=>p(N(e),((e,t)=>e+j(t)),0));var j;const O=(e,t)=>e?.has(t)??!1,z=e=>x(e)||0==J(e),N=e=>[...e?.values()??[]],W=e=>e.clear(),B=(e,t)=>e?.forEach(t),_=(e,t)=>e?.delete(t),q=e=>new Map(e),H=e=>[...e?.keys()??[]],G=(e,t)=>e?.get(t),K=(e,t)=>B(e,((e,s)=>t(s,e))),U=(e,t,s)=>x(s)?(_(e,t),e):e?.set(t,s),V=(e,t,s)=>(O(e,t)||U(e,t,s()),G(e,t)),X=(e,t,s)=>{const n={},o=t??(e=>e);return B(e,((e,t)=>D(o(e),(e=>s?.(e)?0:n[t]=e)))),n},Y=(e,t)=>{const s=q(),n=t??(e=>e);return B(e,((e,t)=>s.set(t,n(e)))),s},Z=e=>Y(e,Y),$=(e,t,s,n,o=0)=>D((s?V:G)(e,t[o],o>T(t)-2?s:q),(r=>{if(o>T(t)-2)return n?.(r)&&U(e,t[o]),r;const a=$(r,t,s,n,o+1);return z(r)&&U(e,t[o]),a})),ee=e=>new Set(e),te=(e,t)=>e?.add(t),se=(e,t,s)=>{const n=e.hasRow,o=q(),r=q(),a=q(),l=q(),i=q(),d=(t,s,...n)=>{const o=V(i,t,ee);return w(n,(t=>te(o,t)&&s&&e.callListener(t))),n},c=(t,...s)=>D(G(i,t),(n=>{w(v(s)?N(n):s,(t=>{e.delListener(t),_(n,t)})),z(n)&&U(i,t)})),u=(e,s)=>{U(o,e,s),O(r,e)||(U(r,e,t()),U(a,e,q()),U(l,e,q()))},f=e=>{U(o,e),U(r,e),U(a,e),U(l,e),c(e)};return[()=>e,()=>H(o),e=>K(r,e),e=>O(r,e),e=>G(o,e),e=>G(r,e),(e,t)=>U(r,e,t),u,(t,o,r,i,f)=>{u(t,o);const h=q(),R=q(),g=G(a,t),L=G(l,t),I=t=>{const r=s=>e.getCell(o,t,s),a=G(g,t),l=n(o,t)?s(i(r,t)):void 0;if(a!=l&&U(h,t,[a,l]),!x(f)){const e=G(L,t),s=n(o,t)?f(r,t):void 0;e!=s&&U(R,t,s)}},T=e=>{r((()=>{B(h,(([,e],t)=>U(g,t,e))),B(R,((e,t)=>U(L,t,e)))}),h,R,g,L,e),W(h),W(R)};K(g,I),e.hasTable(o)&&w(e.getRowIds(o),(e=>{O(g,e)||I(e)})),T(!0),c(t),d(t,0,e.addRowListener(o,null,((e,t,s)=>I(s))),e.addTableListener(o,(()=>T())))},f,()=>K(i,f),d,c]},ne=(e,t)=>s(e)==o?t=>t(e):e??(()=>t??n),oe=e=>{const t=new WeakMap;return s=>(t.has(s)||t.set(s,e(s)),t.get(s))},re=(e,t=[n])=>{const s=[],o=(e,n)=>n==T(t)?S(s,e):null===t[n]?B(e,(e=>o(e,n+1))):w([t[n],null],(t=>o(G(e,t),n+1)));return o(e,0),s},ae=e=>{let t,s=0;const o=[],r=q();return[(a,l,i)=>{t??=e();const d=b(o)??n+s++;return U(r,d,[a,l,i]),te($(l,i??[n],ee),d),d},(e,s,...n)=>w(re(e,s),(e=>B(e,(e=>G(r,e)[0](t,...s??[],...n))))),e=>D(G(r,e),(([,t,s])=>($(t,s??[n],void 0,(t=>(_(t,e),z(t)?1:0))),U(r,e),T(o)<1e3&&S(o,e),s))),(e,t)=>!f(re(e,t),x),(e,s,n)=>D(G(r,e),(([e,,o=[]])=>{const r=(...a)=>{const l=T(a);l==T(o)?e(t,...a,...n(a)):x(o[l])?w(s[l](...a),(e=>r(...a,e))):r(...a,o[l])};r()}))]},le=Object,ie=le.keys,de=le.isFrozen,ce=le.freeze,ue=(e,t)=>!x(((e,t)=>D(e,(e=>e[t])))(e,t)),fe=(e,t)=>delete e[t],he=(e,t)=>w(le.entries(e),(([e,s])=>t(s,e))),Re=e=>v(ie(e)),ge=e=>{const t=s(e);return A(t)||t==a&&k(e)?t:void 0},we=(e,t,s,n,o)=>x(o)?e.delCell(t,s,n,!0):e.setCell(t,s,n,o),Le=oe((e=>{let t,s,o,r=100,a=q(),l=1;const i=q(),d=q(),[c,f,h]=ae((()=>j)),R=q(),g=q(),L=[],I=[],p=(t,s)=>{l=0,e.transaction((()=>B(G(R,s),((s,n)=>B(s,((s,o)=>B(s,((s,r)=>we(e,n,o,r,s[t]))))))))),l=1},y=e=>{U(R,e),U(g,e),f(d,[e])},C=(e,t)=>w(((e,t)=>e.splice(0,t))(e,t??T(e)),y),m=()=>C(L,T(L)-r),E=e.addCellListener(null,null,null,((e,s,n,r,i,d)=>{if(l){D(t,(()=>{S(L,t),m(),C(I),t=void 0,o=1}));const e=V(a,s,q),l=V(e,n,q),c=V(l,r,(()=>[d,void 0]));c[1]=i,c[0]===i&&z(U(l,r))&&z(U(e,n))&&z(U(a,s))&&(t=b(L),o=1),F()}})),k=(e="")=>(x(t)&&(t=n+s++,U(R,t,a),J(t,e),a=q(),o=1),t),M=()=>{v(L)||(I.unshift(k()),p(0,t),t=b(L),o=1)},A=()=>{v(I)||(S(L,t),t=I.shift(),p(1,t),o=1)},F=()=>{o&&(f(i),o=0)},P=e=>{const t=k(e);return F(),t},J=(e,t)=>(Q(e)&&G(g,e)!==t&&(U(g,e,t),f(d,[e])),j),Q=e=>O(R,e),j={setSize:e=>(r=e,m(),j),addCheckpoint:P,setCheckpoint:J,getStore:()=>e,getCheckpointIds:()=>[[...L],t,[...I]],forEachCheckpoint:e=>K(g,e),hasCheckpoint:Q,getCheckpoint:e=>G(g,e),goBackward:()=>(M(),F(),j),goForward:()=>(A(),F(),j),goTo:e=>{const s=u(L,e)?M:u(I,e)?A:null;for(;!x(s)&&e!=t;)s();return F(),j},addCheckpointIdsListener:e=>c(e,i),addCheckpointListener:(e,t)=>c(t,d,[e]),delListener:e=>(h(e),j),clear:()=>(C(L),C(I),x(t)||y(t),t=void 0,s=0,P(),j),destroy:()=>{e.delListener(E)},getListenerStats:()=>({})};return ce(j.clear())})),Ie=(e,t)=>e<t?-1:1,Te=e=>n+e,ve=oe((e=>{const t=q(),s=q(),[o,r,a,l,i,d,c,,u,f,h]=se(e,q,(e=>x(e)?n:e+n)),[w,L,I]=ae((()=>v)),T=(t,s,n)=>{const o=i(t);B(n,((t,n)=>s(n,(s=>B(t,(t=>s(t,(s=>e.forEachCell(o,t,s)))))))))},v={setIndexDefinition:(e,n,o,r,a,l=Ie)=>{const i=x(a)?void 0:([e],[t])=>a(e,t);return u(e,n,((n,o,a,u,f,h)=>{let w=0;const I=ee(),T=ee(),v=d(e);if(B(o,(([e,t],s)=>{x(e)||(te(I,e),D(G(v,e),(t=>{_(t,s),z(t)&&(U(v,e),w=1)}))),x(t)||(te(I,t),O(v,t)||(U(v,t,ee()),w=1),te(G(v,t),s),x(r)||te(T,t))})),n(),z(f)||(h?K(v,(e=>te(T,e))):K(a,(e=>D(G(u,e),(e=>te(T,e))))),B(T,(e=>{const t=(t,s)=>l(G(f,t),G(f,s),e),s=[...G(v,e)];R(s,t)||(U(v,e,ee(g(s,t))),te(I,e))}))),(w||h)&&!x(i)){const t=[...v];R(t,i)||(c(e,q(g(t,i))),w=1)}w&&L(t,[e]),B(I,(t=>L(s,[e,t])))}),ne(o),D(r,ne)),v},delIndexDefinition:e=>(f(e),v),getStore:o,getIndexIds:r,forEachIndex:e=>a(((t,s)=>e(t,(e=>T(t,e,s))))),forEachSlice:(e,t)=>T(e,t,d(e)),hasIndex:l,hasSlice:(e,t)=>O(d(e),t),getTableId:i,getSliceIds:e=>H(d(e)),getSliceRowIds:(e,t)=>N(G(d(e),t)),addSliceIdsListener:(e,s)=>w(s,t,[e]),addSliceRowIdsListener:(e,t,n)=>w(n,s,[e,t]),delListener:e=>(I(e),v),destroy:h,getListenerStats:()=>({})};return ce(v)})),pe=q([["avg",[(e,t)=>I(e)/t,(e,t,s)=>e+(t-e)/(s+1),(e,t,s)=>e+(e-t)/(s-1),(e,t,s,n)=>e+(t-s)/n]],["max",[e=>m(...e),(e,t)=>m(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:m(t,e)]],["min",[e=>E(...e),(e,t)=>E(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:E(t,e)]],["sum",[e=>I(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,s)=>e-s+t]]]),Se=(e,t,s,n,o,r=!1)=>{if(z(s))return;const[a,l,i,d]=o;return r||=x(e),B(n,(([s,n])=>{r||(e=x(s)?l?.(e,n,t++):x(n)?i?.(e,s,t--):d?.(e,n,s,t),r||=x(e))})),r?a(N(s),J(s)):e},be=oe((e=>{const t=q(),[s,o,r,a,l,i,d,,c,u,f]=se(e,P,(e=>isNaN(e)||x(e)||!0===e||!1===e||e===n?void 0:1*e)),[h,R,g]=ae((()=>w)),w={setMetricDefinition:(e,s,n,o,r,a,l)=>{const u=F(n)?[n,r,a,l]:G(pe,n)??G(pe,"sum");return c(e,s,((s,n,o,r,a,l)=>{const c=i(e),f=J(r);l||=x(c),s();let h=Se(c,f,r,n,u,l);k(h)||(h=void 0),h!=c&&(d(e,h),R(t,[e],h,c))}),ne(o,1)),w},delMetricDefinition:e=>(u(e),w),getStore:s,getMetricIds:o,forEachMetric:r,hasMetric:a,getTableId:l,getMetric:i,addMetricListener:(e,s)=>h(s,t,[e]),delListener:e=>(g(e),w),destroy:f,getListenerStats:()=>({})};return ce(w)})),ye=(e,t,s,o,r)=>{let a,l=0;const i={load:async s=>{if(2!=l){l=1;const o=await t();x(o)||o==n?e.setTables(s):e.setJson(o),l=0}return i},startAutoLoad:async e=>(i.stopAutoLoad(),await i.load(e),o(i.load),i),stopAutoLoad:()=>(r(),i),save:async()=>(1!=l&&(l=2,await s(e.getJson()),l=0),i),startAutoSave:async()=>(await i.stopAutoSave().save(),a=e.addTablesListener((()=>i.save())),i),stopAutoSave:()=>(D(a,e.delListener),i),getStore:()=>e,destroy:()=>i.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return ce(i)},Ce="storage",me=globalThis.window,Ee=(e,t,s)=>{let n;return ye(e,(async()=>s.getItem(t)),(async e=>s.setItem(t,e)),(e=>{n=n=>{n.storageArea===s&&n.key===t&&e()},me.addEventListener(Ce,n)}),(()=>{me.removeEventListener(Ce,n),n=void 0}))},ke=e=>e.headers.get("ETag"),Me=oe((e=>{const t=e.createStore,[s,o,r,a,l,,,i,,d,c,u,R]=se(e,(()=>!0),P),I=t(),p=t(),b=t(),y=q(),C=(e,t,...s)=>w(s,(s=>te(V(V(y,t,q),e,ee),s))),m=e=>w([b,p,I],(t=>t.delTable(e))),E=(e,t,s)=>C(t,e,t.addWillFinishTransactionListener(s.startTransaction),t.addDidFinishTransactionListener((()=>s.finishTransaction()))),k={setQueryDefinition:(t,s,o)=>{let r;i(t,s),m(t);const a=[],l=[[null,[s,null,null,[],q()]]],d=[],c=[],y=[],M=[];o({select:(e,t)=>{const s=F(e)?[T(a)+n,e]:[x(t)?e:t,s=>s(e,t)];return S(a,s),{as:e=>s[0]=e}},join:(e,t,s)=>{const n=x(s)||F(t)?null:t,o=x(n)?t:s,r=[e,[e,n,F(o)?o:e=>e(o),[],q()]];return S(l,r),{as:e=>r[0]=e}},where:(e,t,s)=>S(d,F(e)?e:x(s)?s=>s(e)===t:n=>n(e,t)===s),group:(e,t,s,n,o)=>{const r=[e,[e,F(t)?[t,s,n,o]:G(pe,t)??[(e,t)=>t]]];return S(c,r),{as:e=>r[0]=e}},having:(e,t)=>S(y,F(e)?e:s=>s(e)===t),order:(e,t)=>S(M,[F(e)?e:t=>t(e)??0,t]),limit:(e,t)=>{r=x(t)?[0,e]:[e,t]}});const A=q(a);if(z(A))return k;const P=q(l);K(P,((e,[,t])=>D(G(P,t),(({3:t})=>x(e)?0:S(t,e)))));const Q=q(c);let j=I,N=p;if(v(M)&&x(r))N=b;else{E(t,N,b);const e=(e,t)=>{const n=G(s,e)??[],o=G(s,t)??[],r=M.findIndex(((e,t)=>n[t]!==o[t]));return r<0?0:Ie(n[r],o[r])*(M[r][1]?-1:1)},s=q(),n=q();C(N,t,v(M)?N.addRowIdsListener(t,(()=>W(n))):N.addRowListener(t,null,((e,o,r)=>{let a=null;if(N.hasRow(t,r)){const e=G(s,r)??[],o=N.getRow(t,r),l=e=>o[e];if(a=L(M,(([e])=>e(l,r))),h(e,a))return void(G(n,r)&&b.setRow(t,r,o))}U(s,r,a),W(n)})),N.addTableListener(t,(()=>{if(z(n)&&(b.delTable(t),N.hasTable(t))){const s=N.getTable(t);w(g(ie(s),e),(e=>U(n,e,0))),w(D(r,(([e,t])=>{return s=H(n),o=e,r=e+t,s.slice(o,r);var s,o,r}),(()=>H(n))),(e=>{b.setRow(t,e,s[e]),U(n,e,1)}))}})))}if(z(Q)&&v(y))j=N;else{E(t,j,N);const e=q();K(Q,((t,[s,n])=>te(V(e,s,ee),[t,n])));const s=ee();K(A,(t=>O(e,t)?0:te(s,t)));const n=q(),o=(s,n,o,r)=>D(s,(([s,a,l,i])=>{K(n,((t,[n])=>{const a=V(s,t,q),l=G(a,o),d=r?void 0:n;if(l!==d){const s=ee([[l,d]]),n=J(a);U(a,o,d),B(G(e,t),(([e,t])=>{const o=Se(i[e],n,a,s,t);i[e]=x(ge(o))?null:o}))}})),(z(a)||!f(y,(e=>e((e=>i[e]))))?N.delRow:N.setRow)(t,l,i)}));C(j,t,j.addRowListener(t,null,((r,a,l,i)=>{const d=[],c=[],u=q(),f=j.hasRow(t,l);let h=!f;B(s,(e=>{const[s,n,o]=i(t,l,e);S(d,n),S(c,o),h||=s})),K(e,(e=>{const[s,,n]=i(t,l,e);(h||s)&&U(u,e,[n])})),h&&o($(n,d,void 0,(([,e,s])=>{if(_(e,l),z(e))return N.delRow(t,s),1})),u,l,1),f&&o($(n,c,(()=>{const e={};return B(s,(s=>e[s]=j.getCell(t,l,s))),[q(),ee(),N.addRow(t,e,1),e]}),(([,e])=>{te(e,l)})),u,l)})))}E(t,e,j);const X=(n,o,r,a)=>{const l=t=>e.getCell(o,r,t);w(a,(s=>{const[o,,r,a,i]=G(P,s),d=r?.(l,n),[c,f]=G(i,n)??[];d!=c&&(x(f)||R(t,f),U(i,n,x(d)?null:[d,...u(t,1,e.addRowListener(o,d,(()=>X(n,o,d,a))))]))})),(n=>{const o=(t,o)=>e.getCell(...x(o)?[s,n,t]:t===s?[s,n,o]:[G(P,t)?.[0],G(G(P,t)?.[4],n)?.[0],o]);j.transaction((()=>f(d,(e=>e(o)))?K(A,((e,s)=>we(j,t,n,e,s(o,n)))):j.delRow(t,n)))})(n)},{3:Y}=G(P,null);return j.transaction((()=>u(t,1,e.addRowListener(s,null,((n,o,r)=>{e.hasRow(s,r)?X(r,s,r,Y):(j.delRow(t,r),B(P,(({4:e})=>D(G(e,r),(([,s])=>{R(t,s),U(e,r)})))))}))))),k},delQueryDefinition:e=>(K(G(y,e),((e,t)=>B(t,(t=>e.delListener(t))))),m(e),d(e),k),getStore:s,getQueryIds:o,forEachQuery:r,hasQuery:a,getTableId:l,getResultTable:e=>b.getTable(e),getResultRowIds:e=>b.getRowIds(e),getResultSortedRowIds:(e,t,s)=>b.getSortedRowIds(e,t,s),getResultRow:(e,t)=>b.getRow(e,t),getResultCellIds:(e,t)=>b.getCellIds(e,t),getResultCell:(e,t,s)=>b.getCell(e,t,s),hasResultTable:e=>b.hasTable(e),hasResultRow:(e,t)=>b.hasRow(e,t),hasResultCell:(e,t,s)=>b.hasCell(e,t,s),forEachResultTable:e=>b.forEachTable(e),forEachResultRow:(e,t)=>b.forEachRow(e,t),forEachResultCell:(e,t,s)=>b.forEachCell(e,t,s),addResultTableListener:(e,t)=>b.addTableListener(e,((e,...s)=>t(k,...s))),addResultRowIdsListener:(e,t,s)=>b.addRowIdsListener(e,((e,...s)=>t(k,...s)),s),addResultSortedRowIdsListener:(e,t,s,n)=>b.addSortedRowIdsListener(e,t,s,((e,...t)=>n(k,...t))),addResultRowListener:(e,t,s)=>b.addRowListener(e,t,((e,...t)=>s(k,...t))),addResultCellIdsListener:(e,t,s)=>b.addCellIdsListener(e,t,((e,...t)=>s(k,...t))),addResultCellListener:(e,t,s,n)=>b.addCellListener(e,t,s,((e,...t)=>n(k,...t))),delListener:e=>(b.delListener(e),k),destroy:c,getListenerStats:()=>{const{tables:e,tableIds:t,transaction:s,...n}=b.getListenerStats();return n}};return ce(k)})),xe=oe((e=>{const t=q(),s=q(),o=q(),r=q(),[a,l,i,d,c,u,,,f,h,R]=se(e,(()=>[q(),q(),q(),q()]),(e=>x(e)?void 0:e+n)),[g,w,L]=ae((()=>p)),I=(e,t,s)=>D(u(e),(([n,,o])=>{if(!O(o,t)){const r=ee();if(c(e)!=v(e))te(r,t);else{let e=t;for(;!x(e)&&!O(r,e);)te(r,e),e=G(n,e)}if(s)return r;U(o,t,r)}return G(o,t)})),T=(e,t)=>D(u(e),(([,,e])=>U(e,t))),v=e=>G(t,e),p={setRelationshipDefinition:(e,n,a,l)=>(U(t,e,a),f(e,n,((t,n)=>{const a=ee(),l=ee(),i=ee(),[d,c]=u(e);B(n,(([t,s],n)=>{x(t)||(te(l,t),D(G(c,t),(e=>{_(e,n),z(e)&&U(c,t)}))),x(s)||(te(l,s),O(c,s)||U(c,s,ee()),te(G(c,s),n)),te(a,n),U(d,n,s),K(G(r,e),(t=>{O(I(e,t),n)&&te(i,t)}))})),t(),B(a,(t=>w(s,[e,t]))),B(l,(t=>w(o,[e,t]))),B(i,(t=>{T(e,t),w(r,[e,t])}))}),ne(l)),p),delRelationshipDefinition:e=>(U(t,e),h(e),p),getStore:a,getRelationshipIds:l,forEachRelationship:t=>i((s=>t(s,(t=>e.forEachRow(c(s),t))))),hasRelationship:d,getLocalTableId:c,getRemoteTableId:v,getRemoteRowId:(e,t)=>G(u(e)?.[0],t),getLocalRowIds:(e,t)=>N(G(u(e)?.[1],t)),getLinkedRowIds:(e,t)=>x(u(e))?[t]:N(I(e,t,!0)),addRemoteRowIdListener:(e,t,n)=>g(n,s,[e,t]),addLocalRowIdsListener:(e,t,s)=>g(s,o,[e,t]),addLinkedRowIdsListener:(e,t,s)=>(I(e,t),g(s,r,[e,t])),delListener:e=>(T(...L(e)),p),destroy:R,getListenerStats:()=>({})};return ce(p)})),De=e=>[e,e],Ae=e=>0==((e,t=Q)=>t(e[0])+t(e[1]))(e),Fe=()=>[q(),q()],Pe=()=>[Fe(),Fe()],Je=(e,t,s,n=U)=>{const o=(r=H(e),a=e=>!ue(t,e),r.filter(a));var r,a;return w(ie(t),(n=>s(e,n,t[n]))),w(o,(t=>n(e,t))),e},Qe=(e,t,s)=>x(e)||!(e=>M(e,le)&&e.constructor==le)(e)||Re(e)||de(e)?(s?.(),!1):(he(e,((s,n)=>{t(s,n)||fe(e,n)})),!Re(e)),je=(e,t,s)=>U(e,t,G(e,t)==-s?void 0:s),Oe=()=>{let e,t,s=0,o=0;const r=q(),l=q(),c=q(),f=q(),R=q(),I=q(),T=q(),v=q(),p=Fe(),b=Pe(),m=Fe(),E=Pe(),k=Fe(),M=Fe(),P=Pe(),Q=Fe(),j=Fe(),N=Fe(),[$,se,ne,oe,re]=ae((()=>at)),le=(t,s)=>(!e||O(I,s)||_e(s))&&Qe(t,((e,t)=>ie(s,t,e)),(()=>_e(s))),ie=(e,t,s,n)=>Qe(n?s:Le(s,e,t),((n,o)=>D(de(e,t,o,n),(e=>(s[o]=e,!0)),(()=>!1))),(()=>_e(e,t))),de=(t,s,n,o)=>e?D(G(G(I,t),n),(e=>ge(o)!=e.type?_e(t,s,n,o,e.default):o),(()=>_e(t,s,n,o))):x(ge(o))?_e(t,s,n,o):o,Le=(e,t,s)=>(D(G(T,t),(([n,o])=>{B(n,((t,s)=>{ue(e,s)||(e[s]=t)})),B(o,(n=>{ue(e,n)||_e(t,s,n)}))})),e),ve=e=>Je(I,e,((e,t,s)=>{const n=q(),o=ee();Je(V(I,t,q),s,((e,t,s)=>{U(e,t,s),D(s.default,(e=>U(n,t,e)),(()=>te(o,t)))})),U(T,t,[n,o])}),((e,t)=>{U(I,t),U(T,t)})),pe=e=>Je(v,e,((e,t,s)=>Se(t,s)),((e,t)=>ke(t))),Se=(e,t)=>Je(V(v,e,(()=>(ze(e,1),q()))),t,((t,s,n)=>be(e,t,s,n)),((t,s)=>Me(e,t,s))),be=(e,t,s,n,o)=>Je(V(t,s,(()=>(Ne(e,s,1),q()))),n,((t,n,o)=>ye(e,s,t,n,o)),((n,r)=>xe(e,t,s,n,r,o))),ye=(e,t,s,n,o)=>{O(s,n)||We(e,t,n,1);const r=G(s,n);o!==r&&(Be(e,t,n,r,o),U(s,n,o))},Ce=(e,t,s,n,o)=>D(G(t,s),(t=>ye(e,s,t,n,o)),(()=>be(e,t,s,Le({[n]:o},e,s)))),me=e=>{const t=n+s++;return O(e,t)?me(e):t},Ee=e=>G(v,e)??Se(e,{}),ke=e=>Se(e,{}),Me=(e,t,s)=>be(e,t,s,{},!0),xe=(e,t,s,n,o,r)=>{const a=G(G(T,e)?.[0],o);if(!x(a)&&!r)return ye(e,s,n,o,a);const l=t=>{Be(e,s,t,G(n,t)),We(e,s,t,-1),U(n,t)};x(a)?l(o):K(n,l),z(n)&&(Ne(e,s,-1),z(U(t,s))&&(ze(e,-1),U(v,e)))},ze=(e,t)=>je(z(r)?U(r,null,oe(b[0][1])||oe(b[1][1])?Xe():0):r,e,t),Ne=(e,t,s)=>je(V(l,e,(()=>q([[null,oe(E[0][1],[e])||oe(E[1][1],[e])?Ye(e):0]]))),t,s),We=(e,t,s,n)=>je(V(V(c,e,q),t,(()=>q([[null,oe(P[0][1],[e,t])||oe(P[1][1],[e,t])?$e(e,t):0]]))),s,n),Be=(e,t,s,n,o)=>V(V(V(f,e,q),t,q),s,(()=>[n,0]))[1]=o,_e=(e,t,s,n,o)=>(S(V(V(V(R,e,q),t,q),s,(()=>[])),n),o),qe=(e,t,s)=>D(G(G(G(f,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...De(et(e,t,s))])),He=e=>z(R)||z(j[e])?0:B(e?Y(R,Z):R,((t,s)=>B(t,((t,n)=>B(t,((t,o)=>se(j[e],[s,n,o],t))))))),Ge=(e,t,s,n)=>J(t)>1?(se(e[0],n),se(e[1],n),1):z(t)||0==G(t,null)||h(G(t,null),s(...n??[]))?void 0:(se(e[1],n),1),Ke=e=>{const t=z(k[e]),s=Ae(P[e])&&Ae(E[e])&&t&&Ae(b[e]),n=z(Q[e])&&z(M[e])&&z(m[e])&&z(p[e]);if(!s||!n){const o=e?[Y(r),Z(l),Y(c,Z),Y(f,Z)]:[r,l,c,f];if(!s){B(o[2],((t,s)=>B(t,((t,n)=>Ge(P[e],t,$e,[s,n])))));const s=ee();B(o[1],((n,o)=>{Ge(E[e],n,Ye,[o])&&!t&&(se(k[e],[o,null]),te(s,o))})),t||B(o[3],((t,n)=>{if(!O(s,n)){const s=ee();B(t,(e=>B(e,(([t,n],o)=>n!==t?te(s,o):_(e,o))))),B(s,(t=>se(k[e],[n,t])))}})),Ge(b[e],o[0],Xe)}if(!n){let t;B(o[3],((s,n)=>{let o;B(s,((s,r)=>{let a;B(s,(([s,l],i)=>{l!==s&&(se(Q[e],[n,r,i],l,s,qe),t=o=a=1)})),a&&se(M[e],[n,r],qe)})),o&&se(m[e],[n],qe)})),t&&se(p[e],void 0,qe)}}},Ue=(e,...t)=>(nt((()=>e(...L(t,Te)))),at),Ve=()=>X(v,(e=>X(e,X))),Xe=()=>H(v),Ye=e=>H(G(v,Te(e))),Ze=(e,t,s)=>{const n=[];return K(G(v,Te(e)),((e,s)=>S(n,[x(t)?e:G(s,Te(t)),e]))),L(g(n,(([e],[t])=>Ie(e,t)*(s?-1:1))),(([,e])=>e))},$e=(e,t)=>H(G(G(v,Te(e)),Te(t))),et=(e,t,s)=>G(G(G(v,Te(e)),Te(t)),Te(s)),tt=e=>Ue((()=>(e=>Qe(e,le,_e))(e)?pe(e):0)),st=()=>Ue((()=>pe({}))),nt=(e,t)=>{if(-1==o)return;ot();const s=e?.();return rt(t),s},ot=()=>(o++,at),rt=e=>(o>0&&(o--,0==o&&(t=!z(f),o=1,He(1),t&&Ke(1),o=-1,e?.(X(f,(e=>X(e,(e=>X(e,(e=>[...e]),(([e,t])=>e===t))),Re)),Re),X(R,(e=>X(e,X))))&&(o=1,B(f,((e,t)=>B(e,((e,s)=>B(e,(([e],n)=>we(at,t,s,n,e))))))),o=-1,t=!1),se(N[0],void 0,t),He(0),t&&Ke(0),se(N[1],void 0,t),o=0,w([f,R,r,l,c],W))),at),at={getTables:Ve,getTableIds:Xe,getTable:e=>X(G(v,Te(e)),X),getRowIds:Ye,getSortedRowIds:Ze,getRow:(e,t)=>X(G(G(v,Te(e)),Te(t))),getCellIds:$e,getCell:et,hasTables:()=>!z(v),hasTable:e=>O(v,Te(e)),hasRow:(e,t)=>O(G(v,Te(e)),Te(t)),hasCell:(e,t,s)=>O(G(G(v,Te(e)),Te(t)),Te(s)),getJson:()=>y(v),getSchemaJson:()=>y(I),setTables:tt,setTable:(e,t)=>Ue((e=>le(t,e)?Se(e,t):0),e),setRow:(e,t,s)=>Ue(((e,t)=>ie(Te(e),Te(t),s)?be(Te(e),Ee(Te(e)),Te(t),s):0),e,t),addRow:(e,t,s)=>nt((()=>{e=Te(e);const n=ie(e,void 0,t),o=n||s?me(G(v,e)):void 0;return n&&be(e,Ee(e),o,t),o})),setPartialRow:(e,t,s)=>Ue(((e,t)=>{if(ie(e,t,s,1)){const n=Ee(e);he(s,((s,o)=>Ce(e,n,t,o,s)))}}),e,t),setCell:(e,t,s,n)=>Ue(((e,t,s)=>D(de(e,t,s,F(n)?n(et(e,t,s)):n),(n=>Ce(e,Ee(e),t,s,n)))),e,t,s),setJson:e=>{try{"{}"===e?st():tt(C(e))}catch{}return at},setSchema:t=>Ue((()=>{if((e=(e=>Qe(e,(e=>Qe(e,(e=>{if(!Qe(e,((e,t)=>u([i,d],t))))return!1;const t=e.type;return!(!A(t)&&t!=a||(ge(e.default)!=t&&fe(e,d),0))})))))(t))&&(ve(t),!z(v))){const e=Ve();st(),tt(e)}})),delTables:st,delTable:e=>Ue((e=>O(v,e)?ke(e):0),e),delRow:(e,t)=>Ue(((e,t)=>D(G(v,e),(s=>O(s,t)?Me(e,s,t):0))),e,t),delCell:(e,t,s,n)=>Ue(((e,t,s)=>D(G(v,e),(o=>D(G(o,t),(r=>O(r,s)?xe(e,o,t,r,s,n):0))))),e,t,s),delSchema:()=>Ue((()=>{ve({}),e=!1})),transaction:nt,startTransaction:ot,finishTransaction:rt,forEachTable:e=>B(v,((t,s)=>e(s,(e=>B(t,((t,s)=>e(s,(e=>K(t,e))))))))),forEachRow:(e,t)=>B(G(v,Te(e)),((e,s)=>t(s,(t=>K(e,t))))),forEachCell:(e,t,s)=>K(G(G(v,Te(e)),Te(t)),s),addTablesListener:(e,t)=>$(e,p[t?1:0]),addTableIdsListener:(e,t,s)=>$(e,b[s?1:0][t?1:0]),addTableListener:(e,t,s)=>$(t,m[s?1:0],[e]),addRowIdsListener:(e,t,s,n)=>$(t,E[n?1:0][s?1:0],[e]),addSortedRowIdsListener:(e,t,s,n,o)=>{let r=Ze(e,t,s);return $((()=>{const o=Ze(e,t,s);h(o,r)||(r=o,n(at,e,t,s,r))}),k[o?1:0],[e,t])},addRowListener:(e,t,s,n)=>$(s,M[n?1:0],[e,t]),addCellIdsListener:(e,t,s,n,o)=>$(s,P[o?1:0][n?1:0],[e,t]),addCellListener:(e,t,s,n,o)=>$(n,Q[o?1:0],[e,t,s]),addInvalidCellListener:(e,t,s,n,o)=>$(n,j[o?1:0],[e,t,s]),addWillFinishTransactionListener:e=>$(e,N[0]),addDidFinishTransactionListener:e=>$(e,N[1]),callListener:e=>(re(e,[Xe,Ye,$e],(e=>x(e[2])?[]:De(et(...e)))),at),delListener:e=>(ne(e),at),getListenerStats:()=>({}),createStore:Oe};return ce(at)};e.createCheckpoints=Le,e.createCustomPersister=ye,e.createFilePersister=(e,s)=>{let n;return ye(e,(async()=>{try{return await t.promises.readFile(s,c)}catch{}}),(async e=>{try{await t.promises.writeFile(s,e,c)}catch{}}),(e=>{n=t.watch(s,e)}),(()=>{n?.close(),n=void 0}))},e.createIndexes=ve,e.createLocalPersister=(e,t)=>Ee(e,t,localStorage),e.createMetrics=be,e.createQueries=Me,e.createRelationships=xe,e.createRemotePersister=(e,t,s,n)=>{let o,r;return ye(e,(async()=>{const e=await fetch(t);return r=ke(e),e.text()}),(async e=>await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:e})),(e=>{o=setInterval((async()=>{const s=await fetch(t,{method:"HEAD"}),n=ke(s);x(r)||x(n)||n==r||(r=n,e())}),1e3*n)}),(()=>{D(o,clearInterval),o=void 0}))},e.createSessionPersister=(e,t)=>Ee(e,t,sessionStorage),e.createStore=Oe,e.defaultSorter=Ie,e.id=Te,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("fs")):"function"==typeof define&&define.amd?define(["exports","fs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBase={},e.fs);
