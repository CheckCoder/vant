import{c as m,b as v,e as V,u as A}from"./use-translate.56565eec.js";import{c as k,w as u,n as B}from"./with-install.f3d37716.js";import{A as b,e as i,B as I}from"./vue-libs.a040eeb8.js";import{r as h,u as x}from"./use-route.f2a7e4c6.js";import{B as C}from"./index.bc7c56e3.js";const[p,N]=m("sidebar"),f=Symbol(p),_={modelValue:k(0)},w=b({name:p,props:_,emits:["change","update:modelValue"],setup(s,{emit:o,slots:t}){const{linkChildren:n}=v(f),a=()=>+s.modelValue;return n({getActive:a,setActive:e=>{e!==a()&&(o("update:modelValue",e),o("change",e))}}),()=>{var e;return i("div",{role:"tablist",class:N()},[(e=t.default)==null?void 0:e.call(t)])}}}),E=u(w),z=E,[R,l]=m("sidebar-item"),$=V({},h,{dot:Boolean,title:String,badge:B,disabled:Boolean,badgeProps:Object}),j=b({name:R,props:$,emits:["click"],setup(s,{emit:o,slots:t}){const n=x(),{parent:a,index:r}=A(f);if(!a)return;const e=()=>{s.disabled||(o("click",r.value),a.setActive(r.value),n())};return()=>{const{dot:g,badge:S,title:P,disabled:c}=s,d=r.value===a.getActive();return i("div",{role:"tab",class:l({select:d,disabled:c}),tabindex:c?void 0:0,"aria-selected":d,onClick:e},[i(C,I({dot:g,class:l("text"),content:S},s.badgeProps),{default:()=>[t.title?t.title():P]})])}}}),y=u(j),F=y;export{E as S,z as V,F as a,y as b};
