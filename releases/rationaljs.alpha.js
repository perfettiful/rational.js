var integer={greatest_common_divisor:function(a,b){if(1===b||1===a)return 1;for(var c;0!==b;){c=b;b=a%b;if(!isFinite(b))return 0;a=c}return a}};integer.gcd=integer.greatest_common_divisor;integer.fromRandom=function(a){return Math.random()*(1<<a)>>>0};integer.fromMillitime=function(){return+new Date};integer.fromUnixtime=function(){return integer.fromMillitime()/1E3|0};(function(a){function b(a,l,d){if(d!==c)return a instanceof b?a:"undefined"===typeof a?e:b.parse(a);for(a=a||[];a.length&&!a[a.length-1];)--a.length;this._d=a;this._s=a.length?l||1:0}var c={};b._construct=function(a,l){return new b(a,l,c)};var d=1E7;b.base=d;b.base_log10=7;var e=new b([],0,c);b.ZERO=e;var k=new b([1],1,c);b.ONE=k;var q=new b(k._d,-1,c);b.M_ONE=q;b._0=e;b._1=k;b.small=[e,k,new b([2],1,c),new b([3],1,c),new b([4],1,c),new b([5],1,c),new b([6],1,c),new b([7],1,c),new b([8],1,c),new b([9],
1,c),new b([10],1,c),new b([11],1,c),new b([12],1,c),new b([13],1,c),new b([14],1,c),new b([15],1,c),new b([16],1,c),new b([17],1,c),new b([18],1,c),new b([19],1,c),new b([20],1,c),new b([21],1,c),new b([22],1,c),new b([23],1,c),new b([24],1,c),new b([25],1,c),new b([26],1,c),new b([27],1,c),new b([28],1,c),new b([29],1,c),new b([30],1,c),new b([31],1,c),new b([32],1,c),new b([33],1,c),new b([34],1,c),new b([35],1,c),new b([36],1,c)];b.digits="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");b.prototype.toString=
function(a){a=+a||10;if(2>a||36<a)throw Error("illegal radix "+a+".");if(0===this._s)return"0";if(10===a){a=0>this._s?"-":"";a+=this._d[this._d.length-1].toString();for(var c=this._d.length-2;0<=c;c--){for(var e=this._d[c].toString();7>e.length;)e="0"+e;a+=e}return a}c=b.digits;a=b.small[a];for(var e=this._s,d=this.abs(),n=[],g;0!==d._s;)g=d.divRem(a),d=g[0],g=g[1],n.push(c[g.valueOf()]);return(0>e?"-":"")+n.reverse().join("")};b.radixRegex=[/^$/,/^$/,/^[01]*$/,/^[012]*$/,/^[0-3]*$/,/^[0-4]*$/,/^[0-5]*$/,
/^[0-6]*$/,/^[0-7]*$/,/^[0-8]*$/,/^[0-9]*$/,/^[0-9aA]*$/,/^[0-9abAB]*$/,/^[0-9abcABC]*$/,/^[0-9a-dA-D]*$/,/^[0-9a-eA-E]*$/,/^[0-9a-fA-F]*$/,/^[0-9a-gA-G]*$/,/^[0-9a-hA-H]*$/,/^[0-9a-iA-I]*$/,/^[0-9a-jA-J]*$/,/^[0-9a-kA-K]*$/,/^[0-9a-lA-L]*$/,/^[0-9a-mA-M]*$/,/^[0-9a-nA-N]*$/,/^[0-9a-oA-O]*$/,/^[0-9a-pA-P]*$/,/^[0-9a-qA-Q]*$/,/^[0-9a-rA-R]*$/,/^[0-9a-sA-S]*$/,/^[0-9a-tA-T]*$/,/^[0-9a-uA-U]*$/,/^[0-9a-vA-V]*$/,/^[0-9a-wA-W]*$/,/^[0-9a-xA-X]*$/,/^[0-9a-yA-Y]*$/,/^[0-9a-zA-Z]*$/];b.parse=function(a,d){function p(a){a=
a.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/,"e");return a.replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/,function(a,b,c,t,d){d=+d;var e=0>d,l=c.length+d;a=(e?c:t).length;d=(d=Math.abs(d))>=a?d-a+e:0;a=Array(d+1).join("0");c+=t;return(b||"")+(e?c=a+c:c+=a).substr(0,l+=e?a.length:0)+(l<c.length?"."+c.substr(l):"")})}a=a.toString();if("undefined"===typeof d||10===+d)a=p(a);var m=RegExp("^([+\\-]?)("+("undefined"===typeof d?"0[xcb]":16==d?"0x":8==d?"0c":2==d?"0b":"")+")?([0-9a-z]*)(?:\\.\\d*)?$","i").exec(a);
if(m){var n=m[1]||"+",g=m[2]||"",m=m[3]||"";if("undefined"===typeof d)d="0x"===g||"0X"===g?16:"0c"===g||"0C"===g?8:"0b"===g||"0B"===g?2:10;else if(2>d||36<d)throw Error("Illegal radix "+d+".");d=+d;if(!b.radixRegex[d].test(m))throw Error("Bad digit for radix "+d);m=m.replace(/^0+/,"").split("");if(0===m.length)return e;n="-"===n?-1:1;if(10==d){for(g=[];7<=m.length;)g.push(parseInt(m.splice(m.length-b.base_log10,b.base_log10).join(""),10));g.push(parseInt(m.join(""),10));return new b(g,n,c)}g=e;d=
b.small[d];for(var h=b.small,f=0;f<m.length;f++)g=g.multiply(d).add(h[parseInt(m[f],36)]);return new b(g._d,n,c)}throw Error("Invalid BigInteger format: "+a);};b.prototype.add=function(a){if(0===this._s)return b(a);a=b(a);if(0===a._s)return this;if(this._s!==a._s)return a=a.negate(),this.subtract(a);var e=this._d;a=a._d;for(var p=e.length,m=a.length,n=Array(Math.max(p,m)+1),g=Math.min(p,m),h=0,f=0;f<g;f++)h=e[f]+a[f]+h,n[f]=h%d,h=h/d|0;m>p&&(e=a,p=m);for(f=g;h&&f<p;f++)h=e[f]+h,n[f]=h%d,h=h/d|0;for(h&&
(n[f]=h);f<p;f++)n[f]=e[f];return new b(n,this._s,c)};b.prototype.negate=function(){return new b(this._d,-this._s|0,c)};b.prototype.abs=function(){return 0>this._s?this.negate():this};b.prototype.subtract=function(a){if(0===this._s)return b(a).negate();a=b(a);if(0===a._s)return this;if(this._s!==a._s)return a=a.negate(),this.add(a);var l=this;0>this._s&&(l=new b(a._d,1,c),a=new b(this._d,1,c));var p=l.compareAbs(a);if(0===p)return e;if(0>p){var m=a;a=l;l=m}l=l._d;a=a._d;var m=l.length,n=a.length,
g=Array(m),h=0,f,k;for(f=0;f<n;f++)k=l[f]-h-a[f],0>k?(k+=d,h=1):h=0,g[f]=k;for(f=n;f<m;f++){k=l[f]-h;if(0>k)k+=d;else{g[f++]=k;break}g[f]=k}for(;f<m;f++)g[f]=l[f];return new b(g,p,c)};(function(){function a(t,e){for(var l=t._d,g=l.slice(),h=0;;){var f=(l[h]||0)+1;g[h]=f%d;if(f<=d-1)break;++h}return new b(g,e,c)}function e(a,t){for(var l=a._d,g=l.slice(),h=0;;){var f=(l[h]||0)-1;if(0>f)g[h]=f+d;else{g[h]=f;break}++h}return new b(g,t,c)}b.prototype.next=function(){switch(this._s){case 0:return k;case -1:return e(this,
-1);default:return a(this,1)}};b.prototype.prev=function(){switch(this._s){case 0:return q;case -1:return a(this,-1);default:return e(this,1)}}})();b.prototype.compareAbs=function(a){if(this===a)return 0;if(!(a instanceof b)){if(!isFinite(a))return isNaN(a)?a:-1;a=b(a)}if(0===this._s)return 0!==a._s?-1:0;if(0===a._s)return 1;var c=this._d.length,d=a._d.length;if(c<d)return-1;if(c>d)return 1;d=this._d;a=a._d;for(c-=1;0<=c;c--)if(d[c]!==a[c])return d[c]<a[c]?-1:1;return 0};b.prototype.compare=function(a){if(this===
a)return 0;a=b(a);return 0===this._s?-a._s:this._s===a._s?this.compareAbs(a)*this._s:this._s};b.prototype.isUnit=function(){return this===k||this===q||1===this._d.length&&1===this._d[0]};b.prototype.multiply=function(a){if(0===this._s)return e;a=b(a);if(0===a._s)return e;if(this.isUnit())return 0>this._s?a.negate():a;if(a.isUnit())return 0>a._s?this.negate():this;if(this===a)return this.square();var l=this._d.length>=a._d.length,p=(l?this:a)._d,l=(l?a:this)._d,m=p.length,n=l.length,g=m+n,h=Array(g),
f;for(f=0;f<g;f++)h[f]=0;for(f=0;f<n;f++){for(var g=0,k=l[f],q=m+f,r,s=f;s<q;s++)r=h[s]+k*p[s-f]+g,g=r/d|0,h[s]=r%d|0;g&&(r=h[s]+g,h[s]=r%d)}return new b(h,this._s*a._s,c)};b.prototype.multiplySingleDigit=function(a){if(0===a||0===this._s)return e;if(1===a)return this;var l;if(1===this._d.length)return l=this._d[0]*a,l>=d?new b([l%d|0,l/d|0],1,c):new b([l],1,c);if(2===a)return this.add(this);if(this.isUnit())return new b([a],1,c);var p=this._d,m=p.length;l=m+1;for(var n=Array(l),g=0;g<l;g++)n[g]=
0;for(var h=g=0;h<m;h++)l=a*p[h]+g,g=l/d|0,n[h]=l%d|0;g&&(n[h]=g);return new b(n,1,c)};b.prototype.square=function(){if(0===this._s)return e;if(this.isUnit())return k;var a=this._d,l=a.length,p=Array(l+l+1),m,n,g,h;for(h=0;h<l;h++)g=2*h,m=a[h]*a[h],n=m/d|0,p[g]=m%d,p[g+1]=n;for(h=0;h<l;h++){n=0;g=2*h+1;for(var f=h+1;f<l;f++,g++)m=2*a[f]*a[h]+p[g]+n,n=m/d|0,p[g]=m%d;g=l+h;m=n+p[g];n=m/d|0;p[g]=m%d;p[g+1]+=n}return new b(p,1,c)};b.prototype.quotient=function(a){return this.divRem(a)[0]};b.prototype.divide=
b.prototype.quotient;b.prototype.remainder=function(a){return this.divRem(a)[1]};b.prototype.divRem=function(a){a=b(a);if(0===a._s)throw Error("Divide by zero");if(0===this._s)return[e,e];if(1===a._d.length)return this.divRemSmall(a._s*a._d[0]);switch(this.compareAbs(a)){case 0:return[this._s===a._s?k:q,e];case -1:return[e,this]}var l=this._s*a._s,p=a.abs(),m=this._d,n=m.length,g=[],h,f=new b([],0,c);for(f._s=1;n;)if(f._d.unshift(m[--n]),0>f.compareAbs(a))g.push(0);else{if(0===f._s)h=0;else{var r=
f._d.length;h=p._d.length;r=f._d[r-1]*d+f._d[r-2];h=p._d[h-1]*d+p._d[h-2];f._d.length>p._d.length&&(r=(r+1)*d);h=Math.ceil(r/h)}do{r=p.multiplySingleDigit(h);if(0>=r.compareAbs(f))break;h--}while(h);g.push(h);h&&(h=f.subtract(r),f._d=h._d.slice(),0===f._d.length&&(f._s=0))}return[new b(g.reverse(),l,c),new b(f._d,this._s,c)]};b.prototype.divRemSmall=function(a){a=+a;if(0===a)throw Error("Divide by zero");var l=this._s*(0>a?-1:1);a=Math.abs(a);if(1>a||a>=d)throw Error("Argument out of range");if(0===
this._s)return[e,e];if(1===a||-1===a)return[1===l?this.abs():new b(this._d,l,c),e];if(1===this._d.length){var p=new b([this._d[0]/a|0],1,c);a=new b([this._d[0]%a|0],1,c);0>l&&(p=p.negate());0>this._s&&(a=a.negate());return[p,a]}for(var m=this._d.slice(),p=Array(m.length),n=0,g=0,h=0,f;m.length;)n=n*d+m[m.length-1],n<a?(p[h++]=0,m.pop(),g=d*g+n):(f=0===n?0:n/a|0,g=n-a*f,(p[h++]=f)?(m.pop(),n=g):m.pop());a=new b([g],1,c);0>this._s&&(a=a.negate());return[new b(p.reverse(),l,c),a]};b.prototype.isEven=
function(){var a=this._d;return 0===this._s||0===a.length||0===a[0]%2};b.prototype.isOdd=function(){return!this.isEven()};b.prototype.sign=function(){return this._s};b.prototype.isPositive=function(){return 0<this._s};b.prototype.isNegative=function(){return 0>this._s};b.prototype.isZero=function(){return 0===this._s};b.prototype.exp10=function(a){a=+a;if(0===a)return this;if(Math.abs(a)>Number(r))throw Error("exponent too large in BigInteger.exp10");if(0<a){for(var d=new b(this._d.slice(),this._s,
c);7<=a;a-=7)d._d.unshift(0);if(0==a)return d;d._s=1;d=d.multiplySingleDigit(Math.pow(10,a));return 0>this._s?d.negate():d}if(-a>=7*this._d.length)return e;d=new b(this._d.slice(),this._s,c);for(a=-a;7<=a;a-=7)d._d.shift();return 0==a?d:d.divRemSmall(Math.pow(10,a))[0]};b.prototype.pow=function(a){if(this.isUnit())return 0<this._s?this:b(a).isOdd()?this:this.negate();a=b(a);if(0===a._s)return k;if(0>a._s){if(0===this._s)throw Error("Divide by zero");return e}if(0===this._s)return e;if(a.isUnit())return this;
if(0<a.compareAbs(r))throw Error("exponent too large in BigInteger.pow");for(var c=this,d=k,m=b.small[2];a.isPositive()&&(!a.isOdd()||!(d=d.multiply(c),a.isUnit()));)c=c.square(),a=a.quotient(m);return d};b.prototype.modPow=function(a,c){for(var d=k,e=this;a.isPositive();)a.isOdd()&&(d=d.multiply(e).remainder(c)),a=a.quotient(b.small[2]),a.isPositive()&&(e=e.square().remainder(c));return d};b.prototype.log=function(){switch(this._s){case 0:return-Infinity;case -1:return NaN}var a=this._d.length;if(30>
7*a)return Math.log(this.valueOf());var e=Math.ceil(30/7),k=this._d.slice(a-e);return Math.log((new b(k,1,c)).valueOf())+(a-e)*Math.log(d)};b.prototype.valueOf=function(){return parseInt(this.toString(),10)};b.prototype.toJSValue=function(){return parseInt(this.toString(),10)};var r=b(2147483647);b.MAX_EXP=r;(function(){function a(c){return function(a){return c.call(b(a))}}function c(a){return function(c,d){return a.call(b(c),b(d))}}function d(a){return function(c,d,e){return a.call(b(c),b(d),b(e))}}
(function(){var e,k,g="toJSValue isEven isOdd sign isZero isNegative abs isUnit square negate isPositive toString next prev log".split(" "),h="compare remainder divRem subtract add quotient divide multiply pow compareAbs".split(" "),f=["modPow"];for(e=0;e<g.length;e++)k=g[e],b[k]=a(b.prototype[k]);for(e=0;e<h.length;e++)k=h[e],b[k]=c(b.prototype[k]);for(e=0;e<f.length;e++)k=f[e],b[k]=d(b.prototype[k]);b.exp10=function(a,c){return b(a).exp10(c)}})()})();a.BigInteger=b})("undefined"!==typeof exports?
exports:this);var bigint={greatest_common_divisor:function(a,b){if(b.isUnit()||a.isUnit())return BigInteger.ONE;for(var c;!b.isZero();)c=b,b=a.remainder(b),a=c;return a},create:function(){return[0]},clone:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b},copy:function(a,b){a=[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c];return a},abs:function(a,b){a[0]=Math.abs(b[0]);return a},str:function(a){return a[0].toString()},toInteger:function(a){return out[0]},fromInteger:function(a){return[parseInt(a)]}},
BIGINT_ZERO=bigint.fromInteger(0),BIGINT_ONE=bigint.fromInteger(1);if(!RAT_ARRAY_TYPE)var RAT_ARRAY_TYPE=Array;if(!RAT_INFINITESIMAL_PRECISION)var RAT_INFINITESIMAL_PRECISION=Math.pow(2,56);if(!RAT_MAX_LOOPS)var RAT_MAX_LOOPS=16777216;
var rat={create:function(){var a=new RAT_ARRAY_TYPE(2);a[0]=0;a[1]=1;return a},clone:function(a){var b=new RAT_ARRAY_TYPE(2);b[0]=a[0];b[1]=a[1];return b},fromValues:function(a,b){var c=new RAT_ARRAY_TYPE(2);c[0]=a;c[1]=b;return rat.normalize(c,c)},copy:function(a,b){a[0]=b[0];a[1]=b[1];return a},set:function(a,b,c){a[0]=b;a[1]=c;return rat.normalize(a,a)},abs:function(a,b){a[0]=Math.abs(b[0]);a[1]=b[1];return a},invert:function(a,b){var c=b[0];a[0]=b[1];a[1]=c;return a}};rat.reciprocal=rat.invert;
rat.add=function(a,b,c){b[1]===c[1]?(a[0]=b[0]+c[0],a[1]=b[1]):(a[0]=b[0]*c[1]+c[0]*b[1],a[1]=b[1]*c[1]);return rat.normalize(a,a)};rat.subtract=function(a,b,c){b[1]===c[1]?(a[0]=b[0]-c[0],a[1]=b[1]):(a[0]=b[0]*c[1]-c[0]*b[1],a[1]=b[1]*c[1]);return rat.normalize(a,a)};rat.sub=rat.subtract;rat.multiply=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];return rat.normalize(a,a)};rat.mul=rat.multiply;rat.mediant=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];return rat.normalize(a,a)};
rat.divide=function(a,b,c){a[0]=b[0]*c[1];a[1]=b[1]*c[0];return rat.normalize(a,a)};rat.div=rat.divide;rat.equals=function(a,b){return 0===a[0]&&0===b[0]||0===a[1]&&0===b[1]?!0:a[0]===b[0]&&a[1]===b[1]};rat.approximates=function(a,b){if(rat.equals(a,b))return!0;var c=rat.create();rat.sub(c,a,b);rat.abs(c,c);return rat.isLessThan(c,rat.INFINITESIMAL)};rat.isGreaterThan=function(a,b){return rat.equals(a,b)?!1:a[0]*b[1]>b[0]*a[1]};
rat.isLessThan=function(a,b){return rat.equals(a,b)?!1:a[0]*b[1]<b[0]*a[1]};rat.isNegative=function(a){return 0>a[0]};rat.min=function(a,b,c){rat.isLessThan(b,c)?(a[0]=b[0],a[1]=b[1]):(a[0]=c[0],a[1]=c[1]);return a};rat.max=function(a,b,c){rat.isGreaterThan(b,c)?(a[0]=b[0],a[1]=b[1]):(a[0]=c[0],a[1]=c[1]);return a};rat.scalar_multiply=function(a,b,c){a[0]=b[0]*c;a[1]=b[1];return rat.normalize(a,a)};rat.scalar_divide=function(a,b,c){a[0]=b[0];a[1]=b[1]*c;return rat.normalize(a,a)};
rat.normalize=function(a,b){if(isNaN(b[0])||isNaN(b[1])||0===b[0]&&0===b[1])return a[0]=0,a[1]=0,a;if(0===b[0])return a[0]=0,a[1]=1,a;if(0===b[1])return a[0]=1,a[1]=0,a;if(b[0]===b[1])return a[0]=1,a[1]=1,a;0<b[1]?(a[0]=b[0],a[1]=b[1]):(a[0]=-b[0],a[1]=-b[1]);var c=integer.greatest_common_divisor(Math.abs(a[0]),a[1]);1<c&&(a[0]/=c,a[1]/=c);return a};rat.opposite=function(a,b){a[0]=-b[0];a[1]=b[1];return a};rat.neg=rat.negative=rat.opposite;
rat.power=function(a,b,c){2===c?(a[0]=b[0]*b[0],a[1]=b[1]*b[1]):0<c?(a[0]=Math.pow(b[0],c),a[1]=Math.pow(b[1],c)):0>c?(c=Math.abs(c),a[0]=Math.pow(b[1],c),a[1]=Math.pow(b[0],c)):rat.copy(a,rat.ONE);return rat.normalize(a,a)};rat.pow=rat.power;rat.sqrt=function(a,b){return rat.nthRoot(a,b,2)};
rat.nthRoot=function(a,b,c){if(rat.equals(b,rat.ZERO))return rat.copy(a,rat.ZERO);if(rat.equals(b,rat.ONE))return rat.copy(a,rat.ONE);if(rat.equals(b,rat.INFINITY))return rat.copy(a,rat.INFINITY);if(rat.equals(b,rat.INFINULL))return rat.copy(a,rat.INFINULL);var d=rat.isNegative(b);d&&(b[0]=-b[0]);a=rat.copy(a,rat.ONE);for(var e=[1,0,0,1],k=rat.clone(rat.ONE),q=RAT_MAX_LOOPS;!rat.approximates(b,k)&&q--;)rat.isLessThan(b,k)?(e[0]+=e[1],e[2]+=e[3]):(e[1]+=e[0],e[3]+=e[2]),a[0]=e[0]+e[1],a[1]=e[2]+e[3],
rat.pow(k,a,c);d&&(b[0]=-b[0],1===c%2&&rat.neg(a,a));return a};rat.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]};rat.str=function(a){return 1===a[1]?a[0]:a[0]+"/"+a[1]};rat.toDecimal=function(a){return a[0]/a[1]};rat.dec=rat.toDecimal;rat.toInteger=function(a){return Math.round(rat.toDecimal(a))};rat.round=rat.toInteger;rat.floor=function(a){return Math.floor(rat.toDecimal(a))};rat.ceil=function(a){return Math.ceil(rat.toDecimal(a))};rat.fromInteger_copy=function(a,b){a[0]=parseInt(b);a[1]=1;return a};
rat.fromInteger=function(a){return rat.fromInteger_copy(rat.create(),a)};rat.fromIntegerInverse_copy=function(a,b){a[0]=1;a[1]=parseInt(b);0>a[1]&&(a[0]=-a[0],a[1]=-a[1]);return a};rat.fromIntegerInverse=function(a){return rat.fromIntegerInverse_copy(rat.create(),a)};rat.fromDecimal=function(a){return rat.fromDecimal_copy(rat.create(),a)};
rat.fromDecimal_copy=function(a,b){b=parseFloat(b);if(0===b)return rat.copy(a,rat.ZERO);if(1===b)return rat.copy(a,rat.ONE);if(Infinity===b)return rat.copy(a,rat.INFINITY);if(isNaN(b))return rat.copy(a,rat.INFINULL);if(0===b%1)return rat.fromInteger_copy(a,b);if(0===1/b%1)return rat.fromIntegerInverse_copy(a,parseInt(1/b));a[0]=1;a[1]=1;var c=0>b;c&&(b=Math.abs(b));for(var d=[1,0,0,1],e=b,k=RAT_MAX_LOOPS;a[0]!==e&&k--;)a[0]>e?(d[0]+=d[1],d[2]+=d[3]):(d[1]+=d[0],d[3]+=d[2]),a[0]=d[0]+d[1],a[1]=d[2]+
d[3],e=b*a[1];c&&rat.neg(a,a);return a};rat.fromRandom=function(a){a[0]=2147483648-Math.floor(4294967296*Math.random()+1);a[1]=Math.floor(4294967296*Math.random()+1);return rat.normalize(a,a)};rat.sin=function(a,b){if(0===b[1])return rat.copy(a,rat.ZERO);rat.scalar_multiply(a,b,2);var c=rat.create();rat.pow(c,b,2);rat.add(c,c,rat.ONE);rat.divide(a,a,c);return a};
rat.cos=function(a,b){if(0===b[1])return rat.neg(a,rat.ONE);var c=rat.create();rat.pow(c,b,2);rat.sub(a,rat.ONE,c);var d=rat.create();rat.add(d,rat.ONE,c);rat.divide(a,a,d);return a};rat.tan=function(a,b){rat.scalar_multiply(a,b,2);var c=rat.create();rat.pow(c,b,2);rat.scalar_multiply(c,c,2);rat.add(a,a,c);rat.pow(c,b,4);rat.sub(c,rat.ONE,c);rat.divide(a,a,c);return a};
rat.toEgyptian=function(a){a=rat.clone(a);rat.abs(a,a);var b=rat.floor(a);b&&rat.sub(a,a,rat.fromInteger(b));if(!a[0])return b.toString();b||(b="");for(var c=1,d=rat.create();1!==a[0];)c++,d=rat.fromValues(1,c),rat.isGreaterThan(a,d)&&(b&&(b+=" + "),b+=rat.str(d),rat.sub(a,a,d));return!a?!b?"0":b:b?b+" + "+rat.str(a):rat.str(a)};
rat.toBabylonian=function(a){var b="",c=rat.toDecimal(a);a=parseInt(c);for(var c=c-a,d=0,e=0;0<a;)(d=a%60)&&(b=d+" * 60^"+e+(b?" + ":"")+b),a=(a-d)/60,e++;for(e=-1;0<c;)c*=60,d=parseInt(c+1E-13),c-=d,-1E-13>c||(d&&(b+=(b?" + ":"")+d+" * 60^"+e),e--);return b?b:"0"};
rat.traceSternBrocot=function(a){var b="";if(rat.equals(a,rat.ZERO)||rat.equals(a,rat.ONE)||rat.equals(a,rat.INFINITY)||rat.equals(a,rat.INFINULL))return b;if(rat.equals(a,rat.ZERO))return rat.copy(out,rat.ZERO);if(rat.equals(a,rat.ONE))return rat.copy(out,rat.ONE);if(rat.equals(a,rat.INFINITY))return rat.copy(out,rat.INFINITY);if(rat.equals(a,rat.INFINULL))return rat.copy(out,rat.INFINULL);var c=rat.isNegative(a);c&&(a[0]=-a[0]);for(var d=rat.clone(rat.ONE),e=[1,0,0,1],k=0,q=0,r=RAT_MAX_LOOPS;!rat.approximates(a,
d)&&r--;)rat.isLessThan(a,d)?(e[0]+=e[1],e[2]+=e[3],q++,k&&(b+="R",1!==k&&(b+=k),k=0,b+=" ")):(e[1]+=e[0],e[3]+=e[2],k++,q&&(b+="L",1!==q&&(b+=q),q=0,b+=" ")),d[0]=e[0]+e[1],d[1]=e[2]+e[3];q?(b+="L",1!==q&&(b+=q)):k&&(b+="R",1!==k&&(b+=k));0>r&&(b+="...");c&&(a[0]=-a[0]);return b};rat.dump=function(a){rat.create();return"rat\t"+rat.str(a)+"\n~\t"+rat.toDecimal(a)+"\nSB:\t"+rat.traceSternBrocot(a)+"\n"};rat.ZERO=rat.fromInteger(0);rat.ONE=rat.fromInteger(1);rat.NEGONE=rat.fromInteger(-1);
rat.INFINITY=rat.fromValues(1,0);rat.INFINULL=rat.fromValues(0,0);rat.INFINITESIMAL=rat.clone([1,RAT_INFINITESIMAL_PRECISION]);rat.PI=rat.fromValues(1320192667429,420230377710);if(!BIGRAT_INFINITESIMAL_PRECISION)var BIGRAT_INFINITESIMAL_PRECISION=new BigInteger("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
var bigrat={create:function(){var a=[];a[0]=BigInteger.ZERO;a[1]=BigInteger.ONE;return a},clone:function(a){var b=[];b[0]=a[0];b[1]=a[1];return b},fromValues:function(a,b){var c=[];c[0]=new BigInteger(a);c[1]=new BigInteger(b);return bigrat.normalize(c,c)},copy:function(a,b){a[0]=b[0];a[1]=b[1];return a},set:function(a,b,c){a[0]=b;a[1]=c;return bigrat.normalize(a,a)},abs:function(a,b){a[0]=b[0].abs();a[1]=b[1];return a},invert:function(a,b){var c=b[0];a[0]=b[1];a[1]=c;return a}};
bigrat.reciprocal=bigrat.invert;bigrat.add=function(a,b,c){0===b[1].compare(c[1])?(a[0]=b[0].add(c[0]),a[1]=b[1]):(a[0]=b[0].multiply(c[1]).add(c[0].multiply(b[1])),a[1]=b[1].multiply(c[1]));return bigrat.normalize(a,a)};bigrat.subtract=function(a,b,c){0===b[1].compare(c[1])?(a[0]=b[0].subtract(c[0]),a[1]=b[1]):(a[0]=b[0].multiply(c[1]).subtract(c[0].multiply(b[1])),a[1]=b[1].multiply(c[1]));return bigrat.normalize(a,a)};bigrat.sub=bigrat.subtract;
bigrat.multiply=function(a,b,c){a[0]=b[0].multiply(c[0]);a[1]=b[1].multiply(c[1]);return bigrat.normalize(a,a)};bigrat.mul=bigrat.multiply;bigrat.mediant=function(a,b,c){a[0]=b[0].add(c[0]);a[1]=b[1].add(c[1]);return bigrat.normalize(a,a)};bigrat.divide=function(a,b,c){a[0]=b[0].multiply(c[1]);a[1]=b[1].multiply(c[0]);return bigrat.normalize(a,a)};bigrat.div=bigrat.divide;bigrat.equals=function(a,b){return a[0].isZero()&&b[0].isZero()||a[1].isZero()&&b[1].isZero()?!0:0===a[0].compare(b[0])&&0===a[1].compare(b[1])};
bigrat.approximates=function(a,b){if(bigrat.equals(a,b))return!0;var c=bigrat.create();bigrat.sub(c,a,b);bigrat.abs(c,c);return bigrat.isLessThan(c,bigrat.INFINITESIMAL)};bigrat.isGreaterThan=function(a,b){return bigrat.equals(a,b)?!1:0<a[0].multiply(b[1]).compare(b[0].multiply(a[1]))};bigrat.isLessThan=function(a,b){return bigrat.equals(a,b)?!1:0>a[0].multiply(b[1]).compare(b[0].multiply(a[1]))};bigrat.isNegative=function(a){return a[0].isNegative()};
bigrat.min=function(a,b,c){bigrat.isLessThan(b,c)?(a[0]=b[0],a[1]=b[1]):(a[0]=c[0],a[1]=c[1]);return a};bigrat.max=function(a,b,c){bigrat.isGreaterThan(b,c)?(a[0]=b[0],a[1]=b[1]):(a[0]=c[0],a[1]=c[1]);return a};bigrat.scalar_multiply=function(a,b,c){a[0]=b[0].multiply(c);a[1]=b[1];return bigrat.normalize(a,a)};bigrat.scalar_divide=function(a,b,c){a[0]=b[0];a[1]=b[1].multiply(c);return bigrat.normalize(a,a)};
bigrat.normalize=function(a,b){if(b[0].isZero()||b[1].isZero())return b;if(0===b[0].compare(b[1]))return bigrat.clone(bigrat.ONE);if(b[1].isNegative())a[0]=b[0].negate(),a[1]=b[1].negate();else if(a[0]=b[0],a[1]=b[1],a[1].isZero())return a;var c=bigint.greatest_common_divisor(a[0].abs(),a[1]);0<c.compare(BigInteger.ONE)&&(a[0]=a[0].quotient(c),a[1]=a[1].quotient(c));return a};bigrat.opposite=function(a,b){a[0]=b[0].negate();a[1]=b[1];return a};bigrat.neg=bigrat.negative=bigrat.opposite;
bigrat.power=function(a,b,c){2===c?(a[0]=b[0].square(),a[1]=b[1].square()):0<c?(a[0]=b[0].pow(c),a[1]=b[1].pow(c)):0>c?(c=c.abs(),a[0]=b[1].pow(c),a[1]=b[0].pow(c)):bigrat.copy(a,bigrat.ONE);return a};bigrat.pow=bigrat.power;bigrat.sqrt=function(a,b){return bigrat.nthRoot(a,b,2)};
bigrat.nthRoot=function(a,b,c){if(bigrat.equals(b,bigrat.ZERO))return bigrat.copy(a,bigrat.ZERO);if(bigrat.equals(b,bigrat.ONE))return bigrat.copy(a,bigrat.ONE);if(bigrat.equals(b,bigrat.INFINITY))return bigrat.copy(a,bigrat.INFINITY);if(bigrat.equals(b,bigrat.INFINULL))return bigrat.copy(a,bigrat.INFINULL);var d=bigrat.isNegative(b);d&&(b[0]=b[0].negate());bigrat.copy(a,bigrat.ONE);for(var e=[BigInteger(1),BigInteger(0),BigInteger(0),BigInteger(1)],k=bigrat.clone(bigrat.ONE),q=RAT_MAX_LOOPS;!bigrat.approximates(b,
k)&&q--;)bigrat.isLessThan(b,k)?(e[0]=e[0].add(e[1]),e[2]=e[2].add(e[3])):(e[1]=e[1].add(e[0]),e[3]=e[3].add(e[2])),a[0]=e[0].add(e[1]),a[1]=e[2].add(e[3]),bigrat.pow(k,a,c);d&&(b[0]=b[0].negate(),1===c%2&&bigrat.neg(a,a));return a};bigrat.dot=function(a,b){return a[0].multiply(b[0]).add(a[1].multiply(b[1]))};bigrat.str=function(a){return 0===a[1].compare(BigInteger.ONE)?a[0].toString():a[0].toString()+"/"+a[1].toString()};bigrat.toDecimal=function(a){return a[0].toJSValue()/a[1].toJSValue()};
bigrat.dec=bigrat.toDecimal;bigrat.toInteger=function(a){return a[0].quotient(a[1]).toJSValue()};bigrat.round=bigrat.toInteger;bigrat.toBigInteger=function(a){return a[0].quotient(a[1])};bigrat.floor=function(a){return Math.floor(bigrat.toDecimal(a))};bigrat.ceil=function(a){return Math.ceil(bigrat.toDecimal(a))};bigrat.fromInteger_copy=function(a,b){a[0]=BigInteger(parseInt(b));a[1]=BigInteger.ONE;return a};bigrat.fromInteger=function(a){return bigrat.fromInteger_copy(bigrat.create(),a)};
bigrat.fromIntegerInverse_copy=function(a,b){a[0]=BigInteger.ONE;a[1]=BigInteger(parseInt(b));a[1].isNegative()&&(a[0]=a[0].negate(),a[1]=a[1].negate());return a};bigrat.fromIntegerInverse=function(a){return bigrat.fromIntegerInverse_copy(bigrat.create(),a)};bigrat.fromDecimal=function(a){return bigrat.fromDecimal_copy(bigrat.create(),a)};
bigrat.fromDecimal_copy=function(a,b){b=parseFloat(b);if(0===b)return bigrat.copy(a,bigrat.ZERO);if(1===b)return bigrat.copy(a,bigrat.ONE);if(Infinity===b)return bigrat.copy(a,bigrat.INFINITY);if(isNaN(b))return bigrat.copy(a,bigrat.INFINULL);if(0===b%1)return bigrat.fromInteger_copy(a,b);if(0===1/b%1)return bigrat.fromIntegerInverse_copy(a,parseInt(1/b));bigrat.copy(a,bigrat.ONE);for(var c=[BigInteger(1),BigInteger(0),BigInteger(0),BigInteger(1)],d=b,e=RAT_MAX_LOOPS;a[0].valueOf()!==d&&e--;)a[0].valueOf()>
d?(c[0]=c[0].add(c[1]),c[2]=c[2].add(c[3])):(c[1]=c[1].add(c[0]),c[3]=c[3].add(c[2])),a[0]=c[0].add(c[1]),a[1]=c[2].add(c[3]),d=a[1].valueOf()*b;return a};bigrat.fromRandom=function(a){a[0]=BigInteger(2147483648-Math.floor(4294967296*Math.random()+1));a[1]=BigInteger(Math.floor(4294967296*Math.random()+1));return bigrat.normalize(a,a)};
bigrat.sin=function(a,b){if(b[1].isZero())return bigrat.copy(a,bigrat.ZERO);bigrat.scalar_multiply(a,b,2);var c=bigrat.create();bigrat.pow(c,b,2);bigrat.add(c,c,bigrat.ONE);bigrat.divide(a,a,c);return a};bigrat.cos=function(a,b){if(b[1].isZero())return bigrat.neg(a,bigrat.ONE);var c=bigrat.create();bigrat.pow(c,b,2);bigrat.sub(a,bigrat.ONE,c);var d=bigrat.create();bigrat.add(d,bigrat.ONE,c);bigrat.divide(a,a,d);return a};
bigrat.tan=function(a,b){bigrat.scalar_multiply(a,b,2);var c=bigrat.create();bigrat.pow(c,b,2);bigrat.scalar_multiply(c,c,2);bigrat.add(a,a,c);bigrat.pow(c,b,4);bigrat.sub(c,bigrat.ONE,c);bigrat.divide(a,a,c);return a};
bigrat.toEgyptian=function(a){a=bigrat.clone(a);bigrat.abs(a,a);var b=bigrat.floor(a);b&&bigrat.sub(a,a,bigrat.fromInteger(b));if(!a[0])return b.toString();b||(b="");for(var c=1,d=bigrat.create();1!==a[0];)c++,d=bigrat.fromValues(1,c),bigrat.isGreaterThan(a,d)&&(b&&(b+=" + "),b+=bigrat.str(d),bigrat.sub(a,a,d));return!a?!b?"0":b:b?b+" + "+bigrat.str(a):bigrat.str(a)};
bigrat.toBabylonian=function(a){var b="",c=bigrat.toDecimal(a);a=parseInt(c);for(var c=c-a,d=0,e=0;0<a;)(d=a%60)&&(b=d+" * 60^"+e+(b?" + ":"")+b),a=(a-d)/60,e++;for(e=-1;0<c;)c*=60,d=parseInt(c+1E-13),c-=d,-1E-13>c||(d&&(b+=(b?" + ":"")+d+" * 60^"+e),e--);return b?b:"0"};
bigrat.traceSternBrocot=function(a){var b="";if(bigrat.equals(a,bigrat.ZERO)||bigrat.equals(a,bigrat.ONE)||bigrat.equals(a,bigrat.INFINITY)||bigrat.equals(a,bigrat.INFINULL))return b;if(bigrat.equals(a,bigrat.ZERO))return bigrat.copy(out,bigrat.ZERO);if(bigrat.equals(a,bigrat.ONE))return bigrat.copy(out,bigrat.ONE);if(bigrat.equals(a,bigrat.INFINITY))return bigrat.copy(out,bigrat.INFINITY);if(bigrat.equals(a,bigrat.INFINULL))return bigrat.copy(out,bigrat.INFINULL);var c=bigrat.isNegative(a);c&&(a[0]=
a[0].negate());for(var d=bigrat.clone(bigrat.ONE),e=[BigInteger(1),BigInteger(0),BigInteger(0),BigInteger(1)],k=0,q=0,r=65536;!bigrat.equals(a,d)&&r--;)bigrat.isLessThan(a,d)?(e[0]=e[0].add(e[1]),e[2]=e[2].add(e[3]),q++,k&&(b+="R",1!==k&&(b+=k),k=0,b+=" ")):(e[1]=e[1].add(e[0]),e[3]=e[3].add(e[2]),k++,q&&(b+="L",1!==q&&(b+=q),q=0,b+=" ")),d[0]=e[0].add(e[1]),d[1]=e[2].add(e[3]);q?(b+="L",1!==q&&(b+=q)):k&&(b+="R",1!==k&&(b+=k));0>r&&(b+="...");c&&(a[0]=a[0].negate());return b};
bigrat.dump=function(a){bigrat.create();return"bigrat\t"+bigrat.str(a)+"\n~\t"+bigrat.toDecimal(a)+"\nSB:\t"+bigrat.traceSternBrocot(a)+"\n"};bigrat.ZERO=bigrat.fromInteger(0);bigrat.ONE=bigrat.fromInteger(1);bigrat.NEGONE=bigrat.fromInteger(-1);bigrat.INFINITY=bigrat.fromValues(1,0);bigrat.INFINULL=bigrat.fromValues(0,0);bigrat.INFINITESIMAL=bigrat.clone([new BigInteger(1),BIGRAT_INFINITESIMAL_PRECISION]);
bigrat.PI=bigrat.fromValues("3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587","1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");var rational=function(a,b){this.a=rat.fromValues(parseInt(a),parseInt(b))};rational.prototype.toString=function(){return rat.str(this.a)};rational.prototype.invert=function(){return rat.invert(this.a)};rational.prototype.reciprocal=rational.prototype.invert;rational.prototype.add=function(a){var b=rat.create();rat.add(b,this.a,a.a);return new rational(b[0],b[1])};rational.prototype.plus=rational.prototype.add;
rational.prototype.subtract=function(a){var b=rat.create();rat.sub(b,this.a,a.a);return new rational(b[0],b[1])};rational.prototype.sub=rational.prototype.subtract;rational.prototype.minus=rational.prototype.subtract;rational.prototype.multiply=function(a){var b=rat.create();rat.mul(b,this.a,a.a);return new rational(b[0],b[1])};rational.prototype.mul=rational.prototype.multiply;rational.prototype.times=rational.prototype.multiply;
rational.prototype.mediant=function(a){var b=rat.create();rat.mediant(b,this.a,a.a);return new rational(b[0],b[1])};rational.prototype.divide=function(a){var b=rat.create();rat.div(b,this.a,a.a);return new rational(b[0],b[1])};rational.prototype.div=rational.prototype.divide;rational.prototype.divided_by=rational.prototype.divide;rational.prototype.power=function(a){var b=rat.create();rat.pow(b,this.a,a);return new rational(b[0],b[1])};rational.prototype.pow=rational.prototype.power;
rational.prototype.dump=function(){return rat.dump(this.a)};rational.fromRat=function(a){var b=new rational;b.a[0]=a[0];b.a[1]=a[1];return b};rational.prototype.fromInteger=function(a){return rational.fromRat(rat.fromInteger(a))};rational.prototype.fromIntegerInverse=function(a){return rational.fromRat(rat.fromIntegerInverse(a))};rational.fromDecimal=function(a){return rational.fromRat(rat.fromDecimal(a))};var physics={};physics.FINESTRUCTURE=bigrat.fromValues(100478167,13769126E3);physics.A=physics.FINESTRUCTURE;physics.PLANK=bigrat.fromValues(662606957,1E42);physics.H=physics.PLANK;physics.HBAR=bigrat.fromValues(1054571726,1E43);var RAT_ZERO=rat.ZERO,RAT_ONE=rat.ONE,RAT_INFINITY=rat.INFINITY,RAT_INFINULL=rat.INFINULL,RAT_INFINITESIMAL=rat.INFINITESIMAL;
