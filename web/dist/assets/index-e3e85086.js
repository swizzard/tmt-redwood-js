import{r as G,c as Re,b as Se,f as Fe,k as Le}from"./index-65dccdee.js";var me={},N={},pe;function S(){if(pe)return N;pe=1;let I={data:""},$=s=>typeof window=="object"?((s?s.querySelector("#_goober"):window._goober)||Object.assign((s||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:s||I,T=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,F=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,O=(s,o)=>{let p="",g="",f="";for(let u in s){let d=s[u];u[0]=="@"?u[1]=="i"?p=u+" "+d+";":g+=u[1]=="f"?O(d,u):u+"{"+O(d,u[1]=="k"?"":o)+"}":typeof d=="object"?g+=O(d,o?o.replace(/([^,])+/g,n=>u.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,n):n?n+" "+c:c)):u):d!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),f+=O.p?O.p(u,d):u+":"+d+";")}return p+(o&&f?o+"{"+f+"}":f)+g},w={},_=s=>{if(typeof s=="object"){let o="";for(let p in s)o+=p+_(s[p]);return o}return s},v=(s,o,p,g,f)=>{let u=_(s),d=w[u]||(w[u]=(c=>{let m=0,b=11;for(;m<c.length;)b=101*b+c.charCodeAt(m++)>>>0;return"go"+b})(u));if(!w[d]){let c=u!==s?s:(m=>{let b,D,k=[{}];for(;b=T.exec(m.replace(F,""));)b[4]?k.shift():b[3]?(D=b[3].replace(A," ").trim(),k.unshift(k[0][D]=k[0][D]||{})):k[0][b[1]]=b[2].replace(A," ").trim();return k[0]})(s);w[d]=O(f?{["@keyframes "+d]:c}:c,p?"":"."+d)}let n=p&&w.g?w.g:null;return p&&(w.g=w[d]),((c,m,b,D)=>{D?m.data=m.data.replace(D,c):m.data.indexOf(c)===-1&&(m.data=b?c+m.data:m.data+c)})(w[d],o,g,n),d},Q=(s,o,p)=>s.reduce((g,f,u)=>{let d=o[u];if(d&&d.call){let n=d(p),c=n&&n.props&&n.props.className||/^go/.test(n)&&n;d=c?"."+c:n&&typeof n=="object"?n.props?"":O(n,""):n===!1?"":n}return g+f+(d??"")},"");function z(s){let o=this||{},p=s.call?s(o.p):s;return v(p.unshift?p.raw?Q(p,[].slice.call(arguments,1),o.p):p.reduce((g,f)=>Object.assign(g,f&&f.call?f(o.p):f),{}):p,$(o.target),o.g,o.o,o.k)}let U,C,L,V=z.bind({g:1}),W=z.bind({k:1});return N.css=z,N.extractCss=s=>{let o=$(s),p=o.data;return o.data="",p},N.glob=V,N.keyframes=W,N.setup=function(s,o,p,g){O.p=o,U=s,C=p,L=g},N.styled=function(s,o){let p=this||{};return function(){let g=arguments;function f(u,d){let n=Object.assign({},u),c=n.className||f.className;p.p=Object.assign({theme:C&&C()},n),p.o=/ *go\d+/.test(c),n.className=z.apply(p,g)+(c?" "+c:""),o&&(n.ref=d);let m=s;return s[0]&&(m=n.as||s,delete n.as),L&&m[0]&&L(n),U(m,n)}return o?o(f):f}},N}var ae,fe;function Ge(){if(fe)return ae;fe=1;var I=Object.create,$=Object.defineProperty,T=Object.getOwnPropertyDescriptor,F=Object.getOwnPropertyNames,A=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,w=(e,t)=>{for(var r in t)$(e,r,{get:t[r],enumerable:!0})},_=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of F(t))!O.call(e,a)&&a!==r&&$(e,a,{get:()=>t[a],enumerable:!(i=T(t,a))||i.enumerable});return e},v=(e,t,r)=>(r=e!=null?I(A(e)):{},_(t||!e||!e.__esModule?$(r,"default",{value:e,enumerable:!0}):r,e)),Q=e=>_($({},"__esModule",{value:!0}),e),z={};w(z,{CheckmarkIcon:()=>le,ErrorIcon:()=>se,LoaderIcon:()=>ne,ToastBar:()=>ce,ToastIcon:()=>de,Toaster:()=>qe,default:()=>He,resolveValue:()=>C,toast:()=>x,useToaster:()=>oe,useToasterStore:()=>b}),ae=Q(z);var U=e=>typeof e=="function",C=(e,t)=>U(e)?e(t):e,L=(()=>{let e=0;return()=>(++e).toString()})(),V=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),W=G,s=20,o=new Map,p=1e3,g=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),c({type:4,toastId:e})},p);o.set(e,t)},f=e=>{let t=o.get(e);t&&clearTimeout(t)},u=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return t.toast.id&&f(t.toast.id),{...e,toasts:e.toasts.map(l=>l.id===t.toast.id?{...l,...t.toast}:l)};case 2:let{toast:r}=t;return e.toasts.find(l=>l.id===r.id)?u(e,{type:1,toast:r}):u(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?g(i):e.toasts.forEach(l=>{g(l.id)}),{...e,toasts:e.toasts.map(l=>l.id===i||i===void 0?{...l,visible:!1}:l)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(l=>l.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(l=>({...l,pauseDuration:l.pauseDuration+a}))}}},d=[],n={toasts:[],pausedAt:void 0},c=e=>{n=u(n,e),d.forEach(t=>{t(n)})},m={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},b=(e={})=>{let[t,r]=(0,W.useState)(n);(0,W.useEffect)(()=>(d.push(r),()=>{let a=d.indexOf(r);a>-1&&d.splice(a,1)}),[t]);let i=t.toasts.map(a=>{var l,h;return{...e,...e[a.type],...a,duration:a.duration||((l=e[a.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||m[a.type],style:{...e.style,...(h=e[a.type])==null?void 0:h.style,...a.style}}});return{...t,toasts:i}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||L()}),k=e=>(t,r)=>{let i=D(t,e,r);return c({type:2,toast:i}),i.id},x=(e,t)=>k("blank")(e,t);x.error=k("error"),x.success=k("success"),x.loading=k("loading"),x.custom=k("custom"),x.dismiss=e=>{c({type:3,toastId:e})},x.remove=e=>c({type:4,toastId:e}),x.promise=(e,t,r)=>{let i=x.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(a=>(x.success(C(t.success,a),{id:i,...r,...r==null?void 0:r.success}),a)).catch(a=>{x.error(C(t.error,a),{id:i,...r,...r==null?void 0:r.error})}),e};var X=G,ye=(e,t)=>{c({type:1,toast:{id:e,height:t}})},ge=()=>{c({type:5,time:Date.now()})},oe=e=>{let{toasts:t,pausedAt:r}=b(e);(0,X.useEffect)(()=>{if(r)return;let l=Date.now(),h=t.map(y=>{if(y.duration===1/0)return;let j=(y.duration||0)+y.pauseDuration-(l-y.createdAt);if(j<0){y.visible&&x.dismiss(y.id);return}return setTimeout(()=>x.dismiss(y.id),j)});return()=>{h.forEach(y=>y&&clearTimeout(y))}},[t,r]);let i=(0,X.useCallback)(()=>{r&&c({type:6,time:Date.now()})},[r]),a=(0,X.useCallback)((l,h)=>{let{reverseOrder:y=!1,gutter:j=8,defaultPosition:E}=h||{},R=t.filter(P=>(P.position||E)===(l.position||E)&&P.height),te=R.findIndex(P=>P.id===l.id),K=R.filter((P,re)=>re<te&&P.visible).length;return R.filter(P=>P.visible).slice(...y?[K+1]:[0,K]).reduce((P,re)=>P+(re.height||0)+j,0)},[t]);return{toasts:t,handlers:{updateHeight:ye,startPause:ge,endPause:i,calculateOffset:a}}},M=v(G),B=S(),q=v(G),Y=S(),Z=S(),be=Z.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,he=Z.keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ve=Z.keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,se=(0,Z.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${he} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ve} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ie=S(),xe=ie.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ne=(0,ie.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${xe} 1s linear infinite;
`,ee=S(),we=ee.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ee=ee.keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,le=(0,ee.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${we} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ee} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Oe=(0,Y.styled)("div")`
  position: absolute;
`,ke=(0,Y.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,je=Y.keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$e=(0,Y.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${je} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,de=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?q.createElement($e,null,t):t:r==="blank"?null:q.createElement(ke,null,q.createElement(ne,{...i}),r!=="loading"&&q.createElement(Oe,null,r==="error"?q.createElement(se,{...i}):q.createElement(le,{...i})))},_e=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Pe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ie="0%{opacity:0;} 100%{opacity:1;}",Ce="0%{opacity:1;} 100%{opacity:0;}",De=(0,B.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ne=(0,B.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Te=(e,t)=>{let r=e.includes("top")?1:-1,[i,a]=V()?[Ie,Ce]:[_e(r),Pe(r)];return{animation:t?`${(0,B.keyframes)(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,B.keyframes)(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ce=M.memo(({toast:e,position:t,style:r,children:i})=>{let a=e.height?Te(e.position||t||"top-center",e.visible):{opacity:0},l=M.createElement(de,{toast:e}),h=M.createElement(Ne,{...e.ariaProps},C(e.message,e));return M.createElement(De,{className:e.className,style:{...a,...r,...e.style}},typeof i=="function"?i({icon:l,message:h}):M.createElement(M.Fragment,null,l,h))}),ue=S(),H=v(G);(0,ue.setup)(H.createElement);var ze=({id:e,className:t,style:r,onHeightUpdate:i,children:a})=>{let l=H.useCallback(h=>{if(h){let y=()=>{let j=h.getBoundingClientRect().height;i(e,j)};y(),new MutationObserver(y).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return H.createElement("div",{ref:l,className:t,style:r},a)},Ae=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:V()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...a}},Me=ue.css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,J=16,qe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:a,containerStyle:l,containerClassName:h})=>{let{toasts:y,handlers:j}=oe(r);return H.createElement("div",{style:{position:"fixed",zIndex:9999,top:J,left:J,right:J,bottom:J,pointerEvents:"none",...l},className:h,onMouseEnter:j.startPause,onMouseLeave:j.endPause},y.map(E=>{let R=E.position||t,te=j.calculateOffset(E,{reverseOrder:e,gutter:i,defaultPosition:t}),K=Ae(R,te);return H.createElement(ze,{id:E.id,key:E.id,onHeightUpdate:j.updateHeight,className:E.visible?Me:"",style:K},E.type==="custom"?C(E.message,E):a?a(E):H.createElement(ce,{toast:E,position:R}))}))},He=x;return ae}(function(I){var $,T=Se,F=Fe,A=Le,O=Re.default;T(I,"__esModule",{value:!0});var w={toast:!0};T(I,"toast",{enumerable:!0,get:function(){return _.default}});var _=O(Ge());F($=A(_)).call($,function(v){v==="default"||v==="__esModule"||Object.prototype.hasOwnProperty.call(w,v)||v in I&&I[v]===_[v]||T(I,v,{enumerable:!0,get:function(){return _[v]}})})})(me);var Ve=me;export{Ve as t};
