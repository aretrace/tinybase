var e,t;e=this,t=function(e,t){"use strict";const s=e=>typeof e,n="",o=s(n),r=s(!0),a=s(0),i=s(s),l="type",d="default",c="utf8",u="Listener",f="Result",h="add",g="Table",w="RowIds",L="CellIds",p="Cell",v=(e,t)=>e.includes(t),R=(e,t)=>e.every(t),I=(e,t)=>R(e,((s,n)=>0==n||t(e[n-1],s)<=0)),y=(e,t)=>e.sort(t),S=(e,t)=>e.forEach(t),T=(e,t)=>e.map(t),b=e=>E(e,((e,t)=>e+t),0),C=e=>e.length,m=e=>0==C(e),E=(e,t,s)=>e.reduce(t,s),k=(e,t,s)=>e.slice(t,s),M=(e,...t)=>e.push(...t),x=e=>e.pop(),D=e=>JSON.stringify(e,((e,t)=>Q(t,Map)?E([...t],((e,[t,s])=>(e[t]=s,e)),{}):t)),A=JSON.parse,F=Math.max,P=Math.min,J=isFinite,Q=(e,t)=>e instanceof t,j=e=>null==e,O=(e,t,s)=>j(e)?s?.():t(e),z=e=>e==o||e==r,N=e=>s(e)==i,W=()=>{},B=e=>e.size,_=(e,t)=>e?.has(t)??!1,q=e=>j(e)||0==B(e),H=e=>[...e?.values()??[]],G=e=>e.clear(),K=(e,t)=>e?.forEach(t),U=(e,t)=>e?.delete(t),V=e=>new Map(e),X=e=>[...e?.keys()??[]],Y=(e,t)=>e?.get(t),Z=(e,t)=>K(e,((e,s)=>t(s,e))),$=(e,t,s)=>j(s)?(U(e,t),e):e?.set(t,s),ee=(e,t,s)=>(_(e,t)||$(e,t,s()),Y(e,t)),te=(e,t,s)=>{const n={},o=t??(e=>e);return K(e,((e,t)=>O(o(e),(e=>s?.(e)?0:n[t]=e)))),n},se=(e,t)=>{const s=V(),n=t??(e=>e);return K(e,((e,t)=>s.set(t,n(e)))),s},ne=e=>se(e,se),oe=(e,t,s,n,o=0)=>O((s?ee:Y)(e,t[o],o>C(t)-2?s:V),(r=>{if(o>C(t)-2)return n?.(r)&&$(e,t[o]),r;const a=oe(r,t,s,n,o+1);return q(r)&&$(e,t[o]),a})),re=e=>new Set(e),ae=(e,t)=>e?.add(t),ie=(e,t,s)=>{const n=e.hasRow,o=V(),r=V(),a=V(),i=V(),l=V(),d=(t,s,...n)=>{const o=ee(l,t,re);return S(n,(t=>ae(o,t)&&s&&e.callListener(t))),n},c=(t,...s)=>O(Y(l,t),(n=>{S(m(s)?H(n):s,(t=>{e.delListener(t),U(n,t)})),q(n)&&$(l,t)})),u=(e,s)=>{$(o,e,s),_(r,e)||($(r,e,t()),$(a,e,V()),$(i,e,V()))},f=e=>{$(o,e),$(r,e),$(a,e),$(i,e),c(e)};return[()=>e,()=>X(o),e=>Z(r,e),e=>_(r,e),e=>Y(o,e),e=>Y(r,e),(e,t)=>$(r,e,t),u,(t,o,r,l,f)=>{u(t,o);const h=V(),g=V(),w=Y(a,t),L=Y(i,t),p=t=>{const r=s=>e.getCell(o,t,s),a=Y(w,t),i=n(o,t)?s(l(r,t)):void 0;if(a!=i&&$(h,t,[a,i]),!j(f)){const e=Y(L,t),s=n(o,t)?f(r,t):void 0;e!=s&&$(g,t,s)}},v=e=>{r((()=>{K(h,(([,e],t)=>$(w,t,e))),K(g,((e,t)=>$(L,t,e)))}),h,g,w,L,e),G(h),G(g)};Z(w,p),e.hasTable(o)&&S(e.getRowIds(o),(e=>{_(w,e)||p(e)})),v(!0),c(t),d(t,0,e.addRowListener(o,null,((e,t,s)=>p(s))),e.addTableListener(o,(()=>v())))},f,()=>Z(l,f),d,c]},le=(e,t)=>s(e)==o?t=>t(e):e??(()=>t??n),de=e=>{const t=new WeakMap;return s=>(t.has(s)||t.set(s,e(s)),t.get(s))},ce=e=>{let t,s=0;const o=[],r=V();return[(a,i,l)=>{t??=e();const d=x(o)??n+s++;return $(r,d,[a,i,l]),ae(oe(i,l??[n],re),d),d},(e,s,...o)=>S(((e,t=[n])=>{const s=[],o=(e,n)=>n==C(t)?M(s,e):null===t[n]?K(e,(e=>o(e,n+1))):S([t[n],null],(t=>o(Y(e,t),n+1)));return o(e,0),s})(e,s),(e=>K(e,(e=>Y(r,e)[0](t,...s??[],...o))))),e=>O(Y(r,e),(([,t,s])=>(oe(t,s??[n],void 0,(t=>(U(t,e),q(t)?1:0))),$(r,e),C(o)<1e3&&M(o,e),s))),(e,s,n)=>O(Y(r,e),(([e,,o=[]])=>{const r=(...a)=>{const i=C(a);i==C(o)?e(t,...a,...n(a)):j(o[i])?S(s[i](...a),(e=>r(...a,e))):r(...a,o[i])};r()}))]},ue=Object,fe=ue.keys,he=ue.isFrozen,ge=ue.freeze,we=(e,t)=>!j(((e,t)=>O(e,(e=>e[t])))(e,t)),Le=(e,t)=>delete e[t],pe=(e,t)=>S(ue.entries(e),(([e,s])=>t(s,e))),ve=e=>m(fe(e)),Re=e=>{const t=s(e);return z(t)||t==a&&J(e)?t:void 0},Ie=(e,t,s,n,o)=>j(o)?e.delCell(t,s,n,!0):e.setCell(t,s,n,o),ye=de((e=>{let t,s,o,r=100,a=V(),i=1;const l=V(),d=V(),[c,u,f]=ce((()=>J)),h=V(),g=V(),w=[],L=[],p=(t,s)=>{i=0,e.transaction((()=>K(Y(h,s),((s,n)=>K(s,((s,o)=>K(s,((s,r)=>Ie(e,n,o,r,s[t]))))))))),i=1},R=e=>{$(h,e),$(g,e),u(d,[e])},I=(e,t)=>S(((e,t)=>e.splice(0,t))(e,t??C(e)),R),y=()=>I(w,C(w)-r),T=e.addCellListener(null,null,null,((e,s,n,r,l,d)=>{if(i){O(t,(()=>{M(w,t),y(),I(L),t=void 0,o=1}));const e=ee(a,s,V),i=ee(e,n,V),c=ee(i,r,(()=>[d,void 0]));c[1]=l,c[0]===l&&q($(i,r))&&q($(e,n))&&q($(a,s))&&(t=x(w),o=1),D()}})),b=(e="")=>(j(t)&&(t=n+s++,$(h,t,a),F(t,e),a=V(),o=1),t),E=()=>{m(w)||(L.unshift(b()),p(0,t),t=x(w),o=1)},k=()=>{m(L)||(M(w,t),t=L.shift(),p(1,t),o=1)},D=()=>{o&&(u(l),o=0)},A=e=>{const t=b(e);return D(),t},F=(e,t)=>(P(e)&&Y(g,e)!==t&&($(g,e,t),u(d,[e])),J),P=e=>_(h,e),J={setSize:e=>(r=e,y(),J),addCheckpoint:A,setCheckpoint:F,getStore:()=>e,getCheckpointIds:()=>[[...w],t,[...L]],forEachCheckpoint:e=>Z(g,e),hasCheckpoint:P,getCheckpoint:e=>Y(g,e),goBackward:()=>(E(),D(),J),goForward:()=>(k(),D(),J),goTo:e=>{const s=v(w,e)?E:v(L,e)?k:null;for(;!j(s)&&e!=t;)s();return D(),J},addCheckpointIdsListener:e=>c(e,l),addCheckpointListener:(e,t)=>c(t,d,[e]),delListener:e=>(f(e),J),clear:()=>(I(w),I(L),j(t)||R(t),t=void 0,s=0,A(),J),destroy:()=>{e.delListener(T)},getListenerStats:()=>({})};return ge(J.clear())})),Se=(e,t)=>e<t?-1:1,Te=e=>n+e,be=de((e=>{const t=V(),s=V(),[o,r,a,i,l,d,c,,u,f,h]=ie(e,V,(e=>j(e)?n:e+n)),[g,w,L]=ce((()=>v)),p=(t,s,n)=>{const o=l(t);K(n,((t,n)=>s(n,(s=>K(t,(t=>s(t,(s=>e.forEachCell(o,t,s)))))))))},v={setIndexDefinition:(e,n,o,r,a,i=Se)=>{const l=j(a)?void 0:([e],[t])=>a(e,t);return u(e,n,((n,o,a,u,f,h)=>{let g=0;const L=re(),p=re(),v=d(e);if(K(o,(([e,t],s)=>{j(e)||(ae(L,e),O(Y(v,e),(t=>{U(t,s),q(t)&&($(v,e),g=1)}))),j(t)||(ae(L,t),_(v,t)||($(v,t,re()),g=1),ae(Y(v,t),s),j(r)||ae(p,t))})),n(),q(f)||(h?Z(v,(e=>ae(p,e))):Z(a,(e=>O(Y(u,e),(e=>ae(p,e))))),K(p,(e=>{const t=(t,s)=>i(Y(f,t),Y(f,s),e),s=[...Y(v,e)];I(s,t)||($(v,e,re(y(s,t))),ae(L,e))}))),(g||h)&&!j(l)){const t=[...v];I(t,l)||(c(e,V(y(t,l))),g=1)}g&&w(t,[e]),K(L,(t=>w(s,[e,t])))}),le(o),O(r,le)),v},delIndexDefinition:e=>(f(e),v),getStore:o,getIndexIds:r,forEachIndex:e=>a(((t,s)=>e(t,(e=>p(t,e,s))))),forEachSlice:(e,t)=>p(e,t,d(e)),hasIndex:i,hasSlice:(e,t)=>_(d(e),t),getTableId:l,getSliceIds:e=>X(d(e)),getSliceRowIds:(e,t)=>H(Y(d(e),t)),addSliceIdsListener:(e,s)=>g(s,t,[e]),addSliceRowIdsListener:(e,t,n)=>g(n,s,[e,t]),delListener:e=>(L(e),v),destroy:h,getListenerStats:()=>({})};return ge(v)})),Ce=V([["avg",[(e,t)=>b(e)/t,(e,t,s)=>e+(t-e)/(s+1),(e,t,s)=>e+(e-t)/(s-1),(e,t,s,n)=>e+(t-s)/n]],["max",[e=>F(...e),(e,t)=>F(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:F(t,e)]],["min",[e=>P(...e),(e,t)=>P(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:P(t,e)]],["sum",[e=>b(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,s)=>e-s+t]]]),me=(e,t,s,n,o,r=!1)=>{if(q(s))return;const[a,i,l,d]=o;return r||=j(e),K(n,(([s,n])=>{r||(e=j(s)?i?.(e,n,t++):j(n)?l?.(e,s,t--):d?.(e,n,s,t),r||=j(e))})),r?a(H(s),B(s)):e},Ee=de((e=>{const t=V(),[s,o,r,a,i,l,d,,c,u,f]=ie(e,W,(e=>isNaN(e)||j(e)||!0===e||!1===e||e===n?void 0:1*e)),[h,g,w]=ce((()=>L)),L={setMetricDefinition:(e,s,n,o,r,a,i)=>{const u=N(n)?[n,r,a,i]:Y(Ce,n)??Y(Ce,"sum");return c(e,s,((s,n,o,r,a,i)=>{const c=l(e),f=B(r);i||=j(c),s();let h=me(c,f,r,n,u,i);J(h)||(h=void 0),h!=c&&(d(e,h),g(t,[e],h,c))}),le(o,1)),L},delMetricDefinition:e=>(u(e),L),getStore:s,getMetricIds:o,forEachMetric:r,hasMetric:a,getTableId:i,getMetric:l,addMetricListener:(e,s)=>h(s,t,[e]),delListener:e=>(w(e),L),destroy:f,getListenerStats:()=>({})};return ge(L)})),ke=(e,t,s,o,r)=>{let a,i=0;const l={load:async s=>{if(2!=i){i=1;const o=await t();j(o)||o==n?e.setTables(s):e.setJson(o),i=0}return l},startAutoLoad:async e=>(l.stopAutoLoad(),await l.load(e),o(l.load),l),stopAutoLoad:()=>(r(),l),save:async()=>(1!=i&&(i=2,await s(e.getJson()),i=0),l),startAutoSave:async()=>(await l.stopAutoSave().save(),a=e.addTablesListener((()=>l.save())),l),stopAutoSave:()=>(O(a,e.delListener),l),getStore:()=>e,destroy:()=>l.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return ge(l)},Me="storage",xe=globalThis.window,De=(e,t,s)=>{let n;return ke(e,(async()=>s.getItem(t)),(async e=>s.setItem(t,e)),(e=>{n=n=>{n.storageArea===s&&n.key===t&&e()},xe.addEventListener(Me,n)}),(()=>{xe.removeEventListener(Me,n),n=void 0}))},Ae=e=>e.headers.get("ETag"),Fe=de((e=>{const t=e.createStore,[s,o,r,a,i,,,l,,d,c,v,I]=ie(e,(()=>!0),W),y=t(),T=t(),b=V(),E=(e,t,...s)=>S(s,(s=>ae(ee(ee(b,t,V),e,re),s))),x=e=>{Z(Y(b,e),((e,t)=>K(t,(t=>e.delListener(t))))),S([T,y],(t=>t.delTable(e)))},D=(e,t,s)=>E(t,e,t.addWillFinishTransactionListener(s.startTransaction),t.addDidFinishTransactionListener((()=>s.finishTransaction()))),A={setQueryDefinition:(t,s,o)=>{l(t,s),x(t);const r=[],a=[[null,[s,null,null,[],V()]]],i=[],d=[],c=[];o({select:(e,t)=>{const s=N(e)?[C(r)+n,e]:[j(t)?e:t,s=>s(e,t)];return M(r,s),{as:e=>s[0]=e}},join:(e,t,s)=>{const n=j(s)||N(t)?null:t,o=j(n)?t:s,r=[e,[e,n,N(o)?o:e=>e(o),[],V()]];return M(a,r),{as:e=>r[0]=e}},where:(e,t,s)=>M(i,N(e)?e:j(s)?s=>s(e)===t:n=>n(e,t)===s),group:(e,t,s,n,o)=>{const r=[e,[e,N(t)?[t,s,n,o]:Y(Ce,t)??[(e,t)=>t]]];return M(d,r),{as:e=>r[0]=e}},having:(e,t)=>M(c,N(e)?e:s=>s(e)===t)});const u=V(r);if(q(u))return A;const f=V(a);Z(f,((e,[,t])=>O(Y(f,t),(({3:t})=>j(e)?0:M(t,e)))));const h=V(d);let g=y;if(q(h)&&m(c))g=T;else{D(t,g,T);const e=V();Z(h,((t,[s,n])=>ae(ee(e,s,re),[t,n])));const s=re();Z(u,(t=>_(e,t)?0:ae(s,t)));const n=V(),o=(s,n,o,r)=>O(s,(([s,a,i,l])=>{Z(n,((t,[n])=>{const a=ee(s,t,V),i=Y(a,o),d=r?void 0:n;if(i!==d){const s=re([[i,d]]),n=B(a);$(a,o,d),K(Y(e,t),(([e,t])=>{const o=me(l[e],n,a,s,t);l[e]=j(Re(o))?null:o}))}})),(q(a)||!R(c,(e=>e((e=>l[e]))))?T.delRow:T.setRow)(t,i,l)}));E(g,t,g.addRowListener(t,null,((r,a,i,l)=>{const d=[],c=[],u=V(),f=g.hasRow(t,i);let h=!f;K(s,(e=>{const[s,n,o]=l(t,i,e);M(d,n),M(c,o),h||=s})),Z(e,(e=>{const[s,,n]=l(t,i,e);(h||s)&&$(u,e,[n])})),h&&o(oe(n,d,void 0,(([,e,s])=>{if(U(e,i),q(e))return T.delRow(t,s),1})),u,i,1),f&&o(oe(n,c,(()=>{const e={};return K(s,(s=>e[s]=g.getCell(t,i,s))),[V(),re(),T.addRow(t,e,1),e]}),(([,e])=>{ae(e,i)})),u,i)})))}D(t,e,g);const w=(n,o,r,a)=>{const l=t=>e.getCell(o,r,t);S(a,(s=>{const[o,,r,a,i]=Y(f,s),d=r?.(l,n),[c,u]=Y(i,n)??[];d!=c&&(j(u)||I(t,u),$(i,n,j(d)?null:[d,...v(t,1,e.addRowListener(o,d,(()=>w(n,o,d,a))))]))})),(n=>{const o=(t,o)=>e.getCell(...j(o)?[s,n,t]:t===s?[s,n,o]:[Y(f,t)?.[0],Y(Y(f,t)?.[4],n)?.[0],o]);g.transaction((()=>R(i,(e=>e(o)))?Z(u,((e,s)=>Ie(g,t,n,e,s(o,n)))):g.delRow(t,n)))})(n)},{3:L}=Y(f,null);return g.transaction((()=>v(t,1,e.addRowListener(s,null,((n,o,r)=>{e.hasRow(s,r)?w(r,s,r,L):(g.delRow(t,r),K(f,(({4:e})=>O(Y(e,r),(([,s])=>{I(t,s),$(e,r)})))))}))))),A},delQueryDefinition:e=>(x(e),d(e),A),getStore:s,getQueryIds:o,forEachQuery:r,hasQuery:a,getTableId:i,delListener:e=>(T.delListener(e),A),destroy:c,getListenerStats:()=>{const{tables:e,tableIds:t,transaction:s,...n}=T.getListenerStats();return n}};return pe({[g]:[1,1],[w]:[0,1],SortedRowIds:[0,5],Row:[1,2],[L]:[0,2],[p]:[1,3]},(([e,t],s)=>{S(e?["get","has","forEach"]:["get"],(e=>A[e+f+s]=(...t)=>T[e+s](...t))),A[h+f+s+u]=(...e)=>T[h+s+u](...k(e,0,t),((s,...n)=>e[t](A,...n)))})),ge(A)})),Pe=de((e=>{const t=V(),s=V(),o=V(),r=V(),[a,i,l,d,c,u,,,f,h,g]=ie(e,(()=>[V(),V(),V(),V()]),(e=>j(e)?void 0:e+n)),[w,L,p]=ce((()=>y)),v=(e,t,s)=>O(u(e),(([n,,o])=>{if(!_(o,t)){const r=re();if(c(e)!=I(e))ae(r,t);else{let e=t;for(;!j(e)&&!_(r,e);)ae(r,e),e=Y(n,e)}if(s)return r;$(o,t,r)}return Y(o,t)})),R=(e,t)=>O(u(e),(([,,e])=>$(e,t))),I=e=>Y(t,e),y={setRelationshipDefinition:(e,n,a,i)=>($(t,e,a),f(e,n,((t,n)=>{const a=re(),i=re(),l=re(),[d,c]=u(e);K(n,(([t,s],n)=>{j(t)||(ae(i,t),O(Y(c,t),(e=>{U(e,n),q(e)&&$(c,t)}))),j(s)||(ae(i,s),_(c,s)||$(c,s,re()),ae(Y(c,s),n)),ae(a,n),$(d,n,s),Z(Y(r,e),(t=>{_(v(e,t),n)&&ae(l,t)}))})),t(),K(a,(t=>L(s,[e,t]))),K(i,(t=>L(o,[e,t]))),K(l,(t=>{R(e,t),L(r,[e,t])}))}),le(i)),y),delRelationshipDefinition:e=>($(t,e),h(e),y),getStore:a,getRelationshipIds:i,forEachRelationship:t=>l((s=>t(s,(t=>e.forEachRow(c(s),t))))),hasRelationship:d,getLocalTableId:c,getRemoteTableId:I,getRemoteRowId:(e,t)=>Y(u(e)?.[0],t),getLocalRowIds:(e,t)=>H(Y(u(e)?.[1],t)),getLinkedRowIds:(e,t)=>j(u(e))?[t]:H(v(e,t,!0)),addRemoteRowIdListener:(e,t,n)=>w(n,s,[e,t]),addLocalRowIdsListener:(e,t,s)=>w(s,o,[e,t]),addLinkedRowIdsListener:(e,t,s)=>(v(e,t),w(s,r,[e,t])),delListener:e=>(R(...p(e)),y),destroy:g,getListenerStats:()=>({})};return ge(y)})),Je=e=>[e,e],Qe=()=>[V(),V()],je=(e,t,s,n=$)=>{const o=(r=X(e),a=e=>!we(t,e),r.filter(a));var r,a;return S(fe(t),(n=>s(e,n,t[n]))),S(o,(t=>n(e,t))),e},Oe=(e,t,s)=>j(e)||!(e=>Q(e,ue)&&e.constructor==ue)(e)||ve(e)||he(e)?(s?.(),!1):(pe(e,((s,n)=>{t(s,n)||Le(e,n)})),!ve(e)),ze=(e,t,s)=>$(e,t,Y(e,t)==-s?void 0:s),Ne=()=>{let e,t,s=0,o=0;const r=V(),i=V(),c=V(),f=V(),I=V(),b=V(),m=V(),E=V(),x=Qe(),F=Qe(),P=Qe(),J=Qe(),Q=Qe(),W=Qe(),B=Qe(),H=Qe(),oe=Qe(),ie=Qe(),[le,de,ue,fe]=ce((()=>ct)),he=(t,s)=>(!e||_(b,s)||Ke(s))&&Oe(t,((e,t)=>ye(s,t,e)),(()=>Ke(s))),ye=(e,t,s,n)=>Oe(n?s:Ce(s,e,t),((n,o)=>O(be(e,t,o,n),(e=>(s[o]=e,!0)),(()=>!1))),(()=>Ke(e,t))),be=(t,s,n,o)=>e?O(Y(Y(b,t),n),(e=>Re(o)!=e.type?Ke(t,s,n,o,e.default):o),(()=>Ke(t,s,n,o))):j(Re(o))?Ke(t,s,n,o):o,Ce=(e,t,s)=>(O(Y(m,t),(([n,o])=>{K(n,((t,s)=>{we(e,s)||(e[s]=t)})),K(o,(n=>{we(e,n)||Ke(t,s,n)}))})),e),me=e=>je(b,e,((e,t,s)=>{const n=V(),o=re();je(ee(b,t,V),s,((e,t,s)=>{$(e,t,s),O(s.default,(e=>$(n,t,e)),(()=>ae(o,t)))})),$(m,t,[n,o])}),((e,t)=>{$(b,t),$(m,t)})),Ee=e=>je(E,e,((e,t,s)=>ke(t,s)),((e,t)=>Pe(t))),ke=(e,t)=>je(ee(E,e,(()=>(_e(e,1),V()))),t,((t,s,n)=>Me(e,t,s,n)),((t,s)=>We(e,t,s))),Me=(e,t,s,n,o)=>je(ee(t,s,(()=>(qe(e,s,1),V()))),n,((t,n,o)=>xe(e,s,t,n,o)),((n,r)=>Be(e,t,s,n,r,o))),xe=(e,t,s,n,o)=>{_(s,n)||He(e,t,n,1);const r=Y(s,n);o!==r&&(Ge(e,t,n,r,o),$(s,n,o))},De=(e,t,s,n,o)=>O(Y(t,s),(t=>xe(e,s,t,n,o)),(()=>Me(e,t,s,Ce({[n]:o},e,s)))),Ae=e=>{const t=n+s++;return _(e,t)?Ae(e):t},Fe=e=>Y(E,e)??ke(e,{}),Pe=e=>ke(e,{}),We=(e,t,s)=>Me(e,t,s,{},!0),Be=(e,t,s,n,o,r)=>{const a=Y(Y(m,e)?.[0],o);if(!j(a)&&!r)return xe(e,s,n,o,a);const i=t=>{Ge(e,s,t,Y(n,t)),He(e,s,t,-1),$(n,t)};j(a)?i(o):Z(n,i),q(n)&&(qe(e,s,-1),q($(t,s))&&(_e(e,-1),$(E,e)))},_e=(e,t)=>ze(r,e,t),qe=(e,t,s)=>ze(ee(i,e,V),t,s),He=(e,t,s,n)=>ze(ee(ee(c,e,V),t,V),s,n),Ge=(e,t,s,n,o)=>ee(ee(ee(f,e,V),t,V),s,(()=>[n,0]))[1]=o,Ke=(e,t,s,n,o)=>(M(ee(ee(ee(I,e,V),t,V),s,(()=>[])),n),o),Ue=(e,t,s)=>O(Y(Y(Y(f,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...Je(ot(e,t,s))])),Ve=e=>q(I)||q(oe[e])?0:K(e?se(I,ne):I,((t,s)=>K(t,((t,n)=>K(t,((t,o)=>de(oe[e],[s,n,o],t))))))),Xe=(e,t,s)=>{if(!q(t))return de(e,s),1},Ye=e=>{const t=q(Q[e]),s=q(B[e])&&q(J[e])&&t&&q(F[e]),n=q(H[e])&&q(W[e])&&q(P[e])&&q(x[e]);if(!s||!n){const o=e?[se(r),ne(i),se(c,ne),se(f,ne)]:[r,i,c,f];if(!s){K(o[2],((t,s)=>K(t,((t,n)=>Xe(B[e],t,[s,n])))));const s=re();K(o[1],((n,o)=>{Xe(J[e],n,[o])&&!t&&(de(Q[e],[o,null]),ae(s,o))})),t||K(o[3],((t,n)=>{if(!_(s,n)){const s=re();K(t,(e=>K(e,(([t,n],o)=>n!==t?ae(s,o):U(e,o))))),K(s,(t=>de(Q[e],[n,t])))}})),Xe(F[e],o[0])}if(!n){let t;K(o[3],((s,n)=>{let o;K(s,((s,r)=>{let a;K(s,(([s,i],l)=>{i!==s&&(de(H[e],[n,r,l],i,s,Ue),t=o=a=1)})),a&&de(W[e],[n,r],Ue)})),o&&de(P[e],[n],Ue)})),t&&de(x[e],void 0,Ue)}}},Ze=(e,...t)=>(it((()=>e(...T(t,Te)))),ct),$e=()=>te(E,(e=>te(e,te))),et=()=>X(E),tt=e=>X(Y(E,Te(e))),st=(e,t,s,n=0,o)=>{const r=[];return Z(Y(E,Te(e)),((e,s)=>M(r,[j(t)?e:Y(s,Te(t)),e]))),T(k(y(r,(([e],[t])=>Se(e,t)*(s?-1:1))),n,j(o)?o:n+o),(([,e])=>e))},nt=(e,t)=>X(Y(Y(E,Te(e)),Te(t))),ot=(e,t,s)=>Y(Y(Y(E,Te(e)),Te(t)),Te(s)),rt=e=>Ze((()=>(e=>Oe(e,he,Ke))(e)?Ee(e):0)),at=()=>Ze((()=>Ee({}))),it=(e,t)=>{if(-1==o)return;lt();const s=e?.();return dt(t),s},lt=()=>(o++,ct),dt=e=>(o>0&&(o--,0==o&&(t=!q(f),o=1,Ve(1),t&&Ye(1),o=-1,e?.(te(f,(e=>te(e,(e=>te(e,(e=>[...e]),(([e,t])=>e===t))),ve)),ve),te(I,(e=>te(e,te))))&&(o=1,K(f,((e,t)=>K(e,((e,s)=>K(e,(([e],n)=>Ie(ct,t,s,n,e))))))),o=-1,t=!1),de(ie[0],void 0,t),Ve(0),t&&Ye(0),de(ie[1],void 0,t),o=0,S([f,I,r,i,c],G))),ct),ct={getTables:$e,getTableIds:et,getTable:e=>te(Y(E,Te(e)),te),getRowIds:tt,getSortedRowIds:st,getRow:(e,t)=>te(Y(Y(E,Te(e)),Te(t))),getCellIds:nt,getCell:ot,hasTables:()=>!q(E),hasTable:e=>_(E,Te(e)),hasRow:(e,t)=>_(Y(E,Te(e)),Te(t)),hasCell:(e,t,s)=>_(Y(Y(E,Te(e)),Te(t)),Te(s)),getJson:()=>D(E),getSchemaJson:()=>D(b),setTables:rt,setTable:(e,t)=>Ze((e=>he(t,e)?ke(e,t):0),e),setRow:(e,t,s)=>Ze(((e,t)=>ye(Te(e),Te(t),s)?Me(Te(e),Fe(Te(e)),Te(t),s):0),e,t),addRow:(e,t,s)=>it((()=>{e=Te(e);const n=ye(e,void 0,t),o=n||s?Ae(Y(E,e)):void 0;return n&&Me(e,Fe(e),o,t),o})),setPartialRow:(e,t,s)=>Ze(((e,t)=>{if(ye(e,t,s,1)){const n=Fe(e);pe(s,((s,o)=>De(e,n,t,o,s)))}}),e,t),setCell:(e,t,s,n)=>Ze(((e,t,s)=>O(be(e,t,s,N(n)?n(ot(e,t,s)):n),(n=>De(e,Fe(e),t,s,n)))),e,t,s),setJson:e=>{try{"{}"===e?at():rt(A(e))}catch{}return ct},setSchema:t=>Ze((()=>{if((e=(e=>Oe(e,(e=>Oe(e,(e=>{if(!Oe(e,((e,t)=>v([l,d],t))))return!1;const t=e.type;return!(!z(t)&&t!=a||(Re(e.default)!=t&&Le(e,d),0))})))))(t))&&(me(t),!q(E))){const e=$e();at(),rt(e)}})),delTables:at,delTable:e=>Ze((e=>_(E,e)?Pe(e):0),e),delRow:(e,t)=>Ze(((e,t)=>O(Y(E,e),(s=>_(s,t)?We(e,s,t):0))),e,t),delCell:(e,t,s,n)=>Ze(((e,t,s)=>O(Y(E,e),(o=>O(Y(o,t),(r=>_(r,s)?Be(e,o,t,r,s,n):0))))),e,t,s),delSchema:()=>Ze((()=>{me({}),e=!1})),transaction:it,startTransaction:lt,finishTransaction:dt,forEachTable:e=>K(E,((t,s)=>e(s,(e=>K(t,((t,s)=>e(s,(e=>Z(t,e))))))))),forEachRow:(e,t)=>K(Y(E,Te(e)),((e,s)=>t(s,(t=>Z(e,t))))),forEachCell:(e,t,s)=>Z(Y(Y(E,Te(e)),Te(t)),s),addSortedRowIdsListener:(e,t,s,n,o,r,a)=>{let i=st(e,t,s,n,o);return le((()=>{const a=st(e,t,s,n,o);var l,d;d=i,C(l=a)===C(d)&&R(l,((e,t)=>d[t]===e))||(i=a,r(ct,e,t,s,n,o,i))}),Q[a?1:0],[e,t])},addWillFinishTransactionListener:e=>le(e,ie[0]),addDidFinishTransactionListener:e=>le(e,ie[1]),callListener:e=>(fe(e,[et,tt,nt],(e=>j(e[2])?[]:Je(ot(...e)))),ct),delListener:e=>(ue(e),ct),getListenerStats:()=>({}),createStore:Ne};return pe({Tables:[0,x],TableIds:[0,F],[g]:[1,P],[w]:[1,J],Row:[2,W],[L]:[2,B],[p]:[3,H],InvalidCell:[3,oe]},(([e,t],s)=>{ct[h+s+u]=(...s)=>le(s[e],t[s[e+1]?1:0],e>0?k(s,0,e):void 0)})),ge(ct)};e.createCheckpoints=ye,e.createCustomPersister=ke,e.createFilePersister=(e,s)=>{let n;return ke(e,(async()=>{try{return await t.promises.readFile(s,c)}catch{}}),(async e=>{try{await t.promises.writeFile(s,e,c)}catch{}}),(e=>{n=t.watch(s,e)}),(()=>{n?.close(),n=void 0}))},e.createIndexes=be,e.createLocalPersister=(e,t)=>De(e,t,localStorage),e.createMetrics=Ee,e.createQueries=Fe,e.createRelationships=Pe,e.createRemotePersister=(e,t,s,n)=>{let o,r;return ke(e,(async()=>{const e=await fetch(t);return r=Ae(e),e.text()}),(async e=>await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:e})),(e=>{o=setInterval((async()=>{const s=await fetch(t,{method:"HEAD"}),n=Ae(s);j(r)||j(n)||n==r||(r=n,e())}),1e3*n)}),(()=>{O(o,clearInterval),o=void 0}))},e.createSessionPersister=(e,t)=>De(e,t,sessionStorage),e.createStore=Ne,e.defaultSorter=Se,e.id=Te,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("fs")):"function"==typeof define&&define.amd?define(["exports","fs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBase={},e.fs);
