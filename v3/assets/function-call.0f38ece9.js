import{c as f,e as s,d as m,f as g}from"./use-translate.c063e05d.js";import{m as r,n as w,u as k,w as b}from"./with-install.3e872450.js";import{m as h,u as y}from"./mount-component.190e1c69.js";import{p as O,P}from"./index.9369b636.js";import{z as S,e as i,A as N}from"./vue-libs.84e059bd.js";const[j,C]=f("notify"),v=s({},O,{type:r("danger"),color:String,message:w,position:r("top"),className:k,background:String,lockScroll:Boolean});var l=S({name:j,props:v,emits:["update:show"],setup(e,{emit:t,slots:a}){const d=p=>t("update:show",p);return()=>i(P,{show:e.show,class:[C([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,position:e.position,duration:.2,lockScroll:e.lockScroll,"onUpdate:show":d},{default:()=>[a.default?a.default():e.message]})}});let u,n;const x=e=>g(e)?e:{message:e};function D(){({instance:n}=h({setup(){const{state:e,toggle:t}=y();return()=>i(l,N(e,{"onUpdate:show":t}),null)}}))}function o(e){if(!!m)return n||D(),e=s({},o.currentOptions,x(e)),n.open(e),clearTimeout(u),e.duration>0&&(u=window.setTimeout(o.clear,e.duration)),n}const c=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});o.clear=()=>{n&&n.toggle(!1)};o.currentOptions=c();o.setDefaultOptions=e=>{s(o.currentOptions,e)};o.resetDefaultOptions=()=>{o.currentOptions=c()};o.Component=b(l);o.install=e=>{e.use(o.Component),e.config.globalProperties.$notify=o};export{o as N};