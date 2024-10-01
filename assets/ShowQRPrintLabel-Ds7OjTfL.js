import{a0 as Et,j as xt,a3 as ct,a4 as ft,a5 as ht,a6 as N,a7 as K}from"./index-Bqe7kUWr.js";(function(S){var T={};function p(o){if(T[o])return T[o].exports;var h=T[o]={i:o,l:!1,exports:{}};return S[o].call(h.exports,h,h.exports,p),h.l=!0,h.exports}return p.m=S,p.c=T,p.d=function(o,h,C){p.o(o,h)||Object.defineProperty(o,h,{enumerable:!0,get:C})},p.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},p.t=function(o,h){if(1&h&&(o=p(o)),8&h||4&h&&typeof o=="object"&&o&&o.__esModule)return o;var C=Object.create(null);if(p.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:o}),2&h&&typeof o!="string")for(var E in o)p.d(C,E,function(_){return o[_]}.bind(null,E));return C},p.n=function(o){var h=o&&o.__esModule?function(){return o.default}:function(){return o};return p.d(h,"a",h),h},p.o=function(o,h){return Object.prototype.hasOwnProperty.call(o,h)},p.p="",p(p.s=9)})([function(S,T){S.exports={L:1,M:0,Q:3,H:2}},function(S,T){S.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},function(S,T,p){var o=p(3);function h(C,E){if(C.length==null)throw new Error(C.length+"/"+E);for(var _=0;_<C.length&&C[_]==0;)_++;this.num=new Array(C.length-_+E);for(var k=0;k<C.length-_;k++)this.num[k]=C[k+_]}h.prototype={get:function(C){return this.num[C]},getLength:function(){return this.num.length},multiply:function(C){for(var E=new Array(this.getLength()+C.getLength()-1),_=0;_<this.getLength();_++)for(var k=0;k<C.getLength();k++)E[_+k]^=o.gexp(o.glog(this.get(_))+o.glog(C.get(k)));return new h(E,0)},mod:function(C){if(this.getLength()-C.getLength()<0)return this;for(var E=o.glog(this.get(0))-o.glog(C.get(0)),_=new Array(this.getLength()),k=0;k<this.getLength();k++)_[k]=this.get(k);for(k=0;k<C.getLength();k++)_[k]^=o.gexp(o.glog(C.get(k))+E);return new h(_,0).mod(C)}},S.exports=h},function(S,T){for(var p={glog:function(h){if(h<1)throw new Error("glog("+h+")");return p.LOG_TABLE[h]},gexp:function(h){for(;h<0;)h+=255;for(;h>=256;)h-=255;return p.EXP_TABLE[h]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},o=0;o<8;o++)p.EXP_TABLE[o]=1<<o;for(o=8;o<256;o++)p.EXP_TABLE[o]=p.EXP_TABLE[o-4]^p.EXP_TABLE[o-5]^p.EXP_TABLE[o-6]^p.EXP_TABLE[o-8];for(o=0;o<255;o++)p.LOG_TABLE[p.EXP_TABLE[o]]=o;S.exports=p},function(S,T,p){var o=p(5),h=p(6),C=p(7),E=p(8),_=p(2);function k(y,b){this.typeNumber=y,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var j=k.prototype;j.addData=function(y){var b=new o(y);this.dataList.push(b),this.dataCache=null},j.isDark=function(y,b){if(y<0||this.moduleCount<=y||b<0||this.moduleCount<=b)throw new Error(y+","+b);return this.modules[y][b]},j.getModuleCount=function(){return this.moduleCount},j.make=function(){if(this.typeNumber<1){var y=1;for(y=1;y<40;y++){for(var b=h.getRSBlocks(y,this.errorCorrectLevel),d=new C,w=0,c=0;c<b.length;c++)w+=b[c].dataCount;for(c=0;c<this.dataList.length;c++){var u=this.dataList[c];d.put(u.mode,4),d.put(u.getLength(),E.getLengthInBits(u.mode,y)),u.write(d)}if(d.getLengthInBits()<=8*w)break}this.typeNumber=y}this.makeImpl(!1,this.getBestMaskPattern())},j.makeImpl=function(y,b){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var w=0;w<this.moduleCount;w++)this.modules[d][w]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(y,b),this.typeNumber>=7&&this.setupTypeNumber(y),this.dataCache==null&&(this.dataCache=k.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,b)},j.setupPositionProbePattern=function(y,b){for(var d=-1;d<=7;d++)if(!(y+d<=-1||this.moduleCount<=y+d))for(var w=-1;w<=7;w++)b+w<=-1||this.moduleCount<=b+w||(this.modules[y+d][b+w]=0<=d&&d<=6&&(w==0||w==6)||0<=w&&w<=6&&(d==0||d==6)||2<=d&&d<=4&&2<=w&&w<=4)},j.getBestMaskPattern=function(){for(var y=0,b=0,d=0;d<8;d++){this.makeImpl(!0,d);var w=E.getLostPoint(this);(d==0||y>w)&&(y=w,b=d)}return b},j.createMovieClip=function(y,b,d){var w=y.createEmptyMovieClip(b,d);this.make();for(var c=0;c<this.modules.length;c++)for(var u=1*c,f=0;f<this.modules[c].length;f++){var m=1*f;this.modules[c][f]&&(w.beginFill(0,100),w.moveTo(m,u),w.lineTo(m+1,u),w.lineTo(m+1,u+1),w.lineTo(m,u+1),w.endFill())}return w},j.setupTimingPattern=function(){for(var y=8;y<this.moduleCount-8;y++)this.modules[y][6]==null&&(this.modules[y][6]=y%2==0);for(var b=8;b<this.moduleCount-8;b++)this.modules[6][b]==null&&(this.modules[6][b]=b%2==0)},j.setupPositionAdjustPattern=function(){for(var y=E.getPatternPosition(this.typeNumber),b=0;b<y.length;b++)for(var d=0;d<y.length;d++){var w=y[b],c=y[d];if(this.modules[w][c]==null)for(var u=-2;u<=2;u++)for(var f=-2;f<=2;f++)this.modules[w+u][c+f]=u==-2||u==2||f==-2||f==2||u==0&&f==0}},j.setupTypeNumber=function(y){for(var b=E.getBCHTypeNumber(this.typeNumber),d=0;d<18;d++){var w=!y&&(b>>d&1)==1;this.modules[Math.floor(d/3)][d%3+this.moduleCount-8-3]=w}for(d=0;d<18;d++)w=!y&&(b>>d&1)==1,this.modules[d%3+this.moduleCount-8-3][Math.floor(d/3)]=w},j.setupTypeInfo=function(y,b){for(var d=this.errorCorrectLevel<<3|b,w=E.getBCHTypeInfo(d),c=0;c<15;c++){var u=!y&&(w>>c&1)==1;c<6?this.modules[c][8]=u:c<8?this.modules[c+1][8]=u:this.modules[this.moduleCount-15+c][8]=u}for(c=0;c<15;c++)u=!y&&(w>>c&1)==1,c<8?this.modules[8][this.moduleCount-c-1]=u:c<9?this.modules[8][15-c-1+1]=u:this.modules[8][15-c-1]=u;this.modules[this.moduleCount-8][8]=!y},j.mapData=function(y,b){for(var d=-1,w=this.moduleCount-1,c=7,u=0,f=this.moduleCount-1;f>0;f-=2)for(f==6&&f--;;){for(var m=0;m<2;m++)if(this.modules[w][f-m]==null){var P=!1;u<y.length&&(P=(y[u]>>>c&1)==1),E.getMask(b,w,f-m)&&(P=!P),this.modules[w][f-m]=P,--c==-1&&(u++,c=7)}if((w+=d)<0||this.moduleCount<=w){w-=d,d=-d;break}}},k.PAD0=236,k.PAD1=17,k.createData=function(y,b,d){for(var w=h.getRSBlocks(y,b),c=new C,u=0;u<d.length;u++){var f=d[u];c.put(f.mode,4),c.put(f.getLength(),E.getLengthInBits(f.mode,y)),f.write(c)}var m=0;for(u=0;u<w.length;u++)m+=w[u].dataCount;if(c.getLengthInBits()>8*m)throw new Error("code length overflow. ("+c.getLengthInBits()+">"+8*m+")");for(c.getLengthInBits()+4<=8*m&&c.put(0,4);c.getLengthInBits()%8!=0;)c.putBit(!1);for(;!(c.getLengthInBits()>=8*m||(c.put(k.PAD0,8),c.getLengthInBits()>=8*m));)c.put(k.PAD1,8);return k.createBytes(c,w)},k.createBytes=function(y,b){for(var d=0,w=0,c=0,u=new Array(b.length),f=new Array(b.length),m=0;m<b.length;m++){var P=b[m].dataCount,D=b[m].totalCount-P;w=Math.max(w,P),c=Math.max(c,D),u[m]=new Array(P);for(var B=0;B<u[m].length;B++)u[m][B]=255&y.buffer[B+d];d+=P;var U=E.getErrorCorrectPolynomial(D),I=new _(u[m],U.getLength()-1).mod(U);for(f[m]=new Array(U.getLength()-1),B=0;B<f[m].length;B++){var R=B+I.getLength()-f[m].length;f[m][B]=R>=0?I.get(R):0}}var q=0;for(B=0;B<b.length;B++)q+=b[B].totalCount;var G=new Array(q),V=0;for(B=0;B<w;B++)for(m=0;m<b.length;m++)B<u[m].length&&(G[V++]=u[m][B]);for(B=0;B<c;B++)for(m=0;m<b.length;m++)B<f[m].length&&(G[V++]=f[m][B]);return G},S.exports=k},function(S,T,p){var o=p(1);function h(C){this.mode=o.MODE_8BIT_BYTE,this.data=C}h.prototype={getLength:function(C){return this.data.length},write:function(C){for(var E=0;E<this.data.length;E++)C.put(this.data.charCodeAt(E),8)}},S.exports=h},function(S,T,p){var o=p(0);function h(C,E){this.totalCount=C,this.dataCount=E}h.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h.getRSBlocks=function(C,E){var _=h.getRsBlockTable(C,E);if(_==null)throw new Error("bad rs block @ typeNumber:"+C+"/errorCorrectLevel:"+E);for(var k=_.length/3,j=new Array,y=0;y<k;y++)for(var b=_[3*y+0],d=_[3*y+1],w=_[3*y+2],c=0;c<b;c++)j.push(new h(d,w));return j},h.getRsBlockTable=function(C,E){switch(E){case o.L:return h.RS_BLOCK_TABLE[4*(C-1)+0];case o.M:return h.RS_BLOCK_TABLE[4*(C-1)+1];case o.Q:return h.RS_BLOCK_TABLE[4*(C-1)+2];case o.H:return h.RS_BLOCK_TABLE[4*(C-1)+3];default:return}},S.exports=h},function(S,T){function p(){this.buffer=new Array,this.length=0}p.prototype={get:function(o){var h=Math.floor(o/8);return(this.buffer[h]>>>7-o%8&1)==1},put:function(o,h){for(var C=0;C<h;C++)this.putBit((o>>>h-C-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(o){var h=Math.floor(this.length/8);this.buffer.length<=h&&this.buffer.push(0),o&&(this.buffer[h]|=128>>>this.length%8),this.length++}},S.exports=p},function(S,T,p){var o=p(1),h=p(2),C=p(3),E=0,_=1,k=2,j=3,y=4,b=5,d=6,w=7,c={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(u){for(var f=u<<10;c.getBCHDigit(f)-c.getBCHDigit(c.G15)>=0;)f^=c.G15<<c.getBCHDigit(f)-c.getBCHDigit(c.G15);return(u<<10|f)^c.G15_MASK},getBCHTypeNumber:function(u){for(var f=u<<12;c.getBCHDigit(f)-c.getBCHDigit(c.G18)>=0;)f^=c.G18<<c.getBCHDigit(f)-c.getBCHDigit(c.G18);return u<<12|f},getBCHDigit:function(u){for(var f=0;u!=0;)f++,u>>>=1;return f},getPatternPosition:function(u){return c.PATTERN_POSITION_TABLE[u-1]},getMask:function(u,f,m){switch(u){case E:return(f+m)%2==0;case _:return f%2==0;case k:return m%3==0;case j:return(f+m)%3==0;case y:return(Math.floor(f/2)+Math.floor(m/3))%2==0;case b:return f*m%2+f*m%3==0;case d:return(f*m%2+f*m%3)%2==0;case w:return(f*m%3+(f+m)%2)%2==0;default:throw new Error("bad maskPattern:"+u)}},getErrorCorrectPolynomial:function(u){for(var f=new h([1],0),m=0;m<u;m++)f=f.multiply(new h([1,C.gexp(m)],0));return f},getLengthInBits:function(u,f){if(1<=f&&f<10)switch(u){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+u)}else if(f<27)switch(u){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+u)}else{if(!(f<41))throw new Error("type:"+f);switch(u){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+u)}}},getLostPoint:function(u){for(var f=u.getModuleCount(),m=0,P=0;P<f;P++)for(var D=0;D<f;D++){for(var B=0,U=u.isDark(P,D),I=-1;I<=1;I++)if(!(P+I<0||f<=P+I))for(var R=-1;R<=1;R++)D+R<0||f<=D+R||I==0&&R==0||U==u.isDark(P+I,D+R)&&B++;B>5&&(m+=3+B-5)}for(P=0;P<f-1;P++)for(D=0;D<f-1;D++){var q=0;u.isDark(P,D)&&q++,u.isDark(P+1,D)&&q++,u.isDark(P,D+1)&&q++,u.isDark(P+1,D+1)&&q++,q!=0&&q!=4||(m+=3)}for(P=0;P<f;P++)for(D=0;D<f-6;D++)u.isDark(P,D)&&!u.isDark(P,D+1)&&u.isDark(P,D+2)&&u.isDark(P,D+3)&&u.isDark(P,D+4)&&!u.isDark(P,D+5)&&u.isDark(P,D+6)&&(m+=40);for(D=0;D<f;D++)for(P=0;P<f-6;P++)u.isDark(P,D)&&!u.isDark(P+1,D)&&u.isDark(P+2,D)&&u.isDark(P+3,D)&&u.isDark(P+4,D)&&!u.isDark(P+5,D)&&u.isDark(P+6,D)&&(m+=40);var G=0;for(D=0;D<f;D++)for(P=0;P<f;P++)u.isDark(P,D)&&G++;return m+=10*(Math.abs(100*G/f/f-50)/5)}};S.exports=c},function(S,T,p){function o(a){return function(e){if(Array.isArray(e)){for(var s=0,n=new Array(e.length);s<e.length;s++)n[s]=e[s];return n}}(a)||function(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(a,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}p.r(T);var C=function(){function a(){(function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")})(this,a)}var e,s,n;return e=a,n=[{key:"convertHexColorToBytes",value:function(r){var t=[],i=r.replace("#","");if(!/^[0-9A-F]{3,8}$/i.test(i))return[0,0,0,0];switch(i.length){case 3:i+="F";case 4:t.push.apply(t,o(i.split("").map(function(l){return parseInt(l.repeat(2),16)})));break;case 6:i+="FF";case 8:t.push(parseInt(i.substr(0,2),16)),t.push(parseInt(i.substr(2,2),16)),t.push(parseInt(i.substr(4,2),16)),t.push(parseInt(i.substr(6,2),16));break;default:t.push(0,0,0,0)}return t}}],(s=null)&&h(e.prototype,s),n&&h(e,n),a}(),E=p(4),_=p.n(E),k=p(0),j=p.n(k);function y(a){return function(e){if(Array.isArray(e)){for(var s=0,n=new Array(e.length);s<e.length;s++)n[s]=e[s];return n}}(a)||function(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(a,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function d(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}var w={level:"L",padding:1,invert:!1,typeNumber:0,errorsEnabled:!1},c=function(){function a(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(function(i,l){if(!(i instanceof l))throw new TypeError("Cannot call a class as a function")})(this,a),d(this,"value",void 0),d(this,"level",void 0),d(this,"typeNumber",void 0),d(this,"padding",void 0),d(this,"errorsEnabled",void 0),d(this,"qrCodeData",void 0);var t=function(i){for(var l=1;l<arguments.length;l++){var g=arguments[l]!=null?arguments[l]:{},v=Object.keys(g);typeof Object.getOwnPropertySymbols=="function"&&(v=v.concat(Object.getOwnPropertySymbols(g).filter(function(O){return Object.getOwnPropertyDescriptor(g,O).enumerable}))),v.forEach(function(O){d(i,O,g[O])})}return i}({},w,r);this.value=n,this.level=t.level,this.typeNumber=t.typeNumber,this.padding=t.padding,this.invert=t.invert,this.errorsEnabled=t.errorsEnabled}var e,s;return e=a,(s=[{key:"setValue",value:function(n){this.value=n,this._clearCache()}},{key:"getDataSize",value:function(){var n=this.getData();return n?n.length:0}},{key:"_clearCache",value:function(){this.qrCodeData=null}},{key:"_getQrCodeData",value:function(n){var r=[],t=this.padding,i=this.invert,l=Array(2*t+n.length).fill(i),g=Array(t).fill(l),v=Array(t).fill(i);return t&&r.push.apply(r,y(g)),n.forEach(function(O){var x=[];x.push.apply(x,y(v).concat(y(O.map(function(L){return i?!L:L})),y(v))),r.push(x)}),t&&r.push.apply(r,y(g)),r}},{key:"getData",value:function(){if(!this.qrCodeData)try{var n=new _.a(this.typeNumber,j.a[this.level]);if(n.addData(this.value),n.make(),!n.modules)return null;this.qrCodeData=this._getQrCodeData(n.modules),Object.freeze(this.qrCodeData)}catch(r){if(this.errorsEnabled)throw r;return null}return this.qrCodeData}}])&&b(e.prototype,s),a}();function u(a,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}var f=function(){function a(){(function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")})(this,a)}var e,s,n;return e=a,n=[{key:"calculateDimension",value:function(r,t){return typeof r=="number"?r:typeof r=="string"&&r.indexOf("%")>0?Math.round(parseFloat(r)/100*t)||0:parseFloat(r)||0}},{key:"calculatePosition",value:function(r,t,i){if(typeof r=="number")return r;if(typeof r!="string"||r==="left"||r==="top")return 0;if(r==="right"||r==="bottom")return i-t;if(r==="center")return Math.round((i-t)/2);var l=r.match(/^(?:(right|bottom|left|top)\s+)?(-?[0-9.]+)(%)?$/);if(!l)return 0;var g=l[1]==="right"||l[1]==="bottom",v=!!l[3],O=parseFloat(l[2])||0;return v&&(O=Math.round(O/100*i)),g&&(O=i-O-t),Math.round(O)}}],(s=null)&&u(e.prototype,s),n&&u(e,n),a}();function m(a){return(m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(a)}function P(a,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function D(a,e,s){return(D=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(n,r,t){var i=function(g,v){for(;!Object.prototype.hasOwnProperty.call(g,v)&&(g=B(g))!==null;);return g}(n,r);if(i){var l=Object.getOwnPropertyDescriptor(i,r);return l.get?l.get.call(t):l.value}})(a,e,s||a)}function B(a){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(a)}function U(a,e){return(U=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(a,e)}function I(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function R(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}var q={image:null},G=function(a){function e(r){var t,i,l,g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(function(O,x){if(!(O instanceof x))throw new TypeError("Cannot call a class as a function")})(this,e),i=this,t=!(l=B(e).call(this,r,g))||m(l)!=="object"&&typeof l!="function"?I(i):l,R(I(I(t)),"image",null),R(I(I(t)),"imageConfig",null);var v=function(O){for(var x=1;x<arguments.length;x++){var L=arguments[x]!=null?arguments[x]:{},M=Object.keys(L);typeof Object.getOwnPropertySymbols=="function"&&(M=M.concat(Object.getOwnPropertySymbols(L).filter(function(A){return Object.getOwnPropertyDescriptor(L,A).enumerable}))),M.forEach(function(A){R(O,A,L[A])})}return O}({},q,g);return t.image=v.image,t}var s,n;return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&U(r,t)}(e,c),s=e,(n=[{key:"_clearCache",value:function(){D(B(e.prototype),"_clearCache",this).call(this),this.imageConfig=null}},{key:"_getImageSource",value:function(r){var t=r.source;return typeof t=="string"?t:t instanceof Image?t.src:t instanceof HTMLCanvasElement?t.toDataURL():null}},{key:"_getImageConfig",value:function(){if(this.imageConfig)return this.imageConfig;if(!(this.image&&this.image.source&&this.image.width&&this.image.height))return null;var r=this.getDataSize();if(!r)return null;var t=this._getImageSource(this.image);if(!t)return null;var i=r-2*this.padding,l=f.calculateDimension(this.image.width,i),g=f.calculateDimension(this.image.height,i),v=f.calculatePosition(this.image.x,l,i)+this.padding,O=f.calculatePosition(this.image.y,g,i)+this.padding,x=1;return typeof this.image.border!="number"&&this.image.border!==null||(x=this.image.border),this.imageConfig={source:t,border:x,x:v,y:O,width:l,height:g},this.imageConfig}},{key:"getData",value:function(){if(this.qrCodeData)return this.qrCodeData;var r=D(B(e.prototype),"getData",this).call(this);if(!r)return r;var t=this._getImageConfig();if(t&&t.width&&t.height&&typeof t.border=="number")for(var i=Math.max(t.x-t.border,0),l=Math.max(t.y-t.border,0),g=Math.min(i+t.width+2*t.border,r.length),v=Math.min(l+t.height+2*t.border,r.length),O=l;O<v;O+=1)for(var x=i;x<g;x+=1)r[O][x]=!!this.invert;return r}}])&&P(s.prototype,n),e}();function V(a,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}var pt=function(){function a(){(function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")})(this,a)}var e,s,n;return e=a,n=[{key:"load",value:function(r){return new Promise(function(t,i){var l=new Image;l.onload=function(){return t(l)},l.onerror=function(){return i(l)},l.src=r})}}],(s=null)&&V(e.prototype,s),n&&V(e,n),a}();function Z(a){return(Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(a)}function dt(a,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function tt(a,e,s){return(tt=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(n,r,t){var i=function(g,v){for(;!Object.prototype.hasOwnProperty.call(g,v)&&(g=Y(g))!==null;);return g}(n,r);if(i){var l=Object.getOwnPropertyDescriptor(i,r);return l.get?l.get.call(t):l.value}})(a,e,s||a)}function Y(a){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(a)}function et(a,e){return(et=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(a,e)}function z(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function F(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}var yt={fgColor:"#000",bgColor:"#FFF",scale:10,size:null},bt=function(a){function e(r){var t,i,l,g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(function(O,x){if(!(O instanceof x))throw new TypeError("Cannot call a class as a function")})(this,e),i=this,t=!(l=Y(e).call(this,r,g))||Z(l)!=="object"&&typeof l!="function"?z(i):l,F(z(z(t)),"fgColor",void 0),F(z(z(t)),"bgColor",void 0),F(z(z(t)),"scale",void 0),F(z(z(t)),"size",void 0),F(z(z(t)),"canvas",void 0),F(z(z(t)),"canvasContext",void 0);var v=function(O){for(var x=1;x<arguments.length;x++){var L=arguments[x]!=null?arguments[x]:{},M=Object.keys(L);typeof Object.getOwnPropertySymbols=="function"&&(M=M.concat(Object.getOwnPropertySymbols(L).filter(function(A){return Object.getOwnPropertyDescriptor(L,A).enumerable}))),M.forEach(function(A){F(O,A,L[A])})}return O}({},yt,g);return t.fgColor=v.fgColor,t.bgColor=v.bgColor,t.scale=v.scale,t.size=v.size,t.canvas=document.createElement("canvas"),t.canvasContext=t.canvas.getContext("2d"),t.toDataURL=t.toDataUrl,t}var s,n;return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&et(r,t)}(e,G),s=e,(n=[{key:"_clearCache",value:function(){tt(Y(e.prototype),"_clearCache",this).call(this),this.canvas.width=0}},{key:"_getCanvasSize",value:function(){var r=this.getDataSize();return r?this.size?this.size:this.scale?this.scale*r:r:null}},{key:"draw",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=this.getDataSize();if(!t)return null;var i=this.getData();if(!i)return null;var l=C.convertHexColorToBytes(this.fgColor),g=C.convertHexColorToBytes(this.bgColor),v=0,O=new Uint8ClampedArray(4*Math.pow(t,2));i.forEach(function(Pt){Pt.forEach(function(Dt){Dt?O.set(l,v):O.set(g,v),v+=4})});var x=new ImageData(O,t,t);this.canvas.width=t,this.canvas.height=t,this.canvasContext.putImageData(x,0,0);var L=this._getCanvasSize(),M=r||document.createElement("canvas");M.width=L,M.height=L;var A=M.getContext("2d");A.imageSmoothingEnabled=!1,A.drawImage(this.canvas,0,0,L,L);var st=this._drawImage(A,L/t);return st instanceof Promise?st.then(function(){return M}):M}},{key:"_getImageSource",value:function(r){var t=this,i=r.source;return typeof i=="string"?pt.load(i).then(function(l){return t.image.source=l,r.source=l,l}):i instanceof Image||i instanceof HTMLCanvasElement?i:null}},{key:"_drawImage",value:function(r,t){var i=this._getImageConfig();return i?i.source instanceof Promise?i.source.then(function(l){r.drawImage(l,i.x*t,i.y*t,i.width*t,i.height*t)}):(r.drawImage(i.source,i.x*t,i.y*t,i.width*t,i.height*t),!0):null}},{key:"getCanvas",value:function(){return this.draw()}},{key:"toDataUrl",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"image/png",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.92,i=this.draw();return i?i instanceof Promise?i.then(function(l){return l.toDataURL(r,t)}):i.toDataURL(r,t):null}}])&&dt(s.prototype,n),e}();function rt(a){return(rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(a)}function mt(a,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function nt(a,e,s){return(nt=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(n,r,t){var i=function(g,v){for(;!Object.prototype.hasOwnProperty.call(g,v)&&(g=W(g))!==null;);return g}(n,r);if(i){var l=Object.getOwnPropertyDescriptor(i,r);return l.get?l.get.call(t):l.value}})(a,e,s||a)}function W(a){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(a)}function ot(a,e){return(ot=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(a,e)}function H(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function X(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}var vt={fgColor:"#000",bgColor:"#FFF"},wt=function(a){function e(r){var t,i,l,g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(function(O,x){if(!(O instanceof x))throw new TypeError("Cannot call a class as a function")})(this,e),i=this,t=!(l=W(e).call(this,r,g))||rt(l)!=="object"&&typeof l!="function"?H(i):l,X(H(H(t)),"fgColor",void 0),X(H(H(t)),"bgColor",void 0),X(H(H(t)),"qrCodeSVG",null),X(H(H(t)),"qrCodeDataUrl",null);var v=function(O){for(var x=1;x<arguments.length;x++){var L=arguments[x]!=null?arguments[x]:{},M=Object.keys(L);typeof Object.getOwnPropertySymbols=="function"&&(M=M.concat(Object.getOwnPropertySymbols(L).filter(function(A){return Object.getOwnPropertyDescriptor(L,A).enumerable}))),M.forEach(function(A){X(O,A,L[A])})}return O}({},vt,g);return t.fgColor=v.fgColor,t.bgColor=v.bgColor,t.toDataURL=t.toDataUrl,t}var s,n;return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&ot(r,t)}(e,G),s=e,(n=[{key:"_clearCache",value:function(){nt(W(e.prototype),"_clearCache",this).call(this),this.qrCodeSVG=null,this.qrCodeDataUrl=null}},{key:"_getDataInt",value:function(){var r=this.getData();return r?r.map(function(t){return t.map(function(i){return i?1:0})}):null}},{key:"_getRects",value:function(){var r=this._getDataInt();if(!r)return null;for(var t=[],i=r.length-1,l=0;l<=i;l+=1)for(var g=-1,v=0;v<=i;v+=1){var O=r[l][v]===1;if(O&&g===-1&&(g=v),g!==-1&&(v===i||!O)){var x=v-(O?0:1),L=this._processRect(r,g,x,l);L&&t.push(L),g=-1}}return t}},{key:"_processRect",value:function(r,t,i,l){for(var g=r.length-1,v=!1,O=!1,x=0,L=l;L<=g;L+=1){for(var M=t;M<=i;M+=1)if(r[L][M]===0){O=!0;break}if(O)break;for(var A=t;A<=i;A+=1)r[L][A]===1&&(v=!0,r[L][A]=2);x+=1}return v?{x:t,y:l,width:i-t+1,height:x}:null}},{key:"_getRelativeRects",value:function(){var r=this._getRects();if(!r)return null;var t=[],i={},l=0;return r.forEach(function(g){var v="".concat(g.width,":").concat(g.height);i[v]?(i[v].count+=1,i[v].id||(i[v].id="i".concat(l.toString(32)),l+=1)):i[v]={count:1,rect:g,relative:!1,id:null}}),r.forEach(function(g){var v="".concat(g.width,":").concat(g.height),O=i[v];O.relative?t.push({id:O.id,x:g.x-O.rect.x,y:g.y-O.rect.y}):(O.id&&(g.id=O.id,O.relative=!0),t.push(g))}),t}},{key:"_buildSVG",value:function(r){var t=this,i=this.getDataSize(),l=['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" '+'shape-rendering="crispEdges" viewBox="0 0 '.concat(i," ").concat(i,'">')];this.bgColor&&l.push('<rect x="0" y="0" height="'.concat(i,'" width="').concat(i,'" fill="').concat(this.bgColor,'"/>')),r.forEach(function(v){if(v.width&&v.height){var O=v.id?'id="'.concat(v.id,'" '):"";l.push("<rect ".concat(O,'x="').concat(v.x,'" y="').concat(v.y,'" height="').concat(v.height,'" width="').concat(v.width,'" fill="').concat(t.fgColor,'"/>'))}else l.push('<use xlink:href="#'.concat(v.id,'" x="').concat(v.x,'" y="').concat(v.y,'"/>'))});var g=this._getImageConfig();return g&&g.width&&g.height&&l.push('<image xlink:href="'.concat(g.source,'" x="').concat(g.x,'" y="').concat(g.y,'" width="').concat(g.width,'" height="').concat(g.height,'"/>')),l.push("</svg>"),l.join("")}},{key:"toString",value:function(){if(!this.qrCodeSVG){if(!this.getDataSize())return null;var r=this._getRects();if(!r)return null;this.qrCodeSVG=this._buildSVG(r)}return this.qrCodeSVG}},{key:"toDataUrl",value:function(){if(!this.qrCodeDataUrl){if(!this.getDataSize())return null;var r=this._getRelativeRects();if(!r)return null;var t=this._buildSVG(r);this.qrCodeDataUrl="data:image/svg+xml;base64,".concat(btoa(t))}return this.qrCodeDataUrl}}])&&mt(s.prototype,n),e}();function at(a){return(at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(a)}function Ct(a,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function it(a,e,s){return(it=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(n,r,t){var i=function(g,v){for(;!Object.prototype.hasOwnProperty.call(g,v)&&(g=J(g))!==null;);return g}(n,r);if(i){var l=Object.getOwnPropertyDescriptor(i,r);return l.get?l.get.call(t):l.value}})(a,e,s||a)}function J(a){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(a)}function ut(a,e){return(ut=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(a,e)}function Q(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function $(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}var Ot={blackSymbol:"▓▓",whiteSymbol:"  "},_t=function(a){function e(r){var t,i,l,g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(function(O,x){if(!(O instanceof x))throw new TypeError("Cannot call a class as a function")})(this,e),i=this,t=!(l=J(e).call(this,r,g))||at(l)!=="object"&&typeof l!="function"?Q(i):l,$(Q(Q(t)),"blackSymbol",void 0),$(Q(Q(t)),"whiteSymbol",void 0),$(Q(Q(t)),"qrCodeText",null);var v=function(O){for(var x=1;x<arguments.length;x++){var L=arguments[x]!=null?arguments[x]:{},M=Object.keys(L);typeof Object.getOwnPropertySymbols=="function"&&(M=M.concat(Object.getOwnPropertySymbols(L).filter(function(A){return Object.getOwnPropertyDescriptor(L,A).enumerable}))),M.forEach(function(A){$(O,A,L[A])})}return O}({},Ot,g);return t.blackSymbol=v.blackSymbol,t.whiteSymbol=v.whiteSymbol,t}var s,n;return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&ut(r,t)}(e,c),s=e,(n=[{key:"_clearCache",value:function(){it(J(e.prototype),"_clearCache",this).call(this),this.qrCodeText=null}},{key:"toString",value:function(){if(this.qrCodeText)return this.qrCodeText;var r=this.getDataSize();if(!r)return null;for(var t=this.getData(),i=[],l=0;l<r;l+=1){for(var g=0;g<r;g+=1){var v=t[l][g];i.push(v?this.blackSymbol:this.whiteSymbol)}i.push(`
`)}return this.qrCodeText=i.join(""),this.qrCodeText}}])&&Ct(s.prototype,n),e}();p.d(T,"QRCodeCanvas",function(){return bt}),p.d(T,"QRCodeRaw",function(){return c}),p.d(T,"QRCodeSVG",function(){return wt}),p.d(T,"QRCodeText",function(){return _t}),p.d(T,"AbstractQRCodeWithImage",function(){return G})}]);const St=S=>{let T=window.DATAMatrix;return T({msg:S,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1})},kt=S=>{let p=S.cloneNode(!0).outerHTML,o=new Blob([p],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(o)},Lt=async(S,T)=>{const p=document.createElement("img");document.body.appendChild(p),p.onload=function(){const o=document.createElement("canvas");o.width=p.clientWidth,o.height=p.clientHeight,o.getContext("2d").drawImage(p,0,0);const C=o.toDataURL("image/png");document.body.removeChild(p),T(C)},p.src=S},Bt=S=>new Promise(async(T,p)=>{let o=St(S),h=kt(o);Lt(h,async C=>{var E=await Tt(C,"image/png");let _=URL.createObjectURL(E);T(_)})}),Tt=async(S,T)=>{let o=await(await fetch(S)).blob();return o=o.slice(0,o.size,T),o},At=S=>{window.navigator.clipboard.writeText(S),Et({text:S+"  copiado",timeout:1500,id:xt()})};function gt(S){let T=new Blob([S],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(T)}const lt=(S,T,p)=>{const o=T.widthOfTextAtSize(S,40),h=T.widthOfTextAtSize(S,10);return Math.floor(p/((o-h)/30))},Mt=async(S,T,p)=>{const o=await ct.create();o.registerFontkit(ft);const h=await ht(o);let C=265;const E=S.map(async(_,k)=>{const j=o.addPage([426,284]),{height:y}=j.getSize();let b=y-34;const d=await fetch(_?.qr).then(R=>R.arrayBuffer()),w=await o.embedPng(d);j&&w&&j.drawImage(w,{x:10,y:y-220,width:150,height:150}),_?.tracking?.length<14&&j.drawText(N(_?.tracking),{x:172,y:b-175,size:36,font:h.roboto_bold,color:K(0,0,0)});let c=lt(N(_?.state),h.roboto_bold,C);c>42&&(c=42,b=b-6);let u=lt(N(_?.name),h.GSansItalic,C);var f=h.GSansItalic?.widthOfTextAtSize(N(_?.name),u);if(f>C&&(u=u-1,f=h.GSansItalic?.widthOfTextAtSize(N(_?.name),u)),u=300/f*21,u=u>25?25:u,j.drawText(N(_?.name),{x:10,y:b-0,size:u,font:h.GSansItalic,color:K(0,0,0)}),console.log(u),_?.state){const R=h.roboto_bold?.widthOfTextAtSize(N(_?.state),c);j.drawText(N(_?.state),{x:420-R,y:b-46,size:c,font:h.roboto_bold,color:K(0,0,0)}),b=b-u}let m=29;const P=h.Lexend_700?.widthOfTextAtSize(N(_?.phoneNumber),m);j.drawText(N(_?.phoneNumber),{x:400-P,y:b-70,size:m,font:h.Lexend_700,color:K(0,0,0)});const D=h.Lexend_700?.widthOfTextAtSize(N(_?.altPhoneNumber),m);j.drawText(N(_?.altPhoneNumber),{x:400-D,y:b-105,size:m,font:h.Lexend_700,color:K(0,0,0)});let U=N(_?.bulto).trim();const I=h.Lexend_700?.widthOfTextAtSize(N(U),40);j.drawText(N(U),{x:418-I,y:b-205,size:40,font:h.GSansBold,color:K(0,0,0)})});await Promise.all(E);{const _=await o.save();return gt(_)}},It=async(S,T,p)=>{const o=await ct.create();o.registerFontkit(ft);const h=await ht(o),C=S.map(async(E,_)=>{const k=o.addPage([142,71]),{height:j}=k.getSize();if(E?.qr){const d=await fetch(E?.qr).then(c=>c.arrayBuffer()),w=await o.embedPng(d);w&&k.drawImage(w,{x:45,y:j-65,width:96,height:15})}const y=await fetch(E?.mtrx).then(d=>d.arrayBuffer()),b=await o.embedPng(y);k&&b&&k.drawImage(b,{x:0,y:j-65,width:60,height:60}),k.drawText(N(E?.lbl),{x:60,y:j-37,size:13,font:h.Lexend_700,color:K(0,0,0)})});await Promise.all(C);{const E=await o.save();return gt(E)}};export{Mt as S,At as c,Bt as g,It as l};
