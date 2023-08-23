import"./modulepreload-polyfill-3cfb730f.js";import{G as Q}from"./lil-gui.esm-b4f18ba3.js";class S{static loadFile(t){return new Promise((e,n)=>{fetch(t).then(s=>s.text()).then(s=>{e(s)}).catch(s=>{n(s)})})}static loadImage(t){return new Promise(e=>{const n=new Image;n.addEventListener("load",()=>{e(n)},!1),n.src=t})}static createWebGLContext(t){const e=t.getContext("webgl");if(e==null)throw new Error("webgl not supported");return e}static createShaderObject(t,e,n){const s=t.createShader(n);if(t.shaderSource(s,e),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS))return s;throw new Error(t.getShaderInfoLog(s))}static createProgramObject(t,e,n){const s=t.createProgram();if(t.attachShader(s,e),t.attachShader(s,n),t.linkProgram(s),t.deleteShader(e),t.deleteShader(n),t.getProgramParameter(s,t.LINK_STATUS))return t.useProgram(s),s;throw new Error(t.getProgramInfoLog(s))}static createVBO(t,e){const n=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),n}static createIBO(t,e){const n=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(e),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),n}static enableBuffer(t,e,n,s,i){for(let r=0;r<e.length;++r)t.bindBuffer(t.ARRAY_BUFFER,e[r]),t.enableVertexAttribArray(n[r]),t.vertexAttribPointer(n[r],s[r],t.FLOAT,!1,0,0);i!=null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i)}static createTexture(t,e){const n=t.createTexture();return t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null),n}}class j{static get Vec2(){return H}static get Vec3(){return W}static get Mat4(){return K}static get Qtn(){return $}}let H=class k{static create(t=0,e=0){const n=new Float32Array(2);return n[0]=t,n[1]=e,n}static length(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}static normalize(t){const e=k.create(),n=k.length(t);if(n>0){const s=1/n;e[0]=t[0]*s,e[1]=t[1]*s}return e}static dot(t,e){return t[0]*e[0]+t[1]*e[1]}static cross(t,e){return k.create(),t[0]*e[1]-t[1]*e[0]}},W=class O{static create(t=0,e=0,n=0){const s=new Float32Array(3);return s[0]=t,s[1]=e,s[2]=n,s}static length(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}static normalize(t){const e=O.create(),n=O.length(t);if(n>0){const s=1/n;e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s}return e}static dot(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}static cross(t,e){return O.create(t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0])}static faceNormal(t,e,n){const s=O.create(e[0]-t[0],e[1]-t[1],e[2]-t[2]),i=O.create(n[0]-t[0],n[1]-t[1],n[2]-t[2]),r=O.create(s[1]*i[2]-s[2]*i[1],s[2]*i[0]-s[0]*i[2],s[0]*i[1]-s[1]*i[0]);return O.normalize(r)}},K=class B{static create(){return new Float32Array(16)}static identity(t){const e=t??B.create();return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static multiply(t,e,n){const s=n??B.create(),i=t[0],r=t[1],o=t[2],a=t[3],h=t[4],u=t[5],l=t[6],c=t[7],f=t[8],x=t[9],p=t[10],d=t[11],E=t[12],P=t[13],m=t[14],y=t[15],M=e[0],v=e[1],T=e[2],g=e[3],b=e[4],w=e[5],I=e[6],L=e[7],U=e[8],R=e[9],D=e[10],A=e[11],X=e[12],V=e[13],G=e[14],Z=e[15];return s[0]=M*i+v*h+T*f+g*E,s[1]=M*r+v*u+T*x+g*P,s[2]=M*o+v*l+T*p+g*m,s[3]=M*a+v*c+T*d+g*y,s[4]=b*i+w*h+I*f+L*E,s[5]=b*r+w*u+I*x+L*P,s[6]=b*o+w*l+I*p+L*m,s[7]=b*a+w*c+I*d+L*y,s[8]=U*i+R*h+D*f+A*E,s[9]=U*r+R*u+D*x+A*P,s[10]=U*o+R*l+D*p+A*m,s[11]=U*a+R*c+D*d+A*y,s[12]=X*i+V*h+G*f+Z*E,s[13]=X*r+V*u+G*x+Z*P,s[14]=X*o+V*l+G*p+Z*m,s[15]=X*a+V*c+G*d+Z*y,s}static scale(t,e,n){const s=n??B.create();return s[0]=t[0]*e[0],s[1]=t[1]*e[0],s[2]=t[2]*e[0],s[3]=t[3]*e[0],s[4]=t[4]*e[1],s[5]=t[5]*e[1],s[6]=t[6]*e[1],s[7]=t[7]*e[1],s[8]=t[8]*e[2],s[9]=t[9]*e[2],s[10]=t[10]*e[2],s[11]=t[11]*e[2],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15],s}static translate(t,e,n){const s=n??B.create();return s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[0]*e[0]+t[4]*e[1]+t[8]*e[2]+t[12],s[13]=t[1]*e[0]+t[5]*e[1]+t[9]*e[2]+t[13],s[14]=t[2]*e[0]+t[6]*e[1]+t[10]*e[2]+t[14],s[15]=t[3]*e[0]+t[7]*e[1]+t[11]*e[2]+t[15],s}static rotate(t,e,n,s){let i=s??B.create();const r=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);if(!r)return null;let o=n[0],a=n[1],h=n[2];if(r!=1){const V=1/r;o*=V,a*=V,h*=V}const u=Math.sin(e),l=Math.cos(e),c=1-l,f=t[0],x=t[1],p=t[2],d=t[3],E=t[4],P=t[5],m=t[6],y=t[7],M=t[8],v=t[9],T=t[10],g=t[11],b=o*o*c+l,w=a*o*c+h*u,I=h*o*c-a*u,L=o*a*c-h*u,U=a*a*c+l,R=h*a*c+o*u,D=o*h*c+a*u,A=a*h*c-o*u,X=h*h*c+l;return e?t!=i&&(i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]):i=t,i[0]=f*b+E*w+M*I,i[1]=x*b+P*w+v*I,i[2]=p*b+m*w+T*I,i[3]=d*b+y*w+g*I,i[4]=f*L+E*U+M*R,i[5]=x*L+P*U+v*R,i[6]=p*L+m*U+T*R,i[7]=d*L+y*U+g*R,i[8]=f*D+E*A+M*X,i[9]=x*D+P*A+v*X,i[10]=p*D+m*A+T*X,i[11]=d*D+y*A+g*X,i}static lookAt(t,e,n,s){const i=s??B.create(),r=t[0],o=t[1],a=t[2],h=e[0],u=e[1],l=e[2],c=n[0],f=n[1],x=n[2];if(r==h&&o==u&&a==l)return B.identity(i);let p,d,E,P,m,y,M,v,T,g;return M=r-h,v=o-u,T=a-l,g=1/Math.sqrt(M*M+v*v+T*T),M*=g,v*=g,T*=g,p=f*T-x*v,d=x*M-c*T,E=c*v-f*M,g=Math.sqrt(p*p+d*d+E*E),g?(g=1/g,p*=g,d*=g,E*=g):(p=0,d=0,E=0),P=v*E-T*d,m=T*p-M*E,y=M*d-v*p,g=Math.sqrt(P*P+m*m+y*y),g?(g=1/g,P*=g,m*=g,y*=g):(P=0,m=0,y=0),i[0]=p,i[1]=P,i[2]=M,i[3]=0,i[4]=d,i[5]=m,i[6]=v,i[7]=0,i[8]=E,i[9]=y,i[10]=T,i[11]=0,i[12]=-(p*r+d*o+E*a),i[13]=-(P*r+m*o+y*a),i[14]=-(M*r+v*o+T*a),i[15]=1,i}static perspective(t,e,n,s,i){const r=i??B.create(),o=n*Math.tan(t*Math.PI/360),h=o*e*2,u=o*2,l=s-n;return r[0]=n*2/h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=n*2/u,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=-(s+n)/l,r[11]=-1,r[12]=0,r[13]=0,r[14]=-(s*n*2)/l,r[15]=0,r}static ortho(t,e,n,s,i,r,o){const a=o??B.create(),h=e-t,u=n-s,l=r-i;return a[0]=2/h,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-2/l,a[11]=0,a[12]=-(t+e)/h,a[13]=-(n+s)/u,a[14]=-(r+i)/l,a[15]=1,a}static transpose(t,e){const n=e??B.create();return n[0]=t[0],n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=t[1],n[5]=t[5],n[6]=t[9],n[7]=t[13],n[8]=t[2],n[9]=t[6],n[10]=t[10],n[11]=t[14],n[12]=t[3],n[13]=t[7],n[14]=t[11],n[15]=t[15],n}static inverse(t,e){const n=e??B.create(),s=t[0],i=t[1],r=t[2],o=t[3],a=t[4],h=t[5],u=t[6],l=t[7],c=t[8],f=t[9],x=t[10],p=t[11],d=t[12],E=t[13],P=t[14],m=t[15],y=s*h-i*a,M=s*u-r*a,v=s*l-o*a,T=i*u-r*h,g=i*l-o*h,b=r*l-o*u,w=c*E-f*d,I=c*P-x*d,L=c*m-p*d,U=f*P-x*E,R=f*m-p*E,D=x*m-p*P,A=1/(y*D-M*R+v*U+T*L-g*I+b*w);return n[0]=(h*D-u*R+l*U)*A,n[1]=(-i*D+r*R-o*U)*A,n[2]=(E*b-P*g+m*T)*A,n[3]=(-f*b+x*g-p*T)*A,n[4]=(-a*D+u*L-l*I)*A,n[5]=(s*D-r*L+o*I)*A,n[6]=(-d*b+P*v-m*M)*A,n[7]=(c*b-x*v+p*M)*A,n[8]=(a*R-h*L+l*w)*A,n[9]=(-s*R+i*L-o*w)*A,n[10]=(d*g-E*v+m*y)*A,n[11]=(-c*g+f*v-p*y)*A,n[12]=(-a*U+h*I-u*w)*A,n[13]=(s*U-i*I+r*w)*A,n[14]=(-d*T+E*M-P*y)*A,n[15]=(c*T-f*M+x*y)*A,n}static toVecIV(t,e){const n=t[0],s=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],u=t[7],l=t[8],c=t[9],f=t[10],x=t[11],p=t[12],d=t[13],E=t[14],P=t[15],m=e[0],y=e[1],M=e[2],v=e[3],T=new Float32Array(4);return T[0]=m*n+y*o+M*l+v*p,T[1]=m*s+y*a+M*c+v*d,T[2]=m*i+y*h+M*f+v*E,T[3]=m*r+y*u+M*x+v*P,T}static screenPositionFromMvp(t,e,n,s){const i=n*.5,r=s*.5,o=B.toVecIV(t,[e[0],e[1],e[2],1]);if(o[3]<=0)return[NaN,NaN];o[0]/=o[3],o[1]/=o[3],o[2]/=o[3];const a=H.create();return a[0]=i+o[0]*i,a[1]=r-o[1]*r,a}},$=class z{static create(){return new Float32Array(4)}static identity(t){const e=t??z.create();return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}static inverse(t,e){const n=e??z.create();return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=t[3],n}static normalize(t){const e=z.create(),n=t[0],s=t[1],i=t[2],r=Math.sqrt(n*n+s*s+i*i);if(r>0){const o=1/r;e[0]=n*o,e[1]=s*o,e[2]=i*o}return e}static multiply(t,e,n){const s=n??z.create(),i=t[0],r=t[1],o=t[2],a=t[3],h=e[0],u=e[1],l=e[2],c=e[3];return s[0]=i*c+a*h+r*l-o*u,s[1]=r*c+a*u+o*h-i*l,s[2]=o*c+a*l+i*u-r*h,s[3]=a*c-i*h-r*u-o*l,s}static rotate(t,e,n){const s=n??z.create();let i=e[0],r=e[1],o=e[2];const a=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);if(a!==0){const u=1/a;i*=u,r*=u,o*=u}const h=Math.sin(t*.5);return s[0]=i*h,s[1]=r*h,s[2]=o*h,s[3]=Math.cos(t*.5),s}static toVecIII(t,e,n){const s=n??W.create(),i=z.create(),r=z.create(),o=z.create();return z.inverse(e,o),i[0]=t[0],i[1]=t[1],i[2]=t[2],z.multiply(o,i,r),z.multiply(r,e,o),s[0]=o[0],s[1]=o[1],s[2]=o[2],s}static toMatIV(t,e){const n=e??K.create(),s=t[0],i=t[1],r=t[2],o=t[3],a=s+s,h=i+i,u=r+r,l=s*a,c=s*h,f=s*u,x=i*h,p=i*u,d=r*u,E=o*a,P=o*h,m=o*u;return n[0]=1-(x+d),n[1]=c-m,n[2]=f+P,n[3]=0,n[4]=c+m,n[5]=1-(l+d),n[6]=p-E,n[7]=0,n[8]=f-P,n[9]=p+E,n[10]=1-(l+x),n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}static slerp(t,e,n,s){const i=s??z.create(),r=t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];let o=1-r*r;if(o<=0)i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3];else if(o=Math.sqrt(o),Math.abs(o)<1e-4)i[0]=t[0]*.5+e[0]*.5,i[1]=t[1]*.5+e[1]*.5,i[2]=t[2]*.5+e[2]*.5,i[3]=t[3]*.5+e[3]*.5;else{const a=Math.acos(r),h=a*n,u=Math.sin(a-h)/o,l=Math.sin(h)/o;i[0]=t[0]*u+e[0]*l,i[1]=t[1]*u+e[1]*l,i[2]=t[2]*u+e[2]*l,i[3]=t[3]*u+e[3]*l}return i}};class J{static plane(t,e,n){const s=t/2,i=e/2,r=[-s,i,0,s,i,0,-s,-i,0,s,-i,0],o=[0,0,1,0,0,1,0,0,1,0,0,1],a=[n[0],n[1],n[2],n[3],n[0],n[1],n[2],n[3],n[0],n[1],n[2],n[3],n[0],n[1],n[2],n[3]];return{position:r,normal:o,color:a,texCoord:[0,0,1,0,0,1,1,1],index:[0,2,1,1,2,3]}}static circle(t,e,n){const s=[],i=[],r=[],o=[],a=[];s.push(0,0,0),i.push(0,0,1),r.push(n[0],n[1],n[2],n[3]),o.push(.5,.5);let h=0;for(let u=0;u<t;u++){const l=Math.PI*2/t*u,c=Math.cos(l),f=Math.sin(l);s.push(c*e,f*e,0),i.push(0,0,1),r.push(n[0],n[1],n[2],n[3]),o.push((c+1)*.5,1-(f+1)*.5),u===t-1?a.push(0,h+1,1):a.push(0,h+1,h+2),++h}return{position:s,normal:i,color:r,texCoord:o,index:a}}static cube(t,e){const n=t*.5,s=[-n,-n,n,n,-n,n,n,n,n,-n,n,n,-n,-n,-n,-n,n,-n,n,n,-n,n,-n,-n,-n,n,-n,-n,n,n,n,n,n,n,n,-n,-n,-n,-n,n,-n,-n,n,-n,n,-n,-n,n,n,-n,-n,n,n,-n,n,n,n,n,-n,n,-n,-n,-n,-n,-n,n,-n,n,n,-n,n,-n],i=1/Math.sqrt(3),r=[-i,-i,i,i,-i,i,i,i,i,-i,i,i,-i,-i,-i,-i,i,-i,i,i,-i,i,-i,-i,-i,i,-i,-i,i,i,i,i,i,i,i,-i,-i,-i,-i,i,-i,-i,i,-i,i,-i,-i,i,i,-i,-i,i,i,-i,i,i,i,i,-i,i,-i,-i,-i,-i,-i,i,-i,i,i,-i,i,-i],o=[];for(let u=0;u<s.length/3;u++)o.push(e[0],e[1],e[2],e[3]);return{position:s,normal:r,color:o,texCoord:[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],index:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]}}static cone(t,e,n,s){const i=[],r=[],o=[],a=[],h=[],u=n/2;i.push(0,-u,0),r.push(0,-1,0),o.push(s[0],s[1],s[2],s[3]),a.push(.5,.5);let l=0;for(let c=0;c<=t;c++){const f=Math.PI*2/t*c,x=Math.cos(f),p=Math.sin(f);i.push(x*e,-u,p*e,x*e,-u,p*e),r.push(0,-1,0,x,0,p),o.push(s[0],s[1],s[2],s[3],s[0],s[1],s[2],s[3]),a.push((x+1)*.5,1-(p+1)*.5,(x+1)*.5,1-(p+1)*.5),c!==t&&(h.push(0,l+1,l+3),h.push(l+4,l+2,t*2+3)),l+=2}return i.push(0,u,0),r.push(0,1,0),o.push(s[0],s[1],s[2],s[3]),a.push(.5,.5),{position:i,normal:r,color:o,texCoord:a,index:h}}static cylinder(t,e,n,s,i){const r=[],o=[],a=[],h=[],u=[],l=s/2;r.push(0,l,0,0,-l,0),o.push(0,1,0,0,-1,0),a.push(i[0],i[1],i[2],i[3],i[0],i[1],i[2],i[3]),h.push(.5,.5,.5,.5);let c=2;for(let f=0;f<=t;f++){const x=Math.PI*2/t*f,p=Math.cos(x),d=Math.sin(x);r.push(p*e,l,d*e,p*e,l,d*e,p*n,-l,d*n,p*n,-l,d*n),o.push(0,1,0,p,0,d,0,-1,0,p,0,d),a.push(i[0],i[1],i[2],i[3],i[0],i[1],i[2],i[3],i[0],i[1],i[2],i[3],i[0],i[1],i[2],i[3]),h.push((p+1)*.5,1-(d+1)*.5,1-f/t,0,(p+1)*.5,1-(d+1)*.5,1-f/t,1),f!==t&&u.push(0,c+4,c,1,c+2,c+6,c+5,c+7,c+1,c+1,c+7,c+3),c+=4}return{position:r,normal:o,color:a,texCoord:h,index:u}}static sphere(t,e,n,s){const i=[],r=[],o=[],a=[],h=[],l=[];for(let c=0;c<=t;c++){const f=Math.PI/t*c,x=Math.cos(f),p=Math.sin(f);for(let d=0;d<=e;d++){const E=Math.PI*2/e*d,P=p*n*Math.cos(E),m=x*n,y=p*n*Math.sin(E),M=p*Math.cos(E),v=p*Math.sin(E);i.push(P,m,y),r.push(M,x,v),o.push(s[0],s[1],s[2],s[3]),a.push(1-1/e*d,1-1/t*c);let T=d%(e/12)/(e/12)*2-1;T=Math.sin(T*Math.PI*.5);const g=p*Math.cos(E+T*Math.PI*.5),b=p*Math.sin(E+T*Math.PI*.5);l.push(g,0,b)}}for(let c=0;c<t;c++)for(let f=0;f<e;f++){const x=(e+1)*c+f;h.push(x,x+1,x+e+2),h.push(x,x+e+2,x+e+1)}return{position:i,normal:r,color:o,texCoord:a,index:h,addNor:l}}static torus(t,e,n,s,i){const r=[],o=[],a=[],h=[],u=[];for(let l=0;l<=t;l++){const c=Math.PI*2/t*l,f=Math.cos(c),x=Math.sin(c);for(let p=0;p<=e;p++){const d=Math.PI*2/e*p,E=(f*n+s)*Math.cos(d),P=x*n,m=(f*n+s)*Math.sin(d),y=f*Math.cos(d),M=f*Math.sin(d),v=1/e*p;let T=1/t*l+.5;T>1&&(T-=1),T=1-T,r.push(E,P,m),o.push(y,x,M),a.push(i[0],i[1],i[2],i[3]),h.push(v,T)}}for(let l=0;l<t;l++)for(let c=0;c<e;c++){const f=(e+1)*l+c;u.push(f,f+e+1,f+1),u.push(f+e+1,f+e+2,f+1)}return{position:r,normal:o,color:a,texCoord:h,index:u}}static icosahedron(t,e){const n=(1+Math.sqrt(5))/2,s=n*t,i=Math.sqrt(1+n*n),r=[1/i,n/i],o=[-t,s,0,t,s,0,-t,-s,0,t,-s,0,0,-t,s,0,t,s,0,-t,-s,0,t,-s,s,0,-t,s,0,t,-s,0,-t,-s,0,t],a=[-r[0],r[1],0,r[0],r[1],0,-r[0],-r[1],0,r[0],-r[1],0,0,-r[0],r[1],0,r[0],r[1],0,-r[0],-r[1],0,r[0],-r[1],r[1],0,-r[0],r[1],0,r[0],-r[1],0,-r[0],-r[1],0,r[0]],h=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]],u=[];for(let c=0,f=a.length;c<f;c+=3){const x=(Math.atan2(a[c+2],-a[c])+Math.PI)/(Math.PI*2),p=1-(a[c+1]+1)/2;u.push(x,p)}return{position:o,normal:a,color:h,texCoord:u,index:[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}}}const Y=j.Vec2,F=j.Vec3,q=j.Mat4,C=j.Qtn;class _{static get DEFAULT_DISTANCE(){return 5}static get DEFAULT_MIN_DISTANCE(){return 1}static get DEFAULT_MAX_DISTANCE(){return 10}static get DEFAULT_MOVE_SCALE(){return 2}constructor(t,e={}){this.target=t,this.distance=e.distance||_.DEFAULT_DISTANCE,this.minDistance=e.min||_.DEFAULT_MIN_DISTANCE,this.maxDistance=e.max||_.DEFAULT_MAX_DISTANCE,this.moveScale=e.move||_.DEFAULT_MOVE_SCALE,this.position=F.create(0,0,this.distance),this.center=F.create(0,0,0),this.upDirection=F.create(0,1,0),this.defaultPosition=F.create(0,0,this.distance),this.defaultCenter=F.create(0,0,0),this.defaultUpDirection=F.create(0,1,0),this.movePosition=F.create(0,0,0),this.rotateX=0,this.rotateY=0,this.scale=0,this.isDown=!1,this.prevPosition=Y.create(0,0),this.offsetPosition=Y.create(0,0),this.qt=C.create(),this.qtx=C.create(),this.qty=C.create(),this.mouseInteractionStart=this.mouseInteractionStart.bind(this),this.mouseInteractionMove=this.mouseInteractionMove.bind(this),this.mouseInteractionEnd=this.mouseInteractionEnd.bind(this),this.wheelScroll=this.wheelScroll.bind(this),this.target.addEventListener("mousedown",this.mouseInteractionStart,!1),this.target.addEventListener("mousemove",this.mouseInteractionMove,!1),this.target.addEventListener("mouseup",this.mouseInteractionEnd,!1),this.target.addEventListener("wheel",this.wheelScroll,!1),this.target.addEventListener("contextmenu",n=>{n.preventDefault()},!1)}mouseInteractionStart(t){this.isDown=!0;const e=this.target.getBoundingClientRect();this.prevPosition=Y.create(t.clientX-e.left,t.clientY-e.top)}mouseInteractionMove(t){if(this.isDown!==!0)return;const e=this.target.getBoundingClientRect(),n=e.width,s=e.height,i=t.clientX-e.left,r=t.clientY-e.top,o=1/Math.min(n,s);switch(this.offsetPosition=Y.create(i-this.prevPosition[0],r-this.prevPosition[1]),this.prevPosition=Y.create(i,r),t.buttons){case 1:this.rotateX+=this.offsetPosition[0]*o,this.rotateY+=this.offsetPosition[1]*o,this.rotateX=this.rotateX%1,this.rotateY=Math.min(Math.max(this.rotateY%1,-.25),.25);break;case 2:const a=F.create(this.offsetPosition[0],-this.offsetPosition[1],0),h=C.toVecIII(a,this.qt);this.movePosition[0]-=h[0]*o*this.moveScale,this.movePosition[1]-=h[1]*o*this.moveScale,this.movePosition[2]-=h[2]*o*this.moveScale;break}}mouseInteractionEnd(t){this.isDown=!1}wheelScroll(t){const e=t.wheelDelta;e>0?this.scale=-.5:e<0&&(this.scale=.5)}update(){const t=Math.PI*2,e=F.create(1,0,0),n=F.create(0,1,0);return this.scale*=.7,this.distance+=this.scale,this.distance=Math.min(Math.max(this.distance,this.minDistance),this.maxDistance),this.defaultPosition[2]=this.distance,C.identity(this.qt),C.identity(this.qtx),C.identity(this.qty),C.rotate(this.rotateX*t,n,this.qtx),C.toVecIII(e,this.qtx,e),C.rotate(this.rotateY*t,e,this.qty),C.multiply(this.qtx,this.qty,this.qt),C.toVecIII(this.defaultPosition,this.qt,this.position),C.toVecIII(this.defaultUpDirection,this.qt,this.upDirection),this.position[0]+=this.movePosition[0],this.position[1]+=this.movePosition[1],this.position[2]+=this.movePosition[2],this.center[0]=this.defaultCenter[0]+this.movePosition[0],this.center[1]=this.defaultCenter[1]+this.movePosition[1],this.center[2]=this.defaultCenter[2]+this.movePosition[2],q.lookAt(this.position,this.center,this.upDirection)}}const tt=`attribute vec3 position;\r
attribute vec3 normal;\r
attribute vec4 color;\r
attribute vec2 uv;\r
attribute vec3 addNor;\r
\r
uniform mat4 mvpMatrix;\r
uniform mat4 normalMatrix; // 法線変換行列 @@@\r
uniform float uTime;\r
uniform sampler2D normalTexUnit; // テクスチャ @@@\r
uniform mat4 mMatrix;\r
\r
varying vec4 vColor;\r
varying vec3 vNewNormal;\r
varying vec2 vUv; // テクスチャ座標受け渡し用 @@@\r
varying vec3 vLocalPosition;\r
varying vec3 vWorldPosition;\r
\r
const float PI = 3.141592653589793;\r
const float loopAngle = 1.0 / 12.0;\r
\r
// ランダムな数\r
float rand(float n)  { return fract(sin(n) * 43758.5453123); }\r
\r
// map\r
float map(float value, float min1, float max1, float min2, float max2) {\r
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\r
}\r
\r
void main() {\r
  vec3 newPosition = position;\r
\r
  // ふくらみを作る(30°ごと）\r
  float modulo = mod(uv.x, loopAngle) / loopAngle;  //0~1\r
  float inflate = sin(modulo * PI); //0~1~0\r
  float distanceY = cos(position.y * 0.46 * PI);\r
  inflate = inflate * distanceY + 0.1;\r
\r
  // 下をすぼめる\r
  float taperedUV = 1.0 - min(1.0, uv.y * 2.0); //下端0.0~半分1.0 -> 下端1.0~半分0.0\r
  float taperedY = taperedUV * 0.4; //1.0~0.0 -> 下端0.4~半分0.0\r
  float taperedXZ = cos(taperedUV * 0.3 * PI); //下端？~半分1.0\r
\r
  //張り具合:uTime0.8以上でパンパン, 0.6以下同じ\r
  float inflateStrength = smoothstep(0.6, 0.8, uTime) * 2.0 - 1.0; //0~0.4->0.8~1 : -1~1\r
  inflate *= inflateStrength * 0.11;\r
  \r
  // 大きさXZ\r
  float scaleXZ = smoothstep(0.0, 0.9, uTime) * 0.8 + 0.2; //0.2~1.0\r
\r
  // しぼむ時の横シフト:uTime=0.4以下で\r
  float shiftTime = (1.0 - smoothstep(0.0, 0.4, uTime)) * 1.8; //uTime=0=1,uTime=0.4=0\r
  float shiftXZ = min(shiftTime, distance(position.y, -1.0));\r
\r
  // vertex position update\r
  newPosition += normal * inflate;\r
  newPosition.x = newPosition.x * scaleXZ * taperedXZ + (shiftXZ * 0.5);\r
  newPosition.z = newPosition.z * scaleXZ * taperedXZ + (shiftXZ * 0.5);\r
  newPosition.y = position.y - taperedY - (shiftXZ + (position.x * shiftXZ * 0.1) + (position.z * shiftXZ * 0.2));\r
\r
  // 法線\r
  vec3 axis = vec3(0.0, -1.0, 0.0);\r
  vec3 tangent = normalize(cross(normal, axis));\r
  vec3 bitangent = normalize(cross(normal, tangent));\r
  mat3 tbn = mat3(tangent, bitangent, normal);\r
\r
  // パンパンの時\r
  vec3 inflateNormal = normalize(normal + normalize(addNor) * inflateStrength);\r
\r
  // シワ:uTime=0.6以上無効\r
  float wrinkleStrength = 1.0 - smoothstep(0.2, 0.6, uTime);\r
  // テクスチャから、テクスチャ座標の位置の色を取り出して、ローカル座標系に変換 @@@\r
  vec3 pickedNormal = tbn * normalize(texture2D(normalTexUnit, uv) * 2.0 - 1.0).xyz;\r
\r
  vec3 mixedNormal = mix(inflateNormal, pickedNormal, ((1.0 - uv.y) * wrinkleStrength));\r
  vec3 destNormal = mixedNormal;\r
\r
  // 法線を行列で変換する\r
  vec3 newNormal = (normalMatrix * vec4(destNormal, 0.0)).xyz;\r
\r
  // varying\r
  vNewNormal = newNormal;\r
  vUv = uv;\r
  vLocalPosition = position;\r
  vWorldPosition = (mMatrix * vec4(newPosition, 1.0)).xyz;\r
  vColor = color;\r
\r
  // MVP 行列と頂点座標を乗算してから出力する\r
  gl_Position = mvpMatrix * vec4(newPosition, 1.0);\r
}\r
\r
`,et=`precision mediump float;\r
\r
uniform sampler2D colorTexUnit; // テクスチャ @@@\r
\r
varying vec4 vColor;\r
varying vec3 vNewNormal;\r
varying vec2 vUv; // テクスチャ座標 @@@\r
varying vec3 vLocalPosition;\r
varying vec3 vWorldPosition;\r
\r
const float loopAngle = 1.0 / 12.0;\r
\r
// カラー変換\r
vec3 hsv2rgb(vec3 c) {\r
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\r
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\r
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\r
}\r
\r
void main() {\r
  // ライトベクトルはひとまず定数で定義する\r
  // vec3 light = vec3(0.5, 1.0, 0.0); //directional light\r
  vec3 lightPosition = vec3(1.0, 1.0, 3.0);\r
  vec3 light = lightPosition - vLocalPosition; //point light\r
\r
  // 変換した法線とライトベクトルで内積を取る @@@\r
  float d = dot(normalize(vNewNormal), normalize(light)); //-1.0~1.0\r
  d = (d + 1.0) / 2.0 * 0.8 + 0.3;  //0.3~1.1\r
\r
  // color(original)\r
  // float hueAngle = floor(vUv.x / loopAngle);\r
  // float hue = loopAngle * hueAngle;\r
  // vec3 hsv = vec3(hue, 0.8, 0.8);\r
  // vec3 newColor = vec3(hsv2rgb(hsv));\r
\r
  // color(texture)\r
  vec3 newColor = texture2D(colorTexUnit, vUv).rgb;\r
\r
  // alpha 上下を切り落とす\r
  float alpha = 1.0 - step(0.99, vLocalPosition.y);\r
  alpha *= step(0.06, vLocalPosition.y + 1.0);\r
\r
  gl_FragColor = vec4(newColor * d, alpha);\r
}\r
\r
`;window.addEventListener("DOMContentLoaded",()=>{const N=new nt;N.init(),N.createProgramObject(tt,et),N.load().then(()=>{N.setupGeometry(),N.setupLocation(),N.setBlending(!0),N.setCulling(!1),N.start()});const t=new Q,e={texture:!0,blend:!0};t.add(e,"blend").onChange(n=>{N.setBlending(n)})});class nt{constructor(){this.canvas=null,this.gl=null,this.program=null,this.attributeLocation=null,this.attributeStride=null,this.uniformLocation=null,this.camera=null,this.geometry=null,this.baloonVBO=null,this.balloonIBO=null,this.startTime=0,this.isRender=!1,this.isRotation=!1,this.resize=this.resize.bind(this),this.render=this.render.bind(this)}setBlending(t){const e=this.gl;e!=null&&(t===!0?e.enable(e.BLEND):e.disable(e.BLEND))}setCulling(t){const e=this.gl;e!==null&&(t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE))}setDepthTest(t){const e=this.gl;e!==null&&(t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST))}setRotation(t){this.isRotation=t}init(){this.canvas=document.getElementById("webgl-canvas"),this.gl=S.createWebGLContext(this.canvas);const t={distance:5,min:1,max:10,move:2};this.camera=new _(this.canvas,t),this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this.resize(),window.addEventListener("resize",this.resize,!1)}createProgramObject(t,e){const n=this.gl;if(n!=null){const s=S.createShaderObject(n,t,n.VERTEX_SHADER),i=S.createShaderObject(n,e,n.FRAGMENT_SHADER);this.program=S.createProgramObject(n,s,i)}}setupGeometry(){const t=[1,1,1,1],e=24,n=72,s=1;this.geometry=J.sphere(e,n,s,t),this.baloonVBO=[S.createVBO(this.gl,this.geometry.position),S.createVBO(this.gl,this.geometry.normal),S.createVBO(this.gl,this.geometry.color),S.createVBO(this.gl,this.geometry.texCoord),S.createVBO(this.gl,this.geometry.addNor)],this.balloonIBO=S.createIBO(this.gl,this.geometry.index)}setupLocation(){const t=this.gl;this.attributeLocation=[t.getAttribLocation(this.program,"position"),t.getAttribLocation(this.program,"normal"),t.getAttribLocation(this.program,"color"),t.getAttribLocation(this.program,"uv"),t.getAttribLocation(this.program,"addNor")],console.log(this.attributeLocation),this.attributeLocation=[0,1,2,3,4],this.attributeStride=[3,3,4,2,3],this.uniformLocation={mvpMatrix:t.getUniformLocation(this.program,"mvpMatrix"),normalMatrix:t.getUniformLocation(this.program,"normalMatrix"),uTime:t.getUniformLocation(this.program,"uTime"),normalTexUnit:t.getUniformLocation(this.program,"normalTexUnit"),colorTexUnit:t.getUniformLocation(this.program,"colorTexUnit"),mMatrix:t.getUniformLocation(this.program,"mMatrix")}}setupRendering(){const t=this.gl;t.viewport(0,0,this.canvas.width,this.canvas.height),t.clearColor(.3,.3,.3,1),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE)}start(){this.startTime=Date.now(),this.isRender=!0,this.render()}stop(){this.isRender=!1}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}render(){const t=this.gl,e=j.Mat4;this.isRender===!0&&requestAnimationFrame(this.render);const n=(Date.now()-this.startTime)*.001,s=Math.abs(Math.sin(n*.3));this.setupRendering();const i=e.translate(e.identity(),[0,s,0]),r=e.transpose(e.inverse(i)),o=this.camera.update(),a=45,h=window.innerWidth/window.innerHeight,u=.1,l=10,c=e.perspective(a,h,u,l),f=e.multiply(c,o),x=e.multiply(f,i);t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.normalTexture),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.colorTexture),t.useProgram(this.program),t.uniformMatrix4fv(this.uniformLocation.mvpMatrix,!1,x),t.uniformMatrix4fv(this.uniformLocation.normalMatrix,!1,r),t.uniform1f(this.uniformLocation.uTime,s),t.uniform1i(this.uniformLocation.normalTexUnit,0),t.uniform1i(this.uniformLocation.colorTexUnit,1),t.uniformMatrix4fv(this.uniformLocation.mMatrix,!1,i),S.enableBuffer(t,this.baloonVBO,this.attributeLocation,this.attributeStride,this.balloonIBO),t.drawElements(t.TRIANGLES,this.geometry.index.length,t.UNSIGNED_SHORT,0)}load(){return new Promise((t,e)=>{const n=this.gl;if(n==null){const s=new Error("not initialized");e(s)}else{const s=S.loadImage("texture/wrinkle-normal.jpg").then(r=>{this.normalTexture=S.createTexture(n,r)}),i=S.loadImage("texture/balloon-d1.png").then(r=>{this.colorTexture=S.createTexture(n,r)});Promise.all([s,i]).then(t)}})}}
