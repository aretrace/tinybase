var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,l="",a=t(l),n=t(!0),o=t(0),d="type",r="default",s="Listener",I="get",c="add",i="Ids",$="Table",u=$+"s",p=$+i,b="Row",C=b+i,m="Sorted"+b+i,h="Cell",g=h+i,f="Value",w=f+"s",y=f+i,T=(e,t)=>e.every(t),v=(e,t)=>e.sort(t),V=(e,t)=>e.forEach(t),x=(e,t)=>e.map(t),R=e=>e.length,S=e=>0==R(e),k=(e,t)=>e.filter(t),A=(e,...t)=>e.push(...t),P=e=>e.pop(),E=(e,...t)=>e.unshift(...t),D=e=>e.shift(),N=JSON.parse,O=isFinite,j=(e,t)=>e instanceof t,L=e=>null==e,M=e=>e==a||e==n,G=e=>t(e)==a,J=e=>Array.isArray(e),z=e=>{const l=t(e);return M(l)||l==o&&O(e)?l:void 0},W=(e,t)=>e?.has(t)??!1,F=e=>[...e?.values()??[]],B=(e,t)=>e?.forEach(t),_=(e,t)=>e?.delete(t),U=e=>new Map(e),Z=(e,t)=>e?.get(t),H=(e,t)=>B(e,((e,l)=>t(l,e))),Q=(e,t)=>x([...e?.entries()??[]],(([e,l])=>t(l,e))),q=(e,t,l)=>L(l)?(_(e,t),e):e?.set(t,l),K=(e,t,l)=>(W(e,t)||q(e,t,l()),Z(e,t)),X=e=>e.toUpperCase(),Y=e=>e.toLowerCase(),ee="a ",te="A function for",le="Callback",ae="Del",ne="doRollback?: DoRollback",oe="actions: () => Return, "+ne,de="export",re="Id",se="IdOrNull",Ie="Invalid",ce="Json",ie=Y(s),$e=" | undefined",ue="NonNullable",pe="Partial",be=`Registers a ${ie} that will be called`,Ce="Represents",me="rowId: "+re,he="rowId: "+se,ge="Schema",fe="Set",we=", descending?: boolean, offset?: number, limit?: number",ye="[]",Te="Store",ve="the "+Te,Ve="Transaction",xe=Y(Ve),Re="Execute a "+xe+" to make multiple mutations",Se="Explicitly starts a "+xe,ke="Explicitly finishes a "+xe,Ae="the end of the "+xe,Pe="void",Ee=" => "+Pe,De="WhenSet",Ne=" when setting it",Oe=ee+"string serialization of",je=" ",Le="Gets a callback that can ",Me="the ",Ge=" the schema for",Je=(e=0,t=0)=>`the ${ot[e]}content of`+(t?je+ve:l),ze=(e=0,t,a=0)=>lt[t]+je+Je(e,1)+(a?" when setting it":l),We=(e,t=0)=>Ce+` a Row when ${t?"s":"g"}etting ${Je()} the '${e}' `+$,Fe=(e,t,l=0)=>`Gets ${l?"sorted, paginated":"the"} Ids of the ${e}s in `+t,Be=(e,t)=>`Calls a function for each ${e} in `+t,_e=e=>"The props passed to a component that renders "+e,Ue=e=>"A function that takes "+e,Ze=(e,t=0)=>te+" listening to changes to "+nt[e]+" in "+nt[t],He=(e,t,a=0)=>be+" whenever "+nt[e]+" in "+nt[t]+" change"+(a?l:"s"),Qe=e=>`the '${e}' `+$,qe=e=>"the specified Row in "+Qe(e),Ke=(e=0,t=0)=>lt[e]+je+nt[t],Xe=(e,t=0)=>lt[t]+` ${Je()} `+Qe(e),Ye=(e,t=0)=>lt[t]+` ${Je()} `+qe(e),et=(e,t,l=0)=>lt[l]+` the '${t}' Cell for `+qe(e),tt=(e,t=0)=>lt[t]+` the '${e}' Value`,lt=["Gets","Checks existence of","Sets","Deletes","Sets part of",Ce,"Gets "+Oe,"Sets "+Oe,be+" whenever",Le+"set",Le+"add",Le+"set part of",Le+"delete","Renders","Gets "+Oe+Ge,"Sets"+Ge,"Deletes"+Ge],at=[I,"has","set","del","set","forEach",c,l],nt=[ve,u,Me+$+je+i,ee+$,Me+b+je+i,ee+b,Me+h+je+i,ee+h,"invalid Cell changes",w,Me+f+je+i,ee+f,"invalid Value changes",Me+"sorted "+b+je+i],ot=[l,"tabular ","keyed value "],dt=e=>new Set(J(e)||L(e)?e:[e]),rt=(e,t)=>e?.add(t),st=/[^A-Za-z]+/,It=/[^A-Za-z0-9]+/,ct=/^( *)\/\*\* *(.*?) *\*\/$/gm,it=(e,t,l)=>e.substring(t,l),$t=e=>e.includes(","),ut=(e,t,l,a=1)=>{const n=`${t}${1==a?"":a}`;return W(e,n)?ut(e,t,l,a+1):(q(e,n,l),n)},pt=e=>e.replace(ct,((e,t,l)=>{const a=77-bt(t);return`${t}/**\n${l.replace(RegExp(`([^\\n]{1,${a}})(\\s|$)`,"g"),t+" * $1\n")}${t} */`})),bt=e=>e.length,Ct=(e,t=l)=>e.join(t),mt=e=>e.flat(1e3),ht=(e,t=0)=>Ct(x(e.split(It),((e,l)=>(l>0||t?X:Y)(it(e,0,1))+it(e,1)))),gt=e=>X(Ct((e&&!st.test(e[0])?e:" "+e).split(It),"_")),ft=e=>`/** ${e}. */`,wt=(...e)=>Ct(k(e,(e=>e)),", "),yt=(...e)=>"{"+Ct(e,"; ")+"}",Tt=(...e)=>yt(...x(e,(e=>"readonly "+e))),vt=()=>{const e=[U(),U(),U(),U()],t=U(),a=U();return[(...e)=>Ct(mt(e),"\n"),(t,l,...a)=>V(a,(a=>V([0,1],(n=>(t??n)==n?rt(K(e[n],l,dt),a):0)))),(e,a,n,o=l,d=1)=>ut(t,e,[a,n,o,d]),(e,t,l)=>ut(a,e,J(l)?[`(${t}) => {`,l,"}"]:[`(${t}) => ${l}`]),(e,t)=>Z(a,e)===t?e:ut(a,e,t),(t=0)=>x([...v(Q(e[t],((e,t)=>`import {${Ct(v(F(e)),", ")}} from '${t}';`)),((e,t)=>$t(e)!=$t(t)?$t(e)?-1:1:e>t?1:-1)),l],(e=>e.replace("{React}","React"))),()=>Q(t,(([e,t,a,n],o)=>[ft(t),`${n?de+" ":l}type ${o}${a} = ${e};`,l])),()=>Q(a,((e,t)=>(e=J(e)?e:[e],A(e,P(e)+";"),[`const ${t} = ${D(e)}`,e,l])))]},Vt=Object,xt=Vt.keys,Rt=Vt.freeze,St=e=>j(e,Vt)&&e.constructor==Vt,kt=(e,t)=>x(Vt.entries(e),(([e,l])=>t(l,e))),At=e=>St(e)&&S(xt(e)),Pt=e=>{const t=new WeakMap;return l=>(t.has(l)||t.set(l,e(l)),t.get(l))},Et=(e,t,l)=>[t=>kt(e,((e,a)=>t(a,ht(a,1),l(gt(a),`'${a}'`)))),(t,a)=>kt(e[t],((e,t)=>a(t,e[d],e[r],l(gt(t),`'${t}'`),ht(t,1)))),e=>kt(t,((t,a)=>e(a,t[d],t[r],l(gt(a),`'${a}'`),ht(a,1))))],Dt=(e,t,a,n)=>[(n,o)=>{const d=n+": "+o,r=e(u,yt(...t((e=>`'${e}'?: {[rowId: Id]: `+yt(...a(e,((e,t,a)=>`'${e}'${L(a)?"?":l}: ${t}`)))+"}"))),ze(1,5)),I=e(u+De,yt(...t((e=>`'${e}'?: {[rowId: Id]: `+yt(...a(e,((e,t)=>`'${e}'?: ${t}`)))+"}"))),ze(1,5,1)),c=e($+re,"keyof "+r,"A "+$+" Id in "+ve),i=`<TId extends ${c}>`,f=e($,ue+`<${r}[TId]>`,"A "+$+" in "+ve,i),w=e($+De,ue+`<${I}[TId]>`,"A "+$+" in "+ve+Ne,i),y=e(b,f+"<TId>[Id]","A "+b+" in a "+$,i),T=e(b+De,w+"<TId>[Id]","A "+b+" in a "+$+Ne,i),v=e(h+re,`Extract<keyof ${y}<TId>, Id>`,"A "+h+" Id in a "+b,i),V=e(h,ue+`<${r}[TId]>[Id][CId]`,"A "+h+" in a "+b,`<TId extends ${c}, CId extends ${v}<TId>>`),x=e("CellIdCellArray",`CId extends ${v}<TId> ? [cellId: CId, cell: ${V}<TId, CId>] : never`,h+" Ids and types in a "+b,`<TId extends ${c}, CId = ${v}<TId>>`,0),R=e(h+le,`(...[cellId, cell]: ${x}<TId>)`+Ee,Ue(ee+h+" Id, and "+h),i),S=e(b+le,"(rowId: Id, forEachCell: (cellCallback: CellCallback<TId>) "+Ee+") "+Ee,Ue(ee+b+" Id, and a "+h+" iterator"),i),k=e("TableIdForEachRowArray",`TId extends ${c} ? [tableId: TId, forEachRow: (rowCallback: ${S}<TId>)${Ee}] : never`,$+" Ids and callback types",`<TId = ${c}>`,0),A=e($+le,`(...[tableId, forEachRow]: ${k})`+Ee,Ue(ee+$+" Id, and a "+b+" iterator"),l),P=e("TableIdRowIdCellIdArray",`TId extends ${c} ? [tableId: TId, rowId: Id, cellId: ${v}<TId>] : never`,"Ids for GetCellChange",`<TId = ${c}>`,0),E=e("GetCellChange",`(...[tableId, rowId, cellId]: ${P}) => CellChange`,te+" returning information about any Cell's changes during a "+xe),D=e(u+s,`(${d}, getCellChange: ${E}${$e})`+Ee,Ze(1)),N=e(p+s,`(${d})`+Ee,Ze(2)),O=e($+s,`(${d}, tableId: ${c}, getCellChange: ${E}${$e})`+Ee,Ze(3)),j=e(C+s,`(${d}, tableId: ${c})`+Ee,Ze(4,3)),M=e(m+s,"("+wt(d,"tableId: "+c,"cellId: Id"+$e,"descending: boolean","offset: number","limit: number"+$e,"sortedRowIds: Ids")+")"+Ee,Ze(13,3)),G=e(b+s,"("+wt(""+d,"tableId: "+c,me,`getCellChange: ${E}${$e}`)+")"+Ee,Ze(5,3)),J=e(g+s,"("+wt(""+d,"tableId: "+c,me)+")"+Ee,Ze(6,5)),z=e("CellListenerArgsArrayInner",`CId extends ${v}<TId> ? [${d}, tableId: TId, ${me}, cellId: CId, newCell: ${V}<TId, CId> ${$e}, oldCell: ${V}<TId, CId> ${$e}, getCellChange: ${E} ${$e}] : never`,"Cell args for CellListener",`<TId extends ${c}, CId = ${v}<TId>>`,0),W=e("CellListenerArgsArrayOuter",`TId extends ${c} ? `+z+"<TId> : never","Table args for CellListener",`<TId = ${c}>`,0);return[r,I,c,f,w,y,T,v,V,R,S,A,D,N,O,j,M,G,J,e(h+s,`(...[${n}, tableId, rowId, cellId, newCell, oldCell, getCellChange]: ${W})`+Ee,Ze(7,5)),e(Ie+h+s,`(${d}, tableId: Id, ${me}, cellId: Id, invalidCells: any[])`+Ee,Ze(8))]},(t,a)=>{const o=t+": "+a,d=e(w,yt(...n(((e,t,a)=>`'${e}'${L(a)?"?":l}: ${t}`))),ze(2,5)),r=e(w+De,yt(...n(((e,t)=>`'${e}'?: ${t}`))),ze(2,5,1)),I=e(f+re,"keyof "+d,"A "+f+" Id in "+ve),c=e(f,ue+`<${d}[VId]>`,"A "+f+" Id in "+ve,`<VId extends ${I}>`),i=e("ValueIdValueArray",`VId extends ${I} ? [valueId: VId, value: ${c}<VId>] : never`,f+" Ids and types in "+ve,`<VId = ${I}>`,0),$=e(f+le,`(...[valueId, value]: ${i})`+Ee,Ue(ee+f+" Id, and "+f)),u=e("GetValueChange",`(valueId: ${I}) => ValueChange`,te+" returning information about any Value's changes during a "+xe),p=e(w+s,`(${o}, getValueChange: ${u}${$e})`+Ee,Ze(9)),b=e(y+s,`(${o})`+Ee,Ze(10)),C=e("ValueListenerArgsArray",`VId extends ${I} ? [${o}, valueId: VId, newValue: ${c}<VId> ${$e}, oldValue: ${c}<VId> ${$e}, getValueChange: ${u} ${$e}] : never`,"Value args for ValueListener",`<VId = ${I}>`,0);return[d,r,I,c,$,p,b,e(f+s,`(...[${t}, valueId, newValue, oldValue, getValueChange]: `+C+")"+Ee,Ze(11)),e(Ie+f+s,`(${o}, valueId: Id, invalidValues: any[])`+Ee,Ze(12))]},(t,l)=>e(Ve+s,`(${t}: ${l}, cellsTouched: boolean, valuesTouched: boolean)`+Ee,te+" listening to the completion of a "+xe)],Nt=(e,t=l,a=l)=>`store.${e}(${t})`+(a?" as "+a:l),Ot=(e,t=l)=>`fluent(() => ${Nt(e,t)})`,jt=(e,t=l,a=l)=>`store.${e}(${t?t+", ":l}proxy(listener)${a?", "+a:l})`,Lt=(e,t,a)=>{const[o,I,T,v,x,R,S,k]=vt(),[P,D,N]=Et(e,t,x),[O,j,M]=Dt(T,P,D,N),J=U(),z=(e=0)=>Q(J,(([t,a,n,o,d],r)=>{const s=e?[r+`: ${d}(${t}): ${a} => ${n},`]:[r+d+`(${t}): ${a};`];return e||E(s,ft(o)),A(s,l),s})),W=(e,t,a,n,o,d=l)=>ut(J,e,[t,a,n,o,d]),B=(e,t,a,n,o,d=l,r=l,s=l)=>W(at[e]+t+(4==e?pe:l)+a,d,n,(n==X?Ot:Nt)(at[e]+(4==e?pe:l)+a,r,e?void 0:n),o,s),_=(e,t,a,n=l,o=l,d=1,r=l)=>W(c+e+s,(n?n+", ":l)+ie+": "+t+(d?", mutator?: boolean":l),re,jt(c+e+s,o,d?"mutator":l),a,r),K=`./${ht(a)}.d`,X=ht(a,1),Y=ht(X),ee=[],te=U();let ae=[],se=[];if(I(1,K,X,`create${X} as create${X}Decl`),!At(e)){I(0,"tinybase","CellChange"),I(null,"tinybase",i);const[e,t,a,o,s,c,f,w,y,v,R,S,k,E,N,j,M,J,z,W,H]=O(Y,X),Q=U();P(((e,t)=>{const l=`<'${e}'>`,a=[T(t+$,o+l,Ce+` the '${e}' `+$),T(t+$+De,s+l,Ce+` the '${e}' `+$+Ne),T(t+b,c+l,We(e)),T(t+b+De,f+l,We(e,1)),T(t+h+re,w+l,`A Cell Id for the '${e}' `+$),T(t+h+le,v+l,Ue(`a Cell Id and value from a Row in the '${e}' `+$)),T(t+b+le,R+l,Ue(`a Row Id from the '${e}' Table, and a Cell iterator`))];q(Q,e,a),I(1,K,...a)})),I(1,K,e,t,a,w,S,k,E,N,j,M,J,z,W,H),ae=[e,t,a,w,k,E,N,j,M,J,z,W,Q],V([[e],[n],[X,"tables: "+t,"tables"],[X]],(([e,t,a],n)=>B(n,l,u,e,ze(1,n),t,a))),B(0,l,p,a+ye,Fe($,ve)),B(5,l,$,Pe,Be($,ve),"tableCallback: "+S,"tableCallback as any"),P(((e,t,a)=>{const[o,d,r,s,I,c,u]=Z(Q,e);V([[o],[n],[X,"table: "+d,", table"],[X]],(([n,o,d=l],r)=>B(r,t,$,n,Xe(e,r),o,a+d))),B(0,t,C,i,Fe(b,Qe(e)),l,a),B(0,t,m,i,Fe(b,Qe(e),1),"cellId?: "+I+we,a+", cellId, descending, offset, limit"),B(5,t,b,Pe,Be(b,Qe(e)),"rowCallback: "+u,a+", rowCallback as any"),V([[r],[n],[X,", row: "+s,", row"],[X],[X,", partialRow: "+s,", partialRow"]],(([n,o=l,d=l],r)=>B(r,t,b,n,Ye(e,r),me+o,a+", rowId"+d))),B(6,t,b,re+$e,"Add a new Row to "+Qe(e),"row: "+s,a+", row"),B(0,t,g,I+ye,Fe(h,qe(e)),me,a+", rowId"),B(5,t,h,Pe,Be(h,qe(e)),me+", cellCallback: "+c,a+", rowId, cellCallback as any"),D(e,((o,d,r,s,I)=>{const c="Map"+ht(d,1);q(te,d,c);const i=d+(L(r)?$e:l);V([[i],[n],[X,`, cell: ${d} | `+c,", cell as any"],[X]],(([n,d=l,r=l],c)=>B(c,t+I,h,n,et(e,o,c),me+d,a+", rowId, "+s+r)))}))})),B(0,l,u+ce,ce,ze(1,6)),B(2,l,u+ce,X,ze(1,7),"tablesJson: "+ce,"tables"+ce),_(u,k,ze(1,8)+" changes"),_(p,E,He(2,0,1)),_($,N,He(3,0),`tableId: ${a} | null`,"tableId"),_(C,j,He(4,3,1),`tableId: ${a} | null`,"tableId"),_(m,M,He(13,3,1),wt("tableId: TId",`cellId: ${w}<TId>`+$e,"descending: boolean","offset: number","limit: number"+$e),wt("tableId","cellId","descending","offset","limit"),1,"<TId extends TableId>"),_(b,J,He(5,3),`tableId: ${a} | null, rowId: IdOrNull`,"tableId, rowId"),_(g,z,He(6,5,1),`tableId: ${a} | null, rowId: IdOrNull`,"tableId, rowId"),_(h,W,He(7,5),`tableId: ${a} | null, rowId: IdOrNull, cellId: ${Ct(P((e=>Z(Q,e)?.[4]??l))," | ")} | null`,"tableId, rowId, cellId"),_(Ie+h,H,be+" whenever an invalid Cell change was attempted","tableId: IdOrNull, rowId: IdOrNull, cellId: IdOrNull","tableId, rowId, cellId"),I(1,K,...F(te)),A(ee,".set"+u+ge+"({",mt(P(((e,t,a)=>[`[${a}]: {`,...D(e,((e,t,a,n)=>`[${n}]: {[${x(gt(d),`'${d}'`)}]: ${x(gt(t),`'${t}'`)}${L(a)?l:`, [${x(gt(r),`'${r}'`)}]: `+(G(a)?x(gt(a),`'${a}'`):a)}},`)),"},"]))),"})")}if(!At(t)){const[e,t,a,o,s,c,i,$,u]=j(Y,X);I(1,K,e,t,a,s,c,i,$,u),se=[e,t,a,c,i,$],V([[e],[n],[X,"values: "+t,"values"],[X],[X,"partialValues: "+t,"partialValues"]],(([e,t,a],n)=>B(n,l,w,e,ze(2,n),t,a))),B(0,l,y,a+ye,Fe(f,ve)),B(5,l,f,"void",Be(f,ve),"valueCallback: "+s,"valueCallback as any"),N(((e,t,a,o,d)=>{const r="Map"+ht(t,1);q(te,t,r),V([[t],[n],[X,`value: ${t} | `+r,", value as any"],[X]],(([t,a,n=l],r)=>B(r,d,f,t,tt(e,r),a,o+n)))})),B(0,l,w+ce,ce,ze(2,6)),B(2,l,w+ce,X,ze(2,7),"valuesJson: "+ce,"values"+ce),_(w,c,ze(2,8)+" changes"),_(y,i,He(10,0,1)),_(f,$,He(11,0),`valueId: ${a} | null`,"valueId"),_(Ie+f,u,be+" whenever an invalid Value change was attempted","valueId: IdOrNull","valueId"),I(1,K,...F(te)),I(0,"tinybase","ValueChange"),A(ee,".set"+w+ge+"({",N(((e,t,a,n)=>[`[${n}]: {[${x(gt(d),`'${d}'`)}]: ${x(gt(t),`'${t}'`)}${L(a)?l:`, [${x(gt(r),`'${r}'`)}]: `+(G(a)?x(gt(a),`'${a}'`):a)}},`])),"})")}H(te,((e,t)=>T(t,`(cell: ${e}${$e}) => `+e,`Takes a ${e} Cell value and returns another`))),I(null,"tinybase","DoRollback",re,"IdOrNull",ce,"Store"),B(0,l,ce,ce,ze(0,6)),B(2,l,ce,X,ze(0,7),"tablesAndValuesJson: "+ce,"tablesAndValuesJson"),B(7,l,xe,"Return",Re,oe,"actions, doRollback","<Return>"),B(7,l,"start"+Ve,X,Se),B(7,l,"finish"+Ve,X,ke,ne,"doRollback");const ue=M(Y,X);return _("WillFinish"+Ve,ue,be+" just before "+Ae,l,l,0),_("DidFinish"+Ve,ue,be+" just after "+Ae,l,l,0),B(7,l,"call"+s,X,"Manually provoke a listener to be called","listenerId: Id","listenerId"),B(3,l,s,X,"Remove a listener that was previously added to "+ve,"listenerId: Id","listenerId"),W("getStore",l,"Store","store",lt[0]+" the underlying Store object"),I(1,"tinybase","createStore"),I(1,K,X,`create${X} as create${X}Decl`,ue),x("store",["createStore()",...ee]),v("fluent","actions: () => Store",["actions();",`return ${Y};`]),v("proxy","listener: any",`(_: Store, ...params: any[]) => listener(${Y}, ...params)`),x(Y,["{",...z(1),"}"]),[o(...R(0),...S(),de+" interface "+X+" {",...z(0),"}",l,ft(`Creates a ${X} object`),de+" function create"+X+"(): "+X+";"),o(...R(1),de+" const create"+X+": typeof create"+X+"Decl = () => {",...k(),`return Object.freeze(${Y});`,"};"),ae,se]},Mt="Deps",Gt=e=>I+e,Jt=e=>wt(Gt(e),Gt(e)+Mt),zt="debugIds?: boolean",Wt="debugIds={debugIds}",Ft=Mt+"?: React.DependencyList",Bt="then"+Ft,_t="Parameter",Ut=": (parameter: "+_t+", store: Store) => ",Zt="Provider",Ht="const contextValue = useContext(Context);",Qt=", and registers a listener so that any changes to that result will cause a re-render",qt=", based on a parameter",Kt=": ",Xt="?: ",Yt="<"+_t+",>",el=_t+"ized"+le+"<"+_t+">",tl="Props",ll="rowId",al="rowId={rowId}",nl=", separator, debugIds",ol="separator?: ReactElement | string",dl="then?: (store: Store",rl=wt(dl+")"+Ee,Bt),sl="then, then"+Mt,Il=ll+Kt+re,cl="View",il=(e,...t)=>wt(...t,ie+": "+e,ie+Ft,"mutator?: boolean"),$l=(...e)=>wt(...e,ie,ie+Mt,"mutator"),ul=(e,t,a,n,o)=>{const[d,r,I,c,T,v,V,x]=vt(),[R,S,k]=Et(e,t,T),P=`./${ht(a)}.d`,D=`./${ht(a)}-ui-react.d`,N="tinybase/ui-react",O=ht(a,1),j=ht(O),M=O+"Or"+O+re,G=j+"Or"+O+re,J=j+`={${j}}`,z=U(),W=(e,t,a,n,o,d=l)=>(r(1,D,e+" as "+e+"Decl"),ut(z,e,[t,a,n,o,d])),F=(e,t,a,n,o,d=l)=>W("use"+e,t,a,n,o,d),B=(e,t,a,n,o=l,d=l,s=l,I=l,c=l)=>(r(1,N,`use${t} as use${t}Core`),F(e,wt(o,X,I),a,te+`(${G}, use${t}Core, [`+(d||l)+(c?"], ["+c:l)+"]);",n,s)),_=(e,t,l,a)=>W(e,t,1,l,a),H=(e=0)=>Q(z,(([t,a,n,o,d],r)=>{const s=e?[de+` const ${r}: typeof ${r}Decl = ${d}(${t}): ${1==a?"any":a} =>`,n]:[de+` function ${r}${d}(${t}): ${1==a?"ComponentReturnType":a};`];return e||E(s,ft(o)),A(s,l),s}));r(null,"tinybase",re,"Store",le,_t+"ized"+le),r(0,N,"ComponentReturnType"),r(null,N,"ExtraProps"),r(0,P,O);const q=I(M,O+" | "+re,`Used when you need to refer to a ${O} in a React hook or component`),K=I(Zt+tl,Tt(j+Xt+O,j+`ById?: {[${j}Id: Id]: ${O}}`),`Used with the ${Zt} component, so that a `+O+" can be passed into the context of an application");r(0,"react","ReactElement","ComponentType"),r(1,"react","React"),r(1,D,q,K);const X=G+Xt+q;T("{createContext, useContext, useMemo}","React"),T("Context",`createContext<[${O}?, {[${j}Id: Id]: ${O}}?]>([])`),F("Create"+O,`create: () => ${O}, create`+Ft,O,"\n// eslint-disable-next-line react-hooks/exhaustive-deps\nuseMemo(create, createDeps)",`Create a ${O} within a React application with convenient memoization`);const Y=F(O,"id?: Id",O+$e,["{",Ht,"return id == null ? contextValue[0] : contextValue[1]?.[id];","}"],`Get a reference to a ${O} from within a ${Zt} component context`),te=c("useHook",G+`: ${q} | undefined, hook: (...params: any[]) => any, preParams: any[], postParams: any[] = []`,[`const ${j} = ${Y}(${G} as Id);`,`return hook(...preParams, ((${G} == null || typeof ${G} == 'string')`,`? ${j} : ${G})?.getStore(), ...postParams)`]),ne=c("getProps","getProps: ((id: any) => ExtraProps) | undefined, id: Id","(getProps == null) ? ({} as ExtraProps) : getProps(id)"),oe=c("wrap",wt("children: any","separator?: any","encloseWithId?: boolean","id?: Id"),["const separated = separator==null || !Array.isArray(children)"," ? children"," : children.map((child, c) => (c > 0 ? [separator, child] : child));","return encloseWithId ? [id, ':{', separated, '}'] : separated;"]),se=T("NullComponent","() => null");if(!At(e)){const[e,t,a,o,d,f,w,y,T,v,V,x,k]=n;r(null,P,e,t,a,d,f,w,y,T,v,V,x),r(0,P,o),r(1,P,O),r(null,"tinybase",i,"IdOrNull");const A=c("tableView",`{${j}, rowComponent, getRowComponentProps`+nl+"}: any, rowIds: Ids, tableId: Id, defaultRowComponent: React.ComponentType<any>",["const Row = rowComponent ?? defaultRowComponent;",`return ${oe}(rowIds.map((rowId) => (`,"<Row","{..."+ne+"(getRowComponentProps, rowId)}","key={rowId}","tableId={tableId}",al,J,Wt,"/>","))",nl,", tableId,",");"]),E=c("getDefaultTableComponent","tableId: Id",Ct(R(((e,t,l)=>`tableId == ${l} ? ${t}TableView : `)))+se),N=c("getDefaultCellComponent","tableId: Id, cellId: Id",Ct(R(((e,t,l)=>`tableId == ${l} ? ${Ct(S(e,((e,l,a,n,o)=>`cellId == ${n} ? `+t+o+"CellView : ")))+se} : `)))+se);B(u,u,e,ze(1,0)+Qt);const M=B(p,p,a+ye,Fe($,ve)+Qt);B(fe+u+le,fe+u+le,el,ze(1,9)+qt,wt(Gt(u)+Ut+t,Gt(u)+Ft),Jt(u),Yt,wt(dl,`tables: ${t})`+Ee,Bt),sl),B(ae+u+le,ae+u+le,le,ze(1,12),l,l,l,rl,sl);const G=I(h+tl,Tt("tableId?: TId","rowId: Id","cellId?: CId",j+Xt+O,zt),_e(ee+h),`<TId extends ${a}, CId extends ${o}<TId>>`),z=I(b+tl,Tt("tableId?: TId","rowId: Id",j+Xt+O,"cellComponents?: {readonly [CId in "+o+`<TId>]?: ComponentType<${G}<TId, CId>>;}`,`getCellComponentProps?: (cellId: ${o}<TId>) => ExtraProps`,ol,zt),_e(ee+b),`<TId extends ${a}>`),W=I($+tl,Tt("tableId?: TId",j+Xt+O,`rowComponent?: ComponentType<${z}<TId>>`,"getRowComponentProps?: (rowId: Id) => ExtraProps",ol,zt),_e(ee+$),`<TId extends ${a}>`),F=I("Sorted"+$+tl,Tt("tableId?: TId","cellId?: "+o+"<TId>","descending?: boolean","offset?: number","limit?: number",j+Xt+O,`rowComponent?: ComponentType<${z}<TId>>`,"getRowComponentProps?: (rowId: Id) => ExtraProps",ol,zt),_e(ee+"sorted "+$),`<TId extends ${a}>`),U=I(u+tl,Tt(j+Xt+O,"tableComponents?: {readonly [TId in "+a+`]?: ComponentType<${W}<TId>>;}`,`getTableComponentProps?: (tableId: ${a}) => ExtraProps`,ol,zt),_e(Je(1,1)));r(1,D,U,W,F,z,G),_(u+cl,"{"+j+", tableComponents, getTableComponentProps"+nl+"}: "+U,[oe+`(${M}(${j}).map((tableId) => {`,"const Table = (tableComponents?.[tableId] ?? "+E+"(tableId)) as React.ComponentType<TableProps<typeof tableId>>;","return <Table",`{...${ne}(getTableComponentProps, tableId)}`,"tableId={tableId}","key={tableId}",J,Wt,"/>;","}), separator)"],ze(1,13)+Qt),R(((e,t,a)=>{const[n,o,d,s,I]=Z(k,e);r(null,P,n,o,d,s,I),B(t+$,$,n,Xe(e)+Qt,l,a);const c=B(t+C,C,i,Fe(b,Qe(e))+Qt,l,a),u=B(t+m,m,i,Fe(b,Qe(e),1)+Qt,"cellId?: "+I+", descending?: boolean, offset?: number, limit?: number",a+", cellId, descending, offset, limit");B(t+b,b,d,Ye(e)+Qt,Il,wt(a,ll));const p=B(t+g,g,I+ye,Fe(h,qe(e))+Qt,Il,wt(a,ll));B(fe+t+$+le,fe+$+le,el,Xe(e,9)+qt,wt(Gt($)+Ut+o,Gt($)+Ft),wt(a,Jt($)),Yt,wt(dl,`table: ${o})`+Ee,Bt),sl),B(ae+t+$+le,ae+$+le,le,Xe(e,12),l,a,l,rl,sl),B(fe+t+b+le,fe+b+le,el,Ye(e,9)+qt,wt(Il,Gt(b)+Ut+s,Gt(b)+Ft),wt(a,ll,Jt(b)),Yt,wt(dl,`row: ${s})`+Ee,Bt),sl),B("Add"+t+b+le,"Add"+b+le,el,Ye(e,10)+qt,wt(Gt(b)+Ut+s,Gt(b)+Ft),wt(a,Jt(b)),Yt,"then?: ("+wt(Il+$e,"store: Store","row: "+s+")"+Ee,"then"+Ft),sl),B(fe+t+pe+b+le,fe+pe+b+le,el,Ye(e,11)+qt,wt(Il,Gt(pe+b)+Ut+s,Gt(pe+b)+Ft),wt(a,ll,Jt(pe+b)),Yt,wt(dl,`partialRow: ${s})`+Ee,Bt),sl),B(ae+t+b+le,ae+b+le,le,Ye(e,12),Il,wt(a,ll),l,rl,sl);const f=_(t+b+cl,"{rowId, "+j+", cellComponents, getCellComponentProps"+nl+`}: ${z}<'${e}'>`,[oe+`(${p}(rowId, ${j}).map((cellId) => {`,"const Cell = (cellComponents?.[cellId] ?? "+N+`(${a}, cellId)) as React.ComponentType<CellProps<typeof `+a+", typeof cellId>>;","return <Cell",`{...${ne}(getCellComponentProps, cellId)} `,"key={cellId}",`tableId={${a}}`,al,"cellId={cellId}",J,Wt,"/>;","})"+nl+", rowId)"],Ye(e,13)+Qt);_(t+"Sorted"+$+cl,"{cellId, descending, offset, limit, ...props}: "+F+`<'${e}'>`,A+"(props, "+u+`(cellId, descending, offset, limit, props.${j}), ${a}, ${f});`,Xe(e,13)+", sorted"+Qt),_(t+$+cl,`props: ${W}<'${e}'>`,A+"(props, "+c+`(props.${j}), ${a}, ${f});`,Xe(e,13)+Qt),S(e,((n,o,d,s,I)=>{const c="Map"+ht(o,1);r(0,P,c),r(1,P,c);const i=B(t+I+h,h,o+(L(d)?$e:l),et(e,n)+Qt,Il,wt(a,ll,s));B(fe+t+I+h+le,fe+h+le,el,et(e,n,9)+qt,wt(Il,Gt(h)+Ut+o+" | "+c,Gt(h)+Ft),wt(a,ll,s,Jt(h)),Yt,wt(dl,`cell: ${o} | ${c})`+Ee,Bt),sl),B(ae+t+I+h+le,ae+h+le,le,et(e,n,12),wt(Il,"forceDel?: boolean"),wt(a,ll,s,"forceDel"),l,rl,sl),_(t+I+h+cl,`{rowId, ${j}, debugIds}: `+G+`<'${e}', '${n}'>`,[oe+`('' + ${i}(rowId, `+j+`) ?? '', undefined, debugIds, ${s})`],et(e,n,13)+Qt)}))}));const H=Ct(R((e=>Z(k,e)?.[4]??l))," | ");B(u+s,u+s,Pe,ze(1,8)+" changes",il(d),$l()),B(p+s,p+s,Pe,He(2,0,1),il(f),$l()),B($+s,$+s,Pe,He(3,0),il(w,`tableId: ${a} | null`),$l("tableId")),B(C+s,C+s,Pe,He(4,3,1),il(y,`tableId: ${a} | null`),$l("tableId")),B(m+s,m+s,Pe,He(13,3,1),il(T,`tableId: ${a} | null`,"cellId: "+H+$e,"descending: boolean","offset: number","limit: number"+$e),$l("tableId","cellId","descending","offset","limit")),B(b+s,b+s,Pe,He(5,3),il(v,`tableId: ${a} | null`,ll+": IdOrNull"),$l("tableId",ll)),B(g+s,g+s,Pe,He(6,5,1),il(V,`tableId: ${a} | null`,ll+": IdOrNull"),$l("tableId",ll)),B(h+s,h+s,Pe,He(7,5),il(x,`tableId: ${a} | null`,ll+": IdOrNull",`cellId: ${H} | null`),$l("tableId",ll,"cellId"))}if(!At(t)){const[e,t,a,n,d,i]=o;r(null,P,...o),r(1,P,O);const $=c("getDefaultValueComponent","valueId: Id",Ct(k(((e,t,l,a,n)=>`valueId == ${a} ? `+n+"ValueView : ")))+se);B(w,w,e,ze(2,0)+Qt);const u=B(y,y,a+ye,Fe(f,ve)+Qt);B(fe+w+le,fe+w+le,el,ze(2,9)+qt,wt(Gt(w)+Ut+t,Gt(w)+Ft),Jt(w),Yt,wt(dl,`values: ${t})`+Ee,Bt),sl),B(fe+pe+w+le,fe+pe+w+le,el,ze(2,11)+qt,wt(Gt(pe+w)+Ut+t,Gt(pe+w)+Ft),Jt(pe+w),Yt,wt(dl,`partialValues: ${t})`+Ee,Bt),sl),B(ae+w+le,ae+w+le,le,ze(2,12),l,l,l,rl,sl);const p=I(f+tl,Tt("valueId?: VId",j+Xt+O,zt),_e("a Value"),`<VId extends ${a}>`),b=I(w+tl,Tt(j+Xt+O,"valueComponents?: {readonly [VId in "+a+`]?: ComponentType<${p}<VId>>;}`,`getValueComponentProps?: (valueId: ${a}) => ExtraProps`,ol,zt),_e(Je(2,1)));r(1,D,b,p),_(w+cl,"{"+j+", valueComponents, getValueComponentProps"+nl+"}: "+b,[oe+`(${u}(${j}).map((valueId) => {`,"const Value = valueComponents?.[valueId] ?? "+$+"(valueId);","return <Value",`{...${ne}(getValueComponentProps, valueId)}`,"key={valueId}",J,Wt,"/>;","}), separator)"],ze(2,13)+Qt),k(((e,t,a,n,o)=>{const d="Map"+ht(t,1);r(0,P,d),r(1,P,d);const s=B(o+f,f,t,tt(e)+Qt,l,n);B(fe+o+f+le,fe+f+le,el,tt(e,9)+qt,wt(Gt(f)+Ut+t+" | "+d,Gt(f)+Ft),wt(n,Jt(f)),Yt,wt(dl,`value: ${t} | ${d})`+Ee,Bt),sl),B(ae+o+f+le,ae+f+le,le,tt(e,12),l,n,l,rl,sl),_(o+f+cl,`{${j}, debugIds}: ${p}<'${e}'>`,[oe+`('' + ${s}(`+j+`) ?? '', undefined, debugIds, ${n})`],tt(e,13)+Qt)})),B(w+s,w+s,Pe,ze(2,8)+" changes",il(n),$l()),B(y+s,y+s,Pe,He(10,0,1),il(d),$l()),B(f+s,f+s,Pe,He(11,0),il(i,`valueId: ${a} | null`),$l("valueId"))}return _(Zt,`{${j}, ${j}ById, children}: `+K+" & {children: React.ReactNode}",["{",Ht,"return (","<Context."+Zt,"value={useMemo(",`() => [${j} ?? contextValue[0], {...contextValue[1], ...${j}ById}],`,`[${j}, ${j}ById, contextValue],`,")}>","{children}",`</Context.${Zt}>`,");","}"],"Wraps part of an application in a context that provides default objects to be used by hooks and components within"),[d(...v(0),...V(),...H(0)),d(...v(1),...x(),...H(1))]},pl=(e,t,a)=>{if(At(e)&&At(t))return[l,l,l,l];const[n,o,d,r]=Lt(e,t,a);return[n,o,...ul(e,t,a,d,r)]},bl=". Note that this may contradict the generated type refinements",Cl=(e,t,a)=>{const[o,d,r,T,v,x,R,S]=vt(),[k,P,E]=Et(e,t,(()=>l)),[D,N,O]=Dt(r,k,P,E),j=U(),L=()=>Q(j,(([e,t,a,n],o)=>[ft(a),o+n+`(${wt(...e)}): ${t};`,l])),M=(e,t,a,n,o=l)=>ut(j,e,[J(t)?t:[t],a,n,o]);let G;d(0,"tinybase",re,i,se,"StoreListenerStats",ce,u+ge,w+ge,"DoRollback"),At(e)?(G=[u,u,re,$,$,b,b,re,h,h+le,b+le,$+le,u+s,p+s,$+s,C+s,m+s,b+s,g+s,h+s,Ie+h+s],d(0,"tinybase",...G),A(G,re,se,re,l,re,l)):(d(0,"tinybase","CellChange"),G=D("store",Te),V([3,4,5,6,7,9,10],(e=>G[e]+="<TId>")),G[8]+="<TId, CId>",A(G,"TId","TId | null",Ct(k((e=>`CellId<'${e}'>`))," | "),`<TId extends ${G[2]}>`,"CId",`<TId extends ${G[2]}, CId extends ${G[7]}>`));const[z,W,F,B,_,Z,H,q,K,X,Y,te,ae,de,ue,Ce,fe,Ee,De,Ne,Oe,je,Le,Me,Ge,Je,We]=G,_e="tableId: "+je,Ue=wt(_e,me),Ze=wt(Ue,"cellId: "+Je),Qe="tableId: "+Le,qe=wt(Qe,he),Xe=wt(qe,"cellId: "+Me);let Ye;V([[z],[n],[Te,"tables: "+W],[Te]],(([e,t],a)=>M(at[a]+u,t??l,e,ze(1,a)))),M(I+p,l,F+ye,Fe($,ve)),M(at[5]+$,"tableCallback: "+te,Pe,Be($,ve)),V([[B,_e],[n,_e],[Te,[_e,"table: "+_]],[Te,_e]],(([e,t],a)=>M(at[a]+$,t??l,e,Ke(a,3),Ge))),M(I+C,_e,i,Fe(b,ee+$),Ge),M(I+m,[_e,"cellId?: "+q+we],i,Fe(b,ee+$),Ge),M(at[5]+b,[_e,"rowCallback: "+Y],Pe,Be(b,ee+$),Ge),V([[Z,Ue],[n,Ue],[Te,[Ue,"row: "+H]],[Te,Ue]],(([e,t],a)=>M(at[a]+b,t??l,e,Ke(a,5),Ge))),M("set"+pe+b,[_e,me,"partialRow: "+H],Te,Ke(4,5),Ge),M(c+b,[_e,"row: "+H],re+$e,"Add a new "+b,Ge),M(I+g,[_e,me],q+ye,Fe(h,ee+b),Ge),M(at[5]+h,[_e,me,"cellCallback: "+X],Pe,Be(h,ee+b),Ge),V([[K,Ze],[n,Ze],[Te,[Ze,"cell: "+K]],[Te,Ze]],(([e,t],a)=>M(at[a]+h,t??l,e,Ke(a,7),We))),M(c+u+s,[ie+": "+ae,"mutator?: boolean"],re,ze(1,8)+" changes"),M(c+p+s,[ie+": "+de,"mutator?: boolean"],re,He(2,0,1)),M(c+$+s,[Qe,ie+": "+ue,"mutator?: boolean"],re,He(3,0),Ge),M(c+C+s,[Qe,ie+": "+Ce,"mutator?: boolean"],re,He(4,3,1),Ge),M(c+m+s,[_e,"cellId: "+q+$e,"descending: boolean","offset: number","limit: number"+$e,ie+": "+fe,"mutator?: boolean"],re,He(13,3,1),Ge),M(c+b+s,[qe,ie+": "+Ee,"mutator?: boolean"],re,He(5,3),Ge),M(c+g+s,[qe,ie+": "+De,"mutator?: boolean"],re,He(6,5,1),Ge),M(c+h+s,[Xe,ie+": "+Ne,"mutator?: boolean"],re,He(7,5),Ge),M(c+Ie+h+s,["tableId: "+se,"rowId: "+se,"cellId: "+se,ie+": "+Oe,"mutator?: boolean"],re,be+" whenever an invalid Cell change was attempted"),At(t)?(Ye=[w,w,re,f,f+le,w+s,y+s,f+s,Ie+f+s],d(0,"tinybase",...Ye),A(Ye,re,se,l)):(d(0,"tinybase","ValueChange"),Ye=N("store",Te),Ye[3]+="<VId>",A(Ye,"VId","VId | null",`<VId extends ${Ye[2]}>`));const[et,tt,lt,nt,ot,dt,rt,st,It,ct,it,$t]=Ye,pt="valueId: "+ct;V([[et],[n],[Te,"values: "+tt],[Te]],(([e,t],a)=>M(at[a]+w,t??l,e,ze(2,a)))),M("set"+pe+w,"partialValues: "+tt,Te,ze(2,4)),M(I+y,l,lt+ye,Fe(f,ve)),M(at[5]+f,"valueCallback: "+ot,Pe,Be(f,ve)),V([[nt,pt],[n,pt],[Te,[pt,"value: "+nt]],[Te,pt]],(([e,t],a)=>M(at[a]+f,t??l,e,Ke(a,11),$t))),M(c+w+s,[ie+": "+dt,"mutator?: boolean"],re,ze(2,8)+" changes"),M(c+y+s,[ie+": "+rt,"mutator?: boolean"],re,He(10,0,1)),M(c+f+s,["valueId: "+it,ie+": "+st,"mutator?: boolean"],re,He(11,0),$t),M(c+Ie+f+s,["valueId: "+se,ie+": "+It,"mutator?: boolean"],re,be+" whenever an invalid Value change was attempted"),V([[l,"tablesAndValues"],[u,"tables"],[w,"values"]],(([e,t],a)=>{M(I+e+ce,l,ce,ze(a,6)),M("set"+e+ce,t+ce+": "+ce,Te,ze(a,7)),M(I+e+ge+ce,l,ce,ze(a,14)),e&&M("set"+e+ge,t+ge+": "+e+ge,Te,ze(a,15)+bl),M("del"+e+ge,l,Te,ze(a,16))})),M("set"+ge,[`tables${ge}: `+u+ge,`values${ge}?: `+w+ge],Te,ze(0,15)+bl),M(xe,oe,"Return",Re,"<Return>"),M("start"+Ve,l,Te,Se),M("finish"+Ve,ne,Te,ke);const bt=O("store",Te);return M(c+"WillFinish"+Ve+s,ie+": "+bt,re,be+" just before "+Ae),M(c+"DidFinish"+Ve+s,ie+": "+bt,re,be+" just after "+Ae),M("call"+s,"listenerId: Id",Te,"Manually provoke a listener to be called"),M("del"+s,"listenerId: Id",Te,"Remove a listener that was previously added to "+ve),M(I+s+"Stats",l,"StoreListenerStats","Get listener statistics"),[o("export * from 'tinybase';",...x(0),...R(),"export interface Store {",...L(),"}",l,ft("Creates a Store object"),"export function createStore(): Store")]},ml=(e,t,l)=>["export * from 'tinybase/ui-react';"],hl=(e,t,a)=>{if(At(e)&&At(t))return[l,l];const[n]=Cl(e,t);return[n,...ml()]},gl={parser:"typescript",singleQuote:!0,trailingComma:"all",bracketSpacing:!1,jsdocSingleLineComment:!1},fl=async()=>{try{return(await import("prettier")).format}catch(e){return e=>e}},wl=Pt((e=>{const t=()=>{const t=N(e.getTablesSchemaJson());return!At(t)||T(e.getTableIds(),(l=>{const a=e.getRowIds(l),n=U();if(T(a,(t=>T(e.getCellIds(l,t),(a=>{const o=e.getCell(l,t,a),d=K(n,a,(()=>[z(o),U(),[0],0])),[r,s,[I]]=d,c=K(s,o,(()=>0))+1;return c>I&&(d[2]=[c,o]),q(s,o,c),d[3]++,r==z(o)})))))return t[l]={},B(n,(([e,,[,n],o],s)=>{t[l][s]={[d]:e,...o==R(a)?{[r]:n}:{}}})),1}))?t:{}},l=()=>{const t=N(e.getValuesSchemaJson());return At(t)&&e.forEachValue(((e,l)=>{t[e]={[d]:z(l)}})),t},a=e=>pl(t(),l(),e),n=async e=>{const t=["d.ts","ts","d.ts","tsx"],l=await fl();return x(a(e),((e,a)=>pt(l(e,{...gl,filepath:"_."+t[a]}))))},o=e=>hl(t(),l()),s=async e=>{const t=await fl();return x(o(),(e=>pt(t(e,{...gl,filepath:"_.d.ts"}))))};return Rt({getStoreStats:t=>{let l=0,a=0,n=0;const o={};return e.forEachTable(((e,d)=>{l++;let r=0,s=0;const I={};d(((e,l)=>{r++;let a=0;l((()=>a++)),s+=a,t&&(I[e]={rowCells:a})})),a+=r,n+=s,t&&(o[e]={tableRows:r,tableCells:s,rows:I})})),{totalTables:l,totalRows:a,totalCells:n,totalValues:R(e.getValueIds()),jsonLength:bt(e.getJson()),...t?{detail:{tables:o}}:{}}},getStoreTablesSchema:t,getStoreValuesSchema:l,getStoreApi:a,getPrettyStoreApi:n,getStoreRefinement:o,getPrettyStoreRefinement:s,getStore:()=>e})}));e.createTools=wl},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseTools={});
