import{b as M,V as at}from"./index.4aab22e4.js";import{c as K,L as lt,b as ut,i as dt,n as j,N as ft,J as L,r as R,z as ht,y as Q,l as mt,u as pt,e as xt,v as gt,a as vt}from"./use-translate.56565eec.js";import{t as yt,n as Z,a as Tt,w as G}from"./with-install.f3d37716.js";import{u as Ct}from"./use-touch.ee9512d6.js";import{u as W}from"./use-expose.33aa695d.js";import{A as O,x as A,D as B,N as It,y as F,e as c,S as St,Q as bt,q as At,H as kt,o as _,c as _t,w as C,C as o,a as H,b as U,d as X,F as Y,h as wt,t as Lt}from"./vue-libs.a040eeb8.js";import{f as Rt}from"./constant.80c6de18.js";import{V as I}from"./index.0404d7f8.js";import"./use-id.3079e917.js";import"./use-route.f2a7e4c6.js";import"./index.880c5cf7.js";import"./on-popup-reopen.2164636b.js";import"./interceptor.37662564.js";import"./use-refs.91bd8378.js";import"./index.cbe25695.js";import"./index.bc7c56e3.js";import"./index.e2935f15.js";function Bt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!bt(e)}function Ot(){const e="A".charCodeAt(0);return Array(26).fill("").map((s,d)=>String.fromCharCode(e+d))}const[tt,w]=K("index-bar"),Vt={sticky:yt,zIndex:Z,teleport:[String,Object],highlightColor:String,stickyOffsetTop:Tt(0),indexList:{type:Array,default:Ot}},et=Symbol(tt),Et=O({name:tt,props:Vt,emits:["select","change"],setup(e,{emit:r,slots:s}){const d=A(),p=A(),g=A(""),h=Ct(),f=lt(d),{children:n,linkChildren:S}=ut(et);let m;S({props:e});const nt=B(()=>{if(dt(e.zIndex))return{zIndex:+e.zIndex+1}}),ot=B(()=>{if(e.highlightColor)return{color:e.highlightColor}}),V=(t,i)=>{for(let a=n.length-1;a>=0;a--){const u=a>0?i[a-1].height:0,l=e.sticky?u+e.stickyOffsetTop:0;if(t+l>=i[a].top)return a}return-1},E=t=>n.find(i=>String(i.index)===t),k=()=>{if(ft(d))return;const{sticky:t,indexList:i}=e,a=L(f.value),u=R(f),l=n.map(T=>T.getRect(f.value,u));let v=-1;if(m){const T=E(m);if(T){const y=T.getRect(f.value,u);v=V(y.top,l)}}else v=V(a,l);g.value=i[v],t&&n.forEach((T,y)=>{const{state:x,$el:rt}=T;if(y===v||y===v-1){const b=rt.getBoundingClientRect();x.left=b.left,x.width=b.width}else x.left=null,x.width=null;if(y===v)x.active=!0,x.top=Math.max(e.stickyOffsetTop,l[y].top-a)+u.top;else if(y===v-1&&m===""){const b=l[v].top-a;x.active=b>0,x.top=b+u.top-l[y].height}else x.active=!1}),m=""},N=()=>{At(k)};j("scroll",k,{target:f,passive:!0}),It(N),F(()=>e.indexList,N),F(g,t=>{t&&r("change",t)});const st=()=>e.indexList.map(t=>{const i=t===g.value;return c("span",{class:w("index",{active:i}),style:i?ot.value:void 0,"data-index":t},[t])}),P=t=>{m=String(t);const i=E(m);if(i){const a=L(f.value),u=R(f),{offsetHeight:l}=document.documentElement;if(a===l-u.height){k();return}i.$el.scrollIntoView(),e.sticky&&e.stickyOffsetTop&&ht(Q()-e.stickyOffsetTop),r("select",i.index)}},$=t=>{const{index:i}=t.dataset;i&&P(i)},it=t=>{$(t.target)};let z;const ct=t=>{if(h.move(t),h.isVertical()){mt(t);const{clientX:i,clientY:a}=t.touches[0],u=document.elementFromPoint(i,a);if(u){const{index:l}=u.dataset;l&&z!==l&&(z=l,$(u))}}},D=()=>c("div",{ref:p,class:w("sidebar"),style:nt.value,onClick:it,onTouchstartPassive:h.start},[st()]);return W({scrollTo:P}),j("touchmove",ct,{target:p}),()=>{var i;let t;return c("div",{ref:d,class:w()},[e.teleport?c(St,{to:e.teleport},Bt(t=D())?t:{default:()=>[t]}):D(),(i=s.default)==null?void 0:i.call(s)])}}}),Nt=G(Et),q=Nt,[Pt,$t]=K("index-anchor"),zt={index:Z},Dt=O({name:Pt,props:zt,setup(e,{slots:r}){const s=kt({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),d=A(),{parent:p}=pt(et);if(!p)return;const g=()=>s.active&&p.props.sticky,h=B(()=>{const{zIndex:n,highlightColor:S}=p.props;if(g())return xt(gt(n),{left:s.left?`${s.left}px`:void 0,width:s.width?`${s.width}px`:void 0,transform:s.top?`translate3d(0, ${s.top}px, 0)`:void 0,color:S})});return W({state:s,getRect:(n,S)=>{const m=R(d);return s.rect.height=m.height,n===window||n===document.body?s.rect.top=m.top+Q():s.rect.top=m.top+L(n)-S.top,s.rect}}),()=>{const n=g();return c("div",{ref:d,style:{height:n?`${s.rect.height}px`:void 0}},[c("div",{style:h.value,class:[$t({sticky:n}),{[Rt]:n}]},[r.default?r.default():e.index])])}}}),Mt=G(Dt),J=Mt,se=O({__name:"index",setup(e){const r=vt({"zh-CN":{text:"\u6587\u672C",customIndexList:"\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),s=A(0),d=[],p=[1,2,3,4,5,6,8,9,10],g="A".charCodeAt(0);for(let h=0;h<26;h++)d.push(String.fromCharCode(g+h));return(h,f)=>(_(),_t(o(at),{active:s.value,"onUpdate:active":f[0]||(f[0]=n=>s.value=n)},{default:C(()=>[c(o(M),{title:o(r)("basicUsage")},{default:C(()=>[c(o(q),null,{default:C(()=>[(_(),H(Y,null,U(d,n=>X("div",{key:n},[c(o(J),{index:n},null,8,["index"]),c(o(I),{title:o(r)("text")},null,8,["title"]),c(o(I),{title:o(r)("text")},null,8,["title"]),c(o(I),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(o(M),{title:o(r)("customIndexList")},{default:C(()=>[c(o(q),{"index-list":p},{default:C(()=>[(_(),H(Y,null,U(p,n=>X("div",{key:n},[c(o(J),{index:n},{default:C(()=>[wt(Lt(o(r)("title")+n),1)]),_:2},1032,["index"]),c(o(I),{title:o(r)("text")},null,8,["title"]),c(o(I),{title:o(r)("text")},null,8,["title"]),c(o(I),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{se as default};
