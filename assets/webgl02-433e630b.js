import{l as He,C as D,m as F,U as k,n as _,D as Fe,o as Oe,p as Ne,q as Ge,r as C,V as y,s as $e,R as Te,E as ne,N as Me,t as L,u as x,v as N,L as ve,P as oe,w as he,S as re,M as Z,x as j,y as X,z as Y,F as Ve,G as We,H as ge,I as Ce,J as Be,K as Xe,Q as Ye,T as Ke,X as Ze,Y as je,Z as Je,_ as K,$ as De,a0 as Re,a1 as ue,a2 as me,W as Qe,a as qe,c as et,b as tt,a3 as B,a4 as xe,a5 as Se,i as q,a6 as it,k as st,A as nt,O as rt}from"./solid-cbac68a1.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class M{constructor(t,i,s,n,r="div"){this.parent=t,this.object=i,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),M.nextNameID=M.nextNameID||0,this.$name.id=`lil-gui-name-${++M.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class at extends M{constructor(t,i,s){super(t,i,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ae(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const lt={isPrimitive:!0,match:e=>typeof e=="string",fromHexString:ae,toHexString:ae},W={isPrimitive:!0,match:e=>typeof e=="number",fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},ot={isPrimitive:!1,match:e=>Array.isArray(e),fromHexString(e,t,i=1){const s=W.fromHexString(e);t[0]=(s>>16&255)/255*i,t[1]=(s>>8&255)/255*i,t[2]=(s&255)/255*i},toHexString([e,t,i],s=1){s=255/s;const n=e*s<<16^t*s<<8^i*s<<0;return W.toHexString(n)}},ht={isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){const s=W.fromHexString(e);t.r=(s>>16&255)/255*i,t.g=(s>>8&255)/255*i,t.b=(s&255)/255*i},toHexString({r:e,g:t,b:i},s=1){s=255/s;const n=e*s<<16^t*s<<8^i*s<<0;return W.toHexString(n)}},ut=[lt,W,ot,ht];function ct(e){return ut.find(t=>t.match(e))}class dt extends M{constructor(t,i,s,n){super(t,i,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ct(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ae(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ee extends M{constructor(t,i,s){super(t,i,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class pt extends M{constructor(t,i,s,n,r,a){super(t,i,s,"number"),this._initInput(),this.min(n),this.max(r);const l=a!==void 0;this.step(l?a:this._getImplicitStep(),l),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let o=parseFloat(this.$input.value);isNaN(o)||(this._stepExplicit&&(o=this._snap(o)),this.setValue(this._clamp(o)))},i=o=>{const m=parseFloat(this.$input.value);isNaN(m)||(this._snapClampSetValue(m+o),this.$input.value=this.getValue())},s=o=>{o.code==="Enter"&&this.$input.blur(),o.code==="ArrowUp"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o))),o.code==="ArrowDown"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o)*-1))},n=o=>{this._inputFocused&&(o.preventDefault(),i(this._step*this._normalizeMouseWheel(o)))};let r=!1,a,l,u,h,v;const f=5,c=o=>{a=o.clientX,l=u=o.clientY,r=!0,h=this.getValue(),v=0,window.addEventListener("mousemove",d),window.addEventListener("mouseup",b)},d=o=>{if(r){const m=o.clientX-a,S=o.clientY-l;Math.abs(S)>f?(o.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(m)>f&&b()}if(!r){const m=o.clientY-u;v-=m*this._step*this._arrowKeyMultiplier(o),h+v>this._max?v=this._max-h:h+v<this._min&&(v=this._min-h),this._snapClampSetValue(h+v)}u=o.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",b)},E=()=>{this._inputFocused=!0},H=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",c),this.$input.addEventListener("focus",E),this.$input.addEventListener("blur",H)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(o,m,S,G,Le)=>(o-m)/(S-m)*(Le-G)+G,i=o=>{const m=this.$slider.getBoundingClientRect();let S=t(o,m.left,m.right,this._min,this._max);this._snapClampSetValue(S)},s=o=>{this._setDraggingStyle(!0),i(o.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=o=>{i(o.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let a=!1,l,u;const h=o=>{o.preventDefault(),this._setDraggingStyle(!0),i(o.touches[0].clientX),a=!1},v=o=>{o.touches.length>1||(this._hasScrollBar?(l=o.touches[0].clientX,u=o.touches[0].clientY,a=!0):h(o),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",c))},f=o=>{if(a){const m=o.touches[0].clientX-l,S=o.touches[0].clientY-u;Math.abs(m)>Math.abs(S)?h(o):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",c))}else o.preventDefault(),i(o.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",c)},d=this._callOnFinishChange.bind(this),b=400;let E;const H=o=>{if(Math.abs(o.deltaX)<Math.abs(o.deltaY)&&this._hasScrollBar)return;o.preventDefault();const S=this._normalizeMouseWheel(o)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(d,b)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",v,{passive:!1}),this.$slider.addEventListener("wheel",H,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:s}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,s=-t.wheelDelta/120,s*=this._stepExplicit?1:10),i+-s}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ft extends M{constructor(t,i,s,n){super(t,i,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?t:this._names[i],this}}class vt extends M{constructor(t,i,s){super(t,i,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const gt=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function mt(e){const t=document.createElement("style");t.innerHTML=e;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let Ee=!1;class ce{constructor({parent:t,autoPlace:i=t===void 0,container:s,width:n,title:r="Controls",closeFolders:a=!1,injectStyles:l=!0,touchStyles:u=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),u&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Ee&&l&&(mt(gt),Ee=!0),s?s.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=a,this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(t,i,s,n,r){if(Object(s)===s)return new ft(this,t,i,s);const a=t[i];switch(typeof a){case"number":return new pt(this,t,i,s,n,r);case"boolean":return new at(this,t,i);case"string":return new vt(this,t,i);case"function":return new ee(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,a)}addColor(t,i,s=1){return new dt(this,t,i,s)}addFolder(t){const i=new ce({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(s=>{s instanceof ee||s._name in t.controllers&&s.load(t.controllers[s._name])}),i&&t.folders&&this.folders.forEach(s=>{s._title in t.folders&&s.load(t.folders[s._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof ee)){if(s._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);i.controllers[s._name]=s.save()}}),t&&this.folders.forEach(s=>{if(s._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);i.folders[s._title]=s.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const s=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const xt=ce;/**
 * postprocessing v6.31.0 build Sun May 07 2023
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2023 Raoul van Rüschen
 * @license Zlib
 */var de="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Pe="",w="srgb",Q="srgb-linear",St=Number(he.replace(/\D+/g,"")),Ue=St>=152,Et=new Map([[Ce,Q],[Be,w]]),wt=new Map([[Q,Ce],[w,Be]]);function O(e){return e===null?null:Ue?e.outputColorSpace:Et.get(e.outputEncoding)}function R(e,t){e!==null&&(Ue?e.colorSpace=t:e.encoding=wt.get(t))}var p={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},$={DEFAULT:0,KEEP_MAX_DEPTH:1,DISCARD_MAX_DEPTH:2},z={NONE:0,DEPTH:1,CONVOLUTION:2},g={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},pe={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},bt=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <encodings_fragment>
}`,yt="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",_t=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],At=class extends L{constructor(e=new me){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new x(null),texelSize:new x(new me),scale:new x(1),kernel:new x(0)},blending:N,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:bt,vertexShader:yt}),this.setTexelSize(e.x,e.y),this.kernelSize=pe.MEDIUM}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return _t[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,e*.5,t*.5)}setSize(e,t){const i=1/e,s=1/t;this.uniforms.texelSize.value.set(i,s,i*.5,s*.5)}},Tt=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <encodings_fragment>
#include <dithering_fragment>
}`,ze=class extends L{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new x(null),opacity:new x(1)},blending:N,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Tt,vertexShader:de})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},Mt=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,Ct=class extends L{constructor(){super({name:"DepthMaskMaterial",defines:{DEPTH_EPSILON:"0.0001",DEPTH_PACKING_0:"0",DEPTH_PACKING_1:"0",DEPTH_TEST_STRATEGY:$.KEEP_MAX_DEPTH},uniforms:{inputBuffer:new x(null),depthBuffer0:new x(null),depthBuffer1:new x(null),cameraNearFar:new x(new _(1,1))},blending:N,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Mt,vertexShader:de}),this.depthMode=ve}set depthBuffer0(e){this.uniforms.depthBuffer0.value=e}set depthPacking0(e){this.defines.DEPTH_PACKING_0=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer0(e,t=F){this.depthBuffer0=e,this.depthPacking0=t}set depthBuffer1(e){this.uniforms.depthBuffer1.value=e}set depthPacking1(e){this.defines.DEPTH_PACKING_1=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer1(e,t=F){this.depthBuffer1=e,this.depthPacking1=t}get maxDepthStrategy(){return Number(this.defines.DEPTH_TEST_STRATEGY)}set maxDepthStrategy(e){this.defines.DEPTH_TEST_STRATEGY=e.toFixed(0),this.needsUpdate=!0}get keepFar(){return this.maxDepthStrategy}set keepFar(e){this.maxDepthStrategy=e?$.KEEP_MAX_DEPTH:$.DISCARD_MAX_DEPTH}getMaxDepthStrategy(){return this.maxDepthStrategy}setMaxDepthStrategy(e){this.maxDepthStrategy=e}get epsilon(){return Number(this.defines.DEPTH_EPSILON)}set epsilon(e){this.defines.DEPTH_EPSILON=e.toFixed(16),this.needsUpdate=!0}getEpsilon(){return this.epsilon}setEpsilon(e){this.epsilon=e}get depthMode(){return Number(this.defines.DEPTH_MODE)}set depthMode(e){let t;switch(e){case je:t="false";break;case Ze:t="true";break;case ne:t="abs(d1 - d0) <= DEPTH_EPSILON";break;case Me:t="abs(d1 - d0) > DEPTH_EPSILON";break;case ve:t="d0 > d1";break;case Ke:t="d0 >= d1";break;case Ye:t="d0 <= d1";break;case Xe:default:t="d0 < d1";break}this.defines.DEPTH_MODE=e.toFixed(0),this.defines["depthTest(d0, d1)"]=t,this.needsUpdate=!0}getDepthMode(){return this.depthMode}setDepthMode(e){this.depthMode=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNearFar.value.set(e.near,e.far),e instanceof oe?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},Bt=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <encodings_fragment>
}`,Dt="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Rt=class extends L{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new x(null),texelSize:new x(new _)},blending:N,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Bt,vertexShader:Dt})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},Pt=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <encodings_fragment>
#endif
#include <dithering_fragment>
}`,Ut="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",zt=class extends L{constructor(e,t,i,s,n=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:he.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new x(null),depthBuffer:new x(null),resolution:new x(new _),texelSize:new x(new _),cameraNear:new x(.3),cameraFar:new x(1e3),aspect:new x(1),time:new x(0)},blending:N,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:n}),e&&this.setShaderParts(e),t&&this.setDefines(t),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=F){this.depthBuffer=e,this.depthPacking=t}setShaderData(e){this.setShaderParts(e.shaderParts),this.setDefines(e.defines),this.setUniforms(e.uniforms),this.setExtensions(e.extensions)}setShaderParts(e){return this.fragmentShader=Pt.replace(g.FRAGMENT_HEAD,e.get(g.FRAGMENT_HEAD)||"").replace(g.FRAGMENT_MAIN_UV,e.get(g.FRAGMENT_MAIN_UV)||"").replace(g.FRAGMENT_MAIN_IMAGE,e.get(g.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Ut.replace(g.VERTEX_HEAD,e.get(g.VERTEX_HEAD)||"").replace(g.VERTEX_MAIN_SUPPORT,e.get(g.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(e){for(const t of e.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(e){for(const t of e.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(e){this.extensions={};for(const t of e)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(e){this.encodeOutput!==e&&(e?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(e){return this.encodeOutput}setOutputEncodingEnabled(e){this.encodeOutput=e}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}setDeltaTime(e){this.uniforms.time.value+=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,e instanceof oe?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){const i=this.uniforms;i.resolution.value.set(e,t),i.texelSize.value.set(1/e,1/t),i.aspect.value=e/t}static get Section(){return g}},It=`#include <common>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,kt=class extends L{constructor(e=!1,t=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:he.replace(/\D+/g,"")},uniforms:{inputBuffer:new x(null),threshold:new x(0),smoothing:new x(1),range:new x(null)},blending:N,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:It,vertexShader:de}),this.colorOutput=e,this.luminanceRange=t}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get threshold(){return this.uniforms.threshold.value}set threshold(e){this.smoothing>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=e}getThreshold(){return this.threshold}setThreshold(e){this.threshold=e}get smoothing(){return this.uniforms.smoothing.value}set smoothing(e){this.threshold>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=e}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(e){this.smoothing=e}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(e){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(e){e?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(e){return this.colorOutput}setColorOutputEnabled(e){this.colorOutput=e}get useRange(){return this.luminanceRange!==null}set useRange(e){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(e){e!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=e,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(e){this.luminanceRange=e}},Lt=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <encodings_fragment>
}`,Ht="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Ft=class extends L{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new x(null),supportBuffer:new x(null),texelSize:new x(new _),radius:new x(.85)},blending:N,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Lt,vertexShader:Ht})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}set supportBuffer(e){this.uniforms.supportBuffer.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},Ot=new He,P=null;function Nt(){if(P===null){const e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]);P=new Je,P.setAttribute!==void 0?(P.setAttribute("position",new K(e,3)),P.setAttribute("uv",new K(t,2))):(P.addAttribute("position",new K(e,3)),P.addAttribute("uv",new K(t,2)))}return P}var T=class{constructor(e="Pass",t=new re,i=Ot){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Z(Nt(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new re),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=F){}render(e,t,i,s,n){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof C||t instanceof De||t instanceof Re||t instanceof T)&&this[e].dispose()}}},Gt=class extends T{constructor(e,t=!0){super("CopyPass"),this.fullscreenMaterial=new ze,this.needsSwap=!1,this.renderTarget=e,e===void 0&&(this.renderTarget=new C(1,1,{minFilter:j,magFilter:j,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,i,s,n){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==k?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":O(e)===w&&R(this.renderTarget.texture,w))}},$t=class extends T{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(e,t,i,s,n){const r=e.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},we=new D,fe=class extends T{constructor(e=!0,t=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=e,this.depth=t,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(e,t,i){this.color=e,this.depth=t,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(e){this.overrideClearColor=e}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(e){this.overrideClearAlpha=e}render(e,t,i,s,n){const r=this.overrideClearColor,a=this.overrideClearAlpha,l=e.getClearAlpha(),u=r!==null,h=a>=0;u?(e.getClearColor(we),e.setClearColor(r,h?a:l)):h&&e.setClearAlpha(a),e.setRenderTarget(this.renderToScreen?null:t),e.clear(this.color,this.depth,this.stencil),u?e.setClearColor(we,l):h&&e.setClearAlpha(l)}},U=-1,A=class extends ue{constructor(e,t=U,i=U,s=1){super(),this.resizable=e,this.baseSize=new _(1,1),this.preferredSize=new _(t,i),this.target=this.preferredSize,this.s=s,this.effectiveSize=new _,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const e=this.baseSize,t=this.preferredSize,i=this.effectiveSize,s=this.scale;t.width!==U?i.width=t.width:t.height!==U?i.width=Math.round(t.height*(e.width/Math.max(e.height,1))):i.width=Math.round(e.width*s),t.height!==U?i.height=t.height:t.width!==U?i.height=Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):i.height=Math.round(e.height*s)}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(U),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(e){this.s=e.scale,this.baseSize.set(e.baseWidth,e.baseHeight),this.preferredSize.set(e.preferredWidth,e.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return U}},te=!1,be=class{constructor(e=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(e),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let i;if(t.material.flatShading)switch(t.material.side){case Y:i=this.materialsFlatShadedDoubleSide;break;case X:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(t.material.side){case Y:i=this.materialsDoubleSide;break;case X:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=i[2]:t.isInstancedMesh?t.material=i[1]:t.material=i[0],++this.meshCount}}}cloneMaterial(e){if(!(e instanceof L))return e.clone();const t=e.uniforms,i=new Map;for(const n in t){const r=t[n].value;r.isRenderTargetTexture&&(t[n].value=null,i.set(n,r))}const s=e.clone();for(const n of i)t[n[0]].value=n[1],s.uniforms[n[0]].value=n[1];return s}setMaterial(e){if(this.disposeMaterials(),this.material=e,e!==null){const t=this.materials=[this.cloneMaterial(e),this.cloneMaterial(e),this.cloneMaterial(e)];for(const i of t)i.uniforms=Object.assign({},e.uniforms),i.side=Ve;t[2].skinning=!0,this.materialsBackSide=t.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},e.uniforms),s.side=X,s}),this.materialsDoubleSide=t.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},e.uniforms),s.side=Y,s}),this.materialsFlatShaded=t.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},e.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=t.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},e.uniforms),s.flatShading=!0,s.side=X,s}),this.materialsFlatShadedDoubleSide=t.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},e.uniforms),s.flatShading=!0,s.side=Y,s})}}render(e,t,i){const s=e.shadowMap.enabled;if(e.shadowMap.enabled=!1,te){const n=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),e.render(t,i);for(const r of n)r[0].material=r[1];this.meshCount!==n.size&&n.clear()}else{const n=t.overrideMaterial;t.overrideMaterial=this.material,e.render(t,i),t.overrideMaterial=n}e.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const e=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of e)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return te}static set workaroundEnabled(e){te=e}},Ie=class extends T{constructor(e,t,i=null){super("RenderPass",e,t),this.needsSwap=!1,this.clearPass=new fe,this.overrideMaterialManager=i===null?null:new be(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get renderToScreen(){return super.renderToScreen}set renderToScreen(e){super.renderToScreen=e,this.clearPass.renderToScreen=e}get overrideMaterial(){const e=this.overrideMaterialManager;return e!==null?e.material:null}set overrideMaterial(e){const t=this.overrideMaterialManager;e!==null?t!==null?t.setMaterial(e):this.overrideMaterialManager=new be(e):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(e){this.overrideMaterial=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getSelection(){return this.selection}setSelection(e){this.selection=e}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(e){this.skipShadowMapUpdate=e}getClearPass(){return this.clearPass}render(e,t,i,s,n){const r=this.scene,a=this.camera,l=this.selection,u=a.layers.mask,h=r.background,v=e.shadowMap.autoUpdate,f=this.renderToScreen?null:t;l!==null&&a.layers.set(l.getLayer()),this.skipShadowMapUpdate&&(e.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(e,t),e.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(e,r,a):e.render(r,a),a.layers.mask=u,r.background=h,e.shadowMap.autoUpdate=v}},Vt=class extends T{constructor(e,t,{renderTarget:i,resolutionScale:s=1,width:n=A.AUTO_SIZE,height:r=A.AUTO_SIZE,resolutionX:a=n,resolutionY:l=r}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new Ie(e,t,new We({depthPacking:Te}));const u=this.renderPass;u.skipShadowMapUpdate=!0,u.ignoreBackground=!0;const h=u.getClearPass();h.overrideClearColor=new D(16777215),h.overrideClearAlpha=1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new C(1,1,{minFilter:ge,magFilter:ge}),this.renderTarget.texture.name="DepthPass.Target");const v=this.resolution=new A(this,a,l,s);v.addEventListener("change",f=>this.setSize(v.baseWidth,v.baseHeight))}set mainScene(e){this.renderPass.mainScene=e}set mainCamera(e){this.renderPass.mainCamera=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,i,s,n){const r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(e,r)}setSize(e,t){const i=this.resolution;i.setBaseSize(e,t),this.renderTarget.setSize(i.width,i.height)}};function ye(e,t,i){for(const s of t){const n="$1"+e+s.charAt(0).toUpperCase()+s.slice(1),r=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const a of i.entries())a[1]!==null&&i.set(a[0],a[1].replace(r,n))}}function Wt(e,t,i){let s=t.getFragmentShader(),n=t.getVertexShader();const r=s!==void 0&&/mainImage/.test(s),a=s!==void 0&&/mainUv/.test(s);if(i.attributes|=t.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(a&&i.attributes&z.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const l=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,u=i.shaderParts;let h=u.get(g.FRAGMENT_HEAD)||"",v=u.get(g.FRAGMENT_MAIN_UV)||"",f=u.get(g.FRAGMENT_MAIN_IMAGE)||"",c=u.get(g.VERTEX_HEAD)||"",d=u.get(g.VERTEX_MAIN_SUPPORT)||"";const b=new Set,E=new Set;if(a&&(v+=`	${e}MainUv(UV);
`,i.uvTransformation=!0),n!==null&&/mainSupport/.test(n)){const m=/mainSupport *\([\w\s]*?uv\s*?\)/.test(n);d+=`	${e}MainSupport(`,d+=m?`vUv);
`:`);
`;for(const S of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const G of S[1].split(/\s*,\s*/))i.varyings.add(G),b.add(G),E.add(G);for(const S of n.matchAll(l))E.add(S[1])}for(const m of s.matchAll(l))E.add(m[1]);for(const m of t.defines.keys())E.add(m.replace(/\([\w\s,]*\)/g,""));for(const m of t.uniforms.keys())E.add(m);E.delete("while"),E.delete("for"),E.delete("if"),t.uniforms.forEach((m,S)=>i.uniforms.set(e+S.charAt(0).toUpperCase()+S.slice(1),m)),t.defines.forEach((m,S)=>i.defines.set(e+S.charAt(0).toUpperCase()+S.slice(1),m));const H=new Map([["fragment",s],["vertex",n]]);ye(e,E,i.defines),ye(e,E,H),s=H.get("fragment"),n=H.get("vertex");const o=t.blendMode;if(i.blendModes.set(o.blendFunction,o),r){t.inputColorSpace!==null&&t.inputColorSpace!==i.colorSpace&&(f+=t.inputColorSpace===w?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==Pe?i.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(i.colorSpace=t.inputColorSpace);const m=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${e}MainImage(color0, UV, `,i.attributes&z.DEPTH&&m.test(s)&&(f+="depth, ",i.readDepth=!0),f+=`color1);
	`;const S=e+"BlendOpacity";i.uniforms.set(S,o.opacity),f+=`color0 = blend${o.blendFunction}(color0, color1, ${S});

	`,h+=`uniform float ${S};

`}if(h+=s+`
`,n!==null&&(c+=n+`
`),u.set(g.FRAGMENT_HEAD,h),u.set(g.FRAGMENT_MAIN_UV,v),u.set(g.FRAGMENT_MAIN_IMAGE,f),u.set(g.VERTEX_HEAD,c),u.set(g.VERTEX_MAIN_SUPPORT,d),t.extensions!==null)for(const m of t.extensions)i.extensions.add(m)}}var Xt=class extends T{constructor(e,...t){super("EffectPass"),this.fullscreenMaterial=new zt(null,null,null,e),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(e){for(const t of this.effects)t.mainScene=e}set mainCamera(e){this.fullscreenMaterial.copyCameraSettings(e);for(const t of this.effects)t.mainCamera=e}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(e){this.fullscreenMaterial.encodeOutput=e}get dithering(){return this.fullscreenMaterial.dithering}set dithering(e){const t=this.fullscreenMaterial;t.dithering=e,t.needsUpdate=!0}setEffects(e){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=e.sort((t,i)=>i.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const e=new ti;let t=0;for(const a of this.effects)if(a.blendMode.blendFunction===p.DST)e.attributes|=a.getAttributes()&z.DEPTH;else{if(e.attributes&a.getAttributes()&z.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);Wt("e"+t++,a,e)}let i=e.shaderParts.get(g.FRAGMENT_HEAD),s=e.shaderParts.get(g.FRAGMENT_MAIN_IMAGE),n=e.shaderParts.get(g.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of e.blendModes.values())i+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;e.attributes&z.DEPTH?(e.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,e.colorSpace===w&&(s+=`color0 = sRGBToLinear(color0);
	`),e.uvTransformation?(n=`vec2 transformedUv = vUv;
`+n,e.defines.set("UV","transformedUv")):e.defines.set("UV","vUv"),e.shaderParts.set(g.FRAGMENT_HEAD,i),e.shaderParts.set(g.FRAGMENT_MAIN_IMAGE,s),e.shaderParts.set(g.FRAGMENT_MAIN_UV,n);for(const[a,l]of e.shaderParts)l!==null&&e.shaderParts.set(a,l.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(e)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(e,t=F){this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t;for(const i of this.effects)i.setDepthTexture(e,t)}render(e,t,i,s,n){for(const r of this.effects)r.update(e,t,s);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=t.texture,r.time+=s*this.timeScale,e.setRenderTarget(this.renderToScreen?null:i),e.render(this.scene,this.camera)}}setSize(e,t){this.fullscreenMaterial.setSize(e,t);for(const i of this.effects)i.setSize(e,t)}initialize(e,t,i){this.renderer=e;for(const s of this.effects)s.initialize(e,t,i);this.updateMaterial(),i!==void 0&&i!==k&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const e of this.effects)e.removeEventListener("change",this.listener),e.dispose()}handleEvent(e){switch(e.type){case"change":this.recompile();break}}},Yt=class extends T{constructor({kernelSize:e=pe.MEDIUM,resolutionScale:t=.5,width:i=A.AUTO_SIZE,height:s=A.AUTO_SIZE,resolutionX:n=i,resolutionY:r=s}={}){super("KawaseBlurPass"),this.renderTargetA=new C(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new A(this,n,r,t);a.addEventListener("change",l=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new At,this._blurMaterial.kernelSize=e,this.copyMaterial=new ze}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(e){this._blurMaterial=e}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,i,s,n){const r=this.scene,a=this.camera,l=this.renderTargetA,u=this.renderTargetB,h=this.blurMaterial,v=h.kernelSequence;let f=t;this.fullscreenMaterial=h;for(let c=0,d=v.length;c<d;++c){const b=c&1?u:l;h.kernel=v[c],h.inputBuffer=f.texture,e.setRenderTarget(b),e.render(r,a),f=b}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,e.setRenderTarget(this.renderToScreen?null:i),e.render(r,a)}setSize(e,t){const i=this.resolution;i.setBaseSize(e,t);const s=i.width,n=i.height;this.renderTargetA.setSize(s,n),this.renderTargetB.setSize(s,n),this.blurMaterial.setSize(e,t)}initialize(e,t,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==k?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):O(e)===w&&(R(this.renderTargetA.texture,w),R(this.renderTargetB.texture,w)))}static get AUTO_SIZE(){return A.AUTO_SIZE}},Kt=class extends T{constructor({renderTarget:e,luminanceRange:t,colorOutput:i,resolutionScale:s=1,width:n=A.AUTO_SIZE,height:r=A.AUTO_SIZE,resolutionX:a=n,resolutionY:l=r}={}){super("LuminancePass"),this.fullscreenMaterial=new kt(i,t),this.needsSwap=!1,this.renderTarget=e,this.renderTarget===void 0&&(this.renderTarget=new C(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const u=this.resolution=new A(this,a,l,s);u.addEventListener("change",h=>this.setSize(u.baseWidth,u.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(e,t,i,s,n){const r=this.fullscreenMaterial;r.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){const i=this.resolution;i.setBaseSize(e,t),this.renderTarget.setSize(i.width,i.height)}initialize(e,t,i){i!==void 0&&i!==k&&(this.renderTarget.texture.type=i,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Zt=class extends T{constructor(e,t){super("MaskPass",e,t),this.needsSwap=!1,this.clearPass=new fe(!1,!1,!0),this.inverse=!1}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get inverted(){return this.inverse}set inverted(e){this.inverse=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(e){this.inverted=e}render(e,t,i,s,n){const r=e.getContext(),a=e.state.buffers,l=this.scene,u=this.camera,h=this.clearPass,v=this.inverted?0:1,f=1-v;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,v,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?h.render(e,null):(h.render(e,t),h.render(e,i))),this.renderToScreen?(e.setRenderTarget(null),e.render(l,u)):(e.setRenderTarget(t),e.render(l,u),e.setRenderTarget(i),e.render(l,u)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},jt=class extends T{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new C(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Rt,this.upsamplingMaterial=new Ft,this.resolution=new _}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(e){if(this.levels!==e){const t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let i=0;i<e;++i){const s=t.clone();s.texture.name="Downsampling.Mipmap"+i,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(t);for(let i=1,s=e-1;i<s;++i){const n=t.clone();n.texture.name="Upsampling.Mipmap"+i,this.upsamplingMipmaps.push(n)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(e){this.upsamplingMaterial.radius=e}render(e,t,i,s,n){const{scene:r,camera:a}=this,{downsamplingMaterial:l,upsamplingMaterial:u}=this,{downsamplingMipmaps:h,upsamplingMipmaps:v}=this;let f=t;this.fullscreenMaterial=l;for(let c=0,d=h.length;c<d;++c){const b=h[c];l.setSize(f.width,f.height),l.inputBuffer=f.texture,e.setRenderTarget(b),e.render(r,a),f=b}this.fullscreenMaterial=u;for(let c=v.length-1;c>=0;--c){const d=v[c];u.setSize(f.width,f.height),u.inputBuffer=f.texture,u.supportBuffer=h[c].texture,e.setRenderTarget(d),e.render(r,a),f=d}}setSize(e,t){const i=this.resolution;i.set(e,t);let s=i.width,n=i.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)s=Math.round(s*.5),n=Math.round(n*.5),this.downsamplingMipmaps[r].setSize(s,n),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(s,n)}initialize(e,t,i){if(i!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const n of s)n.texture.type=i;if(i!==k)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(O(e)===w)for(const n of s)R(n.texture,w)}}dispose(){super.dispose();for(const e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))e.dispose()}},Jt=class extends T{constructor(e,t="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=e,this.input=t}setInput(e){this.input=e}render(e,t,i,s,n){const r=this.fullscreenMaterial.uniforms;t!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=t.texture),e.setRenderTarget(this.renderToScreen?null:i),e.render(this.scene,this.camera)}initialize(e,t,i){i!==void 0&&i!==k&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},ie=1/1e3,Qt=1e3,qt=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(e){typeof document<"u"&&document.hidden!==void 0&&(e?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=e)}get delta(){return this._delta*ie}get fixedDelta(){return this._fixedDelta*ie}set fixedDelta(e){this._fixedDelta=e*Qt}get elapsed(){return this._elapsed*ie}update(e){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(e!==void 0?e:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}handleEvent(e){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},ei=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:n}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,i,n,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Gt,this.depthTexture=null,this.passes=[],this.timer=new qt,this.autoRenderToScreen=!0,this.setRenderer(e)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(e){const t=this.inputBuffer,i=this.multisampling;i>0&&e>0?(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==e&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,e),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){const t=e.getSize(new _),i=e.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===k&&O(e)===w&&(R(this.inputBuffer.texture,w),R(this.outputBuffer.texture,w),this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height);for(const n of this.passes)n.initialize(e,i,s)}}replaceRenderer(e,t=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(e),t&&s!==null&&(s.removeChild(i.domElement),s.appendChild(e.domElement)),i}createDepthTexture(){const e=this.depthTexture=new Fe;return this.inputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(e.format=Oe,e.type=Ne):e.type=Ge,e}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const e of this.passes)e.setDepthTexture(null)}}createBuffer(e,t,i,s){const n=this.renderer,r=n===null?new _:n.getDrawingBufferSize(new _),a={minFilter:j,magFilter:j,stencilBuffer:t,depthBuffer:e,type:i},l=new C(r.width,r.height,a);return s>0&&(l.ignoreDepthForMultisampleCopy=!1,l.samples=s),i===k&&O(n)===w&&R(l.texture,w),l.texture.name="EffectComposer.Buffer",l.texture.generateMipmaps=!1,l}setMainScene(e){for(const t of this.passes)t.mainScene=e}setMainCamera(e){for(const t of this.passes)t.mainCamera=e}addPass(e,t){const i=this.passes,s=this.renderer,n=s.getDrawingBufferSize(new _),r=s.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(e.setRenderer(s),e.setSize(n.width,n.height),e.initialize(s,r,a),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?i.splice(t,0,e):i.push(e),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const l=this.createDepthTexture();for(e of i)e.setDepthTexture(l)}else e.setDepthTexture(this.depthTexture)}removePass(e){const t=this.passes,i=t.indexOf(e);if(i!==-1&&t.splice(i,1).length>0){if(this.depthTexture!==null){const r=(l,u)=>l||u.needsDepthTexture;t.reduce(r,!1)||(e.getDepthTexture()===this.depthTexture&&e.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){const t=this.renderer,i=this.copyPass;let s=this.inputBuffer,n=this.outputBuffer,r=!1,a,l,u;e===void 0&&(this.timer.update(),e=this.timer.delta);for(const h of this.passes)h.enabled&&(h.render(t,s,n,e,r),h.needsSwap&&(r&&(i.renderToScreen=h.renderToScreen,a=t.getContext(),l=t.state.buffers.stencil,l.setFunc(a.NOTEQUAL,1,4294967295),i.render(t,s,n,e,r),l.setFunc(a.EQUAL,1,4294967295)),u=s,s=n,n=u),h instanceof Zt?r=!0:h instanceof $t&&(r=!1))}setSize(e,t,i){const s=this.renderer,n=s.getSize(new _);(e===void 0||t===void 0)&&(e=n.width,t=n.height),(n.width!==e||n.height!==t)&&s.setSize(e,t,i);const r=s.getDrawingBufferSize(new _);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){const e=this.timer.autoReset;this.dispose(),this.autoRenderToScreen=!0,this.timer.autoReset=e}dispose(){for(const e of this.passes)e.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},ti=class{constructor(){this.shaderParts=new Map([[g.FRAGMENT_HEAD,null],[g.FRAGMENT_MAIN_UV,null],[g.FRAGMENT_MAIN_IMAGE,null],[g.VERTEX_HEAD,null],[g.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=z.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Q}},ii=class extends Set{constructor(e,t=10){super(),this.l=t,this.exclusive=!1,e!==void 0&&this.set(e)}get layer(){return this.l}set layer(e){const t=this.l;for(const i of this)i.layers.disable(t),i.layers.enable(e);this.l=e}getLayer(){return this.layer}setLayer(e){this.layer=e}isExclusive(){return this.exclusive}setExclusive(e){this.exclusive=e}clear(){const e=this.layer;for(const t of this)t.layers.disable(e);return super.clear()}set(e){this.clear();for(const t of e)this.add(t);return this}indexOf(e){return this.has(e)?0:-1}add(e){return this.exclusive?e.layers.set(this.layer):e.layers.enable(this.layer),super.add(e)}delete(e){return this.has(e)&&e.layers.disable(this.layer),super.delete(e)}toggle(e){let t;return this.has(e)?(this.delete(e),t=!1):(this.add(e),t=!0),t}setVisible(e){for(const t of this)e?t.layers.enable(0):t.layers.disable(0);return this}},si="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",ni="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",ri="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",ai="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",li="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",oi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",hi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",ui="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",ci="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",di="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",pi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",fi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",vi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",gi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",mi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",xi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",Si="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",Ei="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",wi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",bi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",yi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",_i="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",Ai="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",Ti="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",Mi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",Ci="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",Bi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Di="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",Ri="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",Pi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",Ui="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",zi="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",Ii=new Map([[p.ADD,si],[p.ALPHA,ni],[p.AVERAGE,ri],[p.COLOR,ai],[p.COLOR_BURN,li],[p.COLOR_DODGE,oi],[p.DARKEN,hi],[p.DIFFERENCE,ui],[p.DIVIDE,ci],[p.DST,null],[p.EXCLUSION,di],[p.HARD_LIGHT,pi],[p.HARD_MIX,fi],[p.HUE,vi],[p.INVERT,gi],[p.INVERT_RGB,mi],[p.LIGHTEN,xi],[p.LINEAR_BURN,Si],[p.LINEAR_DODGE,Ei],[p.LINEAR_LIGHT,wi],[p.LUMINOSITY,bi],[p.MULTIPLY,yi],[p.NEGATION,_i],[p.NORMAL,Ai],[p.OVERLAY,Ti],[p.PIN_LIGHT,Mi],[p.REFLECT,Ci],[p.SATURATION,Bi],[p.SCREEN,Di],[p.SOFT_LIGHT,Ri],[p.SRC,Pi],[p.SUBTRACT,Ui],[p.VIVID_LIGHT,zi]]),ki=class extends ue{constructor(e,t=1){super(),this._blendFunction=e,this.opacity=new x(t)}getOpacity(){return this.opacity.value}setOpacity(e){this.opacity.value=e}get blendFunction(){return this._blendFunction}set blendFunction(e){this._blendFunction=e,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e}getShaderCode(){return Ii.get(this.blendFunction)}},Li=class extends ue{constructor(e,t,{attributes:i=z.NONE,blendFunction:s=p.NORMAL,defines:n=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:l=null}={}){super(),this.name=e,this.renderer=null,this.attributes=i,this.fragmentShader=t,this.vertexShader=l,this.defines=n,this.uniforms=r,this.extensions=a,this.blendMode=new ki(s),this.blendMode.addEventListener("change",u=>this.setChanged()),this._inputColorSpace=Q,this._outputColorSpace=Pe}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(e){this._inputColorSpace=e,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e,this.setChanged()}set mainScene(e){}set mainCamera(e){}getName(){return this.name}setRenderer(e){this.renderer=e}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(e){this.attributes=e,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(e){this.fragmentShader=e,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(e){this.vertexShader=e,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(e,t=F){}update(e,t,i){}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof C||t instanceof De||t instanceof Re||t instanceof T)&&this[e].dispose()}}},Hi=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,Fi=class extends Li{constructor({blendFunction:e=p.SCREEN,luminanceThreshold:t=.9,luminanceSmoothing:i=.025,mipmapBlur:s=!1,intensity:n=1,radius:r=.85,levels:a=8,kernelSize:l=pe.LARGE,resolutionScale:u=.5,width:h=A.AUTO_SIZE,height:v=A.AUTO_SIZE,resolutionX:f=h,resolutionY:c=v}={}){super("BloomEffect",Hi,{blendFunction:e,uniforms:new Map([["map",new x(null)],["intensity",new x(n)]])}),this.renderTarget=new C(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Yt({kernelSize:l}),this.luminancePass=new Kt({colorOutput:!0}),this.luminanceMaterial.threshold=t,this.luminanceMaterial.smoothing=i,this.mipmapBlurPass=new jt,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const d=this.resolution=new A(this,f,c,u);d.addEventListener("change",b=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get dithering(){return this.blurPass.dithering}set dithering(e){this.blurPass.dithering=e}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(e){this.blurPass.kernelSize=e}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(e){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(e){this.uniforms.get("intensity").value=e}getIntensity(){return this.intensity}setIntensity(e){this.intensity=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}update(e,t,i){const s=this.renderTarget,n=this.luminancePass;n.enabled?(n.render(e,t),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,n.renderTarget):this.blurPass.render(e,n.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,t):this.blurPass.render(e,t,s)}setSize(e,t){const i=this.resolution;i.setBaseSize(e,t),this.renderTarget.setSize(i.width,i.height),this.blurPass.resolution.copy(i),this.luminancePass.setSize(e,t),this.mipmapBlurPass.setSize(e,t)}initialize(e,t,i){this.blurPass.initialize(e,t,i),this.luminancePass.initialize(e,t,i),this.mipmapBlurPass.initialize(e,t,i),i!==void 0&&(this.renderTarget.texture.type=i,O(e)===w&&R(this.renderTarget.texture,w))}};new y;new $e;new D;new y;new y;var Oi=class extends Fi{constructor(e,t,i){super(i),this.setAttributes(this.getAttributes()|z.DEPTH),this.camera=t,this.depthPass=new Vt(e,t),this.clearPass=new fe(!0,!1,!1),this.clearPass.overrideClearColor=new D(0),this.depthMaskPass=new Jt(new Ct);const s=this.depthMaskMaterial;s.copyCameraSettings(t),s.depthBuffer1=this.depthPass.texture,s.depthPacking1=Te,s.depthMode=ne,this.renderTargetMasked=new C(1,1,{depthBuffer:!1}),this.renderTargetMasked.texture.name="Bloom.Masked",this.selection=new ii,this.selection.layer=11,this._inverted=!1,this._ignoreBackground=!1}set mainScene(e){this.depthPass.mainScene=e}set mainCamera(e){this.camera=e,this.depthPass.mainCamera=e,this.depthMaskMaterial.copyCameraSettings(e)}getSelection(){return this.selection}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get inverted(){return this._inverted}set inverted(e){this._inverted=e,this.depthMaskMaterial.depthMode=e?Me:ne}isInverted(){return this.inverted}setInverted(e){this.inverted=e}get ignoreBackground(){return this._ignoreBackground}set ignoreBackground(e){this._ignoreBackground=e,this.depthMaskMaterial.maxDepthStrategy=e?$.DISCARD_MAX_DEPTH:$.KEEP_MAX_DEPTH}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}setDepthTexture(e,t=F){this.depthMaskMaterial.depthBuffer0=e,this.depthMaskMaterial.depthPacking0=t}update(e,t,i){const s=this.camera,n=this.selection,r=this.inverted;let a=t;if(this.ignoreBackground||!r||n.size>0){const l=s.layers.mask;s.layers.set(n.layer),this.depthPass.render(e),s.layers.mask=l,a=this.renderTargetMasked,this.clearPass.render(e,a),this.depthMaskPass.render(e,t,a)}super.update(e,a,i)}setSize(e,t){super.setSize(e,t),this.renderTargetMasked.setSize(e,t),this.depthPass.setSize(e,t)}initialize(e,t,i){super.initialize(e,t,i),this.clearPass.initialize(e,t,i),this.depthPass.initialize(e,t,i),this.depthMaskPass.initialize(e,t,i),i!==void 0&&(this.renderTargetMasked.texture.type=i,O(e)===w&&R(this.renderTargetMasked.texture,w))}};class Ni{constructor(){this.renderer,this.composer,this.effect,this.selection,this.scene,this.camera,this.directionalLight,this.ambientLight,this.controls,this.clock}init(t,i){this.renderer=new Qe({powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1}),this.renderer.setClearColor(new D(t.clearColor)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.getElementById("webgl").appendChild(this.renderer.domElement),this.scene=new re,this.camera=new oe(i.fov,window.innerWidth/window.innerHeight,i.near,i.far),this.camera.position.set(i.pos.x,i.pos.y,i.pos.z),this.effect=new Oi(this.scene,this.camera,{blendFunction:p.ADD,mipmapBlur:!0,luminanceThreshold:.15,luminanceSmoothing:.44,intensity:10}),this.effect.outputColorSpace="srgb",this.selection=this.effect.selection,this.composer=new ei(this.renderer),this.composer.addPass(new Ie(this.scene,this.camera)),this.composer.addPass(new Xt(this.camera,this.effect)),this.clock=new qe}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}}function Gi(){const[e,t]=tt("default");return{status:e,setStatus:t}}const le=et(Gi);class $i{constructor(){this.group=new B,this.pivot=new B,this.head=new B,this.propellers=new B}create(t){return new Promise(i=>{this.group.position.z=-2,t.add(this.group),this.pivot.userData.theta=0,this.group.add(this.pivot),this.head.position.z=3,this.pivot.add(this.head),this.head.add(this.propellers);const s=new B,n=this.createCircle(new D("skyblue"));this.head.add(s);for(let c=-1;c<2;c++){const d=n.clone();d.position.z=c*.06,d.rotation.x=(Math.random()*2-1)*Math.PI*.01,d.rotation.y=(Math.random()*2-1)*Math.PI*.01,s.add(d)}const r=new B,a=this.createArc(new D("skyblue"));this.head.add(r);for(let c=0;c<12;c++){const d=a.clone();d.rotation.z=Math.PI*2*(c/12),r.add(d)}const l=new B,u=this.createCircle(new D(16382352));this.head.add(l);for(let c=0;c<6;c++){const d=u.clone();d.position.set(0,0,c*-.45+-1.4),d.scale.set(.4+-.2*(c/6),.4+-.1*(c/6),2),d.rotation.x=(Math.random()*2-1)*Math.PI*.02,d.rotation.y=(Math.random()*2-1)*Math.PI*.02,l.add(d)}const h=this.createPropeller();for(let c=0;c<5;c++){const d=new B;for(let b=-1;b<2;b++){const E=h.clone();E.scale.z=1.5,E.position.z=b*.01,E.rotation.z=(Math.random()*2-1)*Math.PI*.02,d.add(E)}d.rotation.z=Math.PI*2*(c/5)-Math.PI*.1,this.propellers.add(d)}const v=new B;this.group.add(v);const f=this.createCircle(new D("pink"));f.rotation.x=Math.PI*.5;for(let c=0;c<28;c++){const d=f.clone();d.rotation.x+=(Math.random()*2-1)*Math.PI*.03,d.rotation.z+=(Math.random()*2-1)*Math.PI*.03,d.position.y=-1+c*-.18,c<24?d.scale.set(.1,.1,2):d.scale.set(.5,.5,1),v.add(d)}i()})}createArc(t=new y){const i=[new y(-3.2,0,0),new y(-3,0,-2),new y(3,0,-2),new y(3.2,0,0)],s=new xe(...i);s.getPoints(32);const n=new Se(s,32,.005,8,!1),r=new q({color:t});return new Z(n,r)}createCircle(t=new y){const i=new it(3.2,.005,6,32),s=new q({color:t});return new Z(i,s)}createPropeller(t=new y){const i=[new y(-.5,.2,0),new y(-3.7,1.6,0),new y(3.2,5.1,0),new y(.4,.6,0)],s=new xe(...i),n=s.getPoints(32);n.unshift(new y(0,0,0)),n.push(new y(0,0,0));const r=new Se(s,32,.003,8,!0).rotateY(Math.PI*.1),a=new q({color:t});return new Z(r,a)}async switchOn(t){t.renderer.setClearColor(3155751),this.group.traverse(i=>{i.isMesh&&setTimeout(()=>{t.selection.add(i)},Math.random()*1600)}),await this.timeout(2e3),le.setStatus("running"),await this.timeout(4e3),this.switchOff(t)}async switchOff(t){le.setStatus("stop"),await this.timeout(1e3),this.group.traverse(i=>{i.isMesh&&setTimeout(()=>{t.selection.delete(i)},Math.random()*1600)}),await this.timeout(4e3),this.switchOn(t)}rotateHead(t){this.pivot.userData.theta+=t,this.pivot.rotation.y=Math.sin(this.pivot.userData.theta*.5)}rotateFan(t){this.propellers.rotation.z-=t*2}async timeout(t=1e3){return new Promise(i=>{setTimeout(i,t)})}}class Vi{constructor(){this.items={}}create(t){return new Promise(i=>{this.items.fan=new $i;const s=this.items.fan.create(t);Promise.all([s]).then(i)})}getItems(){return this.items}createLights(t){this.items.pointLight=new st(16777215,2,20),this.items.pointLight.position.set(-1,1,1),t.add(this.items.pointLight),this.items.ambientLight=new nt(16777215,.2),t.add(this.items.ambientLight)}}function Wi(e,t){const i=new xt,s={},n=new rt(e.camera,e.renderer.domElement);s.resetControl=()=>{n.reset()},i.add(s,"resetControl").name("reset OrbitControls"),s.clearColor=0,i.addColor(s,"clearColor").onChange(r=>{e.renderer.setClearColor(r)}),i.add(e.effect.luminancePass.fullscreenMaterial,"threshold",0,1,.01),i.add(e.effect.luminancePass.fullscreenMaterial,"smoothing",0,1,.01),s.bloomIntensity=1,i.add(s,"bloomIntensity",0,10,.1).onChange(r=>{e.effect.uniforms.get("intensity").value=r})}const I=new Ni,_e=new Vi;let J,se=0,Ae=0,V=0;window.addEventListener("load",()=>{I.init(Xi,Yi),_e.create(I.scene).then(()=>{J=_e.getItems(),Ki(),ke(),I.clock.start()})});window.addEventListener("resize",()=>{I.resize()});const Xi={clearColor:16771917},Yi={fov:60,near:.1,far:30,pos:{x:0,y:-.5,z:10}};function Ki(){Wi(I),J.fan.switchOn(I)}async function Zi(){switch(le.status()){case"running":J.fan.rotateHead(V),J.fan.rotateFan(V);break}}function ke(){requestAnimationFrame(ke),se=I.clock.getElapsedTime(),V=se-Ae,V=Math.max(0,Math.min(V,.2)),Ae=se,Zi(),I.composer.render()}
