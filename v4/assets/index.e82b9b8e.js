import{V as a}from"./index.2745e0b1.js";import{a as F}from"./use-translate.8036e41d.js";import{s as U}from"./index.fda1c946.js";import{A,x as i,r as c,o as y,a as b,e as l,w as n,C as u,d as g,t as E,F as S}from"./vue-libs.a040eeb8.js";import"./with-install.6887218d.js";import"./use-touch.ee9512d6.js";import"./index.bbaa83e9.js";import"./index.b6b83872.js";import"./constant.80c6de18.js";import"./interceptor.66b82326.js";import"./use-expose.1f17c8d6.js";import"./use-lazy-render.615ed830.js";import"./on-popup-reopen.2164636b.js";import"./index.83fec59c.js";import"./index.e68b0dfb.js";import"./mount-component.5abe2a8c.js";const D={class:"custom-button"},k={style:{height:"150px",paddingLeft:"30px"}},W=A({__name:"index",setup(w){const o=F({"zh-CN":{text:"\u5F53\u524D\u503C\uFF1A",title1:"\u57FA\u7840\u7528\u6CD5",title2:"\u53CC\u6ED1\u5757",title3:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4",title4:"\u7981\u7528",title5:"\u6307\u5B9A\u6B65\u957F",vertical:"\u5782\u76F4\u65B9\u5411",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customButton:"\u81EA\u5B9A\u4E49\u6309\u94AE"},"en-US":{text:"Current value: ",title1:"Basic Usage",title2:"Dual thumb mode",title3:"Range",title4:"Disabled",title5:"Step size",vertical:"Vertical",customStyle:"Custom Style",customButton:"Custom Button"}}),r=i(50),p=i([20,60]),v=i(0),V=i(50),f=i(50),x=i(50),s=i(50),B=i(50),C=i([20,60]),d=_=>U(o("text")+_);return(_,e)=>{const m=c("demo-block");return y(),b(S,null,[l(m,{title:u(o)("title1")},{default:n(()=>[l(u(a),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t),onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:u(o)("title2")},{default:n(()=>[l(u(a),{range:"",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:u(o)("title3")},{default:n(()=>[l(u(a),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=t=>v.value=t),min:-50,max:50,onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:u(o)("title4")},{default:n(()=>[l(u(a),{modelValue:V.value,"onUpdate:modelValue":e[3]||(e[3]=t=>V.value=t),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:u(o)("title5")},{default:n(()=>[l(u(a),{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t),step:10,onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:u(o)("customStyle")},{default:n(()=>[l(u(a),{modelValue:x.value,"onUpdate:modelValue":e[5]||(e[5]=t=>x.value=t),"bar-height":"4px","active-color":"#ee0a24",onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:u(o)("customButton")},{default:n(()=>[l(u(a),{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value=t)},{button:n(()=>[g("div",D,E(s.value),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(m,{title:u(o)("vertical")},{default:n(()=>[g("div",k,[l(u(a),{modelValue:B.value,"onUpdate:modelValue":e[7]||(e[7]=t=>B.value=t),vertical:"",onChange:d},null,8,["modelValue"]),l(u(a),{modelValue:C.value,"onUpdate:modelValue":e[8]||(e[8]=t=>C.value=t),range:"",vertical:"",style:{"margin-left":"100px"},onChange:d},null,8,["modelValue"])])]),_:1},8,["title"])],64)}}});export{W as default};