import{p as y}from"./parse.bee59afc.js";import{c as h,a as g}from"./singletons.74a8aee1.js";const E=h("invalidate_all");function A(t){return g.apply_action(t)}function w(t){const o=JSON.parse(t);return o.data&&(o.data=y(o.data)),o}function L(t){return HTMLElement.prototype.cloneNode.call(t)}function F(t,o=()=>{}){const c=async({action:e,result:r,reset:n})=>{r.type==="success"&&(n!==!1&&HTMLFormElement.prototype.reset.call(t),await E()),(location.origin+location.pathname===e.origin+e.pathname||r.type==="redirect"||r.type==="error")&&A(r)};async function s(e){var m,d,f;e.preventDefault();const r=new URL((m=e.submitter)!=null&&m.hasAttribute("formaction")?e.submitter.formAction:L(t).action),n=new FormData(t),l=(d=e.submitter)==null?void 0:d.getAttribute("name");l&&n.append(l,((f=e.submitter)==null?void 0:f.getAttribute("value"))??"");const u=new AbortController;let p=!1;const b=await o({action:r,cancel:()=>p=!0,controller:u,get data(){return n},formData:n,get form(){return t},formElement:t,submitter:e.submitter})??c;if(p)return;let i;try{const a=await fetch(r,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:n,signal:u.signal});i=w(await a.text()),i.type==="error"&&(i.status=a.status)}catch(a){if((a==null?void 0:a.name)==="AbortError")return;i={type:"error",error:a}}b({action:r,get data(){return n},formData:n,get form(){return t},formElement:t,update:a=>c({action:r,result:i,reset:a==null?void 0:a.reset}),result:i})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",s),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",s)}}}export{F as e};