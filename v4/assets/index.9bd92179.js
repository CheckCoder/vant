import{c as p,b as v,E as b,e as P,u as G,p as _}from"./use-translate.9f14972f.js";import{n as h,b as y,t as E,w as O}from"./with-install.74763816.js";import{u as f}from"./use-expose.b4c33459.js";import{A as k,y as V,e as x,D as S,B as A}from"./vue-libs.a3cd7f61.js";import{c as B,C as w}from"./Checker.3a85af06.js";const[g,D]=p("checkbox-group"),K={max:h,disabled:Boolean,iconSize:h,direction:String,modelValue:y(),checkedColor:String},C=Symbol(g);var X=k({name:g,props:K,emits:["change","update:modelValue"],setup(a,{emit:t,slots:u}){const{children:c,linkChildren:i}=v(C),r=e=>t("update:modelValue",e),d=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:l,skipDisabled:s}=e,n=c.filter(o=>o.props.bindGroup?o.props.disabled&&s?o.checked.value:l!=null?l:!o.checked.value:!1).map(o=>o.name);r(n)};return V(()=>a.modelValue,e=>t("change",e)),f({toggleAll:d}),b(()=>a.modelValue),i({props:a,updateValue:r}),()=>{var e;return x("div",{class:D([a.direction])},[(e=u.default)==null?void 0:e.call(u)])}}});const[N,$]=p("checkbox"),z=P({},B,{bindGroup:E});var F=k({name:N,props:z,emits:["change","update:modelValue"],setup(a,{emit:t,slots:u}){const{parent:c}=G(C),i=e=>{const{name:l}=a,{max:s,modelValue:m}=c.props,n=m.slice();if(e)!(s&&n.length>=s)&&!n.includes(l)&&(n.push(l),a.bindGroup&&c.updateValue(n));else{const o=n.indexOf(l);o!==-1&&(n.splice(o,1),a.bindGroup&&c.updateValue(n))}},r=S(()=>c&&a.bindGroup?c.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),d=(e=!r.value)=>{c&&a.bindGroup?i(e):t("update:modelValue",e)};return V(()=>a.modelValue,e=>t("change",e)),f({toggle:d,props:a,checked:r}),b(()=>a.modelValue),()=>x(w,A({bem:$,role:"checkbox",parent:c,checked:r.value,onToggle:d},a),_(u,["default","icon"]))}});const Y=O(F);export{Y as C,X as _};
