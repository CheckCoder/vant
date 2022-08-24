import{c as K,I as me,h as he,p as U,r as ee,J as ge,o as ye,K as ie,L as Z,M as ve}from"./use-translate.c56bc05e.js";import{d as q,a as De,n as te,m as se,t as A,c as we,w as be}from"./with-install.2d06a5b3.js";import{u as ke}from"./use-refs.a0fe18f0.js";import{u as fe}from"./use-expose.2dad0d8e.js";import{P as Se}from"./index.d361c3fa.js";import{B as Te}from"./index.3c8c27cb.js";import{s as ce}from"./index.c1c7ff47.js";import{g as Me}from"./utils.129dc71c.js";import{u as Re}from"./use-height.b399722c.js";import{A as _,D as R,e as c,x as z,y as p,B as xe}from"./vue-libs.a3cd7f61.js";const[Ce,f,W]=K("calendar"),Oe=e=>W("monthTitle",e.getFullYear(),e.getMonth()+1);function ne(e,s){const l=e.getFullYear(),d=s.getFullYear();if(l===d){const w=e.getMonth(),M=s.getMonth();return w===M?0:w>M?1:-1}return l>d?1:-1}function x(e,s){const l=ne(e,s);if(l===0){const d=e.getDate(),w=s.getDate();return d===w?0:d>w?1:-1}return l}const J=e=>new Date(e),ue=e=>Array.isArray(e)?e.map(J):J(e);function re(e,s){const l=J(e);return l.setDate(l.getDate()+s),l}const ae=e=>re(e,-1),de=e=>re(e,1),oe=()=>{const e=new Date;return e.setHours(0,0,0,0),e};function Pe(e){const s=e[0].getTime();return(e[1].getTime()-s)/(1e3*60*60*24)+1}const[Be]=K("calendar-day"),Ae=_({name:Be,props:{item:q(Object),color:String,index:Number,offset:De(0),rowHeight:String},emits:["click"],setup(e,{emit:s,slots:l}){const d=R(()=>{var N;const{item:a,index:h,color:S,offset:I,rowHeight:O}=e,T={height:O};if(a.type==="placeholder")return T.width="100%",T;if(h===0&&(T.marginLeft=`${100*I/7}%`),S)switch(a.type){case"end":case"start":case"start-end":case"multiple-middle":case"multiple-selected":T.background=S;break;case"middle":T.color=S;break}return I+(((N=a.date)==null?void 0:N.getDate())||1)>28&&(T.marginBottom=0),T}),w=()=>{e.item.type!=="disabled"&&s("click",e.item)},M=()=>{const{topInfo:a}=e.item;if(a||l["top-info"])return c("div",{class:f("top-info")},[l["top-info"]?l["top-info"](e.item):a])},C=()=>{const{bottomInfo:a}=e.item;if(a||l["bottom-info"])return c("div",{class:f("bottom-info")},[l["bottom-info"]?l["bottom-info"](e.item):a])},b=()=>{const{item:a,color:h,rowHeight:S}=e,{type:I,text:O}=a,T=[M(),O,C()];return I==="selected"?c("div",{class:f("selected-day"),style:{width:S,height:S,background:h}},[T]):T};return()=>{const{type:a,className:h}=e.item;return a==="placeholder"?c("div",{class:f("day"),style:d.value},null):c("div",{role:"gridcell",style:d.value,class:[f("day",a),h],tabindex:a==="disabled"?void 0:-1,onClick:w},[b()])}}}),[Ie]=K("calendar-month"),He={date:q(Date),type:String,color:String,minDate:q(Date),maxDate:q(Date),showMark:Boolean,rowHeight:te,formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number},We=_({name:Ie,props:He,emits:["click"],setup(e,{emit:s,slots:l}){const[d,w]=me(),M=z(),C=z(),b=Re(C),a=R(()=>Oe(e.date)),h=R(()=>he(e.rowHeight)),S=R(()=>{const o=e.date.getDay();return e.firstDayOfWeek?(o+7-e.firstDayOfWeek)%7:o}),I=R(()=>Me(e.date.getFullYear(),e.date.getMonth()+1)),O=R(()=>d.value||!e.lazyRender),T=()=>a.value,N=o=>{const m=g=>e.currentDate.some(u=>x(u,g)===0);if(m(o)){const g=ae(o),u=de(o),y=m(g),t=m(u);return y&&t?"multiple-middle":y?"end":t?"start":"multiple-selected"}return""},F=o=>{const[m,g]=e.currentDate;if(!m)return"";const u=x(o,m);if(!g)return u===0?"start":"";const y=x(o,g);return e.allowSameDay&&u===0&&y===0?"start-end":u===0?"start":y===0?"end":u>0&&y<0?"middle":""},V=o=>{const{type:m,minDate:g,maxDate:u,currentDate:y}=e;if(x(o,g)<0||x(o,u)>0)return"disabled";if(y===null)return"";if(Array.isArray(y)){if(m==="multiple")return N(o);if(m==="range")return F(o)}else if(m==="single")return x(o,y)===0?"selected":"";return""},Y=o=>{if(e.type==="range"){if(o==="start"||o==="end")return W(o);if(o==="start-end")return`${W("start")}/${W("end")}`}},E=()=>{if(e.showMonthTitle)return c("div",{class:f("month-title")},[a.value])},j=()=>{if(e.showMark&&O.value)return c("div",{class:f("month-mark")},[e.date.getMonth()+1])},L=R(()=>{const o=Math.ceil((I.value+S.value)/7);return Array(o).fill({type:"placeholder"})}),$=R(()=>{const o=[],m=e.date.getFullYear(),g=e.date.getMonth();for(let u=1;u<=I.value;u++){const y=new Date(m,g,u),t=V(y);let n={date:y,type:t,text:u,bottomInfo:Y(t)};e.formatter&&(n=e.formatter(n)),o.push(n)}return o}),P=R(()=>$.value.filter(o=>o.type==="disabled")),G=(o,m)=>{if(M.value){const g=ee(M.value),u=L.value.length,t=(Math.ceil((m.getDate()+S.value)/7)-1)*g.height/u;ge(o,g.top+t+o.scrollTop-ee(o).top)}},Q=(o,m)=>c(Ae,{item:o,index:m,color:e.color,offset:S.value,rowHeight:h.value,onClick:g=>s("click",g)},U(l,["top-info","bottom-info"])),X=()=>c("div",{ref:M,role:"grid",class:f("days")},[j(),(O.value?$:L).value.map(Q)]);return fe({getTitle:T,getHeight:()=>b.value,setVisible:w,scrollToDate:G,disabledDays:P}),()=>c("div",{class:f("month"),ref:C},[E(),X()])}}),[Ne]=K("calendar-header"),Fe=_({name:Ne,props:{title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},emits:["clickSubtitle"],setup(e,{slots:s,emit:l}){const d=()=>{if(e.showTitle){const b=e.title||W("title"),a=s.title?s.title():b;return c("div",{class:f("header-title")},[a])}},w=b=>l("clickSubtitle",b),M=()=>{if(e.showSubtitle){const b=s.subtitle?s.subtitle():e.subtitle;return c("div",{class:f("header-subtitle"),onClick:w},[b])}},C=()=>{const{firstDayOfWeek:b}=e,a=W("weekdays"),h=[...a.slice(b,7),...a.slice(0,b)];return c("div",{class:f("weekdays")},[h.map(S=>c("span",{class:f("weekday")},[S]))])};return()=>c("div",{class:f("header")},[d(),M(),C()])}}),Ye={show:Boolean,type:se("single"),title:String,color:String,round:A,readonly:Boolean,poppable:A,maxRange:we(null),position:se("bottom"),teleport:[String,Object],showMark:A,showTitle:A,formatter:Function,rowHeight:te,confirmText:String,rangePrompt:String,lazyRender:A,showConfirm:A,defaultDate:[Date,Array],allowSameDay:Boolean,showSubtitle:A,closeOnPopstate:A,showRangePrompt:A,confirmDisabledText:String,closeOnClickOverlay:A,safeAreaInsetTop:Boolean,safeAreaInsetBottom:A,minDate:{type:Date,validator:ie,default:oe},maxDate:{type:Date,validator:ie,default:()=>{const e=oe();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate())}},firstDayOfWeek:{type:te,default:0,validator:e=>e>=0&&e<=6}},$e=_({name:Ce,props:Ye,emits:["select","confirm","unselect","monthShow","overRange","update:show","clickSubtitle"],setup(e,{emit:s,slots:l}){const d=(t,n=e.minDate,r=e.maxDate)=>x(t,n)===-1?n:x(t,r)===1?r:t,w=(t=e.defaultDate)=>{const{type:n,minDate:r,maxDate:i}=e;if(t===null)return t;const v=oe();if(n==="range"){Array.isArray(t)||(t=[]);const k=d(t[0]||v,r,ae(i)),H=d(t[1]||v,de(r));return[k,H]}return n==="multiple"?Array.isArray(t)?t.map(k=>d(k)):[d(v)]:((!t||Array.isArray(t))&&(t=v),d(t))};let M;const C=z(),b=z(""),a=z(w()),[h,S]=ke(),I=R(()=>e.firstDayOfWeek?+e.firstDayOfWeek%7:0),O=R(()=>{const t=[],n=new Date(e.minDate);if(e.lazyRender&&!e.show&&e.poppable)return t;n.setDate(1);do t.push(new Date(n)),n.setMonth(n.getMonth()+1);while(ne(n,e.maxDate)!==1);return t}),T=R(()=>{if(a.value){if(e.type==="range")return!a.value[0]||!a.value[1];if(e.type==="multiple")return!a.value.length}return!a.value}),N=()=>a.value,F=()=>{const t=ve(C.value),n=t+M,r=O.value.map((D,B)=>h.value[B].getHeight()),i=r.reduce((D,B)=>D+B,0);if(n>i&&t>0)return;let v=0,k;const H=[-1,-1];for(let D=0;D<O.value.length;D++){const B=h.value[D];v<=n&&v+r[D]>=t&&(H[1]=D,k||(k=B,H[0]=D),h.value[D].showed||(h.value[D].showed=!0,s("monthShow",{date:B.date,title:B.getTitle()}))),v+=r[D]}O.value.forEach((D,B)=>{const le=B>=H[0]-1&&B<=H[1]+1;h.value[B].setVisible(le)}),k&&(b.value=k.getTitle())},V=t=>{Z(()=>{O.value.some((n,r)=>ne(n,t)===0?(C.value&&h.value[r].scrollToDate(C.value,t),!0):!1),F()})},Y=()=>{if(!(e.poppable&&!e.show))if(a.value){const t=e.type==="single"?a.value:a.value[0];V(t)}else Z(F)},E=()=>{e.poppable&&!e.show||(Z(()=>{M=Math.floor(ee(C).height)}),Y())},j=(t=w())=>{a.value=t,Y()},L=t=>{const{maxRange:n,rangePrompt:r,showRangePrompt:i}=e;return n&&Pe(t)>n?(i&&ce(r||W("rangePrompt",n)),s("overRange"),!1):!0},$=()=>{var t;return s("confirm",(t=a.value)!=null?t:ue(a.value))},P=(t,n)=>{const r=i=>{a.value=i,s("select",ue(i))};if(n&&e.type==="range"&&!L(t)){r([t[0],re(t[0],+e.maxRange-1)]);return}r(t),n&&!e.showConfirm&&$()},G=(t,n,r)=>{var i;return(i=t.find(v=>x(n,v.date)===-1&&x(v.date,r)===-1))==null?void 0:i.date},Q=R(()=>h.value.reduce((t,n)=>{var r,i;return t.push(...(i=(r=n.disabledDays)==null?void 0:r.value)!=null?i:[]),t},[])),X=t=>{if(e.readonly||!t.date)return;const{date:n}=t,{type:r}=e;if(r==="range"){if(!a.value){P([n]);return}const[i,v]=a.value;if(i&&!v){const k=x(n,i);if(k===1){const H=G(Q.value,i,n);if(H){const D=ae(H);x(i,D)===-1?P([i,D]):P([n])}else P([i,n],!0)}else k===-1?P([n]):e.allowSameDay&&P([n,n],!0)}else P([n])}else if(r==="multiple"){if(!a.value){P([n]);return}const i=a.value,v=i.findIndex(k=>x(k,n)===0);if(v!==-1){const[k]=i.splice(v,1);s("unselect",J(k))}else e.maxRange&&i.length>=e.maxRange?ce(e.rangePrompt||W("rangePrompt",e.maxRange)):P([...i,n])}else P(n,!0)},o=t=>s("update:show",t),m=(t,n)=>{const r=n!==0||!e.showSubtitle;return c(We,xe({ref:S(n),date:t,currentDate:a.value,showMonthTitle:r,firstDayOfWeek:I.value},U(e,["type","color","minDate","maxDate","showMark","formatter","rowHeight","lazyRender","showSubtitle","allowSameDay"]),{onClick:X}),U(l,["top-info","bottom-info"]))},g=()=>{if(l.footer)return l.footer();if(e.showConfirm){const t=l["confirm-text"],n=T.value,r=n?e.confirmDisabledText:e.confirmText;return c(Te,{round:!0,block:!0,type:"primary",color:e.color,class:f("confirm"),disabled:n,nativeType:"button",onClick:$},{default:()=>[t?t({disabled:n}):r||W("confirm")]})}},u=()=>c("div",{class:[f("footer"),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[g()]),y=()=>c("div",{class:f()},[c(Fe,{title:e.title,subtitle:b.value,showTitle:e.showTitle,showSubtitle:e.showSubtitle,firstDayOfWeek:I.value,onClickSubtitle:t=>s("clickSubtitle",t)},U(l,["title","subtitle"])),c("div",{ref:C,class:f("body"),onScroll:F},[O.value.map(m)]),u()]);return p(()=>e.show,E),p(()=>[e.type,e.minDate,e.maxDate],()=>j(w(a.value))),p(()=>e.defaultDate,(t=null)=>{a.value=t,Y()}),fe({reset:j,scrollToDate:V,getSelectedDate:N}),ye(E),()=>e.poppable?c(Se,{show:e.show,class:f("popup"),round:e.round,position:e.position,closeable:e.showTitle||e.showSubtitle,teleport:e.teleport,closeOnPopstate:e.closeOnPopstate,safeAreaInsetTop:e.safeAreaInsetTop,closeOnClickOverlay:e.closeOnClickOverlay,"onUpdate:show":o},{default:y}):y()}}),ze=be($e),Qe=ze;export{Qe as V};