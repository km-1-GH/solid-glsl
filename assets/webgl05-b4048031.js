import"./modulepreload-polyfill-3cfb730f.js";import{G as A}from"./lil-gui.esm-b4f18ba3.js";class o{static loadFile(t){return new Promise((e,n)=>{fetch(t).then(r=>r.text()).then(r=>{e(r)}).catch(r=>{n(r)})})}static createWebGLContext(t){const e=t.getContext("webgl");if(e==null)throw new Error("webgl not supported");return e}static createShaderObject(t,e,n){const r=t.createShader(n);if(t.shaderSource(r,e),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS))return r;throw new Error(t.getShaderInfoLog(r))}static createProgramObject(t,e,n){const r=t.createProgram();if(t.attachShader(r,e),t.attachShader(r,n),t.linkProgram(r),t.deleteShader(e),t.deleteShader(n),t.getProgramParameter(r,t.LINK_STATUS))return t.useProgram(r),r;throw new Error(t.getProgramInfoLog(r))}static createVBO(t,e){const n=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),n}static enableAttribute(t,e,n,r){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(n),t.vertexAttribPointer(n,r,t.FLOAT,!1,0,0)}}const P=`attribute vec3 position;\r
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
`,O=`precision mediump float;\r
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
`,p=Math.PI*-.5,a=.2,h=.4,d=[],v=[];for(let i=0;i<5;i++){const t=p+.4*Math.PI*i,e=p+360/5/180*Math.PI*(i+.5),n=p+360/5/180*Math.PI*(i+1),r=[0,0,0],s=[Math.cos(t)*a,Math.sin(t)*a,0],l=[Math.cos(e)*h,Math.sin(e)*h,0],f=[0,0,0],_=[Math.cos(n)*a,Math.sin(n)*a,0],S=[Math.cos(e)*h,Math.sin(e)*h,0];d.push(...r,...s,...l,...f,..._,...S);const R=[255/255,245/255,23/255,1,255/255,177/255,0/255,1,255/255,248/255,83/255,1,255/255,245/255,23/255,1,255/255,177/255,0/255,1,255/255,248/255,83/255,1];v.push(...R)}const B=`attribute vec3 position;\r
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
`,T=`precision mediump float;\r
\r
// 経過時間を uniform 変数として受け取る\r
uniform float time;\r
\r
varying vec4 vColor;\r
\r
void main() {\r
  // 時間の経過からサイン波を作り、絶対値で点滅させるようにする\r
  vec3 rgb = vColor.rgb * abs(cos(time));\r
  float a = abs(cos(time));\r
\r
  // フラグメントの色\r
  gl_FragColor = vec4(rgb, a);\r
}\r
\r
`,g=Math.PI*.5,c=.2,u=.25,m=[],b=[];for(let i=0;i<5;i++){const t=g+.4*Math.PI*i,e=g+360/5/180*Math.PI*(i+1),n=[0+u,0,0],r=[Math.cos(t)*c+u,Math.sin(t)*c,0],s=[Math.cos(e)*c+u,Math.sin(e)*c,0];m.push(...n,...r,...s);const l=[255/255,245/255,23/255,1,255/255,177/255,0/255,1,255/255,248/255,83/255,1];b.push(...l)}class C{constructor(){this.canvas=null,this.gl=null,this.program=null,this.program_penta=null,this.uniformLocation=null,this.uniformLocation_penta=null,this.position=null,this.position_penta=null,this.positionStride=null,this.positionStride_penta=null,this.positionVBO=null,this.positionVBO_penta=null,this.color=null,this.color_penta=null,this.colorStride=null,this.colorStride_penta=null,this.colorVBO=null,this.colorVBO_penta=null,this.startTime=0,this.currentTime=0,this.elapsedTime=0,this.delta=0,this.isRender=!1,this.render=this.render.bind(this),this.guiParam={},this.attPosition=null,this.attColor=null,this.attPosition_penta=null,this.attColor_penta=null}init(){this.startTime=Date.now(),this.canvas=document.getElementById("webgl-canvas"),this.gl=o.createWebGLContext(this.canvas);const t=Math.min(window.innerWidth,window.innerHeight);this.canvas.width=t,this.canvas.height=t}load(){return new Promise((t,e)=>{t()})}createProgram(){const t=this.gl;if(t==null){const e=new Error("not initialized");reject(e)}else{const e=o.createShaderObject(t,P,t.VERTEX_SHADER),n=o.createShaderObject(t,B,t.VERTEX_SHADER),r=o.createShaderObject(t,O,t.FRAGMENT_SHADER),s=o.createShaderObject(t,T,t.FRAGMENT_SHADER);this.program=o.createProgramObject(t,e,r),this.program_penta=o.createProgramObject(t,n,s)}}setupMesh(){const t=this.gl;this.positionStride=3,this.vertexCount=d.length/this.positionStride,this.positionVBO=o.createVBO(this.gl,d),this.colorStride=4,this.colorVBO=o.createVBO(this.gl,v),this.positionStride_penta=3,this.vertexCount_penta=m.length/this.positionStride_penta,this.positionVBO_penta=o.createVBO(this.gl,m),this.colorStride_penta=4,this.colorVBO_penta=o.createVBO(this.gl,b),this.attPosition=0,this.attColor=1,o.enableAttribute(t,this.positionVBO,this.attPosition,this.positionStride),o.enableAttribute(t,this.colorVBO,this.attColor,this.colorStride),this.uniformLocation={time:t.getUniformLocation(this.program,"time")},o.enableAttribute(t,this.positionVBO_penta,this.attPosition,this.positionStride_penta),o.enableAttribute(t,this.colorVBO_penta,this.attColor,this.colorStride_penta),this.uniformLocation_penta={time:t.getUniformLocation(this.program_penta,"time")}}setupRendering(){const t=this.gl;t.viewport(0,0,this.canvas.width,this.canvas.height),t.clearColor(.3,.3,.3,1),t.clear(t.COLOR_BUFFER_BIT)}setupGUI(){const t=new A,e={};e.toggleRender=()=>{this.isRender=!this.isRender,this.isRender&&this.start()},t.add(e,"toggleRender")}start(){this.isRender=!0,this.render()}stop(){this.isRender=!1}render(){const t=this.gl;this.isRender===!0&&requestAnimationFrame(this.render),this.setupRendering(),this.currentTime=Date.now(),this.delta=Math.max(0,Math.min(.032,(this.currentTime-this.startTime)/1e3)),this.elapsedTime+=this.delta,this.startTime=this.currentTime,t.useProgram(this.program),t.uniform1f(this.uniformLocation.time,this.elapsedTime),o.enableAttribute(t,this.positionVBO,this.attPosition,this.positionStride),o.enableAttribute(t,this.colorVBO,this.attColor,this.colorStride),t.drawArrays(t.TRIANGLES,0,this.vertexCount),t.useProgram(this.program_penta),t.uniform1f(this.uniformLocation_penta.time,this.elapsedTime),o.enableAttribute(t,this.positionVBO_penta,this.attPosition,this.positionStride_penta),o.enableAttribute(t,this.colorVBO_penta,this.attColor,this.colorStride_penta),t.drawArrays(t.TRIANGLES,0,this.vertexCount_penta)}}window.addEventListener("DOMContentLoaded",()=>{const i=new C;i.init(),i.load().then(()=>{i.createProgram(),i.setupMesh(),i.setupGUI(),i.start()})},!1);
