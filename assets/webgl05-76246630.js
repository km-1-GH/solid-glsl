import"./modulepreload-polyfill-3cfb730f.js";import{G as v}from"./lil-gui.esm-b4f18ba3.js";class o{static createWebGLContext(t){const e=t.getContext("webgl");if(e==null)throw new Error("webgl not supported");return e}static createShaderObject(t,e,r){const i=t.createShader(r);if(t.shaderSource(i,e),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS))return i;throw new Error(t.getShaderInfoLog(i))}static createProgramObject(t,e,r){const i=t.createProgram();if(t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.deleteShader(e),t.deleteShader(r),t.getProgramParameter(i,t.LINK_STATUS))return t.useProgram(i),i;throw new Error(t.getProgramInfoLog(i))}static createVBO(t,e){const r=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),r}static enableAttribute(t,e,r,i){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(r),t.vertexAttribPointer(r,i,t.FLOAT,!1,0,0)}}const b=`attribute vec3 position;\r
attribute vec4 color;\r
varying vec4 vColor;\r
\r
void main() {\r
  // フラグメントシェーダに送る色の情報を varying 変数に代入\r
  vColor = color;\r
  // 頂点座標の出力\r
  gl_Position = vec4(position, 1.0);\r
}\r
\r
`,R=`precision mediump float;\r
\r
// 経過時間を uniform 変数として受け取る\r
uniform float time;\r
\r
varying vec4 vColor;\r
\r
void main() {\r
  // 時間の経過からサイン波を作り、絶対値で点滅させるようにする\r
  vec3 rgb = vColor.rgb * abs(sin(time));\r
  // フラグメントの色\r
  gl_FragColor = vec4(rgb, vColor.a);\r
}\r
\r
`,c=Math.PI*-.5,s=.2,a=.4,l=[],d=[];for(let n=0;n<5;n++){const t=c+.4*Math.PI*n,e=c+360/5/180*Math.PI*(n+.5),r=c+360/5/180*Math.PI*(n+1),i=[0,0,0],h=[Math.cos(t)*s,Math.sin(t)*s,0],u=[Math.cos(e)*a,Math.sin(e)*a,0],m=[0,0,0],p=[Math.cos(r)*s,Math.sin(r)*s,0],g=[Math.cos(e)*a,Math.sin(e)*a,0];l.push(...i,...h,...u,...m,...p,...g);const f=[255/255,245/255,23/255,1,255/255,177/255,0/255,1,255/255,248/255,83/255,1,255/255,245/255,23/255,1,255/255,177/255,0/255,1,255/255,248/255,83/255,1];d.push(...f)}class A{constructor(){this.canvas=null,this.gl=null,this.program=null,this.uniformLocation=null,this.position=null,this.positionStride=null,this.positionVBO=null,this.color=null,this.colorStride=null,this.colorVBO=null,this.startTime=0,this.currentTime=0,this.elapsedTime=0,this.delta=0,this.isRender=!1,this.render=this.render.bind(this),this.guiParam={}}init(){this.startTime=Date.now(),this.canvas=document.getElementById("webgl-canvas"),this.gl=o.createWebGLContext(this.canvas);const t=Math.min(window.innerWidth,window.innerHeight);this.canvas.width=t,this.canvas.height=t}load(){return new Promise((t,e)=>{const r=this.gl;if(r==null){const i=new Error("not initialized");e(i)}else{const i=o.createShaderObject(r,b,r.VERTEX_SHADER),h=o.createShaderObject(r,R,r.FRAGMENT_SHADER);this.program=o.createProgramObject(r,i,h),t()}})}setupGeometry(){this.positionStride=3,this.vertexCount=l.length/this.positionStride,this.positionVBO=o.createVBO(this.gl,l),this.colorStride=4,this.colorVBO=o.createVBO(this.gl,d)}setupLocation(){const t=this.gl,e=t.getAttribLocation(this.program,"position"),r=t.getAttribLocation(this.program,"color");o.enableAttribute(t,this.positionVBO,e,this.positionStride),o.enableAttribute(t,this.colorVBO,r,this.colorStride),this.uniformLocation={time:t.getUniformLocation(this.program,"time")}}setupRendering(){const t=this.gl;t.viewport(0,0,this.canvas.width,this.canvas.height),t.clearColor(.3,.3,.3,1),t.clear(t.COLOR_BUFFER_BIT)}setupGUI(){const t=new v,e={};e.toggleRender=()=>{this.isRender=!this.isRender,this.isRender&&this.start()},t.add(e,"toggleRender")}start(){this.isRender=!0,this.render()}stop(){this.isRender=!1}render(){const t=this.gl;this.isRender===!0&&requestAnimationFrame(this.render),this.setupRendering(),this.currentTime=Date.now(),this.delta=Math.max(0,Math.min(.32,this.currentTime-this.startTime)),this.elapsedTime+=this.delta,t.useProgram(this.program),t.uniform1f(this.uniformLocation.time,this.elapsedTime*.1),t.drawArrays(t.TRIANGLES,0,this.vertexCount)}}window.addEventListener("DOMContentLoaded",()=>{const n=new A;n.init(),n.load().then(()=>{n.setupGeometry(),n.setupLocation(),n.setupGUI(),n.start()})},!1);
