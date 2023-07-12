import"./modulepreload-polyfill-3cfb730f.js";import{G as T}from"./lil-gui.esm-b4f18ba3.js";class o{static loadFile(t){return new Promise((e,i)=>{fetch(t).then(r=>r.text()).then(r=>{e(r)}).catch(r=>{i(r)})})}static createWebGLContext(t){const e=t.getContext("webgl");if(e==null)throw new Error("webgl not supported");return e}static createShaderObject(t,e,i){const r=t.createShader(i);if(t.shaderSource(r,e),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS))return r;throw new Error(t.getShaderInfoLog(r))}static createProgramObject(t,e,i){const r=t.createProgram();if(t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.deleteShader(e),t.deleteShader(i),t.getProgramParameter(r,t.LINK_STATUS))return t.useProgram(r),r;throw new Error(t.getProgramInfoLog(r))}static createVBO(t,e){const i=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),i}static enableAttribute(t,e,i,r){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,r,t.FLOAT,!1,0,0)}}const m=`attribute vec3 position;\r
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
`,g=`precision mediump float;\r
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
`,d=Math.PI*-.5,a=.2,h=.4,u=[],v=[];for(let n=0;n<5;n++){const t=d+.4*Math.PI*n,e=d+360/5/180*Math.PI*(n+.5),i=d+360/5/180*Math.PI*(n+1),r=[0,0,0],s=[Math.cos(t)*a,Math.sin(t)*a,0],l=[Math.cos(e)*h,Math.sin(e)*h,0],b=[0,0,0],S=[Math.cos(i)*a,Math.sin(i)*a,0],A=[Math.cos(e)*h,Math.sin(e)*h,0];u.push(...r,...s,...l,...b,...S,...A);const _=[255/255,245/255,23/255,1,255/255,177/255,0/255,1,255/255,248/255,83/255,1,255/255,245/255,23/255,1,255/255,177/255,0/255,1,255/255,248/255,83/255,1];v.push(..._)}const f=Math.PI*.5,c=.2,p=[],R=[];for(let n=0;n<5;n++){const t=f+.4*Math.PI*n,e=f+360/5/180*Math.PI*(n+1),i=[0,0,0],r=[Math.cos(t)*c,Math.sin(t)*c,0],s=[Math.cos(e)*c,Math.sin(e)*c,0];p.push(...i,...r,...s);const l=[255/255,245/255,23/255,1,255/255,177/255,0/255,1,255/255,248/255,83/255,1];R.push(...l)}class M{constructor(){this.canvas=null,this.gl=null,this.program=null,this.program_penta=null,this.uniformLocation=null,this.uniformLocation_penta=null,this.position=null,this.position_penta=null,this.positionStride=null,this.positionStride_penta=null,this.positionVBO=null,this.positionVBO_penta=null,this.color=null,this.color_penta=null,this.colorStride=null,this.colorStride_penta=null,this.colorVBO=null,this.colorVBO_penta=null,this.startTime=0,this.currentTime=0,this.elapsedTime=0,this.delta=0,this.isRender=!1,this.render=this.render.bind(this),this.guiParam={}}init(){this.startTime=Date.now(),this.canvas=document.getElementById("webgl-canvas"),this.gl=o.createWebGLContext(this.canvas);const t=Math.min(window.innerWidth,window.innerHeight);this.canvas.width=t,this.canvas.height=t}load(){return new Promise((t,e)=>{t()})}createProgram(){const t=this.gl;if(t==null){const e=new Error("not initialized");reject(e)}else{const e=o.createShaderObject(t,m,t.VERTEX_SHADER),i=o.createShaderObject(t,m,t.VERTEX_SHADER),r=o.createShaderObject(t,g,t.FRAGMENT_SHADER),s=o.createShaderObject(t,g,t.FRAGMENT_SHADER);this.program=o.createProgramObject(t,e,r),this.program_penta=o.createProgramObject(t,i,s)}}setupMesh(){const t=this.gl;this.positionStride=3,this.vertexCount=u.length/this.positionStride,this.positionVBO=o.createVBO(this.gl,u),this.colorStride=4,this.colorVBO=o.createVBO(this.gl,v),this.positionStride_penta=3,this.vertexCount_penta=p.length/this.positionStride_penta,this.positionVBO_penta=o.createVBO(this.gl,p),this.colorStride_penta=4,this.colorVBO_penta=o.createVBO(this.gl,R);const e=t.getAttribLocation(this.program,"position"),i=t.getAttribLocation(this.program,"color");o.enableAttribute(t,this.positionVBO,e,this.positionStride),o.enableAttribute(t,this.colorVBO,i,this.colorStride),this.uniformLocation={time:t.getUniformLocation(this.program,"time")}}setupRendering(){const t=this.gl;t.viewport(0,0,this.canvas.width,this.canvas.height),t.clearColor(.3,.3,.3,1),t.clear(t.COLOR_BUFFER_BIT)}setupGUI(){const t=new T,e={};e.toggleRender=()=>{this.isRender=!this.isRender,this.isRender&&this.start()},t.add(e,"toggleRender")}start(){this.isRender=!0,this.render()}stop(){this.isRender=!1}render(){const t=this.gl;this.isRender===!0&&requestAnimationFrame(this.render),this.setupRendering(),this.currentTime=Date.now(),this.delta=Math.max(0,Math.min(.032,(this.currentTime-this.startTime)/1e3)),this.elapsedTime+=this.delta,this.startTime=this.currentTime,t.useProgram(this.program),t.uniform1f(this.uniformLocation.time,this.elapsedTime),t.drawArrays(t.TRIANGLES,0,this.vertexCount)}}window.addEventListener("DOMContentLoaded",()=>{const n=new M;n.init(),n.load().then(()=>{n.createProgram(),n.setupMesh(),n.setupGUI(),n.start()})},!1);
