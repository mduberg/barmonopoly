(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Oc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Dc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Le(s)?Gm(s):Dc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Le(t))return t;if(Te(t))return t}}const Km=/;(?![^(]*\))/g,zm=/:([^]+)/,Wm=/\/\*.*?\*\//gs;function Gm(t){const e={};return t.replace(Wm,"").split(Km).forEach(n=>{if(n){const s=n.split(zm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Nc(t){let e="";if(Le(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Nc(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ym=Oc(Qm);function kf(t){return!!t||t===""}const TA=t=>Le(t)?t:t==null?"":G(t)||Te(t)&&(t.toString===Nf||!J(t.toString))?JSON.stringify(t,Rf,2):String(t),Rf=(t,e)=>e&&e.__v_isRef?Rf(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Of(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!G(e)&&!Pf(e)?String(e):e,be={},ps=[],bt=()=>{},Xm=()=>!1,Jm=/^on[^a-z]/,go=t=>Jm.test(t),Pc=t=>t.startsWith("onUpdate:"),Ke=Object.assign,xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zm=Object.prototype.hasOwnProperty,oe=(t,e)=>Zm.call(t,e),G=Array.isArray,gs=t=>mo(t)==="[object Map]",Of=t=>mo(t)==="[object Set]",J=t=>typeof t=="function",Le=t=>typeof t=="string",Mc=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Df=t=>Te(t)&&J(t.then)&&J(t.catch),Nf=Object.prototype.toString,mo=t=>Nf.call(t),ey=t=>mo(t).slice(8,-1),Pf=t=>mo(t)==="[object Object]",Lc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ii=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ty=/-(\w)/g,Ft=yo(t=>t.replace(ty,(e,n)=>n?n.toUpperCase():"")),ny=/\B([A-Z])/g,Ls=yo(t=>t.replace(ny,"-$1").toLowerCase()),vo=yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ua=yo(t=>t?`on${vo(t)}`:""),pr=(t,e)=>!Object.is(t,e),Ti=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hl;const sy=()=>hl||(hl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Dt;class ry{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function iy(t,e=Dt){e&&e.active&&e.effects.push(t)}const Uc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xf=t=>(t.w&bn)>0,Mf=t=>(t.n&bn)>0,oy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bn},ay=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];xf(r)&&!Mf(r)?r.delete(t):e[n++]=r,r.w&=~bn,r.n&=~bn}e.length=n}},La=new WeakMap;let Xs=0,bn=1;const Ua=30;let _t;const Kn=Symbol(""),Fa=Symbol("");class Fc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,iy(this,s)}run(){if(!this.active)return this.fn();let e=_t,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_t,_t=this,mn=!0,bn=1<<++Xs,Xs<=Ua?oy(this):fl(this),this.fn()}finally{Xs<=Ua&&ay(this),bn=1<<--Xs,_t=this.parent,mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_t===this?this.deferStop=!0:this.active&&(fl(this),this.onStop&&this.onStop(),this.active=!1)}}function fl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mn=!0;const Lf=[];function Us(){Lf.push(mn),mn=!1}function Fs(){const t=Lf.pop();mn=t===void 0?!0:t}function dt(t,e,n){if(mn&&_t){let s=La.get(t);s||La.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Uc()),Uf(r)}}function Uf(t,e){let n=!1;Xs<=Ua?Mf(t)||(t.n|=bn,n=!xf(t)):n=!t.has(_t),n&&(t.add(_t),_t.deps.push(t))}function Qt(t,e,n,s,r,i){const o=La.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=gr(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Lc(n)&&a.push(o.get("length")):(a.push(o.get(Kn)),gs(t)&&a.push(o.get(Fa)));break;case"delete":G(t)||(a.push(o.get(Kn)),gs(t)&&a.push(o.get(Fa)));break;case"set":gs(t)&&a.push(o.get(Kn));break}if(a.length===1)a[0]&&Va(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Va(Uc(c))}}function Va(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&dl(s);for(const s of n)s.computed||dl(s)}function dl(t,e){(t!==_t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const cy=Oc("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mc)),uy=Vc(),ly=Vc(!1,!0),hy=Vc(!0),pl=fy();function fy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let i=0,o=this.length;i<o;i++)dt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(fe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const s=fe(this)[e].apply(this,n);return Fs(),s}}),t}function Vc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ky:qf:e?jf:$f).get(s))return s;const o=G(s);if(!t&&o&&oe(pl,r))return Reflect.get(pl,r,i);const a=Reflect.get(s,r,i);return(Mc(r)?Ff.has(r):cy(r))||(t||dt(s,"get",r),e)?a:Xe(a)?o&&Lc(r)?a:a.value:Te(a)?t?Hf(a):Ur(a):a}}const dy=Vf(),py=Vf(!0);function Vf(t=!1){return function(n,s,r,i){let o=n[s];if(Is(o)&&Xe(o)&&!Xe(r))return!1;if(!t&&(!Vi(r)&&!Is(r)&&(o=fe(o),r=fe(r)),!G(n)&&Xe(o)&&!Xe(r)))return o.value=r,!0;const a=G(n)&&Lc(s)?Number(s)<n.length:oe(n,s),c=Reflect.set(n,s,r,i);return n===fe(i)&&(a?pr(r,o)&&Qt(n,"set",s,r):Qt(n,"add",s,r)),c}}function gy(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Qt(t,"delete",e,void 0),s}function my(t,e){const n=Reflect.has(t,e);return(!Mc(e)||!Ff.has(e))&&dt(t,"has",e),n}function yy(t){return dt(t,"iterate",G(t)?"length":Kn),Reflect.ownKeys(t)}const Bf={get:uy,set:dy,deleteProperty:gy,has:my,ownKeys:yy},vy={get:hy,set(t,e){return!0},deleteProperty(t,e){return!0}},wy=Ke({},Bf,{get:ly,set:py}),Bc=t=>t,wo=t=>Reflect.getPrototypeOf(t);function li(t,e,n=!1,s=!1){t=t.__v_raw;const r=fe(t),i=fe(e);n||(e!==i&&dt(r,"get",e),dt(r,"get",i));const{has:o}=wo(r),a=s?Bc:n?qc:mr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function hi(t,e=!1){const n=this.__v_raw,s=fe(n),r=fe(t);return e||(t!==r&&dt(s,"has",t),dt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function fi(t,e=!1){return t=t.__v_raw,!e&&dt(fe(t),"iterate",Kn),Reflect.get(t,"size",t)}function gl(t){t=fe(t);const e=fe(this);return wo(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function ml(t,e){e=fe(e);const n=fe(this),{has:s,get:r}=wo(n);let i=s.call(n,t);i||(t=fe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?pr(e,o)&&Qt(n,"set",t,e):Qt(n,"add",t,e),this}function yl(t){const e=fe(this),{has:n,get:s}=wo(e);let r=n.call(e,t);r||(t=fe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Qt(e,"delete",t,void 0),i}function vl(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Qt(t,"clear",void 0,void 0),n}function di(t,e){return function(s,r){const i=this,o=i.__v_raw,a=fe(o),c=e?Bc:t?qc:mr;return!t&&dt(a,"iterate",Kn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function pi(t,e,n){return function(...s){const r=this.__v_raw,i=fe(r),o=gs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Bc:e?qc:mr;return!e&&dt(i,"iterate",c?Fa:Kn),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:a?[l(d[0]),l(d[1])]:l(d),done:g}},[Symbol.iterator](){return this}}}}function rn(t){return function(...e){return t==="delete"?!1:this}}function _y(){const t={get(i){return li(this,i)},get size(){return fi(this)},has:hi,add:gl,set:ml,delete:yl,clear:vl,forEach:di(!1,!1)},e={get(i){return li(this,i,!1,!0)},get size(){return fi(this)},has:hi,add:gl,set:ml,delete:yl,clear:vl,forEach:di(!1,!0)},n={get(i){return li(this,i,!0)},get size(){return fi(this,!0)},has(i){return hi.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:di(!0,!1)},s={get(i){return li(this,i,!0,!0)},get size(){return fi(this,!0)},has(i){return hi.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:di(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pi(i,!1,!1),n[i]=pi(i,!0,!1),e[i]=pi(i,!1,!0),s[i]=pi(i,!0,!0)}),[t,n,e,s]}const[Ey,by,Iy,Ty]=_y();function $c(t,e){const n=e?t?Ty:Iy:t?by:Ey;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const Sy={get:$c(!1,!1)},Cy={get:$c(!1,!0)},Ay={get:$c(!0,!1)},$f=new WeakMap,jf=new WeakMap,qf=new WeakMap,ky=new WeakMap;function Ry(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ry(ey(t))}function Ur(t){return Is(t)?t:jc(t,!1,Bf,Sy,$f)}function Dy(t){return jc(t,!1,wy,Cy,jf)}function Hf(t){return jc(t,!0,vy,Ay,qf)}function jc(t,e,n,s,r){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Oy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ms(t){return Is(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function Vi(t){return!!(t&&t.__v_isShallow)}function Kf(t){return ms(t)||Is(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function zf(t){return Fi(t,"__v_skip",!0),t}const mr=t=>Te(t)?Ur(t):t,qc=t=>Te(t)?Hf(t):t;function Wf(t){mn&&_t&&(t=fe(t),Uf(t.dep||(t.dep=Uc())))}function Gf(t,e){t=fe(t),t.dep&&Va(t.dep)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function Ny(t){return Qf(t,!1)}function Py(t){return Qf(t,!0)}function Qf(t,e){return Xe(t)?t:new xy(t,e)}class xy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:mr(e)}get value(){return Wf(this),this._value}set value(e){const n=this.__v_isShallow||Vi(e)||Is(e);e=n?e:fe(e),pr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:mr(e),Gf(this))}}function ys(t){return Xe(t)?t.value:t}const My={get:(t,e,n)=>ys(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Xe(r)&&!Xe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Yf(t){return ms(t)?t:new Proxy(t,My)}var Xf;class Ly{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xf]=!1,this._dirty=!0,this.effect=new Fc(e,()=>{this._dirty||(this._dirty=!0,Gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=fe(this);return Wf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Xf="__v_isReadonly";function Uy(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=bt):(s=t.get,r=t.set),new Ly(s,r,i||!r,n)}function yn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){_o(i,e,n)}return r}function yt(t,e,n,s){if(J(t)){const i=yn(t,e,n,s);return i&&Df(i)&&i.catch(o=>{_o(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(yt(t[i],e,n,s));return r}function _o(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){yn(c,null,10,[t,o,a]);return}}Fy(t,n,r,s)}function Fy(t,e,n,s=!0){console.error(t)}let yr=!1,Ba=!1;const Qe=[];let xt=0;const vs=[];let jt=null,Fn=0;const Jf=Promise.resolve();let Hc=null;function Zf(t){const e=Hc||Jf;return t?e.then(this?t.bind(this):t):e}function Vy(t){let e=xt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;vr(Qe[s])<t?e=s+1:n=s}return e}function Kc(t){(!Qe.length||!Qe.includes(t,yr&&t.allowRecurse?xt+1:xt))&&(t.id==null?Qe.push(t):Qe.splice(Vy(t.id),0,t),ed())}function ed(){!yr&&!Ba&&(Ba=!0,Hc=Jf.then(nd))}function By(t){const e=Qe.indexOf(t);e>xt&&Qe.splice(e,1)}function $y(t){G(t)?vs.push(...t):(!jt||!jt.includes(t,t.allowRecurse?Fn+1:Fn))&&vs.push(t),ed()}function wl(t,e=yr?xt+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function td(t){if(vs.length){const e=[...new Set(vs)];if(vs.length=0,jt){jt.push(...e);return}for(jt=e,jt.sort((n,s)=>vr(n)-vr(s)),Fn=0;Fn<jt.length;Fn++)jt[Fn]();jt=null,Fn=0}}const vr=t=>t.id==null?1/0:t.id,jy=(t,e)=>{const n=vr(t)-vr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nd(t){Ba=!1,yr=!0,Qe.sort(jy);const e=bt;try{for(xt=0;xt<Qe.length;xt++){const n=Qe[xt];n&&n.active!==!1&&yn(n,null,14)}}finally{xt=0,Qe.length=0,td(),yr=!1,Hc=null,(Qe.length||vs.length)&&nd()}}function qy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:g}=s[l]||be;g&&(r=n.map(y=>Le(y)?y.trim():y)),d&&(r=n.map(gr))}let a,c=s[a=ua(e)]||s[a=ua(Ft(e))];!c&&i&&(c=s[a=ua(Ls(e))]),c&&yt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yt(u,t,6,r)}}function sd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=u=>{const l=sd(u,e,!0);l&&(a=!0,Ke(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Te(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Ke(o,i),Te(t)&&s.set(t,o),o)}function Eo(t,e){return!t||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Ls(e))||oe(t,e))}let ht=null,bo=null;function Bi(t){const e=ht;return ht=t,bo=t&&t.type.__scopeId||null,e}function rd(t){bo=t}function id(){bo=null}function Hy(t,e=ht,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Rl(-1);const i=Bi(e);let o;try{o=t(...r)}finally{Bi(i),s._d&&Rl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function la(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:d,data:g,setupState:y,ctx:E,inheritAttrs:T}=t;let k,O;const N=Bi(t);try{if(n.shapeFlag&4){const H=r||s;k=Pt(l.call(H,H,d,i,y,g,E)),O=c}else{const H=e;k=Pt(H.length>1?H(i,{attrs:c,slots:a,emit:u}):H(i,null)),O=e.props?c:Ky(c)}}catch(H){ir.length=0,_o(H,t,1),k=it(It)}let P=k;if(O&&T!==!1){const H=Object.keys(O),{shapeFlag:ne}=P;H.length&&ne&7&&(o&&H.some(Pc)&&(O=zy(O,o)),P=In(P,O))}return n.dirs&&(P=In(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),k=P,Bi(N),k}const Ky=t=>{let e;for(const n in t)(n==="class"||n==="style"||go(n))&&((e||(e={}))[n]=t[n]);return e},zy=(t,e)=>{const n={};for(const s in t)(!Pc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Wy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?_l(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const g=l[d];if(o[g]!==s[g]&&!Eo(u,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?_l(s,o,u):!0:!!o;return!1}function _l(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Eo(n,i))return!0}return!1}function Gy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qy=t=>t.__isSuspense;function Yy(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):$y(t)}function Si(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function zt(t,e,n=!1){const s=Be||ht;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const gi={};function Ci(t,e,n){return od(t,e,n)}function od(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=be){const a=Be;let c,u=!1,l=!1;if(Xe(t)?(c=()=>t.value,u=Vi(t)):ms(t)?(c=()=>t,s=!0):G(t)?(l=!0,u=t.some(P=>ms(P)||Vi(P)),c=()=>t.map(P=>{if(Xe(P))return P.value;if(ms(P))return $n(P);if(J(P))return yn(P,a,2)})):J(t)?e?c=()=>yn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),yt(t,a,3,[g])}:c=bt,e&&s){const P=c;c=()=>$n(P())}let d,g=P=>{d=O.onStop=()=>{yn(P,a,4)}},y;if(_r)if(g=bt,e?n&&yt(e,a,3,[c(),l?[]:void 0,g]):c(),r==="sync"){const P=Gv();y=P.__watcherHandles||(P.__watcherHandles=[])}else return bt;let E=l?new Array(t.length).fill(gi):gi;const T=()=>{if(!!O.active)if(e){const P=O.run();(s||u||(l?P.some((H,ne)=>pr(H,E[ne])):pr(P,E)))&&(d&&d(),yt(e,a,3,[P,E===gi?void 0:l&&E[0]===gi?[]:E,g]),E=P)}else O.run()};T.allowRecurse=!!e;let k;r==="sync"?k=T:r==="post"?k=()=>ct(T,a&&a.suspense):(T.pre=!0,a&&(T.id=a.uid),k=()=>Kc(T));const O=new Fc(c,k);e?n?T():E=O.run():r==="post"?ct(O.run.bind(O),a&&a.suspense):O.run();const N=()=>{O.stop(),a&&a.scope&&xc(a.scope.effects,O)};return y&&y.push(N),N}function Xy(t,e,n){const s=this.proxy,r=Le(t)?t.includes(".")?ad(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=Be;Ts(this);const a=od(r,i.bind(s),n);return o?Ts(o):zn(),a}function ad(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function $n(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))$n(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)$n(t[n],e);else if(Of(t)||gs(t))t.forEach(n=>{$n(n,e)});else if(Pf(t))for(const n in t)$n(t[n],e);return t}function Jy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dd(()=>{t.isMounted=!0}),pd(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],Zy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},setup(t,{slots:e}){const n=Bv(),s=Jy();let r;return()=>{const i=e.default&&ld(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==It){o=T;break}}const a=fe(t),{mode:c}=a;if(s.isLeaving)return ha(o);const u=El(o);if(!u)return ha(o);const l=$a(u,a,s,n);ja(u,l);const d=n.subTree,g=d&&El(d);let y=!1;const{getTransitionKey:E}=u.type;if(E){const T=E();r===void 0?r=T:T!==r&&(r=T,y=!0)}if(g&&g.type!==It&&(!Vn(u,g)||y)){const T=$a(g,a,s,n);if(ja(g,T),c==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ha(o);c==="in-out"&&u.type!==It&&(T.delayLeave=(k,O,N)=>{const P=ud(s,g);P[String(g.key)]=g,k._leaveCb=()=>{O(),k._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=N})}return o}}},cd=Zy;function ud(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function $a(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:d,onLeave:g,onAfterLeave:y,onLeaveCancelled:E,onBeforeAppear:T,onAppear:k,onAfterAppear:O,onAppearCancelled:N}=e,P=String(t.key),H=ud(n,t),ne=(z,le)=>{z&&yt(z,s,9,le)},ue=(z,le)=>{const ae=le[1];ne(z,le),G(z)?z.every(ke=>ke.length<=1)&&ae():z.length<=1&&ae()},Se={mode:i,persisted:o,beforeEnter(z){let le=a;if(!n.isMounted)if(r)le=T||a;else return;z._leaveCb&&z._leaveCb(!0);const ae=H[P];ae&&Vn(t,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),ne(le,[z])},enter(z){let le=c,ae=u,ke=l;if(!n.isMounted)if(r)le=k||c,ae=O||u,ke=N||l;else return;let M=!1;const ye=z._enterCb=Ce=>{M||(M=!0,Ce?ne(ke,[z]):ne(ae,[z]),Se.delayedLeave&&Se.delayedLeave(),z._enterCb=void 0)};le?ue(le,[z,ye]):ye()},leave(z,le){const ae=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return le();ne(d,[z]);let ke=!1;const M=z._leaveCb=ye=>{ke||(ke=!0,le(),ye?ne(E,[z]):ne(y,[z]),z._leaveCb=void 0,H[ae]===t&&delete H[ae])};H[ae]=t,g?ue(g,[z,M]):M()},clone(z){return $a(z,e,n,s)}};return Se}function ha(t){if(Io(t))return t=In(t),t.children=null,t}function El(t){return Io(t)?t.children?t.children[0]:void 0:t}function ja(t,e){t.shapeFlag&6&&t.component?ja(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ld(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Nt?(o.patchFlag&128&&r++,s=s.concat(ld(o.children,e,a))):(e||o.type!==It)&&s.push(a!=null?In(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function hd(t){return J(t)?{setup:t,name:t.name}:t}const Ai=t=>!!t.type.__asyncLoader,Io=t=>t.type.__isKeepAlive;function ev(t,e){fd(t,"a",e)}function tv(t,e){fd(t,"da",e)}function fd(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(To(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Io(r.parent.vnode)&&nv(s,e,n,r),r=r.parent}}function nv(t,e,n,s){const r=To(e,t,s,!0);gd(()=>{xc(s[e],r)},n)}function To(t,e,n=Be,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),Ts(n);const a=yt(e,n,t,o);return zn(),Fs(),a});return s?r.unshift(i):r.push(i),i}}const tn=t=>(e,n=Be)=>(!_r||t==="sp")&&To(t,(...s)=>e(...s),n),sv=tn("bm"),dd=tn("m"),rv=tn("bu"),iv=tn("u"),pd=tn("bum"),gd=tn("um"),ov=tn("sp"),av=tn("rtg"),cv=tn("rtc");function uv(t,e=Be){To("ec",t,e)}function SA(t,e){const n=ht;if(n===null)return t;const s=Ao(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=be]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&$n(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Dn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Us(),yt(c,n,8,[t.el,a,t,e]),Fs())}}const md="components";function lv(t,e){return fv(md,t,!0,e)||t}const hv=Symbol();function fv(t,e,n=!0,s=!1){const r=ht||Be;if(r){const i=r.type;if(t===md){const a=Kv(i,!1);if(a&&(a===e||a===Ft(e)||a===vo(Ft(e))))return i}const o=bl(r[t]||i[t],e)||bl(r.appContext[t],e);return!o&&s?i:o}}function bl(t,e){return t&&(t[e]||t[Ft(e)]||t[vo(Ft(e))])}function CA(t,e,n,s){let r;const i=n&&n[s];if(G(t)||Le(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Te(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const qa=t=>t?Ad(t)?Ao(t)||t.proxy:qa(t.parent):null,rr=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qa(t.parent),$root:t=>qa(t.root),$emit:t=>t.emit,$options:t=>zc(t),$forceUpdate:t=>t.f||(t.f=()=>Kc(t.update)),$nextTick:t=>t.n||(t.n=Zf.bind(t.proxy)),$watch:t=>Xy.bind(t)}),fa=(t,e)=>t!==be&&!t.__isScriptSetup&&oe(t,e),dv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(fa(s,e))return o[e]=1,s[e];if(r!==be&&oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&oe(u,e))return o[e]=3,i[e];if(n!==be&&oe(n,e))return o[e]=4,n[e];Ha&&(o[e]=0)}}const l=rr[e];let d,g;if(l)return e==="$attrs"&&dt(t,"get",e),l(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==be&&oe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,oe(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return fa(r,e)?(r[e]=n,!0):s!==be&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==be&&oe(t,o)||fa(e,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(rr,o)||oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ha=!0;function pv(t){const e=zc(t),n=t.proxy,s=t.ctx;Ha=!1,e.beforeCreate&&Il(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:g,beforeUpdate:y,updated:E,activated:T,deactivated:k,beforeDestroy:O,beforeUnmount:N,destroyed:P,unmounted:H,render:ne,renderTracked:ue,renderTriggered:Se,errorCaptured:z,serverPrefetch:le,expose:ae,inheritAttrs:ke,components:M,directives:ye,filters:Ce}=e;if(u&&gv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const ce=o[ge];J(ce)&&(s[ge]=ce.bind(n))}if(r){const ge=r.call(n,n);Te(ge)&&(t.data=Ur(ge))}if(Ha=!0,i)for(const ge in i){const ce=i[ge],st=J(ce)?ce.bind(n,n):J(ce.get)?ce.get.bind(n,n):bt,Bt=!J(ce)&&J(ce.set)?ce.set.bind(n):bt,Fe=mt({get:st,set:Bt});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:We=>Fe.value=We})}if(a)for(const ge in a)yd(a[ge],s,n,ge);if(c){const ge=J(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ce=>{Si(ce,ge[ce])})}l&&Il(l,t,"c");function ve(ge,ce){G(ce)?ce.forEach(st=>ge(st.bind(n))):ce&&ge(ce.bind(n))}if(ve(sv,d),ve(dd,g),ve(rv,y),ve(iv,E),ve(ev,T),ve(tv,k),ve(uv,z),ve(cv,ue),ve(av,Se),ve(pd,N),ve(gd,H),ve(ov,le),G(ae))if(ae.length){const ge=t.exposed||(t.exposed={});ae.forEach(ce=>{Object.defineProperty(ge,ce,{get:()=>n[ce],set:st=>n[ce]=st})})}else t.exposed||(t.exposed={});ne&&t.render===bt&&(t.render=ne),ke!=null&&(t.inheritAttrs=ke),M&&(t.components=M),ye&&(t.directives=ye)}function gv(t,e,n=bt,s=!1){G(t)&&(t=Ka(t));for(const r in t){const i=t[r];let o;Te(i)?"default"in i?o=zt(i.from||r,i.default,!0):o=zt(i.from||r):o=zt(i),Xe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Il(t,e,n){yt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function yd(t,e,n,s){const r=s.includes(".")?ad(n,s):()=>n[s];if(Le(t)){const i=e[t];J(i)&&Ci(r,i)}else if(J(t))Ci(r,t.bind(n));else if(Te(t))if(G(t))t.forEach(i=>yd(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Ci(r,i,t)}}function zc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>$i(c,u,o,!0)),$i(c,e,o)),Te(e)&&i.set(e,c),c}function $i(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&$i(t,i,n,!0),r&&r.forEach(o=>$i(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=mv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mv={data:Tl,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Ln,directives:Ln,watch:vv,provide:Tl,inject:yv};function Tl(t,e){return e?t?function(){return Ke(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function yv(t,e){return Ln(Ka(t),Ka(e))}function Ka(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?Ke(Ke(Object.create(null),t),e):e}function vv(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=rt(t[s],e[s]);return n}function wv(t,e,n,s=!1){const r={},i={};Fi(i,Co,1),t.propsDefaults=Object.create(null),vd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Dy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function _v(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=fe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let g=l[d];if(Eo(t.emitsOptions,g))continue;const y=e[g];if(c)if(oe(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const E=Ft(g);r[E]=za(c,a,E,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{vd(t,e,r,i)&&(u=!0);let l;for(const d in a)(!e||!oe(e,d)&&((l=Ls(d))===d||!oe(e,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(r[d]=za(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!oe(e,d)&&!0)&&(delete i[d],u=!0)}u&&Qt(t,"set","$attrs")}function vd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ii(c))continue;const u=e[c];let l;r&&oe(r,l=Ft(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Eo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=fe(n),u=a||be;for(let l=0;l<i.length;l++){const d=i[l];n[d]=za(r,c,d,u[d],t,!oe(u,d))}}return o}function za(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ts(r),s=u[n]=c.call(null,e),zn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function wd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const l=d=>{c=!0;const[g,y]=wd(d,e,!0);Ke(o,g),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Te(t)&&s.set(t,ps),ps;if(G(i))for(let l=0;l<i.length;l++){const d=Ft(i[l]);Sl(d)&&(o[d]=be)}else if(i)for(const l in i){const d=Ft(l);if(Sl(d)){const g=i[l],y=o[d]=G(g)||J(g)?{type:g}:Object.assign({},g);if(y){const E=kl(Boolean,y.type),T=kl(String,y.type);y[0]=E>-1,y[1]=T<0||E<T,(E>-1||oe(y,"default"))&&a.push(d)}}}const u=[o,a];return Te(t)&&s.set(t,u),u}function Sl(t){return t[0]!=="$"}function Cl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Al(t,e){return Cl(t)===Cl(e)}function kl(t,e){return G(e)?e.findIndex(n=>Al(n,t)):J(e)&&Al(e,t)?0:-1}const _d=t=>t[0]==="_"||t==="$stable",Wc=t=>G(t)?t.map(Pt):[Pt(t)],Ev=(t,e,n)=>{if(e._n)return e;const s=Hy((...r)=>Wc(e(...r)),n);return s._c=!1,s},Ed=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_d(r))continue;const i=t[r];if(J(i))e[r]=Ev(r,i,s);else if(i!=null){const o=Wc(i);e[r]=()=>o}}},bd=(t,e)=>{const n=Wc(e);t.slots.default=()=>n},bv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Fi(e,"_",n)):Ed(e,t.slots={})}else t.slots={},e&&bd(t,e);Fi(t.slots,Co,1)},Iv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ed(e,r)),o=e}else e&&(bd(t,e),o={default:1});if(i)for(const a in r)!_d(a)&&!(a in o)&&delete r[a]};function Id(){return{app:null,config:{isNativeTag:Xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tv=0;function Sv(t,e){return function(s,r=null){J(s)||(s=Object.assign({},s)),r!=null&&!Te(r)&&(r=null);const i=Id(),o=new Set;let a=!1;const c=i.app={_uid:Tv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Qv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(c,...l)):J(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,d){if(!a){const g=it(s,r);return g.appContext=i,l&&e?e(g,u):t(g,u,d),a=!0,c._container=u,u.__vue_app__=c,Ao(g.component)||g.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Wa(t,e,n,s,r=!1){if(G(t)){t.forEach((g,y)=>Wa(g,e&&(G(e)?e[y]:e),n,s,r));return}if(Ai(s)&&!r)return;const i=s.shapeFlag&4?Ao(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===be?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(Le(u)?(l[u]=null,oe(d,u)&&(d[u]=null)):Xe(u)&&(u.value=null)),J(c))yn(c,a,12,[o,l]);else{const g=Le(c),y=Xe(c);if(g||y){const E=()=>{if(t.f){const T=g?oe(d,c)?d[c]:l[c]:c.value;r?G(T)&&xc(T,i):G(T)?T.includes(i)||T.push(i):g?(l[c]=[i],oe(d,c)&&(d[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else g?(l[c]=o,oe(d,c)&&(d[c]=o)):y&&(c.value=o,t.k&&(l[t.k]=o))};o?(E.id=-1,ct(E,n)):E()}}}const ct=Yy;function Cv(t){return Av(t)}function Av(t,e){const n=sy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:g,setScopeId:y=bt,insertStaticContent:E}=t,T=(h,f,m,p=null,v=null,I=null,b=!1,w=null,_=!!f.dynamicChildren)=>{if(h===f)return;h&&!Vn(h,f)&&(p=D(h),We(h,v,I,!0),h=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:S,ref:V,shapeFlag:L}=f;switch(S){case So:k(h,f,m,p);break;case It:O(h,f,m,p);break;case ki:h==null&&N(f,m,p,b);break;case Nt:M(h,f,m,p,v,I,b,w,_);break;default:L&1?ne(h,f,m,p,v,I,b,w,_):L&6?ye(h,f,m,p,v,I,b,w,_):(L&64||L&128)&&S.process(h,f,m,p,v,I,b,w,_,re)}V!=null&&v&&Wa(V,h&&h.ref,I,f||h,!f)},k=(h,f,m,p)=>{if(h==null)s(f.el=a(f.children),m,p);else{const v=f.el=h.el;f.children!==h.children&&u(v,f.children)}},O=(h,f,m,p)=>{h==null?s(f.el=c(f.children||""),m,p):f.el=h.el},N=(h,f,m,p)=>{[h.el,h.anchor]=E(h.children,f,m,p,h.el,h.anchor)},P=({el:h,anchor:f},m,p)=>{let v;for(;h&&h!==f;)v=g(h),s(h,m,p),h=v;s(f,m,p)},H=({el:h,anchor:f})=>{let m;for(;h&&h!==f;)m=g(h),r(h),h=m;r(f)},ne=(h,f,m,p,v,I,b,w,_)=>{b=b||f.type==="svg",h==null?ue(f,m,p,v,I,b,w,_):le(h,f,v,I,b,w,_)},ue=(h,f,m,p,v,I,b,w)=>{let _,S;const{type:V,props:L,shapeFlag:j,transition:W,dirs:ee}=h;if(_=h.el=o(h.type,I,L&&L.is,L),j&8?l(_,h.children):j&16&&z(h.children,_,null,p,v,I&&V!=="foreignObject",b,w),ee&&Dn(h,null,p,"created"),L){for(const me in L)me!=="value"&&!Ii(me)&&i(_,me,null,L[me],I,h.children,p,v,x);"value"in L&&i(_,"value",null,L.value),(S=L.onVnodeBeforeMount)&&Ot(S,p,h)}Se(_,h,h.scopeId,b,p),ee&&Dn(h,null,p,"beforeMount");const _e=(!v||v&&!v.pendingBranch)&&W&&!W.persisted;_e&&W.beforeEnter(_),s(_,f,m),((S=L&&L.onVnodeMounted)||_e||ee)&&ct(()=>{S&&Ot(S,p,h),_e&&W.enter(_),ee&&Dn(h,null,p,"mounted")},v)},Se=(h,f,m,p,v)=>{if(m&&y(h,m),p)for(let I=0;I<p.length;I++)y(h,p[I]);if(v){let I=v.subTree;if(f===I){const b=v.vnode;Se(h,b,b.scopeId,b.slotScopeIds,v.parent)}}},z=(h,f,m,p,v,I,b,w,_=0)=>{for(let S=_;S<h.length;S++){const V=h[S]=w?ln(h[S]):Pt(h[S]);T(null,V,f,m,p,v,I,b,w)}},le=(h,f,m,p,v,I,b)=>{const w=f.el=h.el;let{patchFlag:_,dynamicChildren:S,dirs:V}=f;_|=h.patchFlag&16;const L=h.props||be,j=f.props||be;let W;m&&Nn(m,!1),(W=j.onVnodeBeforeUpdate)&&Ot(W,m,f,h),V&&Dn(f,h,m,"beforeUpdate"),m&&Nn(m,!0);const ee=v&&f.type!=="foreignObject";if(S?ae(h.dynamicChildren,S,w,m,p,ee,I):b||ce(h,f,w,null,m,p,ee,I,!1),_>0){if(_&16)ke(w,f,L,j,m,p,v);else if(_&2&&L.class!==j.class&&i(w,"class",null,j.class,v),_&4&&i(w,"style",L.style,j.style,v),_&8){const _e=f.dynamicProps;for(let me=0;me<_e.length;me++){const Oe=_e[me],wt=L[Oe],os=j[Oe];(os!==wt||Oe==="value")&&i(w,Oe,wt,os,v,h.children,m,p,x)}}_&1&&h.children!==f.children&&l(w,f.children)}else!b&&S==null&&ke(w,f,L,j,m,p,v);((W=j.onVnodeUpdated)||V)&&ct(()=>{W&&Ot(W,m,f,h),V&&Dn(f,h,m,"updated")},p)},ae=(h,f,m,p,v,I,b)=>{for(let w=0;w<f.length;w++){const _=h[w],S=f[w],V=_.el&&(_.type===Nt||!Vn(_,S)||_.shapeFlag&70)?d(_.el):m;T(_,S,V,null,p,v,I,b,!0)}},ke=(h,f,m,p,v,I,b)=>{if(m!==p){if(m!==be)for(const w in m)!Ii(w)&&!(w in p)&&i(h,w,m[w],null,b,f.children,v,I,x);for(const w in p){if(Ii(w))continue;const _=p[w],S=m[w];_!==S&&w!=="value"&&i(h,w,S,_,b,f.children,v,I,x)}"value"in p&&i(h,"value",m.value,p.value)}},M=(h,f,m,p,v,I,b,w,_)=>{const S=f.el=h?h.el:a(""),V=f.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:W}=f;W&&(w=w?w.concat(W):W),h==null?(s(S,m,p),s(V,m,p),z(f.children,m,V,v,I,b,w,_)):L>0&&L&64&&j&&h.dynamicChildren?(ae(h.dynamicChildren,j,m,v,I,b,w),(f.key!=null||v&&f===v.subTree)&&Td(h,f,!0)):ce(h,f,m,V,v,I,b,w,_)},ye=(h,f,m,p,v,I,b,w,_)=>{f.slotScopeIds=w,h==null?f.shapeFlag&512?v.ctx.activate(f,m,p,b,_):Ce(f,m,p,v,I,b,_):kt(h,f,_)},Ce=(h,f,m,p,v,I,b)=>{const w=h.component=Vv(h,p,v);if(Io(h)&&(w.ctx.renderer=re),$v(w),w.asyncDep){if(v&&v.registerDep(w,ve),!h.el){const _=w.subTree=it(It);O(null,_,f,m)}return}ve(w,h,f,m,v,I,b)},kt=(h,f,m)=>{const p=f.component=h.component;if(Wy(h,f,m))if(p.asyncDep&&!p.asyncResolved){ge(p,f,m);return}else p.next=f,By(p.update),p.update();else f.el=h.el,p.vnode=f},ve=(h,f,m,p,v,I,b)=>{const w=()=>{if(h.isMounted){let{next:V,bu:L,u:j,parent:W,vnode:ee}=h,_e=V,me;Nn(h,!1),V?(V.el=ee.el,ge(h,V,b)):V=ee,L&&Ti(L),(me=V.props&&V.props.onVnodeBeforeUpdate)&&Ot(me,W,V,ee),Nn(h,!0);const Oe=la(h),wt=h.subTree;h.subTree=Oe,T(wt,Oe,d(wt.el),D(wt),h,v,I),V.el=Oe.el,_e===null&&Gy(h,Oe.el),j&&ct(j,v),(me=V.props&&V.props.onVnodeUpdated)&&ct(()=>Ot(me,W,V,ee),v)}else{let V;const{el:L,props:j}=f,{bm:W,m:ee,parent:_e}=h,me=Ai(f);if(Nn(h,!1),W&&Ti(W),!me&&(V=j&&j.onVnodeBeforeMount)&&Ot(V,_e,f),Nn(h,!0),L&&Z){const Oe=()=>{h.subTree=la(h),Z(L,h.subTree,h,v,null)};me?f.type.__asyncLoader().then(()=>!h.isUnmounted&&Oe()):Oe()}else{const Oe=h.subTree=la(h);T(null,Oe,m,p,h,v,I),f.el=Oe.el}if(ee&&ct(ee,v),!me&&(V=j&&j.onVnodeMounted)){const Oe=f;ct(()=>Ot(V,_e,Oe),v)}(f.shapeFlag&256||_e&&Ai(_e.vnode)&&_e.vnode.shapeFlag&256)&&h.a&&ct(h.a,v),h.isMounted=!0,f=m=p=null}},_=h.effect=new Fc(w,()=>Kc(S),h.scope),S=h.update=()=>_.run();S.id=h.uid,Nn(h,!0),S()},ge=(h,f,m)=>{f.component=h;const p=h.vnode.props;h.vnode=f,h.next=null,_v(h,f.props,p,m),Iv(h,f.children,m),Us(),wl(),Fs()},ce=(h,f,m,p,v,I,b,w,_=!1)=>{const S=h&&h.children,V=h?h.shapeFlag:0,L=f.children,{patchFlag:j,shapeFlag:W}=f;if(j>0){if(j&128){Bt(S,L,m,p,v,I,b,w,_);return}else if(j&256){st(S,L,m,p,v,I,b,w,_);return}}W&8?(V&16&&x(S,v,I),L!==S&&l(m,L)):V&16?W&16?Bt(S,L,m,p,v,I,b,w,_):x(S,v,I,!0):(V&8&&l(m,""),W&16&&z(L,m,p,v,I,b,w,_))},st=(h,f,m,p,v,I,b,w,_)=>{h=h||ps,f=f||ps;const S=h.length,V=f.length,L=Math.min(S,V);let j;for(j=0;j<L;j++){const W=f[j]=_?ln(f[j]):Pt(f[j]);T(h[j],W,m,null,v,I,b,w,_)}S>V?x(h,v,I,!0,!1,L):z(f,m,p,v,I,b,w,_,L)},Bt=(h,f,m,p,v,I,b,w,_)=>{let S=0;const V=f.length;let L=h.length-1,j=V-1;for(;S<=L&&S<=j;){const W=h[S],ee=f[S]=_?ln(f[S]):Pt(f[S]);if(Vn(W,ee))T(W,ee,m,null,v,I,b,w,_);else break;S++}for(;S<=L&&S<=j;){const W=h[L],ee=f[j]=_?ln(f[j]):Pt(f[j]);if(Vn(W,ee))T(W,ee,m,null,v,I,b,w,_);else break;L--,j--}if(S>L){if(S<=j){const W=j+1,ee=W<V?f[W].el:p;for(;S<=j;)T(null,f[S]=_?ln(f[S]):Pt(f[S]),m,ee,v,I,b,w,_),S++}}else if(S>j)for(;S<=L;)We(h[S],v,I,!0),S++;else{const W=S,ee=S,_e=new Map;for(S=ee;S<=j;S++){const lt=f[S]=_?ln(f[S]):Pt(f[S]);lt.key!=null&&_e.set(lt.key,S)}let me,Oe=0;const wt=j-ee+1;let os=!1,cl=0;const Ws=new Array(wt);for(S=0;S<wt;S++)Ws[S]=0;for(S=W;S<=L;S++){const lt=h[S];if(Oe>=wt){We(lt,v,I,!0);continue}let Rt;if(lt.key!=null)Rt=_e.get(lt.key);else for(me=ee;me<=j;me++)if(Ws[me-ee]===0&&Vn(lt,f[me])){Rt=me;break}Rt===void 0?We(lt,v,I,!0):(Ws[Rt-ee]=S+1,Rt>=cl?cl=Rt:os=!0,T(lt,f[Rt],m,null,v,I,b,w,_),Oe++)}const ul=os?kv(Ws):ps;for(me=ul.length-1,S=wt-1;S>=0;S--){const lt=ee+S,Rt=f[lt],ll=lt+1<V?f[lt+1].el:p;Ws[S]===0?T(null,Rt,m,ll,v,I,b,w,_):os&&(me<0||S!==ul[me]?Fe(Rt,m,ll,2):me--)}}},Fe=(h,f,m,p,v=null)=>{const{el:I,type:b,transition:w,children:_,shapeFlag:S}=h;if(S&6){Fe(h.component.subTree,f,m,p);return}if(S&128){h.suspense.move(f,m,p);return}if(S&64){b.move(h,f,m,re);return}if(b===Nt){s(I,f,m);for(let L=0;L<_.length;L++)Fe(_[L],f,m,p);s(h.anchor,f,m);return}if(b===ki){P(h,f,m);return}if(p!==2&&S&1&&w)if(p===0)w.beforeEnter(I),s(I,f,m),ct(()=>w.enter(I),v);else{const{leave:L,delayLeave:j,afterLeave:W}=w,ee=()=>s(I,f,m),_e=()=>{L(I,()=>{ee(),W&&W()})};j?j(I,ee,_e):_e()}else s(I,f,m)},We=(h,f,m,p=!1,v=!1)=>{const{type:I,props:b,ref:w,children:_,dynamicChildren:S,shapeFlag:V,patchFlag:L,dirs:j}=h;if(w!=null&&Wa(w,null,m,h,!0),V&256){f.ctx.deactivate(h);return}const W=V&1&&j,ee=!Ai(h);let _e;if(ee&&(_e=b&&b.onVnodeBeforeUnmount)&&Ot(_e,f,h),V&6)C(h.component,m,p);else{if(V&128){h.suspense.unmount(m,p);return}W&&Dn(h,null,f,"beforeUnmount"),V&64?h.type.remove(h,f,m,v,re,p):S&&(I!==Nt||L>0&&L&64)?x(S,f,m,!1,!0):(I===Nt&&L&384||!v&&V&16)&&x(_,f,m),p&&sn(h)}(ee&&(_e=b&&b.onVnodeUnmounted)||W)&&ct(()=>{_e&&Ot(_e,f,h),W&&Dn(h,null,f,"unmounted")},m)},sn=h=>{const{type:f,el:m,anchor:p,transition:v}=h;if(f===Nt){is(m,p);return}if(f===ki){H(h);return}const I=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:b,delayLeave:w}=v,_=()=>b(m,I);w?w(h.el,I,_):_()}else I()},is=(h,f)=>{let m;for(;h!==f;)m=g(h),r(h),h=m;r(f)},C=(h,f,m)=>{const{bum:p,scope:v,update:I,subTree:b,um:w}=h;p&&Ti(p),v.stop(),I&&(I.active=!1,We(b,h,f,m)),w&&ct(w,f),ct(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},x=(h,f,m,p=!1,v=!1,I=0)=>{for(let b=I;b<h.length;b++)We(h[b],f,m,p,v)},D=h=>h.shapeFlag&6?D(h.component.subTree):h.shapeFlag&128?h.suspense.next():g(h.anchor||h.el),B=(h,f,m)=>{h==null?f._vnode&&We(f._vnode,null,null,!0):T(f._vnode||null,h,f,null,null,null,m),wl(),td(),f._vnode=h},re={p:T,um:We,m:Fe,r:sn,mt:Ce,mc:z,pc:ce,pbc:ae,n:D,o:t};let we,Z;return e&&([we,Z]=e(re)),{render:B,hydrate:we,createApp:Sv(B,we)}}function Nn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Td(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ln(r[i]),a.el=o.el),n||Td(o,a)),a.type===So&&(a.el=o.el)}}function kv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Rv=t=>t.__isTeleport,Nt=Symbol(void 0),So=Symbol(void 0),It=Symbol(void 0),ki=Symbol(void 0),ir=[];let Et=null;function ji(t=!1){ir.push(Et=t?null:[])}function Ov(){ir.pop(),Et=ir[ir.length-1]||null}let wr=1;function Rl(t){wr+=t}function Sd(t){return t.dynamicChildren=wr>0?Et||ps:null,Ov(),wr>0&&Et&&Et.push(t),t}function Ga(t,e,n,s,r,i){return Sd(St(t,e,n,s,r,i,!0))}function Dv(t,e,n,s,r){return Sd(it(t,e,n,s,r,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function Vn(t,e){return t.type===e.type&&t.key===e.key}const Co="__vInternal",Cd=({key:t})=>t!=null?t:null,Ri=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Xe(t)||J(t)?{i:ht,r:t,k:e,f:!!n}:t:null;function St(t,e=null,n=null,s=0,r=null,i=t===Nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cd(e),ref:e&&Ri(e),scopeId:bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ht};return a?(Gc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),wr>0&&!o&&Et&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Et.push(c),c}const it=Nv;function Nv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===hv)&&(t=It),Qa(t)){const a=In(t,e,!0);return n&&Gc(a,n),wr>0&&!i&&Et&&(a.shapeFlag&6?Et[Et.indexOf(t)]=a:Et.push(a)),a.patchFlag|=-2,a}if(zv(t)&&(t=t.__vccOpts),e){e=Pv(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=Nc(a)),Te(c)&&(Kf(c)&&!G(c)&&(c=Ke({},c)),e.style=Dc(c))}const o=Le(t)?1:Qy(t)?128:Rv(t)?64:Te(t)?4:J(t)?2:0;return St(t,e,n,s,r,o,i,!0)}function Pv(t){return t?Kf(t)||Co in t?Ke({},t):t:null}function In(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Lv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Cd(a),ref:e&&e.ref?n&&r?G(r)?r.concat(Ri(e)):[r,Ri(e)]:Ri(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function xv(t=" ",e=0){return it(So,null,t,e)}function AA(t,e){const n=it(ki,null,t);return n.staticCount=e,n}function Mv(t="",e=!1){return e?(ji(),Dv(It,null,t)):it(It,null,t)}function Pt(t){return t==null||typeof t=="boolean"?it(It):G(t)?it(Nt,null,t.slice()):typeof t=="object"?ln(t):it(So,null,String(t))}function ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function Gc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Gc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Co in e)?e._ctx=ht:r===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),s&64?(n=16,e=[xv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Nc([e.class,s.class]));else if(r==="style")e.style=Dc([e.style,s.style]);else if(go(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ot(t,e,n,s=null){yt(t,e,7,[n,s])}const Uv=Id();let Fv=0;function Vv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Uv,i={uid:Fv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ry(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(s,r),emitsOptions:sd(s,r),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qy.bind(null,i),t.ce&&t.ce(i),i}let Be=null;const Bv=()=>Be||ht,Ts=t=>{Be=t,t.scope.on()},zn=()=>{Be&&Be.scope.off(),Be=null};function Ad(t){return t.vnode.shapeFlag&4}let _r=!1;function $v(t,e=!1){_r=e;const{props:n,children:s}=t.vnode,r=Ad(t);wv(t,n,r,e),bv(t,s);const i=r?jv(t,e):void 0;return _r=!1,i}function jv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zf(new Proxy(t.ctx,dv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Hv(t):null;Ts(t),Us();const i=yn(s,t,0,[t.props,r]);if(Fs(),zn(),Df(i)){if(i.then(zn,zn),e)return i.then(o=>{Ol(t,o,e)}).catch(o=>{_o(o,t,0)});t.asyncDep=i}else Ol(t,i,e)}else kd(t,e)}function Ol(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=Yf(e)),kd(t,n)}let Dl;function kd(t,e,n){const s=t.type;if(!t.render){if(!e&&Dl&&!s.render){const r=s.template||zc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Ke(Ke({isCustomElement:i,delimiters:a},o),c);s.render=Dl(r,u)}}t.render=s.render||bt}Ts(t),Us(),pv(t),Fs(),zn()}function qv(t){return new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}})}function Hv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qv(t))},slots:t.slots,emit:t.emit,expose:e}}function Ao(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yf(zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in rr)return rr[n](t)},has(e,n){return n in e||n in rr}}))}function Kv(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function zv(t){return J(t)&&"__vccOpts"in t}const mt=(t,e)=>Uy(t,e,_r);function Qc(t,e,n){const s=arguments.length;return s===2?Te(e)&&!G(e)?Qa(e)?it(t,null,[e]):it(t,e):it(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qa(n)&&(n=[n]),it(t,e,n))}const Wv=Symbol(""),Gv=()=>zt(Wv),Qv="3.2.45",Yv="http://www.w3.org/2000/svg",Bn=typeof document<"u"?document:null,Nl=Bn&&Bn.createElement("template"),Xv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Bn.createElementNS(Yv,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Nl.innerHTML=s?`<svg>${t}</svg>`:t;const a=Nl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zv(t,e,n){const s=t.style,r=Le(n);if(n&&!r){for(const i in n)Ya(s,i,n[i]);if(e&&!Le(e))for(const i in e)n[i]==null&&Ya(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Pl=/\s*!important$/;function Ya(t,e,n){if(G(n))n.forEach(s=>Ya(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ew(t,e);Pl.test(n)?t.setProperty(Ls(s),n.replace(Pl,""),"important"):t[s]=n}}const xl=["Webkit","Moz","ms"],da={};function ew(t,e){const n=da[e];if(n)return n;let s=Ft(e);if(s!=="filter"&&s in t)return da[e]=s;s=vo(s);for(let r=0;r<xl.length;r++){const i=xl[r]+s;if(i in t)return da[e]=i}return e}const Ml="http://www.w3.org/1999/xlink";function tw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ml,e.slice(6,e.length)):t.setAttributeNS(Ml,e,n);else{const i=Ym(e);n==null||i&&!kf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function nw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=kf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function us(t,e,n,s){t.addEventListener(e,n,s)}function sw(t,e,n,s){t.removeEventListener(e,n,s)}function rw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=iw(e);if(s){const u=i[e]=cw(s,r);us(t,a,u,c)}else o&&(sw(t,a,o,c),i[e]=void 0)}}const Ll=/(?:Once|Passive|Capture)$/;function iw(t){let e;if(Ll.test(t)){e={};let s;for(;s=t.match(Ll);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let pa=0;const ow=Promise.resolve(),aw=()=>pa||(ow.then(()=>pa=0),pa=Date.now());function cw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yt(uw(s,n.value),e,5,[s])};return n.value=t,n.attached=aw(),n}function uw(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ul=/^on[a-z]/,lw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Jv(t,s,r):e==="style"?Zv(t,n,s):go(e)?Pc(e)||rw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hw(t,e,s,r))?nw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),tw(t,e,s,r))};function hw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ul.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ul.test(e)&&Le(n)?!1:e in t}const on="transition",Gs="animation",Rd=(t,{slots:e})=>Qc(cd,fw(t),e);Rd.displayName="Transition";const Od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rd.props=Ke({},cd.props,Od);const Pn=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fl=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function fw(t){const e={};for(const M in t)M in Od||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,E=dw(r),T=E&&E[0],k=E&&E[1],{onBeforeEnter:O,onEnter:N,onEnterCancelled:P,onLeave:H,onLeaveCancelled:ne,onBeforeAppear:ue=O,onAppear:Se=N,onAppearCancelled:z=P}=e,le=(M,ye,Ce)=>{xn(M,ye?l:a),xn(M,ye?u:o),Ce&&Ce()},ae=(M,ye)=>{M._isLeaving=!1,xn(M,d),xn(M,y),xn(M,g),ye&&ye()},ke=M=>(ye,Ce)=>{const kt=M?Se:N,ve=()=>le(ye,M,Ce);Pn(kt,[ye,ve]),Vl(()=>{xn(ye,M?c:i),an(ye,M?l:a),Fl(kt)||Bl(ye,s,T,ve)})};return Ke(e,{onBeforeEnter(M){Pn(O,[M]),an(M,i),an(M,o)},onBeforeAppear(M){Pn(ue,[M]),an(M,c),an(M,u)},onEnter:ke(!1),onAppear:ke(!0),onLeave(M,ye){M._isLeaving=!0;const Ce=()=>ae(M,ye);an(M,d),mw(),an(M,g),Vl(()=>{!M._isLeaving||(xn(M,d),an(M,y),Fl(H)||Bl(M,s,k,Ce))}),Pn(H,[M,Ce])},onEnterCancelled(M){le(M,!1),Pn(P,[M])},onAppearCancelled(M){le(M,!0),Pn(z,[M])},onLeaveCancelled(M){ae(M),Pn(ne,[M])}})}function dw(t){if(t==null)return null;if(Te(t))return[ga(t.enter),ga(t.leave)];{const e=ga(t);return[e,e]}}function ga(t){return gr(t)}function an(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function xn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Vl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let pw=0;function Bl(t,e,n,s){const r=t._endId=++pw,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=gw(t,e);if(!o)return s();const u=o+"end";let l=0;const d=()=>{t.removeEventListener(u,g),i()},g=y=>{y.target===t&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),t.addEventListener(u,g)}function gw(t,e){const n=window.getComputedStyle(t),s=E=>(n[E]||"").split(", "),r=s(`${on}Delay`),i=s(`${on}Duration`),o=$l(r,i),a=s(`${Gs}Delay`),c=s(`${Gs}Duration`),u=$l(a,c);let l=null,d=0,g=0;e===on?o>0&&(l=on,d=o,g=i.length):e===Gs?u>0&&(l=Gs,d=u,g=c.length):(d=Math.max(o,u),l=d>0?o>u?on:Gs:null,g=l?l===on?i.length:c.length:0);const y=l===on&&/\b(transform|all)(,|$)/.test(s(`${on}Property`).toString());return{type:l,timeout:d,propCount:g,hasTransform:y}}function $l(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>jl(n)+jl(t[s])))}function jl(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function mw(){return document.body.offsetHeight}const ql=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Ti(e,n):e};function yw(t){t.target.composing=!0}function Hl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ql(r);const i=s||r.props&&r.props.type==="number";us(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=gr(a)),t._assign(a)}),n&&us(t,"change",()=>{t.value=t.value.trim()}),e||(us(t,"compositionstart",yw),us(t,"compositionend",Hl),us(t,"change",Hl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ql(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&gr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},vw=Ke({patchProp:lw},Xv);let Kl;function ww(){return Kl||(Kl=Cv(vw))}const _w=(...t)=>{const e=ww().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Ew(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ew(t){return Le(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof window<"u";function bw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function ma(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ct(r)?r.map(t):t(r)}return n}const or=()=>{},Ct=Array.isArray,Iw=/\/$/,Tw=t=>t.replace(Iw,"");function ya(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=kw(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Sw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ss(e.matched[s],n.matched[r])&&Dd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Aw(t[n],e[n]))return!1;return!0}function Aw(t,e){return Ct(t)?Wl(t,e):Ct(e)?Wl(e,t):t===e}function Wl(t,e){return Ct(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function kw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Er;(function(t){t.pop="pop",t.push="push"})(Er||(Er={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function Rw(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Tw(t)}const Ow=/^[^#]+#/;function Dw(t,e){return t.replace(Ow,"#")+e}function Nw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ko=()=>({left:window.pageXOffset,top:window.pageYOffset});function Pw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Nw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Gl(t,e){return(history.state?history.state.position-e:-1)+t}const Xa=new Map;function xw(t,e){Xa.set(t,e)}function Mw(t){const e=Xa.get(t);return Xa.delete(t),e}let Lw=()=>location.protocol+"//"+location.host;function Nd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),zl(c,"")}return zl(n,t)+s+r}function Uw(t,e,n,s){let r=[],i=[],o=null;const a=({state:g})=>{const y=Nd(t,location),E=n.value,T=e.value;let k=0;if(g){if(n.value=y,e.value=g,o&&o===E){o=null;return}k=T?g.position-T.position:0}else s(y);r.forEach(O=>{O(n.value,E,{delta:k,type:Er.pop,direction:k?k>0?ar.forward:ar.back:ar.unknown})})};function c(){o=n.value}function u(g){r.push(g);const y=()=>{const E=r.indexOf(g);E>-1&&r.splice(E,1)};return i.push(y),y}function l(){const{history:g}=window;!g.state||g.replaceState(pe({},g.state,{scroll:ko()}),"")}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:d}}function Ql(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ko():null}}function Fw(t){const{history:e,location:n}=window,s={value:Nd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Lw()+t+c;try{e[l?"replaceState":"pushState"](u,"",g),r.value=u}catch(y){console.error(y),n[l?"replace":"assign"](g)}}function o(c,u){const l=pe({},e.state,Ql(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=pe({},r.value,e.state,{forward:c,scroll:ko()});i(l.current,l,!0);const d=pe({},Ql(s.value,c,null),{position:l.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Vw(t){t=Rw(t);const e=Fw(t),n=Uw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:t,go:s,createHref:Dw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Bw(t){return typeof t=="string"||t&&typeof t=="object"}function Pd(t){return typeof t=="string"||typeof t=="symbol"}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xd=Symbol("");var Yl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yl||(Yl={}));function Cs(t,e){return pe(new Error,{type:t,[xd]:!0},e)}function $t(t,e){return t instanceof Error&&xd in t&&(e==null||!!(t.type&e))}const Xl="[^/]+?",$w={sensitive:!1,strict:!1,start:!0,end:!0},jw=/[.+*?^${}()[\]/\\]/g;function qw(t,e){const n=pe({},$w,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const g=u[d];let y=40+(n.sensitive?.25:0);if(g.type===0)d||(r+="/"),r+=g.value.replace(jw,"\\$&"),y+=40;else if(g.type===1){const{value:E,repeatable:T,optional:k,regexp:O}=g;i.push({name:E,repeatable:T,optional:k});const N=O||Xl;if(N!==Xl){y+=10;try{new RegExp(`(${N})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${E}" (${N}): `+H.message)}}let P=T?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(P=k&&u.length<2?`(?:/${P})`:"/"+P),k&&(P+="?"),r+=P,y+=20,k&&(y+=-8),T&&(y+=-20),N===".*"&&(y+=-50)}l.push(y)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),d={};if(!l)return null;for(let g=1;g<l.length;g++){const y=l[g]||"",E=i[g-1];d[E.name]=y&&E.repeatable?y.split("/"):y}return d}function c(u){let l="",d=!1;for(const g of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const y of g)if(y.type===0)l+=y.value;else if(y.type===1){const{value:E,repeatable:T,optional:k}=y,O=E in u?u[E]:"";if(Ct(O)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const N=Ct(O)?O.join("/"):O;if(!N)if(k)g.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);l+=N}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Hw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Kw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Hw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Jl(s))return 1;if(Jl(r))return-1}return r.length-s.length}function Jl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zw={type:0,value:""},Ww=/[a-zA-Z0-9_]/;function Gw(t){if(!t)return[[]];if(t==="/")return[[zw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function d(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):g();break;case 4:g(),n=s;break;case 1:c==="("?n=2:Ww.test(c)?g():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function Qw(t,e,n){const s=qw(Gw(t.path),n),r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Yw(t,e){const n=[],s=new Map;e=th({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,d,g){const y=!g,E=Xw(l);E.aliasOf=g&&g.record;const T=th(e,l),k=[E];if("alias"in l){const P=typeof l.alias=="string"?[l.alias]:l.alias;for(const H of P)k.push(pe({},E,{components:g?g.record.components:E.components,path:H,aliasOf:g?g.record:E}))}let O,N;for(const P of k){const{path:H}=P;if(d&&H[0]!=="/"){const ne=d.record.path,ue=ne[ne.length-1]==="/"?"":"/";P.path=d.record.path+(H&&ue+H)}if(O=Qw(P,d,T),g?g.alias.push(O):(N=N||O,N!==O&&N.alias.push(O),y&&l.name&&!eh(O)&&o(l.name)),E.children){const ne=E.children;for(let ue=0;ue<ne.length;ue++)i(ne[ue],O,g&&g.children[ue])}g=g||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return N?()=>{o(N)}:or}function o(l){if(Pd(l)){const d=s.get(l);d&&(s.delete(l),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(l);d>-1&&(n.splice(d,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let d=0;for(;d<n.length&&Kw(l,n[d])>=0&&(l.record.path!==n[d].record.path||!Md(l,n[d]));)d++;n.splice(d,0,l),l.record.name&&!eh(l)&&s.set(l.record.name,l)}function u(l,d){let g,y={},E,T;if("name"in l&&l.name){if(g=s.get(l.name),!g)throw Cs(1,{location:l});T=g.record.name,y=pe(Zl(d.params,g.keys.filter(N=>!N.optional).map(N=>N.name)),l.params&&Zl(l.params,g.keys.map(N=>N.name))),E=g.stringify(y)}else if("path"in l)E=l.path,g=n.find(N=>N.re.test(E)),g&&(y=g.parse(E),T=g.record.name);else{if(g=d.name?s.get(d.name):n.find(N=>N.re.test(d.path)),!g)throw Cs(1,{location:l,currentLocation:d});T=g.record.name,y=pe({},d.params,l.params),E=g.stringify(y)}const k=[];let O=g;for(;O;)k.unshift(O.record),O=O.parent;return{name:T,path:E,params:y,matched:k,meta:Zw(k)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Zl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Xw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Jw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Jw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function eh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zw(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function th(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Md(t,e){return e.children.some(n=>n===t||Md(t,n))}const Ld=/#/g,e_=/&/g,t_=/\//g,n_=/=/g,s_=/\?/g,Ud=/\+/g,r_=/%5B/g,i_=/%5D/g,Fd=/%5E/g,o_=/%60/g,Vd=/%7B/g,a_=/%7C/g,Bd=/%7D/g,c_=/%20/g;function Yc(t){return encodeURI(""+t).replace(a_,"|").replace(r_,"[").replace(i_,"]")}function u_(t){return Yc(t).replace(Vd,"{").replace(Bd,"}").replace(Fd,"^")}function Ja(t){return Yc(t).replace(Ud,"%2B").replace(c_,"+").replace(Ld,"%23").replace(e_,"%26").replace(o_,"`").replace(Vd,"{").replace(Bd,"}").replace(Fd,"^")}function l_(t){return Ja(t).replace(n_,"%3D")}function h_(t){return Yc(t).replace(Ld,"%23").replace(s_,"%3F")}function f_(t){return t==null?"":h_(t).replace(t_,"%2F")}function qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function d_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ud," "),o=i.indexOf("="),a=qi(o<0?i:i.slice(0,o)),c=o<0?null:qi(i.slice(o+1));if(a in e){let u=e[a];Ct(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function nh(t){let e="";for(let n in t){const s=t[n];if(n=l_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ct(s)?s.map(i=>i&&Ja(i)):[s&&Ja(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function p_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ct(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const g_=Symbol(""),sh=Symbol(""),Xc=Symbol(""),$d=Symbol(""),Za=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(Cs(4,{from:n,to:e})):d instanceof Error?a(d):Bw(d)?a(Cs(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(d=>a(d))})}function va(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(m_(a)){const u=(a.__vccOpts||a)[e];u&&r.push(hn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=bw(u)?u.default:u;i.components[o]=l;const g=(l.__vccOpts||l)[e];return g&&hn(g,n,s,i,o)()}))}}return r}function m_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rh(t){const e=zt(Xc),n=zt($d),s=mt(()=>e.resolve(ys(t.to))),r=mt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const g=d.findIndex(Ss.bind(null,l));if(g>-1)return g;const y=ih(c[u-2]);return u>1&&ih(l)===y&&d[d.length-1].path!==y?d.findIndex(Ss.bind(null,c[u-2])):g}),i=mt(()=>r.value>-1&&__(n.params,s.value.params)),o=mt(()=>r.value>-1&&r.value===n.matched.length-1&&Dd(n.params,s.value.params));function a(c={}){return w_(c)?e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(or):Promise.resolve()}return{route:s,href:mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const y_=hd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rh,setup(t,{slots:e}){const n=Ur(rh(t)),{options:s}=zt(Xc),r=mt(()=>({[oh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[oh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Qc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),v_=y_;function w_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function __(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ct(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ih(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oh=(t,e,n)=>t!=null?t:e!=null?e:n,E_=hd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=zt(Za),r=mt(()=>t.route||s.value),i=zt(sh,0),o=mt(()=>{let u=ys(i);const{matched:l}=r.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=mt(()=>r.value.matched[o.value]);Si(sh,mt(()=>o.value+1)),Si(g_,a),Si(Za,r);const c=Ny();return Ci(()=>[c.value,a.value,t.name],([u,l,d],[g,y,E])=>{l&&(l.instances[d]=u,y&&y!==l&&u&&u===g&&(l.leaveGuards.size||(l.leaveGuards=y.leaveGuards),l.updateGuards.size||(l.updateGuards=y.updateGuards))),u&&l&&(!y||!Ss(l,y)||!g)&&(l.enterCallbacks[d]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,d=a.value,g=d&&d.components[l];if(!g)return ah(n.default,{Component:g,route:u});const y=d.props[l],E=y?y===!0?u.params:typeof y=="function"?y(u):y:null,k=Qc(g,pe({},E,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return ah(n.default,{Component:k,route:u})||k}}});function ah(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const b_=E_;function I_(t){const e=Yw(t.routes,t),n=t.parseQuery||d_,s=t.stringifyQuery||nh,r=t.history,i=Qs(),o=Qs(),a=Qs(),c=Py(cn);let u=cn;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ma.bind(null,C=>""+C),d=ma.bind(null,f_),g=ma.bind(null,qi);function y(C,x){let D,B;return Pd(C)?(D=e.getRecordMatcher(C),B=x):B=C,e.addRoute(B,D)}function E(C){const x=e.getRecordMatcher(C);x&&e.removeRoute(x)}function T(){return e.getRoutes().map(C=>C.record)}function k(C){return!!e.getRecordMatcher(C)}function O(C,x){if(x=pe({},x||c.value),typeof C=="string"){const h=ya(n,C,x.path),f=e.resolve({path:h.path},x),m=r.createHref(h.fullPath);return pe(h,f,{params:g(f.params),hash:qi(h.hash),redirectedFrom:void 0,href:m})}let D;if("path"in C)D=pe({},C,{path:ya(n,C.path,x.path).path});else{const h=pe({},C.params);for(const f in h)h[f]==null&&delete h[f];D=pe({},C,{params:d(C.params)}),x.params=d(x.params)}const B=e.resolve(D,x),re=C.hash||"";B.params=l(g(B.params));const we=Sw(s,pe({},C,{hash:u_(re),path:B.path})),Z=r.createHref(we);return pe({fullPath:we,hash:re,query:s===nh?p_(C.query):C.query||{}},B,{redirectedFrom:void 0,href:Z})}function N(C){return typeof C=="string"?ya(n,C,c.value.path):pe({},C)}function P(C,x){if(u!==C)return Cs(8,{from:x,to:C})}function H(C){return Se(C)}function ne(C){return H(pe(N(C),{replace:!0}))}function ue(C){const x=C.matched[C.matched.length-1];if(x&&x.redirect){const{redirect:D}=x;let B=typeof D=="function"?D(C):D;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=N(B):{path:B},B.params={}),pe({query:C.query,hash:C.hash,params:"path"in B?{}:C.params},B)}}function Se(C,x){const D=u=O(C),B=c.value,re=C.state,we=C.force,Z=C.replace===!0,h=ue(D);if(h)return Se(pe(N(h),{state:typeof h=="object"?pe({},re,h.state):re,force:we,replace:Z}),x||D);const f=D;f.redirectedFrom=x;let m;return!we&&Cw(s,B,D)&&(m=Cs(16,{to:f,from:B}),Bt(B,B,!0,!1)),(m?Promise.resolve(m):le(f,B)).catch(p=>$t(p)?$t(p,2)?p:st(p):ge(p,f,B)).then(p=>{if(p){if($t(p,2))return Se(pe({replace:Z},N(p.to),{state:typeof p.to=="object"?pe({},re,p.to.state):re,force:we}),x||f)}else p=ke(f,B,!0,Z,re);return ae(f,B,p),p})}function z(C,x){const D=P(C,x);return D?Promise.reject(D):Promise.resolve()}function le(C,x){let D;const[B,re,we]=T_(C,x);D=va(B.reverse(),"beforeRouteLeave",C,x);for(const h of B)h.leaveGuards.forEach(f=>{D.push(hn(f,C,x))});const Z=z.bind(null,C,x);return D.push(Z),as(D).then(()=>{D=[];for(const h of i.list())D.push(hn(h,C,x));return D.push(Z),as(D)}).then(()=>{D=va(re,"beforeRouteUpdate",C,x);for(const h of re)h.updateGuards.forEach(f=>{D.push(hn(f,C,x))});return D.push(Z),as(D)}).then(()=>{D=[];for(const h of C.matched)if(h.beforeEnter&&!x.matched.includes(h))if(Ct(h.beforeEnter))for(const f of h.beforeEnter)D.push(hn(f,C,x));else D.push(hn(h.beforeEnter,C,x));return D.push(Z),as(D)}).then(()=>(C.matched.forEach(h=>h.enterCallbacks={}),D=va(we,"beforeRouteEnter",C,x),D.push(Z),as(D))).then(()=>{D=[];for(const h of o.list())D.push(hn(h,C,x));return D.push(Z),as(D)}).catch(h=>$t(h,8)?h:Promise.reject(h))}function ae(C,x,D){for(const B of a.list())B(C,x,D)}function ke(C,x,D,B,re){const we=P(C,x);if(we)return we;const Z=x===cn,h=ls?history.state:{};D&&(B||Z?r.replace(C.fullPath,pe({scroll:Z&&h&&h.scroll},re)):r.push(C.fullPath,re)),c.value=C,Bt(C,x,D,Z),st()}let M;function ye(){M||(M=r.listen((C,x,D)=>{if(!is.listening)return;const B=O(C),re=ue(B);if(re){Se(pe(re,{replace:!0}),B).catch(or);return}u=B;const we=c.value;ls&&xw(Gl(we.fullPath,D.delta),ko()),le(B,we).catch(Z=>$t(Z,12)?Z:$t(Z,2)?(Se(Z.to,B).then(h=>{$t(h,20)&&!D.delta&&D.type===Er.pop&&r.go(-1,!1)}).catch(or),Promise.reject()):(D.delta&&r.go(-D.delta,!1),ge(Z,B,we))).then(Z=>{Z=Z||ke(B,we,!1),Z&&(D.delta&&!$t(Z,8)?r.go(-D.delta,!1):D.type===Er.pop&&$t(Z,20)&&r.go(-1,!1)),ae(B,we,Z)}).catch(or)}))}let Ce=Qs(),kt=Qs(),ve;function ge(C,x,D){st(C);const B=kt.list();return B.length?B.forEach(re=>re(C,x,D)):console.error(C),Promise.reject(C)}function ce(){return ve&&c.value!==cn?Promise.resolve():new Promise((C,x)=>{Ce.add([C,x])})}function st(C){return ve||(ve=!C,ye(),Ce.list().forEach(([x,D])=>C?D(C):x()),Ce.reset()),C}function Bt(C,x,D,B){const{scrollBehavior:re}=t;if(!ls||!re)return Promise.resolve();const we=!D&&Mw(Gl(C.fullPath,0))||(B||!D)&&history.state&&history.state.scroll||null;return Zf().then(()=>re(C,x,we)).then(Z=>Z&&Pw(Z)).catch(Z=>ge(Z,C,x))}const Fe=C=>r.go(C);let We;const sn=new Set,is={currentRoute:c,listening:!0,addRoute:y,removeRoute:E,hasRoute:k,getRoutes:T,resolve:O,options:t,push:H,replace:ne,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:kt.add,isReady:ce,install(C){const x=this;C.component("RouterLink",v_),C.component("RouterView",b_),C.config.globalProperties.$router=x,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(c)}),ls&&!We&&c.value===cn&&(We=!0,H(r.location).catch(re=>{}));const D={};for(const re in cn)D[re]=mt(()=>c.value[re]);C.provide(Xc,x),C.provide($d,Ur(D)),C.provide(Za,c);const B=C.unmount;sn.add(C),C.unmount=function(){sn.delete(C),sn.size<1&&(u=cn,M&&M(),M=null,c.value=cn,We=!1,ve=!1),B()}}};return is}function as(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function T_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ss(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ss(u,c))||r.push(c))}return[n,s,r]}const jd=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},S_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;c||(y=64,o||(g=64)),s.push(n[l],n[d],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):S_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw Error();const g=i<<2|a>>4;if(s.push(g),u!==64){const y=a<<4&240|u>>2;if(s.push(y),d!==64){const E=u<<6&192|d;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},C_=function(t){const e=qd(t);return Hd.encodeByteArray(e,!0)},Hi=function(t){return C_(t).replace(/\./g,"")},Kd=function(t){try{return Hd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function k_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function R_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function O_(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function D_(){return typeof indexedDB=="object"}function N_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function P_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=()=>P_().__FIREBASE_DEFAULTS__,M_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kd(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return x_()||M_()||L_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zd=t=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},U_=t=>{const e=zd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},F_=()=>{var t;return(t=Jc())===null||t===void 0?void 0:t.config},Wd=t=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Hi(JSON.stringify(n)),Hi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=$_,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?j_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new nn(r,a,s)}}function j_(t,e){return t.replace(q_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const q_=/\{\$([^}]+)}/g;function H_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ki(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ch(i)&&ch(o)){if(!Ki(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ch(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function K_(t,e){const n=new z_(t,e);return n.subscribe.bind(n)}class z_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");W_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=wa),r.error===void 0&&(r.error=wa),r.complete===void 0&&(r.complete=wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new V_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y_(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Q_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q_(t){return t===Un?void 0:t}function Y_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new G_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const J_={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Z_=he.INFO,e0={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},t0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=e0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=Z_,this._logHandler=t0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const n0=(t,e)=>e.some(n=>t instanceof n);let uh,lh;function s0(){return uh||(uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function r0(){return lh||(lh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gd=new WeakMap,ec=new WeakMap,Qd=new WeakMap,_a=new WeakMap,eu=new WeakMap;function i0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gd.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function o0(t){if(ec.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ec.set(t,e)}let tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function a0(t){tc=t(tc)}function c0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ea(this),e,...n);return Qd.set(s,e.sort?e.sort():[e]),vn(s)}:r0().includes(t)?function(...e){return t.apply(Ea(this),e),vn(Gd.get(this))}:function(...e){return vn(t.apply(Ea(this),e))}}function u0(t){return typeof t=="function"?c0(t):(t instanceof IDBTransaction&&o0(t),n0(t,s0())?new Proxy(t,tc):t)}function vn(t){if(t instanceof IDBRequest)return i0(t);if(_a.has(t))return _a.get(t);const e=u0(t);return e!==t&&(_a.set(t,e),eu.set(e,t)),e}const Ea=t=>eu.get(t);function l0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=vn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vn(o.result),c.oldVersion,c.newVersion,vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const h0=["get","getKey","getAll","getAllKeys","count"],f0=["put","add","delete","clear"],ba=new Map;function hh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ba.get(e))return ba.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=f0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||h0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ba.set(e,i),i}a0(t=>({...t,get:(e,n,s)=>hh(e,n)||t.get(e,n,s),has:(e,n)=>!!hh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function p0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",fh="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Zc("@firebase/app"),g0="@firebase/app-compat",m0="@firebase/analytics-compat",y0="@firebase/analytics",v0="@firebase/app-check-compat",w0="@firebase/app-check",_0="@firebase/auth",E0="@firebase/auth-compat",b0="@firebase/database",I0="@firebase/database-compat",T0="@firebase/functions",S0="@firebase/functions-compat",C0="@firebase/installations",A0="@firebase/installations-compat",k0="@firebase/messaging",R0="@firebase/messaging-compat",O0="@firebase/performance",D0="@firebase/performance-compat",N0="@firebase/remote-config",P0="@firebase/remote-config-compat",x0="@firebase/storage",M0="@firebase/storage-compat",L0="@firebase/firestore",U0="@firebase/firestore-compat",F0="firebase",V0="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="[DEFAULT]",B0={[nc]:"fire-core",[g0]:"fire-core-compat",[y0]:"fire-analytics",[m0]:"fire-analytics-compat",[w0]:"fire-app-check",[v0]:"fire-app-check-compat",[_0]:"fire-auth",[E0]:"fire-auth-compat",[b0]:"fire-rtdb",[I0]:"fire-rtdb-compat",[T0]:"fire-fn",[S0]:"fire-fn-compat",[C0]:"fire-iid",[A0]:"fire-iid-compat",[k0]:"fire-fcm",[R0]:"fire-fcm-compat",[O0]:"fire-perf",[D0]:"fire-perf-compat",[N0]:"fire-rc",[P0]:"fire-rc-compat",[x0]:"fire-gcs",[M0]:"fire-gcs-compat",[L0]:"fire-fst",[U0]:"fire-fst-compat","fire-js":"fire-js",[F0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Map,rc=new Map;function $0(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(rc.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of zi.values())$0(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new Fr("app","Firebase",j0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=V0;function Yd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw wn.create("bad-app-name",{appName:String(r)});if(n||(n=F_()),!n)throw wn.create("no-options");const i=zi.get(r);if(i){if(Ki(n,i.options)&&Ki(s,i.config))return i;throw wn.create("duplicate-app",{appName:r})}const o=new X_(r);for(const c of rc.values())o.addComponent(c);const a=new q0(n,s,o);return zi.set(r,a),a}function Xd(t=sc){const e=zi.get(t);if(!e&&t===sc)return Yd();if(!e)throw wn.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let r=(s=B0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(a.join(" "));return}As(new Yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="firebase-heartbeat-database",K0=1,br="firebase-heartbeat-store";let Ia=null;function Jd(){return Ia||(Ia=l0(H0,K0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(br)}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),Ia}async function z0(t){var e;try{return(await Jd()).transaction(br).objectStore(br).get(Zd(t))}catch(n){if(n instanceof nn)Xn.warn(n.message);else{const s=wn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Xn.warn(s.message)}}}async function dh(t,e){var n;try{const r=(await Jd()).transaction(br,"readwrite");return await r.objectStore(br).put(e,Zd(t)),r.done}catch(s){if(s instanceof nn)Xn.warn(s.message);else{const r=wn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Xn.warn(r.message)}}}function Zd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=1024,G0=30*24*60*60*1e3;class Q0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ph();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=G0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ph(),{heartbeatsToSend:n,unsentEntries:s}=Y0(this._heartbeatsCache.heartbeats),r=Hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ph(){return new Date().toISOString().substring(0,10)}function Y0(t,e=W0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),gh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),gh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class X0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D_()?N_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await z0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gh(t){return Hi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){As(new Yn("platform-logger",e=>new d0(e),"PRIVATE")),As(new Yn("heartbeat",e=>new Q0(e),"PRIVATE")),_n(nc,fh,t),_n(nc,fh,"esm2017"),_n("fire-js","")}J0("");var Z0="firebase",eE="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(Z0,eE,"app");var tE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,nu=nu||{},Q=tE||self;function Wi(){}function Ro(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $r(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nE(t){return Object.prototype.hasOwnProperty.call(t,Ta)&&t[Ta]||(t[Ta]=++sE)}var Ta="closure_uid_"+(1e9*Math.random()>>>0),sE=0;function rE(t,e,n){return t.call.apply(t.bind,arguments)}function iE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=rE:Je=iE,Je.apply(null,arguments)}function mi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function kn(){this.s=this.s,this.o=this.o}var oE=0;kn.prototype.s=!1;kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),oE!=0)&&nE(this)};kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ep=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function su(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function mh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ro(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var aE=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",Wi,e),Q.removeEventListener("test",Wi,e)}catch{}return t}();function Gi(t){return/^[\s\xa0]*$/.test(t)}var yh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Sa(t,e){return t<e?-1:t>e?1:0}function Oo(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Mt(t){return Oo().indexOf(t)!=-1}function ru(t){return ru[" "](t),t}ru[" "]=Wi;function cE(t){var e=hE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var uE=Mt("Opera"),ks=Mt("Trident")||Mt("MSIE"),tp=Mt("Edge"),ic=tp||ks,np=Mt("Gecko")&&!(Oo().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge"))&&!(Mt("Trident")||Mt("MSIE"))&&!Mt("Edge"),lE=Oo().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge");function sp(){var t=Q.document;return t?t.documentMode:void 0}var Qi;e:{var Ca="",Aa=function(){var t=Oo();if(np)return/rv:([^\);]+)(\)|;)/.exec(t);if(tp)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lE)return/WebKit\/(\S+)/.exec(t);if(uE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Aa&&(Ca=Aa?Aa[1]:""),ks){var ka=sp();if(ka!=null&&ka>parseFloat(Ca)){Qi=String(ka);break e}}Qi=Ca}var hE={};function fE(){return cE(function(){let t=0;const e=yh(String(Qi)).split("."),n=yh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Sa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Sa(r[2].length==0,i[2].length==0)||Sa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var oc;if(Q.document&&ks){var vh=sp();oc=vh||parseInt(Qi,10)||void 0}else oc=void 0;var dE=oc;function Ir(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(np){e:{try{ru(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ir.X.h.call(this)}}ze(Ir,Ze);var pE={2:"touch",3:"pen",4:"mouse"};Ir.prototype.h=function(){Ir.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),gE=0;function mE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++gE,this.ba=this.ea=!1}function Do(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function iu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function rp(t){const e={};for(const n in t)e[n]=t[n];return e}const wh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ip(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<wh.length;i++)n=wh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function No(t){this.src=t,this.g={},this.h=0}No.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=cc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new mE(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function ac(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ep(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Do(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ou="closure_lm_"+(1e6*Math.random()|0),Ra={};function op(t,e,n,s,r){if(s&&s.once)return cp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)op(t,e[i],n,s,r);return null}return n=uu(n),t&&t[jr]?t.N(e,n,$r(s)?!!s.capture:!!s,r):ap(t,e,n,!1,s,r)}function ap(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=$r(r)?!!r.capture:!!r,a=cu(t);if(a||(t[ou]=a=new No(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=yE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)aE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(lp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yE(){function t(n){return e.call(t.src,t.listener,n)}const e=vE;return t}function cp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)cp(t,e[i],n,s,r);return null}return n=uu(n),t&&t[jr]?t.O(e,n,$r(s)?!!s.capture:!!s,r):ap(t,e,n,!0,s,r)}function up(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)up(t,e[i],n,s,r);else s=$r(s)?!!s.capture:!!s,n=uu(n),t&&t[jr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=cc(i,n,s,r),-1<n&&(Do(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=cu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cc(e,n,s,r)),(n=-1<t?e[t]:null)&&au(n))}function au(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[jr])ac(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(lp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=cu(e))?(ac(n,t),n.h==0&&(n.src=null,e[ou]=null)):Do(t)}}}function lp(t){return t in Ra?Ra[t]:Ra[t]="on"+t}function vE(t,e){if(t.ba)t=!0;else{e=new Ir(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&au(t),t=n.call(s,e)}return t}function cu(t){return t=t[ou],t instanceof No?t:null}var Oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function uu(t){return typeof t=="function"?t:(t[Oa]||(t[Oa]=function(e){return t.handleEvent(e)}),t[Oa])}function $e(){kn.call(this),this.i=new No(this),this.P=this,this.I=null}ze($e,kn);$e.prototype[jr]=!0;$e.prototype.removeEventListener=function(t,e,n,s){up(this,t,e,n,s)};function He(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var r=e;e=new Ze(s,t),ip(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=yi(o,s,!0,e)&&r}if(o=e.g=t,r=yi(o,s,!0,e)&&r,r=yi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=yi(o,s,!1,e)&&r}$e.prototype.M=function(){if($e.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Do(n[s]);delete t.g[e],t.h--}}this.I=null};$e.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function yi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ac(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var lu=Q.JSON.stringify;function wE(){var t=dp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _E{constructor(){this.h=this.g=null}add(e,n){const s=hp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new EE,t=>t.reset());class EE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bE(t){Q.setTimeout(()=>{throw t},0)}function fp(t,e){uc||IE(),lc||(uc(),lc=!0),dp.add(t,e)}var uc;function IE(){var t=Q.Promise.resolve(void 0);uc=function(){t.then(TE)}}var lc=!1,dp=new _E;function TE(){for(var t;t=wE();){try{t.h.call(t.g)}catch(n){bE(n)}var e=hp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lc=!1}function Po(t,e){$e.call(this),this.h=t||1,this.g=e||Q,this.j=Je(this.lb,this),this.l=Date.now()}ze(Po,$e);F=Po.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),He(this,"tick"),this.ca&&(hu(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Po.X.M.call(this),hu(this),delete this.g};function fu(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function pp(t){t.g=fu(()=>{t.g=null,t.i&&(t.i=!1,pp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SE extends kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pp(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tr(t){kn.call(this),this.h=t,this.g={}}ze(Tr,kn);var _h=[];function gp(t,e,n,s){Array.isArray(n)||(n&&(_h[0]=n.toString()),n=_h);for(var r=0;r<n.length;r++){var i=op(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function mp(t){iu(t.g,function(e,n){this.g.hasOwnProperty(n)&&au(e)},t),t.g={}}Tr.prototype.M=function(){Tr.X.M.call(this),mp(this)};Tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xo(){this.g=!0}xo.prototype.Aa=function(){this.g=!1};function CE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var d=l.split("_");o=2<=d.length&&d[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function AE(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RE(t,n)+(s?" "+s:"")})}function kE(t,e){t.info(function(){return"TIMEOUT: "+e})}xo.prototype.info=function(){};function RE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return lu(n)}catch{return e}}var ns={},Eh=null;function Mo(){return Eh=Eh||new $e}ns.Pa="serverreachability";function yp(t){Ze.call(this,ns.Pa,t)}ze(yp,Ze);function Sr(t){const e=Mo();He(e,new yp(e))}ns.STAT_EVENT="statevent";function vp(t,e){Ze.call(this,ns.STAT_EVENT,t),this.stat=e}ze(vp,Ze);function ot(t){const e=Mo();He(e,new vp(e,t))}ns.Qa="timingevent";function wp(t,e){Ze.call(this,ns.Qa,t),this.size=e}ze(wp,Ze);function qr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Lo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},_p={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function du(){}du.prototype.h=null;function bh(t){return t.h||(t.h=t.i())}function Ep(){}var Hr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function pu(){Ze.call(this,"d")}ze(pu,Ze);function gu(){Ze.call(this,"c")}ze(gu,Ze);var hc;function Uo(){}ze(Uo,du);Uo.prototype.g=function(){return new XMLHttpRequest};Uo.prototype.i=function(){return{}};hc=new Uo;function Kr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Tr(this),this.O=OE,t=ic?125:void 0,this.T=new Po(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new bp}function bp(){this.i=null,this.g="",this.h=!1}var OE=45e3,fc={},Yi={};F=Kr.prototype;F.setTimeout=function(t){this.O=t};function dc(t,e,n){t.K=1,t.v=Vo(Yt(e)),t.s=n,t.P=!0,Ip(t,null)}function Ip(t,e){t.F=Date.now(),zr(t),t.A=Yt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Dp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new bp,t.g=Jp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new SE(Je(t.La,t,t.g),t.N)),gp(t.S,t.g,"readystatechange",t.ib),e=t.H?rp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Sr(),CE(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const l=qt(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(l!=3||ic||this.g&&(this.h.h||this.g.fa()||Ch(this.g)))){this.I||l!=4||e==7||(e==8||0>=d?Sr(3):Sr(2)),Fo(this);var n=this.g.aa();this.Y=n;t:if(Tp(this)){var s=Ch(this.g);t="";var r=s.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),cr(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,AE(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gi(a)){var u=a;break t}}u=null}if(n=u)hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pc(this,n);else{this.i=!1,this.o=3,ot(12),jn(this),cr(this);break e}}this.P?(Sp(this,l,o),ic&&this.i&&l==3&&(gp(this.S,this.T,"tick",this.hb),this.T.start())):(hs(this.j,this.m,o,null),pc(this,o)),l==4&&jn(this),this.i&&!this.I&&(l==4?Gp(this.l,this):(this.i=!1,zr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),jn(this),cr(this)}}}catch{}finally{}};function Tp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Sp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=DE(t,n),r==Yi){e==4&&(t.o=4,ot(14),s=!1),hs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==fc){t.o=4,ot(15),hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else hs(t.j,t.m,r,null),pc(t,r);Tp(t)&&r!=Yi&&r!=fc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),bu(e),e.K=!0,ot(11))):(hs(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),cr(t))}F.hb=function(){if(this.g){var t=qt(this.g),e=this.g.fa();this.C<e.length&&(Fo(this),Sp(this,t,e),this.i&&t!=4&&zr(this))}};function DE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Yi:(n=Number(e.substring(n,s)),isNaN(n)?fc:(s+=1,s+n>e.length?Yi:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,jn(this)};function zr(t){t.V=Date.now()+t.O,Cp(t,t.O)}function Cp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qr(Je(t.gb,t),e)}function Fo(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kE(this.j,this.A),this.K!=2&&(Sr(),ot(17)),jn(this),this.o=2,cr(this)):Cp(this,this.V-t)};function cr(t){t.l.G==0||t.I||Gp(t.l,t)}function jn(t){Fo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,hu(t.T),mp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function pc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gc(n.h,t))){if(!t.J&&gc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Zi(n),jo(n);else break e;Eu(n),ot(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=qr(Je(n.cb,n),6e3));if(1>=xp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else qn(n,11)}else if((t.J||n.g==t)&&Zi(n),!Gi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=t.g;if(y){const E=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.h;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(mu(i,i.h),i.h=null))}if(s.D){const T=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,Ae(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Xp(s,s.H?s.ka:null,s.V),o.J){Mp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Fo(a),zr(a)),s.g=o}else zp(s);0<n.i.length&&qo(n)}else u[0]!="stop"&&u[0]!="close"||qn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?qn(n,7):_u(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Sr(4)}catch{}}function NE(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ro(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function PE(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ro(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ap(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ro(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PE(t),s=NE(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wn){this.h=e!==void 0?e:t.h,Xi(this,t.j),this.s=t.s,this.g=t.g,Ji(this,t.m),this.l=t.l,e=t.i;var n=new Cr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ih(this,n),this.o=t.o}else t&&(n=String(t).match(kp))?(this.h=!!e,Xi(this,n[1]||"",!0),this.s=er(n[2]||""),this.g=er(n[3]||"",!0),Ji(this,n[4]),this.l=er(n[5]||"",!0),Ih(this,n[6]||"",!0),this.o=er(n[7]||"")):(this.h=!!e,this.i=new Cr(null,this.h))}Wn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tr(e,Th,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tr(e,Th,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(tr(n,n.charAt(0)=="/"?UE:LE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tr(n,VE)),t.join("")};function Yt(t){return new Wn(t)}function Xi(t,e,n){t.j=n?er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ji(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ih(t,e,n){e instanceof Cr?(t.i=e,BE(t.i,t.h)):(n||(e=tr(e,FE)),t.i=new Cr(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Vo(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ME),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ME(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Th=/[#\/\?@]/g,LE=/[#\?:]/g,UE=/[#\?]/g,FE=/[#\?@]/g,VE=/#/g;function Cr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new Map,t.h=0,t.i&&xE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Cr.prototype;F.add=function(t,e){Rn(this),this.i=null,t=Vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rp(t,e){Rn(t),e=Vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Op(t,e){return Rn(t),e=Vs(t,e),t.g.has(e)}F.forEach=function(t,e){Rn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){Rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){Rn(this);let e=[];if(typeof t=="string")Op(this,t)&&(e=e.concat(this.g.get(Vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Rn(this),this.i=null,t=Vs(this,t),Op(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Dp(t,e,n){Rp(t,e),0<n.length&&(t.i=null,t.g.set(Vs(t,e),su(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BE(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rp(this,s),Dp(this,r,n))},t)),t.j=e}var $E=class{constructor(t,e){this.h=t,this.g=e}};function Np(t){this.l=t||jE,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jE=10;function Pp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xp(t){return t.h?1:t.g?t.g.size:0}function gc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mu(t,e){t.g?t.g.add(e):t.h=e}function Mp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Np.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return su(t.i)}function yu(){}yu.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};yu.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function qE(){this.g=new yu}function HE(t,e,n){const s=n||"";try{Ap(t,function(r,i){let o=r;$r(r)&&(o=lu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function KE(t,e){const n=new xo;if(Q.Image){const s=new Image;s.onload=mi(vi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=mi(vi,n,s,"TestLoadImage: error",!1,e),s.onabort=mi(vi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=mi(vi,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function vi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Wr(t){this.l=t.ac||null,this.j=t.jb||!1}ze(Wr,du);Wr.prototype.g=function(){return new Bo(this.l,this.j)};Wr.prototype.i=function(t){return function(){return t}}({});function Bo(t,e){$e.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=vu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Bo,$e);var vu=0;F=Bo.prototype;F.open=function(t,e){if(this.readyState!=vu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ar(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=vu};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Up(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Up(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gr(this):Ar(this),this.readyState==3&&Up(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,Gr(this))};F.Ua=function(t){this.g&&(this.response=t,Gr(this))};F.ga=function(){this.g&&Gr(this)};function Gr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ar(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ar(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zE=Q.JSON.parse;function Re(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fp,this.K=this.L=!1}ze(Re,$e);var Fp="",WE=/^https?$/i,GE=["POST","PUT"];F=Re.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hc.g(),this.C=this.u?bh(this.u):bh(hc),this.g.onreadystatechange=Je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Sh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Q.FormData&&t instanceof Q.FormData,!(0<=ep(GE,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$p(this),0<this.B&&((this.K=QE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.qa,this)):this.A=fu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Sh(this,i)}};function QE(t){return ks&&fE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof nu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function Sh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vp(t),$o(t)}function Vp(t){t.D||(t.D=!0,He(t,"complete"),He(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),$o(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$o(this,!0)),Re.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?Bp(this):this.fb())};F.fb=function(){Bp(this)};function Bp(t){if(t.h&&typeof nu<"u"&&(!t.C[1]||qt(t)!=4||t.aa()!=2)){if(t.v&&qt(t)==4)fu(t.Ha,0,t);else if(He(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(kp)[1]||null;if(!r&&Q.self&&Q.self.location){var i=Q.self.location.protocol;r=i.substr(0,i.length-1)}s=!WE.test(r?r.toLowerCase():"")}n=s}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Vp(t)}}finally{$o(t)}}}}function $o(t,e){if(t.g){$p(t);const n=t.g,s=t.C[0]?Wi:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=s}catch{}}}function $p(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zE(e)}};function Ch(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jp(t){let e="";return iu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function wu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=jp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qp(t){this.Ca=0,this.i=[],this.j=new xo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ys("baseRetryDelayMs",5e3,t),this.bb=Ys("retryDelaySeedMs",1e4,t),this.$a=Ys("forwardChannelMaxRetries",2,t),this.ta=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Np(t&&t.concurrentRequestLimit),this.Fa=new qE,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=qp.prototype;F.ma=8;F.G=1;function _u(t){if(Hp(t),t.G==3){var e=t.U++,n=Yt(t.F);Ae(n,"SID",t.I),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Qr(t,n),e=new Kr(t,t.j,e,void 0),e.K=2,e.v=Vo(Yt(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Jp(e.l,null),e.g.da(e.v)),e.F=Date.now(),zr(e)}Yp(t)}function jo(t){t.g&&(bu(t),t.g.cancel(),t.g=null)}function Hp(t){jo(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Zi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function qo(t){Pp(t.h)||t.m||(t.m=!0,fp(t.Ja,t),t.C=0)}function YE(t,e){return xp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=qr(Je(t.Ja,t,e),Qp(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Kr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=rp(i),ip(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Kp(this,r,e),n=Yt(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),Qr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(jp(i)))+"&"+e:this.o&&wu(n,this.o,i)),mu(this.h,r),this.Ya&&Ae(n,"TYPE","init"),this.O?(Ae(n,"$req",e),Ae(n,"SID","null"),r.Z=!0,dc(r,n,null)):dc(r,n,e),this.G=2}}else this.G==3&&(t?Ah(this,t):this.i.length==0||Pp(this.h)||Ah(this))};function Ah(t,e){var n;e?n=e.m:n=t.U++;const s=Yt(t.F);Ae(s,"SID",t.I),Ae(s,"RID",n),Ae(s,"AID",t.T),Qr(t,s),t.o&&t.s&&wu(s,t.o,t.s),n=new Kr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Kp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),mu(t.h,n),dc(n,s,e)}function Qr(t,e){t.ia&&iu(t.ia,function(n,s){Ae(e,s,n)}),t.l&&Ap({},function(n,s){Ae(e,s,n)})}function Kp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Je(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{HE(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function zp(t){t.g||t.u||(t.Z=1,fp(t.Ia,t),t.A=0)}function Eu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=qr(Je(t.Ia,t),Qp(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,Wp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qr(Je(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),jo(this),Wp(this))};function bu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Wp(t){t.g=new Kr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Yt(t.sa);Ae(e,"RID","rpc"),Ae(e,"SID",t.I),Ae(e,"CI",t.L?"0":"1"),Ae(e,"AID",t.T),Ae(e,"TYPE","xmlhttp"),Qr(t,e),t.o&&t.s&&wu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vo(Yt(e)),n.s=null,n.P=!0,Ip(n,t)}F.cb=function(){this.v!=null&&(this.v=null,jo(this),Eu(this),ot(19))};function Zi(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Gp(t,e){var n=null;if(t.g==e){Zi(t),bu(t),t.g=null;var s=2}else if(gc(t.h,e))n=e.D,Mp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Mo(),He(s,new wp(s,n)),qo(t)}else zp(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&YE(t,e)||s==2&&Eu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}}function Qp(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Je(t.kb,t);n||(n=new Wn("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Xi(n,"https"),Vo(n)),KE(n.toString(),s)}else ot(2);t.G=0,t.l&&t.l.va(e),Yp(t),Hp(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Yp(t){if(t.G=0,t.la=[],t.l){const e=Lp(t.h);(e.length!=0||t.i.length!=0)&&(mh(t.la,e),mh(t.la,t.i),t.h.i.length=0,su(t.i),t.i.length=0),t.l.ua()}}function Xp(t,e,n){var s=n instanceof Wn?Yt(n):new Wn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ji(s,s.m);else{var r=Q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Wn(null,void 0);s&&Xi(i,s),e&&(i.g=e),r&&Ji(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ae(s,n,e),Ae(s,"VER",t.ma),Qr(t,s),s}function Jp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Re(new Wr({jb:!0})):new Re(t.ra),e.Ka(t.H),e}function Zp(){}F=Zp.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function eo(){if(ks&&!(10<=Number(dE)))throw Error("Environmental error: no available transport.")}eo.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){$e.call(this),this.g=new qp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Gi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bs(this)}ze(pt,$e);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Xp(t,null,t.V),qo(t)};pt.prototype.close=function(){_u(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lu(t),t=n);e.i.push(new $E(e.ab++,t)),e.G==3&&qo(e)};pt.prototype.M=function(){this.g.l=null,delete this.j,_u(this.g),delete this.g,pt.X.M.call(this)};function eg(t){pu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(eg,pu);function tg(){gu.call(this),this.status=1}ze(tg,gu);function Bs(t){this.g=t}ze(Bs,Zp);Bs.prototype.xa=function(){He(this.g,"a")};Bs.prototype.wa=function(t){He(this.g,new eg(t))};Bs.prototype.va=function(t){He(this.g,new tg)};Bs.prototype.ua=function(){He(this.g,"b")};eo.prototype.createWebChannel=eo.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Lo.NO_ERROR=0;Lo.TIMEOUT=8;Lo.HTTP_ERROR=6;_p.COMPLETE="complete";Ep.EventType=Hr;Hr.OPEN="a";Hr.CLOSE="b";Hr.ERROR="c";Hr.MESSAGE="d";$e.prototype.listen=$e.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.Oa;Re.prototype.getLastErrorCode=Re.prototype.Ea;Re.prototype.getStatus=Re.prototype.aa;Re.prototype.getResponseJson=Re.prototype.Sa;Re.prototype.getResponseText=Re.prototype.fa;Re.prototype.send=Re.prototype.da;Re.prototype.setWithCredentials=Re.prototype.Ka;var XE=function(){return new eo},JE=function(){return Mo()},Da=Lo,ZE=_p,eb=ns,kh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},tb=Wr,wi=Ep,nb=Re;const Rh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Zc("@firebase/firestore");function Oh(){return Jn.logLevel}function $(t,...e){if(Jn.logLevel<=he.DEBUG){const n=e.map(Iu);Jn.debug(`Firestore (${$s}): ${t}`,...n)}}function Xt(t,...e){if(Jn.logLevel<=he.ERROR){const n=e.map(Iu);Jn.error(`Firestore (${$s}): ${t}`,...n)}}function mc(t,...e){if(Jn.logLevel<=he.WARN){const n=e.map(Iu);Jn.warn(`Firestore (${$s}): ${t}`,...n)}}function Iu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: `+t;throw Xt(e),new Error(e)}function Ee(t,e){t||Y()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class rb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ib{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ee(typeof s.accessToken=="string"),new ng(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Ge(e)}}class ob{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ee(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ab{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new ob(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ub{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.A=n.token,new cb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=lb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function de(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new xe(0,0))}static max(){return new te(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends kr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends kr{construct(e,n,s){return new Ye(e,n,s)}static isValidIdentifier(e){return hb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ie.fromString(e))}static fromName(e){return new q(Ie.fromString(e).popFirst(5))}static empty(){return new q(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ie(e.slice()))}}function fb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new xe(n+1,0):new xe(n,s));return new Tn(r,q.empty(),e)}function db(t){return new Tn(t.readTime,t.key,-1)}class Tn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Tn(te.min(),q.empty(),-1)}static max(){return new Tn(te.max(),q.empty(),-1)}}function pb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==gb)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(r=>r?R.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new R((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new R((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Xr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tu.at=-1;class Ue{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _i(this.root,e,this.comparator,!1)}getReverseIterator(){return new _i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _i(this.root,e,this.comparator,!0)}}class _i{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:je.RED,this.left=r!=null?r:je.EMPTY,this.right=i!=null?i:je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new je(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nh(this.data.getIterator())}getIteratorFrom(e){return new Nh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Nh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new vt([])}unionWith(e){let n=new Me(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const yb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=yb.exec(t);if(Ee(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Os(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function og(t){const e=t.mapValue.fields.__previous_value__;return ig(e)?og(e):e}function Rr(t){const e=Sn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Or{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}function Ho(t){return t==null}function to(t){return t===0&&1/t==-1/0}function wb(t){return typeof t=="number"&&Number.isInteger(t)&&!to(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ig(t)?4:_b(t)?9007199254740991:10:Y()}function Vt(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rr(t).isEqual(Rr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Sn(s.timestampValue),o=Sn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Os(s.bytesValue).isEqual(Os(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ne(s.geoPointValue.latitude)===Ne(r.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ne(s.integerValue)===Ne(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ne(s.doubleValue),o=Ne(r.doubleValue);return i===o?to(i)===to(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Dh(i)!==Dh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Vt(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Dr(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=Zn(t),s=Zn(e);if(n!==s)return de(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ne(r.integerValue||r.doubleValue),a=Ne(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ph(t.timestampValue,e.timestampValue);case 4:return Ph(Rr(t),Rr(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Os(r),a=Os(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=de(o[c],a[c]);if(u!==0)return u}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=de(Ne(r.latitude),Ne(i.latitude));return o!==0?o:de(Ne(r.longitude),Ne(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ds(o[c],a[c]);if(u)return u}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ei.mapValue&&i===Ei.mapValue)return 0;if(r===Ei.mapValue)return 1;if(i===Ei.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const d=de(a[l],u[l]);if(d!==0)return d;const g=Ds(o[a[l]],c[u[l]]);if(g!==0)return g}return de(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Ph(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Sn(t),s=Sn(e),r=de(n.seconds,s.seconds);return r!==0?r:de(n.nanos,s.nanos)}function ws(t){return yc(t)}function yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Sn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=yc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${yc(s.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function xh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vc(t){return!!t&&"integerValue"in t}function Su(t){return!!t&&"arrayValue"in t}function Mh(t){return!!t&&"nullValue"in t}function Lh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oi(t){return!!t&&"mapValue"in t}function ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ur(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _b(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Oi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(n)}setAll(e){let n=Ye.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ur(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Oi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Oi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ss(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ut(ur(this.value))}}function ag(t){const e=[];return ss(t.fields,(n,s)=>{const r=new Ye([n]);if(Oi(s)){const i=ag(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new qe(e,0,te.min(),te.min(),ut.empty(),0)}static newFoundDocument(e,n,s){return new qe(e,1,n,te.min(),s,0)}static newNoDocument(e,n){return new qe(e,2,n,te.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,te.min(),ut.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Uh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Eb(t,e,n,s,r,i,o)}function Cu(t){const e=X(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+ws(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ho(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ws(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ws(s)).join(",")),e.ht=n}return e.ht}function bb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ws(s.value)}`;var s}).join(", ")}]`),Ho(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ws(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ws(n)).join(",")),`Target(${e})`}function Au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ob(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Vt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vh(t.startAt,e.startAt)&&Vh(t.endAt,e.endAt)}function wc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new Ib(e,n,s):n==="array-contains"?new Cb(e,s):n==="in"?new Ab(e,s):n==="not-in"?new kb(e,s):n==="array-contains-any"?new Rb(e,s):new at(e,n,s)}static lt(e,n,s){return n==="in"?new Tb(e,s):new Sb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ds(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.ft(Ds(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ib extends at{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.ft(n)}}class Tb extends at{constructor(e,n){super(e,"in",n),this.keys=cg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sb extends at{constructor(e,n){super(e,"not-in",n),this.keys=cg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class Cb extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Su(n)&&Dr(n.arrayValue,this.value)}}class Ab extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Dr(this.value.arrayValue,n)}}class kb extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Dr(this.value.arrayValue,n)}}class Rb extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Su(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Dr(this.value.arrayValue,s))}}class no{constructor(e,n){this.position=e,this.inclusive=n}}class lr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ob(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Fh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=Ds(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function Db(t,e,n,s,r,i,o,a){return new Jr(t,e,n,s,r,i,o,a)}function Ko(t){return new Jr(t)}function Bh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ug(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function lg(t){for(const e of t.filters)if(e.dt())return e.field;return null}function hg(t){return t.collectionGroup!==null}function Nr(t){const e=X(t);if(e._t===null){e._t=[];const n=lg(e),s=ug(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new lr(n)),e._t.push(new lr(Ye.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new lr(Ye.keyField(),i))}}}return e._t}function Jt(t){const e=X(t);if(!e.wt)if(e.limitType==="F")e.wt=Uh(e.path,e.collectionGroup,Nr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Nr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new lr(i.field,o))}const s=e.endAt?new no(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new no(e.startAt.position,e.startAt.inclusive):null;e.wt=Uh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function _c(t,e,n){return new Jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zo(t,e){return Au(Jt(t),Jt(e))&&t.limitType===e.limitType}function fg(t){return`${Cu(Jt(t))}|lt:${t.limitType}`}function Ec(t){return`Query(target=${bb(Jt(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Fh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Nr(n),s)||n.endAt&&!function(r,i,o){const a=Fh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Nr(n),s))}(t,e)}function Nb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dg(t){return(e,n)=>{let s=!1;for(const r of Nr(t)){const i=Pb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Pb(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ds(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:to(e)?"-0":e}}function gg(t){return{integerValue:""+t}}function xb(t,e){return wb(e)?gg(e):pg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this._=void 0}}function Mb(t,e,n){return t instanceof so?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Pr?yg(t,e):t instanceof xr?vg(t,e):function(s,r){const i=mg(s,r),o=$h(i)+$h(s.yt);return vc(i)&&vc(s.yt)?gg(o):pg(s.It,o)}(t,e)}function Lb(t,e,n){return t instanceof Pr?yg(t,e):t instanceof xr?vg(t,e):n}function mg(t,e){return t instanceof ro?vc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class so extends Wo{}class Pr extends Wo{constructor(e){super(),this.elements=e}}function yg(t,e){const n=wg(e);for(const s of t.elements)n.some(r=>Vt(r,s))||n.push(s);return{arrayValue:{values:n}}}class xr extends Wo{constructor(e){super(),this.elements=e}}function vg(t,e){let n=wg(e);for(const s of t.elements)n=n.filter(r=>!Vt(r,s));return{arrayValue:{values:n}}}class ro extends Wo{constructor(e,n){super(),this.It=e,this.yt=n}}function $h(t){return Ne(t.integerValue||t.doubleValue)}function wg(t){return Su(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ub(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Pr&&s instanceof Pr||n instanceof xr&&s instanceof xr?Rs(n.elements,s.elements,Vt):n instanceof ro&&s instanceof ro?Vt(n.yt,s.yt):n instanceof so&&s instanceof so}(t.transform,e.transform)}class Fb{constructor(e,n){this.version=e,this.transformResults=n}}class Tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Di(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Go{}function _g(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bg(t.key,Tt.none()):new Zr(t.key,t.data,Tt.none());{const n=t.data,s=ut.empty();let r=new Me(Ye.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new On(t.key,s,new vt(r.toArray()),Tt.none())}}function Vb(t,e,n){t instanceof Zr?function(s,r,i){const o=s.value.clone(),a=qh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof On?function(s,r,i){if(!Di(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=qh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Eg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function hr(t,e,n,s){return t instanceof Zr?function(r,i,o,a){if(!Di(r.precondition,i))return o;const c=r.value.clone(),u=Hh(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof On?function(r,i,o,a){if(!Di(r.precondition,i))return o;const c=Hh(r.fieldTransforms,a,i),u=i.data;return u.setAll(Eg(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Di(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Bb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=mg(s.transform,r||null);i!=null&&(n===null&&(n=ut.empty()),n.set(s.field,i))}return n||null}function jh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rs(n,s,(r,i)=>Ub(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zr extends Go{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class On extends Go{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Eg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function qh(t,e,n){const s=new Map;Ee(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Lb(o,a,n[r]))}return s}function Hh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Mb(i,o,e))}return s}class bg extends Go{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $b extends Go{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function qb(t){switch(t){default:return Y();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Ig(t){if(t===void 0)return Xt("GRPC error has no .code"),A.UNKNOWN;switch(t){case De.OK:return A.OK;case De.CANCELLED:return A.CANCELLED;case De.UNKNOWN:return A.UNKNOWN;case De.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case De.INTERNAL:return A.INTERNAL;case De.UNAVAILABLE:return A.UNAVAILABLE;case De.UNAUTHENTICATED:return A.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case De.NOT_FOUND:return A.NOT_FOUND;case De.ALREADY_EXISTS:return A.ALREADY_EXISTS;case De.PERMISSION_DENIED:return A.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case De.ABORTED:return A.ABORTED;case De.OUT_OF_RANGE:return A.OUT_OF_RANGE;case De.UNIMPLEMENTED:return A.UNIMPLEMENTED;case De.DATA_LOSS:return A.DATA_LOSS;default:return Y()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new Ue(q.comparator);function Zt(){return Hb}const Tg=new Ue(q.comparator);function nr(...t){let e=Tg;for(const n of t)e=e.insert(n.key,n);return e}function Sg(t){let e=Tg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Hn(){return fr()}function Cg(){return fr()}function fr(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const Kb=new Ue(q.comparator),zb=new Me(q.comparator);function se(...t){let e=zb;for(const n of t)e=e.add(n);return e}const Wb=new Me(de);function Ag(){return Wb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ei.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Qo(te.min(),r,Ag(),Zt(),se())}}class ei{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ei(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class kg{constructor(e,n){this.targetId=e,this.At=n}}class Rg{constructor(e,n,s=nt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Kh{constructor(){this.Rt=0,this.bt=Wh(),this.Pt=nt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=se(),n=se(),s=se();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Y()}}),new ei(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Wh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Gb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Zt(),this.qt=zh(),this.Kt=new Me(de)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(wc(i))if(s===0){const o=new q(i.path);this.jt(n,o,qe.newNoDocument(o,te.min()))}else Ee(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&wc(a.target)){const c=new q(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,qe.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=se();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Qo(e,n,this.Kt,this.Ut,s);return this.Ut=Zt(),this.qt=zh(),this.Kt=new Me(de),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Kh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Me(de),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Kh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function zh(){return new Ue(q.comparator)}function Wh(){return new Ue(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Yb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Xb{constructor(e,n){this.databaseId=e,this.gt=n}}function io(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Og(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Jb(t,e){return io(t,e.toTimestamp())}function Gt(t){return Ee(!!t),te.fromTimestamp(function(e){const n=Sn(e);return new xe(n.seconds,n.nanos)}(t))}function Ru(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Dg(t){const e=Ie.fromString(t);return Ee(xg(e)),e}function bc(t,e){return Ru(t.databaseId,e.path)}function Na(t,e){const n=Dg(e);if(n.get(1)!==t.databaseId.projectId)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Ng(n))}function Ic(t,e){return Ru(t.databaseId,e)}function Zb(t){const e=Dg(t);return e.length===4?Ie.emptyPath():Ng(e)}function Tc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ng(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gh(t,e,n){return{name:bc(t,e),fields:n.value.mapValue.fields}}function eI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.gt?(Ee(u===void 0||typeof u=="string"),nt.fromBase64String(u||"")):(Ee(u===void 0||u instanceof Uint8Array),nt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:Ig(c.code);return new U(u,c.message||"")}(o);n=new Rg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Na(t,s.document.name),i=Gt(s.document.updateTime),o=new ut({mapValue:{fields:s.document.fields}}),a=qe.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ni(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Na(t,s.document),i=s.readTime?Gt(s.readTime):te.min(),o=qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ni([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Na(t,s.document),i=s.removedTargetIds||[];n=new Ni([],i,r,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new jb(r),o=s.targetId;n=new kg(o,i)}}return n}function tI(t,e){let n;if(e instanceof Zr)n={update:Gh(t,e.key,e.value)};else if(e instanceof bg)n={delete:bc(t,e.key)};else if(e instanceof On)n={update:Gh(t,e.key,e.data),updateMask:hI(e.fieldMask)};else{if(!(e instanceof $b))return Y();n={verify:bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof so)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ro)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Jb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function nI(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Gt(s.updateTime):Gt(r);return i.isEqual(te.min())&&(i=Gt(r)),new Fb(i,s.transformResults||[])}(n,e))):[]}function sI(t,e){return{documents:[Ic(t,e.path)]}}function rI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ic(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ic(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(d){if(d.op==="=="){if(Lh(d.value))return{unaryFilter:{field:cs(d.field),op:"IS_NAN"}};if(Mh(d.value))return{unaryFilter:{field:cs(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(Lh(d.value))return{unaryFilter:{field:cs(d.field),op:"IS_NOT_NAN"}};if(Mh(d.value))return{unaryFilter:{field:cs(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(d.field),op:cI(d.op),value:d.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:cs(l.field),direction:aI(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||Ho(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function iI(t){let e=Zb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ee(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Pg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(d){return new lr(fs(d.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(l)));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,Ho(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(l){const d=!!l.before,g=l.values||[];return new no(g,d)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const d=!l.before,g=l.values||[];return new no(g,d)}(n.endAt)),Db(e,r,o,i,a,"F",c,u)}function oI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pg(t){return t?t.unaryFilter!==void 0?[lI(t)]:t.fieldFilter!==void 0?[uI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Pg(e)).reduce((e,n)=>e.concat(n)):Y():[]}function aI(t){return Qb[t]}function cI(t){return Yb[t]}function cs(t){return{fieldPath:t.canonicalString()}}function fs(t){return Ye.fromServerFormat(t.fieldPath)}function uI(t){return at.create(fs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function lI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fs(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fs(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fs(t.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fs(t.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function hI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Vb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=hr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=hr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Cg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=_g(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,s)=>jh(n,s))&&Rs(this.baseMutations,e.baseMutations,(n,s)=>jh(n,s))}}class Ou{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ee(e.mutations.length===s.length);let r=Kb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ou(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,s,r,i=te.min(),o=te.min(),a=nt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.re=e}}function gI(t){const e=iI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_c(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.Ye=new yI}addToCollectionParentIndex(e,n){return this.Ye.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Tn.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class yI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Me(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Me(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ns(0)}static vn(){return new Ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&hr(s.mutation,r,vt.empty(),xe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=Hn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=nr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Hn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Zt();const o=fr(),a=fr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof On)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),hr(l.mutation,u,l.mutation.getFieldMask(),xe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var d;return a.set(u,new wI(l,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fr();let r=new Ue((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||vt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const d=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,d=Cg();l.forEach(g=>{if(!i.has(g)){const y=_g(n.get(g),s.get(g));y!==null&&d.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):R.resolve(Hn());let a=-1,c=i;return o.next(u=>R.forEach(u,(l,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(l)?R.resolve():this.getBaseDocument(e,l,d).next(g=>{c=c.insert(l,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,se())).next(l=>({batchId:a,changes:Sg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=nr();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const c=function(u,l){return new Jr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,d)=>{i=i.insert(l,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,qe.newInvalidDocument(u)))});let o=nr();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&hr(u.mutation,c,vt.empty(),xe.now()),ku(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):R.resolve(qe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Gt(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:gI(s.bundledQuery),readTime:Gt(s.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.overlays=new Ue(q.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Hn();return R.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const r=Hn(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ue((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Hn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Hn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return R.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new dI(n,s));let i=this.es.get(n);i===void 0&&(i=se(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.ns=new Me(Ve.ss),this.rs=new Me(Ve.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ve(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ve(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new q(new Ie([])),s=new Ve(n,e),r=new Ve(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new Ie([])),s=new Ve(n,e),r=new Ve(n,e+1);let i=se();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ve(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ve{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||de(e._s,n._s)}static os(e,n){return de(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Me(Ve.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ve(n,0),r=new Ve(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Me(de);return n.forEach(r=>{const i=new Ve(r,0),o=new Ve(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),R.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new q(i),0);let a=new Me(de);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ee(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return R.forEach(n.mutations,r=>{const i=new Ve(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ve(n,0),r=this.gs.firstAfterOrEqual(s);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.Es=e,this.docs=new Ue(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let s=Zt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():qe.newInvalidDocument(r))}),R.resolve(s)}getAllFromCollection(e,n,s){let r=Zt();const i=new q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||pb(db(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,r){Y()}As(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new SI(this)}getSize(e){return R.resolve(this.size)}}class SI extends vI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.persistence=e,this.Rs=new js(n=>Cu(n),Au),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Du,this.targetCount=0,this.vs=Ns.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(i).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Tu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new CI(this),this.indexManager=new mI,this.remoteDocumentCache=function(s){return new TI(s)}(s=>this.referenceDelegate.xs(s)),this.It=new pI(n),this.Ns=new EI(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new II(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new kI(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return R.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class kI extends mb{constructor(e){super(),this.currentSequenceNumber=e}}class Nu{constructor(e){this.persistence=e,this.Fs=new Du,this.$s=null}static Bs(e){return new Nu(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,s=>{const r=q.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,te.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Pu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Bh(n))return R.resolve(null);let s=Jt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=_c(n,null,"F"),s=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,_c(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Bh(n)||r.isEqual(te.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Oh()<=he.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ec(n)),this.Bi(e,o,n,fb(r,-1)))})}Fi(e,n){let s=new Me(dg(e));return n.forEach((r,i)=>{ku(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Oh()<=he.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ec(n)),this.Ni.getDocumentsMatchingQuery(e,n,Tn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Ue(de),this.qi=new js(i=>Cu(i),Au),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _I(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function DI(t,e,n,s){return new OI(t,e,n,s)}async function Mg(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function NI(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,d=l.keys();let g=R.resolve();return d.forEach(y=>{g=g.next(()=>u.getEntry(a,y)).next(E=>{const T=c.docVersions.get(y);Ee(T!==null),E.version.compareTo(T)<0&&(l.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Lg(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function PI(t,e){const n=X(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((l,d)=>{const g=r.get(d);if(!g)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,d)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(d)?y=y.withResumeToken(nt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):l.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(l.resumeToken,s)),r=r.insert(d,y),function(E,T,k){return E.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,y,l)&&a.push(n.Cs.updateTargetData(i,y))});let c=Zt(),u=se();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(xI(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(te.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(d=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=r,i))}function xI(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Zt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function MI(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function LI(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,R.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Gn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Sc(t,e,n){const s=X(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Xr(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Qh(t,e,n){const s=X(t);let r=te.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=X(a),d=l.qi.get(u);return d!==void 0?R.resolve(l.Ui.get(d)):l.Cs.getTargetData(c,u)}(s,o,Jt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:te.min(),n?i:se())).next(a=>(UI(s,Nb(e),a),{documents:a,Hi:i})))}function UI(t,e,n){let s=t.Ki.get(e)||te.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Yh{constructor(){this.activeTargetIds=Ag()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FI{constructor(){this.Lr=new Yh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Yh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);$("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>($("RestConnection","Received: ",c),c),c=>{throw mc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+$s,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=BI[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new nb;a.setWithCredentials(!0),a.listenOnce(ZE.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Da.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Da.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new U(A.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const d=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',d,"response text:",a.getResponseText()),d>0){let g=a.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=(u=g)===null||u===void 0?void 0:u.error;if(y&&y.status&&y.message){const E=function(T){const k=T.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(k)>=0?k:A.UNKNOWN}(y.status);o(new U(E,y.message))}else o(new U(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(A.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=XE(),o=JE(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new tb({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");$("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,d=!1;const g=new $I({Hr:E=>{d?$("Connection","Not sending because WebChannel is closed:",E):(l||($("Connection","Opening WebChannel transport."),u.open(),l=!0),$("Connection","WebChannel sending:",E),u.send(E))},Jr:()=>u.close()}),y=(E,T,k)=>{E.listen(T,O=>{try{k(O)}catch(N){setTimeout(()=>{throw N},0)}})};return y(u,wi.EventType.OPEN,()=>{d||$("Connection","WebChannel transport opened.")}),y(u,wi.EventType.CLOSE,()=>{d||(d=!0,$("Connection","WebChannel transport closed"),g.io())}),y(u,wi.EventType.ERROR,E=>{d||(d=!0,mc("Connection","WebChannel transport errored:",E),g.io(new U(A.UNAVAILABLE,"The operation could not be completed")))}),y(u,wi.EventType.MESSAGE,E=>{var T;if(!d){const k=E.data[0];Ee(!!k);const O=k,N=O.error||((T=O[0])===null||T===void 0?void 0:T.error);if(N){$("Connection","WebChannel received error:",N);const P=N.status;let H=function(ue){const Se=De[ue];if(Se!==void 0)return Ig(Se)}(P),ne=N.message;H===void 0&&(H=A.INTERNAL,ne="Unknown error status: "+P+" with message "+N.message),d=!0,g.io(new U(H,ne)),u.close()}else $("Connection","WebChannel received:",k),g.ro(k)}}),y(o,eb.STAT_EVENT,E=>{E.stat===kh.PROXY?$("Connection","Detected buffering proxy"):E.stat===kh.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.so()},0),g}}function Pa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){return new Xb(t,!0)}class Ug{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ug(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Xt(n.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new U(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qI extends Fg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=eI(this.It,e),s=function(r){if(!("targetChange"in r))return te.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?te.min():i.readTime?Gt(i.readTime):te.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Tc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=wc(a)?{documents:sI(r,a)}:{query:rI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Og(r,i.resumeToken):i.snapshotVersion.compareTo(te.min())>0&&(o.readTime=io(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=oI(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Tc(this.It),n.removeTarget=e,this.Bo(n)}}class HI extends Fg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=nI(e.writeResults,e.commitTime),s=Gt(e.commitTime);return this.listener.Zo(s,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Tc(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>tI(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(A.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(A.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class zI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Xt(n),this.ou=!1):$("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{rs(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=X(a);c._u.add(4),await ti(c),c.gu.set("Unknown"),c._u.delete(4),await Xo(c)}(this))})}),this.gu=new zI(s,r)}}async function Xo(t){if(rs(t))for(const e of t.wu)await e(!0)}async function ti(t){for(const e of t.wu)await e(!1)}function Vg(t,e){const n=X(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Lu(n)?Mu(n):qs(n).ko()&&xu(n,e))}function Bg(t,e){const n=X(t),s=qs(n);n.du.delete(e),s.ko()&&$g(n,e),n.du.size===0&&(s.ko()?s.Fo():rs(n)&&n.gu.set("Unknown"))}function xu(t,e){t.yu.Mt(e.targetId),qs(t).zo(e)}function $g(t,e){t.yu.Mt(e),qs(t).Ho(e)}function Mu(t){t.yu=new Gb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),qs(t).start(),t.gu.uu()}function Lu(t){return rs(t)&&!qs(t).No()&&t.du.size>0}function rs(t){return X(t)._u.size===0}function jg(t){t.yu=void 0}async function GI(t){t.du.forEach((e,n)=>{xu(t,e)})}async function QI(t,e){jg(t),Lu(t)?(t.gu.hu(e),Mu(t)):t.gu.set("Unknown")}async function YI(t,e,n){if(t.gu.set("Online"),e instanceof Rg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await oo(t,s)}else if(e instanceof Ni?t.yu.Gt(e):e instanceof kg?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(te.min()))try{const s=await Lg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(nt.EMPTY_BYTE_STRING,c.snapshotVersion)),$g(r,a);const u=new Gn(c.target,a,1,c.sequenceNumber);xu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await oo(t,s)}}async function oo(t,e,n){if(!Xr(e))throw e;t._u.add(1),await ti(t),t.gu.set("Offline"),n||(n=()=>Lg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Xo(t)})}function qg(t,e){return e().catch(n=>oo(t,n,e))}async function Jo(t){const e=X(t),n=Cn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;XI(e);)try{const r=await MI(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,JI(e,r)}catch(r){await oo(e,r)}Hg(e)&&Kg(e)}function XI(t){return rs(t)&&t.fu.length<10}function JI(t,e){t.fu.push(e);const n=Cn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Hg(t){return rs(t)&&!Cn(t).No()&&t.fu.length>0}function Kg(t){Cn(t).start()}async function ZI(t){Cn(t).eu()}async function eT(t){const e=Cn(t);for(const n of t.fu)e.Xo(n.mutations)}async function tT(t,e,n){const s=t.fu.shift(),r=Ou.from(s,e,n);await qg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Jo(t)}async function nT(t,e){e&&Cn(t).Yo&&await async function(n,s){if(r=s.code,qb(r)&&r!==A.ABORTED){const i=n.fu.shift();Cn(n).Mo(),await qg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jo(n)}var r}(t,e),Hg(t)&&Kg(t)}async function Jh(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=rs(n);n._u.add(3),await ti(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Xo(n)}async function sT(t,e){const n=X(t);e?(n._u.delete(2),await Xo(n)):e||(n._u.add(2),await ti(n),n.gu.set("Unknown"))}function qs(t){return t.pu||(t.pu=function(e,n,s){const r=X(e);return r.su(),new qI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:GI.bind(null,t),Zr:QI.bind(null,t),Wo:YI.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Lu(t)?Mu(t):t.gu.set("Unknown")):(await t.pu.stop(),jg(t))})),t.pu}function Cn(t){return t.Iu||(t.Iu=function(e,n,s){const r=X(e);return r.su(),new HI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:ZI.bind(null,t),Zr:nT.bind(null,t),tu:eT.bind(null,t),Zo:tT.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Jo(t)):(await t.Iu.stop(),t.fu.length>0&&($("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Uu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(t,e){if(Xt("AsyncQueue",`${e}: ${t}`),Xr(t))return new U(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=nr(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new _s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.Tu=new Ue(q.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Y():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ps{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ps(e,n,_s.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.Au=void 0,this.listeners=[]}}class iT{constructor(){this.queries=new js(e=>fg(e),zo),this.onlineState="Unknown",this.Ru=new Set}}async function Vu(t,e){const n=X(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new rT),r)try{i.Au=await n.onListen(s)}catch(o){const a=Fu(o,`Initialization of query '${Ec(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&$u(n)}async function Bu(t,e){const n=X(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function oT(t,e){const n=X(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&$u(n)}function aT(t,e,n){const s=X(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function $u(t){t.Ru.forEach(e=>{e.next()})}class ju{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ps(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.key=e}}class Wg{constructor(e){this.key=e}}class cT{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=se(),this.mutatedKeys=se(),this.Gu=dg(e),this.Qu=new _s(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Zh,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,d)=>{const g=r.get(l),y=ku(this.query,d)?d:null,E=!!g&&this.mutatedKeys.has(g.key),T=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;g&&y?g.data.isEqual(y.data)?E!==T&&(s.track({type:3,doc:y}),k=!0):this.Hu(g,y)||(s.track({type:2,doc:y}),k=!0,(c&&this.Gu(y,c)>0||u&&this.Gu(y,u)<0)&&(a=!0)):!g&&y?(s.track({type:0,doc:y}),k=!0):g&&!y&&(s.track({type:1,doc:g}),k=!0,(c||u)&&(a=!0)),k&&(y?(o=o.add(y),i=T?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(d,g){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return y(d)-y(g)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ps(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Zh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=se(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Wg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new zg(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=se();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ps.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class uT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class lT{constructor(e){this.key=e,this.nc=!1}}class hT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new js(a=>fg(a),zo),this.rc=new Map,this.oc=new Set,this.uc=new Ue(q.comparator),this.cc=new Map,this.ac=new Du,this.hc={},this.lc=new Map,this.fc=Ns.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function fT(t,e){const n=bT(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await LI(n.localStore,Jt(e));n.isPrimaryClient&&Vg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await dT(n,e,s,a==="current",o.resumeToken)}return r}async function dT(t,e,n,s,r){t._c=(d,g,y)=>async function(E,T,k,O){let N=T.view.Wu(k);N.$i&&(N=await Qh(E.localStore,T.query,!1).then(({documents:ne})=>T.view.Wu(ne,N)));const P=O&&O.targetChanges.get(T.targetId),H=T.view.applyChanges(N,E.isPrimaryClient,P);return tf(E,T.targetId,H.Xu),H.snapshot}(t,d,g,y);const i=await Qh(t.localStore,e,!0),o=new cT(e,i.Hi),a=o.Wu(i.documents),c=ei.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);tf(t,n,u.Xu);const l=new uT(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function pT(t,e){const n=X(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!zo(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Sc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Bg(n.remoteStore,s.targetId),Cc(n,s.targetId)}).catch(Yr)):(Cc(n,s.targetId),await Sc(n.localStore,s.targetId,!0))}async function gT(t,e,n){const s=IT(t);try{const r=await function(i,o){const a=X(i),c=xe.now(),u=o.reduce((g,y)=>g.add(y.key),se());let l,d;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=Zt(),E=se();return a.Gi.getEntries(g,u).next(T=>{y=T,y.forEach((k,O)=>{O.isValidDocument()||(E=E.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,y)).next(T=>{l=T;const k=[];for(const O of o){const N=Bb(O,l.get(O.key).overlayedDocument);N!=null&&k.push(new On(O.key,N,ag(N.value.mapValue),Tt.exists(!0)))}return a.mutationQueue.addMutationBatch(g,c,k,o)}).next(T=>{d=T;const k=T.applyToLocalDocumentSet(l,E);return a.documentOverlayCache.saveOverlays(g,T.batchId,k)})}).then(()=>({batchId:d.batchId,changes:Sg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ue(de)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ni(s,r.changes),await Jo(s.remoteStore)}catch(r){const i=Fu(r,"Failed to persist write");n.reject(i)}}async function Gg(t,e){const n=X(t);try{const s=await PI(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ee(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ee(o.nc):r.removedDocuments.size>0&&(Ee(o.nc),o.nc=!1))}),await ni(n,s,e)}catch(s){await Yr(s)}}function ef(t,e,n){const s=X(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=X(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const d of l.listeners)d.bu(o)&&(c=!0)}),c&&$u(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function mT(t,e,n){const s=X(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ue(q.comparator);o=o.insert(i,qe.newNoDocument(i,te.min()));const a=se().add(i),c=new Qo(te.min(),new Map,new Me(de),o,a);await Gg(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),qu(s)}else await Sc(s.localStore,e,!1).then(()=>Cc(s,e,n)).catch(Yr)}async function yT(t,e){const n=X(t),s=e.batch.batchId;try{const r=await NI(n.localStore,e);Yg(n,s,null),Qg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ni(n,r)}catch(r){await Yr(r)}}async function vT(t,e,n){const s=X(t);try{const r=await function(i,o){const a=X(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Ee(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Yg(s,e,n),Qg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ni(s,r)}catch(r){await Yr(r)}}function Qg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Yg(t,e,n){const s=X(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Cc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Xg(t,s)})}function Xg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Bg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),qu(t))}function tf(t,e,n){for(const s of n)s instanceof zg?(t.ac.addReference(s.key,e),wT(t,s)):s instanceof Wg?($("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Xg(t,s.key)):Y()}function wT(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||($("SyncEngine","New document in limbo: "+n),t.oc.add(s),qu(t))}function qu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(Ie.fromString(e)),s=t.fc.next();t.cc.set(s,new lT(n)),t.uc=t.uc.insert(n,s),Vg(t.remoteStore,new Gn(Jt(Ko(n.path)),s,2,Tu.at))}}async function ni(t,e,n){const s=X(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Pu.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>R.forEach(c,d=>R.forEach(d.Si,g=>u.persistence.referenceDelegate.addReference(l,d.targetId,g)).next(()=>R.forEach(d.Di,g=>u.persistence.referenceDelegate.removeReference(l,d.targetId,g)))))}catch(l){if(!Xr(l))throw l;$("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const g=u.Ui.get(d),y=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(y);u.Ui=u.Ui.insert(d,E)}}}(s.localStore,i))}async function _T(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await Mg(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new U(A.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ni(n,s.ji)}}function ET(t,e){const n=X(t),s=n.cc.get(e);if(s&&s.nc)return se().add(s.key);{let r=se();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function bT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ET.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mT.bind(null,e),e.sc.Wo=oT.bind(null,e.eventManager),e.sc.wc=aT.bind(null,e.eventManager),e}function IT(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vT.bind(null,e),e}class TT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Yo(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return DI(this.persistence,new RI,e.initialUser,this.It)}yc(e){return new AI(Nu.Bs,this.It)}gc(e){return new FI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ST{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ef(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_T.bind(null,this.syncEngine),await sT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iT}createDatastore(e){const n=Yo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new jI(r));var r;return function(i,o,a,c){return new KI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>ef(this.syncEngine,a,0),o=Xh.C()?new Xh:new VI,new WI(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new hT(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);$("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ti(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e,n){if(!n)throw new U(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CT(t,e,n,s){if(e===!0&&s===!0)throw new U(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nf(t){if(!q.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sf(t){if(q.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zo(t);throw new U(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Map;class of{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,CT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sb;switch(n.type){case"gapi":const s=n.client;return new ab(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rf.get(e);n&&($("ComponentProvider","Removing Datastore"),rf.delete(e),n.terminate())}(this),Promise.resolve()}}function AT(t,e,n,s={}){var r;const i=(t=ft(t,ea))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&mc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ge.MOCK_USER;else{o=B_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new U(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ge(c)}t._authCredentials=new rb(new ng(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class Hs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hs(this.firestore,e,this._query)}}class En extends Hs{constructor(e,n,s){super(e,n,Ko(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new q(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function RA(t,e,...n){if(t=Pe(t),Jg("collection","path",e),t instanceof ea){const s=Ie.fromString(e,...n);return sf(s),new En(t,null,s)}{if(!(t instanceof et||t instanceof En))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return sf(s),new En(t.firestore,null,s)}}function kT(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=sg.R()),Jg("doc","path",e),t instanceof ea){const s=Ie.fromString(e,...n);return nf(s),new et(t,null,new q(s))}{if(!(t instanceof et||t instanceof En))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return nf(s),new et(t.firestore,t instanceof En?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ge.UNAUTHENTICATED,this.clientId=sg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Fu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function OT(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Mg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function DT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NT(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Jh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jh(e.remoteStore,i)),t.onlineComponents=e}async function NT(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await OT(t,new TT)),t.offlineComponents}async function Zg(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await DT(t,new ST)),t.onlineComponents}function PT(t){return Zg(t).then(e=>e.syncEngine)}async function ao(t){const e=await Zg(t),n=e.eventManager;return n.onListen=fT.bind(null,e.syncEngine),n.onUnlisten=pT.bind(null,e.syncEngine),n}function xT(t,e,n={}){const s=new Wt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Hu({next:d=>{i.enqueueAndForget(()=>Bu(r,l));const g=d.docs.has(o);!g&&d.fromCache?c.reject(new U(A.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&a&&a.source==="server"?c.reject(new U(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),l=new ju(Ko(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Vu(r,l)}(await ao(t),t.asyncQueue,e,n,s)),s.promise}function MT(t,e,n={}){const s=new Wt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Hu({next:d=>{i.enqueueAndForget(()=>Bu(r,l)),d.fromCache&&a.source==="server"?c.reject(new U(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),l=new ju(o,u,{includeMetadataChanges:!0,Nu:!0});return Vu(r,l)}(await ao(t),t.asyncQueue,e,n,s)),s.promise}class LT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ug(this,"async_queue_retry"),this.Wc=()=>{const n=Pa();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Pa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Pa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Wt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Xr(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Xt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Uu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function af(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class An extends ea{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new LT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||em(this),this._firestoreClient.terminate()}}function UT(t,e){const n=typeof t=="object"?t:Xd(),s=typeof t=="string"?t:e||"(default)",r=tu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=U_("firestore");i&&AT(r,...i)}return r}function ta(t){return t._firestoreClient||em(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function em(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new vb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new RT(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xs(nt.fromBase64String(e))}catch(n){throw new U(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xs(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=/^__.*__$/;class VT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new On(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zr(e,this.data,n,this.fieldTransforms)}}class tm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new On(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Wu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Wu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return co(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(nm(this.sa)&&FT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class BT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Yo(e)}da(e,n,s,r=!1){return new Wu({sa:e,methodName:n,fa:s,path:Ye.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function sa(t){const e=t._freezeSettings(),n=Yo(t._databaseId);return new BT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sm(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Gu("Data must be an object, but it was:",o,s);const a=rm(s,o);let c,u;if(i.merge)c=new vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const d of i.mergeFields){const g=Ac(e,d,n);if(!o.contains(g))throw new U(A.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);om(l,g)||l.push(g)}c=new vt(l),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new VT(new ut(a),c,u)}class ra extends Ku{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ra}}function $T(t,e,n,s){const r=t.da(1,e,n);Gu("Data must be an object, but it was:",r,s);const i=[],o=ut.empty();ss(s,(c,u)=>{const l=Qu(e,c,n);u=Pe(u);const d=r.ca(l);if(u instanceof ra)i.push(l);else{const g=si(u,d);g!=null&&(i.push(l),o.set(l,g))}});const a=new vt(i);return new tm(o,a,r.fieldTransforms)}function jT(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Ac(e,s,n)],c=[r];if(i.length%2!=0)throw new U(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(Ac(e,i[g])),c.push(i[g+1]);const u=[],l=ut.empty();for(let g=a.length-1;g>=0;--g)if(!om(u,a[g])){const y=a[g];let E=c[g];E=Pe(E);const T=o.ca(y);if(E instanceof ra)u.push(y);else{const k=si(E,T);k!=null&&(u.push(y),l.set(y,k))}}const d=new vt(u);return new tm(l,d,o.fieldTransforms)}function qT(t,e,n,s=!1){return si(n,t.da(s?4:3,e))}function si(t,e){if(im(t=Pe(t)))return Gu("Unsupported field value:",e,t),rm(t,e);if(t instanceof Ku)return function(n,s){if(!nm(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=si(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=xe.fromDate(n);return{timestampValue:io(s.It,r)}}if(n instanceof xe){const r=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:io(s.It,r)}}if(n instanceof zu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xs)return{bytesValue:Og(s.It,n._byteString)};if(n instanceof et){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ru(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Zo(n)}`)}(t,e)}function rm(t,e){const n={};return rg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(s,r)=>{const i=si(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function im(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof zu||t instanceof xs||t instanceof et||t instanceof Ku)}function Gu(t,e,n){if(!im(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Zo(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ac(t,e,n){if((e=Pe(e))instanceof na)return e._internalPath;if(typeof e=="string")return Qu(t,e);throw co("Field path arguments must be of type string or ",t,!1,void 0,n)}const HT=new RegExp("[~\\*/\\[\\]]");function Qu(t,e,n){if(e.search(HT)>=0)throw co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new na(...e.split("."))._internalPath}catch{throw co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function co(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new U(A.INVALID_ARGUMENT,a+t+c)}function om(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KT extends am{data(){return super.data()}}function Yu(t,e){return typeof e=="string"?Qu(t,e):e instanceof na?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zT{}function OA(t,...e){for(const n of e)t=n._apply(t);return t}class WT extends zT{constructor(e,n,s){super(),this.ma=e,this.ga=n,this.ya=s,this.type="where"}_apply(e){const n=sa(e.firestore),s=function(r,i,o,a,c,u,l){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){uf(l,u);const y=[];for(const E of l)y.push(cf(a,r,E));d={arrayValue:{values:y}}}else d=cf(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||uf(l,u),d=qT(o,i,l,u==="in"||u==="not-in");const g=at.create(c,u,d);return function(y,E){if(E.dt()){const k=lg(y);if(k!==null&&!k.isEqual(E.field))throw new U(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${k.toString()}' and '${E.field.toString()}'`);const O=ug(y);O!==null&&GT(y,E.field,O)}const T=function(k,O){for(const N of k.filters)if(O.indexOf(N.op)>=0)return N.op;return null}(y,function(k){switch(k){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(E.op));if(T!==null)throw T===E.op?new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${E.op.toString()}' filter.`):new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${E.op.toString()}' filters with '${T.toString()}' filters.`)}(r,g),g}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Hs(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Jr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function DA(t,e,n){const s=e,r=Yu("where",t);return new WT(r,s,n)}function cf(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new U(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hg(e)&&n.indexOf("/")!==-1)throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ie.fromString(n));if(!q.isDocumentKey(s))throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return xh(t,new q(s))}if(n instanceof et)return xh(t,n._key);throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zo(n)}.`)}function uf(t,e){if(!Array.isArray(t)||t.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(A.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function GT(t,e,n){if(!n.isEqual(e))throw new U(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return ss(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new zu(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=og(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Rr(e));default:return null}}convertTimestamp(e){const n=Sn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);Ee(xg(s));const r=new Or(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||Xt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lm extends am{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Yu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pi extends lm{data(e={}){return super.data(e)}}class hm{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new sr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Pi(this._firestore,this._userDataWriter,s.key,s,new sr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Pi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new sr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Pi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new sr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:YT(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){t=ft(t,et);const e=ft(t.firestore,An);return xT(ta(e),t._key).then(n=>fm(e,t,n))}class Xu extends QT{constructor(e){super(),this.firestore=e}convertBytes(e){return new xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function PA(t){t=ft(t,Hs);const e=ft(t.firestore,An),n=ta(e),s=new Xu(e);return cm(t._query),MT(n,t._query).then(r=>new hm(e,s,t,r))}function xA(t,e,n){t=ft(t,et);const s=ft(t.firestore,An),r=um(t.converter,e,n);return Ju(s,[sm(sa(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Tt.none())])}function MA(t,e,n,...s){t=ft(t,et);const r=ft(t.firestore,An),i=sa(r);let o;return o=typeof(e=Pe(e))=="string"||e instanceof na?jT(i,"updateDoc",t._key,e,n,s):$T(i,"updateDoc",t._key,e),Ju(r,[o.toMutation(t._key,Tt.exists(!0))])}function LA(t,e){const n=ft(t.firestore,An),s=kT(t),r=um(t.converter,e);return Ju(n,[sm(sa(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Tt.exists(!1))]).then(()=>s)}function UA(t,...e){var n,s,r;t=Pe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||af(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(af(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,l;if(t instanceof et)u=ft(t.firestore,An),l=Ko(t._key.path),c={next:d=>{e[o]&&e[o](fm(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ft(t,Hs);u=ft(d.firestore,An),l=d._query;const g=new Xu(u);c={next:y=>{e[o]&&e[o](new hm(u,g,d,y))},error:e[o+1],complete:e[o+2]},cm(t._query)}return function(d,g,y,E){const T=new Hu(E),k=new ju(g,T,y);return d.asyncQueue.enqueueAndForget(async()=>Vu(await ao(d),k)),()=>{T.bc(),d.asyncQueue.enqueueAndForget(async()=>Bu(await ao(d),k))}}(ta(u),l,a,c)}function Ju(t,e){return function(n,s){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>gT(await PT(n),s,r)),r.promise}(ta(t),e)}function fm(t,e,n){const s=n.docs.get(e._key),r=new Xu(t);return new lm(t,r,e._key,s,new sr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){$s=n})(Br),As(new Yn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new An(new ib(n.getProvider("auth-internal")),new ub(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),_n(Rh,"3.7.3",t),_n(Rh,"3.7.3","esm2017")})();const XT={apiKey:"AIzaSyCpN8PCPm2oDZM3OdjFzOMlIXOlgoA9uqc",authDomain:"barmonopol-cca80.firebaseapp.com",projectId:"barmonopol-cca80",storageBucket:"barmonopol-cca80.appspot.com",messagingSenderId:"716475350673",appId:"1:716475350673:web:315b9a70f8b313e18c8930"},JT=Yd(XT),FA=UT(JT);function Zu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function dm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZT=dm,pm=new Fr("auth","Firebase",dm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new Zc("@firebase/auth");function xi(t,...e){lf.logLevel<=he.ERROR&&lf.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw el(t,...e)}function Lt(t,...e){return el(t,...e)}function eS(t,e,n){const s=Object.assign(Object.assign({},ZT()),{[e]:n});return new Fr("auth","Firebase",s).create(e,{appName:t.name})}function el(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return pm.create(t,...e)}function K(t,e,...n){if(!t)throw el(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xi(e),new Error(e)}function en(t,e){t||Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function Kt(t){en(t instanceof Function,"Expected a class definition");let e=hf.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t,e){const n=tu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ki(i,e!=null?e:{}))return r;At(r,"already-initialized")}return n.initialize({options:e})}function nS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sS(){return ff()==="http:"||ff()==="https:"}function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sS()||k_()||"connection"in navigator)?navigator.onLine:!0}function iS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=A_()||R_()}get(){return rS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new ri(3e4,6e4);function ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ks(t,e,n,s,r={}){return mm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Vr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gm.fetch()(ym(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function mm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},oS),e);try{const r=new cS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eS(t,l,u);At(t,l)}}catch(r){if(r instanceof nn)throw r;At(t,"network-request-failed")}}async function oi(t,e,n,s,r={}){const i=await Ks(t,e,n,s,r);return"mfaPendingCredential"in i&&At(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ym(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?tl(t.config,r):`${t.config.apiScheme}://${r}`}class cS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Lt(this.auth,"network-request-failed")),aS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Lt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e){return Ks(t,"POST","/v1/accounts:delete",e)}async function lS(t,e){return Ks(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hS(t,e=!1){const n=Pe(t),s=await n.getIdToken(e),r=nl(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:dr(xa(r.auth_time)),issuedAtTime:dr(xa(r.iat)),expirationTime:dr(xa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xa(t){return Number(t)*1e3}function nl(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kd(s);return i?JSON.parse(i):(xi("Failed to decode base64 JWT payload"),null)}catch(i){return xi("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function fS(t){const e=nl(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&dS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ms(t,lS(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yS(i.providerUserInfo):[],a=mS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vm(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function gS(t){const e=Pe(t);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function yS(t){return t.map(e=>{var{providerId:n}=e,s=Zu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e){const n=await mm(t,{},async()=>{const s=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ym(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await vS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Mr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Zu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hS(this,e)}reload(){return gS(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await uo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ms(this,uS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:P,emailVerified:H,isAnonymous:ne,providerData:ue,stsTokenManager:Se}=n;K(P&&Se,e,"internal-error");const z=Mr.fromJSON(this.name,Se);K(typeof P=="string",e,"internal-error"),un(d,e.name),un(g,e.name),K(typeof H=="boolean",e,"internal-error"),K(typeof ne=="boolean",e,"internal-error"),un(y,e.name),un(E,e.name),un(T,e.name),un(k,e.name),un(O,e.name),un(N,e.name);const le=new Qn({uid:P,auth:e,email:g,emailVerified:H,displayName:d,isAnonymous:ne,photoURL:E,phoneNumber:y,tenantId:T,stsTokenManager:z,createdAt:O,lastLoginAt:N});return ue&&Array.isArray(ue)&&(le.providerData=ue.map(ae=>Object.assign({},ae))),k&&(le._redirectEventId=k),le}static async _fromIdTokenResponse(e,n,s=!1){const r=new Mr;r.updateFromServerResponse(n);const i=new Qn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await uo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const df=wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Mi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Es(Kt(df),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Kt(df);const o=Mi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=Qn._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Es(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Es(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tm(e))return"Blackberry";if(Sm(e))return"Webos";if(sl(e))return"Safari";if((e.includes("chrome/")||Em(e))&&!e.includes("edge/"))return"Chrome";if(Im(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _m(t=tt()){return/firefox\//i.test(t)}function sl(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Em(t=tt()){return/crios\//i.test(t)}function bm(t=tt()){return/iemobile/i.test(t)}function Im(t=tt()){return/android/i.test(t)}function Tm(t=tt()){return/blackberry/i.test(t)}function Sm(t=tt()){return/webos/i.test(t)}function ia(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wS(t=tt()){var e;return ia(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _S(){return O_()&&document.documentMode===10}function Cm(t=tt()){return ia(t)||Im(t)||Sm(t)||Tm(t)||/windows phone/i.test(t)||bm(t)}function ES(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e=[]){let n;switch(t){case"Browser":n=pf(tt());break;case"Worker":n=`${pf(tt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new bS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await uo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Am(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ai(t){return Pe(t)}class gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=K_(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function TS(t,e,n){const s=ai(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=km(e),{host:o,port:a}=SS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||CS()}function km(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SS(t){const e=km(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:mf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:mf(o)}}}function mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function AS(t,e){return Ks(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e){return oi(t,"POST","/v1/accounts:signInWithPassword",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}async function OS(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends rl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Lr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Lr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return kS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RS(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return AS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OS(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e){return oi(t,"POST","/v1/accounts:signInWithIdp",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="http://localhost";class es extends rl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Zu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new es(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,bs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:DS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PS(t){const e=Js(Zs(t)).link,n=e?Js(Zs(e)).deep_link_id:null,s=Js(Zs(t)).deep_link_id;return(s?Js(Zs(s)).link:null)||s||n||e||t}class il{constructor(e){var n,s,r,i,o,a;const c=Js(Zs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,d=NS((r=c.mode)!==null&&r!==void 0?r:null);K(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PS(e);try{return new il(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return Lr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=il.parseLink(n);return K(s,"argument-error"),Lr._fromEmailAndCode(e,s.code,s.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ci{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ci{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ci{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return oi(t,"POST","/v1/accounts:signUp",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Qn._fromIdTokenResponse(e,s,r),o=yf(s);return new ts({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=yf(s);return new ts({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function yf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends nn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new lo(e,n,s,r)}}function Om(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(t,i,e,s):i})}async function MS(t,e,n=!1){const s=await Ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Ms(t,Om(r,i,e,t),n);K(o.idToken,r,"internal-error");const a=nl(o.idToken);K(a,r,"internal-error");const{sub:c}=a;return K(t.uid===c,r,"user-mismatch"),ts._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&At(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dm(t,e,n=!1){const s="signIn",r=await Om(t,s,e),i=await ts._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function US(t,e){return Dm(ai(t),e)}async function VA(t,e,n){const s=ai(t),r=await xS(s,{returnSecureToken:!0,email:e,password:n}),i=await ts._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function BA(t,e,n){return US(Pe(t),zs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t,e){return Ks(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Pe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ms(s,FS(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function VS(t,e,n,s){return Pe(t).onIdTokenChanged(e,n,s)}function BS(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function Nm(t,e,n,s){return Pe(t).onAuthStateChanged(e,n,s)}function $S(t){return Pe(t).signOut()}const ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ho,"1"),this.storage.removeItem(ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){const t=tt();return sl(t)||ia(t)}const qS=1e3,HS=10;class xm extends Pm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jS()&&ES(),this.fallbackToPolling=Cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);_S()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,HS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xm.type="LOCAL";const KS=xm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm extends Pm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mm.type="SESSION";const Lm=Mm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new oa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await zS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ol("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function GS(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function QS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XS(){return Um()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="firebaseLocalStorageDb",JS=1,fo="firebaseLocalStorage",Vm="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([fo],e?"readwrite":"readonly").objectStore(fo)}function ZS(){const t=indexedDB.deleteDatabase(Fm);return new ui(t).toPromise()}function Rc(){const t=indexedDB.open(Fm,JS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fo,{keyPath:Vm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fo)?e(s):(s.close(),await ZS(),e(await Rc()))})})}async function vf(t,e,n){const s=aa(t,!0).put({[Vm]:e,value:n});return new ui(s).toPromise()}async function eC(t,e){const n=aa(t,!1).get(e),s=await new ui(n).toPromise();return s===void 0?null:s.value}function wf(t,e){const n=aa(t,!0).delete(e);return new ui(n).toPromise()}const tC=800,nC=3;class Bm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(XS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QS(),!this.activeServiceWorker)return;this.sender=new WS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rc();return await vf(e,ho,"1"),await wf(e,ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=aa(r,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bm.type="LOCAL";const sC=Bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iC(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Lt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",rC().appendChild(s)})}function oC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t,e){return e?Kt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends rl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cC(t){return Dm(t.auth,new al(t),t.bypassAuthState)}function uC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),LS(n,new al(t),t.bypassAuthState)}async function lC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),MS(n,new al(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cC;case"linkViaPopup":case"linkViaRedirect":return lC;case"reauthViaPopup":case"reauthViaRedirect":return uC;default:At(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new ri(2e3,1e4);class ds extends $m{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hC.get())};e()}}ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="pendingRedirect",Li=new Map;class dC extends $m{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Li.get(this.auth._key());if(!e){try{const s=await pC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Li.set(this.auth._key(),e)}return this.bypassAuthState||Li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pC(t,e){const n=yC(e),s=mC(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function gC(t,e){Li.set(t._key(),e)}function mC(t){return Kt(t._redirectPersistence)}function yC(t){return Mi(fC,t.config.apiKey,t.name)}async function vC(t,e,n=!1){const s=ai(t),r=aC(s,e),o=await new dC(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=10*60*1e3;class _C{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!jm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wC&&this.cachedEventUids.clear(),this.cachedEventUids.has(_f(e))}saveEventToCache(e){this.cachedEventUids.add(_f(e)),this.lastProcessedEventTime=Date.now()}}function _f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e={}){return Ks(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TC=/^https?/;async function SC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bC(t);for(const n of e)try{if(CC(n))return}catch{}At(t,"unauthorized-domain")}function CC(t){const e=kc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!TC.test(n))return!1;if(IC.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new ri(3e4,6e4);function Ef(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kC(t){return new Promise((e,n)=>{var s,r,i;function o(){Ef(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ef(),n(Lt(t,"network-request-failed"))},timeout:AC.get()})}if(!((r=(s=Ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=oC("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},iC(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ui=null,e})}let Ui=null;function RC(t){return Ui=Ui||kC(t),Ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=new ri(5e3,15e3),DC="__/auth/iframe",NC="emulator/auth/iframe",PC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tl(e,NC):`https://${t.config.authDomain}/${DC}`,s={apiKey:e.apiKey,appName:t.name,v:Br},r=xC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Vr(s).slice(1)}`}async function LC(t){const e=await RC(t),n=Ut().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:MC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},OC.get());function c(){Ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FC=500,VC=600,BC="_blank",$C="http://localhost";class bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jC(t,e,n,s=FC,r=VC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},UC),{width:s.toString(),height:r.toString(),top:i,left:o}),u=tt().toLowerCase();n&&(a=Em(u)?BC:n),_m(u)&&(e=e||$C,c.scrollbars="yes");const l=Object.entries(c).reduce((g,[y,E])=>`${g}${y}=${E},`,"");if(wS(u)&&a!=="_self")return qC(e||"",a),new bf(null);const d=window.open(e||"",a,l);K(d,t,"popup-blocked");try{d.focus()}catch{}return new bf(d)}function qC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="__/auth/handler",KC="emulator/auth/handler";function If(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Br,eventId:r};if(e instanceof Rm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",H_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ci){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${zC(t)}?${Vr(a).slice(1)}`}function zC({config:t}){return t.emulator?tl(t,KC):`https://${t.authDomain}/${HC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lm,this._completeRedirectFn=vC,this._overrideRedirectResult=gC}async _openPopup(e,n,s,r){var i;en((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=If(e,n,s,kc(),r);return jC(e,o,ol())}async _openRedirect(e,n,s,r){return await this._originValidation(e),GS(If(e,n,s,kc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(en(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await LC(e),s=new _C(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ma,{type:Ma},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ma];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cm()||sl()||ia()}}const GC=WC;var Tf="@firebase/auth",Sf="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XC(t){As(new Yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Am(t)},l=new IS(a,c,u);return nS(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),As(new Yn("auth-internal",e=>{const n=ai(e.getProvider("auth").getImmediate());return(s=>new QC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Tf,Sf,YC(t)),_n(Tf,Sf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=5*60,ZC=Wd("authIdTokenMaxAge")||JC;let Cf=null;const eA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZC)return;const r=n==null?void 0:n.token;Cf!==r&&(Cf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function po(t=Xd()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tS(t,{popupRedirectResolver:GC,persistence:[sC,KS,Lm]}),s=Wd("authTokenSyncURL");if(s){const i=eA(s);BS(n,i,()=>i(n.currentUser)),VS(n,o=>i(o))}const r=zd("auth");return r&&TS(n,`http://${r}`),n}XC("Browser");const tA="/assets/bmlogo.1503d192.png";const nA={data(){return{isLoggedIn:!1}},methods:{handleSignOut(){let t=po();$S(t).then(()=>{this.$router.push("/")})}},mounted(){let t=po();Nm(t,e=>{e?this.isLoggedIn=!0:this.isLoggedIn=!1})}},sA=t=>(rd("data-v-0300cdad"),t=t(),id(),t),rA={class:"colclass"},iA={class:"colclass"},oA=sA(()=>St("img",{alt:"Vue logo",class:"logo",src:tA,width:"300",height:"100"},null,-1));function aA(t,e,n,s,r,i){const o=lv("RouterView");return ji(),Ga("div",rA,[St("header",null,[St("div",iA,[oA,this.isLoggedIn?(ji(),Ga("button",{key:0,type:"button",class:"btn btn-outline-secondary btn-sm",style:{position:"absolute",top:"0px",right:"0px"},onClick:e[0]||(e[0]=(...a)=>i.handleSignOut&&i.handleSignOut(...a))},"Sign out")):Mv("",!0)])]),it(o)])}const cA=jd(nA,[["render",aA],["__scopeId","data-v-0300cdad"]]),uA="modulepreload",lA=function(t){return"/"+t},Af={},Mn=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lA(i),i in Af)return;Af[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const d=r[l];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":uA,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,d)=>{u.addEventListener("load",l),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};const hA={name:"HomeView",methods:{navigateTo(t){this.$router.push("/"+t)}}},ca=t=>(rd("data-v-68625fc8"),t=t(),id(),t),fA={class:"buttonRow"},dA=ca(()=>St("span",{style:{"font-size":"80px"},class:"material-symbols-outlined"}," edit_square ",-1)),pA=ca(()=>St("div",{style:{"margin-top":"20px"}},"Skapa spel",-1)),gA=[dA,pA],mA=ca(()=>St("span",{style:{"font-size":"90px"},class:"material-symbols-outlined"}," group ",-1)),yA=ca(()=>St("div",{style:{"margin-top":"9px"}},"Joina spel",-1)),vA=[mA,yA];function wA(t,e,n,s,r,i){return ji(),Ga("div",fA,[St("button",{onClick:e[0]||(e[0]=o=>i.navigateTo("creategame")),type:"button",id:"buttonStyle",class:"btn btn-primary btn-lg"},gA),St("button",{onClick:e[1]||(e[1]=o=>i.navigateTo("joingame")),type:"button",id:"buttonStyle2",class:"btn btn-primary btn-lg"},vA)])}const _A=jd(hA,[["render",wA],["__scopeId","data-v-68625fc8"]]),qm=I_({history:Vw("/"),routes:[{path:"/home",name:"home",component:_A,meta:{requiresAuth:!0}},{path:"/game/:gameId",name:"game",props:!0,component:()=>Mn(()=>import("./GameView.39b0664d.js"),["assets/GameView.39b0664d.js","assets/GameView.cf86294b.css"]),meta:{requiresAuth:!0}},{path:"/creategame",name:"creategame",component:()=>Mn(()=>import("./CreateGameView.ce3594a7.js"),["assets/CreateGameView.ce3594a7.js","assets/CreateGameView.d2fe821e.css"]),meta:{requiresAuth:!0}},{path:"/joingame",name:"joingame",component:()=>Mn(()=>import("./JoinGameView.0b4548f2.js"),["assets/JoinGameView.0b4548f2.js","assets/JoinGameView.20ec37b5.css"]),meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>Mn(()=>import("./LoginView.2bce6877.js"),["assets/LoginView.2bce6877.js","assets/LoginView.b7b85b1c.css"])},{path:"/register",name:"register",component:()=>Mn(()=>import("./RegisterView.99bb32c5.js"),["assets/RegisterView.99bb32c5.js","assets/RegisterView.2d0cb82a.css"])},{path:"/gamelounge/:gameId",name:"gamelounge",props:!0,component:()=>Mn(()=>import("./GameLoungeView.2c94e672.js"),["assets/GameLoungeView.2c94e672.js","assets/GameLoungeView.52811163.css"])},{path:"/",name:"",component:()=>Mn(()=>import("./LoginView.2bce6877.js"),["assets/LoginView.2bce6877.js","assets/LoginView.b7b85b1c.css"])}]});qm.beforeEach((t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?po().currentUser?n():(console.log("you dont have access!"),n("/")):n()});function EA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hm={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(self,function(){return(()=>{var n={d:(h,f)=>{for(var m in f)n.o(f,m)&&!n.o(h,m)&&Object.defineProperty(h,m,{enumerable:!0,get:f[m]})},o:(h,f)=>Object.prototype.hasOwnProperty.call(h,f),r:h=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})}},s={};n.r(s),n.d(s,{Confetti:()=>we,default:()=>Z});const r=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h+1,m=arguments.length>2&&arguments[2]!==void 0&&arguments[2],p=parseFloat(h),v=parseFloat(f),I=Math.random()*(v-p)+p;return m?Math.round(I):I};function i(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function o(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}var a=function(){function h(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=p.color,I=v===void 0?"blue":v,b=p.size,w=b===void 0?10:b,_=p.dropRate,S=_===void 0?10:_;i(this,h),this.color=I,this.size=w,this.dropRate=S}var f,m;return f=h,(m=[{key:"setup",value:function(p){var v=p.canvas,I=p.wind,b=p.windPosCoef,w=p.windSpeedMax,_=p.count;return this.canvas=v,this.wind=I,this.windPosCoef=b,this.windSpeedMax=w,this.x=r(-35,this.canvas.width+35),this.y=r(-30,-35),this.d=r(150)+10,this.particleSize=r(this.size,2*this.size),this.tilt=r(10),this.tiltAngleIncremental=(r(0,.08)+.04)*(r()<.5?-1:1),this.tiltAngle=0,this.angle=r(2*Math.PI),this.count=_+1,this.remove=!1,this}},{key:"update",value:function(){this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+parseInt(this.dropRate,10))/2,this.x+=(Math.sin(this.angle)+Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef))*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3)}},{key:"pastBottom",value:function(){return this.y>this.canvas.height}},{key:"draw",value:function(){this.canvas.ctx.fillStyle=this.color,this.canvas.ctx.beginPath(),this.canvas.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y)}},{key:"kill",value:function(){this.remove=!0}}])&&o(f.prototype,m),h}();function c(h){return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},c(h)}function u(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function l(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}function d(h,f,m){return d=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(p,v,I){var b=function(_,S){for(;!Object.prototype.hasOwnProperty.call(_,S)&&(_=E(_))!==null;);return _}(p,v);if(b){var w=Object.getOwnPropertyDescriptor(b,v);return w.get?w.get.call(I):w.value}},d(h,f,m||h)}function g(h,f){return g=Object.setPrototypeOf||function(m,p){return m.__proto__=p,m},g(h,f)}function y(h,f){return!f||c(f)!=="object"&&typeof f!="function"?function(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}(h):f}function E(h){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(f){return f.__proto__||Object.getPrototypeOf(f)},E(h)}var T=function(h){(function(w,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(_&&_.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),_&&g(w,_)})(b,h);var f,m,p,v,I=(p=b,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var w,_=E(p);if(v){var S=E(this).constructor;w=Reflect.construct(_,arguments,S)}else w=_.apply(this,arguments);return y(this,w)});function b(){return u(this,b),I.apply(this,arguments)}return f=b,(m=[{key:"draw",value:function(){d(E(b.prototype),"draw",this).call(this),this.canvas.ctx.arc(0,0,this.particleSize/2,0,2*Math.PI,!1),this.canvas.ctx.fill()}}])&&l(f.prototype,m),b}(a);function k(h){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},k(h)}function O(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function N(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}function P(h,f,m){return P=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(p,v,I){var b=function(_,S){for(;!Object.prototype.hasOwnProperty.call(_,S)&&(_=ue(_))!==null;);return _}(p,v);if(b){var w=Object.getOwnPropertyDescriptor(b,v);return w.get?w.get.call(I):w.value}},P(h,f,m||h)}function H(h,f){return H=Object.setPrototypeOf||function(m,p){return m.__proto__=p,m},H(h,f)}function ne(h,f){return!f||k(f)!=="object"&&typeof f!="function"?function(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}(h):f}function ue(h){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(f){return f.__proto__||Object.getPrototypeOf(f)},ue(h)}var Se=function(h){(function(w,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(_&&_.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),_&&H(w,_)})(b,h);var f,m,p,v,I=(p=b,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var w,_=ue(p);if(v){var S=ue(this).constructor;w=Reflect.construct(_,arguments,S)}else w=_.apply(this,arguments);return ne(this,w)});function b(){return O(this,b),I.apply(this,arguments)}return f=b,(m=[{key:"draw",value:function(){P(ue(b.prototype),"draw",this).call(this),this.canvas.ctx.fillRect(0,0,this.particleSize,this.particleSize/2)}}])&&N(f.prototype,m),b}(a);function z(h){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},z(h)}function le(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function ae(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}function ke(h,f,m){return ke=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(p,v,I){var b=function(_,S){for(;!Object.prototype.hasOwnProperty.call(_,S)&&(_=Ce(_))!==null;);return _}(p,v);if(b){var w=Object.getOwnPropertyDescriptor(b,v);return w.get?w.get.call(I):w.value}},ke(h,f,m||h)}function M(h,f){return M=Object.setPrototypeOf||function(m,p){return m.__proto__=p,m},M(h,f)}function ye(h,f){return!f||z(f)!=="object"&&typeof f!="function"?function(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}(h):f}function Ce(h){return Ce=Object.setPrototypeOf?Object.getPrototypeOf:function(f){return f.__proto__||Object.getPrototypeOf(f)},Ce(h)}var kt=function(h){(function(w,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(_&&_.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),_&&M(w,_)})(b,h);var f,m,p,v,I=(p=b,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var w,_=Ce(p);if(v){var S=Ce(this).constructor;w=Reflect.construct(_,arguments,S)}else w=_.apply(this,arguments);return ye(this,w)});function b(){return le(this,b),I.apply(this,arguments)}return f=b,(m=[{key:"draw",value:function(){var w=this;ke(Ce(b.prototype),"draw",this).call(this);var _=function(S,V,L,j,W,ee){w.canvas.ctx.bezierCurveTo(S*(w.particleSize/200),V*(w.particleSize/200),L*(w.particleSize/200),j*(w.particleSize/200),W*(w.particleSize/200),ee*(w.particleSize/200))};this.canvas.ctx.moveTo(37.5/this.particleSize,20/this.particleSize),_(75,37,70,25,50,25),_(20,25,20,62.5,20,62.5),_(20,80,40,102,75,120),_(110,102,130,80,130,62.5),_(130,62.5,130,25,100,25),_(85,25,75,37,75,40),this.canvas.ctx.fill()}}])&&ae(f.prototype,m),b}(a);function ve(h){return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},ve(h)}function ge(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}function ce(h,f,m){return ce=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(p,v,I){var b=function(_,S){for(;!Object.prototype.hasOwnProperty.call(_,S)&&(_=Fe(_))!==null;);return _}(p,v);if(b){var w=Object.getOwnPropertyDescriptor(b,v);return w.get?w.get.call(I):w.value}},ce(h,f,m||h)}function st(h,f){return st=Object.setPrototypeOf||function(m,p){return m.__proto__=p,m},st(h,f)}function Bt(h,f){return!f||ve(f)!=="object"&&typeof f!="function"?function(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}(h):f}function Fe(h){return Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(f){return f.__proto__||Object.getPrototypeOf(f)},Fe(h)}var We=function(h){(function(w,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(_&&_.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),_&&st(w,_)})(b,h);var f,m,p,v,I=(p=b,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var w,_=Fe(p);if(v){var S=Fe(this).constructor;w=Reflect.construct(_,arguments,S)}else w=_.apply(this,arguments);return Bt(this,w)});function b(w,_){var S;return function(V,L){if(!(V instanceof L))throw new TypeError("Cannot call a class as a function")}(this,b),(S=I.call(this,w)).imgEl=_,S}return f=b,(m=[{key:"draw",value:function(){ce(Fe(b.prototype),"draw",this).call(this),this.canvas.ctx.drawImage(this.imgEl,0,0,this.particleSize,this.particleSize)}}])&&ge(f.prototype,m),b}(a);function sn(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}var is=function(){function h(){(function(p,v){if(!(p instanceof v))throw new TypeError("Cannot call a class as a function")})(this,h),this.cachedImages={}}var f,m;return f=h,m=[{key:"createImageElement",value:function(p){var v=document.createElement("img");return v.setAttribute("src",p),v}},{key:"getImageElement",value:function(p){return this.cachedImages[p]||(this.cachedImages[p]=this.createImageElement(p)),this.cachedImages[p]}},{key:"getRandomParticle",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=p.particles||[];return v.length<1?{}:v[Math.floor(Math.random()*v.length)]}},{key:"getDefaults",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{type:p.defaultType||"circle",size:p.defaultSize||10,dropRate:p.defaultDropRate||10,colors:p.defaultColors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],url:null}}},{key:"create",value:function(p){var v=this.getDefaults(p),I=this.getRandomParticle(p),b=Object.assign(v,I),w=r(0,b.colors.length-1,!0);if(b.color=b.colors[w],b.type==="circle")return new T(b);if(b.type==="rect")return new Se(b);if(b.type==="heart")return new kt(b);if(b.type==="image")return new We(b,this.getImageElement(b.url));throw Error('Unknown particle type: "'.concat(b.type,'"'))}}],m&&sn(f.prototype,m),h}();function C(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}var x=function(){function h(p){(function(v,I){if(!(v instanceof I))throw new TypeError("Cannot call a class as a function")})(this,h),this.items=[],this.pool=[],this.particleOptions=p,this.particleFactory=new is}var f,m;return f=h,(m=[{key:"update",value:function(){var p,v=this,I=[],b=[];this.items.forEach(function(w){w.update(),w.pastBottom()?w.remove||(w.setup(v.particleOptions),I.push(w)):b.push(w)}),(p=this.pool).push.apply(p,I),this.items=b}},{key:"draw",value:function(){this.items.forEach(function(p){return p.draw()})}},{key:"add",value:function(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.particleOptions)):this.items.push(this.particleFactory.create(this.particleOptions).setup(this.particleOptions))}},{key:"refresh",value:function(){this.items.forEach(function(p){p.kill()}),this.pool=[]}}])&&C(f.prototype,m),h}();function D(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}var B=function(){function h(v){(function(b,w){if(!(b instanceof w))throw new TypeError("Cannot call a class as a function")})(this,h);var I="confetti-canvas";if(v&&!(v instanceof HTMLCanvasElement))throw new Error("Element is not a valid HTMLCanvasElement");this.isDefault=!v,this.canvas=v||document.getElementById(I)||h.createDefaultCanvas(I),this.ctx=this.canvas.getContext("2d")}var f,m,p;return f=h,p=[{key:"createDefaultCanvas",value:function(v){var I=document.createElement("canvas");return I.style.display="block",I.style.position="fixed",I.style.pointerEvents="none",I.style.top=0,I.style.width="100vw",I.style.height="100vh",I.id=v,document.querySelector("body").appendChild(I),I}}],(m=[{key:"width",get:function(){return this.canvas.width}},{key:"height",get:function(){return this.canvas.height}},{key:"clear",value:function(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.width,this.height)}},{key:"updateDimensions",value:function(){this.isDefault&&(this.width===window.innerWidth&&this.height===window.innerHeight||(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight))}}])&&D(f.prototype,m),p&&D(f,p),h}();function re(h,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}var we=function(){function h(){(function(p,v){if(!(p instanceof v))throw new TypeError("Cannot call a class as a function")})(this,h),this.setDefaults()}var f,m;return f=h,m=[{key:"setDefaults",value:function(){this.killed=!1,this.framesSinceDrop=0,this.canvas=null,this.canvasEl=null,this.W=0,this.H=0,this.particleManager=null,this.particlesPerFrame=0,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.animationId=null}},{key:"getParticleOptions",value:function(p){var v={canvas:this.canvas,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0};return Object.assign(v,p),v}},{key:"createParticles",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=this.getParticleOptions(p);this.particleManager=new x(v)}},{key:"getCanvasElementFromOptions",value:function(p){var v=p.canvasId,I=p.canvasElement,b=I;if(I&&!(I instanceof HTMLCanvasElement))throw new Error("Invalid options: canvasElement is not a valid HTMLCanvasElement");if(v&&I)throw new Error("Invalid options: canvasId and canvasElement are mutually exclusive");if(v&&!b&&(b=document.getElementById(v)),v&&!(b instanceof HTMLCanvasElement))throw new Error('Invalid options: element with id "'.concat(v,'" is not a valid HTMLCanvasElement'));return b}},{key:"start",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.remove();var v=this.getCanvasElementFromOptions(p);this.canvas=new B(v),this.canvasEl=v,this.createParticles(p),this.setGlobalOptions(p),this.animationId=requestAnimationFrame(this.mainLoop.bind(this))}},{key:"setGlobalOptions",value:function(p){this.particlesPerFrame=p.particlesPerFrame||2,this.windSpeedMax=p.windSpeedMax||1}},{key:"stop",value:function(){this.killed=!0,this.particlesPerFrame=0}},{key:"update",value:function(p){var v=this.getCanvasElementFromOptions(p);this.canvas&&v!==this.canvasEl?this.start(p):(this.setGlobalOptions(p),this.particleManager&&(this.particleManager.particleOptions=this.getParticleOptions(p),this.particleManager.refresh()))}},{key:"remove",value:function(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&this.canvas.clear(),this.setDefaults()}},{key:"mainLoop",value:function(p){this.canvas.updateDimensions(),this.canvas.clear(),this.windSpeed=Math.sin(p/8e3)*this.windSpeedMax,this.wind=this.particleManager.particleOptions.wind+=this.windChange;for(var v=this.framesSinceDrop*this.particlesPerFrame;v>=1;)this.particleManager.add(),v-=1,this.framesSinceDrop=0;this.particleManager.update(),this.particleManager.draw(),this.killed&&!this.particleManager.items.length||(this.animationId=requestAnimationFrame(this.mainLoop.bind(this))),this.framesSinceDrop+=1}}],m&&re(f.prototype,m),h}();const Z={install:function(h,f){if(!this.installed){this.installed=!0;try{h.config.globalProperties.$confetti=new we(f)}catch{h.prototype.$confetti=new we(f)}}}};return s})()})})(Hm);const bA=EA(Hm.exports);let IA=po();Nm(IA,t=>{const e=_w(cA);e.use(qm),e.use(bA),e.mount("#app")});export{DA as $,xA as A,CA as B,Lv as C,Nt as F,UA as I,OA as M,Rd as T,jd as _,Mv as a,St as b,Ga as c,id as d,AA as e,FA as f,MA as g,NA as h,po as i,it as j,Dv as k,xv as l,PA as m,RA as n,ji as o,rd as p,LA as q,lv as r,kT as s,TA as t,SA as u,kA as v,Hy as w,BA as x,VA as y,$A as z};
