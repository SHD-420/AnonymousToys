"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[638],{752:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(8222);const n={name:"BaseTextField",props:{modelValue:{type:String,default:""},label:{type:String,default:""},isTextArea:{type:Boolean,default:!1},type:{type:String,default:"text"},min:{type:Number,default:null},max:{type:Number,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e){var t=e.isTextArea?"textarea":"input",r=(0,a.iH)(!1);return function(n,l){return(0,a.wg)(),(0,a.iD)("div",{class:(0,a.C_)(["grid rounded-md border-t border-b-2 px-4 py-1",e.isInvalid?"border-red-600 bg-red-50":"border-amber-500 bg-slate-100"])},[((0,a.wg)(),(0,a.j4)((0,a.LL)((0,a.SU)(t)),{rows:"5",class:"row-start-1 col-start-1 bg-transparent focus:outline-none resize-none",type:e.type,minlength:e.min,maxlength:e.max,value:e.modelValue,onInput:l[0]||(l[0]=function(e){return n.$emit("update:modelValue",e.target.value)}),onFocus:l[1]||(l[1]=function(e){return r.value=!0}),onBlur:l[2]||(l[2]=function(e){return r.value=!1})},null,40,["type","minlength","maxlength","value"])),(0,a._)("p",{class:(0,a.C_)([{"scale-75 -translate-y-6 -translate-x-2 opacity-100":r.value||e.modelValue.length},"pointer-events-none origin-top-left col-start-1 row-start-1 duration-200 opacity-50"])},(0,a.zw)(e.label),3)],2)}}}},638:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var a=r(8222),n=r(752),l=r(4318),o=r(7810),i=r(3907);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){i=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw n}}return l}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var p={class:"max-w-lg mx-auto py-12"},m={key:0,class:"flex space-x-4 text-xl items-center p-4 text-center justify-center bg-slate-100 text-slate-900 rounded-lg shadow-lg"},f=(0,a._)("p",null,"Tu carrito esta vacío...",-1),v={key:1},b=(0,a._)("h2",{class:"text-4xl font-semibold text-slate-900 mb-8"}," Confirmar pago ",-1),y=(0,a._)("p",{class:"text-slate-500 mb-4"}," Por favor ingrese su correo electrónico para iniciar el proceso. ",-1),x=["onSubmit"],g=["disabled"],h={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},w={key:1},S={key:2},k={key:0,class:"text-gray-500"},_={key:1,class:"mb-8 bg-slate-200 border rounded-md border-slate-500 py-8 px-4 flex space-x-4 mt-4"},A=(0,a._)("p",{class:"text-slate-900"}," El enlace para proceder con la compra ha sido enviado por correo. Por favor revise su correo electrónico y siga las instrucciones. ",-1),I={key:2,class:"mb-8 bg-red-50 border rounded-md border-red-600 py-8 px-4 flex space-x-4 mt-4"},U=(0,a._)("p",{class:"text-red-600"}," Se produjo algún error. Por favor, intenta de nuevo ",-1),D={class:"bg-slate-100 py-4 px-8 rounded-md shadow mt-8"},z=(0,a._)("h4",{class:"text-2xl font-semibold mb-2"}," Requesting checkout for: ",-1),C={class:"flex space-x-2 items-center"},V=(0,a._)("span",null,"Total Price:",-1),j={class:"text-xl"},q={class:"flex space-x-2 items-center mb-4"},T=(0,a._)("span",null,"Item count:",-1),P={class:"text-xl"},E=(0,a.Uk)("Edit cart");const H={name:"RequestCheckout",setup:function(e){var t,r=(0,a.iH)(""),c=(0,a.iH)(!1),d=(0,l.ZP)(),H=(0,i.oR)(),N=(0,a.Fl)((function(){return H.state.cart})),R=(0,a.iH)("pending"),W=(0,a.iH)(-1),B=(0,a.Fl)((function(){return 0!==W.value&&!["pending","error"].includes(R.value)}));function F(){var e=N.value.items;e.size&&(B.value||(/^\S+@\S+\.\S+$/.test(r.value)?(R.value="loading",W.value=-1,d.post("/api/checkout",{email:r.value,items:u(e.entries()).map((function(e){var t=s(e,2);return{product_id:t[0],quantity:t[1].quantity}}))}).then((function(e){"success"===e.data.message&&(R.value="success",W.value=30,t=setInterval((function(){W.value--,0===W.value&&clearInterval(t)}),1e3))})).catch((function(e){console.log(e.response),R.value="error"}))):c.value=!0))}return function(e,t){var l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a.SU)(N).items.size?((0,a.wg)(),(0,a.iD)("div",v,[b,y,(0,a._)("form",{class:"flex space-x-4 w-full",onSubmit:(0,a.iM)(F,["prevent"])},[(0,a.Wm)(n.Z,{label:"Email",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.value=e}),"is-invalid":c.value,class:"flex-grow"},null,8,["modelValue","is-invalid"]),(0,a._)("button",{class:"bg-amber-500 px-8 py-2 text-white rounded-md disabled:opacity-50",disabled:(0,a.SU)(B),type:"submit"},["loading"===R.value?((0,a.wg)(),(0,a.iD)("span",h)):0===W.value?((0,a.wg)(),(0,a.iD)("span",w," Resend ")):((0,a.wg)(),(0,a.iD)("span",S," Submit "))],8,g)],40,x),W.value>0?((0,a.wg)(),(0,a.iD)("p",k," Resend available in "+(0,a.zw)(W.value)+"s ",1)):(0,a.kq)("",!0),"success"===R.value?((0,a.wg)(),(0,a.iD)("div",_,[(0,a.Wm)((0,a.SU)(o.GN),{icon:"fa-check",class:"text-2xl text-slate-500"}),A])):(0,a.kq)("",!0),"error"===R.value?((0,a.wg)(),(0,a.iD)("div",I,[(0,a.Wm)((0,a.SU)(o.GN),{icon:"fa-exclamation-triangle",class:"text-2xl text-red-600"}),U])):(0,a.kq)("",!0),(0,a._)("div",D,[z,(0,a._)("p",C,[V,(0,a._)("span",j,"$"+(0,a.zw)((0,a.SU)(N).totalPrice),1)]),(0,a._)("p",q,[T,(0,a._)("span",P,(0,a.zw)((0,a.SU)(N).items.size),1)]),(0,a.Wm)(l,{to:{name:"Cart"},class:"text-amber-500 hover:underline"},{default:(0,a.w5)((function(){return[E]})),_:1})])])):((0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)((0,a.SU)(o.GN),{icon:"fa-exclamation-triangle"}),f]))])}}}}}]);