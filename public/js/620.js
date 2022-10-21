/*! For license information please see 620.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[620],{4174:(e,t,r)=>{r.d(t,{j:()=>n,l:()=>o});var n={PRODUCT_CREATED:{type:"success",message:"Producto creado con éxito"},PRODUCT_UPDATED:{type:"success",message:"¡Actualizó con éxito los datos del producto!"},PRODUCT_DELETED:{type:"success",message:"¡Eliminado el producto con éxito!"},MANUAL_CREATED:{type:"success",message:"¡Manual creado con éxito!"},MANUAL_DELETED:{type:"success",message:"¡Manual eliminado correctamente!"},MANUAL_UPDATED:{type:"success",message:"¡Manual actualizado con éxito!"},LOGIN_SUCCESS:{type:"success",message:"¡Ingresó exitosamente!"},GENERAL_ERROR:{type:"error",message:"¡Ocurrió un error inesperado!"},INVALID_CREDENTIALS:{type:"error",message:"Verifique sus credenciales y vuelva a intentarlo."},USER_EXISTS:{type:"error",message:"Este correo electrónico ha sido tomado."}};function o(){return{fire:function(e){window.dispatchEvent(new CustomEvent("notificationreq",{detail:e}))}}}},620:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var n=r(8222),o={class:"admin-register mx-auto my-5 px-3 px-sm-5 px-xl-0"},i=(0,n._)("h2",{class:"fw-bolder text-dark-blue"},"Registrarse",-1),a=(0,n._)("p",{class:"mb-5"}," Utilice el siguiente formulario para registrar un nuevo administrador del sitio. ",-1);var s=r(4174),l={class:"my-4"},c={class:"form-label text-dark-blue mb-1"},u=(0,n._)("span",null,"Introduce tu correo electrónico:",-1),f={key:0,class:"ms-2 text-danger"},d={class:"my-4"},p={class:"form-label text-dark-blue mb-1"},m=(0,n._)("span",null,"Elige un nombre de usuario:",-1),h={key:0,class:"ms-2 text-danger"},y={class:"register-form__password-field d-md-grid"},v={class:"my-3"},g={class:"form-label text-dark-blue mb-1"},w=(0,n._)("span",null,"Establecer una contraseña:",-1),b={key:0,class:"text-danger d-block mb-2"},E={class:"my-3"},x={class:"form-label text-dark-blue mb-1"},_=(0,n._)("span",null,"Escriba la contraseña otra vez:",-1),L={key:0,class:"text-danger d-block mb-2"},k=["disabled"],S={key:0,class:"spinner-grow spinner-grow-sm"},C={key:1};var N=r(4318);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function F(){F=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=b(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u={};function f(){}function d(){}function p(){}var m={};s(m,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(L([])));y&&y!==t&&r.call(y,o)&&(m=y);var v=p.prototype=f.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(o,i,a,s){var l=c(e[o],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==D(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(l.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,s(v,"constructor",p),s(p,"constructor",d),d.displayName=s(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,a,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(w.prototype),s(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(v),s(v,a,"Generator"),s(v,o,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function O(e,t,r,n,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){O(i,n,o,a,s,"next",e)}function s(e){O(i,n,o,a,s,"throw",e)}a(void 0)}))}}const R={setup:function(e,t){var r=t.emit,o=(0,N.bK)(),i=(0,n.iH)(!1),a=(0,n.iH)([]),s=(0,n.qj)({email:"",userName:"",password:"",passwordConfirmation:""});function l(){var e=[];/.+@.+\..+/.test(s.email)||e.push("email"),s.userName.length<4&&e.push("userName"),s.password.length<6&&e.push("password"),s.passwordConfirmation!==s.password&&e.push("passwordConfirmation"),a.value=e}function c(){return(c=A(F().mark((function e(){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(),a.value.length){e.next=15;break}return i.value=!0,e.prev=3,e.next=6,o.authPost("/api/admin/register",{name:s.userName,email:s.email,password:s.password});case 6:"success"===e.sent.data.message&&(i.value=!1,Object.keys(s).forEach((function(e){s[e]=""})),r("success")),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.response),Object.keys(e.t0.response.errors).includes("email")?r("input-error"):r("general-error"),i.value=!1;case 15:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}return{fields:s,invalidFields:a,submitForm:function(){return c.apply(this,arguments)},isFormSending:i}}};var j=r(3744);const T={components:{RegisterForm:(0,j.Z)(R,[["render",function(e,t,r,o,i,a){return(0,n.wg)(),(0,n.iD)("form",{class:"register-form my-4",onSubmit:t[4]||(t[4]=(0,n.iM)((function(){return o.submitForm&&o.submitForm.apply(o,arguments)}),["prevent"]))},[(0,n._)("div",l,[(0,n._)("label",c,[u,o.invalidFields.includes("email")?((0,n.wg)(),(0,n.iD)("small",f," Email inválido")):(0,n.kq)("",!0)]),(0,n.wy)((0,n._)("input",{type:"text",class:(0,n.C_)(["form-control",{"is-invalid":o.invalidFields.includes("email")}]),placeholder:"Correo","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.fields.email=e})},null,2),[[n.nr,o.fields.email]])]),(0,n._)("div",d,[(0,n._)("label",p,[m,o.invalidFields.includes("userName")?((0,n.wg)(),(0,n.iD)("small",h," Mínimo 4 caracteres. ")):(0,n.kq)("",!0)]),(0,n.wy)((0,n._)("input",{type:"text",maxlength:"12",class:(0,n.C_)(["form-control",{"is-invalid":o.invalidFields.includes("userName")}]),placeholder:"Nombre","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.fields.userName=e})},null,2),[[n.nr,o.fields.userName]])]),(0,n._)("div",y,[(0,n._)("div",v,[(0,n._)("label",g,[w,o.invalidFields.includes("password")?((0,n.wg)(),(0,n.iD)("small",b," Mínimo 6 caracteres ")):(0,n.kq)("",!0)]),(0,n.wy)((0,n._)("input",{type:"password",class:(0,n.C_)(["form-control",{"is-invalid":o.invalidFields.includes("password")}]),placeholder:"Contraseña","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.fields.password=e})},null,2),[[n.nr,o.fields.password]])]),(0,n._)("div",E,[(0,n._)("label",x,[_,o.invalidFields.includes("passwordConfirmation")?((0,n.wg)(),(0,n.iD)("small",L," Confirmación incomparable")):(0,n.kq)("",!0)]),(0,n.wy)((0,n._)("input",{type:"password",class:(0,n.C_)(["form-control",{"is-invalid":o.invalidFields.includes("passwordConfirmation")}]),placeholder:"Contraseña","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.fields.passwordConfirmation=e})},null,2),[[n.nr,o.fields.passwordConfirmation]])])]),(0,n._)("button",{class:"w-100 btn btn-primary mt-5",disabled:o.isFormSending},[o.isFormSending?((0,n.wg)(),(0,n.iD)("span",S)):((0,n.wg)(),(0,n.iD)("span",C,"Crear"))],8,k)],32)}]])},setup:function(){var e=(0,s.l)();return{notifySuccess:function(){e.fire(s.j.MANUAL_CREATED)},notifyGeneralError:function(){e.fire(s.j.GENERAL_ERROR)},notifyInputError:function(){e.fire(s.j.USER_EXISTS)}}}},U=(0,j.Z)(T,[["render",function(e,t,r,s,l,c){var u=(0,n.up)("register-form");return(0,n.wg)(),(0,n.iD)("div",o,[i,a,(0,n.Wm)(u,{onSuccess:s.notifySuccess,onInputError:s.notifyInputError,onGeneralError:s.notifyGeneralError},null,8,["onSuccess","onInputError","onGeneralError"])])}]])}}]);